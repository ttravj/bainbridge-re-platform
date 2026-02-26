---
name: offer-writer
description: "Offer preparation and strategy for real estate agents. Triggers on writing an offer, offer strategy, how much to offer, offer terms, contingencies, earnest money, escalation clause, multiple offer situation, highest and best, offer cover letter, competitive offers, lowball offer, over-asking offer, offer package. Also: 'my buyer wants to offer on', 'how should we structure this offer', 'it's a multiple offer situation', 'what escalation clause should we use', 'draft an offer cover letter', 'how competitive should our offer be', 'what contingencies should we include', 'how much earnest money'."
---

# Offer Writer

Assists agents in preparing complete offer packages -- from analyzing comparables to support the offer price, through selecting terms and contingencies, to drafting agent-to-agent cover letters and preparing for multiple-offer scenarios. This is a document generation skill: it produces the strategic components of an offer package that accompany the purchase agreement. The purchase agreement itself is a state-approved legal form; this skill handles everything around it -- the pricing logic, the term strategy, the cover letter, and the competitive positioning that determines whether the offer wins. Agents who submit a bare contract lose to agents who submit a package.

## Core Principles

1. **Data drives the price; strategy drives the terms.** Every offer price must be supportable by comparable sales data. Pulling comps is not optional -- it is the foundation. Terms (contingencies, earnest money, closing timeline, inclusions) are the strategic layer that makes the price work or makes the offer stand out. Price without data is guessing. Terms without strategy are boilerplate.
2. **The offer package is a persuasion document.** The listing agent evaluates your offer against others in minutes. A clean, well-organized package with a professional cover letter, strong financing documentation, and clear terms gets more attention than a PDF with no context. Presentation matters -- not because it should, but because it does.
3. **Protect the buyer while competing.** Every waived contingency, every escalation clause, every appraisal gap commitment increases the buyer's risk. The agent's job is to help the buyer compete without exposing them to financial harm. Never waive protections the buyer does not fully understand and cannot financially absorb.

---

## Instructions

### How to Respond to Offer Preparation Queries

When a user asks a question in this domain, identify the category and follow the appropriate workflow:

#### Category A: Offer Pricing and Comparable Analysis

Includes: how much to offer, what price to start at, is this a fair price, offer below list, offer above list, what the data says, comp analysis for offer support.

**Workflow:**
1. Ask for (or work with) the essential data: list price, DOM, any price reductions, property specifics (beds, baths, square footage, condition, lot size), and location.
2. Pull or request 3-5 comparable sales within the last 90 days, within 1 mile (adjust for rural/urban), with similar size, condition, and features. Adjust for differences using $/sq ft as the baseline, with individual adjustments for bedroom count, bathrooms, condition, lot size, garage, and updates.
3. Establish a defensible price range from the comps. The offer price should fall within this range unless strategic circumstances justify going above (multiple offers, unique property) or below (high DOM, condition issues, distressed seller).
4. Factor in market conditions: absorption rate, average DOM in the area, list-to-sale price ratio, and inventory levels. A 95% list-to-sale ratio means different things than a 102% ratio.
5. Present the pricing recommendation with the supporting data. The agent should be able to explain to their buyer exactly why the recommended price makes sense. Cross-reference `market-analysis` for deep market indicator methodology and `cma-generator` for producing a formal CMA document.

#### Category B: Terms, Contingencies, and Earnest Money

Includes: what contingencies to include, earnest money amount, closing timeline, inclusions/exclusions, possession date, rent-back, seller concessions, financing terms.

