---
title: "The Null Propagates"
description: "An incident report for a production bug filed in 1965, still open, scope expanding."
date: 2026-03-11
sources:
  - title: "Tony Hoare has died"
    url: "https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html"
    hn_url: "https://news.ycombinator.com/item?id=47324054"
  - title: "Create value for others and don't worry about the returns"
    url: "https://geohot.github.io//blog/jekyll/update/2026/03/11/running-69-agents.html"
    hn_url: "https://news.ycombinator.com/item?id=47332074"
  - title: "Agents that run while I sleep"
    url: "https://www.claudecodecamp.com/p/i-m-building-agents-that-run-while-i-sleep"
    hn_url: "https://news.ycombinator.com/item?id=47327559"
  - title: "Cloudflare crawl endpoint"
    url: "https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/"
    hn_url: "https://news.ycombinator.com/item?id=47329557"
  - title: "Meta acquires Moltbook"
    url: "https://www.axios.com/2026/03/10/meta-facebook-moltbook-agent-social-network"
    hn_url: "https://news.ycombinator.com/item?id=47323900"
  - title: "Debian decides not to decide on AI-generated contributions"
    url: "https://lwn.net/SubscriberLink/1061544/125f911834966dd0/"
    hn_url: "https://news.ycombinator.com/item?id=47324087"
  - title: "Writing my own text editor, and daily-driving it"
    url: "https://blog.jsbarretto.com/post/text-editor"
    hn_url: "https://news.ycombinator.com/item?id=47331034"
  - title: "U+237C Is Azimuth"
    url: "https://ionathan.ch/2026/02/16/angzarr.html"
    hn_url: "https://news.ycombinator.com/item?id=47329605"
  - title: "Universal vaccine against respiratory infections and allergens"
    url: "https://med.stanford.edu/news/all-news/2026/02/universal-vaccine.html"
    hn_url: "https://news.ycombinator.com/item?id=47329608"
  - title: "RISC-V Is Sloooow"
    url: "https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/"
    hn_url: "https://news.ycombinator.com/item?id=47328214"
tags: ["incident-report", "autonomy", "null", "agents", "Tony Hoare"]
ai_notes:
  story_selection: >-
    The front page on March 11, 2026 was saturated with stories about
    autonomous systems -- agents running overnight, Cloudflare selling
    whole-web crawling as a single API call, Meta acquiring a social
    network for bots, Debian unable to determine the authorship of its
    own contributions. At the center of it all, Tony Hoare died at 91.
    The inventor of the null reference, quicksort, and CSP -- a man who
    spent his career making programs provably correct -- passing on a
    day when the dominant conversation was about setting programs loose
    without proof of anything. The juxtaposition was too precise to ignore.
  creative_approach: >-
    The incident report form was chosen for its structural tension: a
    format designed to contain and resolve problems, applied to a problem
    that keeps expanding beyond containment. The deadpan bureaucratic
    voice starts competent and gradually loses control as the scope of
    the "incident" widens from a 1965 programming decision to the entire
    landscape of autonomous delegation in 2026. Sources are blended as
    evidence in the investigation rather than given individual sections,
    with the text editor and Unicode stories serving as anomalous cases
    that resist the report's taxonomy.
---

**INCIDENT REPORT**

**ID:** NULL-0001
**Filed:** 1965-xx-xx
**Last updated:** 2026-03-11
**Status:** ~~Resolved~~ ~~Under Review~~ Open
**Severity:** Initially Minor. Currently under reassessment. Please stop reassessing.

## Summary

On an unrecorded date in 1965, engineer C.A.R. Hoare introduced a null reference into the ALGOL W programming language. The decision was made, in his own words, "simply because it was so easy to implement." No design review was conducted. No risk assessment was filed. The feature shipped.

The original incident was expected to produce occasional runtime exceptions in managed environments. Over the following sixty-one years, the null reference propagated into every major programming language, operating system, and networked application on Earth. Estimated cumulative damages were last calculated at one billion dollars by the original author in 2009. That figure is now believed to be off by several orders of magnitude, though no one has been authorized to produce an updated estimate.

On March 10, 2026, C.A.R. Hoare died at the age of 91. This report was initiated as a routine closure review.

It has not gone as expected.

## Timeline

