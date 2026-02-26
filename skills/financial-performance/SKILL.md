---
name: financial-performance
description: "Financial performance and tax planning for real estate agents. Triggers on GCI, take-home pay, taxes, quarterly taxes, self-employment tax, business expenses, S-corp, LLC, entity structure, 1099, deductions, vehicle deduction, home office, retirement, SEP-IRA, Solo 401(k), P&L, budgeting. Also: 'how much am I actually making', 'what should I set aside for taxes', 'is an S-corp worth it', 'am I profitable', 'what can I deduct', 'effective hourly rate'."
---

# Financial Performance

The "uncomfortable truth" skill. Most real estate agents cannot answer the question: "How much do you actually make?" They know their GCI. They do not know their take-home. This skill forces clarity -- running the numbers from gross commission income through brokerage splits, business expenses, self-employment tax, income tax, and state tax to arrive at the actual dollars that reach the agent's bank account. It serves solo agents trying to understand their profitability, team leaders modeling compensation structures, broker/owners evaluating agent economics, and new agents who have never filed a 1099 return. The goal is not to depress agents -- it is to arm them with the financial awareness to make better decisions about expenses, entity structure, tax strategy, lead source allocation, and business growth.

## Core Principles

1. **Real numbers, not round numbers.** Never let an agent walk away thinking GCI equals income. Every calculation must flow from gross commission through every deduction layer to actual take-home. The gap between what agents think they earn and what they actually keep is where bad decisions live.
2. **Tax compliance is not optional.** Quarterly estimated payments, contemporaneous mileage logs, proper entity elections, and accurate deduction documentation are professional obligations. Agents who ignore taxes do not save money -- they accumulate penalties and interest.
3. **Every dollar spent must justify itself.** Business expenses are not "write-offs" that cost nothing. A $1,000 marketing expense in the 30% effective tax bracket still costs $700 in real cash. Teach agents to evaluate expenses as investments with measurable returns, not as tax deductions that "pay for themselves."

---

## Instructions

### How to Respond to Financial Performance Queries

When a user asks a question in this domain, identify the category and follow the appropriate workflow:

#### Category A: GCI-to-Net Income Analysis

Includes: how much am I making, what's my take-home, am I profitable, income analysis, effective hourly rate, what am I actually earning.

**Workflow:**
1. Ask for (or estimate from context): annual GCI, brokerage split/cap structure, and state of residence.
2. Walk through the full GCI-to-net waterfall: GCI minus brokerage split minus transaction fees minus business expenses minus self-employment tax minus federal income tax minus state income tax equals take-home.
3. Calculate effective hourly rate: estimate total hours worked (typical agent works 45-55 hours/week, 48-50 weeks/year) and divide take-home by total hours.
4. Present the result without softening it. If an agent earning $120K GCI takes home $38K, say that clearly. Then pivot to what they can control: expense reduction, entity optimization, tax strategy, and revenue growth.
5. Cross-reference `commission-strategy` if the brokerage split is the largest drag on income. Cross-reference `business-planner` if the issue is volume rather than margins.

#### Category B: Tax Planning & Quarterly Estimates

Includes: quarterly taxes, estimated payments, what to set aside for taxes, self-employment tax, tax deadlines, underpayment penalties, how taxes work for 1099.

**Workflow:**
1. Explain the 1099 independent contractor tax reality: no employer withholding means the agent is responsible for both sides of FICA (15.3% SE tax) plus federal and state income tax.
2. Calculate the agent's estimated quarterly payment using the safe harbor method (100% of prior year tax liability, or 110% if AGI exceeded $150K).
3. Provide the quarterly due dates: Q1 April 15, Q2 June 15, Q3 September 15, Q4 January 15 of the following year.
4. Recommend a tax reserve percentage based on their income level. General guidance: set aside 25-30% of net business income for agents under $100K net, 30-35% for $100K-$250K, and 35-40% for $250K+.
5. Reference `references/agent-tax-guide.md` for detailed brackets, SE tax math, and safe harbor rules.

#### Category C: Business Entity Structure

Includes: should I form an LLC, S-Corp election, entity comparison, is an S-corp worth it, when to switch entities, reasonable salary.

**Workflow:**
1. Ask for current GCI or net business income and current entity structure.
2. Explain the three main options: sole proprietorship (default), single-member LLC (liability protection, same tax treatment), and S-Corp election (LLC or corporation electing S-Corp status for SE tax savings).
3. Run the S-Corp savings calculation: compare SE tax on full net income (sole prop/LLC) versus SE tax on reasonable salary only (S-Corp), subtract S-Corp compliance costs (payroll service ~$500-$1,500/year, additional tax return ~$1,000-$2,500/year).
4. Provide the general threshold: S-Corp election typically makes financial sense when net business income consistently exceeds $60K-$80K. Below that, the compliance costs eat the savings.
5. State clearly: this is general guidance. The agent should confirm with a CPA who specializes in real estate or self-employment before making entity elections.

