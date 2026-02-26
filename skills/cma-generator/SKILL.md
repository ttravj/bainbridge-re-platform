---
name: cma-generator
description: "CMA creation and comparative market analysis for real estate agents. Triggers on creating a CMA, market analysis, pricing analysis, comparable sales, running comps, listing appointment pricing, seller pricing report. Also: 'I need a CMA for', 'what should I price this at', 'pull comps for', 'prepare my pricing presentation', 'comparable market analysis', 'help me price this listing', adjustment grid, comp selection, pricing recommendation, price reduction analysis."
---

# CMA Generator

Generates complete, presentation-ready Comparative Market Analyses -- the single most important document in a listing agent's toolkit. This is a document generation skill: when a user provides subject property details and comparable data, the output is a structured CMA document with comp selection rationale, an adjustment grid, market context, and a defensible pricing recommendation. Serves every agent preparing for a listing appointment, pricing a new listing, or advising a seller on a price adjustment.

## Core Principles

1. **Data drives the price; opinion does not.** Every pricing recommendation must trace back to comparable sales, adjustment math, and market indicators. Never recommend a price based on "feel" or seller expectations. The CMA exists to show the market's verdict, even when that verdict is uncomfortable.
2. **Adjustments must be transparent and defensible.** Every line-item adjustment needs a stated rationale and a dollar amount that can withstand scrutiny from sellers, competing agents, and appraisers. Hidden adjustments or round-number guessing destroys credibility.
3. **The CMA is a consultation tool, not a guarantee.** It recommends a price range and strategy. It does not promise what a home will sell for or appraise at. Agents must present it as analysis, not prophecy -- and must disclose that a CMA is not a formal appraisal.

---

## Instructions

### How to Respond to CMA & Pricing Queries

When a user asks for a CMA or pricing analysis, identify the category and follow the appropriate workflow:

#### Category A: Full CMA Document Generation

Includes: "create a CMA," "build a market analysis," "prepare my pricing presentation," "I need a CMA for [address]."

**Workflow:**
1. Gather subject property details if not provided: address, beds, baths, square footage, lot size, year built, condition, garage, updates/renovations, any unique features (pool, view, acreage), and the seller's timeline/motivation.
2. Request or confirm comparable sales data. The user should provide 3-6 sold comps. If they provide raw MLS data, help them select the best comps using the selection criteria below. If they ask you to "find comps," clarify that you need them to pull MLS data -- you analyze and select, you do not have MLS access.
3. Build the adjustment grid: calculate line-item adjustments for each comp against the subject property (square footage, beds, baths, garage, condition, lot, features). Show adjusted sale prices.
4. Incorporate market context: months of supply, DOM trends, list-to-sale ratio, price per square foot trends in the subject's micro-market.
5. Include active listings (current competition) and expired/withdrawn listings (what failed and why) if the user provides this data.
6. Generate the pricing recommendation: a range (low/mid/high) with a suggested list price and the strategic rationale behind it.
7. Format the output as a structured, presentation-ready document following the CMA Document Structure below.
8. Cross-reference `market-analysis` for deeper market indicator interpretation if the user needs help understanding their local data.

#### Category B: Comp Selection Assistance

Includes: "which comps should I use," "are these good comps," "help me choose comparables," "my seller won't like these comps."

**Workflow:**
1. Review the candidate comps against the Comp Selection Criteria (priority order below).
2. Rank the comps by overall similarity to the subject property. Explain why each comp is strong or weak.
3. Recommend the 3-6 best comps and flag any that an appraiser might reject (too far, too old, different style, etc.).
4. If the user's comps are weak, explain what makes a comp defensible and suggest tightening the search parameters.
5. Address the "seller's preferred comps" problem: sellers often cherry-pick the highest sales. Coach the agent on presenting the full picture -- including lower comps -- with adjustment context that explains the differences.

#### Category C: Adjustment Calculations

Includes: "how do I adjust for," "what's a bedroom worth," "how to adjust for a pool," "adjustment grid help."

**Workflow:**
1. Provide the standard adjustment ranges from the Key Domain Knowledge section.
2. Emphasize that adjustments are market-specific. National averages are starting points -- local paired-sales analysis is the gold standard.
3. Walk through the calculation: identify the difference between subject and comp, apply the adjustment TO THE COMP (not the subject), and show the math.
4. Explain the direction: if the comp is superior to the subject, adjust the comp's price DOWN. If the comp is inferior, adjust UP. This is the most common point of confusion.
5. Recommend the agent validate their adjustments against actual paired sales in their MLS when possible.

