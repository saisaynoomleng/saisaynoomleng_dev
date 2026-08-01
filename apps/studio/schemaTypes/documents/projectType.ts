import {formatTitle} from '@saisaynoomleng_dev/utils'
import {TbCloudNetwork} from 'react-icons/tb'
import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  icon: TbCloudNetwork,
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
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
      name: 'category',
      title: 'Cateogry',
      type: 'reference',
      to: [{type: 'projectCategory'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Summary',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Project Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Project Details',
      type: 'object',
      fields: [
        defineField({
          name: 'startedDate',
          title: 'Project Started Date',
          type: 'date',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'endedDate',
          title: 'Project Ended Date',
          type: 'date',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'stacks',
          title: 'Tech Stack',
          type: 'array',
          of: [{type: 'string'}],
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'projectUrl',
          title: 'Project URL',
          type: 'url',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'repoUrl',
          title: 'Repository URL',
          type: 'url',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Screenshot',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      category: 'category.name',
    },
    prepare({name, image, category}) {
      return {
        title: name ? formatTitle(name) : 'name not proivded',
        subtitle: category ? formatTitle(category) : 'category not provided',
        media: image ?? TbCloudNetwork,
      }
    },
  },
})
