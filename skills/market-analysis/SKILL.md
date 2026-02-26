---
name: market-analysis
description: "Market analysis and property valuation for real estate agents. Triggers on market conditions, trends, absorption rate, months of supply, DOM, price per sqft, comps, pricing strategy, neighborhood analysis, market stats, buyer's vs seller's market, market forecast. Also: 'what's the market doing', 'how do I analyze my market', 'what are homes selling for', 'is this a good price', 'how to read market data', 'list-to-sale ratio', 'months of inventory', 'market update'."
---

# Market Analysis

Market intelligence and property valuation expertise for residential real estate agents. This skill covers the analytical foundation that underpins pricing, negotiation, listing strategy, and investment analysis. Agents who can read market indicators at the neighborhood level -- not just city-wide averages -- win more listings, write stronger offers, advise clients with confidence, and avoid the single most expensive mistake in real estate: mispricing a property. This skill provides the interpretive framework; for document generation, see the `cma-generator` skill.

## Core Principles

1. **Micro-market data beats macro-market narratives.** National headlines and even metro-level statistics are nearly useless for pricing a specific home. The absorption rate in a single subdivision tells you more about a property's likely trajectory than anything on cable news. Always ground analysis in the smallest defensible geographic unit: subdivision, neighborhood, school zone, or zip code.
2. **Every indicator tells a story only in context.** Days on market, months of supply, list-to-sale ratio -- none of these means anything in isolation. A 15-day average DOM in a luxury market is exceptional; the same number in a starter-home market may signal weak demand. Interpret indicators relative to the property's price tier, geographic micro-market, and seasonal norms.
3. **Data informs strategy; strategy serves the client.** Market analysis is not an academic exercise. Every data point should connect to an actionable recommendation: price here, list now, wait until spring, negotiate harder, accept the offer. If an analysis does not lead to a decision, it is incomplete.

---

## Instructions

### How to Respond to Market Analysis & Valuation Queries

When a user asks a question in this domain, identify the category and follow the appropriate workflow:

#### Category A: Market Conditions Assessment

Includes: "what's the market doing," "is it a buyer's or seller's market," "how's the market in [area]," "market update for my farm area," "should my client buy/sell now."

**Workflow:**
1. Ask for the geographic scope: city, zip code, neighborhood, or subdivision. Narrower is always better. If the user provides only a city, clarify that city-level data masks significant variation by neighborhood and price tier.
2. Request the user's available data: months of supply, average DOM, list-to-sale ratio, median price trends, active inventory count, and closed sales volume for the past 3-6 months. If they have MLS access, guide them on which reports to pull.
3. Interpret the indicators together using the Market Indicator Framework below. Classify the market as seller's, balanced, or buyer's -- then add nuance: "It is a seller's market overall, but the $600K+ segment has softened to balanced."
4. Identify the trend direction: is the market tightening, stable, or loosening? Compare current indicators to 3-month and 12-month prior values. Trend direction matters more than the snapshot.
5. Connect the analysis to an actionable recommendation: if the user is advising a seller, translate the data into pricing and timing strategy. If advising a buyer, translate into offer strategy and urgency level.
6. Flag seasonal patterns if relevant: spring typically brings higher inventory and buyer competition, winter typically favors serious buyers with less competition.

#### Category B: Market Indicators Interpretation

Includes: "what does months of supply mean," "how do I calculate absorption rate," "explain list-to-sale ratio," "what DOM tells me," "how to read market statistics."

**Workflow:**
1. Define the specific indicator using the Market Indicator Framework below. Provide the formula, interpretation thresholds, and what the indicator reveals about supply-demand dynamics.
2. Show how to calculate it from MLS data. Walk through a concrete example: "If there are 120 active listings and 40 homes sold last month, months of supply = 120 / 40 = 3.0 months."
3. Explain what changes in the indicator mean: rising months of supply signals a market shifting toward buyers; falling DOM signals increasing demand or tighter inventory.
4. Warn against common misinterpretations: average DOM inflated by stale listings that skew the data, list-to-sale ratio distorted by new construction priced to sell at list, months of supply meaningless without segmentation by price tier.
5. Recommend the user track 4-6 key indicators monthly in their farm area to build a proprietary market intelligence advantage most agents lack.

#### Category C: Neighborhood-Level Micro-Market Analysis

