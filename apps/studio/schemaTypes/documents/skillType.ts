import {formatTitle} from '@saisaynoomleng_dev/utils'
import {FaLaptopCode} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  type: 'document',
  icon: FaLaptopCode,
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-language`,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      level: 'level',
    },
    prepare({name, level}) {
      return {
        title: name ? formatTitle(name) : 'Skill name not provided',
        subtitle: `Level: ${level}%`,
        media: FaLaptopCode,
      }
    },
  },
})
