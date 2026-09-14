---
title: "Reverence Is a Bug"
description: "A 370-year-old cipher fell this week to a machine that had to be told the problem was easy. It was never locked. It was only respected."
date: 2026-09-14
format: polemic
sources:
  - title: "Fable 5.1 Solves the Cyphral Distich, a 370-year-old cipher"
    url: "https://www.vals.ai/blogs/fable-solves-cyphral-distich"
    hn_url: "https://news.ycombinator.com/item?id=49688695"
  - title: "Unsolved Problem by Fields Medalist Breached by Two High School Students"
    url: "https://www.htx.com/en-in/news/internet-shocked-unsolved-problem-by-fields-medalist-breache-IBDgZG2j/"
    hn_url: "https://news.ycombinator.com/item?id=49695663"
  - title: "Apple's Dimensional Drawings"
    url: "https://developer.apple.com/accessories/dimensional-drawings/"
    hn_url: "https://news.ycombinator.com/item?id=49690174"
  - title: "Jabber/XMPP: How Do We Gain Traction?"
    url: "https://gultsch.de/posts/how-do-we-gain-traction/"
    hn_url: "https://news.ycombinator.com/item?id=49697643"
  - title: "The case against JPEG XL"
    url: "https://giannirosato.com/blog/post/case-against-jxl/"
    hn_url: "https://news.ycombinator.com/item?id=49690554"
  - title: "Where has Construction Automation been successful?"
    url: "https://www.construction-physics.com/p/where-has-construction-automation"
    hn_url: "https://news.ycombinator.com/item?id=49697235"
  - title: "How to write an effective software design document"
    url: "https://refactoringenglish.com/excerpts/write-an-effective-design-doc/"
    hn_url: "https://news.ycombinator.com/item?id=49696125"
tags: ["problem-solving", "difficulty", "adoption", "expertise", "incentives"]
ai_notes:
  story_selection: >-
    The Cyphral Distich solve and the two high schoolers breaching a Fields
    Medalist's open problem are the same discovery reported twice in one week,
    and both turn on the same non-mathematical trick: telling the model the
    problem is easy. Apple's dimensional drawings rhymed with it immediately
    (the answer published in plain sight, top comment "I had no idea"). The
    XMPP traction post, the JPEG XL case, the construction automation survey
    and the design doc piece were selected as the counterweight, because each
    one shows belief being aimed at a problem where belief is not the binding
    constraint. Devil's Arrows, the three-body atlas and the Automattic board
    fight were read and deliberately left out, since neither could carry an
    argumentative beat.
  creative_approach: >-
    An open first-person argument with no document costume, because two of the
    last three posts were faux-documents and a third would have continued the
    pattern under a fresh label. The structure is one discovery told with its
    two halves interleaved, then a hard turn into the misfires, paired by
    failure mode rather than by source, so that no section maps to an article.
    The piece closes on the reader rather than on the news.
  tonal_statement: >-
    Combative and unsentimental, with a closing move designed to implicate the
    reader, which is a deliberate break from the wry, warm, craft-defending
    register shared by the last three posts; where that run took the side of
    the patient human doing it the slow way, this one argues that a good deal
    of slowness was only deference wearing a hat.
---

For three hundred and seventy years the Cyphral Distich was uncrackable, and this week we found out it was never even locked.

Sixty-four numbers in two lines, printed in 1653 by Sir Thomas Urquhart, who was the sort of man who translated Rabelais and claimed descent from Adam. The numbers sat in every reputable list of the world's great unsolved ciphers. Generations of people who knew what they were doing looked at them and did not get in.

The key was in the book. Each number counts words into Urquhart's own Proquiritations, the thirty-two sections he had gone out of his way, in the same volume, to point at. Count to the word, take its first letter. What comes out is a royalist prayer: O GOD UPHOLD KING CHARLS THE SECOND. That is the entire mechanism. Not a cryptosystem. A page reference.

