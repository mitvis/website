import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { missionStatement, parsePub, seo, siteName } from '$lib';

export const load: PageLoad = async ({ params }): Promise<SlugPageData> => {
  const slug = params.slug;
  
  try {
    const post = await import(`../${slug}.md`);
    const pub = parsePub(post);

    seo.title = `${pub.fullTitle} | ${siteName}`;
    seo.desc = pub.abstract ?? missionStatement;

    return {
      slug,
      ...pub
    };
  } catch (e) {
    console.error(e);
    error(404, `Cannot find the publication ${slug}`);
  }
};