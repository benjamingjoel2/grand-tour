import { SITE } from '../data/site';

export const ORG_ID = `${SITE.url}/#publisher`;
export const SITE_ID = `${SITE.url}/#website`;

export function baseGraph() {
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.publisher.name,
      url: SITE.publisher.url,
      email: SITE.email,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      name: SITE.name,
      url: `${SITE.url}/`,
      description: SITE.description,
      inLanguage: 'en-GB',
      publisher: { '@id': ORG_ID },
    },
  ];
}

export type Crumb = { name: string; href: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, SITE.url).href,
    })),
  };
}
