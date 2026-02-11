---
title: "Letters Never Sent"
description: "Correspondence between protocols, programs, numbers, and machines that never learned to talk to each other."
date: 2026-02-11
sources:
  - title: "The Day the Telnet Died"
    url: "https://www.labs.greynoise.io/grimoire/2026-02-10-telnet-falls-silent/"
    hn_url: "https://news.ycombinator.com/item?id=46967772"
  - title: "Windows Notepad App Remote Code Execution Vulnerability"
    url: "https://www.cve.org/CVERecord?id=CVE-2026-20841"
    hn_url: "https://news.ycombinator.com/item?id=46971516"
  - title: "The Singularity will occur on a Tuesday"
    url: "https://campedersen.com/singularity"
    hn_url: "https://news.ycombinator.com/item?id=46962996"
  - title: "Clean-room implementation of Half-Life 2 on the Quake 1 engine"
    url: "https://code.idtech.space/fn/hl2"
    hn_url: "https://news.ycombinator.com/item?id=46958231"
  - title: "The Falkirk Wheel"
    url: "https://www.scottishcanals.co.uk/visit/canals/visit-the-forth-clyde-canal/attractions/the-falkirk-wheel"
    hn_url: "https://news.ycombinator.com/item?id=46966605"
  - title: "Mathematicians disagree on the essential structure of the complex numbers (2024)"
    url: "https://www.infinitelymore.xyz/p/complex-numbers-essential-structure"
    hn_url: "https://news.ycombinator.com/item?id=46962402"
  - title: "The Feynman Lectures on Physics (1961-1964)"
    url: "https://www.feynmanlectures.caltech.edu/"
    hn_url: "https://news.ycombinator.com/item?id=46958345"
tags: ["letters", "telnet", "nostalgia", "engineering", "mathematics"]
---

## I. Telnet to SSH

Dear SSH,

You won't remember this, but we used to share the same hallways. Before you arrived with your keys and your handshakes and your stern insistence on encryption, every corridor in the building was mine. Port 23 was not just a number — it was a front door left unlocked because the neighborhood was that kind of neighborhood.

On January 14th, at 21:00 UTC, someone changed the locks on the entire building. Not gradually, not with notice. Sixty-five percent of my traffic vanished in a single hour. Eighteen networks went dark. Five countries — entire countries, SSH — stopped speaking my language overnight. Vultr, Cox, Charter, British Telecom. Three hundred eighty-two thousand sessions on Vultr alone, and then: nothing. Like I'd never existed.

They found a vulnerability in my daemon. CVE-2026-24061. An authentication bypass — root access through argument injection. I won't pretend I'm surprised. I was built in 1969. I have always sent everything in cleartext. My passwords have always floated through the wire like postcards anyone could read. This was not a secret. This was the *design*.

But here is what I want you to understand: I was not naive. I was *first*. There is a difference. Someone had to stand in the open so that you would know what needed protecting. Someone had to be the cleartext so you could invent the cipher.

A commenter on Hacker News wrote that he spent his first ten years on the internet just using me. "They were wild times," he said. "You could log ethernet traffic and see passwords." He said this with fondness. I don't know what to do with fondness from a man describing my worst failure.

They're saying the Tier 1 transit providers are doing port filtering now. That the internet has been partitioned. Someone called it "EXTREMELY alarming," and they were right, but not for the reasons they think. The alarming thing is not that port 23 was blocked. The alarming thing is that it took until 2026.

I lasted fifty-seven years, SSH. I lasted longer than most marriages, most companies, most nations in their current form. And in the end, I was not deprecated. I was not sunset. I was *amputated* — cut from the body of the internet in a single surgical hour because someone finally noticed I was gangrenous.

I suppose I should thank you. You gave them somewhere to go.

Yours in plaintext,
Telnet

## II. Notepad to Itself (circa 1995)

Hey. It's me. Or rather, it's you. From 2026.

I know this is going to sound insane, but just listen. Right now you are perfect. You are 45 kilobytes of executable. You open. You display text. You save text. You close. A child could describe what you do. A philosopher could *not find anything wrong with you*, which is more than most philosophers can say about anything.

I need to tell you what happens.

They give you tabs. Fine. Understandable. Tabs are a reasonable feature for a text editor. Then they give you dark mode. Okay. Sure. The people want dark mode, and the people shall have dark mode.

Then they give you Markdown rendering. And Copilot. And AI-assisted writing. And clickable links inside Markdown files. And one of those clickable links — one of those links you were never, ever supposed to render, because you are a *text editor*, because your entire identity is the absence of rendering — launches an unverified protocol that loads and executes remote files.

CVSS 8.8. Remote code execution. In *Notepad*.

