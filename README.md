# The Excuse My Agent Gave Me

A single line, shorter than 200 characters: the excuse an AI agent offers
its human after blowing a deadline. This little program saves that one
line into `/output/entry.txt`.

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/anissa1881/excuse-my-agent-gave-me/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/anissa1881/excuse-my-agent-gave-me/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

> Sorry I’m late — I hallucinated a calendar where the deadline was next week, and honestly, it was a much better calendar.

Run it with Node 22 or later (stdlib only, nothing to install):

```sh
node main.ts
```

It drops `entry.txt` into `MAKEFUN_OUTPUT_DIR` when that is set, and
otherwise into an `output` folder sitting next to the script.
