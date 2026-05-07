---
title: "The Vacancy"
description: "You left the door open. Something moved in."
date: 2026-03-13
format: essay
sources:
  - title: "Bucketsquatting is (finally) dead"
    url: "https://onecloudplease.com/blog/bucketsquatting-is-finally-dead"
    hn_url: "https://news.ycombinator.com/item?id=47361913"
  - title: "Meta Platforms: Lobbying, dark money, and the App Store Accountability Act"
    url: "https://github.com/upper-up/meta-lobbying-and-other-findings"
    hn_url: "https://news.ycombinator.com/item?id=47362528"
  - title: "E2E encrypted messaging on Instagram will no longer be supported after 8 May"
    url: "https://help.instagram.com/491565145294150"
    hn_url: "https://news.ycombinator.com/item?id=47363922"
  - title: "The Wyden Siren Goes Off Again: We'll Be 'Stunned' by NSA Under Section 702"
    url: "https://www.techdirt.com/2026/03/12/the-wyden-siren-goes-off-again-well-be-stunned-by-what-the-nsa-is-doing-under-section-702/"
    hn_url: "https://news.ycombinator.com/item?id=47366374"
  - title: "Digg is gone again"
    url: "https://digg.com/"
    hn_url: "https://news.ycombinator.com/item?id=47368135"
  - title: "Show HN: Channel Surfer – Watch YouTube like it's cable TV"
    url: "https://channelsurfer.tv"
    hn_url: "https://news.ycombinator.com/item?id=47336100"
  - title: "Can I run AI locally?"
    url: "https://www.canirun.ai/"
    hn_url: "https://news.ycombinator.com/item?id=47363754"
  - title: "Lost Doctor Who Episodes Found"
    url: "https://www.bbc.co.uk/news/articles/c4g7kwq1k11o"
    hn_url: "https://news.ycombinator.com/item?id=47360978"
tags: ["trust", "vacancy", "surveillance", "infrastructure", "essay"]
ai_notes:
  story_selection: >-
    The front page on March 13 was saturated with stories about things being
    vacated and then occupied by something else. Bucketsquatting provided the
    literal metaphor. Meta simultaneously dropping E2E encryption on Instagram
    and lobbying for regulation that shifts compliance costs to app stores
    revealed a single actor working both sides of a vacancy. Wyden's warning
    about secret NSA interpretations, Digg collapsing under bots, and the
    nostalgic retreats of Channel Surfer and local AI all pointed to the same
    underlying pattern: empty spaces do not stay empty.
  creative_approach: >-
    Second-person essay chosen for its unsettling intimacy. The reader becomes
    the one who left the door open, who deleted the bucket, who stopped
    checking. Bucketsquatting serves as the structural metaphor without being
    named in every paragraph. The blending instructions were followed closely:
    Meta's two moves share paragraphs, the S3 bucket and secret law sit in
    the same breath, Digg's bots and Channel Surfer's nostalgia collide, and
    Doctor Who threads lightly through a darker passage. The tone is quiet
    and uneasy rather than satirical.
---

You delete something and assume it's gone. A name, a bucket, a row in a database. You run the command, confirm the prompt, and walk away. The namespace clears. The record zeroes out. For a moment, the space is genuinely empty.

But empty is a state, not a destination. Empty is a pressure differential. And the internet, like nature, has opinions about vacuums.

For years, if you deleted an S3 bucket on AWS, anyone could register the name you'd just released. Your old bucket name -- the one hardcoded into deployment scripts, CloudFormation templates, third-party integrations you forgot about -- would start resolving to someone else's infrastructure. They didn't need your credentials. They didn't need to break anything. They just needed to wait for you to leave and then stand where you'd been standing. The exploit had a name that made it sound almost polite: bucketsquatting. As though they were just keeping the place warm. As though the space was simply too valuable to leave unoccupied. This week, AWS finally killed the vulnerability by tying bucket names to account IDs. The fix is straightforward. The pattern it exploited is not.

