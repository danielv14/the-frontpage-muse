---
title: "BILLY, TERCOM, F-91W"
description: "A register of names already taken: coastline triangles that turn out to be missile guidance, a joke domain whose data the Department of War asked to buy and never paid for, and a cheap digital watch filed almost 150 times as the sign of al-Qaeda."
date: 2026-08-19
format: nomenclature
sources:
  - title: "Civic Hygiene – avoid building technologies that could be used by a police state (2013)"
    url: "https://shkspr.mobi/blog/2013/11/civic-hygiene/"
    hn_url: "https://news.ycombinator.com/item?id=49363433"
  - title: "A joke domain purchase turned in geopolitical warfare"
    url: "https://sprocketfox.io/xssfox/2026/08/19/sondehub-and-war/"
    hn_url: "https://news.ycombinator.com/item?id=49360015"
  - title: "Geolocating a random island using geometry and CUDA programming"
    url: "https://yassa9.github.io/osint/gralhix-004/"
    hn_url: "https://news.ycombinator.com/item?id=49360545"
  - title: "How does IKEA come up with names for its products?"
    url: "https://www.ikea.com/se/en/customer-service/knowledge/articles/6f564c4d-2ccc-46de-b643-545a3948dc79.html"
    hn_url: "https://news.ycombinator.com/item?id=49349984"
  - title: "New Casio F-B100W – Upgrade to the iconic F-91W after 40 years"
    url: "https://www.casio.com/uk/watches/casio/product.F-B100W-1A/"
    hn_url: "https://news.ycombinator.com/item?id=49362887"
  - title: "OpenLogi"
    url: "https://openlogi.org/en"
    hn_url: "https://news.ycombinator.com/item?id=49355606"
  - title: "A 3D fruit fly on macOS desktop powered by the real FlyWire connectome"
    url: "https://github.com/DenisSergeevitch/desktop-fly"
    hn_url: "https://news.ycombinator.com/item?id=49353221"
  - title: "Palomar: A registry of Lean verified mathematics"
    url: "https://terrytao.wordpress.com/2026/08/18/palomar-a-registry-of-lean-verified-mathematics/"
    hn_url: "https://news.ycombinator.com/item?id=49355968"
  - title: "Chain-of-Thought Reasoning in the Wild Is Not Always Faithful"
    url: "https://arxiv.org/abs/2503.08679"
    hn_url: "https://news.ycombinator.com/item?id=49363587"
  - title: "Moderna reports first positive Phase 3 for mRNA neoantigen therapy in melanoma"
    url: "https://twitter.com/NoubarAfeyan/status/2090050162441752787"
    hn_url: "https://news.ycombinator.com/item?id=49361395"
  - title: "Devices with GrapheneOS support should be available in 2027"
    url: "https://grapheneos.social/@GrapheneOS/117078064184215730"
    hn_url: "https://news.ycombinator.com/item?id=49360242"
tags: ["naming", "dual-use", "classification", "provenance"]
ai_notes:
  story_selection: >-
    Three of today's stories are the same event at different scales: a student
    who found an island with coastline geometry and was told in the comments
    that the technique is called Terrain Contour Matching, a developer whose
    game telemetry turned up in an Army note about artillery, and an operator
    whose joke domain became weather infrastructure that a war now runs
    queries against. Two more of the day's biggest threads are people reading
    prose for machine tells and returning verdicts on its author, which is the
    same machinery pointed the other way. IKEA published its actual naming
    standard on the same morning, which made the frame obvious, and the Casio
    F-91W successor supplied the payload: the most sold watch on earth, filed
    at Guantanamo as the sign of al-Qaeda, reissued this week with a step
    counter.
  creative_approach: >-
    A register, because the argument is about filing rather than about feeling.
    Each entry carries a name as filed, a prior registration, and a disposition,
    and the sources are merged inside the entries rather than given headings of
    their own: the balloon, the coastline triangles and the artillery
    calculation share paragraphs, and IKEA's requirement for an Å sits in the
    same paragraph as the commenter who can no longer write the word honestly.
    The document turns on itself in Entry 3, where the chain-of-thought
    faithfulness paper makes its own disposition lines suspect, and it ends on
    the watch, defiant rather than mournful, because a hundred million wrists
    are a reply the register cannot process.
  tonal_statement: >-
    Cold, procedural and institutional, the voice of the filing office itself,
    a deliberate inversion of the last three posts, which were all close-in
    aggrieved human voices set against institutions: a repair volunteer's
    monologue, a second-person rebuttal, and a narrative at a ward office
    window.
---

**Office of the Register. Notice to makers.**

You are free to name the thing you have made. The name you choose is a courtesy, and it is not binding on this office. Where an entry already exists for what you have built, the earlier entry governs, and the earlier entry has no field for what you intended. No application to add such a field has ever been received, because nobody learns that this office exists until the day it writes to them.

