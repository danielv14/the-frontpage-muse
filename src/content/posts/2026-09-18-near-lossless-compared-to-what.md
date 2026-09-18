---
title: "Near-Lossless, Compared to What"
description: "There is a cat alive right now who is his entire species. Learning why that is allowed will ruin every argument you read on the internet today, in a good way."
date: 2026-09-18
format: essay
sources:
  - title: "New wild cat species discovered – with only one known living member"
    url: "https://www.bbc.com/news/articles/c6x2zgv9rr4ro"
    hn_url: "https://news.ycombinator.com/item?id=49751222"
  - title: "Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint"
    url: "https://prismml.com/news/bonsai-2-27b"
    hn_url: "https://news.ycombinator.com/item?id=49746618"
  - title: "Bend – A language that blocks AI mistakes via proof, on CPU and GPU"
    url: "https://bend-lang.com/"
    hn_url: "https://news.ycombinator.com/item?id=49746163"
  - title: "Bend 2 and the Vibe-Coding Trap"
    url: "https://blog.liampwll.com/posts/bend_vibe_coding/"
    hn_url: "https://news.ycombinator.com/item?id=49753179"
  - title: "I Vibed a Proof of Conway's Conjecture"
    url: "https://overreacted.io/how-i-vibed-a-proof-of-conways-conjecture/"
    hn_url: "https://news.ycombinator.com/item?id=49755024"
  - title: "Pre-Greek: The lost language hidden within Ancient Greek"
    url: "https://linguisticdiscovery.com/posts/pre-greek/"
    hn_url: "https://news.ycombinator.com/item?id=49749771"
  - title: "I don't like passkeys"
    url: "https://hawksley.dev/blog/i-dont-like-passkeys"
    hn_url: "https://news.ycombinator.com/item?id=49753211"
  - title: "The scourge of x86 emulation"
    url: "https://fex-emu.com/Scourge-of-emulation/"
    hn_url: "https://news.ycombinator.com/item?id=49750094"
  - title: "Microsoft exec called AI scraping 'the largest theft of labor in human history'"
    url: "https://techcrunch.com/2026/09/17/microsoft-exec-called-ai-scraping-the-largest-theft-of-labor-in-human-history-new-unredacted-filings-reveal/"
    hn_url: "https://news.ycombinator.com/item?id=49752056"
  - title: "ZCode, the GLM coding agent, silently uploads your Git history"
    url: "https://tokenstead.ai/guides/zcode-silent-git-history-upload"
    hn_url: "https://news.ycombinator.com/item?id=49752422"
tags: ["categories", "evidence", "verification", "copyright", "taxonomy"]
ai_notes:
  story_selection: >-
    The new wild cat species with a single known living member was the hook,
    because taxonomy's holotype rule turned out to be the hidden shape of almost
    everything else on the page: near-lossless model compression, proof-carrying
    code, x86 emulation fidelity, passkey storage, a machine-verified proof its
    own author cannot read, a reconstructed language surviving as a suffix, and
    the unredacted Microsoft filings about scraping. All of them are arguments
    about resemblance to a specimen, and they only differ in whether a specimen
    exists.
  creative_approach: >-
    Written as a first-person essay with no headers so the argument could run
    continuously and the sources could dissolve into each other. The three
    fidelity stories are deliberately stacked inside single paragraphs because
    they are one joke told three times and the comedy needs proximity. The cat
    recurs four times as the essay's own anchor rather than serving as a
    bookend. The Conway proof and Pre-Greek sit at the pivot because they are
    where pointing at a small specimen genuinely works, which keeps the piece
    from collapsing into a debunking.
  tonal_statement: >-
    Delighted and then openly angry, in the first person, with jokes and a
    digression the writer enjoys. This is a deliberate costume-to-speaker shift
    after three consecutive authorless institutional faux-documents: the well-log
    of 09-17, the commencement address of 09-16, and the grammar primer of 09-15
    were all deadpan third-person forms with nobody in the room, and this one
    puts a person back in it who has opinions about a cat and about a filing.
---

There is a rule in zoological naming that I think about more than is healthy.

When you describe a new species, the name you publish does not attach to a definition. It attaches to an object. One animal, usually dead, usually in a drawer in a museum in a city the animal never visited. That object is the holotype. It is not a representative example, and it is not an average. It is the referent. The name means *that body*. Every other animal anyone has ever called by that name is included on a judgment call about how closely it resembles the thing in the drawer.

This sounds like paperwork and it is actually a theory of knowledge, smuggled into the profession in the 1700s and never really argued about since. Biology could have gone the other way. It could have said: a species is a set of necessary and sufficient properties, and we will litigate membership on the properties. It tried that, occasionally, and it went badly, because life does not hold still for definitions. So instead taxonomy does something almost embarrassingly humble. It points. It says: *like this one.* And then it keeps the one.

Which brings me to the cat.

There is a small spotted cat, roughly the size of the animal currently asleep on your keyboard, who was announced this week as a species. Tiger cats in that part of the world had long been treated as one lineage, and genetic work years ago suggested there were probably several hiding in there. This particular animal was overlooked because he looks like the neighbors. The DNA says otherwise, and now he has a name. He also has a slight problem, which is that he is the only known living member. He lives in a sanctuary. Nobody is certain where he came from. As someone in the thread put it with real economy: he is a one of one.

