import type { PageServerLoad } from './$types';
import { compile } from 'mdsvex';

import news from '$lib/data/news.json';
import people from '$lib/data/people.json';
import { getThemesWithPubs } from '$lib';

export const load: PageServerLoad = async () => {
  const themes = await getThemesWithPubs();

  return {
    news: await Promise.all(news.slice(0, 10).map(async (item) => ({
      ...item,
      desc: (await compile(item.desc))?.code || item.desc
    }))),
    themes: await Promise.all(themes.map(async (theme) => ({
      ...theme,
      pubs: theme.pubs.slice(0, 5),
      desc: (await compile(theme.desc))?.code || theme.desc,
    }))),
    people
  };
};