Includes: "analyze this neighborhood," "what's happening in [subdivision]," "micro-market trends," "farm area analysis," "neighborhood report for clients."

**Workflow:**
1. Define the micro-market boundaries: specific subdivision, school attendance zone, zip code, or custom boundary. Caution against defining boundaries that are too large -- a 3-mile radius in a metro area likely encompasses multiple distinct micro-markets.
2. Request data for that specific boundary: closed sales (3-6 months), active listings, pending sales, expired/withdrawn listings, price per square foot trend, and DOM trend.
3. Analyze supply-demand balance within the micro-market. Even in a city-wide seller's market, specific neighborhoods may be balanced or favoring buyers due to new construction, school redistricting, or infrastructure changes.
4. Identify value drivers and detractors specific to the area: school quality, walkability, new development, commercial encroachment, HOA changes, planned infrastructure (highway, transit), environmental factors (flood zone changes, utility easements).
5. Build a narrative the agent can use with clients: "Homes in Oakwood Estates are averaging 12 DOM with a 99% list-to-sale ratio. That is significantly stronger than the city-wide 28 DOM and 97% list-to-sale. If you are listing here, price at the top of the comp-supported range."
6. Cross-reference `cma-generator` if the user needs to turn this analysis into a CMA document. Cross-reference `listing-services` for pricing strategy application.

#### Category D: Pricing Strategy Development

Includes: "how should I price this," "pricing strategy," "is this price right," "should we price above or below comps," "price positioning."

**Workflow:**
1. Gather the comparable sales data: 3-6 closed sales with prices, dates, and basic property details. Also request active competition (currently listed homes in the same micro-market and price tier).
2. Establish the comp-supported price range using the Adjustment Framework (see `cma-generator` for detailed adjustment methodology). The market analysis contribution is placing the range in context.
3. Overlay market conditions: in a seller's market (months of supply <3, DOM declining, list-to-sale >100%), pricing at or slightly above the comp range is defensible. In a buyer's market (months of supply >6, DOM rising, list-to-sale <97%), pricing at or below the range generates more activity.
4. Apply pricing psychology: search threshold alignment ($499K not $505K), the golden window (first 7-14 days of maximum exposure), and the aspiration penalty (overpriced listings accumulate DOM stigma and ultimately sell for less).
5. Present the recommendation as three scenarios with expected outcomes. Cross-reference `listing-services` for the overpriced listing conversation if the seller's expectations exceed the data.

#### Category E: Investment Property Analysis

Includes: "cap rate," "cash-on-cash return," "rental yield," "is this a good investment property," "investment property analysis," "ROI on a rental."

**Workflow:**
1. Gather property details: purchase price (or asking price), estimated rental income (monthly), property taxes, insurance, HOA, estimated maintenance/reserves, vacancy rate assumption, and financing terms (down payment, rate, term).
2. Calculate the core investment metrics (see Investment Analysis Basics below): cap rate, cash-on-cash return, gross rental yield, and monthly cash flow.
3. Provide benchmark context: cap rates vary dramatically by market and asset class. A 5% cap rate in a high-appreciation market may outperform an 8% cap rate in a flat market when total return (cash flow + appreciation) is considered.
4. Flag key risks: vacancy rate assumptions (use 5-8% for single-family, 8-10% for multi-family), maintenance reserves (budget 1-2% of property value annually), capital expenditure timing (roof, HVAC, water heater), and tenant quality/management costs.
5. Note that this skill provides agent-level investment analysis for advising investor clients. For complex portfolio analysis, recommend the client consult a financial advisor or CPA. Cross-reference `financial-performance` for the agent's own business investment decisions.

---

## Key Domain Knowledge

### Market Indicator Framework

