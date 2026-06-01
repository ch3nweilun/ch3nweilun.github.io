import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const html = readFileSync(join(process.cwd(), 'dist', 'index.html'), 'utf8');
const assetDir = join(process.cwd(), 'dist', '_astro');
const css = readdirSync(assetDir)
  .filter((file) => file.endsWith('.css'))
  .map((file) => readFileSync(join(assetDir, file), 'utf8'))
  .join('\n');

assert.match(html, /class="resume-sheet"/, 'homepage should render as a single resume sheet');
assert.match(html, /Education/, 'education should remain visible');
assert.match(html, /Skills/, 'skills should remain visible');
assert.match(css, /--bg:\s*#d7ecff/, 'background should use the deeper light-blue tone');
assert.match(css, /object-fit:\s*contain/, 'profile photo should preserve the original image without cropping');
assert.match(css, /--resume-columns:\s*minmax\(250px,\s*\.36fr\)\s+minmax\(0,\s*1fr\)/, 'header and body should share the same column weights');
assert.match(css, /\.resume-header[^{]*\{[^}]*grid-template-columns:var\(--resume-columns\)/, 'header should use the shared resume columns');
assert.match(css, /\.resume-body[^{]*\{[^}]*grid-template-columns:var\(--resume-columns\)/, 'body should use the shared resume columns');
assert.match(css, /h1[^{]*\{[^}]*font-size:clamp\(1\.05rem,2vw,1\.35rem\)/, 'title should use the same size as the subtitle');
assert.match(css, /\.role[^{]*\{[^}]*font-weight:400/, 'subtitle should not be bold');
assert.match(html, /data minimization/i, 'personal statement should mention data minimization');
assert.ok(
  html.indexOf('class="contact-card"') < html.indexOf('class="intro-card"'),
  'contact card should appear before the title and personal statement',
);
assert.ok(
  html.indexOf('class="secondary-column"') < html.indexOf('class="primary-column"'),
  'resume side column should appear before the main content column',
);
assert.doesNotMatch(css, /border-left:\s*1px\s+solid\s+var\(--line\)/, 'header vertical divider should be removed');
assert.doesNotMatch(html, /class="site-header"/, 'top navigation bar should be removed');
assert.doesNotMatch(html, /Resume Snapshot/, 'resume snapshot label should be removed');
assert.doesNotMatch(html, /research-orbit/, 'research orbit should be removed from the resume layout');
assert.doesNotMatch(html, /View Publications/, 'academic-first CTA should not be the primary action');