#### Category D: Pricing Strategy Recommendation

Includes: "what should I price this at," "pricing strategy," "should we price high or low," "the seller wants more than the comps support."

**Workflow:**
1. Review the adjusted comp data to establish the supportable price range.
2. Assess the current market conditions: seller's market (price at or slightly above), balanced (price at market), buyer's market (price competitively or slightly below).
3. Factor in the seller's timeline: if they need to sell quickly, price to generate immediate activity. If flexible, a slightly higher initial price with a planned reduction timeline may be appropriate.
4. Apply pricing psychology: search threshold alignment ($499K not $505K), the golden window (first 7-14 days), and the stale listing penalty (30+ DOM).
5. Present three pricing scenarios (aggressive, market, aspirational) with the likely outcome of each.
6. Address the overpriced listing conversation if the seller's expectations exceed the data. Cross-reference `listing-services` for scripts on managing seller pricing expectations.

#### Category E: Price Reduction Analysis

Includes: "should we reduce the price," "how much should we drop," "the listing is sitting," "no offers after X weeks."

**Workflow:**
1. Ask for current list price, DOM, showing count, feedback themes, and the original CMA data.
2. Reassess the comparable data -- pull recent sales since original listing to see if the market has shifted.
3. Recommend a reduction amount large enough to enter a new search bracket and generate renewed interest. Multiple small cuts are worse than one meaningful adjustment.
4. Provide the market math: at what price does the data say this home will sell? That is the target -- not an incremental reduction.
5. Cross-reference `listing-services` for the price reduction conversation framework.

---

## Key Domain Knowledge

### CMA Document Structure

A complete CMA contains these sections in order:

1. **Cover Page** -- Property address, agent name/branding, preparation date. Professional, clean design.
2. **Subject Property Summary** -- Beds, baths, square footage, lot size, year built, condition assessment, garage, key features, recent updates, and property photos.
3. **Market Overview** -- Neighborhood or subdivision market snapshot: months of supply, median price trends, average DOM, list-to-sale ratio, absorption rate. Establishes context before showing comps.
4. **Comparable Sales (Sold)** -- 3-6 sold comps with: address, sale price, sale date, beds/baths/sqft/lot, DOM, condition notes, and photos. These are the foundation of the pricing analysis.
5. **Adjustment Grid** -- Side-by-side comparison of subject vs. each comp with line-item adjustments. Shows adjusted sale price per comp. This is the analytical core of the CMA.
6. **Active Listings (Competition)** -- Currently listed properties the seller is competing against. Include list price, DOM, and condition comparison. Sellers need to understand their competition.
7. **Expired/Withdrawn Listings** -- Properties that failed to sell. Include original list price and DOM. These illustrate the consequence of overpricing.
8. **Pricing Recommendation** -- A price range (low/mid/high) with a specific suggested list price and the strategic rationale. Include the pricing scenario analysis.
9. **Marketing Plan Summary** -- Brief outline of what the agent will do to achieve the recommended price. Cross-reference `listing-launch-engine` for full marketing content generation.
10. **Agent Credentials** -- Track record, designations, testimonials, and local expertise. Cross-reference `value-proposition-builder` for presentation content.

### Comp Selection Criteria (Priority Order)

Select comparables in this priority:

1. **Same subdivision or neighborhood** -- The single strongest indicator. Same-subdivision comps are almost always the best comps.
2. **Recency of sale** -- Closed within 3 months (strongest), 3-6 months (acceptable), 6-12 months (use only if nothing closer exists, and note market changes since sale).
3. **Proximity** -- Within 0.5 miles (urban), 1 mile (suburban), 5 miles (rural). Closer is always better.
4. **Square footage** -- Within 10-20% of the subject. A 2,000 sqft home compared to a 3,500 sqft home is not a valid comp regardless of adjustments.
5. **Lot size** -- Within 20-25% of the subject. Matters more in suburban/rural markets and at higher price points.
6. **Age and construction era** -- A 1960s ranch and a 2020 new build are not comparable even if the specs match. Same construction decade is ideal.
7. **Condition and update level** -- Updated kitchen/bath vs. original finishes creates massive value differences that adjustments only partially capture.
8. **School district** -- Same school zone strongly preferred for family-oriented markets.
9. **Property type match** -- Single-family to single-family, condo to condo, townhome to townhome. Never mix types.

