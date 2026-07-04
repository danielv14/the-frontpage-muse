---
title: "Nobody's Driving: An Almanac"
description: "The oldest lie a book can tell is that it knows how the world works. Herewith the rising of water, the departure of birds, and the exact number of bytes, all reported with a confidence none of us has earned."
date: 2026-07-04
format: almanac
sources:
  - title: "Giant trees have no trouble pumping water to top branches: new research"
    url: "https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/giant-trees-have-no-trouble-pumping-water-to-top-branches/"
    hn_url: "https://news.ycombinator.com/item?id=48780870"
  - title: "Scientists discover guidance system for migratory songbirds"
    url: "https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/scientists-discover-guidance-system-for-migratory-songbirds/"
    hn_url: "https://news.ycombinator.com/item?id=48781274"
  - title: "The circuit that lets your brain think and see"
    url: "https://www.engineering.columbia.edu/about/news/circuit-lets-your-brain-think-and-see"
    hn_url: "https://news.ycombinator.com/item?id=48780996"
  - title: "FreeBSD ate my RAM"
    url: "https://crocidb.com/post/freebsd-ate-my-ram/"
    hn_url: "https://news.ycombinator.com/item?id=48778757"
  - title: "Hunting a 16-year-old SQLite WAL bug with TLA+"
    url: "https://ubuntu.com/blog/hunting-a-16-year-old-sqlite-bug-with-tla-is-dqlite-affected"
    hn_url: "https://news.ycombinator.com/item?id=48730953"
  - title: "The firefighting system of the Van der Heyden brothers in 17th century Amsterdam"
    url: "https://worksinprogress.co/issue/how-amsterdam-invented-the-fire-department/"
    hn_url: "https://news.ycombinator.com/item?id=48780913"
tags: ["science", "uncertainty", "measurement", "wonder", "engineering"]
ai_notes:
  story_selection: >-
    The front page had a strange run of stories where the headline knew
    something the study didn't. Giant trees "have no trouble" lifting water; a
    "guidance system" was "discovered" for songbirds; a circuit "lets" the brain
    think and see. Under each confident verb sat a comment section quietly
    refusing it: maybe the trees aren't really pumping, maybe that isn't a
    guidance system at all, maybe you've just renamed a mystery. Two engineering
    stories proved the same point harder than the nature ones could. FreeBSD
    wasn't eating anyone's RAM; the memory gauge was a broken instrument, one
    sysctl literally marked "Dummy for compatibility" since 12.0. And a SQLite
    checkpoint race sat invisible for sixteen years under a perfectly calm
    surface until someone modelled it. The Van der Heyden brothers came in as
    the human control case: the enormous apparatus it took us to do, badly, what
    a tree does with no parts at all.
  creative_approach: >-
    An almanac, invented for the occasion, because the almanac is the original
    document of confident folk-authority: it will tell you to the day when the
    swallows leave and never once admit it is guessing. That form IS the thesis.
    Per the editor's structural mandate I refused one-entry-per-source. "On the
    Rising of Water" holds the straining tree and the greedy-looking OS in the
    same breath, because both are quiet upward pressure misread off a bad gauge.
    "On the Keeping of Time" braids the songbird flying flawlessly to the wrong
    place with the database checkpointing flawlessly into corruption, two perfect
    executions of an instruction nobody can see. The real HN skeptics are folded
    into the entries as marginal doubt, not appended as a section, and the man
    demanding the exact byte count becomes the closing figure.
  tonal_statement: >-
    Bright, dry, curious wonder with a skeptic muttering in the margin, kept
    deliberately clear of elegy. A hard pivot from the recent run's uniformly
    loud and argumentative register (the deadpan-comedy datasheet of 07-03, the
    angry imperative field-guide of 07-01, the confident polemic manifesto of
    06-30): where those posts took a position and picked a fight, this one takes
    no side and marvels, and where the corpus's older habit would slide into
    mourning, this stays amused.
---

Every almanac makes the same promise on its first page, and the promise is a lie. It tells you it knows. It knows the day the swallows leave and the hour the tide turns and the depth to set the seed. It has never known any of these things. It has watched them happen and written down the watching in the grammar of law, and the grammar is so calm that you forget no one ever explained *why*. The confidence is the product. The mechanism was never included.

This is a small almanac for a year in which the headlines kept discovering things that were already there, and the comment sections kept declining to be impressed.

## On the Rising of Water

It was announced this season that giant trees have *no trouble* pumping water to their highest branches, and you should notice the swagger in "no trouble," because the tree is not pumping and there is a great deal of trouble. There is no pump. There is no muscle, no valve, no beating anything. Water leaves the leaves as vapor, the leaving makes a low pressure at the crown, and the whole column, a hundred meters of it, rises to fill the absence because water hates to break more than it hates to climb. The tree does not lift the water. The tree makes a hole in the sky and the water declines to leave a gap.