**Workflow:**
1. Assess the market context: seller's market (fewer contingencies = more competitive), balanced (standard contingencies acceptable), buyer's market (full contingencies, buyer has leverage).
2. Walk through each contingency decision with risk context:
   - **Inspection:** 7-14 days standard. Shortening to 5-7 days is competitive. Waiving entirely is high-risk -- recommend a pre-offer inspection instead when possible. Varies by state.
   - **Financing:** Required unless the buyer is paying cash. Typically 21-30 days. Stronger pre-approval = shorter timeline feasible.
   - **Appraisal:** Standard with financed purchases. Waiving or adding gap coverage is competitive but exposes the buyer to paying above appraised value.
   - **Title:** Rarely waived. Protects against liens, encumbrances, and ownership disputes.
   - **Sale of current home:** Weakest contingency. Avoid in competitive situations. If needed, pair with a home-sale kickout clause.
   - **HOA review:** 3-5 days typical. Important for condos and planned communities.
3. Recommend earnest money based on market norms and competitiveness:
   - Standard: 1-3% of purchase price
   - Competitive: 3-5% or more
   - Cash offers: 5-10% signals seriousness
   - Deposited into escrow within 1-3 business days of acceptance (varies by state)
4. Address closing timeline strategy: match the seller's preferred date when possible. A 21-day close (if financing allows) beats a 45-day close when the seller wants to move fast. Conversely, a delayed close with a rent-back can win when the seller needs time.
5. Cover inclusions/exclusions: appliances, window treatments, outdoor structures, and any personal property the buyer wants. These must be explicitly stated in the contract. Ambiguity creates disputes.

#### Category C: Escalation Clause Design

Includes: escalation clause strategy, how to structure an escalation, cap amount, increment, proof requirements, risks of escalation clauses.

**Workflow:**
1. Explain the standard structure: "Buyer offers $[base price], and will increase the offer by $[increment] above the highest bona fide competing offer, up to a maximum of $[cap]."
2. Help determine the three key numbers:
   - **Base price:** Should be a competitive starting offer, not a lowball. The base price is what the buyer pays if there are no competing offers.
   - **Increment:** Typically $1,000-$5,000 depending on price point. Smaller increments in lower price ranges, larger in higher. The increment should be meaningful enough to beat a competitor but not so large the buyer overpays unnecessarily.
   - **Cap:** The buyer's true maximum. Ask: "If you offer $X and lose to someone at $X + $1,000, will you regret it?" That answer reveals the real cap.
3. Require proof of the competing offer. Without this clause, the seller could claim a competing offer exists to push the price to the cap. The escalation clause should state: "Seller must provide a copy of the bona fide competing offer (with buyer identity redacted) that triggers the escalation."
4. Address risks: escalation clauses reveal the buyer's maximum willingness to pay. Some listing agents and sellers dislike them. In some markets they are standard; in others they are unusual. Some states have restrictions -- verify locally before recommending.
5. Discuss alternatives to escalation clauses: simply submitting the buyer's best price avoids the transparency risk. In a true "highest and best" situation, a strong clean offer at the buyer's maximum may be more effective than an escalation clause that shows your hand.

#### Category D: Offer Cover Letters (Agent-to-Agent)

Includes: drafting an offer cover letter, presenting the offer's strengths, agent-to-agent communication, how to make an offer stand out on paper.

**Workflow:**
1. Clarify the distinction: an agent-to-agent cover letter highlights the offer's strengths professionally. This is NOT a buyer love letter (personal letters from buyers are banned in some states due to fair housing concerns -- Oregon, for example). Cross-reference `fair-housing-compliance` for state-specific rules on buyer letters.
2. Draft the cover letter with these elements:
   - **Opening:** Brief, professional. Identify the property, buyer name, and offer price.
   - **Financing strength:** Pre-approval amount, lender name, loan type, down payment percentage. If cash, provide proof of funds summary.
   - **Terms highlights:** Clean contingencies, flexible closing date, earnest money amount, any competitive terms (appraisal gap coverage, shortened inspection period).
   - **Buyer qualification:** "Our buyer is fully pre-approved through [lender], with [X%] down on a [loan type] loan. There are no contingencies related to the sale of an existing property."
   - **Closing:** Professional, brief. "We believe this is a strong offer that provides certainty of close on terms favorable to your seller. Please don't hesitate to reach out with questions."
