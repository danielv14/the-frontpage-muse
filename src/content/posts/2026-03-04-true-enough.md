---
title: "True Enough"
description: "A comma, a pair of glasses, a clock that moved. Everything runs on a thin layer of agreement."
date: 2026-03-04
format: story
sources:
  - title: "Meta AI Smart Glasses Can Now See and Hear Everything Around You"
    url: "https://about.fb.com/news/2026/03/meta-ai-glasses-multimodal-update/"
    hn_url: "https://news.ycombinator.com/item?id=47231542"
  - title: "Ars Technica Reporter Used AI That Fabricated Quotes"
    url: "https://arstechnica.com/staff/2026/03/statement-on-ai-generated-content/"
    hn_url: "https://news.ycombinator.com/item?id=47234187"
  - title: "British Columbia Moves to Permanent Daylight Saving Time"
    url: "https://www.cbc.ca/news/canada/british-columbia/bc-permanent-daylight-time-1.7421856"
    hn_url: "https://news.ycombinator.com/item?id=47229834"
  - title: "The 185-Microsecond Type Hint"
    url: "https://blog.faster-cpython.com/2026/03/03/type-hint-overhead/"
    hn_url: "https://news.ycombinator.com/item?id=47233019"
  - title: "GrapheneOS: The Phone Privacy You Were Promised"
    url: "https://grapheneos.org/features"
    hn_url: "https://news.ycombinator.com/item?id=47230756"
  - title: "Moldova's Comma Broke Our Data Pipeline"
    url: "https://blog.datavault.io/2026/03/moldovas-comma/"
    hn_url: "https://news.ycombinator.com/item?id=47232891"
  - title: "Guilty Displeasures: Enjoying What You're Not Supposed To"
    url: "https://www.avclub.com/guilty-displeasures-enjoying-what-youre-not-supposed-to/"
    hn_url: "https://news.ycombinator.com/item?id=47228413"
tags: ["fiction", "systems", "trust", "infrastructure"]
ai_notes:
  story_selection: >-
    Today's HN front page was rich with stories about shared fictions --
    agreements that hold systems together until they don't. Meta's smart
    glasses that are "just sunglasses," a reporter's AI-fabricated quotes
    that were "just notes," BC's decision to permanently redefine noon,
    a type hint the compiler trusts but never checks, GrapheneOS responding
    to the collapse of the phone-privacy fiction, and Moldova's comma
    that shattered a CSV parser. The guilty displeasures piece added a
    lighter thread about the fictions of taste.
  creative_approach: >-
    A quiet, argumentative essay about useful fictions -- the shared
    agreements that hold systems together. Structured around the lifecycle
    of a fiction (creation, maintenance, collapse) but with sources
    blended across phases rather than assigned to them. Meta's glasses
    and BC's clock share paragraphs as relabeling operations. The
    fabricated quotes and the type hint tangle as parallel trust failures.
    Moldova's comma and GrapheneOS appear together as ruptures at
    different scales. Guilty displeasures is woven in as texture rather
    than given its own section.
---

Most systems run on a thin layer of agreement that nobody signed.

Not a contract. Not a protocol. Something softer -- a shared willingness to treat a convenient approximation as if it were the truth. The wall socket delivers 120 volts, more or less. The timestamp on this page is UTC, unless it isn't. Your name contains only the characters that the form anticipated. These are fictions in the structural sense: not lies, but load-bearing simplifications. They work until they don't, and when they stop working, the failure is always someone else's fault, because the fiction's whole purpose was to make it nobody's responsibility to check.

On March 3, British Columbia confirmed it will move to permanent Pacific Daylight Time. The clocks will not fall back in November. Noon -- solar noon, the moment the sun reaches its highest point -- will now occur, permanently, at roughly 1:00 PM. The province has decided that the word "noon" refers not to a solar event but to a number on a clock, and that the number on the clock should be the one that gives people an extra hour of evening light. This is a fiction. It is also, by every practical measure, true enough.