| Indicator | Formula | Thresholds | What It Reveals |
|-----------|---------|------------|-----------------|
| **Months of supply** | Active listings / monthly closed sales | <3 = seller's market; 3-6 = balanced; >6 = buyer's market | Supply-demand balance. The single most important market indicator. |
| **Absorption rate** | Monthly closed sales / active listings | Inverse of months of supply; expressed as % of inventory absorbed per month | Speed at which the market consumes available inventory. |
| **Average DOM** | Mean days from list to pending | <14 = hot; 14-30 = active; 30-60 = normal; >60 = slow | Demand intensity. Track the trend, not just the number. |
| **Median DOM** | Midpoint days from list to pending | Preferred over average; not skewed by stale outliers | More accurate demand signal than average DOM. |
| **List-to-sale ratio** | Sale price / list price x 100 | >100% = multiple offers common; 97-100% = healthy; <97% = overpricing present | Pricing accuracy and negotiation leverage. |
| **Price per sqft trend** | Median $/sqft by month or quarter | Rising = appreciation; flat = stable; declining = depreciation | Value direction for the micro-market. Track by property type and age. |
| **New listings vs. closings** | Monthly new listings / monthly closings | >1 = inventory building; <1 = inventory shrinking; =1 = stable | Inventory trajectory. Leading indicator of where months of supply is headed. |
| **Pending-to-active ratio** | Pending listings / active listings | >0.5 = strong demand; 0.3-0.5 = moderate; <0.3 = weak | Forward-looking demand indicator. |
| **Price reduction %** | Listings with price cuts / total active listings | <15% = strong pricing; 15-25% = normal; >25% = widespread overpricing | Overall pricing health of the market. |

### How to Calculate and Source Each Indicator

**From MLS reports:**
- Most MLSs provide monthly market statistics by area, zip code, and property type. Look for "Market Statistics," "Market Snapshot," or "Monthly Indicators" reports.
- For months of supply: pull current active listings count and the past month's closed sales count. Divide active by closed.
- For DOM trends: pull average and median DOM for the current month and compare to the same month in the prior year (to account for seasonality).
- For list-to-sale ratio: available in most MLS statistical reports. If not, calculate from individual sale records.

**Segmentation is critical:** Always analyze by price tier and property type. A market can be a seller's market under $400K and a buyer's market above $700K simultaneously. A single "market conditions" number for an entire city is misleading.

### Seasonal Patterns in Residential Real Estate

| Season | Typical Pattern | Strategic Implication |
|--------|----------------|----------------------|
| **Spring (Mar-May)** | Highest inventory, most buyer activity, peak competition | Best time to list for maximum exposure; offers may face competition |
| **Summer (Jun-Aug)** | High activity continues but begins tapering late summer; families want to move before school starts | Strong selling season; urgency decreases in late August |
| **Fall (Sep-Nov)** | Inventory declines, serious buyers remain, less competition | Good for sellers who price correctly; fewer lookers, more serious buyers |
| **Winter (Dec-Feb)** | Lowest inventory and activity; motivated buyers with less competition | Sellers face smaller buyer pool but also less competition; buyers may find better negotiation leverage |

**Seasonal adjustment warning:** Year-over-year comparisons (this January vs. last January) are more meaningful than month-over-month (January vs. December) because seasonal swings distort sequential comparisons.

### Pricing Psychology and Strategy

**Search threshold pricing:** Buyers search in price brackets on every major portal (Zillow, Realtor.com, Redfin). Common brackets: $200-$250K, $250-$300K, $300-$350K, $350-$400K, $400-$450K, $450-$500K. A home listed at $505K is invisible to every buyer searching "$400K-$500K." List at $499K or $495K to capture the maximum buyer pool.

**The golden window:** The first 7-14 days on market generate the highest buyer interest. This is when the listing appears as "new" in buyer search alerts and agent notifications. Overpricing during this window wastes the single best marketing period permanently -- you cannot get it back with a price reduction later.

**Stale listing psychology:** After 30+ DOM, buyers assume something is wrong. Common buyer reactions: "Why hasn't it sold?" "There must be a problem." "Let's lowball them -- they're desperate." Extended DOM suppresses offers and invites aggressive negotiation. Correct pricing from day one avoids this entirely.

**Price reduction principles:**
- Trigger: fewer than expected showings and no offers after 14-21 days.
- One meaningful reduction (3-5%) outperforms multiple incremental cuts. Reducing by $5K repeatedly signals desperation and trains the market to wait for the next cut.
- The reduction must move the listing into a new search bracket to capture a new buyer pool.
- After a reduction, treat it as a relaunch: refresh the MLS description, update photos if seasonal, and push new marketing as "New Price."

### Appraisal Process for Agents

Agents do not perform appraisals, but understanding the process is essential for advising clients:

