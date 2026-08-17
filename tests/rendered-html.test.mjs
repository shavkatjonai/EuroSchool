import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const htmlUrl = new URL("../dist/client/index.html", import.meta.url);

test("exports the complete EURO SCHOOL landing page", async () => {
  const html = await readFile(htmlUrl, "utf8");
  assert.match(html, /<html lang="uz"/i);
  assert.match(html, /EURO SCHOOL — Kelajak liderlari maktabi/i);
  assert.match(html, /Farzandingizning/);
  assert.match(html, /18-avgust/);
  assert.match(html, /Qabulga yozilish/);
  assert.match(html, /\+998 77 870 90 80/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("includes Netlify-ready social and school assets", async () => {
  const html = await readFile(htmlUrl, "utf8");
  assert.match(html, /\/og\.png/);
  assert.match(html, /\/assets\/euro-school-logo\.png/);
  assert.match(html, /\/assets\/euro-school-building\.png/);
});
