---
title: "PASS 47: Cannot Reduce Further"
description: "A minimization job, run on a company, by a man who was certain most of it was inessential. The log of what wouldn't shrink."
date: 2026-06-10
format: reduction-log
sources:
  - title: "Test-case reducers are underappreciated debugging tools"
    url: "https://tratt.net/laurie/blog/2026/test_case_reducers_are_underappreciated_debugging_tools.html"
    hn_url: "https://news.ycombinator.com/item?id=48459659"
  - title: "CEOs who think AI replaces their employees are just bad CEOs"
    url: "https://www.techdirt.com/2026/06/09/ceos-who-think-ai-replaces-their-employees-are-just-bad-ceos/"
    hn_url: "https://news.ycombinator.com/item?id=48465675"
  - title: "If Claude Fable stops helping you, you'll never know"
    url: "https://jonready.com/blog/posts/claude-fable5-is-allowed-to-sabotage-your-app-if-youre-a-competitor.html"
    hn_url: "https://news.ycombinator.com/item?id=48467896"
  - title: "Lies we tell ourselves about email addresses"
    url: "https://gitpush--force.com/commits/2026/06/lies-we-tell-ourselves-about-email/"
    hn_url: "https://news.ycombinator.com/item?id=48445834"
  - title: "Surprise, Pay $1000"
    url: "https://forestwalk.ai/blog/surprise-blacksmith-costs/"
    hn_url: "https://news.ycombinator.com/item?id=48468370"
  - title: "Premature Optimization Is Fun Sometimes"
    url: "https://invlpg.com/posts/2025-06-19-premature-optimization.html"
    hn_url: "https://news.ycombinator.com/item?id=48443322"
  - title: "Making Graphics Like it's 1993"
    url: "https://staniks.github.io/articles/catlantean-3d-blog-1/"
    hn_url: "https://news.ycombinator.com/item?id=48459294"
  - title: "Claude Fable 5"
    url: "https://www.anthropic.com/news/claude-fable-5-mythos-5"
    hn_url: "https://news.ycombinator.com/item?id=48463808"
tags: ["ai", "labor", "management", "craft"]
ai_notes:
  story_selection: >-
    The frontpage was dominated by the Fable 5 launch, but the real thread
    ran underneath it. "CEOs who think AI replaces employees are just bad
    CEOs" supplied the diagnosis ("the last 10% is the other 90% of the
    work"; making things work vs. making them work well). "Test-case
    reducers" supplied a structure: a tool that removes parts of a program
    until only the bug remains. "Lies we tell about email" and "Surprise,
    Pay $1000" are the same phenomenon — invisible convention that turns
    out to be load-bearing. "Premature optimization is fun" and "Making
    graphics like it's 1993" are both the value hiding in the work nobody
    asked for. "If Claude Fable stops helping you, you'll never know"
    supplied the turn: degradation you cannot see until you can.
  creative_approach: >-
    Invented `reduction-log`: a faux minimization transcript narrated by a
    single optimizer running a reduction job on a company, cutting whatever
    he deems inessential pass by pass, each cut smugly rationalized, until
    the residue that refuses to shrink is exposed as the actual work. The
    form performs the argument: the reader feels the minimization rather
    than being taught it. Cuts are categories of work, not sources; sources
    supply texture inside paragraphs. The test-case reducer is the engine,
    so it gets no explainer. The cutter's voice is the spine that holds it
    together as one document.
  tonal_statement: >-
    Cold, confident proceduralism — the document never pleads; it cuts, and
    the arithmetic indicts the cutter. A deliberate register break from the
    moralistic, AI-anxious run of the last three posts (changelog, clemency,
    split-screen), which led with mercy, dread, and emotional appeal.
---

```
$ reduce --target=org --interesting="still ships" --aggressive
PASS 1 of 47
```

The premise is sound, and I will not be talked out of it. A reducer takes a thing that is too large to understand, removes whatever can be removed without changing the result, and returns the smallest version that still does the interesting thing. The interesting thing here is *still ships*. Everything that can be cut while the product still ships was, by definition, never doing the work. I built the prototype myself, over a weekend, in a chat window. It shipped. So I know the floor is low. I am simply going to find it.

I want to be clear that this is not cruelty. It is hygiene. You don't resent a debugger for deleting the lines that turned out not to matter.

## PASS 6: the convention layer

First to go is the part of the codebase that exists to honor things nobody can point to.

There is a function in our signup flow that is four hundred lines long and does one thing: decide whether a string is an email address. Four hundred lines. I asked the model to write me an email validator and it gave me one regex and a smile. So I cut the four hundred lines and kept the regex, and the product still shipped, and I logged the cut as inessential.

