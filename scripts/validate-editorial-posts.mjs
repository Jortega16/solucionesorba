import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const posts = JSON.parse(readFileSync(new URL('../src/content/blog/posts.json', import.meta.url), 'utf8'));
assert.ok(Array.isArray(posts), 'Editorial posts must be an array');
const slugs = new Set();
const days = new Set();
const localDate = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Costa_Rica' });

for (const post of posts) {
  for (const field of ['slug', 'locale', 'title', 'description', 'category', 'excerpt', 'content']) {
    assert.ok(typeof post[field] === 'string' && post[field].trim(), `Missing ${field}`);
  }
  assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `Invalid slug: ${post.slug}`);
  assert.ok(['es', 'en', 'pt'].includes(post.locale), 'Unsupported locale');
  assert.ok(['DRAFT', 'PUBLISHED'].includes(post.status), 'Invalid status');
  for (const field of ['publishedAt', 'updatedAt']) {
    assert.ok(typeof post[field] === 'string' && /(?:Z|[+-]\d{2}:\d{2})$/.test(post[field]) &&
      Number.isFinite(Date.parse(post[field])), `Invalid date or missing timezone: ${field}`);
  }
  const key = `${post.locale}:${post.slug}`;
  assert.ok(!slugs.has(key), `Duplicate slug: ${key}`);
  slugs.add(key);
  assert.ok(post.publicationMode === undefined || ['scheduled', 'manual'].includes(post.publicationMode), 'Invalid publication mode');
  if (post.status === 'PUBLISHED' && post.publicationMode !== 'manual') {
    const day = `${post.locale}:${localDate.format(new Date(post.publishedAt))}`;
    assert.ok(!days.has(day), `More than one editorial article for ${day}`);
    days.add(day);
  }
  assert.ok(Array.isArray(post.sourceUrls) && post.sourceUrls.length > 0, 'Sources are required');
  for (const source of post.sourceUrls) {
    assert.equal(new URL(source).protocol, 'https:', 'Sources must use HTTPS');
    assert.ok(post.content.includes(`](${source})`), `Source must be linked in article: ${source}`);
  }
}
console.log(`Validated ${posts.length} editorial articles`);
