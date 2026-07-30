import {defineArrayMember, defineField, defineType} from 'sanity'

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const blockContent = defineType({
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {value: 'bullet', title: 'Bullet List'},
        {value: 'number', title: 'Number List'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'imageWithAlt',
    }),
  ],
})

export const seo = defineType({
  name: 'seo',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaDesc',
      title: 'Meta Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'noIndex',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})

export const pageLink = defineType({
  name: 'pageLink',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Link Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'path to the page',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isInternal',
      type: 'boolean',
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
})

export const socialLink = defineType({
  name: 'socialLink',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      type: 'string',
      options: {
        list: [
          {value: 'gitHub', title: 'GitHub'},
          {value: 'linkedIn', title: 'LinkedIn'},
          {value: 'leetCode', title: 'LeetCode'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'url',
      title: 'URL to the platform',
      type: 'url',
    }),
  ],
})
