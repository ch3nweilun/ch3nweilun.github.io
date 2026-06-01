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
assert.doesNotMatch(html, /class="site-header"/, 'top navigation bar should be removed');
assert.doesNotMatch(html, /Resume Snapshot/, 'resume snapshot label should be removed');
assert.doesNotMatch(html, /research-orbit/, 'research orbit should be removed from the resume layout');
assert.doesNotMatch(html, /View Publications/, 'academic-first CTA should not be the primary action');
