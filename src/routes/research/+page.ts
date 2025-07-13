import _ from 'lodash';
import type { PageLoad } from './$types';
import { getPubs, getThemes } from '$lib'; 
import tags from '$lib/data/tags.json';

export const load: PageLoad = async () => {
  const pubs = await getPubs();
  const themes = await getThemes();
  
  for (const pub of pubs) {
    pub.materials = pub.materials?.filter((material: Material) => !['cube', 'file-archive', 'registered'].includes(material.type));

    // Elevate a video
    if (typeof pub.videos?.figure === 'string') {
      pub.video = pub.videos.figure;
    } else if (typeof pub.videos?.talk === 'string') {
      pub.video = pub.videos.talk;
    }
  }

  return { pubs, themes, tags };
};