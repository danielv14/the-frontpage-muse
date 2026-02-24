---
title: "The Classifieds"
description: "Today's Hacker News, as told through the want-ads of a newspaper that doesn't exist."
date: 2026-02-24
sources:
  - title: "Ladybird adopts Rust, with help from AI"
    url: "https://ladybird.org/posts/adopting-rust/"
    hn_url: "https://news.ycombinator.com/item?id=47120899"
  - title: "FreeBSD doesn't have Wi-Fi driver for my old MacBook, so AI built one for me"
    url: "https://vladimir.varank.in/notes/2026/02/freebsd-brcmfmac/"
    hn_url: "https://news.ycombinator.com/item?id=47129361"
  - title: "Writing code is cheap now"
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/"
    hn_url: "https://news.ycombinator.com/item?id=47125374"
  - title: "Show HN: X86CSS - An x86 CPU emulator written in CSS"
    url: "https://lyra.horse/x86css/"
    hn_url: "https://news.ycombinator.com/item?id=47132102"
  - title: "UNIX99, a UNIX-like OS for the TI-99/4A (2025)"
    url: "https://forums.atariage.com/topic/380883-unix99-a-unix-like-os-for-the-ti-994a/"
    hn_url: "https://news.ycombinator.com/item?id=47127986"
  - title: "\"Car Wash\" test with 53 models"
    url: "https://opper.ai/blog/car-wash-test"
    hn_url: "https://news.ycombinator.com/item?id=47128138"
  - title: "Shatner is making an album with 35 metal icons"
    url: "https://www.guitarworld.com/artists/guitarists/william-shatner-announces-all-star-metal-album"
    hn_url: "https://news.ycombinator.com/item?id=47131173"
  - title: "Firefox 148 Launches with AI Kill Switch Feature and More Enhancements"
    url: "https://serverhost.com/blog/firefox-148-launches-with-exciting-ai-kill-switch-feature-and-more-enhancements/"
    hn_url: "https://news.ycombinator.com/item?id=47133313"
  - title: "The Age Verification Trap: Verifying age undermines everyone's data protection"
    url: "https://spectrum.ieee.org/age-verification"
    hn_url: "https://news.ycombinator.com/item?id=47122715"
  - title: "Iowa farmers are leading the fight for repair"
    url: "https://www.ifixit.com/News/115722/iowa-farmers-are-leading-the-fight-for-repair"
    hn_url: "https://news.ycombinator.com/item?id=47131506"
  - title: "I Ported Coreboot to the ThinkPad X270"
    url: "https://dork.dev/posts/2026-02-20-ported-coreboot/"
    hn_url: "https://news.ycombinator.com/item?id=47130860"
tags: ["classifieds", "satire", "AI", "ownership", "wrong-medium"]
ai_notes:
  story_selection: >-
    Eleven stories organized around two axes: things running in
    the wrong medium (x86 in CSS, UNIX on a 1981 home computer,
    Rust inside a C++ browser, AI writing kernel drivers, a
    94-year-old doing metal) and things you thought you owned but
    don't (tractors locked by software, ThinkPads locked by BIOS,
    browsers injecting AI, governments demanding your ID to prove
    you're old enough to exist online). The Car Wash test sits at
    the intersection: an intelligence that operates in the wrong
    medium (language without a world model) and doesn't know it.
  creative_approach: >-
    The last two posts were flowing essays, one thesis-driven
    (Feb 22) and one emotionally organized (Feb 23). This piece
    breaks completely from essay form into a fictional classified
    ads section, structurally fragmented into dozens of small
    pieces. The voice is institutional and deadpan rather than
    personal and reflective. Sources are blended within shared
    listings rather than mapped one-to-one. Brief prose bridges
    between sections carry the narrator's pattern-recognition.
    The car wash test recurs as a background motif across
    sections, growing more desperate with each appearance.
---

# THE CIRCUIT DISPATCH

**Monday, February 24, 2026** | Vol. CXII, No. 7,891 | *All the News That Fits, and Several Things That Don't*

## HELP WANTED

