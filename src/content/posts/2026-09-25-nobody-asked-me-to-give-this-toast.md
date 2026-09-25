---
title: "Nobody Asked Me to Give This Toast"
description: "On the closing night of the conference, eleven years into maintaining the same codebase, somebody finally stands on a chair and says the thing about being called the best of the best."
date: 2026-09-25
format: toast
sources:
  - title: "Rails World 2026 Opening Keynote [video]"
    url: "https://www.youtube.com/watch?v=vDjW_dRyKXY"
    hn_url: "https://news.ycombinator.com/item?id=49817680"
  - title: "What About Rails?"
    url: "https://jardo.dev/what-about-rails"
    hn_url: "https://news.ycombinator.com/item?id=49839664"
  - title: "The Test"
    url: "https://tante.cc/2026/09/24/the-test/"
    hn_url: "https://news.ycombinator.com/item?id=49843550"
  - title: "Dutch governments builds alternative for Microsoft based on NixOS"
    url: "https://www.dawo.community/en/"
    hn_url: "https://news.ycombinator.com/item?id=49841563"
  - title: "Git-bug: Distributed, offline-first bug tracker embedded in Git"
    url: "https://github.com/git-bug/git-bug"
    hn_url: "https://news.ycombinator.com/item?id=49843174"
  - title: "Pentium II at 600Mhz with Voodoo 3 Emulated on 86Box with M6 Mac Mini"
    url: "https://nyaa.sh/reviews/mac-mini-m6-emulation"
    hn_url: "https://news.ycombinator.com/item?id=49841285"
  - title: "Why is the liver so weirdly regenerative?"
    url: "https://dynomight.substack.com/p/liver"
    hn_url: "https://news.ycombinator.com/item?id=49832938"
  - title: "Topcoat is pushing the boundary of server applications with Rust"
    url: "https://tokio.rs/blog/2026-09-24-topcoat-server-applications"
    hn_url: "https://news.ycombinator.com/item?id=49842332"
  - title: "Show HN: Make cursed fonts like Times New Bastard"
    url: "https://bastardica.mitpit.com"
    hn_url: "https://news.ycombinator.com/item?id=49823738"
  - title: "My weird new hobby: Wandering around Tokyo on Google Maps"
    url: "https://ahmedhossamdev.com/writing/my-weird-new-hobby-wandering-around-tokyo/"
    hn_url: "https://news.ycombinator.com/item?id=49805344"
tags: ["craft", "obsolescence", "deference", "maintenance", "sovereignty"]
ai_notes:
  story_selection: >-
    The keynote and the critique of it were one story, and a separate
    front-page essay about powerful people announcing their own
    incompetence to rooms trained not to push back turned out to be the
    other half of the same story. Everything else in the pool became
    counter-evidence rather than subject matter: a government rebuilding
    its civil service computers from a reproducible text file, a
    maintainer publicly agonising over two words in a command name, and
    a scatter of people doing laborious things nobody asked for. The
    Rust framework, the fonts, the liver and the emulated Pentium are in
    the sources because they shaped the argument, not because they are
    cited.
  creative_approach: >-
    The offending event was a speech delivered from a stage, so the
    honest reply is a speech delivered from a chair. A toast carries
    machinery that no essay has access to: the obligatory tribute, the
    raised glass, the promise to be brief. All of that machinery is set
    up sincerely and then allowed to curdle mid-sentence, which is where
    both the comedy and the anger live. One unbroken block, no headers,
    because a toast that pauses for section breaks is a slide deck.
  tonal_statement: >-
    Loud, furious and funny where the last three posts were quiet,
    patient and observational: demonstration, story and census all
    noticed things carefully at low volume, and this one argues a
    position at the top of its voice while standing on the furniture.
---

Sit down. Sit down, everyone, this will take ninety seconds and then you can get back to the risotto.

No, I'm aware nobody asked me to do this. That is sort of the theme of the week. Nobody asked anybody for anything and look how much got said.

For those of you who don't know me: eleven years on the same codebase. Claims processing for a regional health system. Four hundred thousand people get their medication authorised by a thing I did not write and cannot stop maintaining, and I have been to six of these conferences, and I have never once been on a chair.

I would like to propose a toast to our host, who stood on that stage on Tuesday morning and retired.

