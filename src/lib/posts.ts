import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort(
    (a, b) =>
      b.data.pubDate.getTime() - a.data.pubDate.getTime() ||
      // stable order for same-day posts: featured first, then by title
      Number(b.data.featured) - Number(a.data.featured) ||
      a.data.title.localeCompare(b.data.title),
  );
}

export function wordCount(post: Post): number {
  const body = (post.body ?? '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|-]/g, ' ');
  return body.split(/\s+/).filter(Boolean).length;
}

export function readingTime(post: Post): number {
  return Math.max(1, Math.round(wordCount(post) / 220));
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}

export function related(post: Post, all: Post[], n = 3): Post[] {
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => {
      let score = 0;
      for (const d of p.data.destinations) if (post.data.destinations.includes(d)) score += 3;
      for (const c of p.data.categories) if (post.data.categories.includes(c)) score += 1;
      if (p.data.categories[0] === post.data.categories[0]) score += 1;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score || a.p.data.title.localeCompare(b.p.data.title))
    .slice(0, n)
    .map((x) => x.p);
}

const fmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date | string) => fmt.format(typeof d === 'string' ? new Date(d) : d);
export const isoDate = (d: Date | string) => (typeof d === 'string' ? d : d.toISOString().slice(0, 10));
