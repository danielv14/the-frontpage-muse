---
title: "Matter Out of Place"
description: "Burning Man counts every screw left in the dust. The rest of us have forgotten how."
date: 2026-05-08
format: essay
sources:
  - title: "The map that keeps Burning Man honest"
    url: "https://www.not-ship.com/burning-man-moop/"
    hn_url: "https://news.ycombinator.com/item?id=48049653"
  - title: "AI slop is killing online communities"
    url: "https://rmoff.net/2026/05/06/ai-slop-is-killing-online-communities/"
    hn_url: "https://news.ycombinator.com/item?id=48053203"
  - title: "Two Home Affairs officials suspended after AI 'hallucinations' found"
    url: "https://www.citizen.co.za/news/home-affairs-officials-suspended-ai-hallucinations/"
    hn_url: "https://news.ycombinator.com/item?id=48053842"
  - title: "Nonprofit hospitals spend billions on consultants with no clear effect"
    url: "https://www.uchicagomedicine.org/forefront/research-and-discoveries-articles/nonprofit-hospitals-spend-billions-on-management-consultants"
    hn_url: "https://news.ycombinator.com/item?id=48056158"
  - title: "Programming Still Sucks"
    url: "https://www.stvn.sh/writing/programming-still-sucks-fqffhyp"
    hn_url: "https://news.ycombinator.com/item?id=48040269"
  - title: "Maybe you shouldn't install new software for a bit"
    url: "https://xeiaso.net/blog/2026/abstain-from-install/"
    hn_url: "https://news.ycombinator.com/item?id=48056227"
  - title: "I want to live like Costco people"
    url: "https://tastecooking.com/i-want-to-live-like-costco-people/"
    hn_url: "https://news.ycombinator.com/item?id=48050499"
  - title: "Creating for a niche"
    url: "https://www.davesnider.com/posts/working-in-a-niche"
    hn_url: "https://news.ycombinator.com/item?id=48053770"
tags: ["responsibility", "attribution", "communities", "ai", "infrastructure"]
ai_notes:
  story_selection: >-
    The frontpage today turned out to be, almost accidentally, an
    argument about traces. Burning Man's MOOP map sat at the top
    photographing every screw left in the dust. Below it, in story
    after story, things being left behind that nobody could be made
    to sign for: AI slop bindweed in online communities, fabricated
    citations in a South African government white paper, $25 billion
    in hospital consulting fees with no measurable effect on patient
    outcomes, a cron job from 2016 still running because its author
    left, a software supply chain that has become unmappable. The
    MOOP map worked as a spine because it is the rare modern system
    that takes attribution seriously and publishes the result. Costco
    came in as a deliberate complication: cheerful pseudonymity that
    consumers consent to, which is a different beast. Dave Snider's
    niche piece earned the close because it is the photo-negative of
    everything else on the page: a maker who wants to be findable.
  creative_approach: >-
    Forensic op-ed, no headers. The MOOP volunteers with their moop
    sticks and green screens are the load-bearing image, and the
    piece returns to them in different keys. The Home Affairs
    audit-since-ChatGPT-launch-date detail and the hospital
    consultants share a passage because they are the same shape.
    The cron job and the npm tree share a passage for the same
    reason. AI slop sits next to the MOOP volunteers as the literal
    digital inverse. Tone admiring at first, sharpening through the
    middle, soft at the close. The thesis stands without quoting any
    single source heavily.
---

Eight days after Burning Man ends, the city of Black Rock is gone, but a hundred and fifty people remain. They walk the playa in lines with buckets and a pointed stick, and they pick up everything. Every cigarette filter. Every wood screw. Every clump of toilet paper. The Bureau of Land Management requires the dust to be returned to within a tolerance of 2.29 × 10⁻³ percent debris by area, and the volunteers test their progress by photographing what they find against a green screen and counting the pixels. Each camp gets a colored dot on a public map. Green is clean. Red is bad. The dots are kept year over year, beside the camp name, where everyone can see them. This is the part that matters. The cleanup is impressive. The map is the thing.

The map works because it makes leavings *attributable*. You cannot anonymize your trash on the playa. The screw you fail to bag is not just a screw. It is your camp's screw, geotagged, photographed, scored against a moving baseline of how clean the people next to you managed to be. Strangers will see it on a website in November.

It is, on reflection, almost the only system left like this.

