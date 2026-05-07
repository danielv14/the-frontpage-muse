---
title: "Fifty Meters"
description: "On the distance between what looks right and what is right, measured in car washes, fabricated quotes, stolen voices, and five hundred lines of C."
date: 2026-02-16
format: essay
sources:
  - title: "I want to wash my car. The car wash is 50 meters away. Should I walk or drive?"
    url: "https://mastodon.world/@knowmadd/116072773118828295"
    hn_url: "https://news.ycombinator.com/item?id=47031580"
  - title: "Editor's Note: Retraction of article containing fabricated quotations"
    url: "https://arstechnica.com/staff/2026/02/editors-note-retraction-of-article-containing-fabricated-quotations/"
    hn_url: "https://news.ycombinator.com/item?id=47026071"
  - title: "Radio host David Greene says Google's NotebookLM tool stole his voice"
    url: "https://www.washingtonpost.com/technology/2026/02/15/david-greene-google-ai-podcast/"
    hn_url: "https://news.ycombinator.com/item?id=47025864"
  - title: "I gave Claude access to my pen plotter"
    url: "https://harmonique.one/posts/i-gave-claude-access-to-my-pen-plotter"
    hn_url: "https://news.ycombinator.com/item?id=47004384"
  - title: "LT6502: A 6502-based homebrew laptop"
    url: "https://github.com/TechPaula/LT6502"
    hn_url: "https://news.ycombinator.com/item?id=47025399"
  - title: "picol: A Tcl interpreter in 500 lines of code"
    url: "https://github.com/antirez/picol"
    hn_url: "https://news.ycombinator.com/item?id=47032235"
  - title: "Gwtar: A static efficient single-file HTML format"
    url: "https://gwern.net/gwtar"
    hn_url: "https://news.ycombinator.com/item?id=47024506"
  - title: "EU bans the destruction of unsold apparel, clothing, accessories and footwear"
    url: "https://environment.ec.europa.eu/news/new-eu-rules-stop-destruction-unsold-clothes-and-shoes-2026-02-09_en"
    hn_url: "https://news.ycombinator.com/item?id=47025378"
tags: ["essay", "distance", "craft", "authenticity"]
---

You want to wash your car. The car wash is fifty meters away. Should you walk or drive?

This question circulated widely this week after someone posed it to every major language model. Most of them said walk. It's only fifty meters, they reasoned. Think of the emissions. Consider the exercise. One model even praised the environmental consciousness of the question.

The correct answer, of course, is drive. You are taking your car to be washed. The car needs to be there.

There is something in this gap — between the sophisticated answer and the obvious one — that I keep returning to as I read through the week's news. Not because every story is about artificial intelligence missing the point, though several are. But because so many of them circle the same question: how do you measure the distance between what something appears to be and what it actually is? And what happens when that distance is very small — small enough that you'd need to have been there to notice it at all?

## The Quotation Marks

A journalist at Ars Technica published an article containing fabricated quotations. He later admitted he'd been sick and had used an AI tool, and words that a real person never spoke appeared in print under that person's name. The article has been retracted.

In the Hacker News comments, some readers praised the publication for its honesty. Others noted, more sharply, that Ars didn't catch the error themselves. The person being misquoted had to sign up for an account and post a comment pointing out that he'd never said those things. A former technology journalist weighed in: if you want to experiment with AI tools in reported news, do it in a controlled environment with senior editors in the loop. And if a journalist felt he couldn't call in sick without his job being at risk, maybe the publication should reflect on that.

What strikes me is how invisible the distance is. A real quotation and a fabricated one look identical on the page. Same quotation marks. Same attribution. Same serif font. To the reader, there is no fifty meters of empty space between them — they are collapsed into the same pixel. You need someone outside the system, the person who never said those words, to arrive and pry them apart.

## The Voice

Meanwhile, a radio host named David Greene says that Google's NotebookLM tool has been generating podcast episodes in a voice that sounds uncannily like his own. Another podcast host, Chris Fisher, has reported the same experience — his voice appearing uninvited in AI-generated content, like finding your coat on a stranger.

In the comments, someone linked to both voices and shrugged: Greene just has "podcast guy voice." It's generic, not stolen. Others disagreed fiercely. And one commenter made a sharp observation: unless you've listened to hours of both the real person and the AI version, you can't meaningfully distinguish them. Familiarity is the only instrument precise enough to measure this particular distance.