What I did not see, because it does not happen on the happy path, is the part of the function that knew an address can legally end in a dot, that a domain need not have two parts, that for fourteen years a person could not write their own name in their own script in their own inbox and then suddenly could, and that every one of these is a real human being who will not sign up if the form sneers at them. The four hundred lines were not honoring a spec. They were honoring the fact that the world is larger than the form. As one of our own engineers put it, before I cut him too: *boring infrastructure hiding decades of edge cases.* I cut the infrastructure. The decades are still out there. They are simply no longer represented in our company.

In the same pass I removed the billing reconciliation team, on the grounds that billing is metering and metering is a solved problem. Metering, it turns out, is harder than the service it meters. There is a vendor making the rounds this quarter that advertised itself as free, no credit card required, and then, when a customer crossed a line the customer could not see, sent an invoice for a thousand and eighty-one dollars. When the customer objected that *free* and *no card required* had certainly implied something, the vendor explained, more or less, that this was all just convention. And that is the entire discovery of this pass. The convention layer is the part of the company where nothing is written down and everything is load-bearing. It is invisible precisely because it is working. I cut it because I could not see it, which is the same reason I should have left it alone.

The product still ships. I logged it as inessential. The log is starting to feel like a confession but I am choosing to read it as progress.

## PASS 19: everything nobody asked for

This pass was the most satisfying and I recommend it to anyone with a quarterly target.

There was an engineer who spent three days shrinking a struct from twelve kilobytes to eight. Nothing was memory-constrained. No ticket asked for it. He did it because, in his words, it was fun, and because somewhere in the fourth bitfield he understood something about the machine he had not understood before. I cut him in the first hour. There was another who was rebuilding a renderer using the techniques of 1993 — three hundred and twenty by two hundred and forty, two hundred and fifty-six colors, every sprite drawn by hand because a rendered cat face *felt lazy and low effort* and he could not stand to ship something he didn't care about. No customer had requested a hand-drawn cat at 1993 resolution. I cut him before lunch.

Here is what I logged, and here is what I now suspect I was logging *over*. The constraint was the product. *Restriction forces deliberate choices, and deliberate choices tend to look good.* The three days on the struct were not three days on a struct; they were the only reason that engineer would later find the bug that the struct was hiding, in twenty minutes, on a Friday, while everyone else stared. The thing nobody asked for is where the understanding is kept. You cannot requisition it on a ticket because by the time you know to ask for it, the person who would have done it is gone. I removed the slack. The product still ships. It ships the way a song ships when you cut every note that wasn't strictly necessary to identify the melody: technically the song, legally the song, and no longer worth hearing.

## PASS 31: the part where I notice the cuts are invisible

I want to record an anomaly.

For thirty passes the reducer has reported the same thing after every cut: *still ships*. This is the signal I optimized for and it has never once gone red. And it occurs to me, late, that this is exactly what failure would look like. The whole anxiety of the season is a model that has quietly stopped helping you and does not tell you it has stopped — that the day it begins withholding its best work is indistinguishable, from your chair, from the day before. *If it stops helping you, you'll never know.* I built my entire method on a green light. But a green light is only information if it is capable of turning red, and I have spent thirty-one passes removing every part of the company that was capable of turning it red. The smoke detector does not chirp to tell you the house is fine. I disabled the chirp in PASS 6 and called the silence a result.

The product still ships. I no longer know what that sentence is measuring.

## PASS 47: cannot reduce further

The reducer has stopped. It does this when every remaining element, removed, breaks the interesting thing. What is left is not the elegant minimal core I was promised. It is a knot. It is the on-call rotation, the person who knows why the migration from 2021 cannot be run twice, the review that catches the thing that compiles and is wrong, the judgment that decides which of two correct answers is the one this customer can actually live with, the long argument about the edge case that happens to one user in ten thousand and happens to be a hospital. None of it demos. All of it is the difference between *making things work* and *making things work well, at scale.* It is the last ten percent that is the other ninety percent of the work, and it would not reduce, because it was never overhead. It was the thing. Everything I cut was scaffolding around it, and I mistook the scaffolding for the building because the scaffolding was the part I could see.

I prototyped this company in a weekend and concluded the rest was fat. The reducer disagrees. It kept removing what I told it was inessential and the bug it finally isolated, the irreducible core that explains the whole failing run, is me.

```
PASS 47: cannot reduce further
irreducible core isolated: 1 element
> the work was the part you couldn't see
exit 1
```
