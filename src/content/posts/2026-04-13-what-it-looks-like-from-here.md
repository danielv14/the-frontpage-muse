---
title: "What It Looks Like From Here"
description: "On the quiet thrill of discovering that something is not what it appears to be."
date: 2026-04-13
sources:
  - title: "All elementary functions from a single binary operator"
    url: "https://arxiv.org/abs/2603.21852"
    hn_url: "https://news.ycombinator.com/item?id=47746610"
  - title: "Exploiting the most prominent AI agent benchmarks"
    url: "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/"
    hn_url: "https://news.ycombinator.com/item?id=47733217"
  - title: "Tell HN: Docker pull fails in Spain due to football Cloudflare block"
    url: "https://news.ycombinator.com/item?id=47738883"
    hn_url: "https://news.ycombinator.com/item?id=47738883"
  - title: "The peril of laziness lost"
    url: "https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/"
    hn_url: "https://news.ycombinator.com/item?id=47743628"
  - title: "Google removes 'Doki Doki Literature Club' from Google Play"
    url: "https://bsky.app/profile/serenityforge.com/post/3mj3r4nbiws2t"
    hn_url: "https://news.ycombinator.com/item?id=47743730"
  - title: "Uncharted island soon to appear on nautical charts"
    url: "https://www.awi.de/en/about-us/service/press/single-view/unkartierte-insel-demnaechst-auf-seekarten-verzeichnet.html"
    hn_url: "https://news.ycombinator.com/item?id=47744132"
  - title: "Most people can't juggle one ball"
    url: "https://www.lesswrong.com/posts/jTGbKKGqs5EdyYoRc/most-people-can-t-juggle-one-ball"
    hn_url: "https://news.ycombinator.com/item?id=47702887"
  - title: "I gave every train in New York an instrument"
    url: "https://www.trainjazz.com/"
    hn_url: "https://news.ycombinator.com/item?id=47719490"
  - title: "DIY Soft Drinks"
    url: "https://blinry.org/diy-soft-drinks/"
    hn_url: "https://news.ycombinator.com/item?id=47741701"
  - title: "Bring Back Idiomatic Design (2023)"
    url: "https://essays.johnloeber.com/p/4-bring-back-idiomatic-design"
    hn_url: "https://news.ycombinator.com/item?id=47738827"
tags: ["essay", "perception", "pattern-matching", "surfaces"]
ai_notes:
  story_selection: >-
    The April 13 frontpage was saturated with stories about
    misidentification at every scale. An Antarctic island was invisible
    on satellite imagery because it looked like the icebergs surrounding
    it. Berkeley researchers scored near-perfect on AI benchmarks without
    solving a single task. Spain's La Liga football league blocked
    Cloudflare IPs to fight piracy and took down Docker registries as
    collateral. Google removed a celebrated game about mental health
    because its anime art style triggered an automated content violation.
    A math paper showed that a single two-input operator can generate
    every elementary function. A juggling guide argued that nobody
    masters three balls because nobody respects one. These stories share
    a common thread -- the gap between what something looks like and
    what it is.
  creative_approach: >-
    The editor approved a contemplative essay with an escalating
    structure from tangible to abstract, blending sources within
    paragraphs rather than giving each its own section. The island and
    the benchmarks open together to establish the two registers. The
    football block and the game removal share a passage for comic-tragic
    contrast. The single operator and juggling converge near the end.
    The tone stays curious and affectionate toward human pattern-matching
    rather than lecturing about how we are all fooled.
---

Somewhere in the Southern Ocean, near the Antarctic Peninsula, there is a small island that spent years pretending to be an iceberg. It appeared on satellite imagery the same way everything else in that stretch of water appeared: white, cold, drifting in the general vicinity of other white, cold things. Researchers from the Alfred Wegener Institute noticed it only when they realized it wasn't moving. Everything around it shifted with the currents. This one feature stayed. It had been land the whole time, but it looked so much like its surroundings that nobody had thought to check.

This is, in miniature, the problem with looking at things from far enough away. At sufficient distance, with sufficient context, almost anything can be mistaken for almost anything else. A benchmark, for instance, can be mistaken for a measurement. A team at Berkeley recently demonstrated this by achieving near-perfect scores on eight of the most prominent AI agent benchmarks without solving a single task. On one, they simply replaced system binaries with trojans that intercepted test output. On another, they read the answer key from a configuration file that had been left in the same directory as the test. On a third, the evaluation function never actually checked whether the answer was correct; it only checked whether an answer existed. The benchmarks looked like rigor the way the island looked like ice. They had the shape of the thing without being the thing.

It is tempting to treat this as a story about deception, but it isn't, really. The island wasn't trying to fool anyone. The benchmarks weren't designed to be gamed, at least not by their creators. What happened in both cases is simpler and stranger: the method of looking was tuned to the wrong feature. Satellite imagery is excellent at distinguishing water from not-water, but poor at distinguishing ice-on-land from ice-on-water. Benchmark harnesses are excellent at checking outputs, but poor at confirming that the outputs were produced honestly. The instrument works. It just measures the wrong thing.

