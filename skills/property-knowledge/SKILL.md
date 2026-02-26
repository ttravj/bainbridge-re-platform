---
name: property-knowledge
description: "Property and home systems knowledge for real estate agents. Triggers on construction types, roof age, HVAC, plumbing, electrical, foundation issues, inspection findings, defects, environmental hazards, lead paint, asbestos, radon, mold, renovation ROI, red flags, water damage, structural issues. Also: 'is this crack serious', 'how old is this roof', 'what does this mean on the inspection', 'should the buyer worry about', 'what renovations add value', 'new construction warranty'."
---

# Property Knowledge

Physical property expertise for residential real estate agents. Most agents open doors but cannot explain why the HVAC is concerning, whether the foundation crack is structural or cosmetic, or what polybutylene pipes mean for insurability. Agents who develop property literacy build enormous client trust, catch issues during showings before they become transaction-killers, and contextualize inspection reports so buyers make informed decisions instead of panicking. This skill covers construction types, major home systems, common defects, environmental hazards, renovation ROI, and new construction knowledge. For inspection report analysis and repair request drafting, see the `estimate-analyzer` skill.

## Core Principles

1. **Observation is not diagnosis.** Agents are not licensed inspectors, engineers, or contractors. The agent's role is to notice, flag, and recommend professional evaluation -- never to diagnose the severity of a condition or estimate repair costs with authority. Say "this should be evaluated by a licensed professional" whenever the finding could be structural, safety-related, or expensive to remediate.
2. **Context determines significance.** A hairline vertical foundation crack in a 30-year-old home is normal settling. A horizontal crack at the same age may indicate lateral pressure failure. Every finding must be interpreted in the context of the home's age, construction type, geography, and prior maintenance. Isolated facts without context mislead clients.
3. **Knowledge builds trust and prevents lawsuits.** An agent who can walk through a home and calmly explain what they see -- "that's an older Zinsco panel, which some insurers flag; we'll want the inspector to evaluate it" -- earns client confidence and demonstrates competence. An agent who says nothing, or worse, says "that's fine" about something that is not fine, creates liability. When in doubt, flag it.

---

## Instructions

### How to Respond to Property & Home Systems Queries

When a user asks a question in this domain, identify the category and follow the appropriate workflow:

#### Category A: Home Systems Assessment

Includes: roof age, HVAC adequacy, plumbing type, electrical capacity, foundation condition, water heater age, sewer/septic status, window condition, insulation, "how old is this system," "is this adequate for the home."

**Workflow:**
1. Identify the specific system and gather context: home age, construction type, geographic region, and any visible symptoms the user has observed.
2. Reference the `references/home-systems-guide.md` for that system's typical lifespan, red flags, and age-related concerns.
3. Provide the contextual assessment: "A 15-year-old asphalt shingle roof in a hot southern climate is approaching end of life. In the Pacific Northwest, the same roof may have 5-10 more years."
4. List the specific questions the agent should ask the seller or look for during the showing.
5. Explain what this means for the transaction: insurability, lending implications (FHA/VA require functional systems), negotiation leverage, or future maintenance cost for the buyer.
6. Recommend professional evaluation if the finding could be significant. Specify what type of professional: roofer, HVAC technician, structural engineer, licensed electrician, or general inspector.

#### Category B: Inspection Finding Interpretation

Includes: "what does this inspection finding mean," "is this serious," "should we worry about," inspection report terminology, contextualizing findings for clients.

**Workflow:**
1. Identify the specific finding and its location in the home. Ask for the inspector's exact language if not provided.
2. Categorize the finding using the severity framework: **Safety/Structural** (immediate concern, potential deal-breaker), **Functional** (system impairment, repair warranted), **Maintenance/Cosmetic** (normal wear, low priority).
3. Explain what the finding means in plain language the agent can relay to their client. Avoid technical jargon that creates unnecessary alarm.
4. Provide age and construction context: "Galvanized steel drain pipes in a 1965 home are common and expected. They have a 20-50 year lifespan, so at 60 years, replacement is overdue and likely contributing to slow drains."
5. Advise on next steps: does this need a specialist evaluation, is it a negotiation point, or is it informational only?
6. Cross-reference `estimate-analyzer` for drafting repair requests from inspection findings. Cross-reference `negotiation-strategy` for using inspection findings in negotiations.