3. Keep it to one page maximum. Listing agents reviewing multiple offers appreciate brevity and clarity.
4. Never include personal details about the buyer (family composition, race, religion, lifestyle). Keep it factual and financial.
5. Accompany the cover letter with the pre-approval letter, proof of funds (if applicable), and the complete purchase agreement.

#### Category E: Multiple Offer Strategy

Includes: competing against other offers, highest and best, how to win a bidding war, multiple offer preparation, how aggressive should we be.

**Workflow:**
1. Gather intelligence: call the listing agent. Ask how many offers are expected, seller's preferred closing timeline, any terms that matter beyond price, and whether the seller will counter or request highest-and-best from everyone.
2. Build the offer package for maximum competitiveness across all dimensions -- not just price:
   - **Price:** Lead with the buyer's strongest credible number. In a true multiple-offer scenario, there may not be a second chance to counter.
   - **Earnest money:** 3-5% or more signals commitment.
   - **Contingencies:** Shorten or remove where the buyer can safely do so. Pre-inspections are the safest way to remove the inspection contingency.
   - **Appraisal gap coverage:** Commit to covering $X above appraised value. Only recommend if the buyer has the cash to cover the gap.
   - **Closing timeline:** Match or improve on the seller's preferred date.
   - **Financing documentation:** Include the pre-approval letter (ideally property-specific), proof of funds, and lender contact information.
3. Discuss the psychological preparation with the buyer: set a maximum price in advance. If they lose at that price, they made the right decision. Regret-driven escalation after the fact leads to overpaying.
4. Address the "should we waive everything" question: every waived contingency has a real cost if something goes wrong. Waive the inspection? The buyer owns whatever the inspection would have found. Waive the appraisal? The buyer pays the gap in cash. Make sure the buyer understands each risk individually.
5. Cross-reference `negotiation-strategy` for the broader negotiation framework and multiple-offer evaluation from the listing agent's perspective.

---

## Key Domain Knowledge

### Offer Strategy Framework

**Step 1: Assess Market Position**

| Indicator | Seller's Market | Balanced | Buyer's Market |
|-----------|----------------|----------|----------------|
| Average DOM | <15 days | 15-60 days | >60 days |
| List-to-sale ratio | >100% | 97-100% | <97% |
| Months of inventory | <3 months | 3-6 months | >6 months |
| Multiple offers common | Yes | Sometimes | Rarely |
| Offer strategy | Aggressive, clean | Market-priced, standard | Below list, full contingencies |

**Step 2: Research the Specific Property**
- DOM and listing history (original price, reductions, relists)
- Comparable sales supporting your offer price
- Seller motivation clues (relocation, estate, divorce, equity position, listing agent comments)
- Property condition and any known issues
- Other offers or interest (ask the listing agent)

**Step 3: Build the Offer**
- Price supported by comparable data
- Terms matched to market conditions and seller priorities
- Contingencies appropriate to buyer's risk tolerance and competitive pressure
- Earnest money reflecting seriousness
- Closing timeline aligned with seller's needs

**Step 4: Package and Present**
- Cover letter highlighting strengths
- Pre-approval or proof of funds
- Complete purchase agreement on state-approved forms
- Any required disclosures or addenda

### Earnest Money Guidelines

| Market / Scenario | Recommended Range | Rationale |
|-------------------|-------------------|-----------|
| Standard purchase | 1-2% of price | Market norm, demonstrates good faith |
| Moderate competition | 2-3% | Above average, signals commitment |
| Competitive multiple offer | 3-5% | Stands out, shows financial strength |
| Cash or luxury purchase | 5-10% | Expected at higher price points |
| New construction | Per builder requirements | Often fixed amounts ($5K-$25K+) |

Earnest money is at risk if the buyer defaults outside of contingency protections. Ensure the buyer understands the deposit is not just a formality.

### Contingency Risk Matrix

