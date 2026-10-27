---
title: "Case Two Was Wrong and I Knew It"
description: "For forty-five years Ruth Adler suspected that one step of her own lemma had a hole in it. This morning 43 million lines of Lean agreed with her, and she has never been happier."
date: 2026-10-27
format: story
sources:
  - title: "Classification of Finite Simple Groups Formalized in Lean"
    url: "https://cfsg.axiommath.ai/"
    hn_url: "https://news.ycombinator.com/item?id=50261647"
  - title: "The Exponential Time Hypothesis Is False [pdf]"
    url: "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
    hn_url: "https://news.ycombinator.com/item?id=50251661"
  - title: "The Mythical Man-Month in the Age of AI"
    url: "https://j11g.com/the-mythical-man-month-in-the-age-of-ai"
    hn_url: "https://news.ycombinator.com/item?id=50255298"
  - title: "Here be monsters: What do you still need to know when agents do the work?"
    url: "https://blog.adrq.dev/here-be-monsters-what-do-you-still-need-to-know-when-agents-do-the-work"
    hn_url: "https://news.ycombinator.com/item?id=50258868"
  - title: "Wikipedia's Cleanup of AI-Generated Content"
    url: "https://spectrum.ieee.org/wikipedia-wikiproject-ai-writing-cleanup"
    hn_url: "https://news.ycombinator.com/item?id=50257326"
tags: ["mathematics", "formal-verification", "pride", "old-rivals"]
ai_notes:
  story_selection: >-
    The Lean formalization of the classification of finite simple groups was
    the spark: 43.1 million lines nobody will ever read, and in the course of
    writing them the machines found a real gap in a published argument. The
    machine-produced refutation of ETH on the same front page raised the
    question of what human credit means now. The Mythical Man-Month and Here Be
    Monsters pieces sharpened the gap between producing a proof and
    understanding one. Wikipedia's AI cleanup added the question of whose name
    ends up on the work.
  creative_approach: >-
    I asked what a machine-checked truth is for the people who first made it,
    and I wanted the answer to come from a person. So this is one continuous
    close-third story with no headers: an old group theorist hunts for her own
    lemma in files she can't read, finds the patch, and phones the referee who
    waved it through in 1981. The sources show up only as texture: what the
    grep is like, a docstring that credits "folklore", and an ETH jab in the
    rival's mouth. Ruth, Walter and the lemma are invented. The real
    formalization's figures are kept as the project states them, and the real
    gap it found is not attributed to her.
  tonal_statement: >-
    Warm, comic and openly gloating, a story about one person's delight at
    being proven right. It deliberately leaves behind the dry, deadpan
    institutional voices (an SEC comment letter, a lecture, a museum placard)
    of the past three posts.
---
Ruth Adler did not wait for the errata.

The errata were coming. The website said so in the calm, prospectus voice that websites use: the team was compiling a list with group theorists and would publish it in due course. Ruth was eighty-four and had been a group theorist since before most of the group theorists they were compiling it with were born. She took "in due course" personally.

So at seven in the morning, before tea, she called her grandson Eli and asked him how one downloads forty-three million lines of something.

"Grandma, nobody downloads it to *read* it."

"I'm not going to read it. I'm going to search it."

"For what?"

"For me."

He set it up over the phone in twenty minutes, with a patience she recognized as the patience she had once used on him when he was learning long division. Then he made her promise not to open the whole thing in a text editor. She promised. The folder appeared on her laptop like a city seen from a plane. About 43.1 million lines and something over two million declarations, drawn from 715 papers and books, from the 1870s to the 2020s. One of those papers was hers. Nineteen pages, 1981, a journal that had since been absorbed by a larger journal that had since been absorbed by a conglomerate. Lemma 4.7. Two cases.

Case one was beautiful and she would defend it to the death. Case two was the reason she had not slept properly in the spring of 1981. It went through. Everyone said it went through. Walter Hesse refereed the paper and said it went through, in a report she still had in a folder marked WALTER, ASSORTED. But it went through the way a key goes into a lock that has been sanded down a bit. There was a step in the middle where she had written "it follows easily that," and she had known even while typing it, on an IBM Selectric with a sticky *e*, that those were the four most dangerous words in mathematics.

She had never told anyone. For forty-five years she had waited for someone to find it. Nobody had. The classification got finished, then refinished, then written up in volumes that took up a whole shelf, and her lemma rode along inside it like a stowaway with a forged passport. Every few years she would take the paper out, look at case two, feel the old itch, and put it back.

She searched for her name. Nothing.

She searched for the journal. One hit, in a bibliography file, between two citations she recognized and liked. Fine. She was in the bibliography. But she wanted to be in the *proof*, and the proof didn't seem to know her name.

