import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';

import news from '$lib/data/news.json';
import themes from '$lib/data/research_themes.json';
import people from '$lib/data/people.json';
import { getPubs } from '$lib';

export const load: PageServerLoad = async () => {
  const pubs = await getPubs();

  return {
    news: await Promise.all(news.slice(0, 10).map(async (item) => ({
      ...item,
      desc: (await compile(item.desc))?.code || item.desc
    }))),
    themes: await Promise.all(themes.map(async (theme) => ({
      ...theme,
      pubs: pubs
        .filter(pub => pub.themes?.includes(theme.key))
        .map(pub => ({
          ...pub,
          authors: pub.authors.map((author: any) => ({
            ...author,
            ...people[author.key]
          }))
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5),
      desc: (await compile(theme.desc))?.code || theme.desc,
    }))),
    people
  };
};