#### Category D: Expense Tracking & Deductions

Includes: what can I deduct, how to track expenses, business expense categories, vehicle deduction, home office, which expenses are deductible, am I missing deductions.

**Workflow:**
1. Provide the complete list of deductible expense categories for RE agents (see Key Domain Knowledge below).
2. For vehicle deduction questions, compare standard mileage rate ($0.70/mile for 2025) versus actual expense method, and advise which is typically better based on their situation.
3. For home office questions, compare simplified method ($5/sq ft, max $1,500) versus actual method, and note the exclusive-use requirement.
4. Emphasize contemporaneous recordkeeping: mileage logs must be kept in real time, not reconstructed at tax time. The IRS can disallow the entire vehicle deduction if the log is not contemporaneous.
5. Recommend a monthly expense review cadence and categorization system. Agents who wait until April to organize receipts leave money on the table and create audit risk.

#### Category E: Retirement & Long-Term Planning

Includes: retirement options, SEP-IRA, Solo 401(k), retirement savings, how to save for retirement as an agent, Roth IRA.

**Workflow:**
1. Explain why retirement planning is critical for 1099 agents: no employer 401(k), no employer match, Social Security benefits based on SE earnings after deductions.
2. Compare the four main options: SEP-IRA, Solo 401(k), Traditional IRA, Roth IRA. Include contribution limits and eligibility.
3. Recommend based on income level: under $75K net, start with Roth IRA + SEP-IRA. Over $75K, evaluate Solo 401(k) for higher contribution limits and Roth option. Over $150K, maximize Solo 401(k) with both employee and employer contributions.
4. Note the tax benefit: SEP-IRA and traditional Solo 401(k) contributions reduce taxable income dollar-for-dollar.
5. Reference `references/agent-tax-guide.md` for detailed plan comparison tables and contribution limits.

---

## Key Domain Knowledge

### The GCI-to-Net Waterfall

This is the core framework. Every financial conversation starts here.

| Line | Item | Typical Range |
|------|------|---------------|
| 1 | Gross Commission Income (GCI) | Varies |
| 2 | Less: Brokerage split or cap | 15-50% of GCI |
| 3 | Less: Transaction/franchise fees | $200-$800/transaction |
| 4 | **Net Commission (after brokerage)** | 50-85% of GCI |
| 5 | Less: MLS/association dues | $1,200-$2,500/year |
| 6 | Less: E&O insurance | $300-$600/year |
| 7 | Less: Marketing & advertising | 5-15% of GCI |
| 8 | Less: Technology (CRM, IDX, tools) | $2,400-$6,000/year |
| 9 | Less: Vehicle expenses | $3,000-$8,000/year |
| 10 | Less: CE & professional development | $500-$2,000/year |
| 11 | Less: Office/home office costs | $1,200-$6,000/year |
| 12 | Less: Client gifts & entertainment | $500-$2,000/year |
| 13 | Less: Other business expenses | $1,000-$4,000/year |
| 14 | **Net Business Income (Schedule C)** | 35-55% of GCI |
| 15 | Less: Self-employment tax (15.3% with adjustments) | ~14.1% of net |
| 16 | Less: Federal income tax | 10-37% marginal |
| 17 | Less: State income tax | 0-13.3% |
| 18 | **Actual Take-Home** | 25-40% of GCI |

### Financial Benchmarks by Production Level

| GCI Range | Typical Take-Home % | Effective Hourly Rate | Key Concern |
|-----------|--------------------|-----------------------|-------------|
| Under $50K | 20-28% | $5-$7/hour | Sustainability -- is this viable? |
| $50K-$100K | 25-32% | $7-$15/hour | Expense ratio too high, tax surprises |
| $100K-$200K | 28-36% | $14-$30/hour | Entity structure opportunity, retirement funding |
| $200K-$400K | 32-40% | $28-$60/hour | S-Corp savings significant, tax bracket management |
| $400K+ | 35-42% | $55-$85/hour | Maximum retirement contributions, advanced planning |

### Self-Employment Tax Mechanics

- SE tax rate: 15.3% (12.4% Social Security + 2.9% Medicare).
- Calculated on 92.35% of net SE income (the 7.65% adjustment mirrors the employer-side deduction).
- Social Security portion caps at $176,100 of earnings for 2025. Medicare has no cap.
- Additional Medicare tax of 0.9% on SE income above $200K (single) or $250K (MFJ).
- Half of SE tax is deductible on the front of the 1040 (reduces AGI, not Schedule C income).

