import type { AIProvider, AIRequest, AIResponse, CostEstimate } from "./types";

export class MockProvider implements AIProvider {
  async sendMessage(params: AIRequest): Promise<AIResponse> {
    const start = Date.now();
    await new Promise<void>((r) => setTimeout(r, 50));
    return {
      content: `[MOCK RESPONSE] Skill activated. User asked: "${params.userMessage.slice(0, 100)}..."`,
      inputTokens: 100,
      outputTokens: 50,
      cachedTokens: 80,
      model: params.model,
      latencyMs: Date.now() - start,
    };
  }

  async *streamMessage(params: AIRequest): AsyncIterable<string> {
    yield "[MOCK STREAM] ";
    yield `Response to: ${params.userMessage.slice(0, 50)}`;
  }

  estimateCost(_params: AIRequest): CostEstimate {
    return { estimatedCostUsd: 0.001, estimatedTokens: 150 };
  }

  async healthCheck(): Promise<boolean> {
    return true;
  }
}
