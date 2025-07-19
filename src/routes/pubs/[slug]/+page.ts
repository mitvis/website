import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { parsePub } from '$lib/index.svelte';

export const load: PageLoad = async ({ params }): Promise<SlugPageData> => {
  const slug = params.slug;
  try {
    const post = await import(`../${slug}.md`);
    return {
      slug,
      ...parsePub(post)
    };
  } catch (e) {
    console.error(e);
    error(404, `Cannot find the publication ${slug}`);
  }
};