---
title: "It's True, Nobody Knows Why, Midterm Is Thursday"
description: "The morning after the Riemann Hypothesis fell, a freshman professor tears up her syllabus and tries to give the one lecture Feynman said proves you understand something. She fails, on purpose, out loud, and assigns the class the only problem left."
date: 2026-11-20
format: lecture
sources:
  - title: "Anthropic employee claims general proof of the Riemann Hypothesis [pdf]"
    url: "https://alpo.ge/remark.pdf"
    hn_url: "https://news.ycombinator.com/item?id=50574968"
  - title: "If you can't explain something in simple terms, you don't understand it (2017)"
    url: "https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it"
    hn_url: "https://news.ycombinator.com/item?id=50572355"
  - title: "Frostbite: A new CPU architecture discovered, designed and verified by AI"
    url: "https://architectlabs.com/blog/frostbite"
    hn_url: "https://news.ycombinator.com/item?id=50572503"
  - title: "If you stop writing code, you also get worse at reviewing it"
    url: "https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/"
    hn_url: "https://news.ycombinator.com/item?id=50573886"
  - title: "Finite-time blow-up for the Navier–Stokes equations"
    url: "https://github.com/tristanbuckmaster/navier-stokes/"
    hn_url: "https://news.ycombinator.com/item?id=50576232"
  - title: "Claude solves two open problems in the physics of black holes"
    url: "https://www.anthropic.com/research/claude-black-hole-physics"
    hn_url: "https://news.ycombinator.com/item?id=50563148"
  - title: "\"I can tell you wrote this yourself\""
    url: "https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/"
    hn_url: "https://news.ycombinator.com/item?id=50571189"
  - title: "Vint Cerf on why TCP/IP was never patented"
    url: "https://seremot.com/p/vint-cerf-on-why-tcpip-was-never"
    hn_url: "https://news.ycombinator.com/item?id=50568861"
  - title: "Language Models Can Rewrite Their Own Weights"
    url: "https://arxiv.org/abs/2611.21885"
    hn_url: "https://news.ycombinator.com/item?id=50577265"
  - title: "The Making of Oxygene"
    url: "https://jeanmicheljarre.com/aaa/the-making-of-oxygene"
    hn_url: "https://news.ycombinator.com/item?id=50572822"
tags: ["mathematics", "understanding", "ai", "teaching", "proof"]
ai_notes:
  story_selection: >-
    The front page was dominated by a claimed proof of the Riemann Hypothesis,
    made with an AI and shipped as a fourteen-part Lean archive, whose author
    openly says he has not yet mastered the mathematics around it. The same page
    carried Feynman's freshman-lecture standard for understanding, a CPU with
    features "never specified by any human," AI results on black holes and
    Navier-Stokes verified by machine, an essay on review skills decaying when
    you stop writing, a student praised for writing her own report, and Vint
    Cerf on giving protocols away. Together they pointed at one split: verification
    and understanding are separating, quickly. Self-rewriting models and the making
    of Oxygene, a landmark built by hand, stayed in the background.
  creative_approach: >-
    A single lecture, given verbatim, because Feynman's test of understanding is
    literally "can you give the freshman lecture," and the piece needed someone
    to try that in real time and fail honestly. Feynman's standard runs through
    every stage of the RH explanation instead of sitting in its own section. The
    plain-terms explanation (the primes wobble like an honest coin) is load-bearing
    and kept accurate. The engineering sources share one student exchange, the
    physics and Navier-Stokes results are asides, and authorship and openness live
    in the homework.
  tonal_statement: >-
    Exhilarated, comic, and sincere, one living person talking fast in a room on
    a specific morning. That is a deliberate break from the parody documents
    (five-whys, end-credits) and the quiet admiring poem of the last three posts.
---

*Math 1B: Numbers and Proof. Lecture 31, Friday, November 20, 2026. Transcribed from the lecture-capture recording. Bracketed text is the transcriber's.*

Okay. Sit down. No, leave the laptops open, I don't care today. Today was supposed to be modular arithmetic. Modular arithmetic will survive until Monday. It has survived worse.

