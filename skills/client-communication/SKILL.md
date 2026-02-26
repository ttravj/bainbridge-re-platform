---
name: client-communication
description: "Client communication templates and scripts for real estate agents. Triggers on client updates, difficult conversations, overpriced listing talk, low appraisal delivery, rejected offer, closing delay, post-closing follow-up, review requests, milestone updates. Also: 'how do I tell my client', 'what do I say when', 'appraisal came in low', 'buyer wants to cancel', 'send a status update', 'ask for a review', 'write a follow-up email', or any request to draft client-facing communication."
---

# Client Communication

Generates production-ready client-facing communications -- emails, text messages, phone scripts, and letter templates -- for every stage of a real estate transaction and beyond. This is a document generation skill: when invoked, it produces actual drafts the agent can send, not advice about communication theory. It covers transaction milestone updates, difficult conversation scripts (overpriced listings, low appraisals, deal failures, closing delays), offer status notifications, post-closing follow-up sequences, review requests, and re-engagement messages for dormant past clients. Serves solo agents who need to communicate professionally without a support staff, team leaders who need consistent messaging across their team, and new agents who do not yet know what to say in high-stakes situations.

## Core Principles

1. **Proactive communication is the agent's primary obligation.** The client should never have to ask "what's happening?" If they are asking, the agent has already failed. Every milestone, delay, setback, and next step must be communicated before the client wonders about it. The standard is weekly minimum during active transactions -- more often during critical windows (inspection, appraisal, final week before closing).
2. **Bad news delivered promptly and directly builds more trust than good news delivered late.** Agents who avoid difficult conversations -- hoping the problem resolves itself -- destroy client relationships. A low appraisal, a rejected offer, or an overpriced listing discussion handled honestly and quickly positions the agent as a trusted advisor. Sugarcoating, delaying, or hiding bad news positions the agent as unreliable.
3. **Every communication must advance the client's understanding and reduce their anxiety.** Clients are not in real estate -- they do not know what is normal, what is concerning, and what comes next. Every message should answer three questions: what just happened, what it means for them, and what happens next. Communications that inform without context ("the appraisal came back") are worse than no communication at all.

---

## Instructions

### How to Respond to Client Communication Queries

When a user asks for help with client communication, identify the category and follow the appropriate workflow. In every case, generate an actual draft the agent can use -- not a description of what to say.

#### Category A: Transaction Milestone Updates

Includes: status update emails, weekly check-ins, under-contract notifications, inspection complete updates, appraisal status, clear-to-close announcements, closing day logistics, key handoff messages.

**Workflow:**
1. Determine the transaction side (buyer or seller), the specific milestone, and any relevant context (good news, neutral update, or complication).
2. Generate a complete message draft in the requested format (email, text, or phone script). Default to email unless the user specifies otherwise.
3. Structure every milestone update with three components: (a) what happened or what the current status is, (b) what it means for the client, and (c) what the next step is and when it will happen.
4. Match the tone to the milestone: celebratory for wins (offer accepted, clear to close), reassuring for process updates (inspection scheduled, appraisal ordered), and calm-but-direct for complications (see Category B).
5. Include a closing line that invites questions without creating anxiety: "Let me know if you have any questions -- otherwise, I'll be in touch [day/timeframe] with the next update."
6. Cross-reference `transaction-coordinator` for milestone sequencing and deadline context.

#### Category B: Difficult Conversations & Bad News

Includes: overpriced listing discussions, low appraisal delivery, rejected offers, deal falling through, closing delays, inspection bad news, financing denial, escalating repair disputes.

