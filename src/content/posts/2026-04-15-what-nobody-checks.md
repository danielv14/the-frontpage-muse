---
title: "What Nobody Checks"
description: "A routine audit of systems currently classified as operational reveals that most of them have never been looked at."
date: 2026-04-15
format: satire
sources:
  - title: "A communist Apple II and fourteen years of not knowing what you're testing"
    url: "https://llama.gs/blog/index.php/2026/04/10/friday-archaeology-a-communist-apple-ii-and-fourteen-years-of-not-knowing-what-youre-testing/"
    hn_url: "https://news.ycombinator.com/item?id=47724571"
  - title: "Fixing a 20-year-old bug in Enlightenment E16"
    url: "https://iczelia.net/posts/e16-20-year-old-bug/"
    hn_url: "https://news.ycombinator.com/item?id=47774789"
  - title: "Stop Flock"
    url: "https://stopflock.com"
    hn_url: "https://news.ycombinator.com/item?id=47772012"
  - title: "I wrote to Flock's privacy contact to opt out of their domestic spying program"
    url: "https://honeypot.net/2026/04/14/i-wrote-to-flocks-privacy.html"
    hn_url: "https://news.ycombinator.com/item?id=47768813"
  - title: "Tell HN: Fiverr left customer files public and searchable"
    url: "https://news.ycombinator.com/item?id=47769796"
    hn_url: "https://news.ycombinator.com/item?id=47769796"
  - title: "Let's talk space toilets"
    url: "https://mceglowski.substack.com/p/lets-talk-space-toilets"
    hn_url: "https://news.ycombinator.com/item?id=47758870"
  - title: "Saying goodbye to Agile"
    url: "https://lewiscampbell.tech/blog/260414.html"
    hn_url: "https://news.ycombinator.com/item?id=47774781"
  - title: "DaVinci Resolve – Photo"
    url: "https://www.blackmagicdesign.com/products/davinciresolve/photo"
    hn_url: "https://news.ycombinator.com/item?id=47760529"
tags: ["audit", "invisibility", "infrastructure", "surveillance", "essay"]
ai_notes:
  story_selection: >-
    The April 15 frontpage surfaced a cluster of stories about things
    that operate without examination. ISCAS-85 benchmark circuits
    studied for 14 years without anyone knowing their function. Flock
    surveillance cameras capturing millions of vehicles while citizens
    struggle to even request their own data. A 20-year-old window
    manager bug hidden by 20 years of nobody triggering the right
    conditions. Fiverr files left publicly searchable. Space toilets
    engineered to be forgotten. Agile rituals performed without
    questioning the framework. These stories share a thesis about
    functional invisibility -- systems that persist because nobody checks.
  creative_approach: >-
    The audit report form was chosen because it provides structural
    forward motion through numbered findings with escalating severity,
    while the bureaucratic frame creates dramatic irony as it gradually
    dissolves under the weight of what the auditor discovers. The tone
    escalates from dry procedural language to existential unease. Stories
    are blended by category of invisibility rather than mapped one-to-one
    to sections, so the sources become invisible themselves -- which is
    the point.
---

**OPERATIONAL REVIEW NO. 2026-0415**

**Subject:** Routine compliance audit of systems currently classified as operational

**Scope:** Selected infrastructure, processes, and monitoring systems across multiple domains

**Classification:** Standard review. No corrective action anticipated at time of commission.

**Auditor's note:** This review was initiated as part of a scheduled inspection cycle. All systems under examination were reported as functional by their respective operators prior to review. The auditor has no reason to expect significant findings.

## Finding 1: Measurement Without Comprehension

**Severity: Low**

In 1985, a pair of researchers released a set of benchmark circuits to the academic community. The circuits were real -- pulled from production hardware, stripped of documentation, and published as raw gate-level descriptions. They were used immediately and enthusiastically. Thousands of papers were written. Test patterns were generated, faults diagnosed, synthesis techniques validated. The benchmarks became standard. Careers were built on them.

For fourteen years, no one asked what the circuits did.

This is not an exaggeration, nor a simplification for rhetorical effect. Researchers ran experiments on a 27-channel interrupt controller, a 16-by-16 multiplier, and a pair of 32-bit error-correcting circuits without knowing that this is what they were. They studied the shape of the pottery without wondering what it had held.

The auditor notes a structural parallel in contemporary process management. Organizations running two-week sprint cycles report velocity, burn-down rates, and story-point throughput with considerable precision. When outcomes disappoint, the diagnosis is invariably that the process was insufficiently followed. The metrics are never themselves audited. The question of what, exactly, is being measured -- and whether the thing being measured bears any relationship to the thing being achieved -- is treated as out of scope.

It is possible to measure with great discipline and understand nothing. The circuits did not object to being misidentified. The sprint velocity does not care whether the software works. The numbers are real. What they refer to is, in many cases, unknown.

The auditor has revised the severity of this finding upward.

**Severity: Moderate**

## Finding 2: Observation Without Registration

**Severity: Moderate**

There is a company that operates over one hundred thousand cameras across more than three thousand jurisdictions. The cameras do not merely record license plates. They construct what the manufacturer calls a "Vehicle Fingerprint" -- color, make, model, bumper stickers, roof racks, dents, wheel type. They perform convoy analysis to detect vehicles traveling together. They flag patterns of routine movement. A journalist driving three hundred miles through rural Virginia was captured by nearly fifty of these cameras from fifteen different agencies.

