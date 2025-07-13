import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { parsePub } from '$lib';

export const load: PageLoad = async ({ params }): Promise<SlugPageData> => {
  const slug = params.slug;
  try {
    const post = await import(`../${slug}.md`);
    return {
      slug,
      ...parsePub(post),
      seo: {
        desc: post.content
      }
    };
  } catch (e) {
    console.error(e);
    error(404, `Cannot find the publication ${slug}`);
  }
};