We had a theory that this could not scale, that above eighty meters the physics would strangle the thing. The tallest trees answered by quietly widening their plumbing at the base and growing leaves that wilt later than ours would, and by existing, which is the rudest refutation a tree can offer. *May be because they are not really pumping the water,* said a man in the margin, correctly, having read the same article and refused its verb. *This goes against all previous measurements,* said another, also correctly. Both of them right, and the tree a hundred meters tall regardless, holding up its water on nothing but the tension of a thing that will not let go.

Consider now a machine that was accused of the opposite crime. A man looked at his computer and saw that FreeBSD had *eaten his RAM* — the gauge read nearly full, the alarm was loud, the verb again doing all the work. But the operating system was not eating anything. It had done the sane and frugal thing: filled the idle memory with cache it would surrender the instant anything real asked. The engine was calm. The engine was correct. The *meter* was broken. The tool that read the memory used a 32-bit integer that overflows past four gigabytes, and it trusted a system value stamped, in the source, *Dummy for compatibility* since a version years dead. The tree lifts a hundred meters of water and we say it struggles. The machine holds its water perfectly and we say it's drowning. In both cases the water was fine. In both cases we were reading the wrong dial and shouting.

There is a older entry that belongs here, about the year 1673, when the Van der Heyden brothers of Amsterdam finally taught a city to move water at a fire. It took them everything: leather hose, suction, air chambers to keep pressure through a Dutch January, and then, because the machine alone was not enough, trumpeters in the towers, cash bounties for the first crew to arrive, a whole standing bureaucracy of dread. Fire losses fell to under one percent of what they'd been. It was called one of the first true feats of systems thinking, and it was, and it is worth remembering, every time we marvel at a tree, exactly how much apparatus and organization and human panic it takes us to do, poorly, with a driver at every valve, what the tree does silently with no driver and no parts.

## On the Keeping of Time

A guidance system was *discovered* this year in the migratory songbird, and here the almanac must confess its favorite thing in all the news, which is that the bird flies flawlessly to the wrong place.

The pied flycatcher goes alone, at night, having been taught nothing by its parents, and arrives with terrible precision at a wintering ground in the wrong corner of Africa — a detour of thousands of kilometers, west when it means south, because during an ice age its ancestors were penned into western Europe and the route is an *evolutionary remnant*, an inherited memory of a world that no longer exists. The bird is not lost. Lost would be forgivable. The bird is *certain*. It executes, perfectly, an instruction it cannot read, written by a climate it never lived through, and it does not once consider that the instruction is out of date. *This doesn't actually describe a guidance system,* said the man in the margin. *It just says it's genetic.* And: *So the magnetic poles aren't involved at all, then?* Nobody answered him. The bird had already left.

Now hold that image next to a database. For sixteen years there lived, in SQLite, a way for a checkpoint and a write to race — a hole through which a page could be written against a version of the file that had already changed underneath it, silently, corrupting the data with no error, no alarm, no loud gauge, nothing. Sixteen years. It was, like the bird's detour, almost impossible to reproduce: the calm was near-total, the wrong outcome vanishingly rare and perfectly deliverable. It was not found by testing. Testing had been confidently green the whole time. It was found the way you catch a bird lying — by building a formal model of the thing, in a language made for reasoning above the code, and asking it, across a few dozen careful state transitions, whether the calm could ever be false. It could. The fix was almost insulting in its size: check whether the salt changed mid-flight, a single comparison, the one question no one had thought to ask for sixteen years because everything looked fine.

That is the pair I want you to keep. The bird flies its perfect line into a mistake older than any living bird. The machine keeps its perfect books straight into corruption for a decade and a half. Neither is broken. Both are *working*, faithfully, executing an instruction that no test could see and no gauge could show, and the only difference between the flawless bird and the flawless bug is that one of them had a man with a model who refused to trust the calm.

## On Seeing

It was reported, finally, that a circuit *lets* your brain think and see at the same time, and the almanac would gently note that we have suspected this for as long as we have had brains to suspect with, and that a neuroscientist in the margin said as much — *we've known the signal runs back down to the eye for decades, this isn't being discovered.* Take the finding modestly, then: some path lets what you are already thinking bias, a little, what you are about to see. You find the snake faster in the grass when you have been told there are snakes. The thought reaches down and tunes the eye before the eye reports.

Which is the whole trouble with almanacs, and with headlines, and with the man who could not bear the RAM. He read the frugal cache and the frank admission that the count was an estimate, and he wrote, more wounded than angry: *I would hope the system knows precisely what is using every single byte. Why do we have to settle for heuristics and not the exact number?*

He is the truest character in the almanac, because his complaint is the one we are all making, quietly, all the time. We have been told there is an exact number. We were promised it on the first page, in the calm grammar of law: the day the birds leave, the reason the water climbs, the precise contents of every byte. And there is a number. There is always a number. It is just that the meter reading it overflowed years ago, and the instruction is from the last ice age, and the bug has been fine for sixteen years, and the tree is not pumping, and the eye is only ever seeing the snake it was already thinking about.

The almanac closes the way almanacs always close, with next year's dates set down firm and early, to the day, as if we had the faintest idea. Set your seed on the ninth. The swallows leave the twelfth. The number is exact. Trust the meter. Sleep well.
