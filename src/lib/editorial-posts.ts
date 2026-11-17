import repositoryPosts from '../content/blog/posts.json';
import type { PublicBlogPost } from './cms';

export interface EditorialPost {
  slug: string;
  locale: string;
  title: string;
  description: string;
  category: string;
  excerpt: string;
  content: string;
  status: string;
  publicationMode?: string;
  publishedAt: string;
  updatedAt: string;
  sourceUrls: string[];
}

const entries: EditorialPost[] = repositoryPosts;

export function getEditorialPosts(now = new Date()): PublicBlogPost[] {
  return entries
    .filter((post) => post.status === 'PUBLISHED' && new Date(post.publishedAt) <= now)
    .map((post) => ({
      ...post,
      id: `editorial:${post.locale}:${post.slug}`,
      publishedAt: new Date(post.publishedAt),
      updatedAt: new Date(post.updatedAt),
    }));
}

// CMS entries take precedence, including drafts, so an editor can override or
// withdraw a repository article by using its same locale and slug in the CMS.
export function mergePublishedPosts(
  cmsPosts: (PublicBlogPost & { status: string })[],
  editorialPosts = getEditorialPosts()
): PublicBlogPost[] {
  const key = (post: PublicBlogPost) => `${post.locale}:${post.slug}`;
  const overridden = new Set(cmsPosts.map(key));
  return [
    ...cmsPosts.filter((post) => post.status === 'PUBLISHED'),
    ...editorialPosts.filter((post) => !overridden.has(key(post))),
  ].sort((a, b) =>
    (b.publishedAt?.getTime() ?? 0) - (a.publishedAt?.getTime() ?? 0) ||
    b.updatedAt.getTime() - a.updatedAt.getTime()
  );
}
