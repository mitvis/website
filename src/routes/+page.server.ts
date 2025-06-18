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
      desc: (await compile(theme.desc))?.code || theme.desc,
    }))),
    people: people
  };
};