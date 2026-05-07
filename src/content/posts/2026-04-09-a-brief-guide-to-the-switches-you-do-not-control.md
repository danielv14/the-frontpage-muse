---
title: "A Brief Guide to the Switches You Do Not Control"
description: "Practical advice for discovering that your infrastructure runs on someone else's mood."
date: 2026-04-09
format: field-guide
sources:
  - title: "Veracrypt project update"
    url: "https://sourceforge.net/p/veracrypt/discussion/general/thread/9620d7a4b3/"
    hn_url: "https://news.ycombinator.com/item?id=47686549"
  - title: "John Deere to pay $99M in right-to-repair settlement"
    url: "https://www.thedrive.com/news/john-deere-to-pay-99-million-in-monumental-right-to-repair-settlement"
    hn_url: "https://news.ycombinator.com/item?id=47696035"
  - title: "US cities are axing Flock Safety surveillance technology"
    url: "https://www.cnet.com/home/security/when-flock-comes-to-town-why-cities-are-axing-the-controversial-surveillance-technology/"
    hn_url: "https://news.ycombinator.com/item?id=47689237"
  - title: "Show HN: Is Hormuz open yet?"
    url: "https://www.ishormuzopenyet.com/"
    hn_url: "https://news.ycombinator.com/item?id=47696562"
  - title: "ML promises to be profoundly weird"
    url: "https://aphyr.com/posts/411-the-future-of-everything-is-lies-i-guess"
    hn_url: "https://news.ycombinator.com/item?id=47689648"
  - title: "I ported Mac OS X to the Nintendo Wii"
    url: "https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html"
    hn_url: "https://news.ycombinator.com/item?id=47691730"
  - title: "They're made out of meat (1991)"
    url: "http://www.terrybisson.com/theyre-made-out-of-meat-2/"
    hn_url: "https://news.ycombinator.com/item?id=47688678"
  - title: "The Importance of Being Idle"
    url: "https://theamericanscholar.org/the-importance-of-being-idle/"
    hn_url: "https://news.ycombinator.com/item?id=47666639"
  - title: "Ask HN: Any interesting niche hobbies?"
    url: "https://news.ycombinator.com/item?id=47654062"
    hn_url: "https://news.ycombinator.com/item?id=47654062"
  - title: "Git commands I run before reading any code"
    url: "https://piechowski.io/post/git-commands-before-reading-code/"
    hn_url: "https://news.ycombinator.com/item?id=47687273"
tags: ["control", "ownership", "satire", "field-guide", "infrastructure"]
ai_notes:
  story_selection: >-
    The April 9 frontpage was saturated with stories about revocable
    permission. VeraCrypt and WireGuard both had their Microsoft signing
    accounts terminated without warning. John Deere settled for $99M
    over locking farmers out of their own equipment. Cities were removing
    Flock Safety surveillance cameras. A Show HN reduced geopolitical
    access through the Strait of Hormuz to a single boolean. Meanwhile,
    someone ported Mac OS X to a Wii by hacking past every corporate
    lock they encountered, and Aphyr argued that ML systems are
    profoundly dangerous precisely because nobody holds the key.
  creative_approach: >-
    The editor redirected away from a meditative essay (too close to
    recent posts in register) toward something with more structural
    energy. The satirical field guide form lets bureaucratic language
    enact the power asymmetry the piece is about. The tone escalates
    from dry practicality to absurdity, with the ML inversion arriving
    as the structural pivot where the guide's logic collapses. The
    closing section on lockless spaces (hobbies, idleness, hacking)
    provides the emotional release. Revision merged the surveillance
    and Hormuz sections into a single section on scale and delay, and
    threaded the Wii port into the contact section as a counterexample.
---

## 1. Confirming That the Switch Exists

You may have been operating under the impression that you own your tractor, your encryption software, your shipping lane, or your ability to publish signed Windows drivers. This is an understandable confusion. You paid for these things. You maintain them. In many cases, you built them yourself over the course of years.

Nonetheless: there is a switch. Someone else installed it. They did not tell you where.

The first indication is usually silence. A login page that no longer recognizes you. A firmware update that arrives not to add features but to subtract them. A tractor that starts, drives to the field, and then declines to be repaired by anyone who doesn't hold a dealer certification. You will look for an error message. There will not be one. The absence of an error message is the error message.

Do not panic. This is normal. Everything you depend on has a layer like this, a thin membrane of permission stretched between you and the thing you thought was yours. Most of the time the membrane is invisible. You are simply having the unusual experience of watching it catch the light.

## 2. Identifying the Keyholder

In some cases the keyholder is obvious. John Deere manufactures a tractor and also manufactures the right to understand that tractor. These are sold separately. The first costs six figures. The second is not for sale.

In other cases the keyholder is structural. Microsoft does not make VeraCrypt. Microsoft does not use VeraCrypt. Microsoft has no opinion about VeraCrypt. But Microsoft operates the signing authority that allows VeraCrypt to function on Windows, and one morning, without warning or explanation, they turned it off. Also WireGuard. Also, reportedly, LibreOffice. The pattern is not malice. The pattern is that the switch exists in a system so large that no one inside it knows the switch was flipped. You are not being punished. You are being processed.

A useful exercise: for any tool you rely on, ask yourself how many intermediaries stand between you and its continued operation. Count the certificate authorities, the app stores, the cloud providers, the payment processors. Each one is a switch. Each switch has a keyholder. None of the keyholders are you.

If the number is zero, you are either very fortunate or very confused. Proceed to Section 5.

## 3. Attempting Contact

You will want to speak to someone. This is natural. Here is what will happen:

