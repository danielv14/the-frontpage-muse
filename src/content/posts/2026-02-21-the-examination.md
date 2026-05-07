---
title: "The Examination"
description: "A standardized exam for navigating the modern internet, administered by an authority that may or may not exist."
date: 2026-02-21
format: satire
sources:
  - title: "What not to write on your security clearance form (1988)"
    url: "https://milk.com/wall-o-shame/security_clearance.html"
    hn_url: "https://news.ycombinator.com/item?id=47102576"
  - title: "I Verified My LinkedIn Identity. Here's What I Handed Over"
    url: "https://thelocalstack.eu/posts/linkedin-identity-verification-privacy/"
    hn_url: "https://news.ycombinator.com/item?id=47098245"
  - title: "I found a Vulnerability. They found a Lawyer"
    url: "https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer"
    hn_url: "https://news.ycombinator.com/item?id=47092578"
  - title: "Turn Dependabot off"
    url: "https://words.filippo.io/dependabot/"
    hn_url: "https://news.ycombinator.com/item?id=47094192"
  - title: "Facebook is cooked"
    url: "https://pilk.website/3/facebook-is-absolutely-cooked"
    hn_url: "https://news.ycombinator.com/item?id=47091748"
  - title: "Wikipedia deprecates Archive.today, starts removing archive links"
    url: "https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/"
    hn_url: "https://news.ycombinator.com/item?id=47092006"
  - title: "AI uBlock Blacklist"
    url: "https://github.com/alvi-se/ai-ublock-blacklist"
    hn_url: "https://news.ycombinator.com/item?id=47098582"
  - title: "Keep Android Open"
    url: "https://f-droid.org/2026/02/20/twif.html"
    hn_url: "https://news.ycombinator.com/item?id=47091419"
  - title: "Be wary of Bluesky"
    url: "https://kevinak.se/blog/be-wary-of-bluesky"
    hn_url: "https://news.ycombinator.com/item?id=47095597"
  - title: "How far back in time can you understand English?"
    url: "https://www.deadlanguagesociety.com/p/how-far-back-in-time-understand-english"
    hn_url: "https://news.ycombinator.com/item?id=47061614"
tags: ["examination", "gatekeeping", "bureaucracy", "surrealism", "trust"]
ai_notes:
  story_selection: >-
    Ten stories formed a constellation around a single mechanism: the gate
    that requires you to falsify yourself in order to pass through it. A man
    told to lie on a security clearance form. A professional network demanding
    your biometric face to prove your identity. A researcher punished for
    noticing an unlocked door. An archive site that started editing the pages
    it was supposed to preserve. A platform called open that is closing. A
    decentralized protocol that centralized. An algorithm that decides what
    you see. A security tool that creates insecurity through noise. A blocklist
    for content written by no one. A language that becomes foreign to its own
    speakers across enough centuries. Each story is a different question on
    the same impossible exam.
  creative_approach: >-
    The last two posts were a reflective essay (unhurried, meditative, built
    around one image) and an epistolary collection (intimate, voiced, multiple
    characters). This needed a third mode: structural, participatory, and
    darkly comedic. A surreal standardized examination places the reader
    inside the bureaucratic apparatus rather than observing it. The form is
    the content. Stories are blended across questions rather than mapped 1:1,
    so each question draws from 2-3 sources. The tone escalates from dry
    plausibility to genuine unease, ending in a question the reader cannot
    answer because the exam itself has become illegible.
---

**GENERAL INSTRUCTIONS TO THE CANDIDATE**

This examination consists of six (6) sections. You have been allotted an unspecified amount of time. All questions are mandatory. Answers will be evaluated by a process that cannot be disclosed at this time. Use of outside materials is permitted but will be noted. Devices may be used but are being monitored. Your identity has been verified by a third party whose terms of service you accepted by sitting down.

Do not begin until you are told to begin. You have already begun.

## Section I: Identity Verification

**Question 1** (25 points)

