import { defineQuery } from 'next-sanity';

export const ABOUT_QUERY = defineQuery(`*[_type == 'about'
 && defined(slug.current)][0]{
  "slug": slug.current,
  body,
  "city": contactInfo.city,
  "state": contactInfo.state,
  "gitHubUrl": contactInfo.gitHubUrl,
  "leetCodeUrl": contactInfo.leetCodeUrl,
  "linkedInUrl": contactInfo.linkedInURL,
  interests[]
 }`);
