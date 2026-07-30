import {BiCategory} from 'react-icons/bi'
import {defineField, defineType} from 'sanity'

export const projectCategoryType = defineType({
  name: 'projectCategory',
  type: 'document',
  icon: BiCategory,
  fields: [
    defineField({
      name: 'name',
      title: 'Project Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.name}-project-category`,
      },
    }),
  ],
})
