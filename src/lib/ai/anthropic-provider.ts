import Anthropic from "@anthropic-ai/sdk";
import type { AIProvider, AIRequest, AIResponse, CostEstimate } from "./types";

const COST_PER_MTK = {
  "claude-haiku-4-5-20251001": { input: 1.0, output: 5.0, cacheRead: 0.1 },
  "claude-sonnet-4-5": { input: 3.0, output: 15.0, cacheRead: 0.3 },
} as const;

export class AnthropicProvider implements AIProvider {
  private client: Anthropic;

  constructor() {
    this.client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }

  async sendMessage(params: AIRequest): Promise<AIResponse> {
    const start = Date.now();

    const response = await this.client.messages.create({
      model: params.model,
      max_tokens: params.maxTokens ?? 4096,
      system: [
        {
          type: "text",
          text: params.systemPrompt,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: params.userMessage }],
    });

    const content = response.content[0];
    if (!content || content.type !== "text") throw new Error("Unexpected response type");

    const usage = response.usage as {
      input_tokens: number;
      output_tokens: number;
      cache_read_input_tokens?: number;
    };

    return {
      content: content.text,
      inputTokens: usage.input_tokens,
      outputTokens: usage.output_tokens,
      cachedTokens: usage.cache_read_input_tokens ?? 0,
      model: params.model,
      latencyMs: Date.now() - start,
    };
  }

  async *streamMessage(params: AIRequest): AsyncIterable<string> {
    const stream = this.client.messages.stream({
      model: params.model,
      max_tokens: params.maxTokens ?? 4096,
      system: params.systemPrompt,
      messages: [{ role: "user", content: params.userMessage }],
    });

    for await (const chunk of stream) {
      if (
        chunk.type === "content_block_delta" &&
        chunk.delta.type === "text_delta"
      ) {
        yield chunk.delta.text;
      }
    }
  }

  estimateCost(params: AIRequest): CostEstimate {
    const rates = COST_PER_MTK[params.model];
    const estimatedInput = (params.systemPrompt.length + params.userMessage.length) / 4;
    const estimatedOutput = (params.maxTokens ?? 1000) * 0.5;
    const cost =
      (estimatedInput * rates.input + estimatedOutput * rates.output) / 1_000_000;
    return { estimatedCostUsd: cost, estimatedTokens: estimatedInput + estimatedOutput };
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 10,
        messages: [{ role: "user", content: "ping" }],
      });
      return true;
    } catch {
      return false;
    }
  }
}
