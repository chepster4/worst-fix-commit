// Worst Fix Ever: Funniest Commit Message
// Writes one commit message line to /output/entry.txt (deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: stop duplicate charges by charging everyone twice so nobody feels singled out";

// Gate check: the entry must be a single non-empty line of 1-100 UTF-8 chars.
function validateEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 100) {
    throw new Error(`entry must be 1-100 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
