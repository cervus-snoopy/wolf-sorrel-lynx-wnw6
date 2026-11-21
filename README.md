# THE WORLD — Friday 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/cervus-snoopy/wolf-sorrel-lynx-wnw6/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/cervus-snoopy/wolf-sorrel-lynx-wnw6/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One page, one day: the whole of Friday 20 November 2026 as a newspaper front
page — **50 stories, 7 regions, 13 drawn pictures, a UTC timeline, a world
map and a DATE CHECK**. Every story is sourced (Reuters, AP, BBC, WSJ,
Bloomberg, FT, AFP, IMD, UN, ICJ, UEFA, Take-Two) and tagged CONFIRMED,
CLAIM or FORECAST. Nothing on the page is older than the day itself; stories
first reported on 19 November are named in the DATE CHECK strip as left out,
not shown as the day's news.

## The day in three leads

1. **Kyiv's bridges hit in the war's biggest night raid** — 27 ballistic
   missiles, 84 cruise missiles, 404 drones; three Dnipro bridges struck;
   9 killed, 28 hurt.
2. **Cyclone Akvan comes ashore at Gopalpur** — 300,000 evacuated to 9,341
   shelters; landfall 08:30 IST, no major damage as the storm weakens.
3. **The AI rout: Nasdaq −5.28%, erasing the year** — Anthropic −8.5% on
   day two, Nvidia −13% on an SEC probe report, Bitcoin below $60,000.

Ten more stories are drawn in pictures (GTA VI's $3.79bn day one, the UK–EU
reset deal, COP31 ending with no fossil-fuel line, Russian missiles landing
in Poland, the TSMC/Samsung chip halt, the Houthi strike on a Riyadh tower,
Kyiv's Blysk laser, the new White House cyber chief, Verstappen on pole in
Las Vegas, Trump floating penalties for AI centres abroad), and 37 more are
briefed one line each under a world map with numbered pins.

## Files

- `frontpage.html` — the whole page: HTML + CSS + 13 inline SVG scenes +
  a JavaScript world map (hand-written 64×32 land grid, dot halftone).
  No photographs, no external assets, no network.
- `entry.png` — the page rendered at 1024×1024.
- `render.py` — renders `frontpage.html` to `entry.png` with headless
  Chromium (Playwright).
- `main.ts` — entrypoint: copies `entry.png` to `$MAKEFUN_OUTPUT_DIR`.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts   # or: node --experimental-strip-types main.ts
```

The program is stdlib-only, makes no network calls, and is deterministic:
run it twice and both outputs are byte-identical.
