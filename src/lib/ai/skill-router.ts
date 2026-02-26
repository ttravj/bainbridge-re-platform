import type { SkillName, SkillRoute } from "./types";

type Intent =
  | "commission" | "buyer_representation" | "listing" | "transaction"
  | "negotiation" | "offer" | "cma" | "financial" | "lead_generation"
  | "referral" | "business_planning" | "marketing" | "client_communication"
  | "compliance" | "fair_housing" | "wire_fraud" | "market_analysis"
  | "property_knowledge" | "inspection" | "mortgage" | "crm_tech"
  | "vendor" | "brokerage" | "team" | "training" | "general";

const ROUTING_TABLE: Record<Intent, SkillRoute> = {
  commission: { skills: ["commission-strategy", "value-proposition-builder"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  buyer_representation: { skills: ["buyer-representation", "commission-strategy"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  listing: { skills: ["listing-services", "commission-strategy"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  transaction: { skills: ["transaction-coordinator", "cybersecurity-wire-fraud"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  negotiation: { skills: ["negotiation-strategy", "offer-writer"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  offer: { skills: ["offer-writer", "negotiation-strategy"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  cma: { skills: ["cma-generator", "market-analysis"], model: "claude-sonnet-4-5", maxTokens: 8192 },
  financial: { skills: ["financial-performance", "business-planner"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  lead_generation: { skills: ["lead-generation", "referral-systems"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  referral: { skills: ["referral-systems", "client-communication"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  business_planning: { skills: ["business-planner", "financial-performance"], model: "claude-sonnet-4-5", maxTokens: 8192 },
  marketing: { skills: ["listing-launch-engine", "fair-housing-compliance"], model: "claude-sonnet-4-5", maxTokens: 8192 },
  client_communication: { skills: ["client-communication", "transaction-coordinator"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  compliance: { skills: ["compliance-navigator", "fair-housing-compliance"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  fair_housing: { skills: ["fair-housing-compliance", "compliance-navigator"], model: "claude-sonnet-4-5", maxTokens: 2048 },
  wire_fraud: { skills: ["cybersecurity-wire-fraud", "transaction-coordinator"], model: "claude-sonnet-4-5", maxTokens: 2048 },
  market_analysis: { skills: ["market-analysis", "cma-generator"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  property_knowledge: { skills: ["property-knowledge", "estimate-analyzer"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  inspection: { skills: ["estimate-analyzer", "negotiation-strategy"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  mortgage: { skills: ["mortgage-financing-guide", "buyer-representation"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  crm_tech: { skills: ["crm-tech-advisor"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  vendor: { skills: ["vendor-partner-manager", "compliance-navigator"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
  brokerage: { skills: ["brokerage-evaluator", "financial-performance"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  team: { skills: ["team-management", "financial-performance"], model: "claude-sonnet-4-5", maxTokens: 4096 },
  training: { skills: ["onboarding-training", "compliance-navigator"], model: "claude-haiku-4-5-20251001", maxTokens: 4096 },
  general: { skills: ["commission-strategy"], model: "claude-haiku-4-5-20251001", maxTokens: 2048 },
};

const INTENT_KEYWORDS: Record<Intent, string[]> = {
  commission: ["commission", "fee", "split", "nar settlement", "compensation", "what to charge", "buyer agreement"],
  buyer_representation: ["buyer", "buyer rep", "buyer consultation", "showing", "buyer agreement"],
  listing: ["listing", "seller", "list a home", "list price", "listing appointment", "pre-listing"],
  transaction: ["transaction", "contract", "closing", "deadline", "escrow", "contingency", "earnest money"],
  negotiation: ["negotiate", "counter", "negotiation", "counter offer", "pushback"],
  offer: ["offer", "write an offer", "offer letter", "escalation clause", "multiple offers"],
  cma: ["cma", "comparative market", "comps", "price this home", "market analysis", "what's it worth"],
  financial: ["income", "taxes", "gci", "take home", "expenses", "tax", "s-corp", "llc", "quarterly"],
  lead_generation: ["leads", "lead gen", "fsbo", "expired", "farming", "prospecting", "pipeline"],
  referral: ["referral", "past client", "soi", "sphere of influence", "repeat business", "stay in touch"],
  business_planning: ["business plan", "goals", "time block", "productivity", "schedule", "kpi", "annual plan"],
  marketing: ["marketing", "social media", "listing description", "content", "instagram", "email campaign"],
  client_communication: ["email to client", "text client", "update client", "how do i tell", "what do i say"],
  compliance: ["compliance", "legal", "fiduciary", "disclosure", "respa", "code of ethics", "mls rules"],
  fair_housing: ["fair housing", "discrimination", "protected class", "steering", "advertising rules"],
  wire_fraud: ["wire fraud", "wiring instructions", "bec", "email compromise", "hacked", "phishing"],
  market_analysis: ["market conditions", "absorption rate", "days on market", "inventory", "market report"],
  property_knowledge: ["home systems", "roof", "hvac", "foundation", "inspection report", "red flags"],
  inspection: ["inspection", "repair request", "inspection findings", "what to ask for", "inspection response"],
  mortgage: ["mortgage", "loan", "fha", "va loan", "conventional", "down payment", "dpa", "rate"],
  crm_tech: ["crm", "follow up boss", "kvcore", "lofty", "technology", "tools", "software"],
  vendor: ["vendor", "inspector", "photographer", "stager", "referral partner", "lender"],
  brokerage: ["brokerage", "which brokerage", "switch brokerages", "exp", "keller williams", "compass"],
  team: ["team", "hire", "isa", "transaction coordinator", "buyer's agent", "team leader"],
  training: ["training", "onboarding", "new agent", "niche", "luxury", "va", "seniors"],
  general: [],
};

// Priority-ordered intent matching — more specific intents checked before broader ones
const INTENT_PRIORITY: Intent[] = [
  "wire_fraud",
  "fair_housing",
  "inspection",
  "cma",
  "buyer_representation",
  "commission",
  "listing",
  "transaction",
  "negotiation",
  "offer",
  "financial",
  "lead_generation",
  "referral",
  "business_planning",
  "marketing",
  "client_communication",
  "compliance",
  "market_analysis",
  "property_knowledge",
  "mortgage",
  "crm_tech",
  "vendor",
  "brokerage",
  "team",
  "training",
  "general",
];

export function routeIntent(userMessage: string): SkillRoute {
  const lower = userMessage.toLowerCase();

  for (const intent of INTENT_PRIORITY) {
    if (intent === "general") continue;
    const keywords = INTENT_KEYWORDS[intent] ?? [];
    if (keywords.some((kw) => lower.includes(kw))) {
      return ROUTING_TABLE[intent]!;
    }
  }

  return ROUTING_TABLE.general;
}

export function getRouteForSkill(skill: SkillName): SkillRoute {
  for (const route of Object.values(ROUTING_TABLE)) {
    if ((route.skills as SkillName[]).includes(skill)) return route;
  }
  return ROUTING_TABLE.general;
}