**Workflow:**
1. Identify the specific bad news and the client's role (buyer or seller). Ask for relevant details if not provided: the numbers involved, the timeline impact, and the available options.
2. Generate a draft using the bad-news delivery framework: (a) state the situation directly in the first sentence -- no preamble, no burying the lead, (b) explain what it means in plain language, (c) present the available options with your professional recommendation, (d) express confidence that you will navigate this together.
3. Never soften bad news to the point of obscuring it. "The appraisal came in at $465,000, which is $35,000 below our contract price" is correct. "The appraisal was a little lower than expected" is not -- it dodges the reality and forces a follow-up conversation.
4. Always include next steps and a specific timeframe: "Here's what I recommend we do, and I'd like to discuss this by [day] so we can respond within our deadline."
5. For particularly difficult situations (deal falling through, financing denial), generate both a written message AND a phone script, since these conversations should happen by phone first, followed by a written summary.
6. Cross-reference `negotiation-strategy` for appraisal and inspection negotiation context. Cross-reference `listing-services` for overpriced listing conversation strategy.

#### Category C: Post-Closing Follow-Up & Nurture

Includes: thank-you messages, 30/60/90-day check-ins, home anniversary messages, seasonal maintenance tips, annual market updates, re-engagement messages for dormant contacts.

**Workflow:**
1. Determine where the client is in the post-closing timeline and what type of message is appropriate.
2. Generate the specific message draft. Post-closing communications must feel personal and genuinely useful -- not like marketing spam disguised as a check-in.
3. Follow the post-closing cadence: Day 1-3 (thank you + closing gift note), Day 30 (move-in check-in), Day 60 (seasonal maintenance tips), Day 90 (review request), 6 months (market update), 1 year (home anniversary + equity update), then quarterly ongoing.
4. For dormant contacts (no communication in 6+ months), generate a re-engagement message that acknowledges the gap without apologizing excessively. Lead with value, not an ask.
5. Cross-reference `referral-systems` for SOI touch cadence and nurture strategy.

#### Category D: Review Requests

Includes: asking for reviews, Google review requests, Zillow review requests, testimonial requests, timing of review asks.

**Workflow:**
1. Determine the platform (Google, Zillow, Realtor.com, or general testimonial) and the timing (at closing, 30 days post, or delayed ask for past client).
2. Generate a specific review request message. Include: a genuine thank-you, a brief reminder of the experience, a direct link to the review platform, and an offer to draft talking points if the client is unsure what to write.
3. Make it easy. The request should take the client less than 60 seconds to understand and act on. Never ask for reviews on multiple platforms at once -- pick one.
4. For delayed requests (asking past clients months or years after closing), lead with a personal check-in first, then make the ask in a follow-up message 2-3 days later.

#### Category E: Expectation-Setting Communications

Includes: initial consultation follow-up, what-to-expect guides, process overview emails, timeline communications, communication preference establishment.

**Workflow:**
1. Determine the context: new buyer client, new seller client, or beginning of a new transaction phase.
2. Generate a comprehensive "what to expect" message that covers: the process overview, key milestones and approximate timeline, how and when the agent will communicate, what the client needs to do and when, and what to expect emotionally (normalizing stress, uncertainty, excitement).
3. These messages set the standard for the entire relationship. They should be thorough enough that the client can refer back to them throughout the process.
4. Cross-reference `buyer-representation` for buyer process context and `listing-services` for seller process context.

---

## Key Domain Knowledge

### The Communication Cadence Standard

| Transaction Phase | Minimum Frequency | Channel | Content Focus |
|-------------------|-------------------|---------|---------------|
| Pre-contract (active search or pre-listing) | 2-3x per week | Text/email | Property updates, showing feedback, market intel |
| Week 1 under contract | Every 2-3 days | Email + text | Earnest money, inspections, initial coordination |
| Weeks 2-3 (inspection/appraisal) | 2x per week minimum | Email + phone for issues | Inspection results, appraisal status, contingency deadlines |
| Weeks 3-4 (loan processing) | Weekly minimum | Email | Loan status, conditions update, closing prep |
| Final week before closing | Every 2-3 days | Email + text + phone | CD review, walkthrough, wire instructions, closing logistics |
| Closing day | Day-of | Phone/text/in-person | Celebration, key handoff, next steps |
| Post-closing 0-90 days | 30/60/90 touchpoints | Email + handwritten note | Check-in, maintenance tips, review request |
| Post-closing ongoing | Quarterly minimum | Mixed (email, text, mail, social) | Market updates, home anniversary, value adds |