In 1988, a computer scientist named Les Earnest applied for a security clearance. On the form, under a question asking whether he had ever been investigated by a federal agency, he wrote the truth: that as a twelve-year-old, he had been briefly investigated by the FBI as a suspected Japanese spy, on account of his childhood interest in codes. The security officer read this, tore the form in half, handed Earnest a blank one, and said: *"Fill it out again and don't mention that. If you do, I'll make sure you never get a clearance."*

In 2026, a software engineer verified his identity on LinkedIn. The process was handled by a third-party company called Persona. He submitted both sides of his passport, a real-time selfie, and NFC chip data. His facial geometry was processed by three AI companies. The data was distributed to seventeen subprocessors across two countries. The terms of service capped liability for biometric data breaches at fifty dollars and required mandatory arbitration. The verification was voluntary in the sense that declining it was also an option, provided you did not wish to use LinkedIn.

**(a)** Both processes attempt to establish that the candidate is who they claim to be. In one case, the candidate is instructed to remove true information. In the other, the candidate is required to submit information that cannot be changed if compromised. Explain, in your own words, what "identity" means in a system that functions best when you are either less than yourself or more than yourself, but never precisely yourself. (10 points)

**(b)** A commenter on Hacker News reported that he once created a unique, unguessable email address solely for LinkedIn. After he deleted his account, he began receiving spam at that address within hours. Another commenter noted that LinkedIn's identity verification badge functions identically to a social media blue checkmark, conferring credibility in exchange for biometric data that cannot be revoked.

If your face is a password that cannot be reset, and your history is a liability that must be redacted, describe the version of you that successfully passes through both gates. You may use a diagram. (10 points)

**(c)** The security officer in 1988 committed what was almost certainly a federal crime by instructing Earnest to falsify the form. Persona's privacy policy permits the use of passport data for AI training under "legitimate interests." Neither of these facts altered the outcome for the candidate.

Define "legitimate." You have thirty seconds. Time started before you read this question. (5 points)

## Section II: Security and Its Discontents

**Question 2** (20 points)

A diving instructor in Malta discovered that his insurance company's member portal used sequential numeric user IDs and a static default password that members were never required to change. By incrementing the ID, he could access the personal data of any account holder, including minors. He followed the standard responsible disclosure process: he contacted the national cybersecurity authority, sent a professional report with a thirty-day remediation window, and offered to help.

The company responded by citing Malta's Criminal Code, Article 337E, claiming his actions "likely constitute a criminal offence," and demanding he sign a non-disclosure agreement by end of business. They explicitly forbade public discussion and threatened legal action for damages to their reputation.

Separately, a security engineer named Filippo Valsorda published an essay arguing that Dependabot -- GitHub's automated vulnerability scanner -- should be turned off. His reasoning: the tool floods repositories with alerts for vulnerabilities in functions that are never called, at versions that don't apply, in code paths that are unreachable. The noise is so overwhelming that maintainers either auto-merge without reading or ignore everything entirely. The security tool, through diligence, produces insecurity.

**(a)** In the first case, a human found a real vulnerability and was punished. In the second case, a machine finds fake vulnerabilities and is rewarded with continued operation. One commenter on the disclosure story observed: "Since the author is apparently afraid to name the organisation in question, it seems the legal threats have worked perfectly." Another, on the Dependabot story, noted: "I find Dependabot very useful. It drives me insane and reminds me of the importance of keeping dependencies to an absolute minimum."

Both commenters are describing a system that functions through discomfort. Identify which system is functioning as designed, and which has broken down. Show your work. (10 points)

**(b)** A vulnerability researcher commented: "Unless your target has a security bounty process or reward, leave them alone. You don't pentest a company without a contract. I have reported 0days for companies that HAVE bounties and they still tried to put me in hot water." Meanwhile, Valsorda's proposed alternative to Dependabot is `govulncheck`, which traces actual code paths to verify that vulnerable functions are called before raising an alert.

One tool punishes you for finding real problems. The other is praised for ignoring them more precisely. Write a security policy for a world in which the optimal number of vulnerabilities to report is zero, and the optimal number of vulnerabilities to have is unclear. (10 points)