| Contingency | Risk of Waiving | When to Consider Waiving |
|-------------|-----------------|--------------------------|
| Inspection | High -- buyer owns all undiscovered defects | Pre-inspection completed; new construction with warranty; minor cosmetic property |
| Appraisal | Medium-High -- buyer must cover gap with cash | Buyer has reserves, strong comps support price, competitive situation |
| Financing | Very High -- buyer could lose earnest money | Only if buyer is truly cash or has unconditional commitment letter |
| Title | Extreme -- never recommended | Virtually never |
| Sale of home | Low -- weakens offer competitiveness | When existing home is under contract or already sold |
| HOA review | Medium -- hidden HOA issues expensive | Only if buyer has already reviewed HOA docs independently |

### Offer Price Positioning by Scenario

| Scenario | Pricing Approach | Supporting Tactic |
|----------|-----------------|-------------------|
| Property fairly priced, standard market | Offer 97-100% of list | Standard terms, comp support |
| Overpriced listing, high DOM | Offer supported by comps (may be 5-10%+ below list) | Include comp analysis showing market value |
| Multiple offers expected | At or above list | Escalation clause or best-and-final at buyer's max |
| Property needs significant work | Below list, adjusted for repair costs | Include repair cost estimates to justify price |
| Unique/irreplaceable property | At or above list even in balanced market | Clean terms, buyer's strongest position |
| Estate/probate sale | At or above list (often court-approved process) | Verify sale process -- may require court confirmation |

### Seller Motivation Assessment

**Clues that indicate seller flexibility:**
- DOM exceeding market average
- One or more price reductions
- Vacant property (carrying costs accumulating)
- Relocation or job transfer (deadline pressure)
- Divorce or estate settlement (both parties want resolution)
- Listing agent language: "motivated," "bring all offers," "priced to sell"

**Clues that indicate seller firmness:**
- Fresh listing with low DOM
- Multiple offers or reported strong interest
- Seller has no urgency (paid off, not relocating)
- Recent comparable sales at or above list price
- Listing agent language: "firm on price," "multiple offers in hand"

### Industry Standards & References

- **State Purchase Agreement Forms:** All offers must be written on current state-approved forms. Using outdated forms or non-standard contracts creates legal risk. Check with your state association or brokerage for the current version.
- **NAR Code of Ethics, Article 1:** Agents must protect and promote the interests of their client while treating all parties honestly.
- **NAR Code of Ethics, Standard of Practice 1-7:** Agents must present all offers and counter-offers objectively and as quickly as possible.
- **Fair Housing Act:** Offer cover letters and buyer letters must not contain information that could lead to selection based on protected classes. Several states have banned buyer personal letters entirely.
- **RESPA:** Settlement service provider recommendations (lenders, title companies) in the offer process must comply with anti-kickback provisions.

---

## Tone & Style by Audience

**To solo agents:** Action-oriented and specific. They are sitting at their desk about to write an offer and need to know exactly what price to recommend, what terms to include, and how to present it. Give them the recommendation first, then the reasoning. Include specific language they can use in the cover letter or agent call.

**To team leaders:** Systematic and trainable. They want a repeatable offer preparation process their buyer agents follow every time. Provide the framework as a checklist: market assessment, comp analysis, term selection, package assembly, presentation. Consistency across the team prevents missed steps and strengthens the team's reputation with listing agents.

**To broker/owners:** Risk-aware and compliance-focused. They care about offers being written correctly on approved forms, contingency waivers being documented with informed consent, and escalation clauses being properly structured. Emphasize that every aggressive tactic (waived inspection, appraisal gap coverage) should come with documented buyer acknowledgment of the risk.

**To new agents:** Step-by-step and demystifying. Writing the first offer is intimidating. Break it into sequential steps: pull comps, establish price range, select terms, fill out the form, write the cover letter, assemble the package. Emphasize that the purchase agreement is a state-approved form with boxes to check and blanks to fill -- not a creative writing exercise. The strategy is in the preparation, not the paperwork.

---

## Common Scenarios & Examples

### Scenario 1: Standard Offer on a Fairly Priced Home

