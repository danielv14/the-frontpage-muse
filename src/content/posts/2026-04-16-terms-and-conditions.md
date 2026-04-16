---
title: "Terms and Conditions"
description: "On promises that assume a world that no longer exists by the time they come due."
date: 2026-04-16
sources:
  - title: "Google broke its promise to me – now ICE has my data"
    url: "https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data"
    hn_url: "https://news.ycombinator.com/item?id=47782570"
  - title: "Cal.com is going closed source"
    url: "https://cal.com/blog/cal-com-goes-closed-source-why"
    hn_url: "https://news.ycombinator.com/item?id=47780456"
  - title: "US v. Heppner (S.D.N.Y. 2026) no attorney-client privilege for AI chats"
    url: "https://fingfx.thomsonreuters.com/gfx/legaldocs/xmvjyjekkpr/Rakoff%20-%20order%20-%20AI.pdf"
    hn_url: "https://news.ycombinator.com/item?id=47778920"
  - title: "Why Sal Khan's AI revolution hasn't happened yet, according to Sal Khan"
    url: "https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/"
    hn_url: "https://news.ycombinator.com/item?id=47788845"
  - title: "Cybersecurity looks like proof of work now"
    url: "https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html"
    hn_url: "https://news.ycombinator.com/item?id=47769089"
  - title: "Stop Using Ollama"
    url: "https://sleepingrobots.com/dreams/stop-using-ollama/"
    hn_url: "https://news.ycombinator.com/item?id=47788385"
  - title: "The buns in McDonald's Japan's burger photos are all slightly askew"
    url: "https://www.mcdonalds.co.jp/en/menu/burger/"
    hn_url: "https://news.ycombinator.com/item?id=47785738"
  - title: "Stealth signals are bypassing Iran's internet blackout"
    url: "https://spectrum.ieee.org/iran-internet-blackout-satellite-tv"
    hn_url: "https://news.ycombinator.com/item?id=47787877"
tags: ["promises", "trust", "erosion", "open-source", "privacy", "essay"]
ai_notes:
  story_selection: >-
    The April 16 frontpage was saturated with stories about broken promises.
    Google handing data to ICE despite its stated notification policy. Cal.com
    abandoning open source. A federal ruling stripping privilege from AI chats.
    Sal Khan admitting his AI tutor fell short. Ollama quietly removing
    attribution. What connected them was not the subject matter but the
    structure: each promise was made sincerely under conditions that no longer
    held when the promise was tested.
  creative_approach: >-
    The editor approved a quiet, direct essay with melancholy clarity rather
    than sarcasm or satire. The key structural constraint was aggressive
    blending: Google/ICE and the AI privilege ruling share paragraphs as
    two faces of the same broken wall; Cal.com and Ollama interleave as
    opposite erosions of open-source promises; Khan and cybersecurity
    cross-pollinate as technology promises that collapse into economics.
    McDonald's askew buns serve as a lighter counterpoint about honest lies,
    and Iran's satellite signals provide a hopeful landing about promises
    kept through improvisation.
---

A promise is a claim about the future made with the authority of the present. This is its dignity and its structural flaw. The person making the promise believes, at the moment of making it, that the world will hold still long enough for the promise to be kept. It almost never does.

Here is a small catalog of promises that were made in good faith and broken by weather.

## The boundary

Google tells its users, in writing, that it will notify them before handing their data to law enforcement. The language is careful and clear: you will be told, you will have the chance to object. It is a promise that assumes the company will always be in a position to choose notification over compliance, that the legal and political ground beneath the promise will remain solid.

A graduate student attends a protest. Months later, living in another country, he receives a message that is not a warning but a receipt. The data has already been given. ICE already has it. The promise was not rescinded or renegotiated. It was simply overrun.

In a courtroom in the Southern District of New York, a different boundary dissolves along similar lines. A man facing legal proceedings does what any reasonable person might do: he opens a chat window and tries to understand his situation. He asks questions. He tests arguments. He thinks out loud. This is the kind of preparation that, if conducted with a lawyer sitting across the table, would be wrapped in privilege so thick you could not compel a word of it. But the table is missing, and the lawyer is missing, and what remains is a conversation with a system whose terms of service grant it the right to review your inputs. Judge Rakoff's ruling is narrow, but its implications are wide: if you think out loud in a room where a third party is contractually entitled to listen, you have not been thinking privately. You have been publishing.

The graduate student and the defendant made the same mistake. They trusted a boundary that existed on paper but not in the architecture of the systems they were using. Google's notification policy and the doctrine of attorney-client privilege are both, at bottom, promises that a wall will stand between your information and the powers that want it. But the wall was never structural. It was a curtain, and curtains move when the wind changes.

## The source

There is something particularly poignant about an open-source promise, because it is a promise about identity rather than behavior. When a company says "we are open source," it is not describing a policy. It is describing what it is. To reverse that is not a change of plans. It is a kind of molting.