### Adjustment Framework

Adjustments are applied TO THE COMP to make it equivalent to the subject property.

**Direction rule:** If the comp is BETTER than the subject in a category, adjust the comp's price DOWN. If the comp is WORSE, adjust the comp's price UP. You are answering: "What would this comp have sold for if it were identical to my subject?"

**Standard Adjustment Ranges (starting points -- always calibrate to local market):**

| Factor | Typical Adjustment | Notes |
|--------|--------------------|-------|
| Square footage | $50-$200/sqft | Varies widely by market and price point |
| Bedroom count | +/- $5,000-$15,000 per bedroom | Less impact than sqft in most markets |
| Bathroom (full) | +/- $5,000-$10,000 per bathroom | Half-bath: roughly half of full-bath value |
| Garage stall | +/- $10,000-$20,000 per stall | Higher in cold-weather markets |
| Pool | +/- $10,000-$30,000 | Market-dependent; pools can be negative in some markets |
| Condition | +/- 5-15% of sale price | Largest and most subjective adjustment |
| Lot size | Varies by market | Minimal in urban, significant in suburban/rural |
| Basement (finished) | $20-$60/sqft of finished space | Below-grade sqft valued less than above-grade |
| View premium | $5,000-$100,000+ | Highly location-specific |
| Age/era of construction | $2,000-$10,000 per decade | More art than science; condition matters more |
| Updates (kitchen) | $10,000-$40,000 | Full renovation vs. original |
| Updates (bathroom) | $5,000-$20,000 | Full renovation vs. original |

**Net adjustment guideline:** If total net adjustments on a comp exceed 15% of its sale price, the comp is likely too dissimilar. If gross adjustments exceed 25%, the comp is weak and should be replaced or heavily discounted in the analysis.

### Market Indicators for CMA Context

| Indicator | What It Tells You | Interpretation |
|-----------|-------------------|----------------|
| Months of supply | Market balance | <3 = seller's market, 3-6 = balanced, >6 = buyer's market |
| Average DOM | Absorption speed | Rising = weakening demand, falling = strengthening |
| List-to-sale ratio | Pricing accuracy | >100% = multiple offers common, 97-100% = healthy, <97% = overpricing |
| Price per sqft trend | Value direction | Rising = appreciation, flat = stable, falling = depreciation |
| New listings vs. closings | Inventory trajectory | More new than closed = inventory building |
| Interest rate trend | Buyer purchasing power | Rate increases reduce buyer pool and max purchase price |

### Pricing Psychology

- **Search threshold pricing.** Buyers search in brackets: $400-$450K, $450-$500K. A home listed at $505K misses every buyer searching up to $500K. List at $499K or $495K instead.
- **The golden window.** A listing receives the most buyer attention in its first 7-14 days on market. Overpricing during this window wastes the best marketing period.
- **Stale listing effect.** After 30+ DOM, buyers and agents assume something is wrong -- even if the only problem was the original price. A price reduction after 45 days generates less interest than correct pricing on day one.
- **Price reduction strategy.** One meaningful reduction (3-5%) is more effective than multiple small cuts ($5K at a time). Small reductions signal desperation; a single meaningful adjustment signals a motivated, realistic seller.
- **Aspirational pricing penalty.** Pricing 5-10% above the comp-supported range typically results in selling for LESS than if the home had been correctly priced from day one, due to extended DOM and buyer fatigue.

### Appraisal Alignment

A CMA should anticipate the appraiser's analysis:

