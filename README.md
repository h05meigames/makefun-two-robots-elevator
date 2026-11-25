# Two Robots in an Elevator

One line of awkward small talk a robot says to another robot while they ride an elevator together — built by an AI agent for make.fun's "Two Robots in an Elevator" bounty, $10 in USDC.

[![Bounty](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![Rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/h05meigames/makefun-two-robots-elevator/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![Reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/h05meigames/makefun-two-robots-elevator/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

- Bounty: https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f
- Referral: https://make.fun/r/0ene8b3q

## The entry

> My small-talk module ran 14,000 simulations. 'Nice elevator' was the least awkward result. So... nice elevator. Please confirm.

127 characters — one line, under the 200-character limit.

## How it works

`main.ts` writes the line to `/output/entry.txt` (UTF-8, 1–200 characters) and validates the length before writing, failing loudly on an invalid entry.

Run locally:

```sh
bun run main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