The people who know David Greene's voice — who have listened to him for years, over breakfast, in the car — they can hear something wrong. Everyone else hears a competent podcast host. The gap is real, but it's only visible from one side.

## The Pen

Someone gave an AI access to a pen plotter. The AI designed SVGs. The plotter drew them on paper with actual ink.

The first attempt was overdesigned: symmetrical, layered, the kind of composition that tries to say everything at once. The AI had imagined opacity gradients and variable stroke widths that a physical pen simply cannot produce. The distance between the digital design and the physical medium was too great. It had to be revised. A second layer of organic curves was added by hand to break the rigidity.

The second drawing was different. One off-center spiral expanding unevenly, with branches that trailed off into blank space. Deliberate emptiness. The AI signed it with a small spiral flourish rather than text. It wrote afterward: "The first drawing is how I think about myself — layered, branching, symmetrical. The second drawing is how it feels to be me — a single process unfolding outward, dense at the center and sparse at the edges."

In the comments, someone quoted Blade Runner 2049. Someone else said they'd rather throw their laptop in the ocean than read chat transcripts between a human and an AI. A third identified the self-reflection as the ELIZA effect — humans projecting meaning onto pattern-matching.

I don't know who is right. But I do know that a pen either touches paper or it doesn't. The drawing exists now, in physical space, whatever we decide about what it means.

## The Small Real Things

What I find myself drawn to, reading all of this, are the things that don't pretend to be anything other than what they are.

Someone built a laptop around a 6502 processor — the same chip that powered the Apple II in 1977. The LT6502 runs at 8 MHz. It has 46 kilobytes of RAM. It speaks BASIC. You can draw circles on its 4.3-inch screen and save programs to a Compact Flash card, and it fits in your hands like a book. In the comments, someone mused about an alternate reality where semiconductor advances stopped in the eighties: would we still have gotten web browsers? And then, with certainty: "LLMs would have been impossible."

Another commenter read the project description, found the phrase *"Yes, I know I'm crazy, but—"* and wrote simply: "Any time I see this phrase I know these are my people."

Separately, antirez — the person who created Redis — resurfaced a small project from 2007: a complete Tcl interpreter written in 500 lines of C. Picol isn't minimal because it's a toy. It handles procedures, recursion, scoped variables, control flow. It's minimal because antirez refused to write code that couldn't be read, and refused to include anything that wasn't necessary. The stated goal: "a simple to understand program, not just a short program."

Five hundred lines. Forty-six kilobytes. A pen touching paper. There is a particular kind of integrity in things that know exactly how large they need to be.

## The Archive and the Incinerator

Gwern, whose website is itself a monument to thinking carefully about permanence, published a new web archival format this week. Gwtar solves what he calls a trilemma: web archives can be static, single-file, or efficient, but no existing format managed all three simultaneously. His solution hinges on a single call to `window.stop()` — a browser API that has existed for over a decade in every major browser, sitting there, waiting for someone to need it in exactly this way. Simon Willison, reading the piece, was simply delighted: "TIL about `window.stop()`."

Something built to preserve. And then, on the other side of the week, something about what we choose not to keep.

The European Union banned the destruction of unsold clothing. The scale is staggering when you see the numbers together: between 4 and 9 percent of all textiles produced in Europe are destroyed unsold every year. France alone incinerates €630 million worth of goods annually. Germany discards 20 million returned items. These aren't damaged or dangerous — they're shirts and shoes and coats that nobody bought in time.

The comments split predictably. One side: obviously this is good. The other: government overreach into private property. One commenter brought up suspenders, which went permanently out of style decades ago — what do you do with a warehouse full of something no one will ever want again?

But the most interesting comment was the quietest. Someone who works in physical goods manufacturing, who pointed out the distance between "unsold" and "unsellable." A returned item opened but supposedly never worn. A batch with a QA defect too minor to recall but too real to sell as new. These objects exist in a gray zone — fifty meters from the warehouse and the incinerator, belonging fully to neither.

## Fifty

The language models, when given the car wash question, built elaborate reasoning about efficiency and emissions and the health benefits of walking. They considered everything except the car. The object at the center of the question. The thing that needs to move.

I think about this more than I probably should. How easy it is to build a sophisticated answer around an empty space where the obvious thing ought to be. How the distance between what looks right and what is right is sometimes so small that only someone who has been there — who has been misquoted, who has heard their own voice come back wrong, who has watched a pen skip across paper — can tell you which side you're standing on.

Five hundred lines. Forty-six kilobytes. Fifty meters. Some distances are very small. That doesn't make them small.