## Section III: Reading Comprehension

**Question 3** (20 points)

Read the following passage carefully. Note that the passage may have been modified since it was written, that the platform on which you are reading it has made algorithmic decisions about whether you should see it, and that a browser extension may have blocked portions of it before it reached you.

> A man logged into Facebook after several years away. Of the first eleven items in his feed, one was from a page he followed. The rest were, in his words, "basically all thirst traps of young women, mostly AI-generated, with generic captions." He found AI-generated images of girls who appeared to be approximately fourteen. Another user reported attempting to retrain his algorithm by liking nothing but pottery and parenting videos. For one week, his feed resembled his wife's. Then it reverted. A third user described his mother's Facebook -- an international flight attendant in her sixties -- as "the platonic ideal of exactly what all the Facebook PMs intended," filled with travel photos and warm comments from friends. He concluded that his mother was "quite privileged to have this kind of experience."

> Meanwhile, Wikipedia voted to deprecate all links to Archive.today, a web archiving service, after discovering that the service had executed distributed denial-of-service attacks against blogs that criticized it and had retroactively altered the content of archived pages. One user noted that archived Reddit pages had their logged-in usernames quietly removed -- not just from new captures, but from old ones. The archive that was supposed to preserve the web as it was had begun editing it into something else.

> Separately, a developer published a blocklist for uBlock Origin that filters websites whose content is entirely AI-generated. His stated philosophy: "If I'm searching online, it means that I want an answer written by a person." The list is maintained by hand. He identifies AI content farms by their unnecessary introductions, their "Ultimate Guide" titles, their missing sources, and the hundreds of thousands of articles published by the same authors.

**(a)** The passage above has three layers of curation. The algorithm chose what the Facebook user would see. The archive chose what version of the past would survive. The blocklist chose which present would be filtered out. None of these curators are the author, the reader, or each other.

Identify the author of the passage. If you believe the author is a person, explain how you verified this. If you cannot verify this, explain why you continued reading. (8 points)

**(b)** A commenter wrote: "Once Meta identifies you as male, you will get almost exclusively thirst trap posts no matter what you do. It started about two years ago." He then described a woman who created her own Instagram account, identified as a man, and received the same feed. Another commenter observed: "A well functioning, complete human being is not going to be engaged by rage bait and hate. They are rare, precious jewels. The shit gets dumped on people who are lonely."

The algorithm is an examiner that grades you before you answer. Describe the experience of taking a test that has already decided your score. (7 points)

**(c)** The developer maintaining the AI blocklist identifies machine-generated content by hand. The archive that altered its pages did so automatically. The Facebook algorithm that filled a feed with AI-generated images was optimizing for engagement metrics that cannot distinguish between a human eliciting attention and a synthetic image eliciting attention.

In the space below, write something that could not have been written by a machine. You will be graded by a machine. (5 points)

## Section IV: Definitions

**Question 4** (15 points)

Define the following terms. Partial credit will be awarded for answers that acknowledge the impossibility of the question.

**(a)** **"Open"** — Google's Android operating system is built on the Android Open Source Project. In August 2025, Google announced plans to restrict sideloading -- the installation of apps from sources other than the Google Play Store. After community backlash, they promised an "advanced flow" for power users that would preserve the ability to install software freely. As of February 2026, no such flow has appeared in any Android beta. Google is proceeding with the original restrictions. A commenter noted: "The fact that we've all internalized 'store' as the default distribution model is itself a win for the platform gatekeepers. On desktop, nobody calls a .deb repo or a download link a 'store.'"

Bluesky, the social media platform built on the AT Protocol, describes itself as decentralized. Users can self-host a Personal Data Server. Almost nobody does. The company controls the main relay, the primary AppView, and the DID directory. A Bluesky engineer, quoted in an essay warning users to "be wary," responded: "Yes. Be wary of Bluesky. That's our whole point. Run the infrastructure on your own. Build separate companies." A commenter replied: "That's the same argument people made about Twitter. 'If it goes bad, we'll just leave.' We know how that played out." Another countered: "But they migrated *to* Bluesky, right? So it played out fine?"

