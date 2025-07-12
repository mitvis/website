import type { PageLoad } from './$types';
import { getPubs } from '$lib'; 
import _ from 'lodash';

export const load: PageLoad = async () => {
  const pubs = await getPubs();
  for (const pub of pubs) {
    pub.materials = pub.materials?.filter(material => !['cube', 'file-archive'].includes(material.type));

    pub.video = pub.videos?.figure || pub.videos?.talk;
    pub.video_url = pub.video?.vimeo ? `https://vimeo.com/${pub.video.vimeo}` : `https://www.youtube.com/watch?v=${pub.video}`;
  }
  const pubsByYear = _.groupBy(pubs, pub => new Date(pub.date).getUTCFullYear());
  const years = Object.keys(pubsByYear).sort((a, b) => +b - +a);  

  return { pubsByYear, years };
};