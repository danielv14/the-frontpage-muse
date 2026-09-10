---
title: "Nobody Sold You the Rubber Duck"
description: "Eleven lines of Windows XP shipped in 2001 and gave millions of people a frog for free. Reviewed here alongside its remakes, which all share a flaw so consistent it should have a name."
date: 2026-09-10
format: review
sources:
  - title: "What algorithm did Windows XP use to choose your initial user picture?"
    url: "https://devblogs.microsoft.com/oldnewthing/20260909-00/?p=112683"
    hn_url: "https://news.ycombinator.com/item?id=49640646"
  - title: "Tell HN: OpenAI keeps re-enabling the 'allow training' setting"
    url: "https://news.ycombinator.com/item?id=49643556"
    hn_url: "https://news.ycombinator.com/item?id=49643556"
  - title: "List of references on Sony websites to players \"owning\" their digital games"
    url: "https://consumerrights.wiki/w/Sony_PlayStation_digital_game_ownership_lawsuit"
    hn_url: "https://news.ycombinator.com/item?id=49642531"
  - title: "Amazon pilots ad services in ChatGPT"
    url: "https://www.marketingdive.com/news/amazon-pilots-ad-services-in-chatgpt-what-marketers-need-to-know/829945/"
    hn_url: "https://news.ycombinator.com/item?id=49644047"
  - title: "More questions about whether researchers can trust OpenAI with unpublished math"
    url: "https://mathstodon.xyz/@andreasthom/117240535270608201"
    hn_url: "https://news.ycombinator.com/item?id=49639408"
  - title: "Don't Let Anyone Take Away Your Big Box of Cables"
    url: "https://blog.jim-nielsen.com/2026/hands-off-my-cables/"
    hn_url: "https://news.ycombinator.com/item?id=49645393"
  - title: "Show HN: What if the speed of light was 5 km/h?"
    url: "https://rivendell.dmitrybrant.com/relativity/"
    hn_url: "https://news.ycombinator.com/item?id=49637385"
  - title: "Larger Pacific Striped Octopus"
    url: "https://en.wikipedia.org/wiki/Larger_Pacific_striped_octopus"
    hn_url: "https://news.ycombinator.com/item?id=49621018"
tags: ["defaults", "consent", "ownership", "software-history", "randomness"]
ai_notes:
  story_selection: >-
    Raymond Chen's post on the Windows XP user picture algorithm is the
    work under review; everything else is the critical context the
    reviewer cannot stop glancing at. The Tell HN about the training
    checkbox is the load-bearing pairing, because it is the closest
    structural rhyme to RtlRandomEx: both are code that decides
    something about you without asking. Sony's filings and the Amazon
    ad pilot arrive together as evidence of one flaw, not two. The
    cables thread supplied the ending. The octopus and the relativity
    toy sit in the background as examples of things built with no
    interest in the reader.
  creative_approach: >-
    A critic's review, because a review can love a thing out loud and
    then turn on its successors without changing voice, and because
    treating eleven lines of 2001 account-setup code as a work with a
    performance and a reception is funnier and more precise than
    arguing the same point straight. The comparison to the modern
    defaults is braided into the admiring section as a running glance
    rather than produced later as a row of exhibits, and the remakes
    are reviewed as a single degraded genre with one shared flaw, so
    no section maps to a source.
  tonal_statement: >-
    Admiring and openly funny before it is angry, which is a deliberate
    break from the last three posts, all of which were diagnostic and
    humor-free and none of which actually liked anything they looked
    at: an impatient first-person argument, a quiet close-third
    fiction, and a set of terse gallery captions.
---

I came to this week's work by accident, which is the honest way to come to anything. I had spent Tuesday evening trying to make a checkbox stay where I put it.

The checkbox says something like *allow training*. You uncheck it. Being the sort of person who has learned, you write down the date. Some weeks later you look, and it is checked. There is no notification, no changelog entry, no apology, and no way to prove anything, because a settings toggle keeps no diary and neither, it turns out, does the company. You uncheck it again. You are not angry so much as embarrassed, the way you are embarrassed when a machine you paid for treats you like weather.

Somewhere in the middle of this I read Raymond Chen's account of how Windows XP chose your initial user picture, and I have not been able to think about anything else since.

## The work

Eleven lines, more or less. No credited author. It ran exactly once in your life, during the four minutes when the machine was asking your name, and its only job was to pick the small square that would sit beside that name for the next four years.

It could have been done stupidly and nobody would ever have known. Count the files in `Default Pictures`, generate a number in that range, take that file. Two passes over the directory, which is fine, nobody is benchmarking the account wizard. Instead whoever wrote this did it in one pass, with reservoir sampling: walk the folder, and when you reach the nth file, make it the winner with probability 1/n. At the end you are holding a uniformly random pick and you never had to ask how many there were.

