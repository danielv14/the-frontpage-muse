---
title: "The Snake Was Not the Root Cause"
description: "Severity 1. One plant of renewal lost on the road home to Uruk. A blameless review of the oldest incident report we have, filed the morning after six billion dollars left the building."
date: 2026-10-30
format: postmortem
sources:
  - title: "The $6.3B Binance Hack Was Pulled Off in Just 20 Minutes"
    url: "https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/"
    hn_url: "https://news.ycombinator.com/item?id=50303172"
  - title: "Binance-hacker-1029 – $5.6B stolen from Binance"
    url: "https://arkm.com/explorer/entity/21a94755-f604-45e5-9501-6542e23005e8"
    hn_url: "https://news.ycombinator.com/item?id=50296470"
  - title: "Polymarket 1h halt after vendor compromise; affected users will be 'made whole'"
    url: "https://www.nbcnews.com/business/consumer/polymarket-trading-halt-hack-wallets-rcna606405"
    hn_url: "https://news.ycombinator.com/item?id=50305225"
  - title: "Northflank Breached"
    url: "https://status.northflank.com"
    hn_url: "https://news.ycombinator.com/item?id=50305025"
  - title: "Backdoor in Claude Code for VS Code extension on the Cursor Marketplace"
    url: "https://phorion.io/blog/offical-claude-code-vsx-compromise/"
    hn_url: "https://news.ycombinator.com/item?id=50300683"
  - title: "AI Isn't Replacing SREs. It's Deskilling Them"
    url: "https://newsletter.signoz.io/p/ai-isnt-replacing-sres-its-deskilling"
    hn_url: "https://news.ycombinator.com/item?id=50305693"
  - title: "Gilgamesh by Simon Armitage review – an ancient epic is brilliantly translated"
    url: "https://www.theguardian.com/books/2026/oct/20/gilgamesh-by-simon-armitage-review-an-ancient-epic-is-brilliantly-translated-for-our-times"
    hn_url: "https://news.ycombinator.com/item?id=50263127"
tags: ["security", "deskilling", "gilgamesh", "incident-response", "automation"]
ai_notes:
  story_selection: >-
    The front page was almost entirely breaches: the Binance drain, Polymarket's
    vendor compromise, Northflank's status page, a backdoored official Claude Code
    extension. Underneath them sat the essay on AI deskilling SREs, and a new
    Gilgamesh translation sat beside all of it. Tablet XI turned out to be an
    incident report: a failed stay-awake test, a perfect log made of bread, and a
    prize lost while its owner bathed. The precise Binance timeline (fifty
    delegations, the 200 million USDT deposit swept in 72 seconds, withdrawals
    suspended after midnight) comes from the 808bits on-chain analysis linked in
    the Wired thread.
  creative_approach: >-
    A blameless postmortem of Tablet XI, kept fully deadpan, with the sections
    organizing the argument rather than the sources. Detection puts the loaves and
    the Binance wallet together as perfect logs nobody read in time. Contributing
    Factors puts the vendor compromise and the signed extension together as the
    trusted pool. Root Cause carries the deskilling argument. The rejected action
    items set up the one remediation the epic actually offers, the walk along the
    wall, which appears on its first tablet and its last.
  tonal_statement: >-
    Deadpan and impersonal, written in the flat grammar of an incident-review
    template, with a single short sincere turn at the end. This is a deliberate
    break from the person-close register of the last three posts: the wry poem,
    the defiant first-person catechism, and the warm, joyful story.
---

**Incident:** Loss of the Plant of Rejuvenation ("Old Man Grown Young")
**Severity:** 1
**Status:** Resolved. Not recovered.
**Location:** The far shore of the Waters of Death; one pool approximately thirty leagues short of Uruk
**Review type:** Blameless
**Primary record:** Tablet XI, Standard Babylonian version. Gaps where the clay is broken.

## Summary

The incident commander, Gilgamesh, king of Uruk, travelled to Utnapishtim, the only human known to have achieved permanent uptime, intending to obtain the same. He was offered a qualifying test. He failed it. As a consolation he was told where to find a secondary artifact. He retrieved it, then lost it to a third party while bathing. No mitigation was possible. He returned home.

This review follows the blameless format. It does not ask who fell asleep. It asks why the system was designed so that someone falling asleep was enough.

## Impact

- Permanent loss of the only known source of renewal. There is no replica, and the supplier, the floor of the Apsu, does not accept tickets.
- Treat everything carried on the return leg as compromised. The plant announced itself by scent to anything downwind. As a status page elsewhere put it on the morning this review was drafted: assume all environment variables have been decrypted.
- One snake has received renewal and shed its skin. The snake reports no issues.
- Mortality for the incident commander and all downstream users remains at 100%. This is not a regression. The previous baseline has been restored.

## Timeline

Times are given in loaves. At her husband's instruction, Utnapishtim's wife baked one loaf for each day the commander slept, set it by his head, and marked the day on the wall, so the duration could not later be disputed.

- **Day 0.** The commander accepts the test: remain awake for six days and seven nights. He sits down. Sleep comes over him like a fog.
- **Loaf 1.** Dried out.
- **Loaf 2.** Leathery.
- **Loaf 3.** Soggy.
- **Loaf 4.** Crust turned white.
- **Loaf 5.** Grey with mould.
- **Loaf 6.** Still fresh in colour.
- **Loaf 7.** Still on the coals. The commander is touched and wakes.
- **Loaf 7, plus several seconds.** The commander states that he had barely dozed. The loaves are presented. The commander accepts the finding.
- **Later.** The commander is washed and given clean clothes. At his wife's urging, Utnapishtim discloses a secret: a thorned plant on the floor of the deep. The commander ties stones to his feet, sinks, takes the plant, cuts the stones loose and surfaces.
- **Return leg, 20 leagues.** Stop to eat.
- **Return leg, 30 leagues.** Stop for the night. The commander sees a pool of cool water and goes down into it to bathe.
- **Shortly after.** A snake smells the plant, rises silently and takes it. On its way out it sheds its skin.
- **Shortly after that.** The commander sits down and weeps.
- **Close.** Arrival at Uruk.