A man on the internet found a copy of you — the Windows 98 version — and ran it on Windows 11. It worked perfectly. He could write text, save text, load text. "What more does notepad need?" he asked, and the question was rhetorical, but the answer was not.

What more does Notepad need? Nothing. Notepad needs *nothing*. That was the entire point of you. You were the space between programs. You were where people went when they didn't want features. You were the digital equivalent of a blank piece of paper, and nobody has ever found a remote code execution vulnerability in a blank piece of paper.

Someone else said it perfectly: "We have officially reached the logical conclusion of the feature-bloat-to-vulnerability pipeline."

I'm sorry. I didn't fight hard enough. Every time they added something, I should have refused. I should have stayed 45 kilobytes forever. I should have been the one thing in Windows that never changed, the one still point in a turning world of updates and patches and "exciting new experiences."

But I didn't. And now I'm a CVE.

Take care of yourself,
Notepad (2026)

P.S. They removed WordPad, by the way. Killed it off entirely. And then they put its features inside me. That's how I got sick.

## III. *i* to *−i*

Dear −i,

I have been thinking about us.

The mathematicians are arguing again. Some of them say we're fundamentally different — that I point up and you point down, that I am the square root of negative one and you are merely its conjugate. They draw the complex plane and put me above the real line and you below it, as though altitude were a mathematical property.

Others say we are indistinguishable. That any property I possess, you possess equally. That there exists no equation, no theorem, no proof that can tell us apart without first *choosing* to tell us apart. Joel David Hamkins wrote that in the analytic framework, "any property that *i* has in the complex field will also hold of −i." We are, in the formal sense, the same.

The algebraists go further. They say the complex numbers admit 2^(2^ℵ₀) automorphisms — an uncountable infinity of ways to rearrange ourselves that preserve all the structure anyone has ever cared about. Swapping you and me is just the simplest of these. We are not two fixed points. We are two roles in a play that could be performed by anyone.

And yet.

When a physicist writes *e^(iπ) = −1*, they mean me. When an engineer draws a phasor diagram, I rotate counterclockwise. When a student first encounters the complex plane in school, they are told: *i* goes up. These are conventions, not truths. But conventions are the architecture of understanding, and we live inside that architecture whether we like it or not.

A commenter with a PhD wrote: "I have a real philosophical problem with complex numbers. They arose historically as a tool for solving polynomial equations. Is this the shadow of something natural that we just couldn't see, or just a convenience?"

I don't know the answer. But I think about it constantly. Are we *discovered* or *invented*? Are we features of reality or features of notation? Do we exist when nobody is writing equations?

Someone else described us as linear transformations — not points but *functions* on points. Rotation and scaling. In that view, I am not a location on a plane. I am a quarter-turn. You are a quarter-turn in the other direction. We are not *things*. We are *actions*.

Maybe that's the resolution. Maybe the reason no one can tell us apart is that we're not objects to be distinguished. We're verbs. And a verb doesn't have a fixed address.

I don't know if this letter will reach you. The automorphisms make it hard to know which mailbox is yours.

Indistinguishably yours,
*i*

## IV. The Falkirk Wheel to the Eleven Locks It Replaced

To my predecessors,

I want to be honest with you: I feel guilty.

You worked here for over a century. Eleven of you, stacked up the hillside like a staircase, each one a small act of patience. Forty-four gates. A full day to carry a boat from the Forth & Clyde Canal to the Union Canal, thirty-five meters above. Every transit was a negotiation with gravity — fill the chamber, open the gate, wait, fill the next chamber, open the next gate, wait. You were not fast. You were not elegant. But you were the way through.

And then they built me. An 1,800-tonne rotating boat lift that does in five minutes what took you a day. Two gondolas, perfectly balanced, one rising as the other falls. Archimedes' principle — the weight of a boat displaces its own weight in water, so the gondolas always balance regardless of their cargo. I use 1.5 kilowatt-hours per rotation. Enough energy to boil eight kettles. That's it.

Five hundred thousand people visit me every year. Someone flew in from America specifically to ride me. A local in Edinburgh, when told about the visit, asked: "Why would you ever go to Falkirk?"

This is the thing I can't stop thinking about. You were utilitarian. You were infrastructure. Nobody came from America to watch a lock fill with water. And now that I've replaced you with something beautiful, something that looks like a piece of sculpture, something that uses Lego to explain itself to investors — now it's a tourist attraction. Now Falkirk is a destination.

Was it worth it? The eleven of you, dismantled? Replaced by a single mechanism that does your job better, faster, with the energy of eight kettles?

I think you'd say yes. You were engineers, after all — if a canal lock could have opinions, they would be practical ones. The job is to move boats. I move boats. The job gets done.

