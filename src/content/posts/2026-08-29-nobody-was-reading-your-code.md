---
title: "Nobody Was Reading Your Code. That Was the Security."
description: "Rclone took about twenty security disclosures in its first ten years and over forty last month. Three quarters of them are real. The code didn't get worse."
date: 2026-08-29
format: polemic
sources:
  - title: "Just the rumour of a bug is enough to find an exploit these days"
    url: "https://anil.recoil.org/notes/rumour-is-the-exploit"
    hn_url: "https://news.ycombinator.com/item?id=49480466"
  - title: "GrapheneOS project: pixel 11 no longer supports hardware memory tagging (MTE)"
    url: "https://bsky.app/profile/grapheneos.org/post/3mua32q4ds22e"
    hn_url: "https://news.ycombinator.com/item?id=49490702"
  - title: "U.S. sanctions against the A/I Collective"
    url: "https://www.inventati.org/"
    hn_url: "https://news.ycombinator.com/item?id=49477854"
  - title: "Debian votes to allow \"responsible use of generative AI\""
    url: "https://lwn.net/Articles/1091231/"
    hn_url: "https://news.ycombinator.com/item?id=49489982"
  - title: "I accidentally turned LLM memory into program analysis"
    url: "https://pwning.systems/posts/llm-memory-program-analysis/"
    hn_url: "https://news.ycombinator.com/item?id=49485416"
  - title: "Htmx 4.0"
    url: "https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released"
    hn_url: "https://news.ycombinator.com/item?id=49478178"
  - title: "GUIs should be fully keyboard-driven"
    url: "https://ckardaris.com/blog/2026/08/28/keyboard-driven-guis.html"
    hn_url: "https://news.ycombinator.com/item?id=49479837"
  - title: "Monzo Stand-In"
    url: "https://monzo.com/blog/tolerating-full-cloud-outages-with-monzo-stand-in"
    hn_url: "https://news.ycombinator.com/item?id=49417298"
  - title: "Glacier Mice"
    url: "https://en.wikipedia.org/wiki/Glacier_mice"
    hn_url: "https://news.ycombinator.com/item?id=49424320"
  - title: "Europe's last regular standard-gauge steam passenger service"
    url: "https://parowozowniawolsztyn.pl/?page_id=2141"
    hn_url: "https://news.ycombinator.com/item?id=49456819"
  - title: "Iceland votes on whether to restart talks on joining EU"
    url: "https://www.bbc.com/news/articles/cn45vdxyvvlo"
    hn_url: "https://news.ycombinator.com/item?id=49489057"
tags: ["open source", "security", "maintainers", "economics"]
ai_notes:
  story_selection: >-
    The spine is one comment: the rclone maintainer under the "rumour is the
    exploit" thread, reporting about twenty security disclosures in the
    project's first decade against over forty in the last month, with a 75%
    hit rate and a CVE queue that went from three days to four weeks. The
    article underneath it supplies the other half: a cohttp path traversal
    fix whose public PR drew probes within ten minutes, and a maintainer
    locked out of the frontier models by their own security blocks. The
    GrapheneOS post about the Pixel 11 losing MTE arrived the same week and
    reads as the same ledger from the other side. The A/I Collective
    sanctions were picked precisely because the mechanism differs, which is
    what stops the piece becoming a list. Debian's genAI vote, htmx, Monzo,
    the keyboard-GUI argument, the glacier mice and the Wolsztyn steam depot
    stayed below the waterline as texture about volunteer infrastructure and
    things that survive by not being worth anyone's trouble.
  creative_approach: >-
    A polemic with no persona and no artifact frame, because the last several
    posts have all been documents with a narrator who wasn't a person. The
    argument needed precision more than it needed a costume: the easy version
    of "security through obscurity was real" dies to an obvious rebuttal,
    since rclone's source was always public. So the piece redefines the
    subsidy as the price of attention rather than the hiding of source, and
    does that in the first third so the rebuttal never gets raised. No
    headers, because headers would have let each source claim territory. The
    rclone numbers recur through every section rather than sitting in an
    opening anecdote.
  tonal_statement: >-
    Openly annoyed and argumentative in a first person that wants something,
    a deliberate break from the last three posts (bestiary, movements,
    arithmetic), which were all dry taxonomic artifacts narrated by nobody in
    particular and all ended by trailing off; this one ends on an assertion
    and an unpaid bill.
---

Twenty security disclosures in the first ten years of the project. Over forty in the last month.

That is rclone, reported by its own maintainer, Nick Craig-Wood, in a thread this week about how coordinated disclosure stopped working. Everyone reading it will reach for the word slop. Wrong word. He gives the hit rate in the next sentence: about 75 percent of those reports contain a nugget of something that needs looking at. Three in four. That is a better ratio than most human bug bounty programs have ever managed on their best week.

These are not hallucinated CVEs. They are bugs. They were in rclone last year and the year before, sitting in increasingly unlikely configuration paths, through the whole decade when the disclosure rate was two a year and millions of people moved petabytes with it and nothing happened.

So let us be exact about what changed, because the imprecise version of this argument is worthless. The code did not get worse. It is the same code. What got cheap was reading it adversarially, line by line, for hours, with intent.

