import {formatDate, formatTitle} from '@saisaynoomleng_dev/utils'
import {GiNewspaper} from 'react-icons/gi'
import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  icon: GiNewspaper,
  fields: [
    defineField({
      name: 'name',
      title: 'Blog Name',
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
      name: 'publishedAt',
      type: 'date',
      title: 'Published Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'minRead',
      type: 'number',
      title: 'Reading Duration',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
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
      title: 'Blog Content',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
      title: 'Blog Cover photo',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      publishedAt: 'publishedAt',
      category: 'category.name',
      image: 'mainImage',
    },
    prepare({name, publishedAt, category, image}) {
      const formatName = name ? formatTitle(name) : 'Title not provided'
      const date = publishedAt ? formatDate(publishedAt) : 'No published date'
      const formatCategory = category ? formatTitle(category) : 'No category provided'

      return {
        title: formatName,
        subtitle: `Date: ${date} | Category: ${formatCategory}`,
        media: image ?? GiNewspaper,
      }
    },
  },
})