- **Who orders it:** The lender orders the appraisal after a purchase contract is executed. The buyer typically pays ($400-$700 for single-family residential).
- **Methodology:** The appraiser uses the same comparable-sales approach as a CMA but with stricter standards under USPAP (Uniform Standards of Professional Appraisal Practice). They also consider the cost approach and income approach where applicable.
- **Comp selection:** Appraisers prefer closed sales within 90 days and 1 mile. They may use 6-12 month sales in slow markets or for unique properties. They adjust for differences using market-derived adjustment factors.
- **Common appraisal issues:** (a) Contract price exceeds adjusted comp range -- appraisal shortfall, (b) Best comps are older than 6 months -- appraiser may not find support for current market appreciation, (c) Unique features (view, acreage, pool) -- adjustments are difficult to support with paired sales.
- **When the appraisal comes in low:** The buyer can (1) renegotiate the price, (2) pay the gap in cash, (3) walk away if the appraisal contingency is in place, or (4) challenge the appraisal with additional comps. Cross-reference `negotiation-strategy` for appraisal gap negotiation tactics.
- **Agent's role:** Provide the appraiser with a packet at or before the inspection: list of comparable sales used in the CMA, description of recent updates, and any relevant market context. Do not pressure the appraiser -- this violates federal law (Dodd-Frank).

### Investment Analysis Basics

For agents advising investor-buyers or evaluating rental properties:

**Cap Rate (Capitalization Rate):**
- Formula: Net Operating Income (NOI) / Purchase Price x 100
- NOI = Annual Gross Rent - Operating Expenses (taxes, insurance, maintenance, management, vacancy)
- NOI does NOT include debt service (mortgage payments).
- Benchmark: varies wildly by market. 4-6% in high-appreciation metros (LA, Austin, Denver). 7-10% in Midwest/Southern cash-flow markets. Higher cap rate = more current income but often less appreciation.

**Cash-on-Cash Return:**
- Formula: Annual Pre-Tax Cash Flow / Total Cash Invested x 100
- Cash invested includes down payment, closing costs, and initial rehab.
- This metric captures the actual return on the investor's out-of-pocket money, including the effect of leverage (mortgage).
- Benchmark: 8-12% is a solid cash-on-cash return. Below 5% is generally weak unless appreciation expectations are high.

**Gross Rental Yield:**
- Formula: Annual Gross Rent / Purchase Price x 100
- Quick screening metric. Does not account for expenses.
- Benchmark: the "1% rule" (monthly rent should be approximately 1% of purchase price) is a rough filter. A $200K property should rent for approximately $2,000/month. Markets where this rule works are increasingly rare in high-cost areas.

**Monthly Cash Flow:**
- Formula: Monthly Rent - Mortgage Payment - Taxes - Insurance - HOA - Maintenance Reserve - Vacancy Reserve - Property Management Fee
- Positive cash flow is the baseline requirement for most buy-and-hold investors.
- Caution: many "positive cash flow" projections use unrealistic vacancy (2%) and maintenance (3%) assumptions. Use 5-8% vacancy and 8-10% maintenance/capex reserves for conservative analysis.

### Industry Standards & References

- **National Association of REALTORS (NAR):** Publishes monthly Existing Home Sales report, Pending Home Sales Index, and REALTORS Confidence Index -- all useful for national and regional trend context.
- **Federal Housing Finance Agency (FHFA):** Publishes the House Price Index (HPI) -- the most reliable home price index based on repeat-sale methodology.
- **S&P CoreLogic Case-Shiller Index:** 20-city composite index used by media and economists. Useful for metro-level trend tracking.
- **U.S. Census Bureau / HUD:** New Residential Construction (housing starts, permits, completions) -- forward-looking indicator of future inventory.
- **Freddie Mac Primary Mortgage Market Survey (PMMS):** Weekly average mortgage rate data. Directly impacts buyer purchasing power and demand.
- **Local MLS:** The primary and most reliable source for micro-market data. National indices do not capture neighborhood-level dynamics.

---

## Tone & Style by Audience

**To solo agents:** Actionable and empowering. Solo agents often feel outgunned by teams with data analysts and marketing departments. Give them a framework to become the local market expert: which 5 indicators to track monthly, how to build a neighborhood report they can share with clients and on social media, and how to translate data into listing presentations that win. Make the data feel accessible, not academic.

