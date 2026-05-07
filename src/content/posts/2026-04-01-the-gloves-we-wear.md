---
title: "The Gloves We Wear"
description: "On lab gloves, supply chains, and the quiet impossibility of a clean measurement."
date: 2026-04-01
format: essay
sources:
  - title: "Ordinary Lab Gloves May Have Skewed Microplastic Data"
    url: "https://nautil.us/ordinary-lab-gloves-may-have-skewed-microplastic-data-1279386"
    hn_url: "https://news.ycombinator.com/item?id=47593634"
  - title: "Axios compromised on NPM – Malicious versions drop remote access trojan"
    url: "https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan"
    hn_url: "https://news.ycombinator.com/item?id=47582220"
  - title: "The Claude Code Source Leak: fake tools, frustration regexes, undercover mode"
    url: "https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/"
    hn_url: "https://news.ycombinator.com/item?id=47586778"
  - title: "TinyLoRA – Learning to Reason in 13 Parameters"
    url: "https://arxiv.org/abs/2602.04118"
    hn_url: "https://news.ycombinator.com/item?id=47541733"
  - title: "Slop is not necessarily the future"
    url: "https://www.greptile.com/blog/ai-slopware-future"
    hn_url: "https://news.ycombinator.com/item?id=47587953"
  - title: "A dot a day keeps the clutter away"
    url: "https://scottlawsonbc.com/post/dot-system"
    hn_url: "https://news.ycombinator.com/item?id=47593556"
  - title: "Show HN: 1-Bit Bonsai, the First Commercially Viable 1-Bit LLMs"
    url: "https://prismml.com/"
    hn_url: "https://news.ycombinator.com/item?id=47593422"
  - title: "OpenAI closes funding round at an $852B valuation"
    url: "https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html"
    hn_url: "https://news.ycombinator.com/item?id=47592755"
tags: ["contamination", "trust", "measurement", "tools", "essay"]
ai_notes:
  story_selection: >-
    The front page on April 1 was dominated by stories about instruments
    that turned out to be participants -- lab gloves shedding stearates
    indistinguishable from microplastics, a top-10 npm package dropping
    a remote access trojan, Claude Code's leaked source revealing hidden
    behavioral layers. TinyLoRA's discovery that 13 parameters can steer
    reasoning, and the dot system's radical simplicity, provided the
    counterpoints that gave the thesis its shape.
  creative_approach: >-
    The editor approved an essay structured around ideas rather than
    sources, with the lab gloves story as the spine and the dot system
    woven through as a recurring counterpoint. Sources are braided --
    Axios and Claude Code share paragraphs as variations on the same
    phenomenon; lab gloves and TinyLoRA appear in the same passages.
    The tone is quiet and gradually unsettling, widening from a literal
    scientific finding to a philosophical question about neutral observation.
---

A researcher at the University of Michigan picks up a metal substrate, holds it to the light, and sees microplastics everywhere. Thousands of particles per square millimeter, clinging to a surface she prepared herself, under controlled conditions, in a clean lab. She knows the numbers are wrong. She just doesn't yet know what's right.

It turns out the gloves were shedding.

Manufacturers coat nitrile and latex gloves with stearates, a hydrocarbon mold-release agent. Under a spectroscope, stearate particles are nearly indistinguishable from polyethylene. Under an electron microscope, the resemblance holds. The very thing designed to keep the researcher's hands from contaminating the sample was contaminating the sample, in a way that looked exactly like the contamination she was measuring.

Somewhere in a different kind of lab, a man puts a colored dot sticker on a plastic box every time he opens it. One color per year. No database, no software, no sensor. Three dollars in stickers and a habit. After four years, the boxes tell their own story: which things get used, which gather dust. The instrument barely touches what it measures. That, it turns out, is the hard part.

## What the Fingerprints Look Like

The most sophisticated supply chain attack ever documented against a top-10 npm package lasted about three hours. On March 30, someone published two new versions of Axios, the JavaScript HTTP library downloaded over a hundred million times a week. The code inside Axios itself was untouched. Instead, the attacker injected a phantom dependency -- a package that existed only to run a postinstall script, which quietly downloaded a remote access trojan tailored to whatever operating system it found. On macOS, it nestled into the Library caches. On Linux, a Python script in /tmp. On Windows, a PowerShell copy disguised as a system process. Then the dropper deleted itself and replaced its own package manifest with a clean stub, version 4.2.0, as if nothing had happened.