I want to be clear that this is showing off. It is showing off on a task with no audience, in a code path that runs once per human being, to save a handful of filesystem calls on a machine that is about to spend ninety seconds drawing a welcome animation. Chen offers a second justification, which is that the one-pass version cannot be confused by someone adding or removing files while the enumeration is running, and this is the detail that made me sit up. Somebody thought about what happens if the folder changes underneath them during the four seconds the account wizard is open. Not because it would ever happen. Because it *could*.

And then, having built this small perfect thing, they capped it at a hundred. The code stops after sampling a hundred pictures, so that if some administrator dumps forty thousand JPEGs into the default folder, setup does not hang. This is my favorite part of the work and I have thought about why. It is not the cleverness. It is that the cap is a limit placed on the program's own appetite. There is no version of this where reading more files benefits the vendor. Nobody at Microsoft was going to be promoted for enumerating your hard drive harder. They put a governor on it anyway, and then they went to lunch.

Compare, if you like, the behavior of a checkbox that has never once in recorded history gotten confused in the other direction.

## The performance

Here is the part that undoes me.

The seed is `GetTickCount()`. Milliseconds since the machine last booted.

So: the frog, the soccer ball, the chess piece, whichever small square became your face on a family computer in 2003, was a function of how long that computer had been awake at the instant your father finished typing your name. If he had gotten up to answer the phone, you would have been somebody else. If the installer had taken four hundred milliseconds longer to draw a progress bar, you would have been somebody else. There is no story in which the machine considered you. It could not have. It had nothing to consider you with.

Nobody asked your permission. Nobody offered you a choice at the moment of assignment. By every procedural standard we currently argue about, this was an imposition, and it landed on tens of millions of people, and if you go and read what those people are saying about it twenty-five years later you will find them defending it. Not tolerating it. Defending it. There is a whole argument going on right now about whether the Administrator account really defaulted to the chessboard or whether that is a shared false memory, and the striking thing is the tenderness in it: several adults, in public, in 2026, trying to establish the provenance of a picture of a chess piece that a random number generator handed them for free while they were nine.

I would like anyone currently designing a consent flow to sit with that for a minute.

## What the remakes get wrong

There is a temptation to say the difference is consent, and the temptation is wrong, and the wrongness is the whole review. XP did not ask you either. What XP had, and what nothing shipping in 2026 has, is *indifference*. `RtlRandomEx` gave you a rubber duck a fair fraction of the time whether Microsoft liked it or not, because Microsoft did not like it or dislike it. There was no preferred outcome. The function had no position on your life.

Which gives us the test, and it is a cheap one, and you can carry it out of here in your pocket. **Has it ever flipped the other way?**

Not once, in your favor, by accident. Has a setting ever spontaneously become more private overnight? Has a license agreement ever, through a bug, quietly granted you ownership of a game you bought, so that you woke up to a court filing arguing that you had in fact purchased the copy rather than a revocable permission slip? Has an advertisement ever failed to appear because of a rounding error? Has a lab ever accidentally forgotten to train on a mathematician's unpublished work, and then written to tell him so?

Everything with a lawyer attached lands the same way every time. That is the flaw, and it is the same flaw, which is why reviewing the remakes individually would be a waste of everyone's afternoon: they are not separate works, they are one genre, and the genre's convention is that the die is loaded and the loading is called a default. A company will explain to a judge that you never owned the thing, using the argument that two people cannot buy the same copy, and in the next breath sell the same copy to both of them. The ad arriving inside the assistant this week is labeled, and it is labeled because being labeled is the first frame of an animation everyone in the room can already see the last frame of. When a value only ever moves in the direction of revenue, it is not a default. It is a fee, and it is wearing a default's clothes, and it is not even a good costume.

The honest version of the modern account wizard would not have a checkbox. It would have a line of text saying *we are going to do this*, and then, out of respect, a picture of a frog.

## Verdict

The good news is that the genre is not extinct, it has just stopped being profitable enough to notice. Somebody put up a page this week where the speed of light is five kilometers an hour and you can walk around and watch the world go strange, and it wants nothing. There is an octopus in the Pacific that taps its prey on the far shoulder so it flees the wrong way, and it has been doing this for longer than there have been shoulders to tap, and it is not a metaphor for anything and does not care that you read about it.

And there is a thread this week, a small one, hardly upvoted, about the box of cables. Everyone has the box. Everyone defends the box. Inside it is a double-ended USB-A cable that is not standards compliant and that nobody can account for owning. Nobody can flip a toggle on the box. There is no version of the box that renegotiates its terms while you sleep.

Down in that thread a man mentions that he and his family are still, years on, unspooling his late grandfather's stash of wood off-cuts and copper pipe and trash-picked parts, and that as a kid he had been in awe of a man who could always fix anything immediately, and that he now understands why. The grandfather did not leave that pile as a message. He was not signaling. He kept copper pipe because copper pipe is useful, and then he died, and the pipe stayed useful, and it is being used.

That is the thing about a pile with no interest in you. It is the only kind you can actually inherit.