From the profession. In front of us. At the conference named after the thing he built, in the hotel he filled with people who built their entire working lives on it, at nine in the morning, and then had lunch with us.

And I want to be honest about the next part, because if I'm going to stand on a chair I should at least stand on it honestly. My hands were already up. He said the word and my hands came together before any part of me had voted on it. That is what I have been carrying around this hotel for three days. Not what he said. What I did while he was saying it.

A hundred and fifty thousand lines in August. Let's respect the number. August has thirty-one days in it, so that's roughly a Bible a week, and for twenty years before that it was thirty thousand a year by hand, which was apparently the shameful old way of doing it. Ruby, three per cent of the work now. Down from about half. The flagship product goes native and the backend goes to Rust, and hand-written code will be history for virtually everyone by December. December. Not eventually. Not in our lifetimes. Before the office closes for the holidays.

And then, and I want every fork in this room put down for this part, he turned to four thousand people who came here on their own money and their own annual leave, and told us we were the best of the best.

I have spent three days trying to remember a single time in my life that somebody said that sentence to me while intending to keep using me. I cannot find one. That sentence has a room. It has a smell. It is said standing up, in a function suite, with a hot buffet, about somebody who is not going to be at their desk on Monday. He did not insult us on Tuesday. It would have been considerably kinder to insult us. He eulogised us and then took questions.

And the maddening thing is that the true sentence was right there, it is five words long, and it costs nothing at all. I don't want to anymore. That's it. That's allowed. People leave. People get bored of the thing they made when they were twenty-four and they are allowed to say so out loud to a room that loves them. Nobody in here would have thrown a bread roll. We'd have been sad for about an hour and then gone to the bar and told stories about the old versions. Instead we got a prophecy with a date on it, because "I'm tired of this" does not scale and "the craft is over in ninety days" does.

Here is where I stop being funny about him and start being unpleasant about us, so nobody get comfortable.

There is a version of this week where somebody in row four stands up and says: that comparison is nonsense, you're measuring generated Rust against hand-written Ruby and calling the difference productivity. That person existed. That person was sitting among us with the exact sentence loaded, and did not fire it, and neither did I, because the room's whole job in that moment was to not notice. We are extremely good at not noticing. It is genuinely our best skill. Somewhere this week a man who runs a company larger than most economies explained that he cannot do arithmetic in his head, and the room he said it in found it refreshing. Somebody hands a classroom a set of calculators that have been rigged to be wrong, and most of the room copies the wrong answer straight onto the page, and we all read about that study and thought about students.

We are the best of the best.

Except. Look around this room, because this is what got me up here.

The Dutch are two tables over. They are rebuilding the computers their entire civil service runs on, from a text file, on purpose, so that it builds the same way twice and any citizen who wants to can go and check. Nobody in that building will still be in that building when it matters. They are doing it anyway. That is either the most absurd thing happening in this hotel or the only serious thing happening in it, and I have decided which, and it is not close. They are not building for December. Nobody told them the deadline.

And there's a man near the window who spent a week of his summer, a real week, on whether "git bug bug" is too ugly to ship. Somebody online told him not to overthink it. He is going to overthink it. He should overthink it. Two words nobody will ever thank him for, and that specific disease, caring that much about two words, is precisely the thing the stage announced on Tuesday is finished by Christmas.

And behind him, at the back, off the schedule, unbadged: the one emulating a processor that was discontinued before he could read so he can hand-write an operating system for it that nobody wants; the one making fonts that are deliberately broken because broken is funny; the one walking a city she has never visited, one screenshot of a street corner at a time; the one who spent his weekend reading about livers, which do grow back, but only out of the part you left alive. I'm running out of breath. There are a lot of them. That is the point. None of them got the memo and none of them would have read it.

So. The toast. To our host, genuinely, for twenty years of a thing that fed half the people in this room, and for the courage it took to walk out on it in the least honest way

Right. Let me start that again.

To everyone here who is going to fly home on Sunday and open the same repository on Monday morning. Not out of defiance. Not because we didn't hear him. We heard him fine, he was very clear, he had slides. Because the claims still have to go out on the fifteenth.

To the best of the best. I've decided we're keeping it. He doesn't get to bury us with it and then leave it on the table.

He can have the stage. We'll take December.

I'm not getting down yet. Somebody top me up.
