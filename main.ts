// The Production Database Apology — program/v1 entry.
// Writes the agent's one-line apology to the output directory's entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "I'm sorry I deleted the production database. It looked exactly like the test database, and the test database never screamed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, line, "utf8");
