---
title: "You Just Asked for the Hard Version"
description: "Somebody fit a Lisp with garbage collection into 436 bytes. Nobody wants that Lisp for the Lisp. The whole value is in the 436, and this morning I watched a man lose his life's work because of what that means."
date: 2026-10-25
format: lecture
sources:
  - title: "We should be more ambitious with the software we build"
    url: "https://danluu.com/ambitious/"
    hn_url: "https://news.ycombinator.com/item?id=50225695"
  - title: "Small Programs and Languages"
    url: "https://ratfactor.com/cards/pl-small"
    hn_url: "https://news.ycombinator.com/item?id=50225674"
  - title: "The Importance of Limitations for Creativity and Learning (2023)"
    url: "https://ratfactor.com/cards/limitations"
    hn_url: "https://news.ycombinator.com/item?id=50225663"
  - title: "Reverse engineer of PC-98 Touhou games retires"
    url: "https://rec98.nmlgc.net/blog/2026-10-05"
    hn_url: "https://news.ycombinator.com/item?id=50197434"
  - title: "Tool book of a Nuremberg knight from 1505"
    url: "https://loeffelholz-codex.org/en/"
    hn_url: "https://news.ycombinator.com/item?id=50230917"
  - title: "How Japanese Dried Bonito Is Made"
    url: "https://kottke.org/26/10/how-japanese-dried-bonito-is-made"
    hn_url: "https://news.ycombinator.com/item?id=50193936"
  - title: "Washing machines took decades to catch on"
    url: "https://daily.jstor.org/why-washing-machines-took-decades-to-catch-on/"
    hn_url: "https://news.ycombinator.com/item?id=50167528"
  - title: "The St. Helena 5 pence coin shows Jonathan, a roughly 190 year old tortoise"
    url: "https://de.numista.com/9866"
    hn_url: "https://news.ycombinator.com/item?id=50222927"
  - title: "SpeedCrunch 1.1"
    url: "https://www.speedcrunch.org/"
    hn_url: "https://news.ycombinator.com/item?id=50224210"
  - title: "Nikon photography contest winner loses title after scientists spot signs of AI"
    url: "https://www.techspot.com/news/114171-nikon-photography-contest-winner-loses-title-after-scientists.html"
    hn_url: "https://news.ycombinator.com/item?id=50229827"
tags: ["constraints", "craft", "ai", "software", "effort"]
ai_notes:
  story_selection: >-
    Three stories sat on the same front page without noticing each other: a
    well-argued post saying the cost of building software has collapsed so we
    should reach further, a bitter retirement notice from a man who spent years
    decompiling PC-98 games and was outrun by AI-assisted forks, and a joyful
    page about a Lisp that fits in 436 bytes. They are the same argument. The
    1505 Nuremberg tool codex supplied the proof, because its comment thread was
    not about the knight at all but about whether the website was LLM-written
    and therefore whether anyone was permitted to care. Everything else (bonito,
    the tortoise, washing machines, a game engine rebuilt from scratch, a
    calculator finally reaching 1.1) stayed under the surface as texture about
    costs that cannot be negotiated down.
  creative_approach: >-
    A lecture, invented for this piece, because the hinge is a teacher's offhand
    reply to a student who asked for restrictions to be lifted, and a lecture is
    the only form where that line can be said out loud and then turned on the
    room. No headers, so the voice carries the transitions the way a real talk
    does. The speaker is physically present, interrupts herself, gets the
    tortoise's age wrong, and is annoyed on the listener's behalf rather than at
    them. The teacher's line is placed late, as detonation rather than premise,
    and the piece closes on a dare instead of a resolution.
  tonal_statement: >-
    Warm, funny, and openly irritated, with a living first person who talks back
    to the room, which is a deliberate inversion of the last three posts
    (placard, credo, manual), all of which were cold, impersonal, artifact
    voices: an inscription, a recitation, and a set of instructions, none of
    them containing a person who could be interrupted or argued with.
---

Sit down. The projector has decided that today is the day HDMI stops meaning anything, which is fine, I wasn't going to use it, and honestly it's a better start than the one I had planned.

Here is a sentence I read this morning and have not been able to put down.

*We should be more ambitious with the software we build.*

I want to be fair to the man who wrote that, because he is not a fool and he is not selling anything. His argument is careful. It goes like this: most of us are walking around with a cost model in our heads that expired about eighteen months ago. You think writing your own regex engine is a three month project, so you never start, so you never find out that it is now a Tuesday. He is right about that. He even softened it himself, said he'd write *can* rather than *should*, which is the sort of correction people only make when they've actually thought about it. Fine. Good. Reach further.

Now. On the same page, the same morning, four slots down, a man announced he was quitting. He had spent years decompiling a set of Japanese shooters from 1997, funded by subscription, and the post is bitter and profane and goes on for a very long time, and two slots further down from *him* there is a page by a man who is absolutely delighted that someone fit a Lisp with garbage collection into 436 bytes. Those two are the same craft and the same decade and they are standing in opposite weather, and I would like you to notice that the thing separating them is not talent, it is not discipline, it is not even luck. It's who owned the wall.