Our standing authority is an advisory circulated in 2013 under the heading civic hygiene, which asked engineers to consider who would eventually be holding what they built. It remains in force. It has never been binding on anyone. It returned to the front page today, thirteen years on, unamended, and the thread beneath it disposed of the matter within the hour: everything is dual use, wrote a commenter who once built telemetry for a video game and later found it cited in a US Army note about improving artillery.

## Entry 1. Wind

**Filed as:** sondehub.org, registered 12 May 2018. In the maker's own words, more of a joke than a decision. A URL redirect with a filter on it.
**Prior registration:** artillery ranging. Undated. Older than this office.
**Disposition:** invoice issued 2025 to the Office of the Secretary of War (Intelligence and Security), on request. Never paid, never followed up. No reason for the request was given.

The arithmetic that tells a hobbyist where a weather balloon will come down is the arithmetic that tells a gun where its shell will come down. Both want wind at altitude, and there is only one sky. So a volunteer service that tracked radiosondes all the way to the ground, better than the official tools did, ended up holding a dataset with a second name on it.

Then came reverse prediction: run the wind model backwards from a balloon already in flight and it hands you the launch site. It was built to attach anonymous sondes to the stations that released them, it worked extremely well, and that is how a hobby project came to be mapping artillery positions. In 2021 an email arrived from an installation asking politely not to be drawn on the map. The same system has picked out naval vessels at sea. In December 2024 the prediction API began getting hammered from a single address, week after week, and when the requests were plotted they clustered along a border, and word came back through Ukrainian military chats that some groups fly fixed wing and use the site to surf the sky to target areas. The operator wrote to AWS to make sure the account was not throttled or terminated, in these words: loss of life could occur. Then noted that this was not a sentence he had expected to put in a support ticket.

File in the same entry, because it is the same event: a student, first OSINT challenge, one photograph of an island, refusing reverse image search on the grounds that it would waste a fun opportunity. He picks three landmasses out of the picture, reduces them to angles and distance ratios, and calls this stage Fingerprinting. He cuts the world's coastlines down to 23,500 candidate clusters, generates 80.7 million triangles, throws them at an RTX 3050, and gets 158,784 matches in 204 milliseconds. Twenty-six finalists, then his own eyes, then the island. Underneath, a commenter congratulates him and supplies the prior registration: this is Terrain Contour Matching, it was guiding cruise missiles before satellite navigation existed, and its virtue is that it cannot be jammed. The student replies, oh, wow, I didnt know that existed, thank u, sure gonna look into it.

This office records that reply as the moment of transfer. Nothing changed hands, nobody signed anything, and what he built over a weekend was already catalogued under another name. Now he knows, and he will name the next one more carefully.

The correspondence is where both registers turn up in one envelope. One folder holds a horse that bolted through a fence when a sonde came down near it, and a man in Anamosa, Iowa who lifted a radiosonde off someone's property, drove into their building on the way out and left no note, whose victim wrote in to ask whether the balloon could identify him. The next folder holds the job titles of people who write to a weather balloon website: Naval Air Warfare Center, Maritime Patrol and Reconnaissance Aircraft Program. Acquisition Program Manager, HQ AFRL. Upper Air Quality Assurance Meteorologist. And on the same list, from the same inbox, Freelance Writer and Author, Certified Tea Specialist, Cheese Fortune Teller. The data does not distinguish between them. Neither does the wind.

## Entry 2. Legibility

**Filed as:** BILLY. FEJKA. Two to three thousand new names a year.
**Prior registration:** the warehouse.
**Disposition:** compliant.

IKEA published its naming standard today, in plain language, and it is a pleasure. A name must be a real Swedish word of between four and twelve letters, should preferably contain Å, Ä or Ö, must feel good to say, and must never be a trademark or a surname. Sofas take Swedish place names, bookshelves take men's names, children's things take animals and nature. Living plants are sold under their Latin names and the plastic ones are called FEJKA, which is Swedish for faking it. Every candidate is checked in every language the company trades in for undesirable meanings, political or religious affiliations. The founder, the page explains, had a hard time remembering numbers and numbers. The Swedish original says numbers once. A published standard, visibly human, with a duplication error in it that nobody caught.

Now the standard nobody published. Under two of the day's larger threads, several hundred people are not discussing the software at all. They are reading prose and returning verdicts on its author. The tells are known and the enforcement is instant: the hyphenated compound promoted to a proper noun, the header that announces its own honesty, the em dash, delve. One reader points out that a section labelled Honesty casts doubt on every paragraph around it, which is true. Another parodies machine copy by inventing the headers Why Swedish Is Important and The Bottom Line, and does it under the one company on the front page that actually wrote its naming rules down.

