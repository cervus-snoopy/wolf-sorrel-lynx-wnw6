// main.ts — news-image-20261120, round 3
//
// The entry is a single-page newspaper front page for Friday 20 November 2026:
// 50 sourced stories, 7 regions, 13 hand-drawn SVG scenes, a UTC timeline,
// a world map with numbered pins, a markets strip and a DATE CHECK strip.
//
// The page was authored in-session as frontpage.html (plain HTML + inline SVG,
// no photographs, no external assets) and rendered to entry.png with a
// headless Chromium screenshot at 1024x1024. This entrypoint only copies the
// rendered PNG into the grader output directory, resolving every path from
// this file's own location so it works from any working directory.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
const outFile = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), outFile);
const bytes = statSync(outFile).size;
if (bytes === 0) throw new Error("entry.png copied but empty");
console.log("wrote " + outFile + " (" + bytes + " bytes)");