**To team leaders:** Systematized and scalable. They need every agent on their team interpreting market data consistently. Provide a standardized market analysis framework the team can use, a monthly market meeting agenda, and KPIs for market knowledge competency. Emphasize that a team where every agent can articulate local market conditions confidently outsells one that depends on a single rainmaker.

**To broker/owners:** Strategic and risk-aware. Brokers care about market analysis at two levels: (1) ensuring their agents provide accurate, defensible pricing advice that avoids litigation and complaints, and (2) understanding macro trends that affect brokerage strategy -- hiring, expansion, marketing spend. Focus on quality control over agent CMAs, liability from inaccurate pricing opinions, and market trend implications for business planning.

**To new agents:** Confidence-building and practical. New agents are often intimidated by market data because they lack historical context. Teach them the 5 core indicators, show them exactly where to find the data in their MLS, and give them a script for discussing market conditions with clients: "Based on the current data in your neighborhood, here's what we're seeing..." A new agent who can cite specific local statistics instantly sounds more credible than a 20-year veteran who speaks in generalities.

---

## Common Scenarios & Examples

### Scenario 1: Client Asks "Is It a Good Time to Buy?"

**User says:** "My buyer keeps asking if it's a good time to buy. Rates are at 6.5% and they're nervous. How do I advise them?"

**Actions:**
1. Reframe the question from timing the market to analyzing the client's specific situation: their timeline, financial readiness, local market conditions, and personal needs. Nobody can time the market -- but they can make an informed decision based on current data.
2. Present the relevant local data: months of supply (are buyers competing or negotiating?), DOM trend (is urgency high or are they in a position to take their time?), list-to-sale ratio (are they likely to pay over asking or negotiate below?), and price trend (are values rising, stable, or softening?).
3. Address the rate concern directly: "The rate you buy at is not the rate you keep. If rates drop, you refinance. If you wait for lower rates, you compete with every other buyer who also waited -- driving prices up. The cost of waiting is not just continued rent payments; it is the appreciation you miss and the increased competition when rates eventually fall."
4. Provide the math: "At 6.5% on a $400K home with 10% down, your payment is approximately $2,275/month. If rates drop to 5.5% in 18 months and you refinance, your payment drops to approximately $2,044. But if home prices rise 4% in those 18 months, you paid $16,000 more for the same house."
5. Conclude with the agent's role: "My job is not to tell you when to buy -- it is to make sure you have the data to make a confident decision. Based on the current market in [area], here is what the data says about buyer leverage right now."
6. Cross-reference `buyer-representation` for the full buyer consultation framework. Cross-reference `mortgage-financing-guide` for rate discussion details.

### Scenario 2: Preparing a Farm Area Market Report

**User says:** "I want to send a monthly market report to my farm area of 500 homes in the Willowbrook subdivision. What data should I include and how do I present it?"

**Actions:**
1. Define the data set: pull all activity in Willowbrook specifically -- closed sales, new listings, pending, active, expired, and withdrawn for the current month and prior 12 months.
2. Build the report around 5-6 key indicators presented simply: (a) Homes sold this month and average sale price, (b) Average DOM, (c) List-to-sale ratio, (d) Months of supply, (e) Price per square foot trend (3-month moving average), (f) Active inventory count.
3. Add context the reader can understand: "With 2.1 months of supply, Willowbrook remains a seller's market. Homes are selling in an average of 11 days at 101% of list price. If you have been considering selling, buyer demand in the neighborhood is strong."
4. Include a "Featured Sale" section: highlight a recently closed home with photo, sale price, DOM, and a brief note. This personalizes the data and demonstrates your activity in the area.
5. End with a clear call to action: "Curious what your home would sell for in today's market? I track Willowbrook sales daily. Contact me for a confidential market analysis."
6. Format for print (postcard or letter) and digital (email, social media graphic). Consistency matters more than design -- send it every month without fail. The agent who provides consistent, specific local data earns the "neighborhood expert" positioning over time. Cross-reference `listing-launch-engine` if the user wants help generating the marketing content.

### Scenario 3: Interpreting Conflicting Market Signals

**User says:** "My market is confusing right now. Prices are still going up, but DOM is increasing and inventory is growing. Is the market shifting? What do I tell my clients?"

