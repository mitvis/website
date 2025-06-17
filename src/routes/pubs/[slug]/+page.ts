import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);
  console.log(post.default);
  return {
    content: post.default,
    metadata: post.metadata
  };
};