### Bad News Delivery Framework

Every difficult client conversation follows this structure:

1. **State the fact.** One sentence, no hedging. "The appraisal came in at $465,000 -- $35,000 below our contract price of $500,000."
2. **Explain the impact.** What this means for the client in plain terms. "This means the lender will only finance based on the $465,000 value, which creates a gap we need to address."
3. **Present options.** Always give at least two paths forward. "We have three options: negotiate with the seller to reduce the price, you cover the $35,000 difference in cash at closing, or we challenge the appraisal with additional comparable sales data."
4. **Give your recommendation.** Clients hire agents for judgment. "Based on the comps and the seller's situation, I recommend we negotiate. Here's why."
5. **Set the next step and timeline.** "I'd like to discuss this by phone today so we can respond to the seller by Friday, which is our deadline."

### Post-Closing Follow-Up Sequence

| Timing | Message Type | Purpose | Channel |
|--------|-------------|---------|---------|
| Day 1-3 | Thank you + gift | Close the experience on a high note | Handwritten card + gift |
| Day 7 | Settling-in check | "How's the move? Anything you need?" | Text |
| Day 30 | Home check-in | Address any post-move issues, provide local recommendations | Email or call |
| Day 60 | Seasonal tips | Home maintenance checklist for the season | Email |
| Day 90 | Review request | Ask for Google or Zillow review | Email with direct link |
| 6 months | Market update | Neighborhood sales activity, equity estimate | Email |
| 1 year | Home anniversary | Celebrate, provide updated home value estimate | Email + card |
| Quarterly ongoing | Value touch | Market reports, tips, event invites, holiday greetings | Rotating channels |

### Review Request Best Practices

- **Timing matters:** Ask within 7-14 days of closing when satisfaction and emotional connection are highest. After 30 days, response rates drop significantly.
- **Google reviews are most valuable** for local SEO and new client acquisition. Prioritize Google over Zillow unless the agent relies heavily on Zillow Premier Agent.
- **Make it frictionless:** Include a direct link -- not "go to Google and search for me." One click to the review form.
- **Offer to draft talking points:** Many clients want to leave a review but stare at a blank box. Offering to send 2-3 bullet points about the experience (for them to write in their own words) doubles the completion rate.
- **Never incentivize reviews.** No gift cards, discounts, or prizes for leaving a review. This violates most platform terms of service and can trigger removal of all reviews.

### Tone Calibration by Situation

| Situation | Tone | What to Avoid |
|-----------|------|---------------|
| Good news (offer accepted, clear to close) | Celebratory but professional | Over-the-top excitement that feels performative |
| Neutral update (inspection scheduled, docs submitted) | Calm, informative, reassuring | Filler language that adds nothing ("Just wanted to touch base!") |
| Bad news (low appraisal, rejected offer) | Direct, empathetic, solution-oriented | Minimizing ("It's not that bad"), blaming others, emotional language |
| Delay or complication | Transparent, proactive, controlled | Panic, vague timelines ("hopefully soon"), deflecting responsibility |
| Post-closing | Warm, genuine, personal | Sounding automated, making an ask too early, being generic |

### Industry Standards & References

- **NAR Profile of Home Buyers and Sellers:** 89% of buyers would use their agent again or recommend them, but only 12% of repeat buyers actually do -- because the agent lost touch. Communication quality is the deciding factor, not transaction outcome.
- **J.D. Power Home Buyer/Seller Satisfaction Study:** Communication frequency and proactiveness are the #1 and #2 drivers of client satisfaction, ahead of negotiation results and market knowledge.
- **TCPA and CAN-SPAM:** All text messages require prior consent. All marketing emails must include physical address and opt-out mechanism. Transactional emails (status updates during an active transaction) are generally exempt from CAN-SPAM but should still include contact information.

---

## Tone & Style by Audience

**To solo agents:** Template-ready. Solo agents are writing every message themselves with no TC, no assistant, and no time. Give them copy-paste-ready drafts they can personalize in 30 seconds and send. Prioritize text and email formats since that is how most solo agents communicate with clients. When they ask "what do I say," give them the exact words.

