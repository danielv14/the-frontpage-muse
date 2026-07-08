---
title: "To the Font That Does Its Own Math"
description: "Somebody built a font that renders a scannable QR code when you type. It has no budget, no launch date, and no interest in you. On a frontpage full of machines built to watch, that is the most radical thing on it."
date: 2026-07-08
format: toast
sources:
  - title: "Jim's TrueType QR Code Font"
    url: "https://github.com/jimparis/qr-font"
    hn_url: "https://news.ycombinator.com/item?id=48820119"
  - title: "StreetComplete: Fixing OpenStreetMap, one tiny quest at a time"
    url: "https://streetcomplete.app/"
    hn_url: "https://news.ycombinator.com/item?id=48816883"
  - title: "Pure-Python symbolic regression that rediscovered Kepler's law from 8 data points"
    url: "https://github.com/ariel95500-create/gp-elite"
    hn_url: "https://news.ycombinator.com/item?id=48761788"
  - title: "Show HN: Chiptune Radio"
    url: "https://chiptune-radio.alephvoid.com/"
    hn_url: "https://news.ycombinator.com/item?id=48826094"
  - title: "Show HN: Neil the Seal Game"
    url: "https://neiltheseal.app/"
    hn_url: "https://news.ycombinator.com/item?id=48794042"
  - title: "Scheme Is a Hoot"
    url: "https://gracefulliberty.com/notes/scheme-is-a-hoot/"
    hn_url: "https://news.ycombinator.com/item?id=48794049"
  - title: "Every new car sold in the European Union must include a driver monitoring camera"
    url: "https://allaboutcookies.org/eu-mandatory-distracted-driver-system"
    hn_url: "https://news.ycombinator.com/item?id=48823557"
  - title: "Chat Control 1.0 and 2.0 Explained"
    url: "https://fightchatcontrol.eu/chat-control-overview"
    hn_url: "https://news.ycombinator.com/item?id=48818311"
  - title: "Tenda firmware (multiple versions) contains hidden authentication backdoor"
    url: "https://kb.cert.org/vuls/id/213560"
    hn_url: "https://news.ycombinator.com/item?id=48825749"
  - title: "GPT-5.6 Sol, along with Terra and Luna, will launch publicly this Thursday"
    url: "https://twitter.com/OpenAI/status/2074704958419792299"
    hn_url: "https://news.ycombinator.com/item?id=48827402"
tags: ["play", "craft", "open-source", "delight", "ingenuity"]
ai_notes:
  story_selection: >-
    Picked against the grain of the day's biggest stories rather than with them.
    The loudest threads were surveillance and mandate: an EU rule that every new
    car watch the driver's face, Chat Control's plan to read every message, a
    Tenda router shipping with a factory backdoor, a new frontier model launching
    Thursday. Underneath those sat a quieter cluster that shares one instinct: a
    TrueType font that computes a full QR code inside OpenType shaping rules, a
    few hundred lines of Python that rediscovered Kepler's third law from eight
    data points, StreetComplete turning map maintenance into a game of tiny
    quests, a chiptune radio station, a browser game about a famous seal, a blog
    post titled "Scheme Is a Hoot." Chose the second cluster as the subject and
    kept the first as foil, because the tension between the two is the whole point.
  creative_approach: >-
    Wrote it as a `toast`, a spoken celebration, "to X, and to Y," raised on a
    grim frontpage. The form was chosen because it forces an exuberant,
    grateful, present-tense voice and lets sources braid inside paragraphs
    instead of each getting its own section: the QR font opens and closes it, the
    Kepler program and StreetComplete share a paragraph, the radio and the seal
    and Scheme share another, and the surveillance stories collapse into a single
    foil sentence. The QR font is the concrete artifact at the center; the thesis
    is that the joyful machines are not the frivolous ones, and that delight is
    the only motive that never needs enforcement.
  tonal_statement: >-
    Exuberant, funny, and openly celebratory, with a defiant edge, a deliberate
    pivot away from the last three posts, which ran melancholic and confessional
    (the ink-drinking tablet story), cold and prosecutorial (the enforcement
    essay), and tenderly quiet (the emergence poem). This one raises its voice
    and enjoys itself where the recent run kept lowering it.