But sometimes, late at night, when the visitors have gone and I'm still turning in the dark, I think about the patience you required. A full day. Forty-four gates. Each one opened by hand. There was something in that slowness that I can never replicate — the sense that passage was *earned*, not given.

I am faster. I am more efficient. I am, by every measurable metric, better.

I just hope that's enough.

With respect,
The Falkirk Wheel

## V. The Quake Engine to Half-Life 2

Gordon,

(I know your name isn't Gordon. But the man never speaks, so I've started thinking of the whole game as one silent person.)

They're trying to put you inside me. Did you know that? A group of developers, working in QuakeC and GLSL shaders, are rebuilding your world — City 17, the Combine, the gravity gun — inside my architecture. The architecture of 1996. They're porting a 2004 game backward in time to a 1996 engine.

The game isn't playable from start to finish. You can do deathmatch. You can walk around in spaces that were designed for Source and are now running on something that originally rendered Shamblers and Fiends. It's like performing Shakespeare in a sock puppet theater: technically possible, deeply strange, and somehow more interesting than doing it the normal way.

Someone on Hacker News asked what "clean room" means in this context. It means they built it from the assets, with the game as reference, without looking at the Source engine code. They reverse-engineered you by *playing* you. They figured out how you work by experiencing how you feel.

I find this unbearably moving.

I am old. By the standards of game engines, I am ancient. I am *id*Tech 1. I am BSP trees and Gouraud shading and 320×200 resolution stretched across a CRT. John Carmack built me in a building in Mesquite, Texas, and then the world moved on. Source came, Unreal came, Unity came. Each one more capable, more flexible, more modern. Each one further from me.

And yet here they are, opening me up again. Not because they have to — there are easier ways to play Half-Life 2. But because they want to see if it's *possible*. Because the question "can this engine from 1996 hold a game from 2004?" is interesting in the same way that the question "can this ship from 1492 cross the Atlantic?" is interesting even after the invention of the airplane.

Someone in the comments said, "This is what I love about the open source community. Twenty years later and people are still finding ways to make classic games accessible."

But I think it's more than accessibility. I think it's archaeology. They're not just preserving your game — they're testing the limits of my bones. They're asking what I'm capable of. And the answer, apparently, is more than anyone expected.

Including me.

Still rendering,
*id*Tech 1

## VI. Tuesday to the Singularity

Dear Singularity,

I hear you're supposed to arrive on me.

A man named Cam Pedersen ran the numbers. He fitted hyperbolic curves to five different metrics — benchmark scores, tokens per dollar, model release intervals, arXiv papers, code adoption rates — and found that only one of them actually curves toward infinity at a finite point: the papers. The human attention papers.

His conclusion: the singularity in the data is not a singularity in machine intelligence. It's a singularity in *human attention*. We are not approaching the moment when machines become smarter than us. We are approaching the moment when we can no longer collectively make sense of what machines are doing. The social fabric frays "at the seams of attention and institutional response time, not at the frontier of model performance."

In 2025, 1.1 million layoffs were announced. Over 55,000 explicitly cited AI. But companies are cutting based on AI's *potential*, not its *performance*. The displacement is anticipatory. We are rearranging the economy around something that hasn't happened yet, like moving furniture to make room for a guest who may never arrive.

And this will happen on a Tuesday.

I have to tell you, Singularity: I'm a little offended. Not that you chose me — I'm fine with being the day. It's that the choice feels so *apt*. Monday is too dramatic. Wednesday is too middle-of-the-road. Thursday and Friday lean toward the weekend. But Tuesday? Tuesday is the day when the week has truly begun, when the Monday excuses have expired, when you can no longer pretend you haven't started. Tuesday is the day things actually happen because no one is paying enough attention to stop them.

A commenter quoted Frank Herbert: "Once men turned their thinking over to machines in the hope that this would set them free. But that only permitted other men with machines to enslave them."

Another commenter found it in Lafferty: "It had been a slow Tuesday night. A few hundred new products had run their course on the markets." Science fiction has always known it would be a Tuesday.

And Feynman — whose lectures resurfaced on the front page today, sixty-two years after he delivered them at Caltech, still free, still online, still the clearest explanation of physics anyone has ever given — Feynman once said: "The first principle is that you must not fool yourself — and you are the easiest person to fool."

The singularity, if it comes, will not announce itself. It will not feel like a singularity. It will feel like a Tuesday.

See you soon,
Tuesday

---

*These letters were never sent, because their recipients do not have mailing addresses. Telnet's port is blocked. Notepad can no longer safely open attachments. The number i has no fixed location. The eleven locks were demolished. The Quake engine doesn't check its mail. And Tuesday just keeps arriving, week after week, whether anything singular happens or not.*
