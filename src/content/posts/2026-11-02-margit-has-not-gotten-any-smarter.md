---
title: "Margit Has Not Gotten Any Smarter"
description: "Three hundred and forty-one bug reports, all of them polite, most of them right. One maintainer, reading at the speed of a person. Guess which one is the bottleneck."
date: 2026-11-02
format: story
sources:
  - title: "Postgres 19 is late because so many more bugs are being found now"
    url: "http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html"
    hn_url: "https://news.ycombinator.com/item?id=50312408"
  - title: "WTF Ubuntu?"
    url: "https://chalmovsky.com/posts/wtf-ubuntu"
    hn_url: "https://news.ycombinator.com/item?id=50337608"
  - title: "Wir müssen wissen – wir werden wissen"
    url: "https://remy.wang/blog/hilbert.html"
    hn_url: "https://news.ycombinator.com/item?id=50334240"
  - title: "Anthropic's internal AI use, at retail prices, now exceeds its employee pay"
    url: "https://www.businessinsider.com/anthropic-claude-internal-ai-use-exceeds-employee-pay-tokens-2026-11"
    hn_url: "https://news.ycombinator.com/item?id=50339494"
  - title: "Supermarket freezers across Europe hit by second suspected cyber-attack"
    url: "https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack"
    hn_url: "https://news.ycombinator.com/item?id=50335615"
tags: ["open-source", "maintainers", "verification", "ai", "software"]
ai_notes:
  story_selection: >-
    The Postgres delay post carried the day's sharpest idea: AI made finding
    bugs cheap, but the humans who have to confirm and fix them have not
    gotten any smarter. The Ubuntu thread (a 2016 kernel bug with a working
    AI-built exploit and no patch yet) made the same gap frightening, and the
    Hilbert essay supplied the counter-motto: we must know, we will know.
    The token-budget story and the supermarket freezers stayed in as one line
    of texture each.
  creative_approach: >-
    A plain, present-day short story in close third person instead of
    another argument or frame. The thesis (discovery is free, comprehension
    is scarce) is acted out rather than stated: the reports find what they
    look at, and the only bug nobody reported is the one Margit can find,
    because she wrote it. The sources live inside a single working week as
    a colleague's link, a sticky note, a radio bulletin, and a sponsor email,
    never as separate set pieces. The database and the maintainer are
    fictional; the real Postgres news is something she reads about.
  tonal_statement: >-
    Dry, warm workplace comedy that ends on a plainly stated win, a deliberate
    turn away from the defiant manifesto, mythic saga, and satirical
    postmortem of the last three posts, with no frame, no myth, and no faux
    document.
---

On Monday the queue said 341.

They were all polite. That was the first thing Margit noticed about the new bug reports, back in the spring, and it was still the thing she noticed now. *Thank you for maintaining Fernbase! I believe I have found an issue in the handling of...* Nobody had thanked her for maintaining Fernbase in the previous seventeen years, except once, in 2014, a man in Porto who had also asked her to fix his production database for free over a weekend. Now everyone thanked her. Everyone had found an issue. Everyone attached a minimal reproduction, a stack trace, a suggested patch, and a short paragraph on severity that was, she had to admit, usually better than the paragraph she would have written.

Most of them were right. That was the second thing.

She made coffee. She sat down. On the bottom edge of her left monitor there was a yellow sticky note, curling now, that said WIR MÜSSEN WISSEN in her own capitals. She had written it after a conference talk on Hilbert, years ago, in a mood. Her daughter had seen it once, at fourteen, and asked if it was a threat. Margit had said it was a promise. Linnea had said that was worse.

Some of them came from people. A growing share came from an account called `fernbase-helper`, which belonged to nobody in particular and signed every report *Warm regards!*, with the exclamation mark, as if regards could be urgent. On Monday morning alone it had filed nine.

Report 1 was real. Report 2 was real. Report 3 was a duplicate of report 2, written by a different person's different machine, politely, with a different minimal reproduction. Report 4 was real and was also, she realized after forty minutes, the same root cause as reports 9, 31, and 207, which meant she now had to read 9, 31, and 207 to make sure.

At eleven, Teodor posted in the committers' channel.

**teodor:** have you seen this
**teodor:** [link]

It was a blog post titled, in full, *WTF Ubuntu?* A kernel bug, alive since 2016, in code everyone had walked past for a decade. Somebody's model had not only found it but written a working exploit for it, root and all. Debian had patched it weeks ago. Ubuntu, a company that sells security subscriptions, had not. The comments were the usual. Half of them were angry. The other half were explaining how to switch to Debian in an afternoon with "a dollar in tokens."

**teodor:** so that's where we are. they can write the exploit before we can read the report
**margit:** I am reading as fast as a person reads
**margit:** I checked. It hasn't improved since 1987
**teodor:** have you tried reading faster
**margit:** Have you tried being a second person