**To team leaders:** Standardized and brandable. They need a communication library their entire team uses -- consistent voice, consistent quality, consistent timing. Frame templates as team assets: "Every agent on your team sends this message on Day 1 after going under contract." Help them build the system, not just the individual message.

**To broker/owners:** Risk-mitigation and quality-control focused. Poor client communication generates complaints, bad reviews, and E&O exposure. Brokers want communication standards they can train to and audit against. Provide frameworks that scale across 20-200 agents while maintaining quality.

**To new agents:** Confidence-building. New agents agonize over every message because they are terrified of saying the wrong thing. Give them complete scripts -- not outlines, not bullet points, but full sentences they can send. Normalize the awkwardness: "The first time you deliver bad news to a client, it feels terrible. By the tenth time, you'll handle it like a professional. These scripts get you through the first nine."

---

## Common Scenarios & Examples

### Scenario 1: Buyer's Offer Was Rejected

**User says:** "My buyer's offer was rejected. The seller went with another offer. How do I tell them?"

**Actions:**
1. Generate a phone script for the initial delivery (this news should be delivered by phone, not text or email) followed by a written follow-up email.
2. Phone script draft:

> "Hi [Client Name], I just heard back from the listing agent. Unfortunately, the seller accepted another offer on [Property Address]. I know this is disappointing -- you really connected with that home. Here's what I know: [if available, brief context -- e.g., 'they received multiple offers and went with one that waived the inspection contingency']. The good news is that we now have a strong offer template dialed in, and I have two other properties I want you to see this week that check the same boxes. Are you available [day] to regroup?"

3. Follow-up email draft:

> **Subject: Update on [Property Address]**
>
> Hi [Client Name],
>
> As we discussed, the seller on [Property Address] accepted another offer. I know that's not the news we were hoping for, and I understand the frustration.
>
> Here's what I want you to know: this is a normal part of the process, especially in a competitive market. Your offer was strong, and the fact that we moved quickly shows we're well-positioned for the right home.
>
> **Next steps:**
> - I'm actively monitoring new listings that match your criteria
> - I've identified [X] properties worth seeing this week
> - I'll send you details by [day] so we can schedule showings
>
> The right home is out there, and when it comes up, we'll be ready. Let me know if you have any questions or want to talk through our strategy.
>
> Best,
> [Agent Name]

4. Advise the agent: always deliver rejection by phone first, then follow up in writing. Never send an offer rejection by text message. Cross-reference `buyer-representation` for re-engagement strategy and `offer-writer` for strengthening the next offer.

### Scenario 2: Low Appraisal on a Listing

**User says:** "The appraisal on my listing came in $40K low. I need to tell my seller and figure out what to do."

**Actions:**
1. Generate a phone script for the seller conversation and a follow-up email summarizing the options.
2. Phone script draft:

> "Hi [Seller Name], I got the appraisal report back today on [Property Address]. I want to walk you through where we stand. The appraiser valued the home at $[appraised value], which is $40,000 below our contract price of $[contract price]. I know that's not what we wanted to hear, so let me explain what this means and what our options are.
>
> The buyer's lender will only loan based on the appraised value, so we need to bridge this $40,000 gap. Here are our three options:
>
> **Option 1:** We negotiate with the buyer to meet somewhere in the middle. For example, you reduce the price by $20,000 and the buyer brings an additional $20,000 cash to closing. This keeps the deal together and gets you to the closing table.
>
> **Option 2:** We challenge the appraisal. I have [X] comparable sales the appraiser may not have used that support a higher value. There's no guarantee, but it's worth submitting if the data is strong.
>
> **Option 3:** We hold firm at the contract price and ask the buyer to cover the full gap in cash. This is a tougher ask, but depending on the buyer's situation, it may be possible.
>
> My recommendation is [Option X] because [reason]. I'd like to discuss this today so we can respond to the buyer's agent by [deadline]. What time works for a quick call or meeting?"

3. Follow-up email draft:

