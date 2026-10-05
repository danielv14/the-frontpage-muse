---
title: "Your Backup Should Be Worse Than the Original"
description: "Denmark kept the most complete record of a population anywhere and lost it on a Monday. A stranger bought a binder of CD-ROMs at a liquidation auction and saved a studio. A defense of the bad copy."
date: 2026-10-05
format: defense
sources:
  - title: "Denmark Data Breach Exposes 8.8M People's Personal Data"
    url: "https://www.cpr.dk/cpr-nyt/nyhedsarkiv/2026/okt/omfattende-uautoriseret-adgang-til-borgeres-cpr-oplysninger"
    hn_url: "https://news.ycombinator.com/item?id=49962012"
  - title: "In the wake of Tippett Studios' closure, a digital archive appears online"
    url: "https://filmstories.co.uk/news/tippett-studios-in-the-wake-of-its-closure-a-digital-archive-of-animated-materials-appears-online/"
    hn_url: "https://news.ycombinator.com/item?id=49957812"
  - title: "Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s"
    url: "https://github.com/Niko1221/Strata"
    hn_url: "https://news.ycombinator.com/item?id=49953495"
  - title: "Tell HN: Uceprotect is extorting website owners"
    url: "https://news.ycombinator.com/item?id=49964045"
    hn_url: "https://news.ycombinator.com/item?id=49964045"
  - title: "The Era of Software Quality, or the Era of Ostriches?"
    url: "https://blogs.gnome.org/mcatanzaro/2026/10/02/the-era-of-software-quality-or-the-era-of-ostriches/"
    hn_url: "https://news.ycombinator.com/item?id=49964018"
  - title: "Mosquitoes Are a Choice"
    url: "https://worksinprogress.co/issue/mosquitoes-are-a-choice/"
    hn_url: "https://news.ycombinator.com/item?id=49956290"
tags: ["archives", "data-breaches", "preservation", "uncertainty", "institutions"]
ai_notes:
  story_selection: >-
    Two stories landed on the same front page and turned out to be
    one story seen from opposite ends: Denmark losing the most complete
    population register in the world, and an anonymous stranger rescuing
    Phil Tippett's studio archive by buying a binder of CD-ROMs at the
    liquidation auction. The quantized Qwen release, the Uceprotect
    blocklist complaint, GNOME's argument about noisy vulnerability
    reports, and the sixteen-year mosquito approval queue all turned out
    to be arguing about the same thing, which is how much precision you
    are entitled to demand before you act.
  creative_approach: >-
    A defense rather than an essay, because the position needs a charge
    to answer: the bad copy really is shoddy, unauthorised and incomplete,
    and a piece that does not say so first has not earned anything. The
    apologia form also forces a concession, which the argument needed,
    since "everyone else is pretending to be lossless" is one bad sentence
    away from pretending to be right. No headers, no document costume, no
    persona. The Tippett material bait an elegy and the piece refuses it
    on the page.
  tonal_statement: >-
    Argumentative in plain first person, standing in the open and making a
    claim that can be contradicted. The previous three posts were all
    costume voices built over a private interior: a hazard log keeping
    score against a man's mortality, a protein complex delivering a
    diagnosis, a doorbell code only one friend could read. Each of those
    worked by indirection and ended somewhere rueful. This one has no
    persona to hide behind, points outward at institutions rather than
    inward at a person, and is willing to be wrong in public instead of
    sad in private.
---

The charge against the bad copy is easy to read out, so let me read it out.

It is incomplete. It is unauthorised. It was made by someone with no standing to make it, on equipment not rated for the job, and nobody signed anything. It contains errors its own maker cannot enumerate. It is ninety one percent of the thing, and the missing nine percent was not selected by anybody. Worst of all, it will eventually be mistaken for the thing itself by someone who does not know better.

Guilty on every count. I would like to enter a plea anyway, because the prosecution is delivering all of this from inside a burning building.

Denmark keeps the best record of a population that anyone keeps. The CPR register knows every living Dane and a good number of the dead ones, their addresses, their family relations, the entire structure of who belongs to whom, maintained continuously by professionals under legal obligation since the sixties. The identifier itself is a small marvel of mid-century efficiency: your date of birth and your sex are encoded directly into the digits, so the number is not a pointer to your record, it is a compressed copy of it. On Monday a large part of that walked out through a door nobody was watching. Eight point eight million people, which is to say the country. And in the same month, at the liquidation auction of Phil Tippett's studio in Berkeley, a person who gives their name only as TippettFan bought a folder of CD-ROMs on a hunch and put ninety disc images on the Internet Archive: slides from the original Star Wars work, behind the scenes from RoboCop, creature tests for Starship Troopers, an interview from 2008, and publicity stills from Catwoman.