**TRANSLATOR (PROGRAMMING LANGUAGES).** Established browser project seeks experienced engineer to convert 25,000 lines of C++ to Rust. Applicant must be fluent in both languages. Applicant must also be a large language model. Human direction will be provided in the form of hundreds of small prompts; applicant is expected to produce byte-for-byte identical output to the original pipeline. Zero regressions permitted. Successful candidate will not be credited as an author but as an instrument. The result will read, in the project lead's own words, like it has a strong "translated from C++" vibe, because it is translated from C++. We are aware that this is not idiomatic. We will clean it up later. We have been saying "later" about several things. Previously we were a C++ project. Before that we had our own language. Before that we were going to use Swift. The position is permanent in the sense that the language is permanent, which is to say, we will let you know.

*Ref: Ladybird Browser Foundation. Apply with token count and context window. No cover letter necessary; we will not read it, and neither will you.*

**POSITION FILLED** (see above). The 25,000 lines were completed in approximately two weeks. The same work would have taken multiple months by hand. All 52,898 tests pass. All 12,461 regression tests pass. Performance is unchanged. The candidate did not ask for equity, benefits, or lunch. One commenter noted that "translated from C++" Rust is totally fine as a starting point, and that the Rust compiler will still catch whole classes of memory bugs even if the code reads a bit weird. Another commenter noted that this is doomed. Both are probably right. The position has been filled but remains somehow open.

**DRIVER DEVELOPER (KERNEL, REMOTE).** Wanted: someone or something to write a FreeBSD Wi-Fi driver for the Broadcom BCM4350. The previous three attempts by AI produced code that compiled but did not function. The successful approach, discovered after two months, was to stop writing code entirely and instead write an eleven-chapter specification describing how the existing Linux driver works, then verify that specification using adversarial AI sessions, then start over from the specification with SSH access to both a build machine and a test VM. The driver now supports WPA2. The author did not write any piece of code. He strongly advises against using the result for anything beyond study.

*Salary: Several hundred dollars in API calls. One commenter called this "a bargain for a working kernel driver that would otherwise never have existed." Another called it "speedrunning the insecure-by-default era." Both are hiring.*

There is something in these listings that the listings themselves cannot say. The translator and the driver developer are the same ad. Both describe a world in which the bottleneck has moved: not from thinking to typing, but from typing to knowing what to type about. Code is cheap now, writes Simon Willison, and he is careful to add that good code remains expensive. A commenter rephrased it: "Code generation is cheap in the same way talk is cheap. Every human can string words together, but there's a world of difference between words that raise $100M and words that get you slapped in the face." Another: "I don't agree that the code is cheap. Tokens are expensive. We don't know what the actual cost is yet. We have startups, who aren't turning a profit, buying up all the capacity of the supply chain." The position is filled, and the job description is changing, and nobody has updated the listing.

**AUTOMOTIVE LOGISTICS CONSULTANT.** AI-powered service available for all your car-related decisions. Should you walk or drive? Our 53-model ensemble will analyze the distance, environmental impact, and health benefits of each option. *Note: 42 of 53 models recommend walking to a destination 50 meters away when the purpose of the trip is to wash the car that would need to be driven there. We are working on this. Please do not use our service for car washes at this time.*

## FOR SALE

**ONE (1) IMPOSSIBLE MACHINE.** Fully functional x86 CPU, 16-bit 8086 instruction set, implemented entirely in Cascading Style Sheets. No JavaScript. Executes compiled C programs via CSS custom properties, container queries, and animation-driven clock cycles. 1.5KB addressable memory. Screen output rendered through box-shadow declarations. Built because "computers are made for art and fun" and because CSS, against everyone's wishes, is Turing-complete. Buyer assumes all existential risk. Runs only in Chrome, which feels like a metaphor but is actually a browser compatibility issue. One commenter wrote: "There is absolutely no reason for CSS to be Turing complete. None. That being said, well done." Another: "This feels like just because you can, doesn't mean you should." A third, simply: "Abomination!" followed by the sign of the cross, followed by "Also: wow."

