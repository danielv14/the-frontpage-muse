---
title: "PR #32781 Was Closed for Inactivity"
description: "This week's critical Java vulnerability was found in an hour by an AI. It had also been found in September, by a person, who attached the fix. Five whys, one answer."
date: 2026-11-19
format: five-whys
sources:
  - title: "Someone reported java4shell bug in September 2026"
    url: "https://github.com/openjdk/jdk/pull/32781"
    hn_url: "https://news.ycombinator.com/item?id=50558906"
  - title: "Google Chrome dev team declares bug report bankruptcy"
    url: "https://blog.plover.com/tech/bug-reports.html"
    hn_url: "https://news.ycombinator.com/item?id=50562101"
  - title: "Ruby2ßhell: Pre-authentication RCE on stock Rails"
    url: "https://verialabs.com/ruby2shell/"
    hn_url: "https://news.ycombinator.com/item?id=50556287"
  - title: "Multiple vulnerabilities in Regexp and String case conversion"
    url: "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/"
    hn_url: "https://news.ycombinator.com/item?id=50554038"
  - title: "Garage Door Spam"
    url: "https://blog.harrison.page/garage-door-spam/"
    hn_url: "https://news.ycombinator.com/item?id=50519231"
  - title: "Everything you need to survive and rebuild society"
    url: "https://lastbook.org/"
    hn_url: "https://news.ycombinator.com/item?id=50560822"
  - title: "How to Make the Ink Used to Write Hamlet and the Declaration of Independence"
    url: "https://lithub.com/how-to-make-the-ink-used-to-write-hamlet-the-declaration-of-independence-and-beethovens-fifth/"
    hn_url: "https://news.ycombinator.com/item?id=50561170"
tags: ["open-source", "security", "maintenance", "ai", "attention"]
ai_notes:
  story_selection: >-
    The spine is a single GitHub page: an OpenJDK pull request that diagnosed
    and fixed the Java4Shell bug in September, got no human review, and was
    closed after an inactivity bot's warning, thirteen days before the same
    bug was announced as an AI-assisted discovery. Around it I pulled the
    stories that turned out to describe the same failure at other scales: the
    Chrome bug bankruptcy post, a commenter told to close tickets to make a
    number go down, a second ancient one-byte overflow in Ruby the same week,
    a hobbyist garage-door PR that someone actually read, an offline
    survival library whose top reply said the missing ingredient was trust,
    and an archival ink that slowly eats the paper it is written on.
  creative_approach: >-
    A five-whys is supposed to descend from a symptom to a root cause and stop
    at something fixable. I wrote one honestly, in the flat register of an
    engineering document, and let each level indict a larger system than the
    last until the chain lands on something the form is not built to fix:
    our tools keep getting better at speaking to projects and no better at
    hearing them. The corrective-actions section proposes the standard
    remedies and shows that each one adds speech, then ends on the one action
    that would have worked, placed next to the three-word review that proves
    it is possible. The dates carry the argument, so they are exact.
  tonal_statement: >-
    Cold, exact, controlled anger with no character and no jokes, a deliberate
    break from the wry, character-voiced run of the last three posts (a
    notary's fine print, a woman's Tuesday as film credits, an admiring ode
    to a fighter jet).
---

## Problem statement

On November 17, 2026, at 1:00 p.m. Pacific, OpenJDK published a security advisory and Oracle shipped a patch for CVE-2026-114938, now called Java4Shell. It is a heap corruption in the AVX-512 Base64 decoder, reachable from attacker-controlled input and chainable to remote code execution. Its CVSS 4.0 score is 9.2, CRITICAL.

The disclosing firm said a researcher found it by telling Codex to look at the JIT compiler, intrinsics, widely used APIs and cryptography. It took about an hour to find the bug and about two more hours to get a first working exploit. The token bill was under $200. The write-up's summary of the division of labor is "AI brings the horsepower. Our researchers bring the context."

This analysis is not about the horsepower. It is about the context that was already there.

## Timeline

- **September 9.** An OpenJDK contributor opens pull request #32781: *"8392044: AVX-512 Base64 decoder overwrites output buffer on short padded tail."* The description names the function (`StubGenerator::generate_base64_decodeBlock()`), the code path (`L_finalBit`), the input that triggers it (`"A".repeat(64)+"="`), the effect (the output size goes negative, the stub writes past the logical end of the buffer, the heap is corrupted) and the fix (return to Java early when `length < 4`). The PR has one commit. It is named `fix`.
- **September 9, minutes later.** A bot welcomes the author back by name. A second bot reports that the change "is not yet ready to be integrated," lists an integration blocker ("Failed to retrieve information on issue `8392044`"), applies the `hotspot-compiler` label, and records that two reviews are required.
- **September.** GraalVM, which carries its own copy of this intrinsic, commits *"GR-79579: Avoid AVX-512 Base64 tail overwrite"*. It is the same early exit plus a regression test, which shows that someone working on GraalVM read the bug and understood it.
- **September 9 to November 4.** No human reviews PR #32781.
- **November 4.** The bot posts: "This pull request has been inactive for more than 8 weeks and will be automatically closed." Eight weeks is 56 days. The author closes the PR the same day.
- **November 17.** Advisory, patch, CVE, logo, 9.2.
- **November 18.** Ruby discloses its own memory-safety bugs in Regexp and in string case conversion. One of them, Ruby2Shell, is a one-byte heap overflow: uppercasing `ß` in some legacy encodings writes two bytes ("SS") where the loop had checked room for one, so twenty-one of them overflow a buffer sized at input length plus twenty. The loop has been there since Ruby 2.4.0.
- **November 19.** Someone posts PR #32781 to Hacker News. A user asks in the PR thread why it was closed. At the time of writing nobody has answered. A later comment is hidden by a bot until the commenter accepts the Terms of Use.