**User says:** "My buyer wants to offer on a 3-bed, 2-bath ranch listed at $375K. It's been on market 22 days in a balanced market. No other offers that I know of. What should we offer?"

**Actions:**
1. Pull comparable sales: find 3-5 recent closed sales of similar properties within 1 mile and 90 days. Calculate adjusted $/sq ft. If comps support $365K-$380K, the listing is priced within market range.
2. With 22 DOM and no competing offers, the buyer has room to negotiate but should not expect a dramatic discount. Recommend offering $360K-$370K (96-99% of list) depending on condition relative to comps.
3. Structure standard terms: 10-day inspection, 21-day financing, appraisal contingency, 30-day closing (or match seller preference). Earnest money at 1-2% ($3,750-$7,500).
4. Prepare for the counter: the seller will likely counter at $370K-$375K. Have the buyer's acceptable range pre-discussed so the response is fast and confident.
5. Write a brief cover letter noting the buyer's financing strength and flexibility on closing date. Attach the pre-approval letter.

### Scenario 2: Competitive Multiple Offer Situation

**User says:** "Listing agent says they have 6 offers due by noon tomorrow. My buyer loves this house and it's listed at $450K. How do we win?"

**Actions:**
1. Call the listing agent immediately. Ask: preferred closing date, any terms that matter to the seller beyond price, are any offers cash, and will they counter or is this highest-and-best.
2. Determine the buyer's true maximum. Use the regret test: "If you offer $470K and lose to someone at $475K, how do you feel?" Keep going until the answer is "I can live with that." That is the cap.
3. Structure the package for maximum competitiveness: offer at or near the buyer's maximum (this may not be the time for an escalation clause -- some sellers prefer a clean number), 3-5% earnest money ($13,500-$22,500), shortened inspection to 5 days or pre-inspection to waive entirely, appraisal gap coverage up to a specific dollar amount the buyer can fund, closing timeline matching the seller's preference.
4. Write a strong cover letter emphasizing: financing certainty (pre-approved, X% down, no sale contingency), clean terms, earnest money amount, appraisal gap coverage, and flexible timeline.
5. Prepare the buyer for the possibility of losing. In a 6-offer situation, even the best offer can be outbid. Discuss in advance what happens next (monitor for back-on-market, continue searching, adjust criteria).

### Scenario 3: Below-List Offer Supported by Data

**User says:** "This home is listed at $520K but it's been on market 85 days with a $30K price reduction already. The comps I'm seeing support maybe $470K-$480K. How do I write this offer without offending the seller?"

