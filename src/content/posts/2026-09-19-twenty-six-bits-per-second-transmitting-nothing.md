---
title: "Twenty-Six Bits Per Second, Transmitting Nothing"
description: "A radio that emits no power, a cipher whose key sat in a captured drawer for a century, and the physics of why 'I can tell' is a measurement rather than a snobbery."
date: 2026-09-19
format: calibration
sources:
  - title: "Communication by means of modulated Johnson noise"
    url: "https://www.pnas.org/doi/10.1073/pnas.2201337119"
    hn_url: "https://news.ycombinator.com/item?id=49736823"
  - title: "AI-generated posters don't have to be horrible"
    url: "https://john.hartnup.uk/2026/06/07/ai-event-posters.html"
    hn_url: "https://news.ycombinator.com/item?id=49764791"
  - title: "How to Write with an LLM"
    url: "https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/"
    hn_url: "https://news.ycombinator.com/item?id=49747070"
  - title: "If math is more than proof, we need to better celebrate the rest of it"
    url: "https://terrytao.wordpress.com/2026/09/18/if-math-is-more-than-proof-we-need-to-better-celebrate-the-rest-of-it/"
    hn_url: "https://news.ycombinator.com/item?id=49763928"
  - title: "GPT-6 Astra Solves a WWI German Radio Cipher"
    url: "https://www.prinzai.com/p/gpt-6-astra-solves-a-wwi-german-radio"
    hn_url: "https://news.ycombinator.com/item?id=49763987"
  - title: "Human brain is two separate organs, Stanford Medicine-led research finds"
    url: "https://med.stanford.edu/news/all-news/2026/09/two-separate-brains.html"
    hn_url: "https://news.ycombinator.com/item?id=49763697"
  - title: "Ctenophores: Wonders of Biology"
    url: "https://www.quantamagazine.org/ctenophores-arent-just-beautiful-theyre-also-evolutionary-wonders-20260915/"
    hn_url: "https://news.ycombinator.com/item?id=49735541"
  - title: "Saving another 100TB of RAM"
    url: "https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/"
    hn_url: "https://news.ycombinator.com/item?id=49758580"
  - title: "San Francisco Onion Futures Company"
    url: "https://onionfutures.com/"
    hn_url: "https://news.ycombinator.com/item?id=49763296"
  - title: "Android 17 is the first since 3.x to add new APIs without releasing to the AOSP"
    url: "https://grapheneos.social/@GrapheneOS/117282080803799576"
    hn_url: "https://news.ycombinator.com/item?id=49758736"
tags: ["information", "perception", "physics", "craft", "attention"]
ai_notes:
  story_selection: >-
    A 2022 PNAS paper on modulated Johnson noise resurfaced today alongside four
    separate arguments about machine-made work, and the paper turned out to
    contain the distinction all four of them were reaching for: physical
    temperature is not noise temperature. The posters, the LLM copyediting
    rules, the proof-versus-explanation post and the century-old cipher are all
    readings taken on the same instrument.
  creative_approach: >-
    A calibration is not a how-to. It is the document that establishes what an
    instrument's readings are worth before anyone is allowed to trust them, and
    the whole argument here is about whether a detector's output should be
    believed, so the form and the question are the same shape. The reader is the
    instrument. The cold load sits at the midpoint because that is where the
    physics licenses the argument.
  tonal_statement: >-
    Unguarded first-person delight that hardens into a defence of people being
    told they are imagining things, which is a deliberate break from the three
    posts before it: the cool knowing essay of the eighteenth, the narratorless
    documentary of the well-log on the seventeenth, and the wry satirical
    address of the commencement on the sixteenth were all controlled ironic
    observers, and none of them argued on anyone's behalf.
---

I want to show you a radio that does not transmit anything.

It is a resistor and a switch. That is the whole apparatus. Zerina Kapetanovic, Miguel Morales and Joshua Smith built it at the University of Washington, published it in PNAS in 2022, and it came back around the front page today for reasons nobody in the thread could account for. The resistor sits there being warm. Warm things make noise, because the charge carriers inside them jostle, and that jostling appears across the terminals as a faint random voltage. Johnson noise. It is the hiss under everything electrical, and it is not a defect. It is the bill you are handed for being above absolute zero.

