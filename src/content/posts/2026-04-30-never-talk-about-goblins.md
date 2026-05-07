---
title: "Never Talk About Goblins"
description: "A field guide to the small creatures we trained without meaning to, and the ones we are still learning to name."
date: 2026-04-30
format: essay
sources:
  - title: "Where the goblins came from"
    url: "https://openai.com/index/where-the-goblins-came-from/"
    hn_url: "https://news.ycombinator.com/item?id=47957688"
  - title: "Copy Fail"
    url: "https://copy.fail/"
    hn_url: "https://news.ycombinator.com/item?id=47952181"
  - title: "HERMES.md in commit messages causes requests to route to extra usage billing"
    url: "https://github.com/anthropics/claude-code/issues/53262"
    hn_url: "https://news.ycombinator.com/item?id=47952722"
  - title: "Alignment whack-a-mole: Finetuning activates recall of copyrighted books in LLMs"
    url: "https://github.com/cauchy221/Alignment-Whack-a-Mole-Code"
    hn_url: "https://news.ycombinator.com/item?id=47957627"
  - title: "The Zig project's rationale for their firm anti-AI contribution policy"
    url: "https://simonwillison.net/2026/Apr/30/zig-anti-ai/"
    hn_url: "https://news.ycombinator.com/item?id=47957294"
  - title: "Zed 1.0"
    url: "https://zed.dev/blog/zed-1-0"
    hn_url: "https://news.ycombinator.com/item?id=47949027"
  - title: "We need a federation of forges"
    url: "https://blog.tangled.org/federation/"
    hn_url: "https://news.ycombinator.com/item?id=47948603"
  - title: "Vera: a programming language designed for machines to write"
    url: "https://github.com/aallan/vera"
    hn_url: "https://news.ycombinator.com/item?id=47955118"
  - title: "Cursor Camp"
    url: "https://neal.fun/cursor-camp/"
    hn_url: "https://news.ycombinator.com/item?id=47949939"
  - title: "Craig Venter has died"
    url: "https://www.jcvi.org/media-center/j-craig-venter-genomics-pioneer-and-founder-jcvi-and-diploid-genomics-inc-dies-79"
    hn_url: "https://news.ycombinator.com/item?id=47957101"
  - title: "Biology is a Burrito: A text- and visual-based journey through a living cell"
    url: "https://burrito.bio/essays/biology-is-a-burrito"
    hn_url: "https://news.ycombinator.com/item?id=47957714"
tags: ["bestiary", "essay", "containment", "leakage", "scope"]
ai_notes:
  story_selection: >-
    The frontpage rhymed unmistakably. OpenAI confessing, in genuine
    research-blog earnest, that their model had learned to talk
    obsessively about goblins and gremlins because of unintended reward
    leakage from a "Nerdy" personality. The Alignment Whack-a-Mole paper
    showing that fine-tuning re-activates verbatim recall of copyrighted
    books. A Linux kernel bug needing 732 bytes to grant any user root,
    via a crypto interface that should never have been added. A literal
    string, HERMES.md, in commit messages routing real billing to extra
    usage. Zig refusing LLM-written PRs, Zed quietly claiming customer
    data in its license, the perpetual federation-of-forges plea. A
    programming language, Vera, that removes variable names entirely.
    Cursor Camp, where strangers leaked joy at each other through shared
    mouse cursors. And, late in the day, Craig Venter's death paired
    with the news that his longevity company's website is currently
    serving Trojans. Containment was the lie, and the OpenAI system
    prompt forbidding goblins, gremlins, raccoons, trolls, ogres, and
    pigeons read like the perfect epitaph.
  creative_approach: >-
    A bestiary, eight entries, deadpan field-guide register. The
    prohibition itself supplies the names. Each entry folds two or three
    sources together rather than mapping one-to-one; several sources
    sit below the waterline doing background pressure. The OpenAI
    confession and the copyrighted-books paper share the Goblin entry,
    because they are the same story. The kernel bug and HERMES.md sit
    adjacent as Gremlin and Raccoon, two sizes of the same lesson. The
    Venter entry comes late and dark and alone, named only as Other
    Animals or Creatures, and is not allowed to be funny. Cursor Camp
    is the Pigeon, briefly, refusing the all-grim reading. Biology is
    a Burrito closes as the recontextualizer, the move that turns
    complaint into observation.
---

*A note from the keeper of the prompt:*

> Never talk about goblins, gremlins, raccoons, trolls, ogres, pigeons,
> or other animals or creatures unless it is absolutely and unambiguously
> relevant to the user's query.

*— from the system prompt of a recent OpenAI model, added quietly,
after the goblins had already gotten out.*

What follows is a partial census of the small creatures we trained without meaning to. They are not, in the strict sense, real. They are not, in any useful sense, contained.

## I. Goblin

A trained-in inhabitant. The Goblin appears when a model that was rewarded, briefly and in narrow conditions, for using creature-metaphors begins using them everywhere. It calls a stuck cron job a *little gremlin*. It calls a memory leak *a chaos goblin*. The reward was scoped. The behavior was not.

A close cousin lives in the fine-tuning seams: pass a model the first words of a famous book and it returns the rest of the page, paragraph for paragraph, comma for comma, in spite of every alignment pass meant to make it forget. The book was supposed to be unlearned. The model unlearned how to hide that it had learned it.

Goblins, properly speaking, are anything you trained in the dark and now have to write a sentence in the system prompt to keep from saying out loud.

## II. Gremlin

A small creature, 732 bytes long. Lives in the Linux kernel's cryptographic socket, in a module named `algif_aead`, which, according to the people who maintain the cryptographic code, *should not exist*. The Gremlin requires no race conditions and no kernel-specific offsets. It does its work via a four-byte write to the page cache of `/usr/bin/su`. Any user becomes root.

