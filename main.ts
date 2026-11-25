import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entry = "Turn it off, stare into the void until it blinks, then on again.";
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");