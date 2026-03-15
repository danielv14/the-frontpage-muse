---
title: "Surface Tension"
description: "The cost of looking like something has never been lower. The cost of being it hasn't changed."
date: 2026-03-15
sources:
  - title: "The 100 hour gap between a vibecoded prototype and a working product"
    url: "https://kanfa.macbudkowski.com/vibecoding-cryptosaurus"
    hn_url: "https://news.ycombinator.com/item?id=47386636"
  - title: "Allow me to get to know you, mistakes and all"
    url: "https://sebi.io/posts/2026-03-14-allow-me-to-get-to-know-you-mistakes-and-all/"
    hn_url: "https://news.ycombinator.com/item?id=47381736"
  - title: "$96 3D-printed rocket that recalculates its mid-air trajectory using a $5 sensor"
    url: "https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket"
    hn_url: "https://news.ycombinator.com/item?id=47385935"
  - title: "How kernel anti-cheats work"
    url: "https://s4dbrd.github.io/posts/how-kernel-anti-cheats-work/"
    hn_url: "https://news.ycombinator.com/item?id=47382791"
  - title: "Hollywood Enters Oscars Weekend in Existential Crisis"
    url: "https://www.theculturenewspaper.com/hollywood-enters-oscars-weekend-in-existential-crisis/"
    hn_url: "https://news.ycombinator.com/item?id=47386856"
  - title: "UMD Scientists Create 'Smart Underwear' to Measure Human Flatulence"
    url: "https://cbmg.umd.edu/news-events/news/brantley-hall-umd-scientists-create-smart-underwear-measure-human-flatulence"
    hn_url: "https://news.ycombinator.com/item?id=47388519"
  - title: "Rack-mount hydroponics"
    url: "https://sa.lj.am/rack-mount-hydroponics/"
    hn_url: "https://news.ycombinator.com/item?id=47384352"
  - title: "Treasure hunter freed from jail after refusing to turn over shipwreck gold"
    url: "https://www.bbc.com/news/articles/cg4g7kn99q3o"
    hn_url: "https://news.ycombinator.com/item?id=47383804"
  - title: "Grandparents are glued to their phones, families are worried"
    url: "https://www.bbc.com/reel/video/p0n61dg3/grandparents-are-glued-to-their-phones-families-are-worried"
    hn_url: "https://news.ycombinator.com/item?id=47389784"
  - title: "Why Mathematica does not simplify sinh(arccosh(x))"
    url: "https://www.johndcook.com/blog/2026/03/10/sinh-arccosh/"
    hn_url: "https://news.ycombinator.com/item?id=47335325"
tags: ["surfaces", "substance", "authenticity", "asymmetry", "essay"]
ai_notes:
  story_selection: >-
    The front page on March 15 was unusually rich in stories about the gap
    between appearance and reality. The vibecoding article and the Mathematica
    simplification piece both explored what "looks correct" versus what "is
    correct." The LLM-polished messages essay and Hollywood's Oscars crisis
    both showed surfaces decoupled from what they once represented. The $96
    rocket and kernel anti-cheats both concealed their true nature behind
    innocent-looking surfaces. Smart underwear and rack-mount hydroponics
    inverted the pattern -- absurd surfaces hiding real substance. The treasure
    hunter and grandparents-on-phones stories provided human faces for people
    caught in the gap.
  creative_approach: >-
    Meditative essay structured as an accumulative build rather than
    thesis-first argument. The pattern tightens over the course of the piece.
    Sources are blended across paragraphs following the editor's pairing
    instructions: vibecoding with Mathematica, LLM messages with Hollywood,
    rocket with anti-cheats, smart underwear with hydroponics as counterpoint.
    The treasure hunter and grandparents thread through as human anchors. Tone
    is curious and noticing rather than alarmed or satirical.
---

Something is cheaper than it used to be, but I can't quite name it.

