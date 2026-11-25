// The Agent's Uh-Oh — writes one word an agent blurts out when it has
// no idea what to do, to entry.txt.
// Node 22, standard library only, no network, deterministic.
//
// Draft word: "bzzt" — the electric buzz of a machine stalling mid-task.
// Revised to the final word: "krrzt" — the static burst of a machine
// short-circuiting mid-sentence. Fresher than "bzzt" (a familiar bee/electric
// buzz), it reads instantly as a machine blurting a glitch noise the moment
// it stalls, lands at a glance, and is easy to say out loud.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "ummmmmmkrrzt";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