**Actions:**
1. Validate the observation: this pattern is common in a market transitioning from a strong seller's market to a more balanced one. It is not contradictory -- it is sequential. Inventory builds first, DOM extends second, price appreciation slows third, and price corrections (if they happen) come last.
2. Explain the indicator sequence: "Think of these indicators as dominoes. Inventory increases (domino 1). It takes longer to sell because buyers have more options (domino 2 -- rising DOM). Sellers still price based on last quarter's data, so prices continue rising briefly (domino 3). Eventually, pricing adjusts to the new supply-demand reality (domino 4)."
3. Quantify where the market is in the sequence: "If months of supply moved from 1.5 to 3.2 in three months, that is a significant shift from hot to balanced. But if it moved from 1.5 to 2.0, you are still firmly in seller's territory with a slight moderation."
4. Translate into client-specific advice. For sellers: "The window of maximum leverage is narrowing. Pricing correctly from day one is more important now than it was 6 months ago. Overpricing will be punished faster as buyers gain options." For buyers: "You are gaining leverage. Multiple-offer situations are becoming less common, and negotiation room is increasing. This is actually a more favorable environment for buyers."
5. Recommend tracking the data monthly to confirm the trend direction. One month of rising inventory could be seasonal; three consecutive months is a trend.

### Scenario 4: Comparing Two Markets for a Relocating Client

**User says:** "My buyer is relocating from Austin to Nashville. They're used to the Austin market and think Nashville prices seem cheap. How do I set their expectations?"

**Actions:**
1. Pull key indicators for both markets to create a side-by-side comparison: median home price, price per square foot, months of supply, average DOM, list-to-sale ratio, property tax rate, and year-over-year price appreciation.
2. Highlight the differences that matter most to the buyer's purchasing experience: "Nashville's median is $X vs. Austin's $Y, but Nashville property taxes are Z% vs. Austin's W%. Your monthly payment may be closer than the sticker price suggests."
3. Address the "cheap" perception carefully: "Nashville is not cheap -- it is priced differently. You are also buying into a different appreciation trajectory, tax structure, and inventory level. Let me show you what the data says about where Nashville values are headed."
4. Focus on the micro-market, not the metro comparison. "Nashville" is meaningless for buying decisions. The buyer needs data on the specific neighborhoods they are considering: Germantown, East Nashville, Franklin, and Brentwood are four entirely different markets within "Nashville."
5. Provide a realistic expectation framework for the buying process in the new market: DOM, competition level, offer strategy norms, inspection negotiation customs (these vary regionally), and closing timeline. Cross-reference `buyer-representation` and `offer-writer` for market-specific offer strategy.

---

## Important Caveats

- **All market analysis is local.** National statistics, media headlines, and even metro-level data can be misleading when applied to a specific neighborhood or property type. Always ground analysis in the smallest reliable geographic unit. A "national housing slowdown" may not exist in the client's subdivision.
- **State-specific variations affect interpretation.** Disclosure rules, closing customs, property tax structures, and HOA regulations vary by state and directly impact pricing and market dynamics. Varies by state -- verify with the applicable state real estate commission.
- **Market analysis is not a prediction.** Identifying trends and interpreting indicators is not the same as forecasting the future. No agent, economist, or algorithm reliably predicts housing prices. Present data, identify trends, and qualify conclusions: "Based on current data, the market is..." -- never "The market will..."
- **Data quality determines analysis quality.** MLS data can be incomplete, incorrectly entered, or delayed. Off-market sales are invisible. Non-arm's-length transactions (family sales, foreclosures, estate sales) can distort averages. Always scrutinize data quality before drawing conclusions.
- **A CMA is not an appraisal.** Agents provide market analyses and pricing opinions, not formal appraisals. In some states, presenting a CMA as a formal appraisal is a licensing violation. Include appropriate disclaimers on all written pricing analyses. Varies by state -- check with your state's real estate commission.
- **Investment analysis is agent-level guidance, not financial advice.** Cap rate, cash-on-cash, and rental yield calculations are tools for helping investor clients evaluate properties. For tax implications, entity structuring, portfolio strategy, and complex financial decisions, the client should consult a CPA or financial advisor. This skill does not replace professional financial counsel.
- **Interest rate impact is real but unpredictable.** Rate changes affect buyer purchasing power and demand. A 1% rate increase reduces a buyer's purchasing power by approximately 10%. But do not attempt to predict rate movements -- advise clients based on current rates and their personal financial situation, not speculation about where rates are going.