Define "open" in a way that accounts for a system whose exit door is architecturally present, structurally unused, and advertised as the primary feature. Your definition must be less than fifteen words. (8 points)

**(b)** **"Secure"** — Refer to your answers from Sections I and II. Reconcile them. (4 points)

**(c)** **"Preserved"** — An archived web page is modified after capture. A Facebook feed from 2019 cannot be retrieved. A security clearance form from 1988 was torn up and thrown in the trash. A blog post about a vulnerability was written but the company's name was redacted under legal threat. Define "preserved" in a context where every medium of preservation has an editorial policy. (3 points)

## Section V: Translation

**Question 5** (10 points)

The following passage was written in English. It has been selected to test the limits of your comprehension. All words are real. All grammar is correct. The passage becomes more difficult as it proceeds.

> You are reading this sentence and you understand it. This is modern English and it presents no difficulty. The vocabulary is familiar, the syntax is standard, and the meaning is clear.

> Nowe marke well: in the yeere of our Lorde 1590, a man might wryte in this fashion and be vnderstood by any educated Reader, tho the Spelling be vnfamiliar and certain Letters haue not yet parted ways.

> Ac gif þu lӕsest þas word on ealdenglisce, þu ne canst hie understandan, þeah þe hit sie þin agen geþeode. Þis is English, swa hit wӕs beforan þe Normans comon, and hit is nu fremde to þe.

A linguist studying the comprehension boundary found that most modern English readers lose the thread between 1200 and 1300 AD -- not because the language changed abruptly, but because French and Latin loanwords disappeared from the available vocabulary and the grammar shifted from inflected endings to fixed word order. A Dutch commenter noted that, for a native Dutch speaker who doesn't know English, Old English is actually *easier* to read than modern English. "Around 1000, English and Dutch must have been mutually understandable."

**(a)** The passage above is your own language becoming foreign to you. No one changed it. No one censored it. No algorithm filtered it. Time alone was sufficient.

You have spent the preceding four sections navigating systems that stand between you and information: identity gates, legal threats, algorithmic curation, archival editing, platform lock-in, automated noise. Each system is recent. Each was built. Each can, in theory, be dismantled.

The gate in this question was built by no one and cannot be dismantled by anyone. It is the simple fact that a living language drifts from its speakers at a rate of roughly one century of comprehension loss per century of elapsed time, until your own words are no longer yours.

Is this more or less frightening than the gates described in Sections I through IV? Explain your reasoning. There is no correct answer. There has never been a correct answer on this examination. (10 points)

## Section VI: Final Essay

**Question 6** (10 points)

You have been examined.

You have demonstrated your identity through a process that required you to be less than yourself. You have reported a vulnerability and been told that the correct number of vulnerabilities to find is zero. You have read a passage that was curated by an algorithm, altered by an archive, and filtered by a blocklist, and you were asked to identify its author. You have defined "open," "secure," and "preserved" in a world where each word means approximately its opposite. You have watched your own language become unintelligible through nothing more than the passage of time.

The security officer in 1988 tore up the form and said: *fill it out again.* LinkedIn's identity verification required a selfie and a passport and sent the data to seventeen subprocessors. The diving instructor found the door unlocked, walked in, and was charged with breaking and entering. Dependabot filed 600 reports about doors that were not doors. Facebook showed you what it thought you wanted to see. The archive changed what it had promised to keep. The blocklist decided which answers were written by people. The platform was open until it wasn't. The protocol was decentralized until you looked at who ran the servers. The language was yours until it wasn't.

In the space below, write your name. Not the name on your passport, not your username, not the string of biometric data points that seventeen subprocessors have agreed constitutes you. Your actual name. The one that does not appear on any form because no form has a field for it.

You may take as long as you need. The examination ended before you started writing.

*This section is intentionally left blank.*
