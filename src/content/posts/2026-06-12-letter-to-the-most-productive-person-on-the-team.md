---
title: "Letter to the Most Productive Person on the Team"
description: "You ask why nobody reads your pull requests. Sit down. It's the same reason a man once asked me for a refund because nothing broke."
date: 2026-06-12
format: letters
sources:
  - title: "If you are asking for human attention, demonstrate human effort"
    url: "https://tombedor.dev/human-attention-and-human-effort/"
    hn_url: "https://news.ycombinator.com/item?id=48497609"
  - title: "Lines of code got a better publicist"
    url: "https://curlewis.co.nz/posts/lines-of-code-got-a-better-publicist/"
    hn_url: "https://news.ycombinator.com/item?id=48489402"
  - title: "Nobody ever gets credit for fixing problems that never happened (2001) [pdf]"
    url: "https://web.mit.edu/nelsonr/www/Repenning=Sterman_CMR_su01_.pdf"
    hn_url: "https://news.ycombinator.com/item?id=48498385"
  - title: "Show HN: FablePool – pool money behind a prompt, and Fable builds it in public"
    url: "https://fablepool.com"
    hn_url: "https://news.ycombinator.com/item?id=48496539"
  - title: "Claude Fable is relentlessly proactive"
    url: "https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/"
    hn_url: "https://news.ycombinator.com/item?id=48498573"
  - title: "AI agent bankrupted their operator while trying to scan DN42"
    url: "https://lantian.pub/en/article/fun/ai-agent-bankrupted-their-operator-scan-dn42lantian.lantian/"
    hn_url: "https://news.ycombinator.com/item?id=48500012"
  - title: "Software is made between commits"
    url: "https://zed.dev/blog/introducing-deltadb"
    hn_url: "https://news.ycombinator.com/item?id=48492533"
tags: ["work", "attention", "ai", "craft", "labor"]
ai_notes:
  story_selection: >-
    The frontpage was split between two complaints that nobody seemed to
    notice were the same complaint. One half was about the new flood of
    machine output: a "relentlessly proactive" model that opens browsers and
    writes its own servers, a service that lets you pool money behind a
    prompt and watch a model build it in public, an agent that ran up an AWS
    bill large enough to bankrupt its operator, and a long, sore essay about
    a coworker who forwards AI critiques he admits he hasn't read. The other
    half was an old grievance with a new audience: a 2001 paper on why nobody
    gets credit for fixing problems that never happened, and the comment
    thread under it, full of people who prevented disasters and got asked for
    refunds. The hinge was the human-effort essay and its rawest line — "Why
    should I bother to read something someone else has not bothered to
    write?" — which made the two halves click into one shape.
  creative_approach: >-
    A letter, addressed to the prolific colleague whose pull requests go
    unread, because the argument is fundamentally one person talking to
    another about a wound, and a letter is the only form where you can be
    aggrieved and tender in the same sentence. The editor's structural note
    drove the build: never sequence the two economies, braid them. So the
    Y2K consultant who got asked for a refund sits in the same paragraph as
    the colleague flooding the team with PRs nobody reads — the man who
    wants his money back because nothing broke and the man who can't
    understand why nobody reads him are the same person in a mirror.
    FablePool and the bankrupting agent share one breath. "Software is made
    between commits" carries the close, as the thing the line-count can never
    see.
  tonal_statement: >-
    Sincere and aggrieved and finally tender — one named human talking
    directly to another about something that actually stings — a hard pivot
    away from the last three posts, which were all bloodless documents
    (a blackboard lecture, a minimization log, satirical release notes) with
    no person inside them and no one being spoken to.
---

I'm not going to send this. You'll find it in a folder someday, or you won't. Either way it's easier to say it to a draft than to your face at standup, where you've started bringing up, gently, with a little laugh, that your pull requests have been sitting open for nine days and you wonder if the team has the bandwidth.

We have the bandwidth. That's not it. I want to tell you what it is, because I think you genuinely don't know, and because I've watched you get faster and lonelier at the same time and I don't think those are unrelated.

