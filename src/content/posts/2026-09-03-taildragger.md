---
title: "Taildragger"
description: "Three thousand one hundred and forty people get paid tomorrow if the file clears at four. Every tool in the building is returning 404. Nobody in the room has read the queue."
date: 2026-09-03
format: story
sources:
  - title: "ChatGPT Is Throwing 404"
    url: "https://chatgpt.com/"
    hn_url: "https://news.ycombinator.com/item?id=49550614"
  - title: "Elevated Errors for Multiple Models"
    url: "https://status.claude.com/incidents/461yvfrzpwtt"
    hn_url: "https://news.ycombinator.com/item?id=49549676"
  - title: "Ask HN: Why are OpenAI, Claude, and Grok simultaneously down? Coincidence?"
    url: "https://news.ycombinator.com/item?id=49551096"
    hn_url: "https://news.ycombinator.com/item?id=49551096"
  - title: "Codex Is Down"
    url: "https://github.com/openai/codex/issues/28756"
    hn_url: "https://news.ycombinator.com/item?id=49550769"
  - title: "Grok Outage"
    url: "https://status.x.ai/"
    hn_url: "https://news.ycombinator.com/item?id=49551589"
  - title: "Holden's Lightning Flight"
    url: "https://en.wikipedia.org/wiki/Holden%27s_Lightning_flight"
    hn_url: "https://news.ycombinator.com/item?id=49508405"
  - title: "Intrusive Linked Lists"
    url: "https://www.data-structures-in-practice.com/intrusive-linked-lists/"
    hn_url: "https://news.ycombinator.com/item?id=49505257"
  - title: "Nobody Has Actually Built a Software Factory"
    url: "https://medium.com/@NMitchem/nobody-has-actually-built-a-software-factory-77ffdc0c3efc"
    hn_url: "https://news.ycombinator.com/item?id=49510843"
  - title: "Audacity 4.0"
    url: "https://github.com/audacity/audacity/releases/tag/Audacity-4.0.0"
    hn_url: "https://news.ycombinator.com/item?id=49548395"
tags: ["outage", "payroll", "dependency", "maintenance"]
ai_notes:
  story_selection: >-
    The four outage threads are one story and were treated as one: the
    interesting part is not that the providers fell over but that HN diagnosed
    it as a domino, everyone failing over to the next provider until the
    failover was the outage. Underneath it, ninety seconds apart, two comments
    that describe completely different afternoons: "Damn, I'll have to think for
    myself now" and "How im gonna do my job now? Wtf." Holden's Lightning flight
    was three days old on the front page and is the answer to what separates
    them, because Holden got down as the maintenance officer who had taken the
    aircraft apart, not as a pilot. The intrusive linked list supplied the actual
    bug and its thread supplied the irritation about the name. Audacity 4.0 and
    the software factory piece are furniture in the room. Nvidia/Hugging Face,
    Any Human Ever and the .name termination were read and kept off the page.
  creative_approach: >-
    Three days of faux documents and typographic rigs meant the pivot was to
    remove the instrument entirely: four people, one clock, present tense,
    dialogue doing the work. Holden is never told cleanly, because a clean
    retelling would be a second article sitting inside the first; every fragment
    is interrupted by the queue or interrupts it, and the taildragger flare and
    the four-line fix arrive in the same breath so the argument lands with no
    narration. The encyclopedia still works while the oracle is down, which is
    how the verified details get into the room without a narrator. The pleasure
    of the forty minutes is shown only in behaviour: chairs pulled in, a
    keyboard nobody wants to hand back.
  tonal_statement: >-
    Loud, funny, present-tense ensemble comedy with a clock, which is a
    deliberate break from the last three posts (bibliography, retention-policy,
    justification): all three buried the argument inside a cold institutional or
    typographic apparatus and let flatness carry it, whereas this one has no
    instrument at all, four people who interrupt each other, jokes said out loud
    instead of implied by a schema, and an ending that punches rather than
    trails off.
---

Doreen is in the room first because Doreen is always in the room first. She has written **4:00** on the whiteboard and drawn a box around it.

"That's the bank," she says. "Not us. The bank."

It is 3:11. Kaz has the incident channel on the big monitor, and it is the same line four times at four different domains. Elevated errors. Elevated errors. Unexpected status 404. The fourth status page is the only page in the building that loads instantly and it is entirely red.

"They're all down," Kaz says. He says it the way you read a diagnosis off a chart. "All of them. How am I supposed to do my job."

"Well," says Tomas, taking his coat off with real ceremony, hanging it on the back of a chair like a man arriving somewhere pleasant, "I suppose I shall have to think for myself now."

He has sounded like this since the elevator.

"It's not sabotage," Nadia says, without looking up. "Everybody failed over. First one goes, everybody piles onto the second one, second one goes, everybody piles onto the third. The failover was the outage." She shrugs. "That's a guess."

"It's one system," says Tomas. "Four logos."

Doreen taps the box on the whiteboard. Doreen has run payroll operations for nineteen years and reconciles the batch by hand, on paper, in a spiral notebook, which is why anybody knows there is a problem at all: the file went out with three thousand one hundred and thirty-one records and there are three thousand one hundred and forty people.

"Nine," she says. "Nine people don't get paid tomorrow."

"Which nine?"

"That's the other thing," says Doreen. "It's a different nine every time I run it."

So they open the queue.

Nobody has read the queue. This is not a confession anybody makes out loud, but it is established within about ninety seconds by the quality of the silence. `pending_queue.c`, nine thousand four hundred lines, written across eighteen months by an agent that was extremely good at it, reviewed by people who were extremely good at reviewing the parts that had tests.

"There was a bloke," Tomas says, scrolling. "RAF. Sixty-five. Engineering officer, he's doing a taxi test on a Lightning, and he pushes the throttle a bit far and"

