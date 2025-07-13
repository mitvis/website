import _ from 'lodash';
import type { PageLoad } from './$types';
import { getPubs, getThemes } from '$lib'; 
import tags from '$lib/data/tags.json';

export const load: PageLoad = async () => {
  const pubs = await getPubs();
  const themes = await getThemes();
  
  for (const pub of pubs) {
    pub.displayYear = pub.year;
    pub.materials = pub.materials?.filter(material => !['cube', 'file-archive', 'registered'].includes(material.type));

    pub.video = pub.videos?.figure || pub.videos?.talk;
  }

  return { pubs, themes, tags };
};