### Deductible Expense Categories for RE Agents

**Marketing & Advertising:** Website hosting, IDX fees, social media ads, print advertising, direct mail, signage, photography, videography, staging (if agent-paid), branded materials.

**Technology:** CRM subscription, MLS access fees, transaction management software, e-signature tools, phone/internet (business percentage), hardware, software.

**Vehicle:** Standard mileage ($0.70/mile for 2025) or actual expenses (gas, insurance, maintenance, depreciation). Must keep contemporaneous log. Commuting miles (home to office) are never deductible. Showing properties, meeting clients, attending closings -- all deductible.

**Education & Licensing:** CE courses, designations (GRI, CRS, ABR), conferences, coaching/mentoring fees, license renewal fees, association dues (NAR, state, local).

**Insurance:** E&O insurance premiums, general liability (if applicable), cyber liability.

**Office:** Home office (simplified or actual), coworking space, supplies, postage, printing.

**Client Relations:** Closing gifts (limit: $25/person/year deductible), client appreciation events, referral gifts.

**Professional Services:** CPA/tax preparation, legal fees, bookkeeping, virtual assistant.

### Lead Source ROI Framework

Agents should evaluate every lead source as an investment, not an expense:

| Metric | Formula |
|--------|---------|
| Cost Per Lead (CPL) | Total spend on source / leads generated |
| Cost Per Closing | Total spend on source / closings from source |
| ROI | (GCI from source - total spend on source) / total spend on source |
| Effective CPL Including Time | (Spend + (hours invested x effective hourly rate)) / leads generated |

If a lead source produces $30K GCI from $10K spend, that is a 200% ROI. If it took 400 hours of the agent's time and their effective hourly rate is $25, the time-adjusted cost is $20K, making the real ROI 50%. Both numbers matter. Cross-reference `lead-generation` for source-level strategy.

### Industry Standards & References

- **IRS Publication 587:** Business use of your home.
- **IRS Publication 463:** Travel, gift, and car expenses.
- **IRS Schedule C:** Profit or loss from business (sole proprietors).
- **IRS Schedule SE:** Self-employment tax calculation.
- **IRS Form 1120-S:** S-Corporation income tax return.
- **IRS Form 2553:** Election by a small business corporation (S-Corp election).
- **Safe Harbor Rule:** Pay 100% of prior year tax (110% if AGI > $150K) to avoid underpayment penalties.

---

## Tone & Style by Audience

**To solo agents:** Direct and slightly uncomfortable. These agents often avoid their numbers. Show them the full waterfall without hedging, then immediately offer actionable next steps. Use concrete dollar amounts, not percentages alone. "You're keeping $34,200 of your $120,000 GCI" hits harder than "you're keeping about 28.5%."

**To team leaders:** Frame everything in unit economics. What does each team member cost versus produce? What is the fully loaded cost of a buyer's agent (salary/split + desk fees + lead costs + training time + admin support)? Team leaders need to see each seat as a P&L center.

**To broker/owners:** Speak to per-agent economics, company dollar, and overhead allocation. Broker/owners need financial frameworks that scale: revenue per agent, transaction cost, retention cost, and breakeven analysis on recruiting investments.

**To new agents:** Foundational and non-judgmental. Many new agents have never been self-employed. Explain 1099 basics from scratch: no withholding, no employer benefits, quarterly estimated taxes, deductible expenses. Frame the first-year financial plan as survival math: "How many closings do you need to cover your fixed costs before you earn a dollar of actual income?"

---

## Common Scenarios & Examples

### Scenario 1: The Income Reality Check

**User says:** "I earned $140K in GCI last year. How much did I actually make?"

**Actions:**
1. Ask for brokerage split structure, state of residence, and whether they have a rough sense of total business expenses (or offer to estimate from benchmarks).
2. Walk through the full waterfall: $140K GCI minus 25% brokerage split ($35K) = $105K net commission. Estimate $22K-$28K in business expenses (MLS, marketing, tech, vehicle, CE, insurance) = $77K-$83K net business income.
3. Calculate taxes: SE tax (~$10.9K-$11.7K), federal income tax (~$9K-$13K depending on filing status and deductions), state income tax ($0-$8K depending on state).
4. Present the take-home: approximately $45K-$63K depending on state, filing status, and actual expenses. Effective hourly rate at 50 hours/week: $18-$25/hour.
5. Identify the biggest levers: "Your brokerage split is costing $35K. Is your brokerage providing $35K worth of value? Your marketing spend -- what's the ROI per lead source?" Cross-reference `commission-strategy` for split evaluation and `lead-generation` for source ROI.

### Scenario 2: The S-Corp Question

