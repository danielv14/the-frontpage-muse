---
title: "A First Course in Scarcity Dynamics"
description: "Scarcity can neither be created nor destroyed, only relocated. Chapter One, with two worked examples, a misconceptions box, and exercises. A pencil is recommended."
date: 2026-07-14
format: textbook
sources:
  - title: "Australian energy retailers must provide three hours of free daytime electricity"
    url: "https://lenergy.com.au/free-daytime-electricity-is-coming-heres-how-it-actually-works/"
    hn_url: "https://news.ycombinator.com/item?id=48902320"
  - title: "Japan develops a method to recover up to 90% of lithium from used EV batteries"
    url: "https://tech.supercarblondie.com/japan-recovers-up-to-90-of-lithium-from-used-ev-batteries/"
    hn_url: "https://news.ycombinator.com/item?id=48901569"
  - title: "The Economics of Recursive Self-Improvement [pdf]"
    url: "https://elasticity.institute/rsi-paper.pdf"
    hn_url: "https://news.ycombinator.com/item?id=48901224"
  - title: "The infinite scroll may become endangered if controversial Calif. law passes"
    url: "https://www.sfgate.com/politics/article/meta-social-media-teenagers-22337724.php"
    hn_url: "https://news.ycombinator.com/item?id=48897104"
  - title: "What are Forward Deployed Engineers, and why are they so in demand? (2025)"
    url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers"
    hn_url: "https://news.ycombinator.com/item?id=48900432"
  - title: "Nokia's years of mobile-phone supremacy ended in an afternoon"
    url: "https://spectrum.ieee.org/nokia-phones-history"
    hn_url: "https://news.ycombinator.com/item?id=48892709"
  - title: "Alternative(s) to run CUDA on non-Nvidia hardware"
    url: "https://www.hpcwire.com/2026/07/09/spectral-compute-aims-to-set-cuda-free-will-it-succeed/"
    hn_url: "https://news.ycombinator.com/item?id=48903715"
  - title: "The git history command"
    url: "https://lalitm.com/post/git-history/"
    hn_url: "https://news.ycombinator.com/item?id=48901010"
  - title: "Our Amish Language"
    url: "https://www.thedial.world/articles/news/amish-pennsylvania-dutch"
    hn_url: "https://news.ycombinator.com/item?id=48901645"
tags: ["economics", "abundance", "energy", "attention", "ai"]
ai_notes:
  story_selection: >-
    Nearly every high-signal story on today's front page was a before/after
    scarcity ledger: Australia making midday electricity free (while evening
    rates rise), Japan making lithium abundant (while only 14% of batteries
    reach recyclers), a paper quantifying why cheap intelligence hasn't
    produced self-sustaining acceleration, a legislature trying to re-price
    attention, and companies paying premiums for humans to integrate abundant
    AI. The pattern selected itself: abundance never kills scarcity, it
    forwards its mail.
  creative_approach: >-
    A conservation law's native habitat is a textbook, so the piece is
    Chapter One of an imaginary undergraduate text, played entirely straight:
    numbered sections, two laws, worked examples, a misconceptions box,
    exercises. Per editorial instruction, sources are blended rather than
    mapped one-to-one — the electricity scheme and the infinite-scroll bill
    share a single worked example as the same equation in different variables;
    lithium logistics and forward-deployed engineers share the second; the RSI
    paper is the quantitative backbone of the Second Law rather than a
    section; Nokia and CUDA are one-liners in the misconceptions box.
  tonal_statement: >-
    Deadpan, assertive, dryly comic pseudo-science — a deliberate hard pivot
    from the somber literary register of the last three posts (an
    introspective story, a terse epigram, an elegiac war-atlas), none of
    which permitted a joke; this one is built out of them.
---

*From* Introduction to Scarcity Dynamics, *4th edition. Reproduced with permission that was abundant and therefore not sought.*

> "Basically a free IQ test."
> — a practitioner, on the occasion of electricity becoming free

## 1.1 The First Law

Students arrive at this course believing that scarcity is a quantity of things: not enough lithium, not enough electricity, not enough hours in the day. This belief is charming and wrong, and the sooner it is abandoned, the sooner the rest of the syllabus will make sense.

Scarcity is not a property of things. It is a property of *systems*, and within a closed system it is conserved. We state this formally.

**First Law of Scarcity Dynamics.** *Scarcity can neither be created nor destroyed. It can only be moved — across space, across time, or across layers of a system.*

Price, which the economics department insists on treating as fundamental, is merely the local coordinate reading of scarcity — the number the meter shows at your particular position and hour. When a price falls to zero, the untrained observer concludes that scarcity has been destroyed. The trained observer picks up the meter and starts walking, because the scarcity is now somewhere else, and it is the entire content of this discipline to determine where.

## 1.2 Worked Example: The Free Lunch, in Two Jurisdictions

*Problem.* A regional grid saturated with rooftop solar declares electricity free between 11:00 and 14:00. Separately, a legislature moves to ban the infinite scroll for minors. Show that these are the same event.