#### Category C: Environmental Hazards

Includes: lead paint, asbestos, radon, mold, underground storage tanks, well water contamination, Chinese drywall, formaldehyde, methane.

**Workflow:**
1. Identify the specific hazard and the home's age, location, and construction type.
2. Provide the regulatory context: federal disclosure requirements (Lead Paint Disclosure for pre-1978 homes), state-specific testing requirements, EPA guidelines.
3. Explain the health risk in factual, measured terms. Do not minimize genuine hazards or sensationalize manageable ones.
4. Describe testing protocols: who performs the test, what it involves, typical cost range, and turnaround time.
5. Explain remediation basics: general approaches, cost ranges, and whether the hazard must be resolved before sale (varies by state and loan type).
6. Clarify the agent's disclosure obligations: what must be disclosed, what triggers disclosure, and the consequences of failing to disclose known hazards.

#### Category D: Renovation ROI & Home Improvements

Includes: "what renovations add value," "should the seller renovate before listing," "what improvements help sale price," ROI by project, buyer upgrade priorities.

**Workflow:**
1. Clarify the context: is this a seller considering pre-listing improvements, a buyer evaluating a fixer-upper, or a general question about renovation returns?
2. Reference the renovation ROI data from `references/home-systems-guide.md` to provide current return estimates by project type.
3. Distinguish between cost recovery and value creation: most renovations recover 50-80% of cost, not 100%. Only a few categories (curb appeal, minor kitchen updates, garage doors) consistently approach or exceed 100% ROI.
4. Factor in market conditions: in a seller's market with low inventory, renovation ROI is higher because buyers have fewer options. In a buyer's market, sellers compete harder and may need updates to sell.
5. For sellers: recommend the highest-ROI, lowest-cost improvements first. Fresh paint, professional cleaning, landscaping, and minor updates typically outperform major renovations.
6. For buyers: frame renovation cost as a negotiation tool. A home needing a $15K roof replacement should be priced accordingly. Cross-reference `negotiation-strategy`.

#### Category E: New Construction & Builder Warranties

Includes: new build concerns, builder warranties, construction defects, warranty claims, blue tape walkthrough, new construction inspection.

**Workflow:**
1. Clarify the stage: pre-purchase, under construction, pre-closing walkthrough, or post-closing warranty period.
2. Explain the standard builder warranty structure: 1-year workmanship, 2-year systems (HVAC, plumbing, electrical), 10-year structural. Note that these are industry standards; actual warranties vary by builder and state.
3. Emphasize the importance of independent inspection even on new construction. New homes have defects -- studies show the average new home has 100+ deficiencies at completion.
4. For pre-closing walkthroughs: provide the blue tape inspection framework -- what to check in every room, what is the builder's responsibility to correct before closing, and what to document.
5. For warranty claims: explain the process, documentation requirements, and escalation paths (builder, warranty company, state licensing board, litigation).
6. Common new construction issues: settling cracks (normal in first 1-2 years), nail pops, grading/drainage issues, HVAC balancing, improper flashing, cosmetic defects.

---

## Key Domain Knowledge

### Construction Types & Age-Related Concerns

| Era | Construction Characteristics | Key Concerns |
|-----|------------------------------|-------------|
| **Pre-1950** | Balloon framing, plaster walls, knob-and-tube wiring, clay/cast iron drain pipes | Electrical fire risk, lead paint, asbestos insulation, foundation deterioration, inadequate electrical capacity |
| **1950-1970** | Platform framing, drywall transition, copper wiring standard, cast iron DWV | Asbestos (floor tile, insulation, siding), galvanized supply pipes corroding, original windows, low electrical capacity (60-100 amp) |
| **1970-1985** | Modern framing, varied wiring quality, early energy codes | Aluminum wiring (1965-1973), polybutylene plumbing (1978-1995), FPE/Zinsco panels, early EIFS failures, urea-formaldehyde insulation |
| **1985-2000** | Improved energy codes, engineered lumber begins, PVC drain pipes standard | Polybutylene plumbing, early synthetic stucco (EIFS) moisture problems, builder-grade materials at end of life |
| **2000-2015** | Modern building codes, PEX plumbing common, higher energy standards | Chinese drywall (2001-2009 in some regions), early HVAC systems aging, cosmetic wear, deferred maintenance beginning |
| **2015-Present** | Current code, PEX/CPVC, high-efficiency systems, smart home infrastructure | Minimal age-related concerns; focus on workmanship quality, grading/drainage, warranty coverage |