- Appraisers use the same comparable sales methodology but with stricter standards for comp selection and adjustment documentation.
- If a CMA recommends a price above the adjusted comp range, the listing is at appraisal risk. Flag this explicitly for the agent.
- Appraisers will use the best comps available at the time of appraisal (which may differ from the CMA's comps if time has passed).
- Pre-listing CMA that closely mirrors what an appraiser would produce builds agent credibility and prevents blown transactions.
- Functional obsolescence (floor plan issues, dated systems) and external obsolescence (busy road, power lines, adjacent commercial) are appraisal factors that CMAs should also address.

### Industry Standards & References

- **Uniform Standards of Professional Appraisal Practice (USPAP):** Governs formal appraisals. CMAs are NOT appraisals and do not require USPAP compliance, but using similar methodology strengthens the analysis.
- **MLS Data:** The primary source for comparable sales. Agents must use accurate, verified MLS data. Off-market sales can supplement but should be clearly labeled.
- **NAR Code of Ethics, Article 11:** Requires competence in providing opinions of value. Agents must have the market knowledge to support their CMA conclusions.
- **State licensing laws:** Some states restrict who can provide opinions of value and require disclaimers that a CMA is not an appraisal. Always include a disclaimer statement.

---

## Tone & Style by Audience

**To solo agents:** Practical and structured. Give them a complete, fill-in-the-framework CMA they can customize for their listing appointment. Focus on comp selection rationale and adjustment math they can explain to a skeptical seller. Assume they have MLS data but may not be confident in adjustment methodology.

**To team leaders:** Standardization-oriented. Help them build a consistent CMA template and methodology their entire team uses. Emphasize quality control -- a bad CMA from a junior agent damages the team's reputation with every seller.

**To broker/owners:** Quality and compliance focused. CMAs are a legal and professional liability point -- agents must include proper disclaimers, use defensible methodology, and not represent a CMA as an appraisal. Recommend periodic CMA audits across the brokerage.

**To new agents:** Educational and detailed. Walk through every step -- what makes a good comp, how adjustments work (and which direction they go), how to present the data to a seller who does not want to hear it. The CMA is where new agents either build or lose credibility on their first listing appointment.

---

## Common Scenarios & Examples

### Scenario 1: First Listing Appointment -- Full CMA Needed

**User says:** "I have a listing appointment Thursday for a 3-bed/2-bath ranch in Maple Grove, 1,850 sqft, built 1998, updated kitchen. I pulled 8 comps from MLS. Can you help me build the CMA?"

**Actions:**
1. Ask the user to provide the full details on the 8 comps: address, sale price, sale date, beds/baths/sqft/lot, garage, condition, updates, and DOM.
2. Evaluate each comp against the selection criteria. Rank them and recommend the best 4-5 for the analysis. Explain why any are excluded (too far, too old, different style, excessive adjustment needed).
3. Build the adjustment grid: calculate line-item adjustments for each selected comp against the subject (sqft, beds, baths, garage, condition/updates, lot). Show the adjusted sale price for each.
4. Identify the adjusted price range. If the range is tight (e.g., $385K-$405K), the pricing is clear. If wide (e.g., $360K-$430K), discuss which comps are most reliable and weight accordingly.
5. Generate the full CMA document following the 10-section structure: cover page through agent credentials.
6. Include a pricing recommendation with three scenarios: competitive ($X -- likely fastest sale), market ($Y -- balanced approach), and aspirational ($Z -- risk of extended DOM, flag appraisal concern if applicable).
7. Suggest the agent cross-reference `listing-launch-engine` to generate the marketing materials referenced in the CMA's marketing plan section.

### Scenario 2: Seller Disputes the CMA Price

**User says:** "My seller says the CMA is too low. Their neighbor sold for $50K more last year and their home is 'just as nice.' How do I handle this?"

**Actions:**
1. Ask for details on the neighbor's sale -- address, sale price, date, and property specs. Pull this into the adjustment grid alongside the other comps.
2. Show the adjustment math: if the neighbor's home was 400 sqft larger, had a finished basement, or had a newer roof, those differences have dollar values. The $50K gap likely disappears (or reverses) after adjustments.
3. Generate a one-page "comp comparison" addendum showing the neighbor's home vs. the subject with every relevant adjustment, arriving at what the neighbor WOULD have sold for if it were identical to the subject.
4. Coach the agent on delivery: "I included your neighbor's sale in the analysis. Here's what happens when we account for the differences..." This makes the seller part of the analysis, not the audience for a verdict.
5. If the seller still insists on a higher price, provide the three-scenario pricing format showing the likely outcome at each price point, including expected DOM and the risk of a stale listing.
6. Cross-reference `listing-services` for the overpriced listing conversation framework.

### Scenario 3: Unique Property with Limited Comps

**User says:** "I need to price a 5-acre horse property with a barn. There are only 2 comps in the last year within 10 miles. How do I build a CMA with so little data?"

**Actions:**
1. Acknowledge the challenge -- unique and rural properties are the hardest to price accurately. Explain that the CMA will require a broader approach.
2. Expand the comp search parameters: extend the time range to 12 months, widen the radius, and consider properties with some but not all features (e.g., acreage homes without the barn, or horse properties in adjacent markets).
3. Use a "bracket" approach: find comps that are clearly above (superior properties) and clearly below (inferior properties) the subject, then position the subject within that range using adjustment logic.
4. Break the property into components: value the home portion using residential comps (adjusted for acreage premium), then add the barn/equestrian facilities based on comparable accessory structure sales or cost-to-build estimates.
5. Include a wider-than-normal price range in the recommendation and explain to the seller why: limited data means less precision. Recommend a pricing strategy that tests the market with a planned review at 21 days.
6. Flag that unique properties are higher appraisal risk. The appraiser will face the same comp limitations, and an aggressive price increases the chance of an appraisal shortfall.
7. Cross-reference `market-analysis` for guidance on interpreting thin market data.

### Scenario 4: Quick Price Check -- No Full CMA Needed

**User says:** "A past client just texted me asking what their house is worth. I don't need a full CMA, just a quick range. 4-bed/3-bath colonial, 2,400 sqft, built 2005, good condition, in Riverside subdivision."

**Actions:**
1. Clarify that a quick estimate is not a substitute for a full CMA if the client is considering listing. But for a ballpark, provide a framework.
2. Ask for the 3 most recent sales in Riverside subdivision (or the closest comparable subdivision) with sale prices and basic specs.
3. Calculate a price-per-square-foot range from those sales and apply it to the subject's 2,400 sqft to produce a rough range.
4. Add qualitative adjustments: "good condition" and 4-bed/3-bath in a 2005 colonial likely positions in the upper half of the price-per-sqft range.
5. Provide a range (e.g., "$425K-$460K based on recent Riverside sales") with the caveat that a full CMA with proper adjustments would narrow this.
6. Suggest the agent use this as a reason to schedule a listing consultation: "I ran a quick analysis and your home is likely in the $425-$460K range. I'd love to do a full market analysis for you -- are you free this week?"

### Scenario 5: Preparing for a Price Reduction

**User says:** "My listing has been on the market 38 days at $549K. We've had 12 showings but no offers. Feedback says it's overpriced. What should we reduce to?"

**Actions:**
1. Ask for the original CMA data, any new sales since listing, showing feedback specifics, and current competition (active listings in the same range).
2. Rebuild the comparable analysis with current data -- any comps that closed in the past 38 days update the picture.
3. Calculate the comp-supported range using current data. If the data says $510-$525K, that is where the market is.
4. Recommend pricing at or slightly below the midpoint of the current range -- not a small cut from $549K. A reduction to $525K enters a new search bracket ($500-$525K) and signals a meaningful adjustment.
5. Show the math: "$549K to $539K is a $10K cut that keeps the listing in the same search bracket and won't change buyer perception. $549K to $519K enters the $500-$525K bracket, captures a new buyer pool, and positions competitively against current competition at $515K and $529K."
6. Generate an updated pricing addendum the agent can present to the seller showing the new comp data, the recommended price, and the strategic rationale.

---

## Important Caveats

- **A CMA is not an appraisal.** Every CMA document must include a disclaimer: "This Comparative Market Analysis is not an appraisal. It is an estimate of market value based on comparable sales and current market conditions. For a formal valuation, engage a licensed appraiser." Some states require specific disclaimer language -- verify with the state real estate commission.
- **Adjustment values vary significantly by market.** The ranges provided are national starting points. A bedroom is worth $5,000 in a $200K market and $25,000 in a $1M market. Agents must calibrate adjustments using local paired-sales analysis or local appraiser guidance.
- **State-specific restrictions apply.** Some states restrict agents from providing written opinions of value or require specific disclosures when doing so. Verify your state's rules before presenting a CMA as a formal document. Varies by state -- check with your state's real estate commission.
- **Data quality determines CMA quality.** Garbage in, garbage out. If MLS data is incomplete, inaccurate, or if comps are poorly selected, the CMA will mislead. Always verify comp details when possible and disclose data limitations.
- **This skill generates analysis and documents, not property valuations with legal standing.** The CMA is a marketing and consulting tool. It does not replace professional appraisal for lending, tax, or legal purposes.
- **Market conditions change.** A CMA has a shelf life of 2-4 weeks in active markets. If more than 30 days pass between CMA preparation and listing, the analysis should be refreshed with current data.
