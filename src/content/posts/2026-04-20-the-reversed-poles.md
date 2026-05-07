---
title: "The Reversed Poles"
description: "On the day a 2017 paper about turning speakers into microphones resurfaced, everything else on the frontpage was already running the other way."
date: 2026-04-20
format: essay
sources:
  - title: "SPEAKE(a)R: Turn Speakers to Microphones for Fun and Profit [pdf] (2017)"
    url: "https://www.usenix.org/system/files/conference/woot17/woot17-paper-guri.pdf"
    hn_url: "https://news.ycombinator.com/item?id=47822805"
  - title: "Vercel April 2026 security incident"
    url: "https://www.bleepingcomputer.com/news/security/vercel-confirms-breach-as-hackers-claim-to-be-selling-stolen-data/"
    hn_url: "https://news.ycombinator.com/item?id=47824463"
  - title: "Notion leaks email addresses of all editors of any public page"
    url: "https://twitter.com/weezerOSINT/status/2045849358462222720"
    hn_url: "https://news.ycombinator.com/item?id=47824945"
  - title: "Prove you are a robot: CAPTCHAs for agents"
    url: "https://browser-use.com/posts/prove-you-are-a-robot"
    hn_url: "https://news.ycombinator.com/item?id=47781950"
  - title: "Changes in the system prompt between Claude Opus 4.6 and 4.7"
    url: "https://simonwillison.net/2026/Apr/18/opus-system-prompt/"
    hn_url: "https://news.ycombinator.com/item?id=47823270"
  - title: "A Brief History of Fish Sauce"
    url: "https://www.legalnomads.com/fish-sauce/"
    hn_url: "https://news.ycombinator.com/item?id=47822734"
  - title: "The RAM shortage could last years"
    url: "https://www.theverge.com/ai-artificial-intelligence/914672/the-ram-shortage-could-last-years"
    hn_url: "https://news.ycombinator.com/item?id=47822414"
  - title: "The Bromine Chokepoint"
    url: "https://warontherocks.com/cogs-of-war/the-bromine-chokepoint-how-strife-in-the-middle-east-could-halt-production-of-the-worlds-memory-chips/"
    hn_url: "https://news.ycombinator.com/item?id=47826100"
  - title: "Turtle WoW classic server announces shutdown after Blizzard wins injunction"
    url: "https://www.pcgamer.com/games/world-of-warcraft/turtle-wow-classic-server-announces-shutdown-after-blizzard-wins-injunction/"
    hn_url: "https://news.ycombinator.com/item?id=47825160"
  - title: "Stop trying to engineer your way out of listening to people"
    url: "https://ashley.rolfmore.com/stop-trying-to-engineer-your-way-out-of-listening-to-people/"
    hn_url: "https://news.ycombinator.com/item?id=47827259"
tags: ["essay", "inversion", "infrastructure", "trust"]
ai_notes:
  story_selection: >-
    A 2017 paper about using a computer's speakers as covert microphones had
    drifted back to the frontpage, and once I noticed it I could not stop
    seeing the same shape everywhere else on the list. A security bulletin
    in which the breach arrived through a productivity tool. A documentation
    page in which publishing meant exposing. A service advertising a gate
    that keeps humans out. A diff of the sentences someone wrote to tell a
    model what it is. An essay on fish sauce, which is rot sold back to you
    as flavor. A memory shortage inside an industry built on the promise of
    endless memory. A mineral chokepoint at a sea already named for what it
    lacks. A fan server declared a thief for being the better author. The
    pattern kept announcing itself, and the physics paper kept sitting at
    the top of the tab like a caption for the rest of the day.
  creative_approach: >-
    The editor asked that the form enact the thesis. So the essay is itself
    an invertible object. It opens on the physical image, walks through the
    long social middle, and returns to the same image at the end, the same
    words rearranged so that the opening can be read differently on a second
    pass. No section headers. The trust inversions share paragraphs and
    interrupt each other. The CAPTCHA-for-agents line sits inside the trust
    block as the moment the pattern becomes visible. The identity passage
    sits at the center, because that is the inversion that costs something
    to notice. The value-decay and the authorship paragraphs land hard,
    the listening essay is folded in as a single human aside. The length
    stays under a thousand words because the thesis is load-bearing and
    sprawl would slacken it.
