import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;
  try {
    const post = await import(`../${slug}.md`);
    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    console.error(e);
    error(404, `Cannot find the publication ${slug}`);
  }
};