From the inactivity notice to the critical advisory was thirteen days.

## Why did a known heap corruption ship in every affected JDK until November 17?

Because the fix that existed on September 9 was never merged.

This is the uncomfortable part of the week, so it is worth stating plainly. The bug was not hidden, and it was not waiting for a smarter tool. It was diagnosed and patched in public, with a proof-of-concept string in the description that matches, down to the run of capital A's, the one used in the disclosure. Ruby's case-conversion overflow says the same thing from another direction: a one-byte miscount sat in a loop for nearly a decade of releases. These bugs are old because nobody was reading closely, not because they were hard to find.

## Why was it never merged?

Because the project required two reviews and the PR received zero.

Review is the step where a report becomes a fix. In practice it is unpaid, unscheduled, and credited to no one. A reviewer who reads PR #32781, checks the arithmetic in `L_finalBit` and approves it produces a one-line merge that carries someone else's name. A reviewer who skips it produces nothing at all, and nothing is exactly what every dashboard records as normal. The PR asked for one specific scarce resource, a HotSpot compiler engineer's attention for perhaps half an hour, and got none.

## Why did nobody review it?

Because the system measures closure, not hearing, and closure can be automated.

The same mechanism turns up at three scales, and the scale doesn't change how it works. At the scale of one PR, a bot counted 56 days of silence and turned that silence into a closing notice. At the scale of a browser, Mark Dominus filed a careful Chrome bug and roughly eighteen months later was told it had been closed as obsolete, one of about 40,000 open reports cleared in a single sweep, with an invitation to file it again. He wrote that up in August 2012, and it read as current when it surfaced this week. At the scale of one engineer, a commenter in that thread describes his manager messaging him that he has "too many open tickets," so he closes tickets that were assigned to him correctly in order to move a number he did not choose. The bot, the bankruptcy and the manager are one phenomenon. Each one turns the cost of an unread report into a status change that looks like work.

None of these closures says the bug is fixed. They all say the queue is shorter. Only the queue length gets measured.

## Why does the system measure closure?

Because listening produces no artifact, and everything else does.

A report is a document. A bot comment is a document. A label, a blocker, a welcome message and an inactivity warning are all documents, all timestamped and searchable. By November 4, PR #32781 had collected a respectable little record of machine speech. Reading a report correctly leaves almost nothing behind. If the reading goes well, the evidence is a merge credited to the author. If it goes badly, there is no evidence at all.

So effort flows to whatever can be counted. Over the past two years the cheapest countable thing in software security has become the finding. Calif's $200 of tokens is real and impressive, and it will be repeated across every JIT, parser and codec in existence. Each of those runs will generate reports, and the people meant to read them are the same unmeasured engineers with the same half hours. The find that made the news this week came with a name, a CVE and a logo. The one from September came with a bot.

## Why are we building only the side that produces artifacts?

Because for decades our tools have been getting better at speaking to projects and no better at hearing them.

Consider the full inventory of software that touched PR #32781. A welcome message, a readiness notice, a label, a review counter, an issue lookup that failed, an inactivity warning, and later a terms-of-use gate that hid a human comment. Each was built by competent people to solve a real problem, and each solved it by adding a message. Not one of them could do what the PR needed, which was to put the description in front of someone who understood `L_finalBit` and get a yes or a no. The industry now has a frontier model that can find the bug in an hour, and it adds to this inventory without changing its nature. It is the most articulate speaker yet, added to a room where nobody was listening.

The bug tracker was meant to be the institution's memory. Configured like this, it behaves more like iron gall ink, the archival ink of Hamlet and the Declaration of Independence: chosen because it lasts, and slowly corroding the paper it was written on. The record exists, every word of PR #32781 is still there, and the process built around it ate the record's meaning. The fix was preserved and also, at the same time, closed.

## Corrective actions

**Proposed: tune the inactivity bot.** Lengthen the window, exempt security-adjacent labels, warn reviewers instead of authors. *Rejected.* Every variant sends a better-addressed message into the same silence. A notice to a reviewer who has no time is a second unread report.

**Proposed: AI triage of the backlog.** Have a model read every stale PR and flag the dangerous ones. This was suggested in good faith in this week's threads. *Rejected as stated.* The model would read PR #32781 correctly, and then it would post a comment. That comment would be the eighth automated voice in a thread with zero human ones. Triage that ends in a message is still speaking. It only counts as hearing if a person is obligated to act on the flag, and that obligation is the thing that was missing on September 9.

**Proposed: pay for reports.** Bounties and credit for findings. *Rejected.* This funds the abundant side. The September report was free and complete. What it lacked was a reader, and nobody pays bounties to readers.

**Proposed: better tooling generally.** *Rejected.* In the thread about Lastbook, an offline app that packages a 388 GB survival library and a local AI model under the slogan "everything you need to survive and rebuild society," the top reply said that rebuilding takes more than technology: caring for others, not being selfish, trust. Then it added that the lack of those is why things collapse in the first place. That reply applies here. No tool fixes this, because the missing ingredient is people choosing to spend attention on someone else's work.

**Adopted:** A person reads it.

That is the entire remediation, and there is a working example from the same week. A man who was tired of ads in his garage-door app replaced it with an open-source board, wrote a small pull request for the project, and the maintainer merged it with three words: "Simple and useful." No bot was needed and no bounty was paid. Nothing in that exchange would show up on a dashboard. It took one person who read the diff and said yes.

PR #32781 needed exactly that. It was simple and useful. It sat in public for 56 days, and the only response it got was from a bot announcing it would be closed.
