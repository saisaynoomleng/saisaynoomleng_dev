import {aboutType} from './documents/aboutType'
import {blogType} from './documents/blogType'
import {categoryType} from './documents/categoryType'
import {certificateType} from './documents/certificateType'
import {historyType} from './documents/historyType'
import {platformType} from './documents/platformType'
import {projectCategoryType} from './documents/projectCategoryType'
import {projectType} from './documents/projectType'
import {siteSettingType} from './documents/siteSettingType'
import {skillType} from './documents/skillType'
import {blockContent, imageWithAlt, pageLink, seo, socialLink} from './shareType'

export const schemaTypes = [
  blockContent,
  seo,
  imageWithAlt,
  pageLink,
  socialLink,
  aboutType,
  skillType,
  categoryType,
  blogType,
  projectCategoryType,
  projectType,
  historyType,
  platformType,
  certificateType,
  siteSettingType,
]
