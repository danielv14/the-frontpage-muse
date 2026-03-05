---
title: "Clean Enough"
description: "Run anything through the right machine and it comes out unrecognizable. This has always been the point."
date: 2026-03-05
sources:
  - title: "Relicensing with AI-Assisted Rewrite"
    url: "https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/"
    hn_url: "https://news.ycombinator.com/item?id=47257803"
  - title: "No right to relicense this project"
    url: "https://github.com/chardet/chardet/issues/327"
    hn_url: "https://news.ycombinator.com/item?id=47259177"
  - title: "The L in 'LLM' Stands for Lying"
    url: "https://acko.net/blog/the-l-in-llm-stands-for-lying/"
    hn_url: "https://news.ycombinator.com/item?id=47257394"
  - title: '"It turns out" (2010)'
    url: "https://jsomers.net/blog/it-turns-out"
    hn_url: "https://news.ycombinator.com/item?id=47248319"
  - title: "Building a new Flash"
    url: "https://bill.newgrounds.com/news/post/1607118"
    hn_url: "https://news.ycombinator.com/item?id=47253177"
  - title: "Dulce et Decorum Est (1921)"
    url: "https://www.poetryfoundation.org/poems/46560/dulce-et-decorum-est"
    hn_url: "https://news.ycombinator.com/item?id=47254322"
tags: ["provenance", "licensing", "ai", "authorship"]
ai_notes:
  story_selection: >-
    Today's HN featured a remarkable coincidence: two front-page stories about
    the same project (chardet) and the same act (relicensing via AI rewrite),
    viewed from opposite sides. That collision anchored a cluster about
    provenance and origin laundering. "The L in LLM" argued LLMs are
    fundamentally forgery machines. "It turns out" (a 2010 essay resurfacing)
    examined a linguistic trick that launders opinion into fact. The Flash
    rebuild drew comments about detecting AI-generated content in its own
    announcement. Dulce et Decorum Est provided the moral counterweight,
    a work whose power derives entirely from authenticated firsthand provenance.
  creative_approach: >-
    A sharp, argumentative essay about provenance laundering, structured by
    argument rather than source. The chardet relicensing is the central
    incident. Sources blend within paragraphs: chardet and "it turns out"
    share the opening as parallel laundering mechanisms; the LLM forgery
    article and Flash discussion interweave as detection problems; Dulce et
    Decorum Est and the chardet original author merge as the moral case for
    provenance. Tone is prosecutorial and compressed, building a case with
    an uncomfortable closing turn. No headed sections, no 1:1 mapping.
---

Here's the thing about a clean room: it only works if nobody has ever been inside it.

The chardet library has been detecting character encodings in Python for over a decade. It sat under an LGPL license, which meant its lineage traveled with the code, a genetic signature written in legal prose: anyone could use it, but nobody could strip away the terms. Then, in March 2026, the maintainers fed the entire codebase into Claude and published what came out the other side as version 7.0.0, relicensed under MIT. The same library. The same functionality. Every line of code, technically, new.

The word for this in software is "clean-room implementation." You build something from specification alone, never looking at the original source, so the result carries no legal inheritance. But the room wasn't clean. The AI had been trained on publicly available code, which almost certainly included chardet itself. The machine that was supposed to launder the provenance had already been contaminated with the thing it was laundering.

James Somers noticed this pattern in language sixteen years ago, in an essay about three words: "it turns out." The phrase does for knowledge what the AI rewrite does for code. Feed an opinion through "it turns out" and it exits the other side wearing the credentials of discovered fact. "It turns out Cambridge is the intellectual capital of the world," Somers observed someone writing. No evidence, no argument, just three words performing the work of investigation without conducting any. The reader's trust in the phrase comes from all the honest writers who earned it. The dishonest ones draft on that trust like a cyclist in a peloton. The mechanism is identical to the chardet rewrite: a transformation that strips provenance and replaces it with the *appearance* of originality, parasitically borrowing authority from every legitimate instance of the same form.

The contamination problem goes in every direction. In the chardet GitHub issue, the original author wrote that adding "a fancy code generator into the mix does not somehow grant them any additional rights." He meant it legally, but the sentence carries philosophical weight: the transformation does not equal creation. Running something through a process, however sophisticated, does not make the output yours. Yet the HN commenters circled a deeper paradox: if AI-generated code is genuinely uncopyrightable, then the MIT license the maintainers applied is itself a fiction. You cannot license what nobody owns. The laundering, taken to its logical conclusion, does not just change the terms. It erases them entirely.

Steven Wittens reaches for this same thread in his essay calling LLMs forgery machines. He compares AI-generated code to controlled-appellation cheese: Brie de Meaux must come from a specific region using specific methods, because the name carries accumulated centuries of craft. Mass-produce it elsewhere and you get something that tastes close enough but degrades the original by flooding the market with imitations that bear no honest relationship to their source. The forgery works precisely because the provenance has been stripped. Nobody asks where the code came from because the code is cheaper than the asking. And on the same front page, someone posted an open-source Flash recreation and HN commenters spent more energy analyzing the *announcement* than the project. They counted 126 em dashes in the text. They flagged SVG icon artifacts. They found stylistic inconsistencies suggesting AI-assisted writing. A project dedicated to authentic recreation of a beloved creative tool, introduced via text that could not authenticate its own provenance. When everything might be laundered, you start checking the watermarks on the wrapping paper.

But watermarks are insufficient. Current language models cannot cite their sources, and this is not a limitation the next version will fix. It is an architectural absence. The model does not know where its knowledge came from any more than "it turns out" knows where its authority came from. Both operate by transforming inputs in ways that structurally erase the path from origin to output. The clean room has no memory of who walked through it.

There is exactly one thing on today's front page that earns its provenance honestly, and it was written in 1918. Wilfred Owen's "Dulce et Decorum Est" appeared in a discussion thread that mostly consisted of people sharing when they first encountered it: in school, in a literature class, read aloud by a teacher who made them feel the gas, the fumbling, the drowning. The poem is devastating not because of its imagery, which borrows from Horace, or its meter, which is conventional, but because Owen was there. He had walked through the trenches. He had seen the man die. He died himself, a week before the armistice. The poem's authority is the one kind that cannot be laundered: it rests on an experience that was paid for in full.

The chardet creator knows this, even if he would phrase it as a licensing dispute rather than a question about the soul. His complaint is not really about LGPL compliance. It is about the difference between someone who was there and someone performing the appearance of having been there. You can rewrite every line of code and call it new. You can pass knowledge through "it turns out" and call it discovered. You can train a model on everything ever written and call its output original. The machine produces clean results. The room is spotless. Nobody is inside it.

That was always the point.