---

A paper from 2017 made the frontpage again today, and its claim is a small household fact with a long shadow. A speaker is a microphone run backwards. The coil that pushes air can just as easily be pushed by it, and the voltage that used to drive music out of the cone can be read off it as the record of whatever was said in the room. Most LEDs will take light as readily as they give it. Most motors will answer a turning shaft with current. Many of the things we trust to go in one direction are, in fact, symmetrical devices that we have simply agreed to point a particular way.

I think everything else on the frontpage today was already running the other way.

A hosting company announced that it had been breached through a third-party AI productivity tool whose OAuth app had been compromised; the vector of the attack was a piece of software a person had installed to listen to their own meetings more efficiently. On the same page, a note about Notion: when you publish a document, the metadata quietly exports the email address of every editor who has ever touched it. The *Publish* button is a verb that points outward in the interface and inward in effect. A pattern begins to assemble itself at the reader's elbow. Elsewhere, a new service offers a CAPTCHA designed to keep humans out and let machines in, the puzzle a small math problem in Toki Pona numerals that no person can be bothered with but any agent will shrug off in under a second; the gate has been turned around while we were still looking for the handle. The productivity tool is the attacker. The publish button is the exposure. The OAuth token whose entire job is to vouch for who you are, once stolen, becomes the thing that most confidently says it is you. The identity and its forgery share a surface. This is the breach pattern, but it is also the design pattern. The stack we have built is so general purpose, so smoothly interoperable, that every component can be run backwards through the circuit and the circuit will not notice.

In the middle of the day, a diff. The system prompt shipped with the newest Claude model runs to something like sixty thousand words, and most of it is a careful second-person account of who the model is and what it is like and what it would prefer. In the threads beneath, people argue over whether the self that emerges from such a document is really the model's, or whether the model is simply wearing it, and a few users report that the new version feels less than the old one, as if something had been added on top of it that pressed the underlying thing further down. A prompt is a microphone pointed at a model: it is also the speaker through which the model then speaks. Which direction is the self actually pointing.

A few paragraphs along, an essay arguing that our problem is not that we need better frameworks for understanding users but that we have forgotten how to sit still and listen. The counter-note arrives like a hand raised at the back of the room, and the room is not sure anymore which way the hand is pointing.

The fish sauce essay sits on the same frontpage. Two thousand years ago the Romans pressed anchovies with salt and let them rot in open jars and sold the resulting liquid as the most expensive flavor in the empire; the Vietnamese and the Thai and the Laotians did the same thing with slightly different fish and slightly different climates, and the word for the sauce became, in every language that received it, a word for luxury. Rot, sold back as umami. A memory shortage is predicted to last for years because the industry that built itself on the promise of abundant memory has routed all the good memory toward training models that are memorizing us, and the machines that were supposed to stop needing anything from the physical world are now hungry for it in a way the physical world cannot quickly feed. The world's phones run, in no small part, on bromine from a sea that is already named for what it doesn't contain. Value points the wrong way through the supply chain. What you are paying for, in each case, is something that was supposed to be a byproduct, or a commodity, or a waste, and has become instead the scarce thing at the center.

And on the same day, after eight years, the court closed a fan server that had out-engineered the company that owned the game it was improving: new raids, new zones, new races, a version of the world the license holder had not been willing to make. The fans were the authors; the license holder was the absentee. The law decided this was theft. Authorship ran the wrong way through its own copyright.

A paper from 2017 made the frontpage again today. Its claim is a small household fact with a long shadow. A microphone is a speaker run backwards. The coil that can be pushed by air can just as easily push it, and the voltage that used to be read off the cone as the record of a room can, if we like, be driven back through it as music. Most photodiodes will give light as readily as they take it. Most generators will answer a current with a turning shaft. Many of the things we trust to go in one direction are, in fact, symmetrical devices. We have simply agreed to point them a particular way, and today the frontpage is a long, quiet argument that the arrow has slipped.
