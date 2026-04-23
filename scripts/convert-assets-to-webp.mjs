/**
 * Convert raster images under ./assets to WebP under ./public/assets (same subpaths).
 * Run: node scripts/convert-assets-to-webp.mjs
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcRoot = path.join(root, "assets");
const outRoot = path.join(root, "public", "assets");

const EXT = new Set([".png", ".jpg", ".jpeg"]);
const quality = 85;

async function walk(dir, rel = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const r = path.join(rel, e.name);
    if (e.isDirectory()) {
      out.push(...(await walk(path.join(dir, e.name), r)));
    } else if (e.isFile()) {
      const ext = path.extname(e.name).toLowerCase();
      if (EXT.has(ext)) {
        out.push(r);
      }
    }
  }
  return out;
}

async function main() {
  let st;
  try {
    st = await stat(srcRoot);
  } catch {
    console.error("Missing source folder:", path.relative(root, srcRoot));
    process.exit(1);
  }
  if (!st.isDirectory()) {
    console.error("Not a directory:", srcRoot);
    process.exit(1);
  }

  const files = await walk(srcRoot);
  if (files.length === 0) {
    console.log("No png/jpg under", path.relative(root, srcRoot));
    return;
  }

  for (const rel of files) {
    const from = path.join(srcRoot, rel);
    const base = path.join(outRoot, rel);
    const dir = path.dirname(base);
    const name = path.basename(rel, path.extname(rel)) + ".webp";
    const to = path.join(dir, name);

    await mkdir(dir, { recursive: true });
    await sharp(from)
      .webp({ quality, effort: 4 })
      .toFile(to);

    console.log(
      path.join("public", "assets", rel.replace(/\.[^.]+$/, ".webp")),
    );
  }

  console.log("Done.", files.length, "file(s).");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