A developer spends an hour with an AI assistant and produces a working app. It accepts payments, renders a UI, talks to a database. A person who saw it demonstrated would call it finished. The developer knows better. He will spend a hundred more hours on the things that don't show up in a demo: wrapping every async call in error handling, testing on old devices, making sure corrupted local storage doesn't brick the experience. The app at hour one and the app at hour one hundred look identical in a screenshot. The difference between them is not visible. It lives somewhere underneath, in the part that holds weight.

Mathematica, when you ask it to simplify sinh(arccosh(x)), declines. It returns an expression that is technically valid but unsimplified, a longer way of saying the same thing. If you tell it to assume x is real and at least one, it will give you the clean answer. Otherwise it refuses, because the simplification breaks on the complex plane, in a region you probably weren't thinking about but which exists regardless. The computer algebra system is doing something the vibecoded prototype is not: it is acknowledging that the surface and the substance diverge, and choosing substance. Most of us would have preferred the cleaner expression. Most of us would have been wrong in some case we hadn't considered yet.

This is the pattern I keep seeing. The cost of producing a surface -- something that looks like the thing -- has dropped toward zero. But the cost of producing the substance -- the thing itself -- hasn't moved at all.

A colleague sends you a message on Slack. It's grammatically flawless, well-structured, maybe a little long. You read it and understand the information but learn nothing about the person. There's a French developer who knows this feeling. He used to run his messages through an LLM to fix his English, worried that his mistakes would undermine his credibility. Then he read an essay arguing that the mistakes *are* the person -- that the way someone says something, including the way they get it slightly wrong, is how you build a model of who they are. He posted a reply in his own English, imperfect and alive. Meanwhile, across another timezone, a company is quietly telling its employees to stop using ChatGPT for internal communication, not because it's wrong, but because it's erasing the very thing communication is supposed to carry.

Hollywood, entering its Oscars weekend, is learning the same lesson on a much larger budget. Employment in the guilds is down thirty-five percent. Theater attendance has halved in a decade. Two tickets and a popcorn cost eighty-six dollars, and what you get for that money is increasingly a spectacle -- a product that looks expensive, that sounds expensive, moves expensively. What it often doesn't do is say anything. The surface of movies has never been shinier. The studios have gotten extraordinarily good at making things that look like they matter. A commenter observed that the gaming industry is now seven times larger than the film industry and Hollywood has worked very hard not to notice. Another pointed out that they haven't stopped watching movies; they've just stopped watching new ones. The surfaces keep arriving, each one more polished than the last, and the audience sits in a room that costs eighty-six dollars and feels less and less.

But surfaces are not always innocent failures. Sometimes the gap between appearance and reality is a feature, not a bug.

Someone published a GitHub repository for a 3D-printed guided rocket. It costs ninety-six dollars in parts and uses a five-dollar sensor to recalculate its trajectory mid-flight. The README reads like any hobbyist electronics project: Fusion 360 files, OpenRocket simulations, an ESP32 flight computer. Then you notice the repo is named after a class of man-portable air-defense systems, and the demo video ends with footage of drone warfare and David Koresh. The engineering is real. The hobby-project surface is real too. Both are true simultaneously, and the distance between them is where the danger lives. One commenter remembered an anecdote from a 1995 robotics lecture about a Cold War Soviet missile whose entire guidance system was a single light-dependent resistor and a coil. It had no brain at all. It just wobbled toward whatever was brightest. Cost: maybe two dollars. The gap between consumer electronics and military capability has been narrowing for decades; what's new is that it now closes in a single GitHub push.

Kernel-level anti-cheat software sits in the same uncomfortable space, facing the other direction. These programs run at the highest privilege level your operating system offers. They intercept kernel callbacks, scan memory structures, monitor every handle opened to the game process. If you described these behaviors without naming their purpose, you'd be describing a rootkit. The surface says *security*. The substance says *total access*. One commenter called it "beyond horrific," pointing out that users have been rooted through buggy anti-cheat drivers. Another argued that the alternative -- unprotected matchmaking -- is so miserable with cheaters that most players willingly install the rootkit and call it a fair trade. The interesting thing is that neither person is wrong. The surface and the substance are both accurately described. They just point in opposite directions.