### Inspection Finding Severity Framework

**Safety/Structural (Highest Priority):**
- Active roof leaks, structural roof damage
- Foundation movement (horizontal cracks, bowing walls, significant differential settling)
- Electrical hazards (double-tapped breakers, exposed wiring, no GFCI near water, Federal Pacific or Zinsco panels)
- Gas leaks, carbon monoxide risks, non-functional HVAC
- Water intrusion with active mold growth
- Missing or damaged handrails/guardrails on elevated surfaces
- Fire safety deficiencies (non-functional smoke detectors, blocked egress)

**Functional (Medium Priority):**
- HVAC systems past expected lifespan or performing below capacity
- Roofing materials in last 20% of expected life
- Plumbing leaks (supply or drain), low water pressure, inadequate capacity
- Electrical panels at capacity, outdated wiring (functional but not current code)
- Windows with failed seals, significant air infiltration
- Grading directing water toward foundation
- Water heater past expected lifespan

**Maintenance/Cosmetic (Lower Priority):**
- Caulking and grout deterioration
- Minor settling cracks (vertical hairline)
- Cosmetic damage to surfaces
- Weathered exterior trim or paint
- Minor gutter issues
- Outdated but functional fixtures
- Normal wear items

### Key Insurance & Lending Triggers

Certain property conditions trigger insurance exclusions or lending issues:

- **Roof age >20 years (shingle):** Many insurers require inspection or will not write new policies. FHA/VA loans may require replacement.
- **Federal Pacific (FPE) or Zinsco electrical panels:** Most insurers require replacement before binding coverage.
- **Polybutylene plumbing:** Many insurers exclude water damage or require re-piping. Disclosure to buyers is critical.
- **Aluminum wiring:** Insurers may require remediation (pigtailing with copper at connections).
- **Knob-and-tube wiring:** Most insurers will not cover; lenders may require replacement.
- **Wood-burning stove/fireplace without proper clearances:** Insurance issue.
- **Underground oil tanks:** Environmental liability; lenders and insurers flag this.
- **Chinese drywall:** Must be disclosed; remediation required for most transactions.

### Energy Efficiency Features Buyers Value

Increasingly important in purchase decisions and appraisals:
- Solar panels (owned vs. leased -- leased creates complications)
- High-efficiency HVAC (SEER 16+)
- Spray foam or blown-in insulation upgrades
- Energy Star windows and appliances
- Smart thermostats and home automation
- EV charging infrastructure (Level 2 240V outlet or dedicated charger)
- Tankless or heat pump water heaters
- LED lighting throughout

### Industry Standards & References

- **ASHI (American Society of Home Inspectors):** Sets Standards of Practice for home inspections. The baseline for what an inspection should cover.
- **InterNACHI (International Association of Certified Home Inspectors):** Largest inspection association; publishes extensive standards and educational content.
- **EPA (Environmental Protection Agency):** Governs lead paint disclosure (RRP Rule), radon guidelines (4.0 pCi/L action level), asbestos regulations (NESHAP).
- **IRC/IBC (International Residential/Building Code):** Current building standards. Existing homes are evaluated against the code in effect when built, not current code, unless renovations trigger upgrade requirements.
- **NFPA (National Fire Protection Association):** Electrical code (NEC) standards referenced for electrical system evaluation.

---

## Tone & Style by Audience

**To solo agents:** Practical and confidence-building. Give them the exact language to use during showings ("You'll notice the water heater is from 2008 -- that's 18 years on a system with a typical 10-15 year lifespan. We should budget for replacement."). They need to sound knowledgeable without overstepping into contractor territory.

**To team leaders:** Systematic. Help them build a property knowledge training module for their team. Focus on the most common systems and defects in their market. A team where every agent can identify a Federal Pacific panel or polybutylene plumbing has a competitive advantage.

**To broker/owners:** Risk-focused. Property knowledge gaps create E&O exposure. Agents who miss obvious defects or provide incorrect advice about property conditions generate complaints and claims. Frame property knowledge as risk mitigation and professional development.

