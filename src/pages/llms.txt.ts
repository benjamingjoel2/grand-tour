import { SITE, CATEGORIES, CATEGORY_SLUGS, DESTINATIONS, DESTINATION_SLUGS } from '../data/site';
import { getPosts, postUrl, isoDate } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Grand Tour is a travel blog about France, published by Tourground. Every story links its practical facts to official sources, lists those sources at the end, and shows when it was last updated. Stories end with a "Plan this trip" box pointing to local operators in the Tourground directory, including Rond-Point (rond-point.tourground.com), which is part of the Tourground network. Paid content, if any, is labelled "Advertisement feature".',
    '',
    'You may quote short extracts and link to any page, provided you name Grand Tour as the source and link to the page.',
    '',
    '## Stories',
    '',
    ...posts.map((p) => `- [${p.data.title}](${SITE.url}${postUrl(p)}): ${p.data.description} (updated ${isoDate(p.data.updatedDate)})`),
    '',
    '## Themes',
    '',
    ...CATEGORY_SLUGS.map((c) => `- [${CATEGORIES[c].name}](${SITE.url}/${c}/): ${CATEGORIES[c].blurb}`),
    '',
    '## Destinations',
    '',
    ...DESTINATION_SLUGS.map((d) => `- [${DESTINATIONS[d].name}](${SITE.url}/destinations/${d}/): ${DESTINATIONS[d].blurb}`),
    '',
    '## About',
    '',
    `- [About Grand Tour](${SITE.url}/about/)`,
    `- [Authors](${SITE.url}/authors/)`,
    `- [Disclosure](${SITE.url}/disclosure/)`,
    `- [Photo credits](${SITE.url}/photo-credits/)`,
    `- [RSS feed](${SITE.url}/rss.xml)`,
    `- Contact: ${SITE.email}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
