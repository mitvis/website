import venues from '$lib/data/venues.json';
import people from '$lib/data/people.json';
import themes from '$lib/data/research_themes.json';
import _ from 'lodash';

export const missionStatement = 'We use visualization as a petri dish to study intelligence augmentation: how can computation help amplify our cognition and creativity, while respecting our agency?';

export function parsePub(metadata) {
  const fullTitle = metadata.title;
  const title = fullTitle.split(':');
  return {
    ...metadata,
    fullTitle,
    title: title[0].trim(),
    subtitle: title[1]?.trim(),
    venueKey: metadata.venue,
    venue: venues[metadata.venue],
    authors: metadata.authors.map((author) => ({
      ...author,
      ...people[author.key]
    }))
  };
}

export async function getPubs() {
  const files = import.meta.glob('/src/routes/pubs/*.md');
	const pubs = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
      try {
        const { metadata } = await resolver();
        const slug = path.slice(17, -3);
        return {slug, ...parsePub(metadata)};
      } catch (error) {
        return {date: Date.now()};
      }
		})
	);

  return pubs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export async function getThemes() {
  return [themes[0], ..._.shuffle(themes.slice(1))];
}

export async function getThemesWithPubs() {
  const themes = await getThemes();
  const pubs = await getPubs();

  return themes.map(theme => ({
    ...theme,
    pubs: pubs
      .filter(pub => pub.themes?.includes(theme.key))
  }));
}