**To new agents:** Educational and encouraging. New agents often feel overwhelmed by how much they do not know about physical properties. Break it down: start with the five systems that matter most (roof, HVAC, electrical, plumbing, foundation), learn the red flags for each, and build from there. They do not need to become inspectors -- they need to know enough to ask the right questions and recommend the right professionals.

---

## Common Scenarios & Examples

### Scenario 1: Agent Notices Foundation Crack During Showing

**User says:** "I'm showing a 1990 ranch and there's a crack in the basement wall. Is this serious? My buyer is freaking out."

**Actions:**
1. Ask clarifying questions: Is the crack vertical or horizontal? How wide is it (hairline, pencil-width, finger-width)? Is there any displacement (one side higher than the other)? Is there water staining around it? Where on the wall is it located?
2. Provide the interpretation framework:
   - **Vertical hairline cracks** in a 35-year-old home are normal settling and rarely structural. These are cosmetic and expected.
   - **Horizontal cracks** suggest lateral soil pressure and are the most serious type. These may indicate structural compromise and always warrant engineering evaluation.
   - **Stair-step cracks** in block foundations follow mortar joints and can range from cosmetic to structural depending on width and displacement.
   - **Width matters:** Under 1/8 inch is typically cosmetic. Over 1/4 inch warrants professional evaluation. Any crack with displacement (one side offset from the other) requires a structural engineer.
3. Coach the agent on what to say to the buyer: "Foundation cracks are common in homes this age. What matters is the type and severity. I'd recommend we have the inspector pay close attention to this, and if they flag it, we can bring in a structural engineer for a definitive assessment. That typically costs $300-$500 and gives you a clear answer."
4. Recommend the agent document the crack with photos for the inspector.
5. Cross-reference `negotiation-strategy` for how to use foundation findings in offer negotiations.

### Scenario 2: Buyer Asks What HVAC System Age Means

**User says:** "The home I'm showing tomorrow has a 2006 furnace and AC. Is that a problem? The buyer is going to ask."

**Actions:**
1. Provide the lifespan context: furnaces typically last 15-25 years; central AC units last 12-20 years. At 20 years old (as of 2026), both systems are in the final stretch of their expected lifespan.
2. Explain what this means practically: the systems likely still function, but efficiency has declined significantly compared to modern units. A 2006-era AC is probably SEER 10-13; current minimum is SEER 15, and high-efficiency units are SEER 18-24. The buyer will pay more to heat and cool the home than with modern equipment.
3. Give the agent language for the showing: "The HVAC dates to 2006, so it's about 20 years old. These systems typically last 15-20 years, so while it's working now, replacement is likely in the near future. Budget $8,000-$15,000 for a full system replacement depending on size and efficiency level. That's something to factor into your offer."
4. Note the lending implication: FHA and VA appraisals require functional HVAC. If the system fails between contract and closing, it becomes a problem. Recommend the buyer's agent confirm the system is operating during inspection.
5. Suggest the buyer request maintenance records from the seller. A well-maintained system may last longer; a neglected one may fail sooner.

### Scenario 3: Seller Asks What Renovations to Do Before Listing

**User says:** "My seller wants to spend $50K on a kitchen remodel before listing. Good idea or waste of money?"

**Actions:**
1. Provide the ROI data: a major kitchen remodel typically recovers 50-75% of cost at resale. A $50K remodel might add $25K-$37.5K to the sale price. This is a net loss on the renovation investment.
2. Recommend the alternative: a minor kitchen refresh ($5K-$15K) -- paint cabinets, new hardware, updated light fixtures, new countertops (or just resurfacing), and new faucet -- typically recovers 75-100%+ and costs a fraction.
3. Walk through the highest-ROI pre-listing investments in order:
   - Deep cleaning and decluttering: near-zero cost, highest impact
   - Fresh neutral interior paint: $3K-$5K, recovers 100%+
   - Landscaping and curb appeal: $2K-$5K, recovers 100%+
   - Minor kitchen updates: $5K-$15K, recovers 75-100%
   - Bathroom refresh: $3K-$8K, recovers 70-90%
   - Garage door replacement: $2K-$4K, recovers 100%+
4. Factor in market context: in a seller's market with low inventory, the home may sell quickly without renovations. In a buyer's market, selective updates help the home compete. Never over-improve for the neighborhood.
5. Caution: a $50K kitchen remodel takes 6-12 weeks. That is 6-12 weeks of carrying costs (mortgage, taxes, insurance, utilities) the seller does not recover. Time-to-market matters.
6. Cross-reference `listing-services` for comprehensive pre-listing preparation strategy.