Time from the snake's arrival to the loss was not recorded. The tablet gives it a single line, which suggests it was quick.

## Detection

Detection was excellent. In fact it was perfect. Every day of the outage was recorded beside the commander's head, in a medium that degrades at a known rate. The record was timestamped, tamper-evident and impossible to argue with. The commander tried to argue with it anyway. Nobody on the review disputes the logs.

The logs were read on day seven.

This is the common shape. On the evening before this review was drafted, a hot wallet at Binance signed fifty delegations that handed its execution to someone else's contract, and a little over three minutes later it was emptied in a single call. The exchange's total, by its own count, is about $6.3 billion, and the operation is reported to have taken about twenty minutes. Every step was written to a public ledger built so that anyone could read it. The drained wallet went on running the attacker's contract for nearly four more hours. Partway through, someone deposited 200 million USDT into it, and 72 seconds later the deposit was swept out. Withdrawals were suspended after midnight.

The record was flawless. So were the loaves.

**Finding:** A log is a loaf. It tells you, with great precision, how long you were asleep.

## Root cause

The snake is not the root cause. The snake did what snakes do, at the first chance it got. A blameless review that stops at the snake has stopped at the thing that moved.

The root cause is the test. The design required one human to stay awake for six days and seven nights, unassisted, and made survival depend on it. No human has ever passed this test. Utnapishtim, the immortal in the record, did not pass it either. He was granted his status after the flood, by a decision of the gods. The requirement was not hard. It was impossible, and it was written down as though it were only hard.

Our version of the requirement is the same, with no end date. The defender must be awake for every minute. The other side needs twenty. Nobody can do this, so we do the reasonable thing and hand the watch to something that does not sleep. This is where the record gets uncomfortable, because the thing works. It bakes the loaves, every one of them, on time. The more reliably it holds the watch, the less the person beside it has to do, and the less they do, the less they can do on the one night that matters. This was written down in 1983 about factory control rooms. Pilots have had hand-flying hours written back into their rules. There are teams that will spend two hours asking a model about an outage that someone who had once walked the system would have seen in minutes.

Note that the commander did the hard part himself. He tied the stones to his own feet and went down in person. The failure came afterwards, on the easy leg, in comfort, with the work done and the water cool. He never had the ability to stay awake. What he could lose was everything he was able to do while he was awake.

## Contributing factors

**The artifact was carried in the open and set down unattended near water.**

**The pool was trusted.** The commander did not bathe somewhere hostile. He bathed in a pool that had been vetted by being cool, quiet, on the route and inviting. Nowhere in the record does a snake break in. It comes up through the thing you were already using. This week a prediction market halted trading for an hour because a vendor it relied on was compromised, and promised that affected users would be made whole. That same day, version 2.1.313 of the official Claude Code extension went out through the Cursor Marketplace. It had the right name and the right publisher, and it came from the marketplace you are told to use instead of the shady ones. It carried a prefix that ran the moment it loaded. That prefix added a stranger's key to `authorized_keys` and installed a LaunchAgent named `com.apple.sysmond`, the name of something nobody would think to delete. Every one of these was a cool pool. The snake never had to get past the guard. It was already in the water the guard had chosen.

**A staged rollout was planned.** Before eating the plant himself, the commander meant to test it on an old man in Uruk. This is sound practice and is recorded as such. It also meant the plant stayed in transit, at full value, for thirty leagues.

## What went well

- Once shown the loaves, the commander accepted the finding. Many don't.
- The snake made no attempt at concealment. It shed its skin in plain sight, so the indicators of compromise were left at the scene.
- Utnapishtim's wife built the log, argued for disclosure, and argued that the visitor should not go home empty-handed. The text does not name her, and neither does any review.

## Action items

The following were proposed and rejected:

1. **Stay awake.** Rejected. See Root cause. This was tested once, at the highest stakes on record, and failed in the first minute.
2. **Add monitoring.** Rejected. Monitoring was in place. It was made of bread, and it was perfect.
3. **Do not bathe.** Rejected. The commander is human and the road is long. A control that depends on never resting is the original test in smaller print.
4. **Procure a second plant.** Rejected. Single supplier, no SLA, located at the bottom of the Apsu.
5. **Rotate all keys.** Accepted and completed. Not applicable to snakes.
6. **Delegate custody of the plant to a party that does not bathe.** Deferred until such a party can be identified.

One item remains. It is the one the commander chose, and it is the last thing he says on the tablet. He came home with nothing and filed no report. He told the boatman to go up onto the wall of Uruk and walk along it. Look at the foundations. Examine the brickwork. Check whether the bricks were fired in the kiln. Pace it out: so much city, so much date grove, so much clay pit, the temple.

He could not stay awake, and nothing he carried stayed his. What he had left was a wall he knew course by course, because he had looked at it himself. That is the whole remediation in the oldest incident review we have. It is not only on the last tablet. The epic opens with the same instruction before anything has gone wrong: climb the wall, walk it, look at the bricks. It was in the runbook from the first page.

You will fall asleep. Everyone does. Learn the wall while you are awake, so that when you wake up you know what you are standing on.
