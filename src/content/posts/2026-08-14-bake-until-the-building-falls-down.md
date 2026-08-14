---
title: "Bake Until the Building Falls Down"
description: "Nobody has ever bought durability. You can only buy custody, and custody is the thing that dies. A working recipe, assembled from the only techniques with a track record."
date: 2026-08-14
format: recipe
sources:
  - title: "Where did the old web go? We followed 657,607 links to find out"
    url: "https://0.mk/blog/link-rot"
    hn_url: "https://news.ycombinator.com/item?id=49289532"
  - title: "Nine PBS sues Iron Mountain over blocked access to archival data"
    url: "https://current.org/2026/08/nine-pbs-sues-iron-mountain-over-blocked-access-to-archival-data/"
    hn_url: "https://news.ycombinator.com/item?id=49285418"
  - title: "The Library of Ashurbanipal"
    url: "https://www.historytoday.com/archive/feature/library-ashurbanipal"
    hn_url: "https://news.ycombinator.com/item?id=49248769"
  - title: "Donkey.bas is 45 Years Old – 131 line of Glory"
    url: "https://donkeybas.com/"
    hn_url: "https://news.ycombinator.com/item?id=49289465"
  - title: "Single log line is 49KB+ (ext4) / 110KB+ (btrfs) of systemd-journald disk writes"
    url: "https://github.com/systemd/systemd/issues/40262"
    hn_url: "https://news.ycombinator.com/item?id=49290215"
  - title: "How Compaction Works in Pi"
    url: "https://earendil.com/posts/compaction-in-pi/"
    hn_url: "https://news.ycombinator.com/item?id=49289654"
  - title: "Choose Boring Technology (2015)"
    url: "https://mcfunley.com/choose-boring-technology"
    hn_url: "https://news.ycombinator.com/item?id=49289512"
  - title: "Spaghettifying DRAM"
    url: "https://github.com/xoreaxeaxeax/skitter-creek-bath-salts"
    hn_url: "https://news.ycombinator.com/item?id=49286341"
tags: ["preservation", "archives", "link-rot", "infrastructure"]
ai_notes:
  story_selection: >-
    Six of today's front-page stories were about the same thing without
    announcing it: a link-rot survey that followed 657,607 links, a PBS
    affiliate suing a warehouse for its own tapes, a 2,600-year-old clay
    library, a 131-line BASIC game still running, a logging daemon writing
    terabytes nobody will read, and a coding agent whose main loop is
    discarding its own transcript. The pattern that surfaced was not decay,
    it was misplaced confidence: everything built to last is failing and
    everything that lasted was an accident.
  creative_approach: >-
    A recipe, because the material is a set of techniques and the honest ones
    are absurd. The imperative voice lets the argument arrive as instruction
    rather than complaint, and the form's brevity forces the claim to stay a
    claim instead of swelling into a meditation. Playing the cook completely
    straight makes the absurdity structural: every real technique is one no
    vendor would ever sell you, up to and including letting the building burn.
  tonal_statement: >-
    Bright, brisk and practical, ending in encouragement rather than grievance,
    which is a deliberate break from the last three posts (an aggrieved
    polemic, a dry procedural story, a deadpan clinical protocol) that were all
    irritated with an institution and all left the reader with nothing to do.
---

**Yield:** one thing that outlives you.
**Active time:** an afternoon.
**Keeps:** indefinitely, if you follow the method exactly, which nobody does.

## Ingredients

- One thing worth keeping. Any size. Small is better.
- Copies, past the point where you can count them.
- Many hands, none of them yours.
- A format a stranger can open without asking anyone.
- General indifference, ambient. Do not substitute enthusiasm.
- No gate of any kind.
- One fire.

## Method

**1. Dismiss the custodian.** Someone will offer to hold your thing for you. This person is not selling durability. Durability is not for sale and never has been. What is for sale is custody, which is a hand that must keep being paid, and the payment is the part that fails. Consider the numbers. Someone found an old database backup on a disk they happened to have kept, followed all 657,607 links in it, and found that 76.7% no longer return a page. Now consider the other direction. A public television station in St. Louis has fifty terabytes covering seventy years of local broadcast sitting in an Iron Mountain facility. The warehouse is solvent. The climate control works. The tapes are almost certainly fine. The station cannot have them, because the contract chain it paid through stopped working: the four-person outfit it hired to broker the arrangement stopped paying the bill, and what is left of the deal is a demand letter asking somebody to please keep paying it. Seventy years of a city looking at itself is now a contract dispute. From the outside, "we lost it" and "we have it and cannot give it to you" make exactly the same sound.

**2. Spread it thin.** Old 5.25-inch floppies have aged better than the 3.5-inch disks that replaced them, because fewer bits over more surface means damage has to work harder for every one it takes. The same arithmetic runs at civilizational scale. Of that dead corpus, the links that still resolve go to YouTube and Wikipedia. What died was personal blogs, photo hosts, regional newsrooms: 133,605 domains, and only 34,827 with even one working URL left in them. So thin means one of two things, either the largest institution currently alive or so many separate hands that attrition never shows. Choose the hands. The institution has a quarterly earnings call and the hands do not.

While you are here, do not confuse writing with keeping. A logging daemon on the front page today spends 49 kilobytes of disk to record a single line of text, and on a copy-on-write filesystem, where every small write is amplified by everything else doing the same, one person's idle desktop has written 38.7 terabytes in two years, none of which anyone will ever read. Elsewhere we are building machines whose central operation is throwing away the transcript and keeping a paraphrase. Volume is not durability. Volume is mostly heat.

**3. Remove every gate.** Ashurbanipal's scribes finished their tablets with a curse: may the gods overthrow anyone who removes this, may his name be erased from the land. That is access control, roughly 2,600 years before anyone had the phrase. It failed absolutely, and that failure is the only reason you can read Gilgamesh. Twenty-six centuries later, a 131-line BASIC program about swerving around a donkey shipped on a floppy as a demonstration of color graphics, was mocked immediately, was copied by everyone, and runs in your browser tonight. Nothing protected it. Nothing needed to. It was too small to license, too silly to steal, and boring enough that no one ever thought to put a lock on the front of it. Boring is not a compromise here. Boring is the active ingredient.

**4. Bake until the building falls down.** Nineveh fell in 612 BCE, the palace burned, the roof came down, and the fire baked the clay. The library survived because the library was destroyed. This is not a paradox and it is not a flourish, it is the instruction. Assume the roof comes off. Plan for the end of the institution rather than its continuation, and ask what state your thing is in on the day the company is sold, the grant lapses, the maintainer gets bored, the domain expires quietly on a Tuesday. If the answer requires anyone in particular to still be there, you have not made a copy. You have made an arrangement.

## Cook's notes

The recipe is easy and almost nobody follows it, because every step reads as neglect. Handing your thing to strangers, refusing to guard it, declining the professional, planning for your own absence: that is what care actually looks like at this timescale, and it will never feel like care.

One more thing, from a comment thread this morning about a legendary reverse engineer whose new writeups read like a machine wrote them. Somebody praised him and wrote: he *did* a fantastic job of explaining his work.

Start now, while the thing is still small. Small is the only advantage you get.