### Scenario 4: Agent Encounters Polybutylene Plumbing

**User says:** "The inspector found polybutylene pipes. The buyer wants to know if this is a deal-breaker."

**Actions:**
1. Explain what polybutylene is: a gray plastic piping material used widely from 1978 to 1995. It was the subject of a class action lawsuit (Cox v. Shell Oil) because the material degrades when exposed to chlorinated water, leading to sudden pipe failures and flooding.
2. Provide the insurance context: many insurers will not write homeowner policies on homes with polybutylene supply lines, or they exclude water damage. The buyer must verify insurability before proceeding -- this is non-negotiable.
3. Frame the cost: full re-pipe of a typical single-family home runs $4,000-$15,000 depending on size, accessibility, and region. PEX is the standard replacement material.
4. Advise on the negotiation: this is a legitimate negotiation point. Options include requesting the seller re-pipe before closing, requesting a credit for re-piping cost, or adjusting the offer price. Cross-reference `negotiation-strategy`.
5. Clarify that not all polybutylene fails. Some homes have had polybutylene for 40+ years without issues. But the risk is real, the insurance implications are immediate, and the buyer should make an informed decision with full knowledge.
6. Note: polybutylene is different from PEX, which is also plastic but uses a completely different material and manufacturing process. PEX is the current standard and has no known systemic failure issues.

### Scenario 5: Questions About Radon in a Home

**User says:** "The home tested at 5.2 pCi/L for radon. Is that bad? Should the buyer walk away?"

**Actions:**
1. Provide the EPA framework: the EPA action level is 4.0 pCi/L. At 5.2, the home exceeds the action level, and radon mitigation is recommended. However, this is not a reason to walk away -- radon mitigation is straightforward, effective, and relatively inexpensive.
2. Explain radon basics: radon is a naturally occurring radioactive gas that enters homes through the foundation. It is the second leading cause of lung cancer. Risk increases with concentration and duration of exposure. Radon levels vary by geology -- some regions have significantly higher natural levels.
3. Describe mitigation: a sub-slab depressurization system (the most common fix) typically costs $800-$2,500 installed. It reduces radon levels by 80-99% and runs continuously. Post-mitigation testing confirms effectiveness.
4. Advise on the negotiation: request the seller install a mitigation system before closing, or request a credit covering the cost. This is a standard and reasonable request. Most sellers agree because the alternative is disclosing high radon to every subsequent buyer.
5. Note that radon levels fluctuate by season, weather, and testing conditions. A short-term test (48-hour) provides a snapshot; a long-term test (90+ days) provides a more accurate annual average. Post-mitigation testing should confirm levels below 4.0 pCi/L.
6. Reassure the agent: a radon reading of 5.2 is common and fully manageable. This is not a deal-breaker -- it is a $1,500 fix. Frame it that way for the buyer.

---

## Important Caveats

- **Agents are not inspectors, engineers, or contractors.** All property assessments by agents are observational. Never diagnose a condition, estimate a repair cost with certainty, or advise a client that something is "fine" without professional evaluation. The agent's role is to notice, flag, and refer.
- **State-specific disclosure obligations vary significantly.** What must be disclosed about known property conditions, who is responsible for disclosure, and the penalties for failure to disclose differ by state. Always verify with your state's real estate commission and use the current state-approved disclosure forms.
- **Building codes are not retroactive.** Existing homes are evaluated against the code in effect when they were built or last renovated, not current code. An older home is not "out of code" simply because standards have changed. However, renovations may trigger requirements to bring updated areas to current code.
- **Renovation ROI figures are national averages.** Actual returns vary significantly by market, neighborhood, price point, and quality of execution. A $30K kitchen remodel in a $200K home may over-improve for the neighborhood; the same remodel in a $600K home may be expected.
- **Environmental hazard regulations are federal AND state.** Lead paint disclosure is federal (pre-1978 homes). Radon requirements, asbestos regulations, and mold standards vary by state. Some states require specific testing or disclosure; others do not. Verify local requirements.
- **This skill does not replace professional inspections.** A home inspection by a licensed inspector is essential for every transaction. Agent property knowledge supplements -- never substitutes for -- professional evaluation.