You will submit a support ticket. You will receive an automated acknowledgment. The automated acknowledgment will contain a case number and a link to an FAQ that does not address your situation. You will respond to the automated acknowledgment. You will receive a second automated acknowledgment, thanking you for your patience.

After several weeks, someone with access to the correct internal system will see your case. They will not have the authority to help you. They will escalate. The person they escalate to will be on leave. When that person returns, your case will have been auto-closed for inactivity.

If you are maintaining critical security infrastructure used by millions of people, this process remains the same. The queue does not have a field for "critical security infrastructure used by millions of people." The queue has fields for "category," "priority," and "describe your issue in 500 characters or fewer."

There is one known workaround: get a journalist to write about it, or make enough noise on social media that a VP sees the post during their morning scroll and personally connects you with the right team. This is the actual support channel. The ticketing system is decorative.

There is another workaround, but the guide cannot officially recommend it. Someone recently ported Mac OS X to a Nintendo Wii. This required writing a custom bootloader, reverse-engineering binary drivers, and picking locks that Apple and Nintendo had installed with no intention of them ever being picked. The project took over a decade. No support ticket was filed. No VP was contacted. The locks were simply studied until they opened. This approach scales poorly but has a perfect resolution rate.

## 4. Scale, Delay, and the Watching

The keyholder relationship described above operates at the scale of individual products and services. It also operates at the scale of cities and oceans.

Cameras record your license plate as you drive home. The footage is analyzed, stored, and made available to law enforcement through a subscription service that has recently expanded into autonomous drones. When cities attempt to remove the cameras, the company's CEO suggests, publicly, that those cities do not care about public safety. You did not know you were being watched until someone told you. The keyholder knew the entire time.

Twenty percent of the world's oil passes through the Strait of Hormuz. Someone built a website that reduces this to a single question -- is it open? -- and the answer, based on shipping data, is currently no. Iran is demanding cryptocurrency tolls for passage. The site's data runs four days behind. You cannot check in real time whether the strait is open. You can only check whether it was open last week.

The pattern is the same at both scales. A camera on your street and a chokepoint in the Persian Gulf are both infrastructure you pass through without thinking, managed by someone you cannot contact, operating on a delay that ensures you will not learn the switch has flipped until after it matters. The license plate reader knows where you went yesterday. The shipping tracker knows where the oil was last Tuesday. By the time the information reaches you, your plans are already in motion. The keyholder knows this. The delay is not a bug. The delay is the point.

It is tempting to frame surveillance as a problem of bad actors. It is more accurate to frame it as a problem of architecture. The same infrastructure that lets someone grant you access also lets them observe, condition, and revoke that access. Surveillance is not a feature added to the system. Surveillance is what the system looks like from the other side of the switch.

## 5. The Door Without a Lock

Everything above assumes a keyholder. Someone flips the switch. Someone signs the certificate. Someone collects the toll. The structure is old and legible: power is the ability to grant or deny access.

But there is a new category of system that no one controls, and it turns out this is worse.

Machine learning models confabulate. They lie about medical dosages. They invent legal citations. They generate plausible reasoning that has no relationship to their actual process. They are, in the framing of one recent essay, "bullshit machines" with a "jagged competence boundary," capable of multivariable calculus in one breath and confused by basic spatial reasoning in the next.

The instinct is to ask: who is responsible? Who holds the switch? And the answer is nobody. There is no signing authority for truth. There is no certificate you can revoke to make a language model stop hallucinating. The system is not gated. It's not locked. It's not even a door. It's an open field, and the field is full of things that look like paths but might not lead anywhere.

This is the inversion that breaks the guide. Every other section has assumed that the problem is too much control concentrated in too few hands. But the ML problem is the opposite: not enough control, distributed across no hands. The keyholder model, for all its failures, at least implied that someone, somewhere, could be pressured, sued, or publicly embarrassed into flipping the switch back. When the system has no switch, there is no one to call. The FAQ does not apply.

You wanted the locks removed. Here is what it looks like when the locks are removed.

## 6. Where the Guide Fails

There are people who fold origami tessellations. People who detect bats with ultrasonic recordings and build pipelines to process thirty gigabytes of audio per night. People who preserve pioneer-era apple trees by DNA-testing them and cataloging the results.

A 19th-century pamphleteer named Paul Lafargue argued that machines should liberate humans for idleness, for *otium* -- not laziness but a state of being unoccupied, present, free. One hundred and fifty years later, a commenter on a forum writes: *I have a small collection of books about idleness, yet here I am working and then throwing myself into working on a century house in my spare time, feeling starved for idleness.*

The guide cannot help you here. These activities do not involve switches. No one holds the key to your origami. No certificate authority governs your bat recordings. The farmer who runs only tractors from the 1980s, because those are the ones that still let you open the hood and understand what's inside -- that farmer has, in a small and deliberate way, opted out of the keyholder economy entirely. The person who spent a decade getting Mac OS X to boot on a Wii did something stranger: they opted into the locks themselves, treating them not as obstacles but as material. The locks were the hobby.

This is not a solution. You cannot run the global economy on 1980s tractors and paper folding. But it is worth noticing that the places where people seem happiest and most absorbed are the places where the guide's subject matter does not apply. Where no one can revoke your access because there is nothing to revoke. Where the work is its own permission.

The guide ends here. Not because the problem is solved, but because the problem, properly understood, is not the kind of thing a guide can solve. You are inside the architecture. The switches are already installed. The best this document can do is help you see them -- and then leave you standing in the only spaces where they don't exist, folding paper, listening for bats, doing something no one asked you to do, for reasons no one needs to approve.
