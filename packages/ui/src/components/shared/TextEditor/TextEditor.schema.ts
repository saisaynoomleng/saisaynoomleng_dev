import { defineSchema } from '@portabletext/editor';

export const schemaDefinition = defineSchema({
  decorators: [
    { name: 'strong' },
    { name: 'em' },
    { name: 'underline' },
    { name: 'strikeThrough' },
  ],
  styles: [
    { name: 'normal' },
    { name: 'h1' },
    { name: 'h2' },
    { name: 'h3' },
    { name: 'h4' },
    { name: 'blockquote' },
  ],
  annotations: [{ name: 'link' }],
  lists: [{ name: 'bullet' }, { name: 'number' }],
  blockObjects: [{ name: 'image' }, { name: 'code' }],
});