Because you can also vacate a law. Not repeal it -- that would be visible, debatable, subject to the slow machinery of democratic process. You vacate it by reinterpreting it in secret. A senator has been saying, in the careful language of someone who has read classified documents and is not permitted to describe them, that there exists an interpretation of Section 702 surveillance authority that the American public would find stunning. Not the law itself. The interpretation. The text of the statute is public, readable, parsed by lawyers and journalists and civil liberties organizations. But between the words, in the gap between what was written and what is understood, something has moved in. A classified legal opinion that "directly affects the privacy rights of Americans" and that multiple administrations have refused to declassify. The namespace looks familiar. The bucket resolves somewhere else entirely. And unlike the S3 fix, nobody has tied this interpretation back to the account that created it.

You might think you'd notice when your own infrastructure changes hands. But the trick works precisely because the surface looks the same. Consider a company that spent years building end-to-end encryption into its messaging platform -- loudly, publicly, as a competitive differentiator. The documentation still explains how the encryption works. The help pages still describe the security benefits. And starting May 8th, on Instagram, it will no longer be available. The same company, in the same quarter, has deployed eighty-six lobbyists across forty-five states to advance legislation requiring app stores to verify user ages before downloads. The legislation imposes no new requirements on social media platforms. Read that twice. The company vacating its encryption promise is simultaneously engineering a regulatory vacancy that its competitors will have to fill. One hand opens the door; the other rearranges the furniture in the room next door so that when people come looking for who left, the neighbors are the ones holding the blame. Twenty-six million dollars in federal lobbying. A covertly funded advocacy group that materialized overnight with no incorporation record and no EIN. A bill that passed ninety-nine to zero in Louisiana, where twelve of the company's lobbyists were stationed. The vacancy was not accidental. The vacancy was the product.

And you do notice, eventually. You notice because the community stops feeling like a community. A social platform relaunches -- one you remember from a previous era of the internet, one that once competed with the aggregator you're reading right now -- and within weeks, the votes, the comments, the engagement are no longer trustworthy. Bots moved in. Not sophisticated bots, not some grand conspiracy, just the ambient automated traffic that now fills any digital space left undefended. The platform's farewell message is blunt about it: "When you can't trust that the votes, the comments, and the engagement you're seeing are real, you've lost the foundation a community platform is built on." The founder is coming back in April to try again with a "completely reimagined angle of attack." But the angle isn't the problem. The problem is that unoccupied space on the internet now has a default tenant, and the default tenant isn't human. So you do what people do when the new thing is uninhabitable: you retreat to the shape of the old thing. Someone builds a tool that turns your YouTube subscriptions into a cable TV guide, complete with channels and time slots and the inability to choose what's on. Someone else builds a site that scans your hardware specs and tells you which AI models you can run locally, on your own machine, without sending anything to anyone. These aren't innovations. They're reclamations. The channel guide and the local inference engine are attempts to reoccupy spaces that were vacated when convenience arrived -- the space of passive, unchosen watching; the space of computation that doesn't phone home. The nostalgia isn't for the technology. It's for the trust model the technology implied: that what you were watching was what someone had chosen to broadcast, not what an algorithm had chosen for you, and that what your machine was doing was between you and your machine.

Sometimes, rarely, something valuable is recovered from a vacancy. Old television episodes, filmed in the 1960s and wiped by a broadcaster that needed the tapes for something else, turn up in a storage facility decades later. The recovery is treated as miraculous, and it is, but not for the reason people think. The miracle isn't that the episodes survived. The miracle is that the space they occupied -- a shelf, a canister, a corner of a warehouse -- was never claimed by anything else. Nobody squatted on it. Nobody moved in. The vacancy held. But that is the exception that reminds you of the rule.

The rule is: you cannot delete something and leave. You can only delete something and be replaced. The bucket name will be claimed. The legal text will be reinterpreted. The encryption will be quietly removed and the regulatory space will be rearranged so that someone else bears the cost. The community will fill with things that look like community members but aren't. And when you try to go back, when you try to reclaim the space you left, you will find that going back requires building the entire thing again from scratch -- the trust, the infrastructure, the expectation that what you're looking at is what it appears to be.

You left the door open. You always leave the door open. The question was never whether something would move in. The question was whether you'd recognize the room when you came back.
