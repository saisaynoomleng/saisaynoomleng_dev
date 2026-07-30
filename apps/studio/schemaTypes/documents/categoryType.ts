import {formatTitle} from '@saisaynoomleng_dev/utils'
import {MdCategory} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  icon: MdCategory,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-category`,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({name}) {
      return {
        title: name ? formatTitle(name) : 'Category name not provided',
        media: MdCategory,
      }
    },
  },
})