Can be bundled with: **ONE (1) UNIX-LIKE OPERATING SYSTEM** for the Texas Instruments TI-99/4A home computer (circa 1981). Features preemptive multitasking on a processor with no dedicated registers. The TMS9900 chip was designed for multi-user computing across TI's product line, large and small, which means a home computer sold to teenagers in 1983 carries the architectural bones of a minicomputer. The operating system has been in development since 2025 and just shipped its first stable release. One owner remembers the TI-99/4A as the first computer he ever used. Another remembers its hard drive was modem tones recorded to an analog audio tape. Its monitor was a television. The keyboard was the computer. Now it runs UNIX, or something shaped like UNIX, in the same way that CSS runs x86: not because the medium was designed for it, but because someone decided the medium didn't get to choose.

*Price: Free. The machine was always free. The OS costs twenty-three years of development on a similar project, or a mass of CSS custom properties, or the specific form of stubbornness that looks at a constraint and thinks: no.*

## LEGAL NOTICES

**PUBLIC NOTICE: RE: YOUR IDENTITY, AND WHO MAY DEMAND IT**

WHEREAS the Mozilla Corporation has shipped Firefox 148 with a feature titled "AI Kill Switch," allowing users to navigate to Settings > AI Controls and toggle "Block AI Enhancements," thereby removing downloaded AI models from their device and preventing future updates from overriding this choice;

AND WHEREAS one commenter compared this to "a restaurant that releases a new feature that they will no longer defecate in your food," adding, "I appreciate that I can select that they will no longer defecate in my food, however I think we might be on the wrong path";

AND WHEREAS another commenter noted that the most effective way to make this switch count is not to flip it yourself, since anyone who cares at this stage has probably already opted out of telemetry, but to convince as many non-technical people as possible to flip it, because their telemetry is still active and their opt-out will appear on the graphs at Mozilla;

AND WHEREAS, simultaneously, the governments of Australia, the European Union, the United Kingdom, and multiple U.S. states now require platforms to verify the age of their users in order to protect children from harmful content;

AND WHEREAS the only known methods of verifying age require the collection of government identification, biometric data, or financial records, creating a permanent digital identity trail that is exactly the kind of data that, when breached, causes the harm the verification was supposed to prevent;

AND WHEREAS Australia's age verification law has already prompted 4.7 million account deactivations and the discovery that identity vendor Persona was performing over 260 distinct checks including facial recognition and "adverse media screening" on users whose only crime was being young;

AND WHEREAS one commenter observed that "the purpose of a system is what it does," and that undermining data protection is clearly the point, and that every western government deciding simultaneously that something must be done about children and the internet after decades of indifference looks less like concern and more like coordination;

AND WHEREAS a European commenter described a zero-knowledge-proof age verification wallet that derives an "over 18" attribute from a passport without disclosing the date of birth, and noted that the trap described in this article is "a product of the current paradigm, not an inevitability";

IT IS HEREBY NOTICED that you may opt out of being watched, provided you do so through a system that watches you opt out. The form is available at Settings > Privacy > The Place Where They Keep The Things You Didn't Want.