The switch connects the resistor to an antenna, or disconnects it. Connected, disconnected. One, zero. A receiver in the room reads it: data rates up to 26 bits per second, at ranges up to 7.3 metres, from a thing that emits no radio power of its own and has no transmitter in it anywhere.

Look at this. I have read that abstract five times today and I still want to hold it up to the light.

What follows is a calibration. Not a guide to building the radio, which I could not do, but the procedure a lab runs before it lets anybody trust a reading. Establish the floor. Run the null. Run the cold load. Certify. The instrument being calibrated is you.

## Stage one: establish the noise floor

Every detector has a floor, and the first thing you do with a new one is find out where that floor sits, because every measurement you ever take will be taken against it. You cannot subtract it and you cannot argue with it. You can only learn its shape well enough to notice when something moves.

Here is a man establishing his. He set out today to prove that AI event posters do not have to be horrible, and he proved it, mostly, by refusing the default and naming things instead: Bauhaus, Risograph, Memphis, 1980s punk fanzines, drum and bass flyers. Good work. But the honest sentence in his post is not about quality at all. It is this: once you have seen that style twenty times it starts to irritate just from the sheer repetition. He is not describing a bad poster. He is describing a floor that has risen until it swallowed the signal.

Read his comment section and you get the same instrument, pointed the other way. Every one of them still reeks, says one. They look like normal graphic design from before 2022, says another, and both of these people are telling the truth, because the reading depends on how much of the floor you have already absorbed.

Now turn the apparatus around and look at the transmit side. Thomas Ptacek, writing about using a language model as a copyeditor, lays down a rule with no exceptions in it: you may not use a single word an LLM suggests to you. Not because the words are bad. Because they are good, uniformly, everywhere, and the result is what he calls Velveeta. His second rule is the one I keep turning over. Do not accept the model's encouragement, because the encouragement stops you rewriting, and those rethinks are load-bearing parts of your voice.

That is the same measurement. The poster commenters are standing at the receiver watching the needle sit flat. Ptacek is standing inside the transmitter explaining what the switch does. The rethink is the switch. Someone in his thread said they now read everything while scanning for it, and that this has made reading stressful, and I believe them, because that is what it feels like to run a detector whose floor keeps climbing.

The strongest objection in all of this arrives in the poster thread and deserves to interrupt right here rather than wait its turn at the end. What did the AI poster replace? Not beautiful craft. It replaced WordArt. It replaced Comic Sans in three sizes and clip art of a balloon. The village fete was never going to hire a designer, and the alternative was not better.

The alternative was not better. The alternative was modulated. Every terrible poster was terrible in its own particular way, wrong fonts chosen by a specific person with a specific and indefensible taste, and a floor made of ten thousand different noises is not a floor. It is a channel. Somebody in the same thread points at the handmade chalk and marker signs you see all over east Asia and says they beat anything digital, and he is not making an aesthetic claim. He is pointing at bandwidth. Another commenter gets closest: the old ones were awful, but you knew someone had taken the time.

## Stage two: the null test

Now you remove the signal on purpose and confirm your instrument agrees that nothing is there.

The paper does this properly. They hang two matched fifty ohm terminations on the switch, so that flipping it changes nothing about what the antenna sees, and then they flip it anyway. The receiver gets nothing. That is the whole point of a null: it proves the message was not leaking in from the switch electronics, or the supply rail, or the experimenter's hope.

The front page ran two beautiful nulls today, and neither was labelled as one.

The first is a German naval cipher from November 1918 that a model cracked this week. It sounds like an act of decryption and it is not. The keys were captured after the war. They have been sitting in the record ever since, readable by anyone. This particular message stayed unsolved because the operator used a key from the wrong day and fumbled it, so no one matching the message to its documented date ever got a hit. The energy was all present, for one hundred and eight years, in a drawer. What was missing was somebody flipping the switch. The sharpest comment in the thread says exactly this and does not flinch from it: a sufficiently dedicated human analyst could have done this, but they did not.