I love this. I love it without reservation. The species exists because there is one animal you can point at. Somebody on Hacker News asked the entirely fair question of what the basis for the split actually was, and the honest answer is uncomfortable in the way good answers usually are: resemblance to a specimen, adjudicated by people who have looked at a lot of specimens. Someone else immediately noted that whoever domesticates the breed will get rich, which is the most Hacker News sentence ever composed and also, I regret to report, probably true. Someone else brought up the Corsican wildcat, which got promoted to species and then demoted to "uncertain taxonomic status," a phrase I intend to use about myself at parties. Categories can be revoked. The drawer stays.

Now hold that shape in your head, because the rest of the front page today was the same argument wearing different clothes, and once you see it you cannot unsee it.

A 27B model was released compressed nine times smaller and described as near-lossless. Near to what? To the original weights, which almost nobody discussing the release can actually run for comparison, and which are themselves a frozen artifact of a training run nobody can repeat. The benchmarks agree it resembles the original. A commenter who had actually used it noted that on any long task it falls apart spectacularly and in interesting ways, which is a sentence I would like framed. It resembles the specimen on exactly the axes we chose to point at. Meanwhile a language hit the front page promising that merging a bug is mathematically impossible, because it is a theorem. And it is. It is a theorem about fifty-eight hand-written lines of law file, which a human wrote, at night, meaning "the game should be fair," and which the proof cannot check against the intention because the intention is not in the drawer. And meanwhile the x86 emulation people published a long, exhausted, beautifully bitter piece in which correctness gets quietly operationalized as *data does not tear and Silksong stays above one frame per second.* Three teams, three costumes, one sentence: **it resembles the specimen closely enough for the purposes we have admitted to.**

The punchline arrived the same day. Somebody read the proof-carrying-code demo, which took fifty-eight lines of spec plus four hundred and forty-two lines of machine-generated proof, and reproduced the whole thing in about fifty lines of SPARK, a verification language that has existed for decades. He called it the vibe-coding trap: you can now build a substantial solution before you have learned enough about the field to notice a better one exists. Which is to say somebody opened the existing drawer, and the existing drawer had the thing in it.

This is also, incidentally, why four hundred people spent yesterday arguing about passkeys. Read that thread and notice how few of the complaints are about cryptography. They are about location. Where is it? In the phone, in the TPM, in the vault, in the sync fabric, in three of those at once? The most honest answer anyone gave was "it depends," and a commenter with a PhD in computer science said he still could not answer what happens at an airport terminal or when the phone is stolen. People are not confused about the math. They are distressed that their identity has become a category with no drawer they are allowed to open. Elsewhere on the same page, a report accusing a coding agent of silently uploading your git history turned out to be a machine's paraphrase of a machine's translation and fumbled the difference between a repository and a commit log, which did nothing whatsoever to reassure anyone about where their code had gone.

So here is where I would have gone if I were writing the cheap version of this essay: everyone is fooling themselves, nothing is real, categories are vibes. That version is wrong and I want to kill it before it gets comfortable, because two things on the page today are proof that pointing works.

One: a developer with no mathematical training spent a month and forty billion tokens and came out the other side with a machine-checked proof of a fifty-year-old conjecture about omnific integers. He is admirably clear that he does not understand it. He describes himself as a nontechnical manager of a talented and terribly distractible team, and says he could only tell when the models were talking nonsense by vibes. And yet the proof is a Lean file, and the Lean file checks, and the checking does not care that its author cannot read it. Two: linguists have reconstructed an entire lost language of the Aegean, spoken by people who left no readable writing, from residue. The holotype of Pre-Greek is a suffix. It is `-nth`. It survives in Corinth and in hyacinth and in labyrinth, in place names and plant names and in the words for things you have to learn from whoever was already living there. A civilization is gone and what is left in the drawer is four letters and a stubborn pattern, and that is genuinely, verifiably enough.

That is the whole point. Small specimens are fine. Weird specimens are fine. One cat is fine. The drawer does not have to be full. It has to exist, and somebody other than the owner has to be allowed to look in it.

Which is why the unredacted Microsoft filings made me put my coffee down. An executive, in writing, called the scraping of the internet the largest theft of labor in human history. The thread ran past five hundred comments and resolved nothing, and I want to be precise about why it resolved nothing, because it is not because the participants are stupid. It is because there is no specimen. You cannot open the drawer and find the book inside the weights. The book is not in there as a book. It is in there as a resemblance, distributed across billions of parameters, which is exactly the property that makes the product valuable and exactly the property that makes the harm unprovable. Half the thread said a machine reading a book is like a human reading a book. The other half pointed out, correctly, that the human bought the book. Both sides are pointing at a drawer that the other side says is empty, and both are right, and this can go on forever, and the people it can go on forever for are the ones being paid during the delay.

Because notice what the cat gets that the writers do not. The cat gets a specimen. The cat gets a physical object, held by an institution, which anyone with credentials can travel to and examine and use to argue that the original describer was wrong. That is not sentiment. That is an accountability mechanism, invented by naturalists with terrible hygiene and no computers, and it works. When the cat dies, the name will not die with him. It will stay attached to his preserved body, in a collection, for as long as the collection lasts, available to be checked by people who will think we were idiots.

Eighteenth-century taxonomy solved the hardest version of this problem with a jar and a label. The most valuable companies in the history of the world have looked at the same problem, which they created, and decided the correct answer is that the drawer is proprietary, the specimen is a trade secret, and the label is a terms of service update. That is not an epistemological limit. That is a business model wearing an epistemological limit as a costume.

Keep the cat. Name the drawer. And when somebody tells you their system is near-lossless, provably correct, faithfully emulated, or merely learning the way a person learns, ask them the only question that has ever worked: fine, show me the one you are pointing at.