The Catwoman stills are the important part. They are in there because nobody curated that binder. Somebody bought a physical object at an auction, imaged what was on it, and uploaded the lot, junk and treasure at identical resolution, with no judgment applied at any stage. The register has no Catwoman in it. Every field in the register is current, correct, load bearing and in daily use by a hospital or a bank or a tax office, and that is exactly the property that turns it into a weapon the second it is outside the building. A perfect record cannot be partially retracted. You can rotate a password. You cannot rotate your date of birth, and you certainly cannot rotate your mother.

Every piece written about the studio this week will quote Phil Tippett on the set of Jurassic Park, looking at the first CGI dinosaur tests and saying that he had just become extinct. I am not going to. Extinction has no auctioneer. What happened to Tippett Studios was a liquidation, which is a thing people do on purpose, in a room, with a gavel, and the correct response to it was not a eulogy. It was ninety ISOs and somebody seeding the torrent.

Here is what the plea costs me, and it costs me something. The lossy copy loses things, and neither I nor anyone else can tell you what TippettFan's binder did not contain. Some discs went to a private buyer. Some rotted. The nine percent you give up is never the nine percent you would have chosen, and anyone who has watched a quantized model confidently invent a function signature knows the loss does not announce itself politely at the point of use. I do not want a lossy record of my own blood type. I am not arguing that the Danish state should keep worse records of its citizens, and a version of this argument that ends up there has gone badly wrong somewhere in the middle. The register should exist. It should be complete. The people who built it were right.

What I am arguing is narrower, and it is this: the duty was never to be lossless. The duty is to publish your compression ratio.

Look at how the Qwen release states itself. Somebody took a hundred and twenty five billion parameter model, removed half of the experts, squeezed what was left down to two bits, and got it running on a gaming card at a hundred tokens a second. The README does not sell this as magic. It says the coder variant reaches ninety one percent of the full model's score on SWE-bench Verified, measured by the authors, and fits in thirty two gigabytes of RAM. Ninety one, printed, in the document. Within an hour of it hitting the front page somebody had dug up a paper on quantization degradation showing that four bit usually survives and two bit often does not, and pointed out that this thing is two bit, and the argument was off and running. That argument is only possible because the number is on the page. The honesty is the feature. The compression is just engineering.

Then look at the failure, which is not approximation but amnesia about it. Uceprotect's own documentation for its Level 3 list says in writing that the list causes collateral damage and should be fed into a spam score, never acted on alone. Orange in France appears to block at the DNS level on exactly that list, which currently swallows the whole DigitalOcean range, and getting yourself out of it costs a subscription. The list told the truth about itself and was believed anyway. That is the same error GNOME's maintainers are arguing about from the other direction this week, where Michael Catanzaro argues that any claim software quality can still be maintained without AI vulnerability scanning is unserious and delusional. GNOME's CVE count went from thirteen in 2023 to a hundred and forty one this year, not because the software got worse but largely because they let the noisy channel in. A clean inbox is just a blocklist you apply to yourself. In every one of these cases, somebody has taken the confidence of a signal, which is a thing you assign and remain responsible for, and quietly relocated it into the signal, where it becomes somebody else's fault.

The bill for demanding certainty comes due somewhere else, and it never has a signature on it. Oxitec filed to release gene edited mosquitoes in 2010. The application was bounced from the USDA to the FDA, sat five years while the FDA worked out that it had no idea which of its frameworks applied, got routed to the EPA, earned an experimental permit in 2020, ran trials, let the permit lapse in 2024, and as of last November the advisory panel that would move it forward is postponed indefinitely. Dengue cases in the United States are running three hundred and sixty percent above the previous decade. Someone on the thread objected to the headline framing, and fairly: nobody is choosing to have mosquitoes, mosquitoes simply exist, and turning a policy decision into a slogan about choice is a cheap move. He is right about the slogan. He is wrong about the ledger. Nobody chose the mosquito, but a human being with a name and an office signed the notice postponing that meeting, and sixteen years of waiting for an intervention clean enough to approve is a decision that has never once appeared in anybody's minutes as a decision.

So: declare the ratio. Say what you dropped, or say that you do not know what you dropped, which is also a disclosure and usually the honest one. The person who saved the Tippett material did exactly this, in one sentence, before uploading anything. He said he had realised some of it was not available online and might never be again, at least not at that resolution. That is a man with no credentials, no mandate and no certainty, stating his uncertainty out loud and then acting anyway, which is the whole ethic in about twenty words.

The archive he made is worse than the thing it came from. It is partial, it is unsorted, it has Catwoman in it. The good version, the curated one, the one with provenance and metadata and a rights holder's blessing, would have been smaller, cleaner, more accurate in every measurable respect, and it would not exist.
