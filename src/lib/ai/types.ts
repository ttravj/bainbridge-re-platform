export type AIModel = "claude-haiku-4-5-20251001" | "claude-sonnet-4-5";

export interface AIRequest {
  systemPrompt: string;
  userMessage: string;
  model: AIModel;
  maxTokens?: number;
  stream?: boolean;
}

export interface AIResponse {
  content: string;
  inputTokens: number;
  outputTokens: number;
  cachedTokens: number;
  model: AIModel;
  latencyMs: number;
}

export interface CostEstimate {
  estimatedCostUsd: number;
  estimatedTokens: number;
}

export interface AIProvider {
  sendMessage(params: AIRequest): Promise<AIResponse>;
  streamMessage(params: AIRequest): AsyncIterable<string>;
  estimateCost(params: AIRequest): CostEstimate;
  healthCheck(): Promise<boolean>;
}

export interface LoadedSkill {
  name: string;
  description: string;
  content: string; // full SKILL.md content
  references: Record<string, string>; // filename → content
}

export type SkillName =
  | "commission-strategy"
  | "buyer-representation"
  | "value-proposition-builder"
  | "financial-performance"
  | "listing-services"
  | "transaction-coordinator"
  | "negotiation-strategy"
  | "offer-writer"
  | "cma-generator"
  | "lead-generation"
  | "referral-systems"
  | "business-planner"
  | "listing-launch-engine"
  | "client-communication"
  | "compliance-navigator"
  | "fair-housing-compliance"
  | "cybersecurity-wire-fraud"
  | "market-analysis"
  | "property-knowledge"
  | "estimate-analyzer"
  | "mortgage-financing-guide"
  | "crm-tech-advisor"
  | "vendor-partner-manager"
  | "brokerage-evaluator"
  | "team-management"
  | "onboarding-training";

export interface SkillRoute {
  skills: SkillName[];
  model: AIModel;
  maxTokens: number;
}