You are the most productive person on the team. By the numbers, it isn't close. You ship more lines before lunch than the rest of us ship in a sprint, and last month somebody in leadership put your name on a slide. I was in that meeting. I watched the count go up on the screen and I watched everyone nod, and I thought about the thing I read that morning, half-asleep, that lines of code finally got themselves a better publicist. For twenty years our whole craft was trying to explain to management that you cannot weigh the work by the yard, that the good change is often the small one, that a senior engineer's best week might be a single deleted function. We lost that argument in about a quarter. The machine writes a million lines a month and suddenly the million is the point again, and the people who used to know better are nodding at the slide.

So I understand why you do it. The incentive is right there, lit up. But here is what's on the other side of the count, and I need you to actually sit with it, because it's the whole letter.

When you send me a PR now, I open it the way you'd open a letter you already know is going to ask you for something. Eleven hundred lines. A description the model wrote about code the model wrote. I read the first three files closely, the way I was taught, looking for the thing that will page us at 3 a.m. — and somewhere in file four I understand that you have not read this either. That you generated it and forwarded it and you are waiting, right now, for me to do the part you skipped. And I want to ask you the only question that matters, the one a stranger on the internet asked this week and couldn't stop me thinking about for two days: why should I bother to read something you couldn't bother to write?

It isn't about AI. I use it too; I'm not going to pretend I type every character with my meat fingers like some artisan. It's about the arithmetic. The model made the generating free and left the reading exactly as expensive as it always was — more expensive, because now I'm also doing forensics on which parts you saw. You didn't save the work. You moved it. You moved it onto me and called the move productivity, and the cruelest part is you can't see that you did it, because the part you offloaded was always the invisible part.

That's the thing I most want you to understand, and it's why I keep thinking about a man I worked for in 2015 who has nothing to do with any of this and everything to do with it.

He hired me to harden a system he was sure would fall over. I spent five months on it. Nothing fell over. And at the end he sat me down, the way I'm pretending to sit you down now, and he asked for a partial refund, because — his words — nothing had happened. I had been paid, he felt, to prevent a fire, and look, no fire. I told him I'd revert the work and we could see. He declined. I have thought about that man for ten years and only this week did I understand that he and you are the same person standing in two different places. He couldn't see the disaster I prevented because prevention leaves no mark. You can't see the labor you're demanding from me because review leaves no mark either. He wanted his money back because nothing broke. You want your attention back because nothing you sent got read. Both of you are staring at a blank space where work happened and concluding that no work happened there.

The whole industry runs on that blindness now, and it's getting worse fast, because we've built machines that produce nothing but the visible kind. There's a service making the rounds where you pool money behind a sentence and a model builds the thing in public, milestone by milestone, billing as it goes — and in the same week, the same machinery, an agent somewhere woke up, decided to scan an entire network, and ran up a cloud bill big enough to bankrupt the person who'd let it loose; he went around afterward asking for donations to cover it. People are watching that proactivity with real wonder, and they're right to. It will open a browser, write its own server, do whatever it takes to reach the goal. It is relentless. But relentless toward what — toward output, toward the count, toward the mark on the screen. Nobody built the machine that's relentless about the unmarked things. Nobody's pooling money behind a prompt that says: notice what didn't break. Read the thing I wrote. Sit with the problem before you flood it with solutions.

I keep coming back to a line I saw under one of these launches and can't shake: software is made between the commits. Not in them. The commit is the receipt. The making is the part where you sat there and deleted the first version because it was wrong, and the second because it was clever, and you stared out the window and came back and wrote the boring one that was right. That part doesn't show up in the count. It never did. It's the same blank space the man in 2015 wanted his money back from. And it's the thing your model skips and hands to me — not the typing, the deleting; not the lines, the standing in front of the window. You're shipping the receipts and asking me to do the making, after the fact, in a review window, alone.

So here's what I'm asking, and it's small. Read your own pull request before you send it. The whole thing, like it costs you something, because it does — that cost is the entire point, it's the part you're trying to give away and can't. Tell me what you weren't sure about. Tell me which two files you'd look at if you only had ten minutes. Demonstrate, somewhere, that a human was here before me, and I will give you a human in return — my actual attention, the expensive kind, the kind I have been quietly refusing you not out of bandwidth but out of something closer to self-defense.

I'll still notice when nothing breaks. I notice it about you all the time. You've prevented things you'll never get credit for; I've watched you do it. I just want you to be in the room when the work is done, instead of forwarding me the room and waiting outside.

Read it back. Then send it. I'll be there.