The auditor initially classified this as a surveillance system. Upon further review, this classification appears incorrect. A surveillance system implies someone is watching. What is actually occurring is closer to collection -- a vast accumulation of data that exists in a state of ambient availability, accessed sporadically, governed loosely, and understood by no one in particular. When a citizen submitted a formal request under state privacy law to have their data deleted, the company replied that the data was not theirs to delete. It belonged, they said, to their customers. When asked to identify the customers, they suggested the citizen contact the relevant municipality. They also misspelled the citizen's name. Twice.

Simultaneously, a separate platform was discovered to have left years of customer files -- tax returns, confidential business documents, personal records -- indexed and publicly searchable. The exposure was reported through official security channels. The company later claimed to have no record of being contacted. The files remained accessible for weeks. The people whose tax returns were exposed had, in most cases, been seeking affordable help from freelancers because they could not afford anything else.

The auditor observes that these are not opposite failures. They are the same failure facing different directions. In one case, everything is watched and nothing is seen. In the other, everything is visible and nobody looks. The camera network generates data without producing knowledge. The exposed files sit in the open without producing alarm. Both systems function. Both are, by any reasonable definition, unmonitored.

**Severity revised: High**

## Finding 3: Dependence Without Inspection

**Severity: Moderate** *(under review)*

A window manager released in the late 1990s contained a function for fitting long titles into narrow window decorations. The function used an iterative search -- a form of Newton's method -- to determine how many characters to remove from the middle of a string and replace with an ellipsis. The implementation had a bug. Under specific conditions, the search would oscillate between two states and never converge: eight characters removed, then eleven, then eight again, forever.

The bug existed for twenty years. It required a title of a particular length, in a particular character encoding, rendered at a particular width, to trigger. The software was otherwise stable. People used it every day. The function ran thousands of times without incident. When it finally froze -- because someone opened a PDF with an unusually long name -- the developer who investigated found the loop cycling between its two states with the patience of a metronome.

Twenty years is also, roughly, the span of time during which crewed spacecraft have maintained continuous human presence in orbit. The systems that manage human waste on these spacecraft are, by design, the least examined systems aboard. They must work in zero gravity, which means they cannot rely on the force that makes every toilet on Earth functional. They use narrow openings, strong suction, and careful positioning trained on mockups. Astronauts practice alignment. The seats are four to six inches wide. When something goes wrong -- and it does -- the failure mode is not abstract. On one shuttle mission, frozen urine accumulated on the exterior hull in a formation the crew referred to as a urinecicle.

The auditor notes that both of these systems share a property: they were designed to be invisible. The window-title function exists so that users never have to think about title truncation. The waste system exists so that astronauts can focus on the mission. Invisibility is not a flaw in their design. It is the design. And the consequence of successful invisibility is that no one checks. The function runs. The toilet flushes. The bug waits, very patiently, for a title long enough to find it.

There is a related observation about reproduction. In the late 1970s, an engineer in Sofia received -- through channels that remain diplomatically undescribed -- an American personal computer. He reproduced it completely: the processor, the ROM, the schematics. The clone was manufactured at scale and eventually supplied forty percent of the personal computers in the Eastern Bloc. It was either an act of theft or an act of liberation, depending on which side of a border you stood on. But the relevant fact, for the purposes of this audit, is that the reproduction was made from the outside in. The circuits were decapped and traced under microscopes. The behavior was copied exactly. What was not copied -- because it could not be seen -- was the intent. The machine worked. Whether it worked the way its designers imagined was a question nobody had standing to ask.

**Severity: High**

## Finding 4: Continuation Without Justification

**Severity: ~~Moderate~~ To be determined**

The auditor is required at this point to disclose a concern about the audit itself.

Every system examined in this review was reported as functional prior to inspection. Every system examined in this review is, in fact, functional. The cameras record. The benchmarks produce results. The window manager renders titles. The waste systems process waste. The metrics increment. The circuits compute.

The question the auditor was asked to answer is whether these systems are compliant. The question the auditor is now unable to avoid is: compliant with what?

There is no specification for most of what we depend on. There are implementations, and there are assumptions, and there is the vast unexamined space between the two where most of the actual functioning happens. We run the benchmarks because they are the benchmarks. We follow the process because it is the process. We drive past the cameras because the cameras are there.

The auditor has encountered, in the course of this review, exactly one case of someone looking at a problem that everyone else had agreed to ignore. A company that makes video editing software decided to build a photo editor. Not because the world lacked photo editors, but because the existing ones had stopped being examined -- their limitations had become invisible through familiarity, their compromises mistaken for constraints. The new tool works at resolutions that would have seemed absurd five years ago. It gives away for free what incumbents charge for. It treats the problem as if encountering it for the first time.

The auditor notes that this is the exception. The norm is the other direction. The norm is fourteen years of not knowing what you're testing.

## Recommendation

The auditor recommends that the classification "operational" be amended. A system can be operational and unexamined. A system can produce correct outputs for the wrong inputs. A system can be functional in the way that a locked door is functional -- it works perfectly until you ask what's on the other side.

The auditor further recommends that this report be reviewed by a qualified party.

The auditor is not confident that a qualified party exists.

**Status: Open**

**Next scheduled review:** Not determined. The previous review cycle was, upon investigation, never completed. The auditor assigned to the prior cycle marked all findings as resolved. There is no evidence that any findings were investigated. The auditor's status is listed as "active."

The auditor has not been able to reach them.