*Solution.* Begin with the grid. Four million rooftops flood the market at noon; wholesale prices go negative; a regulator converts the glut into three free hours for every household. Has scarcity been destroyed? Apply the First Law and inspect the boundary conditions. First: the free hours arrive with a 24 kWh daily cap — and one does not build a fence around something that no longer exists. Second: retail tariffs in the remaining twenty-one hours drift upward, from roughly 25 to 30 cents. The scarcity was not destroyed. It was *translated along the time axis*, out of the noon sun and into the evening peak, where it now sits waiting for you to come home from work, which is precisely when you were going to use it. Households with programmable batteries and smart chargers can chase the free window automatically; households without them get to reschedule their laundry by hand. Scarcity has also, note, migrated from electricity to *equipment* — a second application of the Law inside the first.

Now the legislature. Two decades ago, content became free and effectively infinite: the feed does not end, the price per item is zero. By the First Law we do not celebrate; we ask where the scarcity went. It went into the one input the feed consumes: attention, which condensed in the youngest users at such density that a state now proposes to regulate its extraction by statute — mandatory pagination, a legislated speed bump, friction by act of assembly.

Observe the symmetry. In both jurisdictions a good became free, and a governing body arrived afterward to assign the scarcity a new address — the evening peak in one case, the design of a scroll wheel in the other. Governments do not create scarcity and cannot destroy it. They legislate its forwarding address. Same equation; different variables. ∎

## 1.3 The Second Law

The First Law tells us scarcity is conserved. It does not tell us where it goes. For that we require:

**Second Law of Scarcity Dynamics.** *Scarcity flows from legible layers to illegible ones — from what a system can measure and price toward what it cannot.*

The cleanest contemporary measurement comes from the economics of machine intelligence. A recent model derives the condition for self-sustaining acceleration: each unit of AI capability must return at least a 15% increase in AI research productivity for the loop to feed itself. The measured figure since the arrival of coding agents is roughly 9%. Intelligence, in other words, has become abundant, and the acceleration has *not* become self-sustaining — because the missing six percentage points did not disappear. By the First Law they cannot. They relocated into the feedback loop itself — into integration, verification, taste, the deciding-what-to-ask — the layers no benchmark yet reads. The scarcity moved to exactly the place the meter cannot follow. This is not an accident of the technology. It is the Second Law operating in plain view.

## 1.4 Worked Example: The Last Mile, in Metal and in Mind

*Problem.* A nation learns to recover 90% of the lithium from a dead battery. Simultaneously, technology firms pay founding-engineer salaries for a role that is one-third travel. Locate the scarcity in each case.

*Solution.* The recovery process is genuine: double the traditional yield, 40% lower emissions, high-purity output fit for new cells. The lithium is no longer scarce *in the battery*. But only 14% of the nation's used batteries ever reach a recycler. The scarcity has flowed out of the earth's crust — legible, priced, contested by navies — and into the collection bin: logistics, drop-off habits, the gray zone between a consumer's junk drawer and an industrial furnace. Nothing about a junk drawer appears on a commodities exchange. Second Law, textbook case (this textbook).

The intelligence case is isomorphic. Models are abundant and effectively free at the margin; what firms cannot buy off a shelf is the human who sits inside the customer's building and makes the abundance land — the forward-deployed engineer, part builder, part translator, part diplomat, whose job description is so illegible that no two companies define it the same way. That illegibility is not a flaw in the role. By the Second Law, it is *why the role is where the scarcity pooled.* The metal is cheap and the bin is precious; the model is cheap and the last mile is priced like a founding stake. ∎

## 1.5 Common Misconceptions

**"Abundance ends scarcity."** Review Worked Example 1.2. Abundance is scarcity in transit.

**"Scarcity, held long enough, becomes property."** A handset manufacturer held the scarce position in mobile telephony for fourteen years, saw the threat within twenty-four hours of its announcement, and lost the position anyway. Held scarcity is a lease, and the afternoon the lease ends is not printed on it.

**"Scarcity can be manufactured and fenced."** A proprietary compute platform is scarcity borrowed against the absence of alternatives; the compilers now being built to run its code on rival hardware are the loan being called.

## Exercises

**1.** A retailer offers you three free hours at noon and a higher rate the other twenty-one. Express your annual savings as a function of whether you are home at noon. State the conditions under which the epigraph to this chapter applies to you.

**2.** A nation can now recover 90% of the lithium in batteries it does not collect, using intelligence it cannot integrate. Identify the two channels into which scarcity has migrated. State which one you would invest in, and why it is the bin.

**3.** A version-control system ships a command that can rewrite any commit, atomically, without ever leaving the repository broken. History is now abundant and revisable. What has become scarce? (Hint: it is not disk space.)

**4.** A small religious community has kept a language alive for three centuries by making everything outside it expensive. The outside is now free. Apply the Second Law and estimate what the community will run out of first. Show your work; the community has already shown theirs.

**5.** Using both Laws, predict where scarcity will reside in 2031. Answers appear at the back of the book, which does not exist yet, its publication having been rescheduled to wherever the time went.
