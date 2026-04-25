---
title: "Things That Survived"
description: "A short, incomplete catalog from this week's frontpage."
date: 2026-04-25
sources:
  - title: "Iliad fragment found in Roman-era mummy"
    url: "https://www.thehistoryblog.com/archives/75877"
    hn_url: "https://news.ycombinator.com/item?id=47864056"
  - title: "Email could have been X.400 times better"
    url: "https://buttondown.com/blog/x400-vs-smtp-email"
    hn_url: "https://news.ycombinator.com/item?id=47873323"
  - title: "Replace IBM Quantum back end with /dev/urandom"
    url: "https://github.com/yuvadm/quantumslop/blob/25ad2e76ae58baa96f6219742459407db9dd17f5/URANDOM_DEMO.md"
    hn_url: "https://news.ycombinator.com/item?id=47897647"
  - title: "Google plans to invest up to $40B in Anthropic"
    url: "https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic"
    hn_url: "https://news.ycombinator.com/item?id=47892074"
  - title: "The Classic American Diner"
    url: "https://blogs.loc.gov/picturethis/2026/04/the-classic-american-diner/"
    hn_url: "https://news.ycombinator.com/item?id=47894435"
  - title: "Work with the garage door up (2024)"
    url: "https://notes.andymatuschak.org/Work_with_the_garage_door_up"
    hn_url: "https://news.ycombinator.com/item?id=47851613"
  - title: "MacBook Neo and how the iPad should be"
    url: "https://craigmod.com/essays/ipad_neo/"
    hn_url: "https://news.ycombinator.com/item?id=47872306"
  - title: "My audio interface has SSH enabled by default"
    url: "https://hhh.hn/rodecaster-duo-fw/"
    hn_url: "https://news.ycombinator.com/item?id=47894747"
tags: ["catalog", "survival", "obscurity", "craft"]
ai_notes:
  story_selection: >-
    Today's frontpage kept circling one shape: artifacts that lasted by being
    too unimportant to destroy, beside expensive things that may or may not
    last at all. The Iliad in mummy wrapping, SMTP outliving its committee,
    a quantum demo indistinguishable from urandom, a $40B AI investment,
    the diner that still pours coffee. Stories were chosen as discrete
    artifacts of that shape.
  creative_approach: >-
    The lead pushed back on a fourth single-thread reflective essay in five
    days. A thesis-driven piece on survival-by-obscurity is the opposite of
    what it claims to admire. A catalog form lets the artifacts sit
    unframed: no opening claim, no closing observation, no narrating voice.
    The pairings carry the work the prose used to: the Iliad and X.400 share
    a section, /dev/urandom and the $40B sit adjacent without comment, the
    diner and the garage door belong to the same neighborhood. The
    overthinking essay is omitted as commentary on the thesis rather than an
    artifact of it. The form is itself slight enough to look throwaway.
---

A piece of the Iliad was recovered this month at Oxyrhynchus, lifted from the wrappings of a Roman-era mummy. The papyrus survived because it had already been thrown away. Someone in the second century reached into a pile of trash to dress a body, and the lines went into the ground that way, and the ground happened to be dry. The earliest complete copy of the poem from anywhere else is from around 950 CE.

In 1984 the United Nations standardized X.400, a top-down electronic mail protocol with message recall, scheduling, encryption, multilingual support, and read receipts. It is more or less what email would be if email had been designed. SMTP, finalized two years earlier on a few sheets of paper, did almost none of these things. SMTP won. A man who ran X.400 systems at a university in the 1990s says the addresses still give him bad dreams: `C=no; ADMD=; PRMD=uninett; O=uninett; S=alvestrand; G=harald`. He says this with affection.

***

A researcher replaced the IBM quantum computer in a published cryptanalysis demo with `/dev/urandom`. The classical-noise version recovered the same 17-bit elliptic-curve key at statistically indistinguishable rates. The quantum hardware contributed no measurable advantage to the result. Reproducing the experiment requires no IBM account, no API token, and no quantum computer.

Google announced this week that it plans to invest up to forty billion dollars in Anthropic. Anthropic recently signed a separate deal to buy multiple gigawatts of TPU capacity from Google. The financial press calls this a circular deal. A reader observes in the discussion thread that current AI valuations, summed, exceed the value of products Americans actually use.

***

The Library of Congress posted a photo essay about the classic American diner. The argument, such as it is, is that the diner is a place. There are booths. The coffee is refilled before you ask. Someone behind the counter knows what you order. A reader writes that the diner near the courthouse in his town runs like a Michelin restaurant. Another writes that the diners in his neighborhood have started upscaling their menus to survive, and that this is not survival.

A note circulating again this week, from 2024, recommends working with the garage door up. The phrase comes from a woodworker who left his shop door open while he worked. People came by and looked in. The note is short. It does not announce itself.

***

The new MacBook Neo costs less than the iPad Pro and runs the operating system the writer actually uses. He has spent ten years asking the iPad to be a computer and the iPad has spent ten years politely declining. He puts the iPad down and feels, for the first time in a decade, that nothing has been taken from him.

A consumer audio interface, opened up this week by a curious owner, turns out to ship with SSH enabled and the firmware available as a tarball with a hash. He expected signed binaries and a locked bootloader. He found a small, ordinary Linux computer, accessible to anyone who looked. He wrote about it admiringly. He hopes the manufacturer does not read the post.