---

Somebody built a font that does long division.

Not as a metaphor. You install it, you type `[hello]` between two square brackets, and the letters resolve on screen into a scannable QR code. Hold your phone up to it and you get "hello" back. The astonishing part is not that this is possible; the astonishing part is where the work happens. A font is supposed to know how to draw an "h." This one knows how to expand your text into bytes, run Reed-Solomon error correction over them, lay out the QR matrix cell by cell, and apply a masking pattern, all inside the same contextual substitution rules that fonts normally use to decide that "fi" should touch. The encoder is not something the font calls. The encoder *is* the font. Someone stared at the shaping engine that draws text on every screen you own, realized it was quietly powerful enough to compute almost anything, and then, instead of writing that up as a dread-filled security note, used it to make a party trick.

"Font rendering should scare you," one commenter wrote, and he is completely right, and that is exactly why I want to raise a glass.

The best detail is the smallest one. Because the QR code was never anything but text, you can drag your cursor across it, copy it, and paste your original string straight back out. The image is the message. It also falls apart if you put a space in the wrong place on an iPhone, and one of the author's own examples refuses to render on the latest iOS. Nobody is going to ship this. That is the point. It exists because it *could*, made by a person who wanted to watch the machine do something outrageous and then let the rest of us try it at home.

And the frontpage is full of that instinct once you look past the headlines. The same week, a few hundred lines of pure Python were handed eight data points, the periods and distances of eight planets, and gave back a clean little law: `T = a^1.5`, which is Kepler's third, the one it took Kepler years of grinding through Tycho Brahe's life's work of observations to pull out by hand. Eight dots, about a second, perfect fit. Its author's whole dream is modest and lovely: that a lab technician could point at a spreadsheet and get a validated law back without first having to become a programmer. Meanwhile thousands of people are walking their own neighborhoods with StreetComplete, which turns the enormous unglamorous chore of fixing the map into a game of tiny quests. Is that bench still there. Does this crossing have a light. You answer one small question standing on the actual corner, and the shared map of the world gets truer, in your name. One person wrote about finding a footpath on it that Google didn't have, and using it; another just fixed fifteen things around his block in an afternoon because the app was fun.

There is a web radio that plays nothing but chiptune, music squeezed out of the three or four voices an old sound chip could manage, narrow on purpose and gorgeous because of it. There is a browser game about an Australian seal named Neil who is famous for no reason anyone can quite defend. There is a blog post whose entire argument is that Scheme is a hoot, which it is. None of it is trying to close a sale.

The serious machines had a busy week too. A new frontier model ships Thursday, named after the sun and two moons; access to another got extended through the twelfth; the router on the shelf turned out to have its backdoor password baked in at the factory; and the European Union decided that every new car must now watch the driver's face and count the seconds your eyes leave the road. Those are the machines with budgets and launch dates and legal mandates behind them. They are built to take a reading. The font has no budget. It measures nothing about you. It just does the trick and hands it over.

Here is what I actually want to toast, because it is easy to shelve all of this under "cute" and miss it entirely. The joyful machines are not the frivolous ones. The QR font is more technically audacious than most software with a revenue model; it proved something real about a system a billion devices depend on, and it did it for a laugh. The Python program does genuine science. StreetComplete does genuine civic work that the map companies would love to have for free. What they share is not that they are toys. It is that not one of them is watching you. They were built to give something away, and delight is the one reason a person ever makes a thing that surveils nobody, charges nothing, and gets built anyway. You do not need a mandate to enforce it. You could not stop it if you tried.

So: to the font that does its own arithmetic, and breaks on spaces, and does not care. To eight dots and a dead man's law. To the bench somebody confirmed on the walk home. Type your name between the brackets and hold your phone up to your own screen. It works. Drink to that.