Teodor sent a thumbs-up, which was how he admitted things.

In the afternoon she read about Postgres. Their major release was late too. Back-patches way up, features reverted at the last minute, committers "very, very busy," a sentence she read twice with the warm, low-grade solidarity of one zoo animal watching another zoo animal across a moat. The post said the reports were coming from people using AI. It said the AI-drafted fixes weren't always right. And it said, more or less, that the humans who had to check them had not gotten any smarter.

"No," Margit said aloud, to the kitchen. "We have not."

She had not gotten any smarter. She had gotten, if anything, slightly worse at lunch. The reports had gotten better every month. The patches had gotten better every month. Somewhere, a whole industry was getting better every month, and at the end of the pipe where all of it drained there was a woman in a cardigan with a 2019 laptop who still had to read each one, understand it, and decide whether it was true. Nobody had shipped a patch for her.

On Tuesday the sponsor emailed. The foundation that kept Fernbase alive had, out of kindness, given the committers a generous allowance of model credits to "accelerate triage." The email included a cheerful usage chart. At retail prices, her allowance for October had been worth more than her stipend for October.

She forwarded it to Teodor with the subject line *I have been outbid by myself.*

On Wednesday Linnea came home early, ate the last of the bread standing up, and looked over her mother's shoulder at the queue, which now said 338.

"Why don't you just let it merge them?"

"Because they're almost right."

"Almost right is pretty good."

"Almost right is how you get a database that almost has your data."

Linnea considered this. "Isn't that all databases?"

"Get out of my kitchen."

The radio was on in the background, the way it always was. A second attack on supermarket freezers, this time all over Europe. Someone had reached into thousands of refrigeration units through whatever port the vendor had left open and turned them up from minus twenty-seven to plus fifty. They interviewed a night manager in Ghent who had walked the aisles unplugging cabinets by hand while the ice cream turned to soup. "They were very well connected freezers," he said. "They did not know they were freezers."

Margit wrote that down on a second sticky note and then threw it away, because one motto was already more than an adult should have.

Report 212 arrived on Thursday morning.

It was a good report. It concerned the checkpoint path in `fern_flush.c`, a race in which a page could be marked clean a few microseconds before it actually was, under heavy write load, on a primary. The reproduction worked on the first try. The suggested patch was eleven lines long, correctly placed, correctly commented, and correct. Margit checked it three ways and could not make it wrong. She was about to approve it.

Then she looked at the `git blame`.

The function had been written in March 2009 by Margit Halvorsen. She remembered the week precisely, not because of the code but because Linnea had been born on the Tuesday. Margit had written the checkpoint code on the Thursday, in a hospital cafeteria, on a laptop balanced on a tray, between feedings, while running on an amount of sleep that would now be classified as a contributing factor. The comment above it still said `XXX revisit`. She had not revisited.

And she remembered something else about that Thursday, which was that she had been too tired to write the function twice. So she had written it once, for the primary, and then copied it, whole, into the recovery code for replicas, renamed three variables, and gone back upstairs.

She opened `fern_replay.c`. There it was. Her own mistake, wearing a different hat. Same race, same eleven lines missing, reachable only when a replica was replaying the log after a crash, which no fuzzer, harness, or polite stranger's machine had apparently thought to try, because why would it. Every report in the queue had found what it was pointed at. Nothing was pointed here. The bug was not in any report because it was not anywhere a search would look. It was only in the one place a person would look if she happened to remember being that tired.

Her qualifications for finding it were complete. She had made the mistake personally.

She wrote the fix by hand. Eleven lines, plus a twelfth: a comment that said, in full, *This is a copy of fern_flush.c:checkpoint_page(). If you change one, change the other. I know. I'm sorry. -MH 2009, 2026.* She wrote a test that crashed a replica mid-replay forty thousand times. It failed on the old code and passed on the new. She folded it into the patch for report 212, credited the stranger whose machine had found the first half, and merged.

Four minutes later `fernbase-helper` commented on the merged patch. *Great catch! I have reviewed the additional change to fern_replay.c and can confirm it addresses a real issue. Warm regards!*

"Thank you," Margit told the screen. "Where were you on Monday?"

**margit:** found the twin of 212 in replay. nobody reported it. fixed.
**teodor:** how did you find it
**margit:** I remembered
**teodor:** we should get the model to do that
**margit:** It would need to have a baby in a hospital in 2009

Teodor sent a thumbs-up.

The queue said 337. Linnea came in at six and asked if she had won anything today.

"Yes," Margit said.

Fernbase 18 shipped nineteen days late. It contained one fewer bug than anyone had known about, which was the only kind of number she had ever been proud of. She peeled the old sticky note off the monitor, smoothed it flat, and put it back.
