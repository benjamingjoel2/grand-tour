export const SITE = {
  name: 'Grand Tour',
  url: 'https://grandtour.tourground.com',
  tagline: 'France beyond the obvious',
  description:
    'Story-led, practical travel writing about France beyond the obvious: regions, food, wine, walking and slow travel, with sourced facts and verified local operators. Published by Tourground.',
  email: 'grandtour@tourground.com',
  publisher: { name: 'Tourground', url: 'https://tourground.com' },
  directoryUrl: 'https://tourground.com/',
  rondPointUrl: 'https://rond-point.tourground.com/',
  locale: 'en_GB',
  launchDate: '2026-11-11',
} as const;

export const CATEGORY_SLUGS = [
  'destinations',
  'food-and-wine',
  'walking-and-cycling',
  'itineraries',
  'where-to-stay',
  'travel-tips',
] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const CATEGORIES: Record<CategorySlug, { name: string; blurb: string }> = {
  destinations: {
    name: 'Destinations',
    blurb: 'Region by region: where to go in France, when to go, and what makes each place worth the journey.',
  },
  'food-and-wine': {
    name: 'Food & Wine',
    blurb: 'Markets, vineyards and long lunches: how to eat and drink well in France without a guidebook script.',
  },
  'walking-and-cycling': {
    name: 'Walking & Cycling',
    blurb: 'Trails, towpaths and quiet roads: France at the pace of your own feet or pedals.',
  },
  itineraries: {
    name: 'Itineraries',
    blurb: 'Day-by-day routes you can follow or borrow from, built around trains, roads and realistic travel days.',
  },
  'where-to-stay': {
    name: 'Where to Stay',
    blurb: 'Which towns and villages make good bases, and why the right base changes the whole trip.',
  },
  'travel-tips': {
    name: 'Travel Tips',
    blurb: 'The practical side: trains, driving, booking and the small things that make a trip in France easier.',
  },
};

export const DESTINATION_SLUGS = [
  'paris',
  'provence',
  'loire-valley',
  'normandy-brittany',
  'burgundy',
  'bordeaux-dordogne',
  'alps',
  'riviera',
  'corsica',
] as const;
export type DestinationSlug = (typeof DESTINATION_SLUGS)[number];

export const DESTINATIONS: Record<DestinationSlug, { name: string; blurb: string; rondPoint?: string }> = {
  paris: {
    name: 'Paris',
    blurb: 'The obvious start, and the hub for almost every rail journey out into the regions.',
  },
  provence: {
    name: 'Provence',
    blurb: 'Hill villages, lavender plateaux, Roman stones and markets that set the rhythm of the week.',
    rondPoint: 'https://rond-point.tourground.com/regions/provence',
  },
  'loire-valley': {
    name: 'The Loire',
    blurb: 'Châteaux, gardens and a river valley made for slow days by bike and by car.',
    rondPoint: 'https://rond-point.tourground.com/regions/loire-valley',
  },
  'normandy-brittany': {
    name: 'Normandy & Brittany',
    blurb: 'The D-Day coast, Mont-Saint-Michel, granite harbours and the Atlantic light.',
    rondPoint: 'https://rond-point.tourground.com/regions/normandy-mont-saint-michel',
  },
  burgundy: {
    name: 'Burgundy',
    blurb: 'The Côte d’Or’s vineyards, Beaune and Dijon, canals and Romanesque abbeys.',
    rondPoint: 'https://rond-point.tourground.com/regions/burgundy',
  },
  'bordeaux-dordogne': {
    name: 'Bordeaux & the Dordogne',
    blurb: 'Wine country, cliff-top castles, prehistoric caves and market towns.',
    rondPoint: 'https://rond-point.tourground.com/regions/dordogne-perigord',
  },
  alps: {
    name: 'The Alps',
    blurb: 'Lakes, high passes and mountain towns, in summer as much as in snow.',
    rondPoint: 'https://rond-point.tourground.com/regions/french-alps',
  },
  riviera: {
    name: 'The Riviera',
    blurb: 'Nice, the hill villages behind the coast and the train line along the sea.',
    rondPoint: 'https://rond-point.tourground.com/regions/cote-d-azur',
  },
  corsica: {
    name: 'Corsica',
    blurb: 'Mountain island of granite, maquis and long-distance trails.',
    rondPoint: 'https://rond-point.tourground.com/regions/corsica',
  },
};

export const AUTHORS: Record<string, { name: string; role: string; bio: string }> = {
  'grand-tour-editors': {
    name: 'Grand Tour editors',
    role: 'Editorial desk, Tourground',
    bio: 'Grand Tour stories are researched and written by the Grand Tour editorial desk at Tourground. Every practical fact is checked against the official sources listed at the end of each story, and each story shows when it was last updated.',
  },
};

export const NAV = [
  { href: '/destinations/', label: 'Destinations' },
  { href: '/food-and-wine/', label: 'Food & Wine' },
  { href: '/walking-and-cycling/', label: 'Walking & Cycling' },
  { href: '/itineraries/', label: 'Itineraries' },
  { href: '/where-to-stay/', label: 'Where to Stay' },
  { href: '/travel-tips/', label: 'Travel Tips' },
];