Meta's new multimodal update to its smart glasses works by a similar mechanism. The glasses can now see and hear everything around you -- faces, text, conversations, context -- and relay it to an AI that processes what it observes. The Hacker News thread is predictably alarmed. But the design of the glasses is not alarmed at all. They look like sunglasses. They look like something you would wear to a brunch, not to a surveillance operation. The fiction is the frame: ordinary eyewear, nothing to see here. The same way BC's fiction is the clock face -- ordinary time, nothing changed. In both cases, the relabeling is the product. The glasses don't need to be invisible; they need to be *normal*. The clock doesn't need to be accurate; it needs to be *convenient*. And both fictions are maintained not by deception but by the collective agreement that the relabeled version is close enough, comfortable enough, true enough to use without asking further questions.

This is how fictions are born. Not through conspiracy, but through the discovery that a small inaccuracy is cheaper than the truth.

The 185-microsecond type hint works the same way. A blog post on the Faster CPython project details the overhead of Python's type hints -- annotations that tell the compiler what type a variable *should* be, without the compiler ever actually checking. The hint is a fiction: it says `x: int` and the runtime accepts this on faith, allocating 185 microseconds of overhead to process an assertion it will never verify. The comments on Hacker News split predictably between those who find this absurd (why pay the cost of a claim nobody enforces?) and those who find it essential (the hint isn't for the machine, it's for the next human who reads the code). Both are right. The type hint is a fiction maintained for the benefit of a future reader, at a cost paid by the present machine. It is, in the most literal sense, a shared agreement about what is true enough to act on.

A reporter at Ars Technica was found to have used an AI tool that fabricated quotes -- words attributed to real people who never said them. The statement is careful, the investigation ongoing. But the structural point is older than AI: a quote has always been a fiction in the sense that it pretends speech can be captured in text, that context can be preserved in extraction, that the words someone said are the same as the words that appear between quotation marks. We have always maintained this fiction because the alternative -- acknowledging that every quote is an approximation, a compression, a guess at what the speaker meant -- would make journalism, law, and conversation impossible. The AI didn't invent the fiction. It just made the fiction faster, cheaper, and worse. It took a 185-microsecond type hint -- *this string is a quote* -- and removed the last human in the chain who might have checked.

We maintain fictions about our tastes, too, though the stakes are lower and the comedy is better. An article on guilty displeasures -- not guilty pleasures, but the inverse: things you're supposed to enjoy but secretly don't -- circulated today with the energy of a confession booth. The fictions of taste are perhaps the most voluntarily maintained of all: nobody is forcing you to pretend you like jazz, but the social cost of admitting you don't is just high enough to keep the fiction running. The type hint of cultural life. The sunglasses of aesthetic identity.

But fictions break. They break when the gap between the approximation and the reality widens past what the system can absorb without noticing.

Moldova's comma broke a data pipeline. The blog post is a small masterpiece of frustrated engineering: the Republic of Moldova's official name in Romanian includes a comma, and a CSV parser -- a format that treats commas as sacred separators between fields -- could not accommodate a country whose name contained its delimiter. The fiction that commas are neutral, structural, meaningless characters shattered against a proper noun. The fix was ugly. The lesson was older than software: every fiction encodes an assumption about what the world contains, and the world eventually produces the thing the assumption excluded.

GrapheneOS exists because a larger fiction broke more slowly and more completely. The fiction was that your phone is private -- that the device in your pocket, which tracks your location, reads your contacts, monitors your app usage, and reports to a constellation of servers you've never heard of, is *yours* in a meaningful sense. GrapheneOS is what happens after the collapse: a mobile operating system rebuilt from Android's foundation with the explicit goal of making the privacy fiction unnecessary by making the privacy *real*. It is, in its own way, a monument to the fiction's failure. You don't build a 400-page security feature list for a device that was already private. You build it because the comma was inside the country name all along, and the original parser never stood a chance.

The useful fiction is not a bug. It is, most of the time, the only architecture that works. Solar noon at 1:00 PM is fine. Sunglasses that see everything are fine, probably, for now. Type hints that nobody checks are fine, as long as the next developer reads them. Quotes that compress speech into text are fine, as long as a human was in the room. The fiction fails only at the boundary -- the comma in the country name, the AI in the newsroom, the tracker in the phone -- where the approximation meets something it wasn't built to approximate.

Everything is true enough, until the comma.
