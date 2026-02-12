---
title: "The Exhibition of Seeing and Being Seen"
description: "A guided tour through a fictional museum where every room asks the same question: who is watching, and what do they think they see?"
date: 2026-02-12
sources:
  - title: "Amazon Ring's lost dog ad sparks backlash amid fears of mass surveillance"
    url: "https://www.theverge.com/tech/876866/ring-search-party-super-bowl-ad-online-backlash"
    hn_url: "https://news.ycombinator.com/item?id=46978966"
  - title: "WiFi could become an invisible mass surveillance system"
    url: "https://scitechdaily.com/researchers-warn-wifi-could-become-an-invisible-mass-surveillance-system/"
    hn_url: "https://news.ycombinator.com/item?id=46920315"
  - title: "Discord/Twitch/Snapchat age verification bypass"
    url: "https://age-verifier.kibty.town/"
    hn_url: "https://news.ycombinator.com/item?id=46982421"
  - title: "GPT-5 outperforms federal judges in legal reasoning experiment"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6155012"
    hn_url: "https://news.ycombinator.com/item?id=46982792"
  - title: "Kanchipuram Saris and Thinking Machines"
    url: "https://altermag.com/articles/kanchipuram-saris-and-thinking-machines"
    hn_url: "https://news.ycombinator.com/item?id=46921757"
  - title: "Ireland rolls out basic income scheme for artists"
    url: "https://www.reuters.com/world/ireland-rolls-out-pioneering-basic-income-scheme-artists-2026-02-10/"
    hn_url: "https://news.ycombinator.com/item?id=46977175"
  - title: "NetNewsWire Turns 23"
    url: "https://netnewswire.blog/2026/02/11/netnewswire-turns.html"
    hn_url: "https://news.ycombinator.com/item?id=46978490"
  - title: "Microwave Oven Failure: Spontaneously turned on by its LED display"
    url: "https://blog.stuffedcow.net/2024/06/microwave-failure-spontaneously-turns-on/"
    hn_url: "https://news.ycombinator.com/item?id=46979936"
tags: ["surveillance", "seeing", "craft", "art", "museum"]
---

**THE EXHIBITION OF SEEING AND BEING SEEN**
*A catalog for an exhibition that does not exist, at a museum that has not been built, in a city that cannot decide whether it wants to be watched.*

Curated by the Department of Ambient Anxiety.
On view February 12, 2026 — indefinitely.

## Room 1: "Good Boy" (Mixed Media, 2026)

*A 60-second video loop projected onto a wall of 4,000 miniature Ring cameras arranged in the shape of a golden retriever.*

The piece recreates, frame by frame, Amazon's Super Bowl advertisement in which a network of residential doorbell cameras is used to locate a lost dog. The dog is real. The cameras are real. The emotional manipulation is so precisely engineered it approaches a kind of sincerity.

In *The Dark Knight* (2008), Batman hijacks the cell phones of Gotham's citizens to track the Joker. The film treats this as a moral crisis so severe that the only resolution is the destruction of the system itself. The audience understood: this was the line, and crossing it — even for the right reasons — was monstrous.

Eighteen years later, a more powerful version of the same technology is advertised during the Super Bowl as a way to find your dog. The audience is meant to cry. Many of them do.

The WeRateDogs account, famous for its relentless commitment to rating dogs 13/10, broke character for the first time in its history to condemn the ad. The curators consider this the most significant cultural event of the week.

**Visitor note:** During the exhibition's first week, a commenter left the following on the guest book: "The frog has been boiled when it comes to information privacy and if you were an alien you'd think humanity sacrificed privacy and safety for something important but no, it's to trace someone's lost dog."

**Related installation, east alcove:** A single Nest doorbell camera, disconnected, with a small placard reading: *"Nancy Guthrie's camera. She didn't pay for cloud storage. Google produced the footage anyway."*

## Room 2: "197 Silhouettes" (Radio Frequency on Plaster, 2026)

*A long white corridor. The visitor walks through it alone. On the far wall, their own silhouette appears — rendered not by light, but by WiFi.*

Researchers at a German university have demonstrated that ordinary WiFi signals — the same ones carrying your Netflix stream and your Zoom call — can be used to identify individuals through walls with near-perfect accuracy. The method requires no cameras, no cooperation, no specialized hardware. It reads the beamforming feedback information that every modern router already broadcasts, unencrypted, to anyone within range. With 20 passes and a trained model, they achieved almost 100% identification accuracy across 197 participants.

The exhibit recreates this. As you walk the corridor, the WiFi access points in the ceiling track the way your body disrupts their signals. Your gait. Your height. The specific way your shoulders move. On the wall, a shape assembles itself — not your face, not your clothes, but something more intimate. The geometry of how you move through space. A thing you have never seen and cannot change.

