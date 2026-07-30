import {formatTitle} from '@saisaynoomleng_dev/utils'
import {FcAbout} from 'react-icons/fc'
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  icon: FcAbout,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'About Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'About Content',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'object',
      fields: [
        defineField({
          name: 'city',
          title: 'City',
          validation: (rule) => rule.required(),
          type: 'string',
        }),
        defineField({
          name: 'state',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'gitHubUrl',
          type: 'url',
          title: 'GitHub URL',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'linkedInURL',
          type: 'url',
          title: 'LinkedIn URL',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'leetcodeUrl',
          type: 'url',
          title: 'LeetCode URL',
        }),
      ],
    }),
    defineField({
      name: 'interests',
      title: 'Interests',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      url: 'contactInfo.gitHubUrl',
    },
    prepare({name, url}) {
      const formatName = name ? formatTitle(name) : 'Name not provided'

      return {
        title: formatName,
        subtitle: `GitHub: ${url}`,
        media: FcAbout,
      }
    },
  },
})
