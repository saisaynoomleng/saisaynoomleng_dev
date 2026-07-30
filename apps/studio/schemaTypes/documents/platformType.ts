import {formatTitle} from '@saisaynoomleng_dev/utils'
import {FaSchool} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const platformType = defineType({
  name: 'platform',
  title: 'Platform',
  type: 'document',
  icon: FaSchool,
  fields: [
    defineField({
      name: 'name',
      title: 'Platform Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'imageWithAlt',
      title: 'Platform Logo',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({name, image}) {
      return {
        title: name ? formatTitle(name) : 'Platform name not provided',
        media: image,
      }
    },
  },
})