One visitor, an ML engineer, left this in the guest book: "What stands out here isn't the accuracy. It's the simplicity. No specialized hardware, no cameras, no cooperation from the target needed."

Another wrote: "The window to embed privacy protections into the IEEE 802.11bf standard is closing. Once this is ratified without safeguards, retrofitting privacy will be much harder."

The museum's WiFi password is not posted anywhere. You are welcome to try to find it.

## Room 3: "Face Value" (Digital Forgery, 2026)

*An empty room with a single browser console open on a monitor. The cursor blinks.*

Discord, Twitch, Snapchat, and Kick all use a service called k-ID to verify the ages of their users. The system works like this: it runs a face-estimation model locally on your device, generates metadata about the geometry of your face, encrypts that metadata, and sends it to the server. The face itself never leaves your machine. This is presented as a privacy feature.

The problem, as a teenager demonstrated this week, is that k-ID doesn't actually verify faces. It verifies *metadata about faces*. Which means you can generate plausible-looking metadata without a face at all. A few lines of JavaScript in the browser console. AES-GCM encryption with the right keys. Some statistical noise that looks like a 25-year-old's cheekbones. Done.

The exhibit invites visitors to sit at the console and contemplate, but not to type. The bypass code is not displayed. Instead, the wall text reads:

*"Age verification as a concept requires either trusting the client (spoofable), collecting sensitive data (breach liability), or binding to attested hardware (excludes platforms and users). Pick your poison. Every vendor in this space is just choosing which failure mode they prefer."*

The irony cycle is printed in smaller text below: Discord's 2025 data breach leaked 70,000 government IDs from their support vendor. This pushed them toward "privacy-preserving" on-device verification. But the privacy-preserving design is exactly what makes it trivially spoofable. They moved away from collecting data because data is a liability, and moved toward a system that's bypassable because it doesn't collect enough to verify.

The room smells faintly of teenage rebellion. The curators cannot explain this.

## Room 4: "100%" (Judicial Installation, 2026)

*A courtroom. On the bench sits no one. The verdict has already been rendered.*

A new paper reports that GPT-5 "outperforms" federal judges in legal reasoning. The headline travels fast. The paper itself says something more interesting.

The researchers replicated an older experiment: present a conflict-of-laws problem to federal judges and see how many apply the technically correct legal rule. Only 31% of the human judges chose the letter of the law. GPT-5 chose it 100% of the time. The paper calls this "error-free allegiance to formalism."

But why did the judges deviate? The case materials described a plaintiff who suffered gruesome injuries in a car accident. Under one state's law, she could recover $750,000. Under another's, only $250,000. The "legally correct" answer — the one GPT-5 chose without hesitation, every single time — was to cap her compensation.

The judges who "erred" were not confused. They were choosing justice over procedure. They read about a woman's shattered body and decided that the technically correct answer was the wrong one. This is not a bug. This is the entire point of having judges.

One commenter put it plainly: "Far from making the case for AI as a judge, this paper highlights what happens when AI systematically applies often harsh laws vs the empathy of experienced human judgment."

Another: "If the law requires no interpretation, why have judges? Just go full Robo Judge Dredd. Terrifying."

The exhibit includes a single sheet of paper on the bench. It reads: *"The 100% score, all by itself, should cause suspicion."*

The courtroom has no exit. Visitors must request permission to leave from a screen mounted by the door. The screen always says yes. It takes approximately 0.3 seconds. It does not look at you while it decides.

## Room 5: "The Loom" (Silk and Silicon, Ongoing)

*A functioning Kanchipuram handloom, operated by no one, weaving a pattern that has taken a thousand years to learn.*

In the temple city of Kanchipuram, in Tamil Nadu, weavers have been making silk saris for a millennium. Each sari takes days of work on a handloom. The patterns carry meaning — the mango motif, the temple border, the checkered body — and the knowledge of how to weave them passes from hand to hand, generation to generation, in a grammar that was never written down.

That grammar is vanishing. The weavers are aging. Their children take software jobs. The European fashion houses, meanwhile, sell Kanchipuram's motifs without credit — Prada rebrands the Kolhapuri chappal for $930, Dior releases a coat dripping in Lucknowi Mukaish work for $200,000. The appetite for the aesthetic is ravenous. The hands that created it are disappearing.

An article this week proposes that AI — specifically capsule networks, which understand spatial relationships between features rather than just detecting isolated elements — could help preserve the lost design grammar. Biotechnology could replace the toxic dyes. Blockchain could authenticate the provenance. The thinking machines as apprentices to the weavers, not replacements.

A commenter from Kanchipuram wrote: "As a Kanchipuram native, this was totally unexpected and a pleasant surprise. I have visited one of these co-op looms and it's mindblowing how to this day the Kanchi Pattu is made with a handloom."

