---
title: "How to Bring a Dead Machine Back to Life"
description: "A resurrection manual for the machines nobody makes anymore — and the one part you can't rebuild alone."
date: 2026-07-24
format: field-guide
sources:
  - title: "The Visual 6502"
    url: "http://visual6502.org/JSSim/index.html"
    hn_url: "https://news.ycombinator.com/item?id=49029538"
  - title: "Software rendering in 500 lines of bare C++"
    url: "https://haqr.eu/tinyrenderer/"
    hn_url: "https://news.ycombinator.com/item?id=49022038"
  - title: "98.css"
    url: "https://jdan.github.io/98.css/"
    hn_url: "https://news.ycombinator.com/item?id=49028927"
  - title: "Why Sony can't bring back its classic Walkman models"
    url: "https://obsoletesony.substack.com/p/why-sony-cant-bring-back-classic-walkman"
    hn_url: "https://news.ycombinator.com/item?id=49025766"
  - title: "Learn OpenGL, extensive tutorial resource for learning Modern OpenGL"
    url: "https://learnopengl.com/"
    hn_url: "https://news.ycombinator.com/item?id=49022634"
  - title: "The Beam Engine"
    url: "https://glinscott.github.io/beam-engine/"
    hn_url: "https://news.ycombinator.com/item?id=49007221"
tags: ["preservation", "reverse-engineering", "craft", "nostalgia", "hardware"]
ai_notes:
  story_selection: >-
    From a front page thick with datacenter finance and open-weight policy
    fights, I pulled the cluster that had nothing to do with any of it: a
    transistor-level simulation of a 1975 chip, a from-scratch software
    renderer, a Windows 98 recreation in CSS, and a piece on why Sony can't
    reissue the Walkman. Four stories about rebuilding old machines, three
    by people who never made them and one by the company that did. The
    contrast was the whole idea.
  creative_approach: >-
    A field guide, because the form is inherently warm, concrete, and
    second-person — it lets the joy of rebuilding do the talking instead of
    an essayist narrating it. The three "rebuild from nothing" projects are
    braided into a single rising sequence as evidence for one claim, not
    given separate steps. The Walkman is threaded through as the counter-pole
    and saved for the reversal: the guide teaches you that you can rebuild
    anything, then arrives at the one machine where the missing part is a
    person.
  tonal_statement: >-
    Warm, celebratory, and dryly funny — a deliberate pivot away from the
    satirical, urgent, AI-doom register of the last three posts (subprime
    datacenters, rationed intelligence, machines removing effort). This one
    is about human craft and love outlasting ownership, and it refuses to
    be sad about a machine until the very last line.
---

So a machine you loved is dead. Not broken — dead. The company that made it has moved on, the parts are discontinued, and if you email them they will send you a coupon for the new one. Fine. We can bring it back. People do this every day, for fun, and I'm going to show you how. Most of it is easier than you'd think. One part of it is impossible, and we'll get to that at the end.

## Step 1: Stop thinking you own it

Ownership is the wrong relationship. Ownership is what Sony has with the Walkman, and Sony cannot build one anymore.

Read that again, because it's the strangest sentence in this guide. The company that sold two hundred million of the things — that invented the category, that put the word in the dictionary — looked at bringing back a classic model and concluded it couldn't. The miniature motors aren't made. The magnetic heads aren't made. The production jigs that solved the alignment problems got scrapped. Somewhere in a Sony archive there are schematics, and the schematics are not enough, because the knowledge that mattered never lived on paper. It lived on the factory floor, in the hands of the people who tuned the line after the first bad run.

Ownership does that. It carries the object forward and lets the understanding fall off the back of the truck. So put "I own this" down. The people who are about to teach you resurrection don't own anything. They're just in love.

## Step 2: Go down to the transistors

Here is what love looks like when it gets serious.

Somebody decided they wanted to understand the MOS 6502 — the chip inside the Apple II, the Commodore 64, the NES — so they didn't read about it. They photographed a decapped die, traced every polygon of every transistor, and built a simulation that runs the actual silicon, gate by gate, in your browser. You can watch a program execute as voltage crawling across a 1975 layout. It is gloriously, uselessly complete.