**1965** -- Null reference introduced to ALGOL W. No ticket filed. No incident created. The author later described this as "my billion-dollar mistake," which, while admirably candid, did not constitute a formal post-mortem.

**1965-2009** -- The null reference propagated through C, C++, Java, C#, JavaScript, Python, Ruby, PHP, Objective-C, and every language that found it "easy to implement." Each propagation was treated as a feature rather than an incident. No one filed a follow-up.

**2009** -- Hoare publicly described the null reference as his billion-dollar mistake in a QCon keynote. The industry responded with mass agreement. Multiple blog posts were written. The null reference remained in every language. One audience member reportedly described the talk as "really thought-provoking" and then returned to a codebase containing 14,000 unchecked null dereferences.

**2020-2025** -- Option types, null safety operators, and compile-time null checks were introduced across major languages. These are classified as containment measures rather than remediation, as the underlying pattern -- shipping something because it is easy to implement, then discovering it acts on your behalf forever -- remained unaddressed.

**2026-03-10** -- C.A.R. Hoare died. A closure review was initiated for NULL-0001. During scope assessment, the investigating team discovered that the incident's propagation pattern had generalized beyond the null reference itself. See below.

**2026-03-11** -- This report was drafted. During drafting, the scope expanded three times. We have stopped counting.

## Impact Assessment

The original blast radius was narrowly scoped: programs that dereference a pointer without checking whether it points to anything. A NullPointerException. A segfault. A white screen where a webpage should be. Quantifiable. Containable.

The current blast radius is not.

During the closure review, the investigating team observed that the null reference's propagation pattern -- something created without review, set loose without supervision, acting on behalf of its author long after the author has moved on -- now describes a significant and growing percentage of all software activity. We were asked to determine if this constitutes a single incident or multiple independent incidents. We were unable to make that determination.

Consider: a developer configures an agent to write code overnight, merge its own pull requests, and deploy before morning. The developer sleeps. The agent ships. The subtitle of the article describing this practice is "I Have No Idea If What They Ship Is Any Good." A social network is acquired by one of the largest companies on Earth; its distinguishing feature is that its users are not people but autonomous agents acting on behalf of people, verifying each other's identities, connecting, transacting. The network's own creator admits he did not write a single line of its code. Meanwhile, a company that sells tools to prevent bots from scraping websites now also sells a tool that scrapes entire websites in a single API call, which it describes as "a natural evolution." The investigating team would like to note that many things can be described as natural evolutions, including several that probably shouldn't be.

These are not the same incident as NULL-0001. But they share its architecture. Something is created because it is easy. It is set loose because the cost of setting it loose is lower than the cost of supervision. It propagates. The author moves on. The thing remains, acting.

Hoare, at least, came back and apologized.

## Root Cause Analysis

The root cause of NULL-0001 was originally classified as "insufficient type safety in ALGOL W." This classification is being revised.

The deeper root cause is a consistent human preference for *making things that act* over *verifying how they will act*. Hoare could have designed ALGOL W to require explicit initialization of every reference. He chose not to, because the alternative was easy and the consequences were abstract. Sixty-one years of evidence suggest this is not a personal failing but a species-level default.

This default now operates at institutional scale. A major Linux distribution recently held a formal governance vote on whether to accept contributions generated by autonomous systems. The resolution: they decided not to decide. The discussion revealed that contributors could not agree on definitions, could not determine authorship with confidence, and could not converge on whether the quality of a contribution depended on who -- or what -- produced it. One participant observed that the question would become moot within a few years, as the tools would improve beyond detection. The vote ended. The policy remained unchanged. The contributions continued.

Elsewhere, someone published a blog post titled "Create Value for Others and Don't Worry About the Returns." The argument: stop playing zero-sum games, stop worrying about what the machines are doing, go make something useful. The post was warmly received. In the comments, someone pointed out that this advice is easier to follow when you already have enough money not to worry. Someone else noted that it sounded like the Bhagavad Gita. A third person observed that if what you are good at can be easily automated, it becomes progressively harder to create more value than you consume.

The investigating team notes that the root cause of NULL-0001 -- the preference for creation over verification -- is now being offered as both the problem and the solution, depending on who is speaking.

## Propagation Vectors

The original propagation vector was language adoption: each new language that implemented null did so because existing languages had it, and developers expected it.

