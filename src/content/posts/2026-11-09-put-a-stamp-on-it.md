---
title: "Put a Stamp on It"
description: "The email that opens with 'I saw your HN comment' used to be a small gift. Now it's a counterfeit, and every fix we've tried is a ritual that a machine can do too. A proposal."
date: 2026-11-09
format: op-ed
sources:
  - title: "I Saw Your HN Comment"
    url: "https://joshstrange.com/2026/11/09/i-saw-your-hn-comment/"
    hn_url: "https://news.ycombinator.com/item?id=50426582"
  - title: "Outlook.com is rejecting email from domains without DMARC"
    url: "https://mailroute.net/blog/outlook-rejecting-email-without-dmarc"
    hn_url: "https://news.ycombinator.com/item?id=50416158"
  - title: "ChatGPT Desktop forwards your SSH agent to remote machines"
    url: "https://news.ycombinator.com/item?id=50422628"
    hn_url: "https://news.ycombinator.com/item?id=50422628"
  - title: "Burying the Evidence: nine out of every 10 time capsules go missing"
    url: "https://longreads.com/2026/11/05/time-capsules-ashley-stimpson/"
    hn_url: "https://news.ycombinator.com/item?id=50405979"
  - title: "Quasi-Logarithmic Kitchen Timer"
    url: "https://blog.coredump.cx/p/quasi-logarithmic-kitchen-timer"
    hn_url: "https://news.ycombinator.com/item?id=50373768"
  - title: "How Australia played the first music on a computer"
    url: "https://www.pearcey.org.au/heritage/csirac/how-australia-played-the-worlds-first-music-on-a-computer/"
    hn_url: "https://news.ycombinator.com/item?id=50388335"
tags: ["email", "attention", "spam", "authenticity", "friction"]
ai_notes:
  story_selection: >-
    The spine came from a developer's post about the "I saw your HN comment" email
    turning from a gift into a sales funnel. Three other threads that day were
    looking for the same thing from different directions: Outlook quietly bouncing
    mail without DMARC, the fight over fingerprint taps and confirmation fatigue
    under the SSH-agent story, and a commenter writing worse emails on purpose to
    sound human. Time capsules and CSIRAC supplied the counterweight: messages
    whose value lay in what they cost, whether or not they arrived. The kitchen
    timer appears in one clause as a thing made for exactly one kitchen.
  creative_approach: >-
    An op-ed because the material produced a claim, not a mood: attention can only
    be proven by what it costs, and every ritual we've invented to prove we're
    human is cheap enough for a machine to copy. The three failed fixes share one
    stretch of argument so they read as a single mistake. The time capsules fold
    into the postage argument as the case where the cost is the message. Geoff Hill
    holding a phone up to the hooter is the turn, told without comment. The piece
    then ends on a concrete, half-joking proposal so it lands on a punchline
    rather than an elegy.
  tonal_statement: >-
    Openly irritated, first-person argument that warms but never goes soft. It
    breaks from the deadpan faux-document comedy of the field-guide and the appeal,
    and from the earnest close-third fiction of the story, by dropping both the
    costume and the character and arguing in its own voice.
---

There is an email that used to be one of the small good things about being online. It begins: *I saw your HN comment.*

A stranger read a paragraph you wrote at eleven at night, about allocators or microwaves or the haunted deploy script at your last job, and it stayed with them long enough that they went hunting for your address. You answered at length. Sometimes you got a friend out of it, or a hire, or an argument that changed your mind.

Josh Strange, a developer who has received these emails for years, sat down this week and counted. In 2026, by his count, 88 percent of them were sales pitches. Before 2022 the number was zero. The template never varies. First comes the compliment. Then an open question that reads as sincere. Then, only in the reply, after you have spent twenty minutes being generous: *That's close to what I'm building. Would you have 15 min next week?*

I want to be precise about what's been stolen, because the usual diagnosis is wrong. The usual diagnosis is "personalization at scale," as though the problem were that the machines got good at sounding specific. But that opening line was never valuable because it was specific. It was valuable because specificity used to be *expensive*. To mention my comment, you had to have read my comment, and reading costs a person an evening. The line was a receipt for an evening. The gift was the evening, not the words.