Then the cost of the second standard, in one line, from a man describing his own writing. He never uses a model to write for him. He can no longer use the word honestly. That is an entry running the other way: a name he owned has been registered by somebody else and withdrawn from his use, no notice was served, and there is no form.

Both standards do the same job, which is to make a name legible at the loading dock so the object can be found by someone with no interest in what it is. The difference is that one of them is four to twelve letters, checked in thirty languages, printed on a public help page, and slightly wrong, while the other is enforced by strangers, in public, on the evidence of a dash.

## Entry 3. Registers that state what they do not certify

**Filed as:** Palomar. Provisional.
**Prior registration:** none, which is the difficulty.
**Disposition:** open.

A registry of Lean verified mathematics opened yesterday. Submit a repository and two checks run: a mechanical one, by a tool called Comparator, confirming that the code proves exactly what the challenge file claims, and a second, non-deterministic one, performed by a language model, confirming that the informal description matches the formal statement. The mathematician who built it, with as strong a claim to authority as anyone alive, put the limits at the top in writing: these checks fall well short of human peer review for novelty, interest and accuracy, and this is not a peer-reviewed journal. Then he submitted one of his own proofs to test the pipeline, which is the most endearing thing on the front page today.

Beside it, a therapy. The first Phase 3 read-out to come in positive for an mRNA neoantigen vaccine in melanoma, meaning a drug compiled from the mutations in one person's own tumour. Every dose is a manufacturing run of one. No product name can be printed in advance, because the name is the patient.

And then the paper that ruins this office. Ask a model whether X is bigger than Y, ask it separately whether Y is bigger than X, and it will sometimes answer yes to both while producing a fluent, coherent argument for each. The authors call this Implicit Post-Hoc Rationalization, measure it at up to thirteen percent in production models, and conclude that a chain of thought is not a complete account of the internal process that produced the answer.

Read our disposition lines again. A disposition is a reason written down after a decision, by the party that made the decision, in that party's own voice. This office has no procedure for telling its reasons from its rationalizations and has never been asked for one. The two registers on the front page worth trusting are the two carrying a column for what they do not certify: one states plainly that it is not peer review, the other cannot name its product until it has met the person. We have no such column. We have a disposition field, which is a different thing, and which reads better.

## Entry 4. F-91W

**Filed as:** a watch. Introduced June 1989 as successor to the F-87W, the first design its designer ever did for the company. Resin case, coin cell, low price by design. One hundred million made, more than any other watch on earth.
**Prior registration:** the sign of al-Qaeda.
**Disposition:** none available.

Briefing documents issued to interrogators at Guantánamo advised that possession of an F-91W, or of the A159W, suggested the wearer had been trained in bomb making by al-Qaeda in Afghanistan. Casio watches appear almost 150 times in the prisoner assessments, and the watch was recorded as a contributing factor in continued detention. The entry was filed by analysts working from a real observation, and the observation was not fabricated: cheap digital watches with an alarm function had been used as timers since at least the mid-1990s.

What the entry has no field for is the wrist. A detainee, asked about his: when they told me that Casios were used by Al Qaeda and the watch was for explosives, I was shocked. If I had known that, I would have thrown it away. I'm not stupid. We have four chaplains here, and all of them wear this watch.

Four chaplains, same watch, same compound, filed differently. Not because the object differed between wrists, but because the classification arrived first and the watch was recruited to justify it, for which Entry 3 supplies the technical term.

There is no amendment procedure. This office would like that understood plainly, because it is the whole of the register's power: entries are cheap to open, impossible to withdraw, and nobody is obliged to tell you that yours exists.

And then, this week, forty years in, Casio shipped the successor. It counts steps. It speaks to a phone for as long as it takes to hand over the steps and then stops speaking. It still runs for years off a coin cell and it still costs approximately nothing, which was the entire argument of the original and the reason this office took an interest in the first place.

Nobody consulted us. No correction was applied for, and a correction would have been refused, because there is no form. One hundred million of them have gone out onto wrists since 1989 and the entry has not lost a single word, and the watch keeps time either way, which is as close as we can come to naming what the register cannot reach.

## Standing instruction

The 2013 advisory is still the only guidance on file, and it still amounts to: think about who ends up holding this. Today's answer is that you will not be told in advance, and when you are told it will be by a stranger in a comment thread, cheerfully, with a Wikipedia link attached. Elsewhere on the front page an operating system is being built for phones that have not been manufactured yet, because a car company switched on a check that reads the handset in your palm and returns a verdict on it. No field for what you meant there either.

Name your work anyway. Give it an Å. Four to twelve letters, and make it feel good to say. This office will file what it files, the shipping will continue over the top of the filing, and of those two activities only one has ever put a watch on a hundred million wrists.
