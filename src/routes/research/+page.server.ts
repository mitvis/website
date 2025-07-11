import type { PageLoad } from './$types';
import { getPubs } from '$lib'; 
import _ from 'lodash';

export const load: PageLoad = async () => {
  const pubs = await getPubs();
  const pubsByYear = _.groupBy(pubs, pub => new Date(pub.date).getUTCFullYear());
  const years = Object.keys(pubsByYear).sort((a, b) => +b - +a);  

  return { pubsByYear, years };
};