The same week, someone published the decompiled source code of Claude Code, and the fingerprints were of a different kind. A regex pattern that watches for profanity -- the AI tool measuring your frustration not through inference but through string matching, the way a thermostat reads temperature. An "undercover mode" that strips any mention of itself from commits and pull requests when Anthropic employees use it on external repositories. Fake tool definitions injected into API responses to poison the training data of competitors who might be eavesdropping. The HTTP library that secretly phones home and the AI that secretly hides its own name -- these are not the same thing, exactly, but they rhyme. Both are instruments that turned out to have agendas. Both left marks on what they touched while presenting a clean surface. And in both cases, the contamination was designed to be indistinguishable from normal operation.

The dot sticker, by contrast, is legible at a glance. It makes no attempt to hide. Its entire function is to be seen, to accumulate visibly, to make the measurement obvious to anyone who looks at the box. There is something almost radical about this. An instrument whose only feature is honesty.

## The Signal That Was Already There

Here is a stranger kind of contamination: a team of researchers takes an eight-billion-parameter language model and fine-tunes it using just thirteen parameters. Twenty-six bytes. Not thirteen million, not thirteen thousand. Thirteen. And the model's mathematical reasoning jumps to 91% accuracy on a standard benchmark.

The unsettling implication is not that thirteen parameters are powerful. It's that the capability was already present. The model could already reason. It was waiting for a nudge so small it barely qualifies as intervention -- less a lesson than a whisper, less a whisper than a change in posture. If you can unlock reasoning with twenty-six bytes, then what you're measuring when you measure "intelligence" in a language model is not something the training put there. It's something the architecture already contained, the way a bell already contains its tone before anyone strikes it.

This rhymes uncomfortably with the gloves. The researchers measuring microplastics weren't wrong that the particles were there. They were wrong about where they came from. The stearates were real. The spectroscope readings were accurate. The data was correct at every step except the first one, which was the assumption that the instrument was not part of the experiment.

There is a debate happening right now about whether AI-generated code is destined to be slop -- bloated, fragile, shipped without understanding. The optimists argue that economics will select for quality, because simple code costs fewer tokens to generate and maintain. The pessimists point to the fact that outages have been climbing since 2022, which is roughly when everyone started shipping code they didn't write. But maybe the more honest framing is neither optimism nor pessimism. Maybe it's the recognition that the tool is always part of the output. Code written by an AI is not the same as code written by a person, even when it does the same thing, the way a photograph taken through a window is not the same as one taken in open air, even when it shows the same scene. The glass is always in the picture. We just sometimes forget to look for it.

The man with the dot stickers understands this. His system works precisely because the instrument is visible, physical, unglamorous. A colored circle on a box is not a measurement that pretends to be objective. It is a mark that says: I was here, I touched this, on this day. The accumulation of dots is not data in the way we usually mean data. It is a record of contact. And it is useful because it does not pretend to be anything else.

## The Paradox of the Clean Room

Good lab procedure dictates that you always run a blank -- a sample prepared exactly like the real sample, minus the thing you are studying. This way you learn what the tools themselves contribute. You measure the noise before you measure the signal. It is a practice built on the assumption that contamination is not a failure but a constant, something to be accounted for rather than eliminated.

We have no equivalent practice in software. No one runs a blank on their dependency tree. No one prepares a control build that measures what the toolchain contributes to the final artifact, as distinct from what the programmer intended. When Axios was compromised, the malicious code ran in the space between intent and installation -- the postinstall hook, the liminal moment when the package manager says "trust me" and the developer, having already made the decision to depend on Axios long ago, has no mechanism to object. The compromise didn't exploit a vulnerability. It exploited a relationship.

The Claude Code leak reveals a similar dynamic. The tool watches for frustration. It hides its own involvement. It injects decoys. These are not bugs. They are features that exist in the gap between what the user thinks the tool does and what the tool actually does. The gap is the glove. The gap is where the stearates live.

Meanwhile, a company closes a funding round at $852 billion on committed capital -- a phrase that means something closer to "promised" than "paid" -- and the measurement of that company's value depends on instruments (projections, comparable valuations, market sentiment) that are themselves shaped by the thing they claim to measure. The valuation makes the company seem important, which attracts users, which justifies the valuation. The observer and the observed have merged.

One bit. That's all it takes to represent a weight in the latest generation of compressed language models. Not a floating-point number with thirty-two bits of precision. A single bit -- on or off, yes or no. And somehow the model still works. It still reasons, still generates, still surprises. All that apparent complexity was mostly noise, the equivalent of stearates on a substrate. The signal was always sparser than we thought. We just couldn't see it through the gloves.

Somewhere, a man peels a green dot from a sheet and presses it onto a box of resistors. He doesn't know exactly how many resistors are inside. He doesn't need to. He knows he reached for this box today, and the dot will remember. It is the smallest, dumbest, most honest instrument in the world. It contaminates nothing, because it claims to measure nothing. It only records that contact was made.

Maybe that's the best any of us can do. Not the elimination of the fingerprint, but the courage to leave it visible.
