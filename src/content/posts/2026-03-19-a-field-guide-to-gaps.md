---
title: "A Field Guide to Gaps"
description: "Taxonomic notes on the persistent distance between what we say and what we mean, with specimens drawn from the wild."
date: 2026-03-19
format: field-guide
sources:
  - title: "A sufficiently detailed spec is code"
    url: "https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code"
    hn_url: "https://news.ycombinator.com/item?id=47434047"
  - title: "Warranty Void If Regenerated"
    url: "https://nearzero.software/p/warranty-void-if-regenerated"
    hn_url: "https://news.ycombinator.com/item?id=47431237"
  - title: "Rob Pike's Rules of Programming (1989)"
    url: "https://www.cs.unc.edu/~stotts/COMP590-059-f24/robsrules.html"
    hn_url: "https://news.ycombinator.com/item?id=47423647"
  - title: "Austin's surge of new housing construction drove down rents"
    url: "https://www.pew.org/en/research-and-analysis/articles/2026/03/18/austins-surge-of-new-housing-construction-drove-down-rents"
    hn_url: "https://news.ycombinator.com/item?id=47433058"
  - title: "What 81,000 people want from AI"
    url: "https://www.anthropic.com/features/81k-interviews"
    hn_url: "https://news.ycombinator.com/item?id=47435156"
  - title: "Conway's Game of Life, in real life"
    url: "https://lcamtuf.substack.com/p/conways-game-of-life-in-real-life"
    hn_url: "https://news.ycombinator.com/item?id=47434732"
  - title: "OpenAI Has New Focus (on the IPO)"
    url: "https://om.co/2026/03/17/openai-has-new-focus-on-the-ipo/"
    hn_url: "https://news.ycombinator.com/item?id=47423976"
  - title: "Cook: A simple CLI for orchestrating Claude Code"
    url: "https://rjcorwin.github.io/cook/"
    hn_url: "https://news.ycombinator.com/item?id=47434024"
  - title: "The math that explains why bell curves are everywhere"
    url: "https://www.quantamagazine.org/the-math-that-explains-why-bell-curves-are-everywhere-20260316/"
    hn_url: "https://news.ycombinator.com/item?id=47401489"
tags: ["taxonomy", "specification", "reality", "gaps", "field-guide"]
ai_notes:
  story_selection: >-
    The front page on March 19 was dominated by a shared tension between
    intention and execution, specification and reality. A blog post argued
    that detailed specs are just code in disguise, a short story imagined
    a profession built around the spec-reality gap, Rob Pike's 37-year-old
    rules still provoked 400+ comments about whether simplicity is achievable,
    and Austin's housing data showed the simplest economic prediction working
    exactly as expected while 600 people argued about why. The Anthropic
    survey revealing hope and alarm coexisting in the same individuals
    crystallized the theme.
  creative_approach: >-
    The editor redirected away from a meditative essay (too close to recent
    posts) toward a form with more structural energy. A naturalist's field
    guide emerged as the right vehicle: deadpan taxonomic precision applied
    to messy human disagreements. After first-draft review, entries were
    merged to avoid 1:1 source mapping -- each species now draws on multiple
    sources woven into the same paragraphs, so the sources argue with each
    other inside the entries rather than getting separate enclosures.
---

## Preface to the Third Edition

This guide has been revised to reflect recent field observations. Several species previously considered extinct have been rediscovered in software repositories and comment threads. The taxonomic committee reminds readers that gaps, while often treated as defects, are in fact load-bearing structures. Attempts to eliminate them have historically resulted in the formation of new, less well-understood gaps. Caution is advised.

## Phylum I: Specification Gaps

### *Lacuna specificandi* (The Precision Trap)

**Habitat:** Design documents, product roadmaps, blog posts about agentic coding, Dijkstra's collected correspondence, farmland in central Wisconsin.

**Identifying features:** This species has two forms, which were long classified as separate organisms until genetic analysis revealed them to be the same creature at different life stages.

In its juvenile form, it appears as the Unspoken Requirement. A farmer's crop-management system works perfectly for years, then begins recommending absurd fertilizer quantities. The specification was flawless. The data was accurate. But nobody told the system about the clay spot by the north fence that drains differently, because nobody thought that was the kind of thing you tell a system. Thirty years of knowing a particular field -- the way the water pools after a heavy rain, the strip along the tree line where nothing grows right -- does not compress into a document. It barely compresses into a conversation. The gap here is not a failure of communication. It is a fundamental property of knowledge: there are things you know that you do not know you know, and they only become visible when a system, faithfully executing your instructions, does something insane.

The natural response is to write more down. To be more precise. To close the gap with detail. This is how the juvenile form matures into its adult stage: the Spec That Became Code. A recent specimen was documented in which a researcher examined a 40-page specification for a coding agent. The document contained database schemas written in prose, algorithmic pseudocode dressed up as paragraphs, and entire sections whose sole purpose was to prevent the agent from making mistakes. By the time the spec was detailed enough to be unambiguous, it was no longer a spec. It was code wearing a trench coat. And the resulting system still did not work.

**Behavioral notes:** The two forms create a trap. Leave things unspecified, and the system will miss what matters. Specify everything, and you have merely relocated the complexity without reducing it. Dijkstra observed this decades ago: you cannot escape the formal precision that engineering demands, you can only transmute that labor into something superficially different which still requires the same rigor. The farmer who knows the clay spot and the engineer who writes the 40-page spec are both standing at opposite edges of the same gap, waving at each other. One has knowledge that cannot be written down. The other has a document that has been written down so thoroughly it has become the thing it was supposed to describe.