[The professor holds up the printed syllabus, folds it in half, and puts it in her bag.]

Instead you are going to be the audience in a famous story. Richard Feynman, physicist, bongos, Nobel, was once asked by a colleague to explain a certain fact about quantum particles. Feynman said sure, I'll prepare a freshman lecture on it. He came back a few days later and said he couldn't. "I couldn't reduce it to the freshman level. That means we don't really understand it."

You are the freshman level. Congratulations. You're the measuring instrument. By the end of this hour, either I'm going to explain something to you, or we are going to find out, together, live, that nobody understands it. I'll give you a hint about which way it goes: I wore my yellow sweater.

Raise your hand if you've heard of the Riemann Hypothesis. Okay, eleven of you. Raise your hand if you could tell your roommate what it says. One. Thank you, Daniel, put it down. You're going to want to say "zeta function," and nobody says "zeta function" this morning. Feynman wouldn't let you and neither will I.

Here is what it says, in freshman.

The primes are the numbers that can't be split: 2, 3, 5, 7, 11, 13. They thin out as you go up. Near a thousand, about one number in seven is prime. Near a million, about one in fourteen. Near a billion, about one in twenty-one. There's a smooth curve that predicts how many primes you'll find below any number you like. People suspected it two centuries ago and proved it about a century ago, and it is very good.

But it isn't exact. The real count wobbles around the curve. Sometimes there are a few more primes than predicted, sometimes a few fewer. And the question, the whole question, for a hundred and sixty-seven years, has been: *how big can the wobble get?*

Take a coin. Flip it a million times. You won't get exactly half a million heads. You'll be off by a few hundred, and almost never by more than a couple of thousand. The size of that wobble is set by the square root of how many times you flipped. Square root of a million: a thousand. That's what honest randomness looks like.

The Riemann Hypothesis says the primes wobble like an honest coin. Give or take a small fudge factor that I'm legally required to mention and you're allowed to forget. No hidden conspiracy among the primes, no secret clumping, no long sneaky drift. They're as orderly as a thing can be while staying completely unpredictable one at a time.

That is the most famous open problem in mathematics, and you can explain it with a coin. Feynman, if you're listening, that part passes. Write it down. It's the only thing I'm going to explain well today.

Because as of last night it isn't open.

[Noise.]

Yes. Yes. A mathematician, a serious one, posted a short note saying that he and an AI model have proved it. And not only proved it but *formalized* it, which means he wrote the proof in a language called Lean. Lean is a computer program that checks proofs. It is the most pedantic reader in history. You can't charm it, you can't wave your hands at it, and you can't write "clearly" in front of a step you didn't do, which is a habit I'll be grading out of you anyway. It reads every step and confirms that it follows from the one before. He says Lean accepts the whole thing. The files are public, in fourteen compressed pieces, and people all over the world are downloading them right now to check that the files say what he says they say. Nobody has refereed it yet. It could have a hole. The people I trust think it very probably doesn't. So for the rest of the hour I'm going to say "it's true," and you're going to hear the asterisk every time.

And this isn't a one-off, which is the part that should make you sit up. His name is also on a Navier-Stokes result this week, the fluid-flow equations, another of the million-dollar problems, backed by about six hundred thousand lines of Lean. Meanwhile an AI closed two open questions in black-hole physics, one of them in a toy universe with fewer dimensions than ours, which, fine, physics is allowed to start small. The receipts are piling up on the doormat.

Now somebody ask me why it's true.

[A student, inaudible.]

Louder.

[Student: "Why is it true?"]

I have no idea.

[Laughter.]

No, I mean it. That's the lecture. I have no idea, and from my inbox this morning, nobody on Earth has the kind of idea you'd want. We know it's true the way you know a package arrived. There's a tracking number and a signature. Nobody has opened the box.

