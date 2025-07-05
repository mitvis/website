import venues from '$lib/data/venues.json';
import people from '$lib/data/people.json';
import themes from '$lib/data/research_themes.json';
import _ from 'lodash';

export async function getThemes() {
  return [themes[0], ..._.shuffle(themes.slice(1))];
}

export async function getPubs() {
  const files = import.meta.glob('/src/routes/pubs/*.md');
	const pubs = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
      try {
        const { metadata } = await resolver();
        const slug = path.slice(11, -3);
			  return {
          slug, 
          ...metadata,
          venueKey: metadata.venue,
          venue: venues[metadata.venue],
          authors: metadata.authors.map((author: any) => ({
            ...author,
            ...people[author.key]
          }))
        };
      } catch (error) {
        return {date: Date.now()};
      }
		})
	);

  return pubs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export async function getThemesWithPubs() {
  const themes = await getThemes();
  const pubs = await getPubs();

  return themes.map(theme => ({
    ...theme,
    pubs: pubs
      .filter(pub => pub.themes?.includes(theme.key))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }));
}