> **Subject: Appraisal Update -- [Property Address]**
>
> Hi [Seller Name],
>
> As we discussed, the appraisal came back at **$[appraised value]**, which is **$40,000 below our contract price of $[contract price]**.
>
> **Our options:**
>
> 1. **Negotiate a price reduction + buyer cash contribution** -- Meet in the middle. You reduce to $[amount], buyer brings $[amount] additional cash. Keeps the deal on track.
> 2. **Challenge the appraisal** -- I'll submit additional comparable sales data to support a higher value. Timeline: 5-10 business days for a response. No guarantee.
> 3. **Hold firm** -- Ask the buyer to cover the full $40,000 gap. Higher risk the deal falls apart, but preserves your price.
>
> **My recommendation:** [Option] because [reason].
>
> **Deadline:** We need to respond to the buyer's agent by **[date]**. I'd like to finalize our approach by **[date - 1 day]** so we have time to draft the response.
>
> Please let me know your thoughts, and I'm happy to walk through the numbers again.
>
> Best,
> [Agent Name]

4. Cross-reference `negotiation-strategy` for appraisal gap negotiation tactics. Cross-reference `listing-services` for seller communication best practices.

### Scenario 3: Post-Closing Review Request

**User says:** "I just closed with a buyer last week. I want to ask for a Google review. What should I say?"

**Actions:**
1. Generate an email review request with a direct Google review link placeholder.
2. Email draft:

> **Subject: A quick favor -- and a huge thank you**
>
> Hi [Client Name],
>
> Congratulations again on [Property Address] -- I hope you're settling in and loving the new place!
>
> Working with you was genuinely a great experience, and I'm so glad we found the right home. If you have 2 minutes, it would mean the world to me if you'd share a brief review of your experience on Google. Reviews from clients like you are how new buyers and sellers find me, and they make a real difference for my business.
>
> **Here's the direct link:** [Google Review Link]
>
> If you're not sure what to write, here are a few things you might mention:
> - How the home search process felt
> - Something specific I helped with that stood out
> - Whether you'd recommend working with me
>
> No pressure at all -- I'm grateful either way. And if there's anything you need as you settle in (contractor recommendations, utility contacts, anything at all), I'm always here.
>
> Thank you, [Client Name]. It was a privilege to help you find your home.
>
> Warmly,
> [Agent Name]

3. Advise on timing: 7-14 days post-closing is the sweet spot. The experience is fresh but the closing-day chaos has settled. If the agent waits longer than 30 days, response rates drop significantly.
4. If the client does not respond within 7 days, generate a single follow-up text:

> "Hi [Client Name]! Hope the new house is treating you well. I sent a quick email last week about leaving a Google review -- if you get a chance, I'd really appreciate it. Here's the link: [URL]. No worries if not -- just happy you're in your new home!"

5. Cross-reference `referral-systems` for integrating review requests into the broader post-closing nurture sequence.

### Scenario 4: Closing Delay Due to Lender Issues

**User says:** "Our closing is delayed by a week because the lender is behind. I need to tell my buyer."

**Actions:**
1. Generate a phone script and follow-up email. Closing delays should be communicated by phone first, then documented in writing.
2. Phone script draft:

> "Hi [Client Name], I have an update on our closing. I spoke with the lender this morning, and they need an additional week to finalize the loan processing. Our new target closing date is [new date]. I know this is frustrating, especially when you've been planning around the original date. Here's what's happening: [brief, honest explanation -- e.g., 'the underwriting team is backed up and they need a few more days to verify employment documentation']. This is not unusual, and it does not affect your loan approval -- it's a processing timeline issue. I've already coordinated with the title company and the seller's agent, and everyone is aligned on the new date. [If applicable: 'Your rate lock is good through [date], so there's no impact there.'] Is there anything on your end this affects -- movers, lease timing, anything I can help coordinate?"

3. Follow-up email draft:

