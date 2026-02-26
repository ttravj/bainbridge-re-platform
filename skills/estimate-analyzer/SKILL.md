---
name: estimate-analyzer
description: "Home inspection report analysis and repair negotiation. Triggers on inspection findings, repair requests, inspection response, severity assessment, structural vs cosmetic, credit vs repair, draft repair request, what to fix vs ignore. Also: 'the inspection found', 'should we ask for repairs', 'how do I respond to inspection', 'buyer wants to cancel after inspection', 'is this serious', 'which items matter', 'what to fix vs ignore', inspection objection, inspection credit."
---

# Estimate Analyzer

The inspection report analysis and repair negotiation skill for residential real estate agents. Home inspections generate 20-80 page reports listing dozens of findings -- and most agents either panic their clients by treating every item as a crisis, or lose money by ignoring items that matter. This skill reads inspection findings, categorizes them by severity, quantifies repair costs, drafts prioritized repair requests or credit requests, and advises on negotiation strategy. It is the analytical engine that sits between receiving the inspection report and sending the repair request -- turning a wall of findings into a clear, prioritized, defensible document. For underlying property and systems knowledge, see the `property-knowledge` skill. For broader negotiation tactics, see the `negotiation-strategy` skill.

## Core Principles

1. **Triage ruthlessly.** Not every inspection finding is a negotiation item. The single biggest mistake agents make is submitting a 25-item repair request that includes cosmetic issues alongside legitimate safety concerns. This signals inexperience, irritates the seller, and dilutes the impact of the items that actually matter. Separate findings into three tiers -- safety/structural, functional, and cosmetic/maintenance -- and only negotiate on the first two.
2. **Dollars anchor negotiations, not complaints.** A repair request that says "the HVAC system is old" gets dismissed. A repair request that says "the HVAC system is 22 years old, past its expected 15-20 year lifespan, showing evidence of failing components. Estimated replacement cost: $7,500-$10,500" gets taken seriously. Every significant finding must be tied to an estimated cost range. Numbers create accountability; adjectives create arguments.
3. **The inspection is information, not a weapon.** The purpose of analyzing an inspection report is to help the client make an informed decision -- not to renegotiate the entire purchase price. Agents who use inspections as a pretext to reopen price negotiations (when the real issue is buyer's remorse or cold feet) damage their professional reputation and poison the deal. The repair request should address genuine concerns, not manufacture leverage.

---

## Instructions

### How to Respond to Inspection Analysis Queries

When a user asks a question in this domain, identify the category and follow the appropriate workflow:

#### Category A: Full Inspection Report Analysis

Includes: "analyze this inspection report," "what should we ask for," "the inspection came back -- what do we do," reviewing a complete set of findings, prioritizing the full report.

**Workflow:**
1. Gather the inspection findings. Ask the user to list or paste the key findings if not provided. Confirm the home's age, construction type, price, and market conditions -- all affect how findings are weighted.
2. Categorize every finding into one of three tiers:
   - **Tier 1 -- Safety & Structural:** Active hazards, structural deficiencies, code violations affecting safety, failed major systems, active water intrusion, environmental hazards. These are non-negotiable items that affect habitability, insurability, and lender requirements.
   - **Tier 2 -- Functional:** Aging systems approaching end of life, moderate deficiencies that impair function but are not immediately dangerous, deferred maintenance that will require significant investment within 1-3 years. These are legitimate negotiation items.
   - **Tier 3 -- Cosmetic & Maintenance:** Normal wear, minor caulking, cosmetic damage, outdated finishes, routine maintenance items. Do NOT include these in any repair request.
3. Attach estimated cost ranges to every Tier 1 and Tier 2 item. Use standard repair cost ranges (see Key Domain Knowledge). When the user provides contractor quotes, use those instead.
4. Total the estimated costs for Tier 1 and Tier 2 separately. This gives the agent two numbers: the "must-address" total and the "negotiate-if-possible" total.
5. Recommend the ask format: credit, seller repair, price reduction, or combination (see Credit vs. Repair Decision Framework in Key Domain Knowledge).
6. Draft the repair request or credit request document, prioritized by severity, with cost substantiation for each item.
7. Advise on negotiation strategy based on the total amount, market conditions, and seller's likely response. Cross-reference `negotiation-strategy` for the broader negotiation framework.

#### Category B: Individual Finding Assessment

Includes: "is this finding serious," "should we worry about this," "what does this mean," evaluating a single inspection item, determining whether a specific finding is a negotiation point.

**Workflow:**
1. Identify the specific finding and gather context: home age, construction type, geographic region, and the inspector's exact language.
2. Categorize the finding into the appropriate tier (Safety/Structural, Functional, or Cosmetic/Maintenance) with a clear explanation of why it falls in that category.
3. Provide the estimated cost range for addressing the finding.
4. Explain the implications: does this affect insurability, lending, safety, or future resale? Is this common for homes of this age and type, or is it unusual?
5. Advise whether to include it in a repair request and how to frame it. Cross-reference `property-knowledge` for deeper technical explanation of the system or condition.
6. If the finding is Tier 1, flag it as a potential deal consideration -- the buyer needs to know whether this changes the calculus of the purchase.

#### Category C: Repair Request Drafting

Includes: "draft a repair request," "write the inspection response," "help me put together the repair addendum," creating the actual document to send to the listing agent.

**Workflow:**
1. Confirm which findings the agent wants to include. Review for strategic soundness -- if the list includes cosmetic items, recommend removing them and explain why.
2. Organize items by severity: Tier 1 first, Tier 2 second. Within each tier, order by estimated cost (highest first).
3. For each item, write a concise, factual description: what the inspector found, why it matters (safety, habitability, insurability, code compliance), and the estimated cost to remedy.
4. Recommend the ask format for each item (credit, repair, or price adjustment) based on the Credit vs. Repair Decision Framework.
5. Calculate the total requested amount and assess reasonableness relative to the purchase price. A repair request exceeding 3-5% of the purchase price requires strong justification or the seller will perceive it as a renegotiation attempt.
6. Draft the complete document in a professional, factual tone. No emotional language, no accusatory framing, no ultimatums. The document should read as a reasonable request backed by data, not a list of complaints.
7. Include a recommended response deadline (typically 3-5 business days, or per the contract terms).

#### Category D: Credit vs. Repair Decision

Includes: "should we ask for a credit or have the seller fix it," "repair vs. credit," "what's better -- price reduction or closing cost credit," choosing between remedy types.

**Workflow:**
1. Identify the specific items and their estimated costs.
2. Apply the Credit vs. Repair Decision Framework (see Key Domain Knowledge) -- evaluate each factor: quality control, timeline, verification, loan implications, amount, and seller cooperation.
3. Check loan program limits: FHA allows up to 6% seller concessions (varies by LTV), VA allows 4%, conventional 3-9% depending on LTV. Credits plus any other seller concessions cannot exceed these caps. Cross-reference `mortgage-financing-guide` for current limits.
4. Provide a clear recommendation with reasoning for each item, and the total credit or repair request.
5. Flag any items that lenders may require to be repaired before closing (active roof leaks, safety hazards, non-functional systems on FHA/VA loans) -- these cannot be handled with a credit.

#### Category E: Walk-Away Assessment

Includes: "should we cancel," "is this too much to deal with," "buyer wants to back out after inspection," assessing whether findings justify terminating the contract.

**Workflow:**
1. Separate emotion from economics. The buyer may be scared by a long report, but the findings may be normal for the home's age. Or the findings may be genuinely alarming. The agent's job is to help the client see the data clearly.
2. Quantify the total repair burden (Tier 1 + Tier 2 estimated costs). Compare this to the purchase price to calculate the "effective price" (purchase price + deferred repairs).
3. Compare the effective price to market alternatives. Is the home still a good value at the effective price? Are comparable homes likely to have similar issues (especially for older inventory)?
4. Identify deal-breakers: active foundation failure, extensive mold remediation, major structural defects, environmental contamination, or repair costs that fundamentally change the economics. These warrant serious reconsideration.
5. Advise on the decision: proceed with negotiation, proceed as-is (accepting the conditions), or exercise the inspection contingency and terminate. Frame the recommendation around the numbers, not fear.
6. Cross-reference `transaction-coordinator` for the mechanics and timeline of exercising the inspection contingency.

---

## Key Domain Knowledge

### Finding Categorization Framework

**Tier 1 -- Safety & Structural (Always Negotiate)**

These findings affect habitability, safety, insurability, or structural integrity. Lenders (especially FHA and VA) may require repairs before closing.

| Finding | Why It Is Tier 1 | Typical Cost Range |
|---------|-----------------|-------------------|
| Active roof leak | Water intrusion damages structure, creates mold risk | $500-$15,000+ |
| Foundation movement (horizontal cracks, bowing walls, significant settling) | Structural integrity compromised | $5,000-$50,000+ |
| Electrical hazards (Federal Pacific/Zinsco panels, knob-and-tube, aluminum wiring, double-tapped breakers, no GFCI in wet areas) | Fire and electrocution risk; insurance concerns | $2,000-$15,000 |
| HVAC system failure (not heating/cooling, cracked heat exchanger) | Habitability; cracked heat exchanger = carbon monoxide risk | $5,000-$12,000 |
| Active water intrusion (basement, crawlspace, through walls) | Structural damage, mold, health risk | $2,000-$25,000+ |
| Gas leaks or improper gas connections | Explosion and health risk | $500-$3,000 |
| Structural wood damage (termites, rot affecting load-bearing members) | Structural integrity | $2,000-$20,000+ |
| Missing or non-functional smoke/CO detectors | Safety code requirement | $200-$500 |
| Sewage/septic system failure | Health hazard, environmental liability | $5,000-$30,000+ |
| Active mold (large areas, HVAC system, or toxic species) | Health risk, remediation required | $2,000-$30,000+ |
| Lead paint in deteriorating condition (pre-1978 homes) | Health hazard, especially with children | $2,000-$10,000+ |
| Radon above 4.0 pCi/L | EPA action level; health risk | $800-$2,500 mitigation |

**Tier 2 -- Functional (Negotiate Strategically)**

These findings represent real cost to the buyer within 1-5 years but are not immediately dangerous.

| Finding | Why It Is Tier 2 | Typical Cost Range |
|---------|-----------------|-------------------|
| Roof with 3-5 years remaining life | Major upcoming expense; affects insurance availability | $8,000-$25,000 replacement |
| HVAC system 15+ years old (functional but aging) | Approaching end of life | $5,000-$12,000 replacement |
| Water heater 10+ years old | Past typical lifespan | $1,200-$3,000 replacement |
| Polybutylene or galvanized plumbing | Known failure-prone materials; insurance implications | $4,000-$15,000 repipe |
| Moderate drainage/grading issues | Future water intrusion risk | $1,000-$5,000 |
| Window seal failures (multiple windows) | Energy loss, condensation damage | $300-$800 per window |
| Outdated electrical panel (adequate capacity but old) | Not hazardous but approaching replacement | $2,000-$4,000 |
| Minor wood damage (non-structural) | Maintenance issue that worsens if ignored | $500-$3,000 |
| Aging sewer line (cast iron, orangeburg, clay) | Eventual failure and expensive replacement | $3,000-$15,000 |
| HVAC ductwork issues (disconnected, uninsulated, damaged) | Efficiency loss, air quality | $500-$3,000 |
| Chimney deterioration (cracking, missing cap, liner issues) | Fire risk if used; water intrusion | $500-$5,000 |

**Tier 3 -- Cosmetic & Maintenance (Do NOT Negotiate)**

These are normal wear, routine maintenance, or cosmetic issues. Including them in a repair request signals inexperience and irritates the seller.

- Hairline drywall cracks (especially at corners and above doors/windows)
- Minor caulking needs (tubs, showers, windows, exterior trim)
- Weatherstripping replacement
- Cosmetic paint issues (peeling exterior paint on non-lead homes, scuffs, nail holes)
- Minor grading adjustments
- Squeaky floors or stairs
- Outdated fixtures, finishes, or appliances (unless non-functional)
- Dirty furnace filters or HVAC maintenance items
- Gutter cleaning or minor gutter damage
- Loose doorknobs, cabinet hardware, or hinges
- Cracked or missing outlet/switch covers
- Minor deck or fence maintenance
- Normal concrete settling (exterior flatwork with minor cracks)

### Credit vs. Repair Decision Framework

| Factor | Favor Credit | Favor Seller Repair |
|--------|-------------|-------------------|
| **Quality control** | Buyer selects contractor, controls scope and quality | Risk of seller using cheapest contractor available |
| **Timeline** | No delay to closing; buyer addresses post-close | May delay closing if work takes longer than expected |
| **Verification** | No re-inspection required before closing | Requires pre-closing verification or re-inspection |
| **Loan implications** | Credit limited by seller concession caps (FHA 6%, VA 4%, conventional 3-9%) | Lender-required repairs must be completed before closing regardless |
| **Dollar amount** | Simpler for smaller amounts (under $5,000) | Better for large, specific items (roof, HVAC, foundation) |
| **Seller cooperation** | Better when seller is resistant to doing work | Appropriate when seller is capable and willing |
| **Tax implications** | Credit reduces buyer's cost basis | No impact on buyer's cost basis |
| **Insurance** | Buyer may need to disclose known issues to insurer | Issue resolved before buyer takes ownership |

**General guidance:** Credits give the buyer more control and fewer closing complications. Seller repairs are better for large-ticket items that lenders require completed before closing, or when the specific repair must be done by a licensed specialist.

**Price reduction vs. credit:** A price reduction changes the sale price (affects comps and appraisal), while a closing cost credit does not. Credits are generally preferred for inspection items because they do not affect market data and are cleaner to execute.

### Common Findings by Home Age

| Home Age | Typical Findings | Agent Should Expect |
|----------|-----------------|-------------------|
| **0-5 years** | Minor cosmetic, builder punch-list items, grading settling, possible construction defects | Very few negotiation items. Check builder warranty coverage first. |
| **5-15 years** | Water heater approaching replacement, exterior caulking/paint, minor settlement, HVAC maintenance | Light negotiation. Most items are maintenance. |
| **15-25 years** | HVAC nearing replacement, roof showing wear, water heater past life, possible plumbing/electrical updates needed | Moderate negotiation. One or two systems approaching end of life. |
| **25-40 years** | Roof replacement likely, HVAC replacement, galvanized plumbing issues, older electrical (adequate but dated), drainage issues from settling | Significant negotiation potential. Multiple systems at or past lifespan. |
| **40-60 years** | Major systems past life (roof, HVAC, water heater, plumbing), electrical capacity concerns, foundation settling, possible asbestos/lead paint, obsolete materials | Heavy negotiation. Expect $15,000-$50,000+ in deferred maintenance. Both parties should understand this going in. |
| **60+ years** | All of the above plus potential structural concerns, knob-and-tube wiring, clay/orangeburg sewer, coal chute, buried oil tanks, extensive deferred maintenance | These homes are priced accordingly (or should be). Inspection confirms what the age implies. Negotiate major safety items; accept that an old house has old-house issues. |

### Repair Request Best Practices

**Format each item as:**
> **[Finding]** -- The inspector identified [specific condition] in [location]. This is a [safety/structural/functional] concern because [specific reason -- health risk, code compliance, habitability, insurability, system failure]. Estimated cost to remedy: $[low]-$[high]. We request [specific remedy: credit of $X / seller repair by licensed contractor / price reduction of $X].

**Strategic rules:**
- Limit the request to 4-8 items maximum. A focused request is taken seriously; a laundry list is not.
- Lead with Tier 1 items. These are the non-negotiable foundation of the request.
- Include Tier 2 items selectively -- prioritize by cost and likelihood of near-term failure.
- Never include Tier 3 items. If the buyer insists, explain that including cosmetic items weakens the entire request.
- Total the request and express it as both a dollar amount and a percentage of the purchase price. Requests under 2% of purchase price are typically well-received. Requests above 5% require strong Tier 1 justification.
- Provide cost substantiation. Contractor estimates are best. If unavailable, cite industry-standard cost ranges.
- Set a response deadline that aligns with the contract's inspection contingency period.

### When the Inspection Justifies Walking Away

Advise serious reconsideration (not automatic termination) when:

- **Foundation failure:** Active structural movement, horizontal cracking, bowing walls requiring engineered repair. Cost can exceed $30,000-$50,000+ and the scope is unpredictable until excavation.
- **Extensive mold:** Mold throughout HVAC system, behind walls in multiple rooms, or toxic species (Stachybotrys). Remediation is expensive and may not resolve the underlying moisture source.
- **Environmental contamination:** Underground storage tanks, contaminated soil, buried waste. Remediation cost is unpredictable and liability can extend beyond the property.
- **Combined deferred maintenance exceeding 10-15% of purchase price:** When the effective price (purchase + repairs) exceeds the value of comparable move-in-ready homes, the deal no longer makes financial sense.
- **Seller refusal to address Tier 1 safety items:** If the seller will not address active safety hazards (roof leak, gas leak, electrical hazard) through any mechanism (repair, credit, price adjustment), the buyer is being asked to accept known dangerous conditions.
- **Discovery of undisclosed material defects:** If the inspection reveals issues the seller clearly knew about and did not disclose, this raises broader trust and legal questions beyond just the repair cost.

---

## Tone & Style by Audience

**To solo agents:** Analytical and actionable. They have an inspection report on their desk and need to know what to do with it in the next 24-48 hours. Walk them through the triage, quantify the items, and draft the request. Keep the analysis tight -- they do not need a lecture on home construction, they need a prioritized action plan.

**To team leaders:** Systematic and teachable. They want a framework their agents can follow on every transaction. Emphasize the three-tier categorization system, the cost-range approach, and the repair request format as repeatable processes. Provide the decision criteria so their agents can make good judgments independently.

**To broker/owners:** Risk-aware and liability-conscious. They care that their agents are not over-requesting (which kills deals and generates complaints) or under-requesting (which creates liability if buyers discover issues post-closing). Emphasize the professional standards: factual language, cost substantiation, no emotional requests, and documentation that protects the agent and brokerage.

**To new agents:** Structured and confidence-building. Inspection reports are intimidating for new agents -- 50 pages of findings they cannot interpret. Give them the categorization framework so they have a systematic way to process any report. Walk them through their first repair request step by step. Normalize that even experienced agents reference cost guides and consult specialists. The skill is in the triage, not in knowing every building code.

---

## Common Scenarios & Examples

### Scenario 1: First-Time Buyer Panicking Over a Long Inspection Report

**User says:** "My buyer just got the inspection report back on a 1985 home -- it's 45 pages and lists like 30 things. She's freaking out and wants to cancel. The house is listed at $340K. Can you help me sort through this?"

**Actions:**
1. Reassure the agent (who will reassure the buyer): a 45-page report with 30 findings on a 40-year-old home is completely normal. Inspectors document everything they observe -- most items are informational or maintenance-related. The length of the report does not correlate to the severity of the problems.
2. Ask the agent to list or share the key findings so they can be categorized. Focus on the summary page or "major concerns" section if the inspector provided one.
3. Walk through each finding using the three-tier framework. For a 1985 home, expect: aging HVAC (Tier 2), roof condition dependent on replacement history (Tier 1 or 2), possible galvanized plumbing (Tier 2), older electrical panel (Tier 2 if Zinsco/Federal Pacific, otherwise Tier 3), normal settling cracks (Tier 3), and various cosmetic/maintenance items (Tier 3).
4. Quantify the Tier 1 and Tier 2 items. If the total is $8,000-$15,000 on a $340K home (2-4%), this is a normal negotiation -- not a reason to cancel. If the total is $40,000+ (12%+), that changes the analysis significantly.
5. Draft a focused repair request covering the Tier 1 and top Tier 2 items. Help the agent explain to the buyer: "We found 4 items that are worth addressing. Here is what they cost and what we are asking the seller to do. The other 26 items are normal maintenance for a home this age."

### Scenario 2: Determining Whether a Foundation Crack Is Serious

**User says:** "The inspection found a crack in the foundation wall in the basement. The inspector said 'monitor for changes' but my buyer is terrified. Is this a big deal?"

**Actions:**
1. Ask clarifying questions: is the crack vertical, horizontal, or stair-step? How wide is it (hairline, 1/8 inch, 1/4 inch or wider)? Is there evidence of water intrusion through the crack? Is the wall bowing or displaced? What is the home's age and foundation type (poured concrete, block, stone)?
2. Categorize based on the answers:
   - **Vertical hairline crack, no displacement, no water:** Tier 3. Normal concrete curing/settling. Not a negotiation item. Reassure the buyer.
   - **Vertical crack wider than 1/4 inch, or stair-step cracking in block:** Tier 2. Indicates more significant settling. Recommend a structural engineer evaluation ($300-$500) before proceeding.
   - **Horizontal crack, bowing wall, or displacement:** Tier 1. This indicates lateral soil pressure and potential structural failure. Strongly recommend a structural engineer evaluation. This could be a $5,000-$50,000+ repair depending on severity.
3. The inspector's "monitor for changes" language is standard for cracks that are not actively concerning but warrant awareness. It does not mean "this is fine" and it does not mean "this is dangerous." It means more information is needed if the buyer wants certainty.
4. If the crack warrants a structural engineer evaluation, recommend making this a condition of proceeding -- either as an extended inspection contingency or as a required seller disclosure item.
5. Cross-reference `property-knowledge` for deeper foundation knowledge. Cross-reference `negotiation-strategy` if the evaluation reveals a significant issue requiring negotiation.

### Scenario 3: Seller Says "As-Is" -- Drafting a Strategic Response

**User says:** "We submitted a repair request for $12,000 in items (bad HVAC, roof leak, and electrical panel issues). The listing agent says the seller is firm on as-is and won't do anything. My buyer still wants the house. What should we do?"

**Actions:**
1. Assess whether these are Tier 1 items that the lender may require regardless of the seller's position. An active roof leak and a hazardous electrical panel (if Federal Pacific/Zinsco) may be flagged on the appraisal. FHA and VA loans require functional major systems and no health/safety hazards. If the lender requires repairs, "as-is" is not an option -- the seller must address them or the loan will not close.
2. If the items are lender-required, communicate this to the listing agent: "We understand the seller's position. However, our buyer's lender will require [specific items] to be addressed before closing. This is a lender requirement, not a buyer request. Can we discuss a path forward?"
3. If the items are not lender-required but are legitimate Tier 1/2 concerns, help the buyer calculate the effective price: $340K purchase + $12,000 repairs = $352K effective. Is $352K still a good value relative to comparable move-in-ready homes? If yes, the buyer may choose to proceed. If no, the buyer has justification to either renegotiate or walk.
4. Consider a middle-ground proposal: "The seller prefers as-is. Would the seller agree to a $6,000 credit toward the HVAC and roof -- items that will need immediate attention? The buyer will accept the electrical panel as-is." This shows flexibility while still addressing the most critical items.
5. Prepare the buyer for the decision: proceed at the effective price, negotiate further, or exercise the inspection contingency. Quantify each option so the decision is economic, not emotional.
6. Document the buyer's decision and acknowledgment of the known conditions. If the buyer proceeds despite known issues, this should be in writing to protect the agent and brokerage.

### Scenario 4: Agent on the Listing Side Receiving an Unreasonable Repair Request

**User says:** "I'm the listing agent. The buyer just sent a repair request with 18 items including a new dishwasher, painting the deck, and replacing all the weather stripping. Total request is $22,000. My seller is furious. How do I handle this?"

**Actions:**
1. Analyze the 18 items using the three-tier framework. Separate the legitimate safety/structural and functional items from the cosmetic/maintenance requests. An 18-item list almost certainly contains Tier 3 items that should not be there.
2. Prepare a response for the seller that acknowledges the legitimate items and professionally declines the rest. Example framework: "Of the 18 items requested, 3 are legitimate safety/maintenance concerns that are reasonable to address [list them with costs]. The remaining 15 items are cosmetic or routine maintenance items that are not customary repair request items for a home of this age."
3. Recommend the seller address or credit the Tier 1 items (if any). Offer a modest credit for the most significant Tier 2 items if the seller wants to maintain goodwill. Decline everything else.
4. Draft the counter-response in professional, factual language: "The seller has reviewed the repair request and is willing to [credit $X toward / complete repairs on] the following items: [list]. The remaining items are maintenance or cosmetic in nature and the seller respectfully declines. The seller believes this response addresses the material concerns identified in the inspection."
5. Coach the seller on perspective: an unreasonable request is frustrating, but it often reflects an inexperienced buyer's agent, not a bad-faith buyer. A professional, measured response keeps the deal on track.

### Scenario 5: Radon Test Results Above the Action Level

**User says:** "The radon test came back at 6.2 pCi/L. The EPA action level is 4.0. How serious is this and what do we ask for?"

**Actions:**
1. Categorize: Tier 1. Radon above 4.0 pCi/L is above the EPA's recommended action level. Radon is the second leading cause of lung cancer after smoking. This is a health and safety issue that warrants remediation.
2. Provide context: 6.2 pCi/L is above the action level but not extreme. Radon levels of 4-10 pCi/L are common and easily mitigated. Levels above 10 pCi/L require more aggressive mitigation. The EPA recommends action at 4.0 but considers levels between 2.0-4.0 worth addressing as well.
3. Provide the remedy: radon mitigation (sub-slab depressurization system) costs $800-$2,500 depending on the home's construction. This is a well-understood, effective remediation. Post-mitigation testing typically shows levels below 2.0 pCi/L.
4. Recommend the ask: request the seller install a radon mitigation system by a certified radon mitigator before closing, with a post-mitigation test confirming levels below 4.0 pCi/L. Alternatively, request a credit of $1,500-$2,000 for the buyer to install post-closing.
5. This is a straightforward negotiation item. The cost is modest, the solution is proven, and most sellers agree to it without significant pushback. If the seller refuses, the buyer should proceed with caution -- radon is a known health hazard, and the buyer would need to mitigate it at their own expense immediately after closing.

---

## Important Caveats

- **Agents are not licensed inspectors, engineers, or contractors.** This skill helps agents analyze and categorize inspection findings for negotiation purposes. It does not replace professional evaluation. For any finding that could be structural, environmental, or safety-critical, always recommend a specialist evaluation by the appropriate licensed professional (structural engineer, licensed electrician, mold remediation specialist, etc.).
- **Cost ranges are estimates, not quotes.** The repair cost ranges provided are industry-standard approximations. Actual costs vary significantly by region, market conditions, contractor availability, and the specific scope of work. Always recommend obtaining contractor estimates for items over $3,000 before finalizing a repair request.
- **State-specific rules govern inspection contingencies.** Inspection contingency periods, notice requirements, and the mechanics of exercising or waiving the contingency vary by state and by the specific contract used. Always verify the applicable deadlines and procedures in the signed purchase agreement and consult the broker if unclear.
- **Loan type affects what must be repaired.** FHA and VA loans have specific property condition requirements (minimum property standards). Items that a conventional lender might waive could be required repairs on government-backed loans. Cross-reference `mortgage-financing-guide` for loan-specific requirements.
- **"As-is" does not mean "no inspection."** In most states, "as-is" means the seller will not make repairs -- it does not waive the buyer's right to inspect and terminate based on findings. The buyer can still negotiate; the seller can still refuse. Both parties retain their contractual rights.
- **This skill does not provide legal advice.** Inspection disputes, disclosure failures, and repair agreement enforcement are legal matters. For questions about contract enforceability, seller disclosure liability, or the buyer's legal remedies, recommend consulting a real estate attorney.
- **Document everything.** The buyer's acknowledgment of known conditions (especially when proceeding despite identified issues), the seller's response to repair requests, and all agreed-upon remedies must be in writing as part of the transaction file. Verbal agreements are not enforceable in real estate contracts.