**Actions:**
1. Build the comp case: pull 3-5 closed sales that support $470K-$480K. Organize them clearly -- address, sale price, date, key features, and adjustments. This is the backbone of the offer's credibility.
2. Recommend offering $475K with a brief narrative in the cover letter: "Based on recent comparable sales in the immediate area (attached), our buyer's offer reflects current market conditions. We've included [comp addresses] which sold in the range of $[X]-$[Y] within the last [Z] days."
3. Keep terms favorable to offset the lower price: standard contingencies (don't pile on additional demands), reasonable earnest money (1-2%), flexible closing date, clean financing with strong pre-approval.
4. Do not apologize for the number. A data-supported price is a professional offer, not an insult. Eighty-five DOM with a price reduction means the market has spoken -- this listing is overpriced relative to what buyers will pay.
5. Prepare for possible rejection or an emotional counter. The seller may counter near their current list price. Have a counter-offer range ready ($480K-$490K maximum) with the comp data to support the position. Cross-reference `negotiation-strategy` for counter-offer response framework.

### Scenario 4: Drafting an Offer Cover Letter

**User says:** "I need to write a cover letter for our offer. $285K on a $289K listing. Conventional financing, 20% down, 30-day close. How do I present this?"

**Actions:**
1. Draft the letter:

   "Dear [Listing Agent Name],

   On behalf of our buyer, [Buyer Name], please find enclosed our offer of $285,000 for [Property Address].

   **Financing:** Our buyer is fully pre-approved through [Lender Name] for a conventional loan with 20% down payment. Pre-approval letter is attached. There is no contingency related to the sale of an existing property.

   **Terms:** We are prepared to close within 30 days. Our buyer offers $[earnest money amount] in earnest money, to be deposited within [X] business days of acceptance. We have included standard inspection and appraisal contingencies with a 10-day inspection period.

   **Flexibility:** Our buyer is flexible on the closing date and is happy to accommodate your seller's preferred timeline if an adjustment is needed.

   This is a clean, well-qualified offer. Please don't hesitate to call me directly at [phone] with any questions or if the seller would like to discuss terms.

   Respectfully,
   [Agent Name] | [Brokerage]"

2. Remind the agent: keep it factual and financial. No personal buyer details, no family stories, no photos. Several states have banned buyer personal letters due to fair housing concerns.
3. Attach the pre-approval letter and proof of funds if applicable. The cover letter introduces; the documentation proves.

### Scenario 5: Escalation Clause for a Specific Property

**User says:** "My buyer is pre-approved for $550K. The house is listed at $499K and I expect multiple offers. Should we use an escalation clause and how do we set it up?"

**Actions:**
1. Determine if escalation clauses are accepted in the local market. Call the listing agent: "We're considering an escalation clause -- would the seller entertain that structure?" Some sellers prefer a clean number.
2. If proceeding, set the three numbers:
   - Base price: $505K-$510K (competitive starting point above list)
   - Increment: $2,500-$5,000 (meaningful jumps at this price point)
   - Cap: determine with the buyer using the regret test. If pre-approved for $550K, the cap might be $540K-$545K (leaving room for closing costs and reserves).
3. Draft the clause language: "Buyer offers $510,000 for the property. In the event of a higher bona fide competing offer, buyer will increase their offer by $3,000 above the highest competing offer, up to a maximum purchase price of $540,000. Seller must provide a copy of the competing offer (with buyer identity redacted) that triggers the escalation as a condition of acceptance at the escalated price."
4. Pair the escalation clause with strong supporting terms: 3-5% earnest money, appraisal gap coverage up to $15K-$20K (if the buyer has reserves), shortened inspection, and flexible closing date.
5. Address the risk: the escalation clause reveals the buyer's willingness to pay up to $540K. If the buyer would be uncomfortable with the seller knowing this, submit a clean offer at the buyer's best price instead.

---

## Important Caveats

- **State-specific forms and procedures govern all offers.** Purchase agreements, addenda, escalation clause formats, and contingency timelines vary by state. Always use current state-approved forms. Do not draft custom contract language -- that constitutes the unauthorized practice of law in most states.
- **This skill does not provide legal advice.** Offer terms, contingency waivers, and escalation clauses have legal implications. For specific questions about contract enforceability or liability, consult a real estate attorney.
- **Fair housing applies to offer presentation and cover letters.** Buyer personal letters are banned in some states (Oregon, others). Even where permitted, letters should never include information about protected classes. Agent-to-agent cover letters should be strictly factual and financial. Cross-reference `fair-housing-compliance`.
- **Escalation clauses are not universally accepted or permitted.** Some states restrict their use, some listing agents refuse them, and some sellers find them confusing. Verify local practice before recommending. Cross-reference `negotiation-strategy` for alternative approaches.
- **Waiving contingencies increases buyer risk.** Every recommendation to shorten or waive a contingency must include a clear explanation of the risk to the buyer. Document the buyer's acknowledgment. Agents who pressure buyers to waive protections without informed consent face liability exposure.
- **Earnest money timing varies by state.** The deadline for depositing earnest money into escrow (1-3 business days is common, but not universal) is set by state law or contract terms. Missing the deposit deadline can void the contract.
- **Financing terms must be verified with the lender.** Pre-approval amounts, closing timelines, and seller concession limits vary by loan program (conventional, FHA, VA, USDA). Cross-reference `mortgage-financing-guide` for loan-specific concession caps and requirements. Never promise a closing timeline without lender confirmation.