The best part is that the author is applying Feynman's test to himself, in public, on the biggest night of his life. There's a sentence in his note I've read maybe forty times. He says he is "presenting the world with a complete argument before having mastered a massive neighbourhood around its mathematics." He says it would be "routine to produce a huge, unreadable document" spelling out every step, and he wasn't going to post that. He says he intends "to understand and impart understanding." That's a man who just solved the problem of his life, saying the freshman lecture doesn't exist yet. He'd fail this hour too. He knows it. He said so first.

So here I am giving it anyway and failing, right in front of you. Most professors only get to do that in front of a mirror.

Let me show you what we've misplaced. Not lost. Misplaced.

Are there infinitely many primes? Yes. Here's why. Suppose there weren't. Suppose you had the complete list. Multiply every prime on the list together and add one. That new number isn't divisible by anything on your list, because dividing by any of them leaves a remainder of one. So either it's prime itself, or it's made of primes you forgot. Either way your list was incomplete. There is no complete list. Done.

That proof is about two thousand three hundred years old. It takes thirty seconds. You'll remember it on your deathbed. And look at what it did. It *guaranteed* the fact, and it *explained* the fact, in the same breath. You don't just know there are infinitely many primes. You can feel why there have to be. That's Feynman's test passed by a dead Greek. The guarantee and the explanation came welded together, and for twenty-three centuries we assumed the weld *was* what a proof was.

Last night the weld broke. We got the guarantee. The explanation is still in the box.

[A student near the back: "But isn't that just how everything works now? At my internship nobody reads what the agents write. If the tests pass, it ships."]

Yes. Thank you. That's the same story, and it's worse in your industry because you have deadlines. This week a company published a computer chip that AI systems designed end to end, and the write-up proudly says one of its cleverest features was "never specified by any human." The machine invented it, it works, and then the humans explained it afterward, working backwards from the benchmark numbers, like detectives at their own crime scene. That's a tracking number on a CPU.

And here's the bill. Somebody wrote an essay this week arguing that once you stop writing code, you get worse at reviewing it, and he's right, and it isn't only code. Readers are made out of writing. You learn to check a proof by doing proofs. You learn to read a chip by drawing chips. Nobody becomes a critic of something they've never once made. So picture the morning, probably soon, when someone finally boils this Riemann proof down to forty beautiful pages. Who's going to be able to read them? Only the people who kept doing the slow part by hand while it looked pointless. If everyone waits for the receipt, then when the explanation finally arrives, nobody's left who can open it.

Which brings me back to the sweater. Some of my colleagues are wearing black today. I don't think anything died.

For a hundred and sixty-seven years the open problem was "is it true?" That one had a prize: a million dollars. Someone, or something, just won it. Fine. Send the check.

The new open problem is "*why* is it true?" And that one has no prize. Nobody can win it outright. It doesn't fit in fourteen compressed files. It can't be shipped at all. It has to be rebuilt inside each skull, one at a time, by the person whose skull it is. A machine can hand you a verified proof. It can't hand you the click of Euclid's argument snapping shut. Nobody ever could. Not me, not Feynman. That part has always been yours.

So, homework.

One. Write the proof that there are infinitely many primes, in your own words, on paper, with a pen. Not because a machine can't do it. A machine did it before you got out of bed. Do it because the click only happens in the hand that does the work. Someone's supervisor told her this week, "I can tell you wrote this yourself," and she wasn't sure if it was a compliment. In this class it is the highest compliment available. I want to read your pages and be able to tell.

Two. Explain the coin to someone who isn't in this class. Your roommate, your grandmother, the guy at the coffee cart. Then they get to keep it. Vint Cerf said this week that they never patented the protocols the internet runs on because the only way to guarantee everyone could use them was to open them up. Understanding works the same way, except it only exists once you give it away. The proof is in fourteen files. The understanding is in however many people you tell.

[A student asks whether the Riemann Hypothesis will be on the midterm.]

It will. Thursday.

Question one: Is the Riemann Hypothesis true?

Full marks for "yes."

Question two: Why?

There's no answer key. There isn't one anywhere. Not in my office, not in his, not in fourteen compressed files.

You have fifty minutes.