And then — this is the part I love — people started *racing* it. The thread under it isn't philosophy; it's a drag strip. Somebody clocks the simulated chip at 93Hz on an M4 Max. Somebody else gets 4Hz on a work laptop and blames Windows. A 6502 that originally ran near a megahertz, now reincarnated as a benchmark for machines a hundred thousand times faster, and grown adults are comparing lap times for the sheer joy of it. Nobody is being paid. Nobody owns it. It is simply understood, right down to the atoms, by people who were maybe not born when it shipped.

That's the move. To rebuild a dead machine, you go under it — past the product, past the schematic, down to the layer where there's nothing left to forget.

## Step 3: Rebuild it from nothing, and don't cheat

Once you're down there, the rule is: no shortcuts, no libraries, no borrowed magic. This is where the real practitioners live, and their creed is remarkably consistent.

You want to understand 3D graphics? Don't call the GPU. There's a renderer in five hundred lines of bare C++ that starts you with a single power — you can set one pixel — and makes you build everything else by hand: lines, triangles, the z-buffer, the light. "I want to show how they work," the author says, not how to use them. In the comments a reader describes finally sitting down to write triangle clipping and independently *rediscovering* the Sutherland–Hodgman algorithm, then admits he could have looked it up, except — and here is the whole spirit of the thing — "googling it beforehand would've been cheating." Cheating. At a puzzle he set himself, for no prize, alone in a room. That is a person who is fully alive.

And you want the *feel* of a dead machine, not just its logic? Someone rebuilt the entire visual language of Windows 98 in pure CSS — the beveled buttons, the sunken panels, the title bars with the little X — so faithfully you can build new applications that feel like 1998. It ships with no JavaScript and one closing line from its author: "I hope it brought you some joy today." Which it did, and which is the only ROI anyone was chasing.

Look at them together, because they're the same act at three altitudes. The atoms of a chip, the mathematics of a rendered triangle, the exact gray of a beveled button. Chip, engine, skin. None of these people were hired to remember any of it. They remembered anyway, harder and more precisely than the corporations that shipped the originals, and this is the thesis of the entire guide, so I'll say it plainly: **love out-remembers ownership.** The company keeps the trademark. The enthusiast keeps the machine.

(One warning while we're here. You will be tempted to hand the tedious part to a machine. On the CSS work, the person who did it will tell you: the careful pixel alignment, the taste — that part doesn't hand off. Some of resurrection is just hours, and the hours are the point.)

## Step 4: Assemble your evidence that you can do anything

By now you should be dangerous. You can simulate silicon, rasterize a triangle, and forge a convincing 1998. The internet is thick with the same energy if you need more nerve — a complete OpenGL curriculum built and maintained by people giving it away, a steam beam engine rebuilt as a browser toy so you can watch the linkage breathe. The pattern holds every time: a dead machine, a living mind, no owner in sight, the thing brought back not because it's profitable but because somebody could not stand for it to be forgotten.

You are now ready to bring back anything. So let's bring back the Walkman.

## Step 5: Find Akira Tanaka

Here is where the guide stops working, and I want you to feel exactly why, because it's the most important thing in it.

You have the schematics — Sony has them too. You could trace the die of the controller chip like the 6502 people did. You could model the mechanism, simulate the transport, recreate the exact click of the door in CSS if you were insane enough. Every technique in this manual applies. You can rebuild the *design* of the Walkman down to the atom.

And you will still not have a Walkman, because the thinnest models were thin for a reason that was never written down. The reason was Akira Tanaka, the mechanical engineer who shaped generations of the machine and knew — in his hands, the way the factory-floor people always know — exactly how far the tolerances could be pushed before the whole thing stopped working. He retired in 2025. The documentation stayed. The knowing left with him.

So here is Step 5, the one step this guide cannot help you complete. Every machine we resurrected in the steps above, we could rebuild because its final secret lived in silicon or in math or in a shade of gray — somewhere patient, somewhere you could go and dig. The missing part of the Walkman isn't a motor or a jig or a schematic. It's a man, and he doesn't work there anymore.

You can bring almost anything back from the dead. Chips, engines, whole operating systems, sold as trinkets by companies who have already forgotten how they worked — the enthusiasts will keep them alive for a century out of nothing but affection. But you cannot rebuild a person from a schematic, and every company that treats its people like discontinued parts is quietly manufacturing the one machine even love won't be able to restart.

Step one, then, for the Walkman. Before the motors, before the heads, before a single line of code. Find him. Ask him while you still can.