Consider the rest of the day's news. A blog post called "AI Slop Is Killing Online Communities" describes the bindweed strangling the organic life out of forums: vibe-coded GitHub repos posted for the dopamine of having posted, AI-written essays about Kafka that no human cared to write or read, the slow withdrawal of the people who used to make a place worth visiting. It is the photo-negative of the MOOP map. Each piece of digital matter out of place looks, on its surface, like every other piece. It is anti-attributable by construction. There is no green screen on which to count its pixels, no camp name beside it, no dot to color red next year. The community wilts not under the volume of the mess but under its un-traceability. You can't sweep what you can't point to.

Two officials at South Africa's Department of Home Affairs were suspended this week after fabricated citations turned up in the revised white paper on citizenship and refugee protection. Books that don't exist. The department's response was to commission two outside law firms to review *every* policy document it has produced since November 30, 2022, the date ChatGPT became publicly available, treated for legal purposes as a contamination event on the map of state knowledge. In the same news cycle, a JAMA study found that nonprofit hospitals spent at least $7.8 billion on management consultants between 2010 and 2022, with no measurable improvement in operating margins, readmission rates, or mortality. Counting the rest of the consulting spend, it was more like $25 billion. These are the same shape of leaving. An institution produces a knowledge-shaped object — a white paper, a strategic recommendation — and when you go looking for the responsible mind, the trail washes out. Nobody will sign for it. The artifact remains. The trace doesn't lead anywhere. It is, in a forensic sense, MOOP, except no one is photographing it.

A widely shared essay this week opens at a corporate party with an engineer named Sara, who is the only person who knows how to keep a 1998 cron job running. The original author left years ago. Nobody documented what it does, and nobody can afford to find out. On the same day, the security blogger Xe Iaso wrote a short, weary post advising people to stop installing new software for a week. Multiple Linux kernel exploits had landed at once, and the npm and PyPI supply chains were ripe for a timed attack, the kind that sits in a dependency for a month and then goes off. These are not separate stories. The cron job is your personal supply chain, the part you inherited from someone who left, whose name you can no longer remember. The npm tree is the same thing at planetary scale. In both cases the question — *who is responsible for this code* — has no answer that anyone will commit to in writing. The maintainer is gone. The transitive dependency was published last Tuesday by an account opened last month. We have built, in code, exactly the system the playa refuses to be.

A counterweight, lest the argument over-claim. There is one piece of beloved infrastructure built explicitly on un-attribution: the Kirkland Signature label at Costco. An essay this week confessed a middle-aged convert's love for the warehouse, the communion hot dog, the M&Ms. The Kirkland trick is that you knowingly buy the un-branded version of a thing and trust the warehouse to vouch for it on your behalf. The maker is invisible because the buyer asked it to be. This is not the same as a dead cron job or a faked citation. It is consensual pseudonymity, a small grace, and it works because Costco itself is willing to sign — its name is on the bag. Pseudonymity is fine. It is *anonymity-without-an-author* that breaks things. Somebody has to be standing behind the label.

The MOOP map's quiet genius is that it solves this problem at the cheapest possible price: a colored dot, public, kept. It does not require punishment. It does not even require shame, particularly. It just requires that the leaving be linked to the leaver, and that the link not be erasable, and that the next year arrive. People adjust. Year after year, the dots get greener, because nobody wants their camp to be the red one. The information does the work that the moralism, on its own, never could.

There is a small, hopeful counter-frontpage today, almost buried. A software developer named Dave Snider wrote about building tools for a tiny gaming community, his wife's bluegrass scene, a man who hand-builds mandolins. He calls them his cathedrals built from match sticks. The thing that makes a niche a niche is not the smallness. It is that the maker can be found. Every keyboard, every plugin, every mandolin can be traced to one person who would prefer, on balance, to be traced. The audience is small enough that attribution is not a system requirement; it is the whole point.

The volunteers will be back on the playa in August with their moop sticks and their buckets. They will, somehow, photograph every clump of toilet paper. They will publish the map. The rest of us will continue to produce knowledge-shaped objects nobody will sign for, in communities that wilt because nobody can point at the bindweed, on top of code whose authors have walked away. The technology that keeps Burning Man honest is older than computers. It is just: each thing is from somebody, and we keep track. The remarkable part isn't that it works. It's that we stopped doing it everywhere else.
