import _ from 'lodash';

import venues from '$lib/data/venues.json';
import people from '$lib/data/people.json';
import themes from '$lib/data/research_themes.json';

export const missionStatement = 'We use visualization as a petri dish to study intelligence augmentation: how can computation help amplify our cognition and creativity, while respecting our agency?';

export function isMemberAuthor(a: Author): a is MemberAuthor {
	return !!(a as MemberAuthor).key;
}

export const sortByDate = (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime();

export function parsePub({default: content, metadata}: {default: any; metadata: PublicationFrontmatter}) {
  const fullTitle = metadata.title;
  const title = fullTitle.split(':');

  return {
    content,
    ...metadata,
    fullTitle,
    title: title[0].trim(),
    subtitle: title[1]?.trim(),
    year: new Date(metadata.date).getUTCFullYear(),
    venueKey: metadata.venue,
    venue: (venues as VenuesData)[metadata.venue],
    authors: metadata.authors.map((author) => ({
      ...author,
      ...(isMemberAuthor(author) ? (people as PeopleData)[author.key] : {})
    }))
  };
}

export async function getPubs(): Promise<Publication[]> {
  const files = import.meta.glob('/src/routes/pubs/*.md');
	const pubs = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
      try {
        const pub = await resolver() as {default: any; metadata: PublicationFrontmatter};
        const slug = path.slice(17, -3);
        const parsed = parsePub(pub);
        return {slug, ...parsed};
      } catch (error) {
        console.error(error);
        return null;
      }
		})
	);

  const validPubs = pubs.filter((pub): pub is NonNullable<typeof pub> => pub !== null);
  return validPubs.sort(sortByDate);
};

export async function getThemes(): Promise<Theme[]> {
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