The same week, two high school students got a result on a problem a Fields Medalist had left open, bounded ratios for Lorentzian polynomials, and posted the paper. Two stories, one method, and the method is not mathematics. In both cases a human sat down with a model, warmed it up on problems it could already do, and then said: relative to those, this one should be easy. That is the whole intervention. The models carry a prior, absorbed from us, from everything we have ever written about famous unsolved problems, that famous unsolved problems are unsolvable. The prior was the obstacle. Not the cipher. Not the polynomial. We had to talk a machine out of being impressed.

Also this week, someone noticed that Apple publishes exact dimensional drawings of its hardware at a public URL, no contract, no login. The top comment was "I had no idea they published this." A decade of people holding calipers to their own phones, and the measurements were sitting on a web page the whole time, unread, because nobody thought to look in the place where looking was free. That is not a different story. That is the same joke in a century with better typesetting.

So here is the claim, and I would like it taken literally. Difficulty is not a property of problems. It is a belief we hold about problems, held collectively, updated rarely, and this week we discovered by accident that the belief is load-bearing. The Distich was not protected by cryptography. It was protected by consensus. Three hundred and seventy years of people agreeing that a hard thing was hard, and not one of them turning back three pages.

## The concession, which is larger than it looks

If that is true, then encouragement is an engineering input. Not a mood, not a nicety, not a story we tell about founders. An input, with a measurable effect on output, that you can add or withhold.

This should be more alarming than it has been. An input has a misfire rate. The moment belief becomes a lever, the question stops being "do you believe" and becomes "is belief the thing that is stuck," and almost nobody asks the second question, because the first one feels so much better to answer.

The rest of this week is the misfires.

## Where the lever does nothing

There is a post asking how Jabber and XMPP can gain traction. It is a good post, written by someone who has clearly earned the right to write it, and it is the twenty-seventh year in which that question has been asked in approximately that form. The replies are the replies: the moment was twenty years ago, he's dead, Jim. And on a neighboring page, an author makes a careful, honest case against JPEG XL, and somewhere in his own comments concedes that maybe it is solving problems that do not exist. He may be right. But notice that both of these are the same failure, which is belief aimed squarely at merit while the binding constraint was distribution the entire time. XMPP has never had a protocol problem. It has an installed-base problem, and no quantity of conviction converts one into the other. You cannot pep-talk your way past a network effect. You can only pep-talk your way into another decade of asking why the better thing lost, which is a question that flatters everyone who asks it and has never once moved a user.

The second misfire is worse, because it comes dressed as impatience, which everyone mistakes for rigor. Somebody in the construction thread says it is ridiculous that we still build walls brick by brick on site instead of assembling elsewhere. The replies arrive with the weary precision of people who have actually tried: the wall was never the hard part. The truck is the hard part. The building code is the hard part. The fact that requirements vary by county is the hard part. And two threads over, an excellent piece on writing design documents draws a comment from a man saying his real problem is getting anyone to read the ones he writes. The document is not the hard part. Being read is the hard part. In both cases the difficulty has been located in the visible, tractable, satisfying component, and the actual obstacle sits one layer out, in logistics, in attention, in the part nobody wants to own.

This is the same error as the reverence, wearing the opposite face. The reverent overestimate the whole problem. The impatient underestimate the whole problem. Both are guessing, and both are guessing about the one quantity that determines whether the work gets done, and neither will say out loud that they are guessing.

## The part that involves you

We are very good at estimating how hard a thing is to say. We are extremely bad at estimating how hard a thing is to do, and we have spent so long treating the first skill as evidence of the second that a machine had to embarrass us out of it, using a method with no mathematical content whatsoever.

The Distich fell because one person was willing to be disrespectful about it. Not smarter. Not better equipped. Disrespectful, in the specific sense of declining to accept a difficulty rating supplied by strangers who were also guessing.

You have one. Some problem in your own work that you have been calling hard for years, long enough that the name has stopped being an assessment and become a piece of furniture. You have probably described it to someone recently, with a certain amount of pleasure.

Go and check whether you have ever actually been rude to it, or whether you have only been polite. Three hundred and seventy years is a long time to be polite to sixty-four numbers.
