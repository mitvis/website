import type { PageLoad } from './$types';
import { compile } from 'mdsvex';

import news from '$lib/data/news.json';
import people from '$lib/data/people.json';
import { getThemesWithPubs, missionStatement } from '$lib';

export const load: PageLoad = async () => {
  const themes = await getThemesWithPubs();

  return {
    seo: {
      desc: missionStatement
    },
    news: await Promise.all(news.slice(0, 10).map(async (item) => ({
      date: item.date,
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