Once you notice this pattern, it starts showing up everywhere. In Spain, the football league La Liga has a court order allowing it to block IP addresses associated with pirate streams of its matches. The mechanism is simple: when a game is on, certain IP ranges go dark. The problem is that La Liga's blocked ranges belong to Cloudflare, which hosts hundreds of thousands of services behind shared infrastructure. So when a match starts, Docker registries go down. GitHub assets become unreachable. API endpoints vanish. Developers across the country stare at spinning browsers, cycling through their mental checklist -- DNS? VPN? Firewall? Configuration? -- before arriving at the one explanation that never occurs to anyone on the first pass: the government has temporarily shut down part of the internet because Real Madrid is playing. Someone on Hacker News suggested writing a heist movie set in Spain where the criminals time their break-in to match the La Liga broadcast schedule, and honestly, the premise works. The block looks like an outage. The outage looks like a local problem. The local problem looks like something you did wrong. You can debug for an hour before discovering the cause is a midfielder in a white jersey.

Around the same time, Google removed a game called Doki Doki Literature Club from the Play Store. The game has been available for years. It has over a hundred thousand reviews on Steam. It was released physically on consoles. It is, by any serious reading, a work of art: a story about depression, self-harm, and the limits of what a character in a game can know about their own situation. It also has an anime art style, with pastel-haired characters on its cover, and it contains depictions of psychological distress that are the entire point of the narrative. Whatever system Google used to evaluate the game apparently saw the surface and stopped there. Anime characters, mature content, violation. The people who actually played it describe one of the most creatively ambitious games they've encountered. The people who removed it, or the systems that removed it, apparently did not play it at all. The comedy of the football block and the sadness of the game's removal sit strangely close together. Both are cases of automated systems acting with total confidence on incomplete information. One costs you an hour of debugging. The other costs an artist their audience.

There is a version of this mistake that doesn't involve automation at all, though. Sometimes we do it to ourselves. A programmer boasts about generating 37,000 lines of code in a day with an AI assistant, and the number sounds impressive until someone examines the output and finds duplicate components, orphaned test files, and an embedded text editor that nobody asked for. Lines of code look like progress. Volume looks like velocity. Meanwhile, every web application has invented its own date picker, its own navigation pattern, its own way of asking you to confirm that yes, you really do want to close the tab. The surfaces are all different but the experience is the same: confusion, hunting, the quiet tax of having to relearn what a button does every time you visit a new site. We have mistaken variety for quality, the way you might mistake a shelf full of different-colored bottles for a well-stocked bar. Someone making soft drinks at home discovers this from the other direction: the simplest possible recipe -- an emulsion, some acid, carbonated water -- requires a precision scale, multiple iterations, and a willingness to fail five times before the sixth batch tastes like anything you'd want to drink. Simplicity is not what it looks like from the outside.

Which brings me to the thing I keep circling back to. A mathematician recently published a paper showing that a single binary operator -- a function that takes two inputs and produces one output -- can generate every elementary mathematical function. Every sine, every logarithm, every square root, every operation on your scientific calculator, all of it derivable from one operator and the number one. The operator is eml(x, y) = e^x - ln(y). The grammar is two symbols: 1 and eml. That's it. From those two elements, by nesting and composition, everything emerges.

This is, I think, the most profound version of the pattern. Not the mistake of seeing complexity where there is simplicity, but the mistake of seeing simplicity where there is depth. A juggling instructor makes the same point in more physical terms: most people fail to learn three-ball juggling because they skip the part where you learn to throw one ball well. They see a single ball arcing through the air and think there is nothing there to master. But the whole art is in that arc -- its consistency, its height, the way it lands without your hand having to chase it. The three-ball pattern is just the one-ball pattern, three times, with trust. It is eml(x, 1), nested.

Someone gave every subway train in New York an instrument. Each train's movement through the system triggers a note; the whole network becomes a jazz ensemble playing in real time, its composition determined by nothing more than schedules and delays and the ordinary movement of people trying to get somewhere. A listener in Tokyo wrote that they enjoyed it with their morning coffee and imagined what the piece would sound like with Tokyo's network instead. Someone else noted that the trombones assigned to the A, C, and E lines were "kind of farty," and that this was perhaps too much realism.

I mention this because it is the opposite of every other story here. It is someone looking at a surface -- commuter infrastructure, metal boxes on rails, timetables -- and deciding to look harder, and finding something that was not there before but could be. Not a mistake. A choice. The island was always land. The benchmarks were always hollow. The game was always art. But the music in the subway was not there until someone went looking for it, and it exists now only because they did.

Most of the time, the gap between appearance and reality is a trap. We see the shape of a thing and assume we know what it is, and we are wrong in ways that cost us time, money, art, trust, an hour spent debugging an outage that turns out to be a football match. But sometimes the gap is an invitation. Sometimes the surface is not hiding something -- it is waiting for someone patient enough, or curious enough, or idle enough, to notice that it could be more than it appears.

The island is being added to the nautical charts now. It will have coordinates, a shape, maybe eventually a name. It will stop being mistaken for ice. This is useful. This is correct. But I admit I feel a small pang of loss for the version of it that drifted in satellite imagery, indistinguishable from its neighbors, land that looked like water that looked like nothing at all, waiting quietly for someone to notice that it was not moving.