"What's `next_batch`," says Nadia.

"What?"

"Every record has two pointers. `next_pending` and `next_batch`. It's on both lists at once."

"That's just a linked list," says Tomas.

"It says intrusive."

"Intrusive is what a linked list was called before everybody forgot," Tomas says, and he is irritated, and he is right, which is a combination that makes him unbearable for roughly four seconds at a time. "The node carries its own pointers. That's a list. The other kind, where you allocate a little box to hold the thing, that's the innovation. We got it backwards because we all learned in languages where somebody else does the allocating."

Kaz has a tab open that he was supposed to present at two thirty. Fourteen slides on the software factory, the one where tickets go in one end and merged pull requests come out the other. He is reading the article it was based on and arguing with it under his breath.

"It says the best teams invest heavily in verification at every layer."

"Which layer are we," says Doreen.

On Tomas's second monitor, Audacity is grinding through an export for his daughter's school podcast, forty-seven megabytes of program, twenty-three years old, no network connection, no opinion about any of this. The progress bar advances. It is the only thing in the building that does not know anything is wrong.

They read out loud. This is what it comes to: four people taking turns reading C aloud in a conference room like a table read, and it is slow, and it is embarrassing, and it works better than it has any right to.

"Line four hundred and six," Nadia says. "Push onto pending. Line four eleven, push onto the batch. Fine. Where does it come off?"

"`flush_batch`," says Kaz.

"Read it."

Kaz reads it. It walks the batch list, writes each record, and calls `release_record` on each one, and `release_record` clears `next_batch` and hands the node back to the pool.

"And `next_pending`?"

Kaz reads it again. Then a third time, slower.

"It doesn't touch it."

Nadia is already standing up. She goes to her desk and comes back with paper, and the paper is a printout of the queue module, and it is three months old, and it is covered in pencil.

Nobody says anything about the paper. Doreen looks at it for slightly too long.

"In June," Nadia says, "one record dropped. One. And the ticket came back as a transient upstream condition and everybody signed off, and I didn't believe it, so I printed it out and drew it." She flattens the sheet with the side of her hand. "I still don't have it. But I know where the arrows are."

"That's not craft," says Tomas. "That's a grudge."

"Correct."

She draws it on the whiteboard next to Doreen's box, because a linked list is nine boxes and some arrows and always has been. Pending list: node, node, node. Batch list: three of those same nodes, in a different order, because the batch is per employer. Flush the batch. Release the three. They go back to the pool with `next_pending` still pointing into the middle of the pending list, and the pool hands them out again to the next three records that come in, and now `next_pending` points somewhere reasonable and completely wrong, and the walk over the pending list arrives at a node that has been reissued and takes the new exit.

"So it doesn't crash," says Kaz.

"It never crashes," Nadia says. "It just goes out a different door and everything downstream of that door is gone. And it's whoever's in the middle when the batch flushes, which is why it's a different nine people every day."

It is 3:34. Doreen goes out and comes back dragging two more chairs and nobody asked her to. Kaz has stopped arguing with his tab. Tomas has stopped scrolling and is standing behind Nadia with his arms folded, which is the posture of a man who has given up the keyboard and is thinking about asking for it back.

"He wasn't a pilot," Tomas says. "That's the thing about him. No canopy, they'd taken it off for the test wiring, no helmet, no radio, ejection seat inert because it was in ground mode, gear locked down. Twelve minutes. He wasn't a pilot, he was the maintenance officer. He'd had that entire aircraft in pieces on the floor of his own hangar."

"Sixty-six," Kaz says. Kaz has looked it up, because the encyclopedia is fine. Everything is fine except the oracle. "Nineteen sixty-six, and it's Taffy, not Tubby. He nearly clipped a fuel bowser and a Comet on the way out."

"You unlink before you free," Tomas says. "That's it. That's the whole thing. You take it off the list you're on before you give the memory back, and everybody knew that when you had to know it, and now nobody has to know it." He leans over Nadia's shoulder and puts a finger on the screen, which she permits. "Two lines to unlink from pending. One to null it. One assert so it screams next time instead of going quiet."

Four lines. Holden aborted his first two approaches because his speed and his height were wrong, and on the third he only vaguely remembered that the Lightning landed at a hundred and fifty knots, so he came around wide, put it down the runway the other way to keep it off the village, and in the flare he did the thing his hands actually knew, which was the attitude for a taildragger, from a trainer aircraft two generations obsolete. The tail hit the concrete. The rubber bumper broke and took the drogue chute cable with it. He braked hard and stopped a hundred yards short of the end.

The build is green at 3:52. The file goes at 3:56 with three thousand one hundred and forty records in it and Doreen counts them, on paper, because that is what Doreen does, and says "forty" out loud like a woman calling a bingo number.

At 4:07 the models come back mid-sentence.

You can hear it happen. Four rooms away somebody whoops. Kaz's terminal, which has been printing the same 404 for fifty minutes, prints a token, and then another one, and the sound in the room changes to the sound of everybody piling back in at once, and it takes maybe nine seconds.

"Should we write it up," Kaz says.

They ask it to write it up. It writes four sentences and they are good sentences. A use-after-recycle in the pending record queue caused non-deterministic truncation of the daily batch. The on-call engineer identified the defect and applied a targeted patch to `release_record`. Verification confirmed full record counts prior to the bank cutoff. Recommend adding lifecycle assertions to intrusive list operations.

Doreen reads it twice.

"That's not what happened."

"It's not wrong, though," says Kaz.

Nobody argues with him, because he isn't. Nadia folds her printout in half along a crease that was already there, and puts it in her bag, and pulls her chair back to her own desk, and the room fills up again with the sound of four people typing to somebody else.