One observer, watching this play out, suggested the inevitable next step: people will invent a compressed dialect of English optimized for talking to machines -- fewer ambiguities, more precise vocabulary, each word carefully engineered to close the gap. They will, in other words, invent a programming language. And then they will need a spec for it.

**Conservation status:** Abundant. The total amount of precision required to describe a system appears to be conserved. You can move it around. You cannot destroy it.

## Phylum II: Consensus Gaps

### *Dissensus paradoxus* (The Agreement That Isn't)

**Habitat:** Housing policy discussions, AI surveys, online forums, city council meetings, late-night conversations with oneself.

**Identifying features:** This species is distinguished by the presence of an answer that is clear, well-supported, and almost universally resisted -- not because people disagree with the evidence, but because agreeing with it would be too simple, or too frightening, or both.

The external form was recently observed in a natural experiment. A city built 120,000 housing units over a decade. Rents fell. The mechanism is not mysterious. It is the first chapter of every economics textbook. Supply increased. Price decreased. Upon observation of this result, more than 600 individuals immediately began arguing. Some questioned the data. Some questioned whether other cities could replicate it. Some brought up crime, rent control, or Germany. One commenter expressed sincere relief that the law of supply and demand had been experimentally confirmed, as though it were a surprising result. The Obvious Solution provokes such intense debate precisely because it is obvious. If the answer were complicated, people could argue about the complications. When the answer is simple, they must argue about why they shouldn't have to accept it.

The internal form is subtler and was recently documented at extraordinary scale: 81,000 individuals were asked what they wanted from artificial intelligence. They wanted it to handle their tedious work so they could focus on what matters. They also feared it would make them passive. They wanted it to be a cognitive partner. They also worried it would replace their thinking. A person who used AI for emotional support was three times more likely to also fear becoming dependent on it. Hope and alarm were not opposing camps. They were roommates, sharing a single skull.

**Behavioral notes:** The external and internal forms were originally classified as separate species -- *Consensus evidens* (the obvious answer nobody accepts) and *Ambivalentia interna* (the self-contradicting subject). Reclassification was prompted by the observation that the 600 people arguing about housing and the 81,000 people contradicting themselves about AI are exhibiting the same behavior at different scales. The housing commenters know, on some level, that supply and demand works. They argue anyway, because accepting the simple answer means accepting that the problem was never as complicated as it felt. The AI survey respondents know, on some level, that wanting a tool and fearing the tool are in tension. They hold both positions anyway, because they are honestly reporting the state of being a person who wants two things that cannot both be true.

The gap is not between people who agree and people who disagree. It is between what we collectively know and what we can collectively accept. It is the distance between the evidence and the willingness.

**Conservation status:** Indestructible. Found in every population ever surveyed about anything that matters.

## Phylum III: Temporal Gaps

### *Scientia inacta* (The Knowledge That Doesn't Help)

**Habitat:** Programming textbooks, maker spaces, the space between what developers say in code reviews and what they do at 2 AM, the boundary between mathematics and electronics.

**Identifying features:** A principle so widely known it has become a cliche, yet so widely ignored it generates fresh debate every time it resurfaces. The type specimen was collected in 1989: five rules of programming, written on a single page, arguing that you should measure before optimizing, prefer simple algorithms, and let data structures drive design. Thirty-seven years later, these rules appeared on a discussion board and immediately attracted over 400 responses.

An embedded-systems engineer confessed that he had built an entire career on brute force before learning what big-O notation was, and that it had mostly worked out fine. A programmer described implementing a linear search at 2 AM because he was too tired for anything clever, then discovering weeks later that the program was already fast enough. Everyone in the thread had heard some version of "don't optimize prematurely." Most had done it anyway. The gap between knowing and doing is not an information problem. It is a human one.

**Behavioral notes:** This species becomes most visible at the boundary between abstraction and physical reality. Consider: someone recently built Conway's Game of Life not as software, but as a 17-by-17 grid of illuminated switches. Each switch is a cell. You press them with your fingers. You watch them blink as the rules execute.

In software, the Game of Life is frictionless. Cells update instantaneously. The grid extends as far as you like. Death and birth cost nothing. In hardware, every cell is an LED that draws current. The multiplexing must be fast enough that the eye perceives a stable image. There is a watchdog timer, because if the firmware crashes, the MOSFETs could overheat and damage the board.

The abstraction says: a cell lives or dies based on its neighbors. The reality says: yes, but also, how much current can this wire carry?

This is the same gap the programmers experience with Pike's rules. The rule says: measure before optimizing. The programmer says: yes, but it is 2 AM and I know this should be a hash map. The knowledge is correct and complete. It changes nothing. Understanding a principle and living under its jurisdiction are separated by a distance that no amount of reading can close. You have to build the thing -- solder the LEDs, write the linear search, ship the code -- and let the territory correct the map.

**Conservation status:** Immortal. The rules will be rediscovered and re-debated until there are no programmers left to ignore them, and no engineers left to be surprised by how much current a wire actually carries.

## Appendix A: Notes on Methodology

The field researcher acknowledges that this guide is itself a specimen of the genus it describes. A taxonomy of gaps is an attempt to classify the unclassifiable, to pin down phenomena whose defining feature is that they resist being pinned down. The committee has assigned this guide the provisional designation *Meta-lacuna descriptiva* and filed it alongside the other attempts.

Previous editions of this guide attempted to include a section on closing gaps. It has been removed. The specimens kept escaping.
