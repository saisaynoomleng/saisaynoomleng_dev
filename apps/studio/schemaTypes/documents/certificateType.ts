import {formatTitle} from '@saisaynoomleng_dev/utils'
import {RiCertificate2Line} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Certificates',
  icon: RiCertificate2Line,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Certificate Name',
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
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
      validation: (rule) => rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      type: 'imageWithAlt',
      title: 'Certificate Photo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'reference',
      to: [{type: 'platform'}],
    }),
    defineField({
      name: 'receivedAt',
      title: 'Received Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
      platform: 'platform.name',
    },
    prepare({name, image, platform}) {
      return {
        title: name ? formatTitle(name) : 'Certitifacte name not provided',
        subtitle: `Platform: ${formatTitle(platform)}`,
        media: image ?? RiCertificate2Line,
      }
    },
  },
})