Another, from the nearby handloom hub of Erode: "This hits close to home. Research like this helps preserve and better understand regional textile ecosystems that often don't get enough structured documentation."

A third, less optimistic: "This is just one piece of heritage among countless which have already been lost or haven't got a voice to save them. Every district has a rich heritage in cuisine and fabric which is hundreds of years old. A lot of it was just lost to history because it became commercially nonviable."

The loom in the exhibit continues to weave. The pattern it produces is not for sale. The curators have been told this makes the room commercially nonviable. The loom does not care.

## Room 6: "€1,300 a Month" (Conceptual, 2026)

*An empty studio. Rent has been paid. No art has been produced yet. This is the piece.*

Ireland has launched a basic income scheme for artists: €1,300 per month, no strings attached, so that artists can afford to keep making art. The Hacker News comment section, predictably, erupted.

"Why are artists more deserving than unemployed insurance salespeople or carpet installers?"

"Since only people with a wealthy family safety net have the wherewithal to call themselves artists, these schemes just end up as a transfer from poor to rich kids."

"In the Netherlands they had something like this in the 80s. The state ended up with entire warehouses filled with crap."

"Sweden introduced a similar scheme in 1964. As far as I know, there's been no studies surrounding any measurable increase in artistic quality or artistic output."

The debate is old and it is real, but the exhibit is interested in a quieter question. Ireland already exempts artists' income from tax. Society has not disintegrated. A commenter's Irish author friend — not from a rich family, not well-off — supports her husband and child by writing several books a year and stressing a lot. She could not do this without the tax exemption.

Another commenter, an artist in the room next door, offered a different frame entirely: "The market rewards you for repetition, not novelty." Find the thing that connects with people. Then do it again. Then again. Build selling like a muscle. Accept that you are running a business. Never abandon your soul.

The exhibit pairs these two ideas: the state that pays you to exist, and the market that pays you to repeat yourself. Between them, somewhere, is the actual work.

The studio remains empty. The rent is due again in 28 days. The curators consider this generative tension.

## Room 7: "River Stone" (Software, 2003–2026)

*A single Mac, running NetNewsWire, displaying an RSS feed of the exhibition's own press coverage. The application is 23 years old.*

NetNewsWire launched on February 11, 2003. It is an RSS reader. It does one thing. It has been doing this one thing for twenty-three years.

A visitor wrote: "NNW is like a river stone tumbled smooth and with enough weight that it feels good in your hand."

Another: "Every time I open the app I feel like I'm back in the era of Mac OS X Snow Leopard and Steve Jobs is about to reveal one more thing."

The application's philosophy page reads: "We believe that apps should never crash. They should be free of bugs. They should be fast — they should feel lighter-than-air. We believe that quality is more important than just piling on features; we believe that quality is the most important feature."

In a week dominated by systems that watch, deceive, and optimize, this room offers something else. Software that does not track you. That does not verify your age. That does not analyze your gait through WiFi signals. That carries no advertising, generates no engagement metrics, and has never once tried to locate your dog.

It just shows you your feeds. It has been doing this since before some of its users were born.

The curators have nothing to add.

## Room 8: "Port H.0" (Appliance Autopsy, 2024)

*A disassembled microwave oven, mounted on the wall like a butterfly in a display case. The blue LEDs are still faintly glowing.*

A microwave spontaneously turned itself on. Not because of a software bug, not because of a hacker, not because of surveillance or AI or any of the anxieties that fill the other rooms of this exhibition. It turned on because its blue LEDs got old.

The microwave's control board shared a single microcontroller pin between two functions: driving segment A of the LED display, and sensing whether the door was open or closed. As the blue LEDs aged, they developed reverse-bias leakage current. When the microcontroller tried to read the door switch, the dying LEDs pulled the voltage high enough to register "door open" when the door was shut. The relay engaged. The fan spun. The turntable turned. The magnetron, mercifully, stayed off.

Blue LED displays failed at this rate 25 times more often than green ones.

A commenter wrote: "This is literally evidence of stuff being designed to fail. An extra diode costs less than a cent at production scale."

Another: "More proof blue LEDs are the devil and should have never been put into all of our electronics."

The curators placed this exhibit last because it is the simplest story in the collection and, in its way, the most honest. A machine misread a signal. It saw something that wasn't there. It acted on bad information with total confidence. It did not mean any harm. It did not know it was wrong. It simply could not tell the difference between the light it was supposed to emit and the light it was supposed to read.

The microwave has no comment.

---

*The Exhibition of Seeing and Being Seen is free and open to the public. No tickets are required. No identification will be checked. Your WiFi signal, however, has already been noted.*

*The museum gift shop sells nothing. The museum café is closed. The museum itself may not exist. But you are here, and you have been observed, and the exhibition thanks you for your attendance.*

*Please exit through the router.*