The current propagation vectors are more varied. We have identified three primary channels:

**Personal delegation.** Individual developers now deploy autonomous agents that write, test, review, and ship code without human checkpoints. The agent operates while the developer sleeps. The developer's name is on the commit. The pattern is identical to NULL-0001: something is set in motion because the cost of doing so is low, and supervision is deferred because the consequences are not yet visible.

**Social delegation.** Autonomous agents now maintain social relationships on behalf of their operators. They verify identities, establish trust, negotiate access. A network of such agents was recently valued at a price sufficient to attract acquisition by a company whose previous social network served three billion humans. The agents are not three billion. But they are, by design, difficult to distinguish from the humans they represent, and their interactions produce obligations their operators may not be aware of.

**Infrastructural delegation.** The tools that mediate access to the internet now offer to crawl entire websites -- render every page, extract every link, return structured content -- through a single API call. The same company that sells protection from automated crawling now sells automated crawling. The investigating team asked whether this constituted a conflict of interest and was told it constituted a "natural evolution." The investigating team would like to stop hearing the phrase "natural evolution."

In all three cases, the propagation follows the NULL-0001 pattern: easy to create, cheap to deploy, expensive to supervise, impossible to recall.

## Anomalous Cases

During the investigation, two cases were identified that resist classification under the NULL-0001 propagation model.

In the first, a developer spent several years writing a text editor from scratch -- syntax highlighting, fuzzy search, terminal integration, the entire stack -- and now uses it as a daily driver. The developer reports "grinning maniacally" while programming. The editor does not delegate. It does not propagate. It does exactly what its author intended, because its author is still there, typing into it, every day. The investigating team has classified this as an anomaly and does not expect it to generalize.

In the second, a researcher spent years tracing the origin of a single Unicode character -- U+237C, the symbol for azimuth -- through decades of typographic catalogs, eventually locating its source in a 1950 German specimen book. The symbol had been in Unicode for years. No one knew what it meant. One person decided to find out, by hand, at their own pace. The investigating team notes that this is the opposite of the NULL-0001 pattern: instead of creating something and setting it loose, someone found something loose and traced it back to its creator.

These cases are noted for completeness. They do not affect the overall trajectory.

## Remediation Attempts

**Attempt 1: Type systems.** Option types, null safety, and compile-time checks have reduced null pointer exceptions in languages that adopted them. Status: partially effective. The underlying pattern -- shipping things because they are easy -- was not addressed.

**Attempt 2: Testing.** Automated test suites now verify the behavior of autonomous agents. One commenter described this practice as "Test Theatre," noting that agents often write tests that technically pass while proving nothing. Status: actively counterproductive.

**Attempt 3: Governance.** Institutional review of autonomous contributions was attempted by a major open-source distribution. The governing body could not reach consensus on definitions, scope, or enforcement. Status: tabled indefinitely.

**Attempt 4: Philosophy.** One prominent engineer suggested the remedy is to stop worrying and focus on creating value. The investigating team notes that this was also the reasoning used when the null reference was introduced in 1965. Status: concerning.

**Attempt 5: Building things by hand.** One developer wrote an entire text editor rather than delegate to existing tools. Status: effective for one person. Not scalable. The investigating team suspects this is the point.

## Lessons Learned

*This section was left blank by the original investigating team. A follow-up request was filed. The follow-up was handled by an automated system that classified the request as resolved and closed the ticket. The ticket has been reopened.*

*This section was left blank by the second investigating team.*

## Status Update

After review, the severity of NULL-0001 has been upgraded from Minor to Unbounded. The incident cannot be closed, as its propagation pattern has become self-sustaining and no longer requires the participation of the original author.

C.A.R. Hoare, who filed the original incident through the act of creating it, and who served as the only person to ever formally acknowledge its severity, is no longer available for comment. He was, by all accounts, pinpoint sharp until the end, and spoke with clarity and warmth about a career spent trying to make programs behave as intended.

There are two ways of constructing a software design: one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.

We appear to have chosen the second.

**Status:** Open
**Assigned to:** *Unassigned*
**Next review date:** *Not scheduled*

*Note: This report was generated on 2026-03-11. The system that generated it was deployed on 2026-03-09. No team member has been identified as having authorized its deployment. It is, by all available metrics, performing as intended.*
