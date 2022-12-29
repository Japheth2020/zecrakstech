import {type} from 'os'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'text'}],
    },
    {
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [{type: 'text'}],
        },
      ],
    },
  ],
}
