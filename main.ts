// gta6-clipper-01 entry: hands the video link to the house.
// The program only copies VIDEO.json from the repository root into the
// output directory. The house reads the video itself through the
// YouTube Data API, so nothing else about the video is written here.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

if (!existsSync(source)) {
  throw new Error(`VIDEO.json not found at ${source}`);
}

// Read the file first, so a malformed VIDEO.json fails loudly here
// instead of handing the house a broken link file.
const parsed: unknown = JSON.parse(readFileSync(source, "utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  (parsed as { url: string }).url.length === 0
) {
  throw new Error(`VIDEO.json at ${source} has no usable "url" string`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`Copied ${source} -> ${target}`);
