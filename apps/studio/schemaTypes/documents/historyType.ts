import {formatDate, formatTitle} from '@saisaynoomleng_dev/utils'
import {FaSuitcase} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export const historyType = defineType({
  name: 'history',
  title: 'History',
  icon: FaSuitcase,
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
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employerName',
      title: 'Employer Name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'startedDate',
      title: 'Started Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endedDate',
      title: 'Ended Date',
      type: 'date',
    }),
    defineField({
      name: 'body',
      title: 'History Content',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      start: 'startedDate',
      end: 'endedDate',
    },
    prepare({name, start, end}) {
      return {
        title: name ? formatTitle(name) : 'History name not provided',
        subtitle: `Timeline: ${formatDate(start)}-${end != undefined ? formatDate(end) : 'Present'}`,
        media: FaSuitcase,
      }
    },
  },
})
