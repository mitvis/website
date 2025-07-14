import _ from 'lodash';
import type { PageLoad } from './$types';
import { getPubs, getThemes, sortByDate } from '$lib';
import people from '$lib/data/people.json';
import tags from '$lib/data/tags.json';
import videosData from '$lib/data/videos.json';

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

  const videos = videosData.map((video: any) => ({
    ...video,
    type: 'video',
    slug: video.youtube,
    year: new Date(video.date).getUTCFullYear(),
    authors: video.authors.map((author: any) => ({
      ...(people as PeopleData)[author.key]
    })),
  }));

  const work = [...pubs, ...videos].sort(sortByDate);

  return { work, themes, tags };
};