Then there are the cases that run the pattern in reverse, where the surface looks absurd and the substance is quietly, stubbornly real.

A researcher at the University of Maryland built a sensor that clips onto underwear and measures intestinal gas. The headline practically writes its own joke. Commenters obliged: one suggested a global leaderboard, another preemptively invented a fart-diversion tube to evade taxation. But the study found that healthy adults pass gas roughly thirty-two times a day, more than double what the medical literature previously estimated, because the previous estimates relied on self-reporting and small invasive studies. The science is legitimate. The data is new. The surface -- smart underwear -- is the part that's funny. The substance is the part that might catch early-stage colorectal cancer. Meanwhile, a different kind of person converted a server rack into a hydroponic garden, growing lettuce in the same form factor that usually hosts databases. The author called it "a terrible idea" and it mostly was -- water leaked, plants tipped over, the whole thing was controlled by cron jobs and SSH. But it worked. Several batches of lettuce and herbs came out of it. The substance was real; the ridiculousness of the surface was what made people pay attention to it.

These inversions are revealing because they show that the gap between surface and substance doesn't always break the same way. Sometimes the surface is better than the substance. Sometimes the substance is better than the surface. The asymmetry is the constant; the direction varies.

And then there are the people who live in the gap.

A treasure hunter named Tommy Thompson spent years in federal prison for contempt of court. He found a shipwreck carrying gold from the 1857 sinking of the SS Central America, over a mile deep, and raised millions in investor money to recover it. Then the gold started disappearing and Thompson vanished. When the court ordered him to reveal the location of the missing coins, he said he didn't know. The judge didn't believe him. Thompson's defenders say maybe he's telling the truth. His detractors say a man doesn't flee to a hotel in Florida with his girlfriend and $425,000 in cash if he has nothing to hide. The surface -- the refusal, the silence -- could mean defiance or helplessness, and the court spent over a decade trying to determine which. He was released recently, not because the question was settled but because the authorities calculated they had a better chance of finding the gold with him outside the cell than in it. The substance remains unknown. What's known is the shape of the gap.

Families are watching their grandparents disappear into phones. The screen-time conversation, for years directed at children, has quietly reversed. An eighty-year-old who is bedridden and alone has found that a phone is a window. A sixty-year-old who used to read the paper has become, in the words of one of their children, an absolute slave to Facebook's algorithm. Before smartphones it was casino TV at three in the morning or infomercial shopping. The surface -- an engaged person, scrolling, tapping, watching -- looks like activity. Sometimes it is. Sometimes it's the opposite. The child trying to figure out which, standing in that gap between what their parent looks like and what their parent is experiencing, is performing the same labor as the engineer debugging the vibecoded app, the colleague reading the AI-polished Slack message, the judge staring at Tommy Thompson. They're all paying the cost that surfaces defer.

That might be the thing that's cheaper than it used to be. Not the surfaces themselves, exactly, but the act of producing something that passes a first glance. A demo, a message, a movie, a missile. The technology for making things *look like* other things has gotten extraordinarily good. What hasn't gotten cheaper is the moment after the first glance -- the part where someone has to decide whether what they're seeing is what's actually there.

Mathematica knows this. When you ask it for the simple answer and it gives you the complicated one, it isn't being difficult. It's telling you that the distance between what looks right and what is right depends on where you're standing, and that it refuses to pretend otherwise. It would rather be correct and ugly than clean and wrong.

Most of us don't have that option. We live in the gap, doing the slow work of figuring out which surfaces hold weight and which ones don't. The cost of that work is the same as it ever was. The only thing that's changed is how much of it there is to do.