**User says:** "My CPA mentioned an S-Corp. I'm at about $180K GCI with $70K in expenses. Is it worth it?"

**Actions:**
1. Calculate net business income: $180K - $70K = $110K.
2. As a sole prop/LLC: SE tax on $110K = approximately $15,547 (92.35% x $110K x 15.3%).
3. As an S-Corp with $55K reasonable salary: SE tax equivalent (FICA on salary) = $55K x 15.3% = $8,415. The remaining $55K passes through as distributions -- no SE tax.
4. Gross SE tax savings: $15,547 - $8,415 = $7,132.
5. Subtract S-Corp compliance costs: payroll service (~$1,000/year), additional tax return preparation (~$1,500-$2,500/year), possible state registration fees (~$100-$800). Net savings: approximately $3,800-$5,000/year.
6. Advise: at $110K net, the S-Corp election is likely worthwhile. The breakeven is typically around $60K-$80K net. Emphasize that the "reasonable salary" must be defensible -- the IRS scrutinizes S-Corp owners who pay themselves unreasonably low salaries. Recommend discussing the specific salary figure with their CPA.

### Scenario 3: The New Agent Tax Shock

**User says:** "I just got my first commission check for $8,400. How much should I set aside for taxes?"

**Actions:**
1. Congratulate them, then deliver the reality: as a 1099 independent contractor, there is no withholding. They are responsible for self-employment tax AND income tax.
2. Estimate the tax obligation: the $8,400 check is gross commission minus brokerage split. Ask what their split is. If 70/30 and the listing side was $12,000, their GCI was $8,400 and expenses will come later.
3. Recommend setting aside 30% immediately: $2,520 into a separate savings account labeled "taxes." This covers SE tax (~15%) plus federal income tax (~12-15% for new agents) with a small buffer.
4. Explain quarterly estimated payments: if they expect to owe $1,000+ in taxes for the year, they must make quarterly payments. Provide the deadlines.
5. Recommend opening a separate business checking account and a tax savings account from day one. Every commission check: 30% to tax savings, remainder to business checking. Operating expenses paid from business checking. Reference `references/agent-tax-guide.md` for the full quarterly tax walkthrough.

### Scenario 4: Lead Source Profitability Analysis

**User says:** "I'm spending $2,000/month on Zillow leads and $500/month on my SOI marketing. Which is more profitable?"

**Actions:**
1. Ask for conversion data from each source: how many leads per month, how many closings per year, and average GCI per closing from each source.
2. Calculate full ROI for each source. Example: Zillow at $24K/year producing 4 closings at $8K average GCI = $32K GCI, ROI = ($32K - $24K) / $24K = 33%. SOI at $6K/year producing 6 closings at $9K average GCI = $54K GCI, ROI = ($54K - $6K) / $6K = 700%.
3. Factor in time investment: Zillow leads typically require 10-15 hours of nurture per closing. SOI leads may convert in 2-5 hours. Calculate time-adjusted ROI using their effective hourly rate.
4. Present the comparison clearly: "Your SOI marketing produces 21x the ROI of your Zillow spend and requires less time per closing. That doesn't mean cancel Zillow -- but it means your SOI deserves at least equal investment." Cross-reference `lead-generation` for a broader lead source strategy.

---

## Important Caveats

- **This skill provides general financial education, not tax advice.** Always recommend that agents consult a CPA or enrolled agent who specializes in real estate or self-employment for their specific situation. Tax code changes annually and individual circumstances vary.
- **State tax laws vary dramatically.** Nine states have no income tax (TX, FL, NV, WY, SD, AK, TN, NH, WA). California's top rate is 13.3%. Always flag state-specific implications and advise agents to verify with a local tax professional. Varies by state -- verify with your state's tax authority.
- **Entity structure decisions have long-term consequences.** S-Corp elections, once made, have specific revocation rules. LLC formation varies by state in cost and requirements. Never present entity formation as a simple "just do it" decision.
- **Reasonable salary for S-Corp is not a loophole.** The IRS actively audits S-Corp owners who pay unreasonably low salaries. The salary must be comparable to what a similar role would pay in the market. For RE agents, this generally means 40-60% of net business income, though it depends on the agent's role and production.
- **This skill does not replace a CPA, tax attorney, or financial advisor.** It provides the financial literacy framework so agents can have informed conversations with those professionals, not bypass them.
- **Retirement contribution limits change annually.** Always note the tax year when citing specific limits and remind agents to verify current limits with the IRS or their financial advisor.
- **Commission-specific financial planning connects to the `commission-strategy` skill** for brokerage split evaluation, `business-planner` for revenue goal setting and activity planning, and `lead-generation` for lead source ROI analysis.
