import {GiGearHammer} from 'react-icons/gi'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettingType = defineType({
  name: 'siteSetting',
  icon: GiGearHammer,
  type: 'document',
  fields: [
    // Branding
    defineField({
      name: 'siteName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),

    // navigation
    defineField({
      name: 'navigation',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'navLink',
          type: 'object',
          fields: [
            defineField({
              name: 'link',
              type: 'pageLink',
            }),
          ],
        }),
      ],
    }),

    // footer
    defineField({
      name: 'footer',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