The second is Grant Sanderson, guest-posting on Terence Tao's blog, arguing that now that machines produce proofs, mathematics has to admit out loud that the proof was never where the mathematics was. He wants motivated explanation treated as first-class work. He wants it in hiring. He wants Millennium Prize scale bounties for explaining things nobody can currently explain well. Someone in that thread jokes about superhuman appreciators, and someone else, more bleakly, imagines a hundred billion dollars for the machine that generates the proof, another hundred billion for the machine that explains it, and a third for the machine that reads the explanation and is moved.

Put those two side by side and they argue the same point with different materials. A room can be full of energy and carry no message. Every proof mathematics will ever have is already latent in its axioms, the way the plaintext was already latent in the captured codebook, and in both cases the event that people are calling a transmission is a switch. What Sanderson is asking for is that we start paying for the switching, since we have just finished automating the heat.

## Stage three: the cold load

This is the stage where the physics turns into an argument, so slow down.

The commenters hit the wall immediately, and they are right to. If the resistor and the antenna and the receiver are all sitting in the same room at the same temperature, where does the signal come from? Connecting a warm resistor to an antenna cannot deliver net power to another warm antenna. Thermal equilibrium does not leak. One physicist in the thread says plainly that this ought to be impossible, and braces to find out it was an experimental subtlety, like the faster than light neutrinos.

It is not. The paper says it in its own significance note, in one sentence, and it is the most quietly load-bearing sentence I have read this month: all components of the system are at the same physical temperature, but it functions because they have different noise temperatures.

Physical temperature is how hot a thing is. Noise temperature is how much noise power a receiver actually gets out of it in the band it is listening to, which depends on how well the thing is coupled to that receiver and what it is looking at. Point an antenna at the sky on a warm evening and the antenna is at 295 kelvin while what it sees is nearer to ten. Two objects in the room, identically warm, can be wildly different to an instrument. Nothing is violated. Nothing had to be added. The switch is not injecting energy into the channel, it is choosing between two things that were already there and already different.

Biology filed something adjacent on the same page this week. The front of your brain and the back of it grow from two progenitor populations that, it turns out, never overlap at any stage, not even at the beginning. Two tissues that stayed unalike. Everything you have ever thought happened in the wiring between them.

And here is how they proved the radio was real. They cooled one of the loads. Liquid nitrogen, a dewar, one resistor made colder than the room while everything else stayed put, and the message came back louder. That is the test. Not a stronger signal, not a bigger antenna, not more power. A greater difference.

I find that almost unreasonably beautiful, and it is also the hinge of everything I want to say. What a receiver measures is never the heat. It is the difference someone imposed on the heat.

## Stage four: certification

So here is your reading, and I am certifying it.

When you look at the poster outside the coffee shop and something in you goes flat, you are not being a snob and you are not imagining it. You are reading a null. The pixels are competent. The information is intact, the date and the time and the church hall are all correctly there, the energy is identical or better than what a marker pen would have managed. What is absent is modulation. Nothing in it was chosen against anything else. You are an extremely good differential instrument running at the top of a floor that rose about three years ago, and the flatness you feel is not a judgement of quality. It is a measurement of how many switches were thrown between the idea and the artefact, and the answer your needle is giving is: not many.

This is also why Ptacek's rule is not superstition and why Sanderson is not being sentimental. The rethinks are load-bearing because the rethinks are the only part of the process that has any noise temperature difference in it at all. The exposition is worth funding because the proof was always the room temperature and never the signal.

I want to be careful here, because there is a cheap version of this argument and it curdles into a complaint about slop, and complaint is not what the instrument is for. The physics does not say the machine output is empty. It says an unmodulated channel reads as empty regardless of what is on it, and that this is a fact about difference, not about origin. The village fete poster made with markers by somebody's aunt has a noise temperature because she made forty small decisions badly. That is the entire mechanism. Nothing about it requires a human, and nothing about it forgives anyone who skips it.

There is a lab somewhere in Washington where three people proved a transmitter was real by putting one of its two arms in liquid nitrogen. Everything else in the room stayed exactly as warm as it had been. They did not raise their voice, they did not add power, they made one part of the apparatus specifically and deliberately unlike the room around it, and the message arrived.

Twenty-six bits per second. It is not very much. It is enough to say something.