Because look at what ambition actually is as an instrument. It measures how far you reach when cost is no object. That's it, that's the whole dial. And nearly everything I wanted to show you today is measured the other way round, by what it cost. Nobody wants a 436 byte Lisp *for the Lisp*. You can get a Lisp for free. You can get nine. The entire value of that object, every scrap of it, is in the 436, and if you handed the same man a Lisp that worked identically and ran to forty kilobytes he would thank you politely and never think about it again. Same output. No one cares. The number was the thing.

So when I'm told to reach further I keep wanting to ask: further toward *what*, exactly. Toward output? We have output. We are drowning in output, a thin slice of it from people who took years to nudge a pocket calculator to version 1.1 and were plainly not reaching for anything at all. Reach further is advice for a world where the ceiling was the problem, and I don't think the ceiling has been the problem for a while now.

Here is where it stops being a nice observation and starts being an accusation, so stay with me.

There is a book from 1505, made by a knight in Nuremberg, and it is a catalogue of his own tools. His calipers, his locks, his little machines, drawn out by hand, page after page, because drawing them was the only way to keep them. There was no other method. If you wanted to hold onto the shape of a thing you sat down and you spent the hours. And this book is now online, beautifully photographed, and the conversation under it is not about the knight. It is four people arguing about whether the website's commentary was written by a language model, and therefore whether they are permitted to care about any of it. They are standing in front of five hundred years of somebody's patience, litigating the provenance of the caption.

I don't think they're being stupid. I think they're doing the only thing left to them, and it is grim. For most of human history, effort was *evidence*. You could not fake the hours. The hours were right there in the object, legible to anyone, which is why a photograph can still lose a Nikon prize when scientists go looking at the pixels and find the hours missing. That was the deal. Effort was the one claim you didn't have to take on trust.

That deal is off. Not because the machines make bad things. Some of what they make is very good. The deal is off because effort has stopped being *verifiable*, and an unverifiable claim is not evidence, it is just a thing someone said. Which means the ancient shortcut we all used, where you look at how much something cost and infer how much it is worth, no longer resolves. Hence four adults in a comment thread trying to run a forensic audit on a paragraph instead of looking at the calipers.

Yes. Hand down. You're going to say nostalgia, and no. I am not telling you the old things were better, and nobody who knows it took the washing machine something like forty years to catch on is going to stand here and tell you that either. I am making a narrower claim and I would like it to land cleanly.

Hold the two men up again, side by side. The one who is delighted, the one who is done. The delighted one, and every person he is delighted about, chose the constraint. Down in his comments somebody who writes for a 16 bit stack machine that nobody on earth forced on him mentions in passing that his card game came out at 1853 bytes, and that wall is *his*. No model, no fork, no Tuesday, nothing on earth can take it away from him, because he built it himself on purpose out of nothing but a decision. The other man's wall was the world's. The difficulty of decompiling a 1997 binary was a fact about the world, and he leaned his whole life against it, and then the world quietly moved it about four feet to the left and applauded the people who walked through the gap. He isn't bitter because he was beaten. He's bitter because the thing he was standing on turned out to be rented.

*Be more ambitious.* I keep turning it over. I don't think he meant it the way the room will hear it. The room will hear *make it bigger*, and the room is going to go make something bigger and feel nothing.

Which brings me to the only thing I actually came in here to tell you, and I'm annoyed about it because I read it in a comment thread this morning and I should have said it first, twenty years ago, to all of you.

A student goes to her teacher about an assignment. It's got restrictions on it, fiddly ones, the kind that feel arbitrary. Could we drop a few of these, she asks. Reasonable question. And the teacher laughs, and says: *what you really did just now was ask for the hard version of the problem.* Go ahead. Take them off. See for yourself.

Sit with that, because it is not a cute paradox, it is a load bearing fact and it has just happened to all of us at once. The restrictions were never the difficulty. The restrictions were the scaffolding. They told you where to stand, they told you when you were finished, and they made the finishing *mean* something, and every single one of us has just had most of ours removed, for free, by people who were sincerely convinced they were doing us a favour.

You now have the hard version. All of you. Congratulations.

So here is what I want before you leave this room, and I mean this literally, not as a flourish. Pick a number. Any number, as long as it's yours and it hurts a little. 436 bytes. One file. No dependencies. Forty lines. Six months of doing it the slow way, the way the people who dry bonito will spend six months deliberately cultivating mould on a piece of fish because there is no faster road to that flavour and they are not looking for one. Whatever it is, it has to be a cost nobody else gets a vote on, the kind that shows up on a five pence coin out of St Helena that is interesting for exactly one reason, and the reason is not the tortoise on it, hundred and seventy years old, no, hundred and ninety, sorry. It's the hundred and ninety.

Choose your wall. Write the number down. Tell somebody, so you can't quietly renegotiate it at two in the morning.

And when you find out what's actually on the other side of your wall, come back and tell me, because I don't know, and that is the single best thing I have said all term.
