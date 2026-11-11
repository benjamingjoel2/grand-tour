import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, CATEGORIES } from '../data/site';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.sponsored ? `Advertisement feature: ${p.data.title}` : p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: postUrl(p),
      categories: p.data.categories.map((c) => CATEGORIES[c].name),
      author: `${SITE.email} (Grand Tour editors)`,
    })),
    customData: '<language>en-gb</language>',
  });
}
