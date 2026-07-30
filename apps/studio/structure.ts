import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('saisaynoomleng_dev')
    .items([S.divider().title('Operations')])
