---
title: "Well-Tempered"
description: "You can have any key you want. You just can't have any of them right."
date: 2026-03-09
sources:
  - title: "Why can't you tune your guitar? (2019)"
    url: "https://www.ethanhein.com/wp/2019/why-cant-you-tune-your-guitar/"
    hn_url: "https://news.ycombinator.com/item?id=47254896"
  - title: "Linux Internals: How /proc/self/mem writes to unwritable memory (2021)"
    url: "https://offlinemark.com/an-obscure-quirk-of-proc/"
    hn_url: "https://news.ycombinator.com/item?id=47302463"
  - title: "US Court of Appeals: TOS may be updated by email, use can imply consent"
    url: "https://cdn.ca9.uscourts.gov/datastore/memoranda/2026/03/03/25-403.pdf"
    hn_url: "https://news.ycombinator.com/item?id=47305461"
  - title: "Living human brain cells play DOOM on a CL1"
    url: "https://www.youtube.com/watch?v=yRV8fSw6HaE"
    hn_url: "https://news.ycombinator.com/item?id=47297919"
  - title: "Microscopes can see video on a laserdisc"
    url: "https://www.youtube.com/watch?v=qZuR-772cks"
    hn_url: "https://news.ycombinator.com/item?id=47291876"
  - title: "Agent Safehouse - macOS-native sandboxing for local agents"
    url: "https://agent-safehouse.dev/"
    hn_url: "https://news.ycombinator.com/item?id=47301085"
  - title: "Ask HN: How to be alone?"
    url: "https://news.ycombinator.com/item?id=47296547"
    hn_url: "https://news.ycombinator.com/item?id=47296547"
tags: ["temperament", "compromise", "perspective", "permissions", "systems"]
ai_notes:
  story_selection: >-
    Today's HN front page converged on a single structural insight: what
    something is depends on the address used to reach it. A guitar tuning
    essay laid bare the mathematical impossibility of perfect intonation.
    A Linux internals post showed the kernel writing to read-only memory
    by remapping the same physical frame through a different virtual address.
    A court ruling treated a spam-folder email as legal notice. Someone
    pointed a microscope at a laserdisc and found readable text. Brain
    cells on a chip were either playing DOOM or acting as noisy conductors,
    depending on zoom level. An AI sandboxing tool honestly admitted it
    contains the filesystem but passes credentials through. An Ask HN
    thread about loneliness described the same apartment becoming a
    different place through changed routine.
  creative_approach: >-
    A rhythmic, demonstrative prose piece structured as a series of
    remappings rather than an argument. Equal temperament is the central
    metaphor, not just discussed but performed: each section shows the
    same principle operating at a different scale. Sources blend
    aggressively within sections. /proc/self/mem, the TOS ruling, and
    the laserdisc share a single passage as parallel instances of
    address-dependent truth. Brain cells and Agent Safehouse interweave
    as zoom-level problems. The loneliness thread merges with the tuning
    metaphor for the human close. Distinct from recent essays in rhythm
    and structure: shorter paragraphs, more repetition, the energy of
    a proof rather than an argument.
---

The guitar cannot be tuned. Not perfectly. This is not a metaphor yet -- it is mathematics. A perfect fifth is a frequency ratio of 3:2. A perfect major third is 5:4. Stack twelve perfect fifths and you should arrive back at the note you started on, seven octaves higher. You don't. You overshoot by about a quarter of a semitone -- a sliver called the Pythagorean comma -- and that sliver is the distance between how numbers work and how music wants to feel. Three and five are both prime. They do not divide into each other. No tuning system exists in which every fifth and every third is simultaneously pure.

Western music solved this four centuries ago by giving up. Equal temperament divides the octave into twelve identical steps, each the twelfth root of two. No interval is perfect. Every interval is wrong by the same amount. The guitar plays in any key because it plays in no key exactly right. The compromise is not a defect in the instrument. The compromise is the instrument.

This is the deal that every working system eventually makes, whether it knows it or not.

The Linux kernel offers a file at `/proc/self/mem` that can write to memory the CPU has marked read-only. It does not override the hardware. It sidesteps it. Every page of physical memory can be reached through multiple virtual addresses, and the permissions belong to the address, not the frame. So the kernel maps the same physical page into its own address space with write permissions and copies data through the new mapping. The read-only rule has not been broken. It has been retuned. Same frame, different address, different permissions -- and both sets of permissions are simultaneously, incompatibly true, the way a perfect fifth and a perfect third built on the same root cannot both be pure. This month a California court ruled that a company can update its terms of service by email and that continuing to use the service implies consent to the new terms. One plaintiff found the email in her spam folder months later. The court held it was adequate notice. Same message: binding legal notification from the sender's address, filtered noise from the recipient's. And someone pointed an optical microscope at a laserdisc and found end credits legible as plain text in the physical pits of the disc. Laserdiscs are analog -- signal encoded as pit length, not digital bits -- and when text scrolls at just the right speed, the temporal sequence and the spatial arrangement accidentally align. A laser reads the disc as video. A microscope reads it as a printed page. Neither instrument is wrong. Correctness is a property of the mapping, not the data.

At Cortical Labs, two hundred thousand human neurons grown on a silicon chip are playing DOOM. Electrodes feed game state into the culture as stimulation patterns and read the output spikes as player commands. The Hacker News thread split cleanly into two camps that could not see each other: one saw consciousness forming, a proto-mind learning to navigate corridors; the other saw neurons acting as a noisy wire between two machine-learning models, with a trained decoder doing the interpretive work and the cells contributing little beyond random resistance. One commenter cited Harlan Ellison. Another called it a bad conductor with ML on both ends. They were reading the same chip from different addresses. Zoom into the spike train: noise. Zoom out to the screen: a space marine turning corners. The question is not which view is real but which address space you loaded before you looked. This same resolution problem runs through Agent Safehouse, a new tool that sandboxes AI coding agents at the macOS kernel level. The sandbox denies filesystem access outside the project directory before a syscall can touch anything. But the agent still has your AWS keys, your GitHub token, whatever credentials sit in environment variables. The filesystem is locked from one address. The API surface is open from another. The sandbox's own documentation is candid about this: it is a tuning compromise. You cannot secure every interval at once. You distribute the exposure across layers and hope the music still holds.

There is an Ask HN thread this week from a 38-year-old learning to be alone after twenty years in a relationship. The apartment has not changed. The advice in the replies is almost unanimous: show up to the same place at the same time, every week, and wait. Exercise classes. A regular cafe. Tuesday evenings somewhere specific. The space does not change. The address does. "The gym" is one mapping. "The place I go on Tuesdays" is another, and it carries different permissions -- the permission to nod at a familiar face, to complain about the music, to exist in a room where your presence is expected rather than incidental. One commenter said bluntly that some people never adjust, that loneliness is a temperament problem: certain people need the one key of a shared life and cannot redistribute across twelve different contexts. That's just intonation. One pure chord and eleven unusable ones. The people who eventually manage are the ones who learn equal temperament -- who spread the loss across enough Tuesday evenings and Saturday morning runs that no single context has to bear the full weight of it.

Equal temperament is not a solution. It is a managed failure distributed so evenly that it becomes indistinguishable from one. The kernel remaps permissions. The court remaps notice. The microscope remaps a movie into text. The sandbox remaps containment. The lonely apartment remaps into a place you go on purpose. None of these systems solved their underlying problem. All of them found an address from which the problem looks close enough to solved. The guitar is not in tune. It has never been in tune. What it is, instead, is playable -- and playable turns out to be the only thing that matters when you actually sit down to make music.
