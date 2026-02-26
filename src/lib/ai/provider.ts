import type { AIProvider } from "./types";

let _provider: AIProvider | null = null;

export function getAIProvider(): AIProvider {
  if (_provider) return _provider;

  if (process.env.NODE_ENV === "test" || process.env.AI_PROVIDER === "mock") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { MockProvider } = require("./mock-provider") as { MockProvider: new () => AIProvider };
    _provider = new MockProvider();
  } else {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { AnthropicProvider } = require("./anthropic-provider") as { AnthropicProvider: new () => AIProvider };
    _provider = new AnthropicProvider();
  }
  return _provider!;
}

export function resetProvider() {
  _provider = null; // for testing
}