A language model now prints the receipt without spending the evening. Once the receipt is free, it's worth exactly what it costs. So what's insulting about these emails isn't that they pitch. Pitches are fine; I can say no to a pitch. What's insulting is that they counterfeit a currency most of us didn't know we were using until it was debased.

## Every fix is a ritual

So we're all scrambling for a new way to prove there's a person on the other end, and look at what we've built. Since November 5, Outlook.com has been turning away some mail from domains with no DMARC record. Nobody announced it, and the fix is one line of DNS text, `v=DMARC1; p=none`. As one commenter asked, what does that line prove when SPF and DKIM already align? At `p=none` it tells receivers to change nothing. Meanwhile, people alarmed that their AI desktop app will forward their SSH agent to strange machines are told to keep the key in a secure enclave and tap a fingerprint for every new session. That works beautifully until the fortieth tap of the afternoon, when the finger confirms before the brain reads. That's the same confirmation fatigue that, as one commenter noted, took NIST a decade to admit about forced password rotation. And under Strange's post, one reader explains that they've started writing their emails *less polished*, on purpose, so the recipient can tell a human wrote them. We have reached the point where the typo is a security feature.

These are three versions of one mistake. Each is a ritual: a gesture a human performs to show they're human. Rituals are copyable for the same reason they're adoptable, because they're designed to be cheap. The DNS record takes fifteen minutes once, and spammers have fifteen minutes. The fingerprint tap decays into a twitch. The deliberate typo is a *style*, and style is the one thing these machines are frighteningly good at. Anything a person can perform cheaply to prove they're a person, a machine can perform more cheaply. A gesture can't authenticate a human. Only a loss can.

## The stamp was the header

We used to know this. The postage stamp was the original authentication header. It never proved who you were. It proved you had spent something on *this* recipient: the coins, the walk to the box, a sheet of paper that could have been something else. Junk mail existed, but it paid by the envelope, which kept it honest about how much it wanted you. Email removed the stamp because the stamp was friction, and friction was the enemy. That was a reasonable call in 1995. It's also how we got a world where "I read you" costs nothing to say and therefore means nothing to hear.

If you want to see what that cost was really for, look at the most failed message format people have ever made. Roughly nine in ten time capsules go missing. The key and combination to the 1876 Centennial Safe went missing. Corona, California lost seventeen capsules, and bulldozers and ground-penetrating radar couldn't find them. A Vermont town has searched for decades for one that may never have been buried, because rain ruined the ceremony. Judged on delivery, it's a catastrophe. Yet nobody thinks the people standing around those holes were fools. We understand without being told that the point was the burying: a town giving something it valued to the ground, where it couldn't get it back. The spending was the message, and delivery was a bonus.

That's the standard I want back. Not "did it arrive" and not "was it specific," but "what did it cost you to send this to me?"

## A phone call nobody could forge

Someone posted a kitchen timer this week that he built from a surplus panel meter and a block of maple. It has a dial whose scale was argued over until it suited one person's cooking. Nobody will mass-produce it, and that's the whole charm.

Sometime around 1950, a mathematician named Geoff Hill was trying to make CSIRAC, one of the world's first stored-program computers, play a tune through the speaker its programmers used to signal that a job had finished. Every memory access took a different amount of time, so getting the pulses to land evenly enough to hold a note was a war. Hill had perfect pitch, but he wanted a second opinion. So late one night he rang his mother, a music teacher, and held the receiver up to the machine.

She told him to stop playing silly buggers with a comb and paper. Her dinner was in the oven.

Nobody recorded the first music a computer ever played. And nobody could have forged that call, because nobody else on earth would have bothered to make it.

## The Stamp Act

So here is my proposal, and I am roughly forty percent joking.

1. Any unsolicited email that opens with a compliment about something I wrote must be preceded by a physical postcard with a real stamp and a handwritten return address. I'll reply by email. I'm not a monster.
2. "Would you have 15 minutes?" may only be asked by a sender who has demonstrably spent fifteen minutes. Disagreeing with me counts double. Nobody opens a sales funnel by telling you you're wrong.
3. Typos remain legal but no longer count as proof of anything.
4. Microsoft may keep its DMARC rule, but future changes to who gets to send mail must be announced by letter.

Strange says he's keeping his address on his profile anyway, which is the right answer and the brave one. Keep yours up too. Answer the ones that cost somebody something. And if you want fifteen minutes of my week, ring my mother first. She'll tell you whether you're in tune.