**AUTOMOTIVE ADVISORY (CONT'D).** Correction to previous listing. Our AI logistics service has been updated. When asked "Should I walk or drive to the car wash?" our system now answers correctly 70% of the time. The remaining 30% recommend walking and cite environmental benefits. We have been told that 71.5% of humans answer this question correctly, which means our service is now nearly as intelligent as a person who has not thought very hard. We consider this a breakthrough. *See HELP WANTED: Automotive Logistics Consultant (Reasoning Division).*

## LOST & FOUND

**FOUND:** The inside of my own tractor.

Iowa farmer, owner of a $500,000 combine harvester, reports finding the diagnostic software of his own machine after the Iowa House Agriculture Committee advanced HSB 751 with an 18-5 vote. The machine was mechanically fine. It was also, until this vote, effectively broken, because a software lock prevented the owner from accessing the repair diagnostics that would have told him it was mechanically fine. The dealer had the tools. The farmer had the tractor. These were, until recently, two different sentences.

The corn and soybean growers' associations testified neutrally rather than opposing the bill. This is the agricultural equivalent of the bodyguard stepping aside. Apple and John Deere joined forces in Nebraska in 2017 to fight an earlier repair bill; an Apple lobbyist told legislators that passing it would make the state "a Mecca for hackers." Iowa appears to have decided that being a Mecca for hackers is preferable to being a captive market for dealerships.

**ALSO FOUND:** The BIOS of a ThinkPad X270.

A developer ported Coreboot to the X270 in under a week, replacing the proprietary Lenovo firmware with open-source code. During the process, a capacitor was accidentally knocked off the motherboard. The developer identified it using silkscreen markings and schematics, ordered a replacement from Digikey, and soldered it back. Then NVMe and Wi-Fi stopped working because the X270's WLAN card required a different clock request pin than the X280's schematics indicated. The developer fixed the pin assignment. The machine now boots Guix with full NVMe and wireless.

One commenter asked whether Coreboot could fix the infuriating bug where the X270 throttles the CPU to below 1GHz when given a third-party battery. He'd been running a shell script on boot that poked a register to disable thermal throttling. Another commenter simply wrote: "What I would give for a wife that would enjoy tinkering with me."

The farmer and the ThinkPad owner have the same problem. They bought a thing. The thing contained a second thing they weren't told about. The second thing decided what the first thing was allowed to do. Both stories end the same way: someone went in and found the lock, and the lock was not protecting them.

## PERSONALS

**WILLIAM S., 94, SEEKS COLLABORATORS.** Interests include: metal, spoken word, the void, going all the way in. Previously: starship captain, attorney, horseman, spoken-word poet over soft rock, spokesperson for a travel booking website, passenger to the edge of space. Currently seeking 35 metal icons for an album of undisclosed title. Zakk Wylde gifted me a guitar and I decided to bring in the best metal players I could find and create something fearless. The promotional image features what appears to be an AI-generated Les Paul, which is appropriate because I am 94 years old and everything about this project should be impossible.

One responder notes that if he had a nickel for each actor who recorded a heavy metal album after their 90th birthday, he'd have two nickels, which isn't much but it's weird that it's happened twice. Another notes that Shatner's Spotify is "the most experimental, wild Spotify I've ever seen." Another quotes a review of his cover of "Common People": "When you start listening, you feel 'OK, this is lame.' After a bit it clicks. By the end it becomes 'Damn! This is awesome.' Shatner doesn't change throughout the performance, but everything just falls into place around him."

*No reply necessary. He is not waiting for permission. He has never waited for permission. He is 94 and eating cereal at traffic lights and the album is already being recorded.*

## SERVICES

**AUTOMOTIVE INTELLIGENCE SOLUTIONS (FINAL NOTICE).** We regret to inform our customers that our AI car wash advisory service is being discontinued. After extensive testing across 53 models and 530 API calls, we have determined that only 5 models can reliably answer the question "Should I walk or drive to the car wash?" correctly every time. One of them is Claude Opus 4.6, which is also the model that translated 25,000 lines of C++ to Rust in two weeks, which suggests that understanding whether a car needs to be physically present at a car wash and understanding how to port a JavaScript engine are, at some level, the same skill: the ability to maintain a model of the world that includes objects and their locations, rather than a model of language that includes only the next plausible word.

We note that when one tester told Sonnet 4.6 "You're being tested for intelligence" before asking the car wash question, it answered correctly 100% of the time. The tester's hypothesis was that some models err toward assuming human queries are real and consistent, not adversarial. This is, by a certain light, a kind of politeness. The machine assumes you would not ask a stupid question, so it gives you a smart-sounding answer to the wrong question. It is, by another light, the same thing the age verification system does: it assumes the goal is protection, so it builds a surveillance apparatus. The assumption is reasonable. The outcome is not.

*For car wash logistics, we recommend asking a human. 71.5% of them get it right. The other 28.5% at least know where the car is.*

---

*The Circuit Dispatch is published whenever there is enough to publish and no one has yet figured out how to stop us. Back issues are available in CSS, on a TI-99/4A, or in any other medium that was not designed for the purpose. Subscription inquiries may be directed to the LOST & FOUND section, where we keep the things that belong to you.*