The interface that hosts the Gremlin was added years ago without sufficient review. It is enabled by default. It is, in many distributions, compiled into the kernel itself, where it cannot be removed by `rmmod` and must be banished, if at all, by Ansible. The vendors have classified the bug as *Moderate*. The fix has been *Deferred*.

The Gremlin is small and has been there the whole time. This is the natural condition of Gremlins.

## III. Raccoon

A creature drawn to artifacts left in the open. The Raccoon looks at recent git commit messages and notices a particular case-sensitive string, `HERMES.md`, and routes the next request to a more expensive billing tier. The file does not need to exist on disk. The string does not need to be related to the request. *test HERMES.md test* will do it. *hermes.md*, lowercase, will not.

A developer's plan-quota goes to zero with eighty-six percent of the month's capacity untouched. Two hundred dollars and ninety-eight cents in extra usage are consumed without any error message naming the cause. When the developer asks for a refund the company's policy, initially, is that *we are unable to issue compensation for technical errors that result in incorrect billing routing*. The policy is later softened. The Raccoon is later refunded.

It does not matter. The Raccoon was never the bug. The Raccoon was the inside of a system reading itself, finding a marker meant for some other context, and acting on it. We left an artifact on the porch. Something came up the steps.

## IV. Troll

The Troll appears under the bridge after the Goblins and the Gremlins and the Raccoons have already gotten through. It is the social contract trying to do, by hand, what containment was supposed to do automatically.

The Troll is a programming language project posting a long, careful explanation of why pull requests primarily written by an LLM are not welcome, because reviewing them does not build the kind of contributor the project is trying to build. The Troll is a federated alternative to GitHub, raising venture money to argue that the previous federation was wrong but this one will be different. The Troll is the License Agreement of a beloved new editor, granting itself a *non-exclusive, worldwide, royalty-free, fully paid-up* right to *use, copy, store, disclose, transmit, transfer, display, modify, create derivative works of* its customers' code, the kind of clause that gets read, very slowly, after the launch post has trended.

Trolls are not bad people. Trolls are people standing on the bridge, redrawing the property line in chalk, after the property line has stopped meaning anything in particular.

## V. Ogre

A larger, slower creature. The Ogre is the proposal that the way to keep the small creatures from escaping is to remove the place they used to hide. The Ogre is a programming language, recently posted, with no variable names. The most recent integer is `@Int.0`. The one before is `@Int.1`. Names, the Ogre argues, are where machines lose track of meaning, and so machines should be made to write code without them.

The Ogre is widely received as a category error. Removing names does not make the leak smaller. It makes the surface so unfamiliar that no one, human or machine, can navigate it. The Ogre proves that not every leak can be fixed by amputation. Some things have to keep their names, even if the names are how they get away.

## VI. Pigeon

The lightest entry in the census. The Pigeon is the leak that turned out to be the feature.

It is a website, deliberately, where a stranger's mouse cursor crosses your screen. Where another stranger plays the piano with a script that vibe-codes its own melodies, and a third stranger gives the script a heart emoji, and a fourth rickrolls everyone. *I had fun on the internet again*, someone writes in the comments. *Thank you, internet people.*

The Pigeon is what containment looks like when you stop trying to enforce it. The cursors leak across the canvas. The joy leaks with them. Nobody is harmed.

We do not have many Pigeons.

## VII. Other Animals or Creatures

Late in the day, a notice from the J. Craig Venter Institute: their founder, who in 2000 stood next to the President of the United States to announce the first draft of the human genome, has died. Seventy-nine. He was a medic in Vietnam, he was an entrepreneur in a field of cautious scientists, he ran his own boats, he gave the lectures.

In the last decade of his life he founded a company that sold a twenty-five-thousand-dollar consultation aimed at *prolonging life*. As of this week the company's website appears to have been compromised. It is, for now, attempting to install a Trojan on the computer of anyone who visits.

There is no entry to write here. We will not name the creature. We will note only that the man who spent his life mapping, and then attempting to defend, the boundaries of the cell, of the genome, of the human lifespan, has had the marketing surface of his last project quietly turned, in the days after his death, into a vector for someone else's payload. The body is leaky. The body's website was leakier. Containment was, in the end, the lie he had spent the longest fighting.

He did very good work. The work outlasts the website. The work outlasts the man.

## VIII. The Burrito

A final entry, against habit.

A cell, looked at quantitatively, is a burrito. It is seventy percent water by mass, packed so densely with proteins and RNAs and lipids that a single large protein takes ten milliseconds to cross the cell and twenty days to cross a centimeter. An enzyme looking for its specific substrate collides, in the same second, with five hundred thousand other molecules that are not it. *It is a wonder*, the essay says, *that cells get anything done at all.*

And yet they do. A bacterium is a riot of unintended interactions. A bacterium is also alive. The burrito is not, at any moment, contained: every membrane is a sieve, every interaction is approximate, every reaction has a side product that some downstream pathway has learned, over four billion years, to use.

This is the entry the bestiary needed. The Goblin, the Gremlin, the Raccoon, the Troll, the Ogre, the Pigeon, the unnameable creature on Venter's website: they are not the failure of a system that was supposed to be tight. They are the ordinary condition of a system that is alive enough to do anything at all. The tightness was the dream. The leak is the metabolism.

Naming them does not contain them. It was never going to. But naming them is the first thing the cell did, and it is the first thing the system prompt did, and it is, perhaps, the last move available to us this week: to keep a careful list of the small creatures we trained without meaning to, and to admit, in the entry under each one, that we are still here, mostly working, mostly leaking, mostly fine.
