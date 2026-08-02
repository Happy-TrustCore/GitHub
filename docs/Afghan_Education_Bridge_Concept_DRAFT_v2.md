# Afghan Education Bridge
### A Digital Resource Platform Countering Educational Exclusion Under Authoritarian Rule
**Werner Schulz Fellowship 2026: Project Concept**
*(Draft. Target length 3 pages once formatted; trim team/roadmap sections first if over.)*

---

## 1. Background & Challenge

Since the Taliban's return to power in 2021, Afghanistan has become one of the clearest contemporary examples of an authoritarian regime using the deliberate restriction of information and education as an instrument of control, most severely against women and girls, who remain banned from secondary and university education. Even where opportunities exist outside the country, including scholarships, online courses, and university exchange programs, access depends on information that is scattered across hundreds of disconnected websites, mostly in English or German, and largely invisible to the students who need it most.

This is not simply a resourcing gap. It is a case study in how authoritarian control operates through information scarcity, and in how digital infrastructure built and maintained outside the reach of that control can restore agency to the people it targets. That is the frame for this project: not a relief effort, but a direct, practical counter to an ongoing authoritarian information blockade.

## 2. Project Goal

Build and launch a free, publicly accessible, bilingual (English / Dari, with German as a secondary interface) web platform that consolidates verified educational opportunities, including scholarships, university programs, and foundational online courses, for Afghan students seeking pathways into education in Germany, Europe, and beyond.

**Deliverable for the fellowship period (September–December 2026):** a working, publicly deployed platform (Minimum Viable Product) with a defined, verified initial content set: not a concept, not a loose prototype, but a live tool a real student could use on day one.

**Explicit scope boundary:** the items below are *phase 2 and beyond* and are not part of the 3-month deliverable. They are included to show direction, not to inflate the near-term ask.

## 3. What Ships in the Fellowship Period (MVP)

| Component | Scope for Sept–Dec 2026 |
|---|---|
| **Verified opportunity directory** | A searchable, filterable directory of scholarships, university programs, and exchange opportunities relevant to Afghan applicants, hand-verified at launch (target: 50–100 active listings), not scraped or unverified. Directly solves the "fragmented, unreliable information" problem named in the source brief. |
| **Bilingual interface** | English and Dari at launch. Pashto and German added post-fellowship if adoption warrants it. |
| **Guided FAQ assistant** | A narrowly scoped chatbot answering common, pre-defined questions (scholarship eligibility basics, application steps, general visa orientation), explicitly not legal advice, and framed as such. This is a bounded, buildable feature, not an open-ended "AI legal guidance" system. |
| **Static, public access** | No user accounts, no login system, no CMS backend in the MVP. Content is maintained directly by the founding team. This removes the biggest source of scope risk (secure user management, moderation, data protection obligations) from the 3-month build. |
| **Launch outreach** | Direct outreach to 3–5 Afghan diaspora and student community channels (existing online communities, university associations) to drive real usage and gather feedback before the fellowship ends. |

**Success criteria for the fellowship period:** platform is live at a public URL, contains a verified initial content set, has been used by a measurable number of real visitors, and has documented feedback from at least one Afghan student community. This gives the jury something falsifiable to evaluate rather than a promise.

## 4. Target Group

- Afghan secondary school graduates and current university students, particularly those affected by the ban on women's education
- Young Afghan adults inside and outside the country seeking verified pathways to study abroad
- Diaspora community organizations who currently do this information-brokering informally and by hand

**Gender equity is structural, not additive**: given that women and girls are the primary targets of Afghanistan's educational restrictions, the platform's content curation and outreach prioritize opportunities and formats (e.g., online-first, low-bandwidth-friendly) that remain accessible under restricted, monitored, or unsafe conditions.

## 5. Alignment with Werner Schulz Fellowship Values

- **Democracy promotion & understanding authoritarianism.** The project treats Taliban information control as a live case study in authoritarian governance, and builds a direct, practical countermeasure rather than a purely academic analysis of it.
- **Human rights.** Restores access to a right (education) being actively and deliberately denied, with explicit attention to the gendered dimension of that denial.
- **European cooperation.** Channels German and European institutional resources (scholarships, universities, exchange programs) to the people they are nominally already available to but structurally unreachable by.
- **Civil society, not commercial software.** This is a founder-maintained public resource with no client, no commercial relationship, and no connection to either founder's freelance or agency work. [Explicitly state this separation in the motivation letter.]

## 6. Technical Implementation

Built and deployed by the two founders directly, using the same lightweight, no-build-step web stack and CI/CD deployment pipeline (GitHub to Netlify) already in active use for their own prior work. Deployment infrastructure and workflow are therefore not a risk factor: they are already proven and operational before the fellowship even begins.

- Responsive, low-bandwidth-friendly frontend (critical given target users' connectivity constraints)
- Structured, filterable content database for the opportunity directory
- Lightweight FAQ chatbot integration (existing LLM API, narrowly scoped prompt/response set, not custom model training)
- Static/public architecture for the MVP; accounts and CMS explicitly deferred to phase 2

## 7. Team

[Emran Azizi]: [software engineering / CS background, relevant personal or community connection to the project's mission, prior project experience]
[Patrick Thompson]: [software engineering background, prior full-stack project experience]

*Fill in with real, specific detail. The jury is evaluating "proven skills/qualifications," so name concrete prior projects rather than general claims.*

## 8. Beyond the Fellowship (Roadmap, not part of the 3-month ask)

- Community layer: mentorship matching, peer discussion, webinars
- User accounts and personalized guidance
- Additional languages (Pashto, expanded German)
- On-the-ground support presence in Afghanistan
- Expansion of the platform model to other regions facing comparable restrictions on education

---
**Draft notes (remove before submission):**
- Trim to fit 3 pages once formatted with letterhead/margins. Sections 7 to 8 are the first candidates to shorten.
- Confirm exact MVP listing count (50–100) is realistic given actual time available before committing it in writing.
- Team section needs real biographical detail from each of you. Do not submit with placeholders.
