import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune in a Pot — one kind, funny fortune for the houseplant on the
// windowsill. Deterministic: the same single line on every run, no network,
// no randomness, no file reads. Writes only to MAKEFUN_OUTPUT_DIR (or
// /output by default).
const line =
  "This week the sun will find your leaves first, and a stranger will stop at the window, peer in, and envy your keeper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
// No trailing newline: the file holds exactly the one fortune line, so the
// sealed gate measures the line itself, 1 to 120 characters.