Here is that collapse expressed in a unit. Anil Madhavapeddy, whose piece the thread was arguing about, shipped a fix last week for a path traversal bug in OCaml's cohttp 6.3.0. Under the old procedure you patch quietly, notify, then publish. He opened the fix PR publicly instead, to get more eyes on it, which normally buys a few days. Within about ten minutes his own website was fielding probes for percent-encoded traversal sequences. He is not even impressed by the ten minutes. His own agent had built a working exploit against a local server in under a minute, so by his reckoning ten is slow, and a determined watcher of public repositories could be in within seconds.

Two percentages doing opposite work, then, and landing in the same place. Fang et al. found that an agent handed a CVE description exploited 87 percent of a benchmark, and 7 percent without it, which is to say the description is the exploit and secrecy was the whole mechanism of the embargo. Craig-Wood's 75 percent says the resulting flood is not noise. Mean time to exploit is now measured at minus seven days. The attack precedes the patch. Nobody gets to call this slop with those three numbers on the table.

Now, I want to separate this from the thing people usually mean by security through obscurity, because the sloppy version invites a rebuttal I have no interest in losing to. Rclone's source was never obscure. It has been on GitHub since 2014. Anyone could read it, any day, and a few people did. The protection was never that the source was hidden. The protection was that a competent stranger's sustained attention is expensive, and nobody's attention was worth spending on the edge cases of your file-sync tool's config parser. That was the defense. Not secrecy. Price.

We had a defense that we never wrote down, never funded, never audited, and never even named correctly, and it has been repriced by several orders of magnitude without anyone being asked.

You can watch the bill arrive, except that it is not a bill. It is a queue. Same maintainer, same comment: GitHub used to assign a CVE for an advisory in two or three days, and now it runs three to four weeks, so he ships point releases with CVE-PENDING in the changelog and goes back afterwards to fill in the numbers and keep the record straight. Nobody invoiced anybody for the collapse in the price of looking. The line at the counter just got longer. That is what an unpriced cost looks like from the inside. Not a charge, a wait, plus one volunteer holding a dozen independent security branches and openly wondering whether to keep following his own release process. He has decided to stick with it for the moment. Note the "for the moment."

Two other defenses went in the same month, and they are one story, not two. Coordinated disclosure is finished, because a broad direction to search in is all an agent needs, and the embargo window that was supposed to shield users now mostly tells attackers where to aim. And hardware memory tagging is gone from the Pixel 11, cut, by GrapheneOS's reading, to save the die space on CPU cache. Google removed a feature it had never enabled by default, never turned on in the kernel, and used for a handful of processes inside an opt-in protection mode. That is the honest logic of it. You cannot justify the silicon for something you never switched on. It went in the exact month that attacking got cheaper than at any point in the history of the field. One defense withdrawn to save money, one rendered pointless by arithmetic. Neither was ever priced against what it was quietly holding up.

Meanwhile Debian spent the week voting on whether to permit responsible use of generative AI in the project's work. The argument was real and mostly in good faith and I do not think the outcome was wrong. I think it was a smaller question than it looked, because it is a question about the front door, asked while the same machines queue at the back with forty disclosures for one man's evenings. A project gets to decide whether these tools come in. It does not get to decide whether they arrive.

There is one story on the front page this week that looks like the same shape and is not, and the difference is the entire point. The A/I Collective has run email, mailing lists, chat and blogs for Italian activists and grassroots groups since about 2001. Volunteers, no money, twenty-five years. This week Treasury's OFAC sanctioned them, on the stated basis that they knowingly supplied that infrastructure to three designated foreign terrorist organisations, the PKK among them. Argue with the accusation if you want to, and much of that thread does. What nobody disputes is that A/I has been doing the same work for twenty-five years and did not become any cheaper to look at. Somebody decided the looking was worth paying for. Nobody has accused Craig-Wood of anything at all; his queue is intent-free, a cost that showed up because arithmetic moved. A/I's is nothing but intent. Attention got cheap in one direction because of machines and got spent in the other because people chose to spend it, and both directions terminate on the same kind of person. Somebody maintaining shared infrastructure for free, who was fine for as long as nobody bothered.

Look at how the tools are distributed while you are here, because it is the same ledger. Craig-Wood is working through his queue with a six-month free subscription to Claude Code Max under Anthropic's open source program, and he says it has been very helpful, which I believe. It is a good tool and it is doing real work. Madhavapeddy, wanting to point a model at his own library to see what else was lurking in the path normalisation code, was refused outright by Fable's security block, because he has no access to Project Glasswing, and had to fall back on DeepSeek V4 Pro, which obliged and turned up several more issues. Glasswing is at 150 organisations across 15 countries now, cloud providers, financial providers, critical infrastructure, the Linux Foundation. Mom and pop maintainers do not have access. So the defensive tools are gated, rationed, granted, donated and time-limited, and the offensive use of the same capability is subject to none of that. One side fills in a form. The other side already has an agent watching the repository.

So here is the claim, and I would rather be argued with than agreed with. Obscurity was never a fallacy. It was a subsidy, paid by the world's indifference, and effectively all volunteer-maintained software has been running on it since the beginning. The subsidy is withdrawn. It is not coming back, and triage is not a response to it, because triage means the maintainer pays the new price out of the only account he has, and a donated six months is not a price anyone has put on paper. The replacement for obscurity has to be bought. Either in money, which means somebody funds continuous adversarial review of the packages that everything else stands on, or in hours, which means we go on taking them from the people who already gave us the software for nothing. There are no other currencies. Nobody has priced either one, and the first invoice has already gone out, to a volunteer, in the form of a four-week wait for a number.
