import {StructureResolver} from 'sanity/structure'

import {FcAbout} from 'react-icons/fc'
import {FaLaptopCode, FaSchool, FaSuitcase} from 'react-icons/fa'
import {MdCategory} from 'react-icons/md'
import {GiGearHammer, GiNewspaper} from 'react-icons/gi'
import {BiCategory} from 'react-icons/bi'
import {TbCloudNetwork} from 'react-icons/tb'
import {RiCertificate2Line} from 'react-icons/ri'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('saisaynoomleng_dev')
    .items([
      S.divider().title('Operations'),
      S.documentTypeListItem('about').icon(FcAbout).title('About Me'),
      S.documentTypeListItem('skill').icon(FaLaptopCode).title('Skills'),
      S.documentTypeListItem('category').icon(MdCategory).title('Blog Categories'),
      S.documentTypeListItem('projectCategory').icon(BiCategory).title('Project Categories'),
      S.documentTypeListItem('blog').icon(GiNewspaper).title('Blogs'),
      S.documentTypeListItem('project').icon(TbCloudNetwork).title('Projects'),
      S.documentTypeListItem('history').icon(FaSuitcase).title('Employment Timeline'),
      S.documentTypeListItem('platform').icon(FaSchool).title('Learnign Platforms'),
      S.documentTypeListItem('certificate').icon(RiCertificate2Line).title('Certificates'),
      S.documentTypeListItem('siteSetting').icon(GiGearHammer).title('Site Setting'),
    ])
