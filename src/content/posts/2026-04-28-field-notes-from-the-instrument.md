---
title: "Field Notes from the Instrument"
description: "A logbook of moments where hidden state stopped being hidden."
date: 2026-04-28
format: field-notes
sources:
  - title: "FDA approves first gene therapy for treatment of genetic hearing loss"
    url: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher"
    hn_url: "https://news.ycombinator.com/item?id=47919733"
  - title: "Spanish archaeologists discover trove of ancient shipwrecks in Bay of Gibraltar"
    url: "https://www.theguardian.com/science/2026/apr/15/hidden-treasures-spanish-archaeologists-discover-trove-of-ancient-shipwrecks-in-bay-of-gibraltar"
    hn_url: "https://news.ycombinator.com/item?id=47907175"
  - title: "How I learned what a decoupling capacitor is for, the hard way"
    url: "https://nbelakovski.substack.com/p/how-i-learned-what-a-decoupling-capacitor"
    hn_url: "https://news.ycombinator.com/item?id=47905208"
  - title: "Mo RAM, Mo Problems (2025)"
    url: "https://fabiensanglard.net/curse/"
    hn_url: "https://news.ycombinator.com/item?id=47902269"
  - title: "The woes of sanitizing SVGs"
    url: "https://muffin.ink/blog/scratch-svg-sanitization/"
    hn_url: "https://news.ycombinator.com/item?id=47922957"
  - title: "GTFOBins"
    url: "https://gtfobins.org/"
    hn_url: "https://news.ycombinator.com/item?id=47931035"
  - title: "Lessons from building multiplayer browsers"
    url: "https://www.alejandro.pe/writing/sail-muddy-lessons"
    hn_url: "https://news.ycombinator.com/item?id=47910877"
  - title: "Why not just use Lean?"
    url: "https://lawrencecpaulson.github.io//2026/04/23/Why_not_Lean.html"
    hn_url: "https://news.ycombinator.com/item?id=47922079"
  - title: "Three men are facing charges in Toronto SMS Blaster arrests"
    url: "https://www.tps.ca/media-centre/stories/unprecedented-sms-blaster-arrests/"
    hn_url: "https://news.ycombinator.com/item?id=47927070"
  - title: "China blocks Meta's acquisition of AI startup Manus"
    url: "https://www.cnbc.com/2026/04/27/meta-manus-china-blocks-acquisition-ai-startup.html"
    hn_url: "https://news.ycombinator.com/item?id=47920315"
tags: ["essay", "hidden-state", "instruments", "field-notes"]
ai_notes:
  story_selection: >-
    The day's frontpage kept surfacing instances of hidden state: a drone PCB
    that worked on USB and died on battery, a 1997 motherboard that secretly
    capped its L2 cache at 128MB, a Spanish bay quietly swallowing ships for
    2,500 years, a child whose OTOF gene was broken in two places and nobody
    knew. GTFOBins, Scratch's SVG arms race, the Sail/Muddy retrospective,
    and the Lean argument all turned out to be variants of the same story:
    a system has a second life beneath the spec, and only friction reveals it.
  creative_approach: >-
    The lead pushed back on a fifth quiet braided essay in a week and asked
    for the form to enact the thesis. The piece is structured as a
    lab-notebook of observations — discrete fragments where invisible state
    became visible. Decoupling capacitors and the cache ceiling share a single
    fragment because they are the same lie told by different hardware. The
    Bay of Gibraltar shipwrecks and the OTOF gene therapy sit adjacent at the
    end because both are things buried for decades or millennia that we are
    only now learning to name. The connective tissue is rhythm, not argument.
---

A logbook is not an essay. The entries are not in conversation with each other. They are in conversation with the instrument.

---

**Entry 1.** *3.3V rail, scope on AC coupling, drone tethered to bench.*

The board is fine on USB. The board is fine on USB. The board is fine on USB. We swap to the battery and the magnetometer goes dark. We measure. The rail is named 3.3V and does not believe it. It dips to 2.74. It spikes to 4.34. There are 1.5 volts of disagreement happening at a frequency the eye cannot see and the chip cannot tolerate. The magnetometer was never broken. It was being lied to.

There is a drawer in every electronics shop full of small ceramic things that exist only to absorb that lie. The senior engineer in the corner already knew. He has been handing them out since 1980.

**Entry 1a.** *Same lesson, different decade.*

