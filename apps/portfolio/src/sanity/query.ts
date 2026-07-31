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

export const SKILLS_QUERY = defineQuery(`*[_type == 'skill'
 && defined(slug.current)]{
  _id,
  name,
  level
 }`);

export const EMPLOYMENTS_QUERY = defineQuery(`*[_type == 'history'
 && defined(slug.current)]
  |order(_updatedAt desc){
  _id,
  name,
  position,
  startedDate,
  endedDate,
  body
 }`);