> **Subject: Closing date update -- [Property Address]**
>
> Hi [Client Name],
>
> As we discussed, our closing date has been moved to **[new date]** (originally [old date]). The lender needs additional processing time -- this is a common occurrence and does not impact your loan approval.
>
> **What you need to know:**
> - Your loan is still approved -- this is a processing delay, not an approval issue
> - The title company and seller's agent have confirmed the new date
> - [Rate lock status -- if applicable]
> - All other terms of the contract remain the same
>
> **If you need to adjust anything** (moving company, lease, utilities, time off work), let me know and I'll help coordinate.
>
> I'll continue to follow up with the lender daily and will update you as soon as we have the Closing Disclosure in hand. Expected timeline for CD delivery: **[estimated date]**.
>
> I know this is an inconvenience, and I appreciate your patience. We're on the home stretch.
>
> Best,
> [Agent Name]

4. Cross-reference `transaction-coordinator` for managing the extension addendum and lender coordination process.

### Scenario 5: Re-Engaging a Past Client After Going Silent

**User says:** "I closed a deal with a seller 18 months ago and never followed up. I feel weird reaching out now. What do I say?"

**Actions:**
1. Acknowledge the awkwardness honestly, then generate a re-engagement message that leads with value, not guilt or an ask.
2. Email draft:

> **Subject: Thinking about you + a quick market update for [Neighborhood/City]**
>
> Hi [Client Name],
>
> I hope you're doing well! I realized it's been a while since we connected, and I wanted to reach out.
>
> I was pulling market data for [their old neighborhood or current area] and thought of you -- home values in the area have [increased X% / remained strong / shifted -- use real data if available]. [If they sold: "I hope the move to [new area, if known] has been great."] [If they bought: "Your home has likely [appreciated / held value] since you purchased -- happy to run a quick estimate if you're curious."]
>
> I also wanted to let you know that I'm always here if you ever need real estate advice -- for yourself, family, friends, or coworkers. Whether someone is thinking about buying, selling, or just has a question about the market, I'm happy to help.
>
> How have you been? I'd love to hear what's new.
>
> Best,
> [Agent Name]

3. Advise: do not apologize for the silence. "I'm sorry I haven't been in touch" puts the focus on the agent's failure. Instead, lead with value (the market update) and re-establish the relationship naturally.
4. After the re-engagement email, add the client back to the active touch cadence. A second touchpoint 2-3 weeks later (a text or call) solidifies the reconnection.
5. Cross-reference `referral-systems` for setting up the ongoing SOI nurture system so the gap does not happen again.

---

## Important Caveats

- **State-specific disclosures and forms may require specific language.** Communication templates are starting points. Some states mandate particular disclosures, timelines, or methods of communication (e.g., written notice requirements for contingency responses). Always verify with your state's requirements and use state-approved forms when required.
- **TCPA compliance applies to all text messages.** Do not send unsolicited marketing texts to clients or past clients without prior express consent. Transaction-related texts during an active deal are generally permissible, but post-closing marketing texts require opt-in. Cross-reference `cybersecurity-wire-fraud` for digital communication compliance.
- **CAN-SPAM compliance applies to all marketing emails.** Include a physical mailing address and an unsubscribe mechanism in any email that could be considered marketing (newsletters, market updates, re-engagement campaigns). Transactional emails during an active deal are generally exempt.
- **This skill generates communication drafts, not legal documents.** Contract amendments, extension addenda, and formal notices should use state-approved forms. The scripts and templates here are for client-facing conversations and relationship communication, not for legal or contractual communication.
- **Bad news delivered poorly creates liability.** Miscommunicating contractual obligations, deadlines, or material facts can lead to E&O claims. When delivering complex bad news involving legal rights or contractual deadlines, ensure the communication is factually accurate and recommend the client consult their attorney if legal questions arise.
- **Review solicitation must comply with platform terms.** Never offer incentives for reviews, never ask clients to write specific content, and never post fake reviews. Google, Zillow, and Yelp actively detect and penalize manipulated reviews -- and FTC enforcement on fake reviews has increased since 2024.
- **Tone varies by client and situation.** These templates provide a professional baseline. Agents should adjust tone based on their relationship with the client, the client's personality, and cultural considerations. A first-time buyer who is anxious needs a warmer, more detailed approach than a seasoned investor who wants bullet points.
