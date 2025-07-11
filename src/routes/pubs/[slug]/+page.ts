import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { parsePub } from '$lib';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;
  try {
    const post = await import(`../${slug}.md`);
    return {
      slug,
      content: post.default,
      ...parsePub(post.metadata),
      seo: {
        desc: post.default
      }
    };
  } catch (e) {
    console.error(e);
    error(404, `Cannot find the publication ${slug}`);
  }
};