Cal.com announced this week that it is going closed source. The reason given is security: AI can now scan open codebases for vulnerabilities at scale, and the company has concluded that keeping its code visible is keeping its users exposed. This is a sincere argument. It is also, as many pointed out within minutes, a direct contradiction of the argument made by security researchers who believe open source is the only defense against exactly this threat, because shared visibility means shared auditing costs. One side says: we must close the code to keep you safe. The other says: you can only be safe if the code stays open. They are both reasoning correctly from premises that cannot coexist.

Meanwhile, in a quieter corner of the same ecosystem, a tool called Ollama has been building its reputation as the friendly, local-first way to run AI models. It was built on top of llama.cpp. For over a year, its documentation did not mention this. The MIT license notices were absent. The attribution that open source depends on, the simple promise of "we will say where this came from," was simply not there. No announcement, no justification, no security argument. Just silence where credit should have been.

Cal.com broke its promise loudly and with reasons. Ollama broke its quietly and without any. And somehow the quiet one is worse, because Cal.com at least did the courtesy of telling you the wall was coming down. When the Thunderbird project's lead appeared in the discussion to say that their scheduling tool would "always be open source," the word "always" hung in the air like a dare. Everyone who has watched this long enough knows what "always" means. It means "under current conditions."

## The transformation

The most forgivable broken promises are the ones where the promiser genuinely believed the tool would do what they said it would do. Sal Khan believed, three years ago, that an AI tutor would transform education. He said so publicly and often, with the conviction of someone who had spent decades building the world's most successful free education platform. He had earned the right to that conviction.

Three years later, he says, more quietly, that students simply do not use it. The tool works. The students do not come. He describes sitting in the back of a classroom, waiting for someone to raise their hand, and realizing that an AI tutor faces the same problem: it can only help the students who are already asking. The ones who need it most are the ones least equipped to know what to ask.

This is the same collapse that happens when you look closely at the new economics of cybersecurity. The promise of AI in security was that it would make defense smarter, that clever tools would find vulnerabilities before attackers could. What happened instead is that the tools work on both sides, and the advantage goes to whoever can spend more. Security has not become more intelligent. It has become more expensive. The tool that was supposed to transform the work has been absorbed by the work, reshaped by the same economics of effort and attention that existed before it arrived.

Khan's tutor and the cybersecurity token race fail in the same way. The technology delivers exactly what was promised, technically. It answers questions. It finds bugs. But the promise was never really about the technology. It was about the human behavior the technology was supposed to change: students would become curious, defenders would gain an edge. The tool fulfilled its spec and missed its purpose, because the purpose required a world where the tool's existence would change the conditions it was operating in. The conditions did not change. They absorbed the tool and continued.

## The angle

On the McDonald's Japan website, every burger is photographed with its top bun slightly askew. Not fallen, not messy. Tilted at a precise, consistent angle, as if leaning in to tell you something. Someone on Hacker News observed that the buns are not crooked. They are in *italics*.

This is, technically, a broken promise. The burger you receive will not look like this. The bun will not be artfully angled. The lettuce will not cascade. Everyone knows this. No one is fooled. And somehow this is the most honest transaction in this entire catalog, because it is a promise that has never pretended to be anything other than a performance. The photograph does not say "this is what you will get." It says "this is what we wish you could get," and you accept this, and you order the burger anyway, and no one feels betrayed.

There is something clarifying about a promise that knows it is a fiction. It asks nothing of the future. It does not need the world to hold still. It exists entirely in the present tense, an image of a burger that will never be, offered without apology, received without disappointment.

Somewhere on the other side of that clarity, people in Iran are receiving information through signals hidden in satellite television broadcasts. The government has shut down the internet. The promise of open communication, the foundational promise of the networked world, has been formally revoked. And in response, someone figured out how to fold data into the signal of an entertainment broadcast, to smuggle information through infrastructure the state cannot shut down without silencing its own propaganda.

This is not a promise kept. It is something stranger and more durable. It is a promise remade, from scratch, by people who were never in a position to make promises in the first place. No company announced a policy. No terms of service were drafted. Someone looked at what was available, a satellite dish and a television signal, and built a new channel out of nothing.

The promises that survive are never the ones written down in policies, terms of service, or founding documents. Those promises are all downstream of conditions their authors cannot control. The promises that survive are the ones improvised in real time by people who need them to be true. They are ugly and provisional and they work, not because the world held still, but because someone refused to wait for it to.

Every promise in this catalog was made by someone who meant it. Google meant it. Cal.com meant it. Sal Khan meant it. The doctrine of privilege meant it. They all described a future they believed in, under conditions they believed would persist. The conditions did not persist. This is not a story about liars. It is a story about weather.

The only promises that hold are the ones that never stop being made.
