import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import people from '$lib/data/people.json';
import venues from '$lib/data/venues.json';

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;
  try {
    const post = await import(`../${slug}.md`);
    const {authors, ...metadata} = post.metadata;
    return {
      content: post.default,
      ...metadata,
      authors: authors.map((author: any) => ({
        ...author,
        ...(author.key in people ? people[author.key] : {})
      })),
      venue: venues[metadata.venue]
    };
  } catch (e) {
    console.error(e);
    error(404, `Cannot find the publication ${slug}`);
  }
};