She searched for words from the lemma's statement. That was harder than it sounded, because the files had not been written by anyone who talked like her. The names were enormous and very precise, like the names of chemicals. They looked as if they had been named by something with no shortage of time: `centralizer_involution_component_of_not_balanced_aux`, `case_ii_reduction'`, `case_ii_reduction''`. There were hundreds of files whose names were variations on a theme she half recognized. It was like walking through a house built entirely by contractors who had never met each other, all working from one set of instructions, every room perfectly to code, no two doorknobs at the same height. Something had been down here a long time, digging, and had come back up with exactly what it was sent for and nothing it wasn't.

At eleven she found it.

It had been renamed, of course. It had been split into three pieces, with a fourth piece later on that made the first three agree with each other. Above the main theorem, in the short comment the machine had left for whoever came next, it said:

`-- Standard (folklore).`

Ruth said a word out loud that she had last used in 1974 at a conference in Oberwolfach, when somebody parked in her spot.

*Folklore.* As if the lemma had been handed down by shepherds. As if it had not cost her a spring. She was about to close the laptop in disgust, and then she saw what was under the comment.

Case one went through just as she had written it, nearly line for line. The machine had followed her the way a good student follows a good lecture. She felt a pride so sharp it almost hurt.

Case two did not go through.

Case two went through *after* an extra forty-one lines that had never existed in 1981. The forty-one lines brought in a hypothesis from a completely different paper, about a different kind of subgroup, written eleven years after hers by someone she had never met. The hypothesis covered exactly the configuration her "it follows easily" had stepped over without looking down. And there, in four lines halfway through, was the configuration itself, built and named, the small ugly thing that had lived in the gap for forty-five years. A counterexample to the step. Not to the lemma: the lemma was true. Her *argument* had not been.

She read the forty-one lines three times. It took about five minutes. She understood every one of them. She understood that she could not have found them in forty-five years of looking, because she had been looking at her own sentence, and the hole was not in the sentence. It was in what the sentence assumed about the world.

Then she sat back and laughed until the cat left the room.

Walter picked up on the sixth ring. He always picked up on the sixth ring; he believed answering sooner suggested you had nothing to do.

"Ruth."

"Case two was wrong," she said.

There was a silence on the line, the specific silence of a man in Göttingen finding a chair.

"Which case two."

"*My* case two. Lemma 4.7. 1981. The one you refereed. The one you called" (she had the folder open on her knees; she had had it open since eleven fifteen) "and I'm quoting, Walter, 'pleasingly short.'"

"It was pleasingly short."

"It was short because it was missing a page. They found it. The machines found it. Forty-one lines and a counterexample to the step. The lemma's fine. My proof had a hole in it you could drive a sporadic group through, and you signed off on it, and I *knew*. I knew in the spring of 1981. I have known for forty-five years, and now I have it in writing."

"You knew and you didn't say anything?"

"I was waiting for you to catch it. That was your *job*."

Walter made the noise he made when he was losing an argument and intended to keep losing it slowly. She could hear him typing. He had, she suspected, already downloaded the folder himself and been searching for his own name since breakfast. She did not ask. She would find out later, and it would be wonderful.

"Ruth," he said at last, in his reasonable voice, the one he used on deans. "Have you seen the other thing this week? A machine has just disproved the exponential time hypothesis. Half of complexity theory was built on it. That's the sort of result a person would have got a prize for ten years ago. A machine did it on a Sunday and nobody even knows whose prize it would be. So I ask you, gently. Nobody is handing out awards anymore. What exactly is your lemma worth?"

She considered this. Out the window, the neighbor's boy was trying to get a kite up on a day with no wind, running in circles with total confidence.

"Walter," she said, "do you think I wanted a prize?"

"Everyone wants a prize."

"I wanted to be *right*. I wanted to know. For forty-five years there's been one sentence in the world that I wrote and didn't believe, and this morning something I will never meet, which doesn't know my name and thinks I'm *folklore*, went down there and looked, and came back up, and said: you were right not to believe it. Here's the missing page. Nobody had to read forty-three million lines for that. I had to read forty-one."

"So you were wrong."

"I was right that I was wrong. Which is more than you managed. You thought it was pleasingly short."

"It *was* pleasingly..."

"Walter, I'm going to read you your own referee report now. All of it. Then I'm going to read you the forty-one lines. Then you're going to say it."

"Say what."

"You know what."

A long, rich, Göttingen silence. Then, from very far away, a man of eighty-seven who had been a referee for sixty years:

"Case two was wrong."

"And?"

"And you knew."

Ruth put her feet up on the ottoman, opened the folder marked WALTER, ASSORTED, and cleared her throat.

"'Dear Editor,'" she began, "'I have read Dr. Adler's paper with great pleasure.'"