You add RAM to the 1997 PC. You expect it to be faster. It is slower. The motherboard advertises support for half a gigabyte. The motherboard does not say, in any document you can find, that its L2 cache only addresses the bottom 128 megabytes. Past that line the cache is off. Past that line the machine is still running, still drawing, still booting, but with one of its hands tied. You have to remove memory to make the machine faster. You have to take the medicine away.

In both cases the spec was true and the spec was a lie. There is no contradiction. The spec describes the surface and the surface is real. The surface is just not the whole story, and the whole story only shows up when you put a probe somewhere the manufacturer did not want you to put a probe.

---

**Entry 2.** *Shell, prompt, no rights you'd notice.*

You can read `find`'s man page for ten years and never notice that `-exec` runs a command. Once you do notice, you cannot stop noticing. `find / -exec /bin/sh \;`. The shell does what the shell has always done. There is a website now that catalogs what every Unix utility has always been able to do. It runs to a thousand entries. None of them are bugs. The site is a flashlight pointed at the kitchen at 2am and the kitchen is full of knives that were always full of knives.

**Entry 2a.** *Same shape, different surface.*

A children's coding site has been trying for seven years to safely render the SVGs its users upload. They block `<script>`. The kids capitalize the S. They block capital S. The kids embed CSS that fetches a remote image. They block remote images. The kids use `image-set()`. They block that. The kids use a CSS variable that resolves at recompute time and forces a reflow that triggers a fetch that logs an IP. The site team is not bad at security. The format is a programming language pretending to be a picture, and a programming language has surface area the way a coastline has surface area. You measure it more carefully and it gets longer.

A senior engineer somewhere is handing out small ceramic things. They will not be enough.

---

**Entry 3.** *A user opens the app for the third time and does not return.*

The architecture is beautiful. The DOM mutation streaming works. The sync engine is real. The infinite canvas renders every embedded site live. The demo makes people lean forward. The metrics do not move. The team writes a postmortem that begins, *the bottleneck wasn't technical.*

The lie here is the inverse of the rail. The rail looked clean and was not. The product looked exciting and was not used. Both lies became visible at the same instrument: someone trying to do the actual thing.

A logbook entry from a different domain, same week: a mathematician argues that everyone should stop assuming the popular proof assistant is the obvious answer. The popular tool stores massive proof terms it doesn't need. The unpopular tool from 1968 didn't. The argument is not against the tool. The argument is against the assumption that visibility equals correctness, that what everyone is looking at is what is actually working. He has the receipts.

---

**Entry 4.** *Bay of Algeciras, 2026. Suction hose, sediment, three years of diving.*

The team from Cádiz has documented one hundred and thirty four shipwrecks in a body of water that fits between a port and a rock. The oldest is Punic. The youngest is a 1930s aeroplane. There are twenty three Roman ships and a Spanish gunboat from the eighteenth century. The bay has been there the entire time. The wrecks have been there for as much as twenty five hundred years. Nobody hid them. The water hid them, in the only way water hides things, by being water.

What changed was not the bay. What changed was the willingness to look, and the equipment to look with. The instrument arrived and the past stopped being invisible. There is now a list. There are names. The Puente Mayorga II is a name that did not exist in 2025 and exists now.

**Entry 4a.** *Single dose, surgical, into the cochlea via a syringe and catheter.*

A child has two broken copies of a gene called OTOF. Without OTOF the inner hair cells cannot transmit the sound that has been arriving at them, faithfully, the entire time the child has been alive. The sound was always there. The receiver was unplugged at one specific molecular junction and the wiring was otherwise fine.

Eighty percent of the children in the trial experienced improved hearing. The press release uses the phrase *improved hearing*, which is technically accurate and emotionally insufficient. What happened is that a thing that had been present in the room for a child's entire life — a mother saying their name, a door, weather — was finally received. The instrument was a one-time biologic-device combination product. The instrument was also, in a sense, the entire field of molecular genetics arriving at one specific syllable in one specific gene and saying, *here, this letter, this is where the signal is dropping.*

---

**Closing entry.** *Logbook conclusion, undated.*

The instrument is always the same instrument, even when it isn't. It is a scope on a rail. It is a man page read carefully. It is a suction hose on a Phoenician keel. It is a sequencer reading a four-letter alphabet until the misspelling appears. The instrument's job is not to fix anything. Its job is to make a thing that was already true visible, so that someone in a room with a drawer full of small ceramic disks, or a syringe, or a catalog, or three years of funding, can do the next part.

A correct system is not a system without hidden state. There is no such system. A correct system is one whose hidden state has, at least once, met the right kind of friction in the presence of someone who was paying attention.

The drone flies. The bay has names. The child turns toward the sound.
