import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Shown on the project grid cards.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {name: 'github', title: 'GitHub URL', type: 'url'},
        {name: 'live', title: 'Live Site URL', type: 'url'},
      ],
    }),
    defineField({
      name: 'gradientConfig',
      title: 'Gradient Configuration',
      type: 'object',
      fields: [
        {name: 'from', title: 'From Color (Hex)', type: 'string', initialValue: '#0D47A1'},
        {name: 'to', title: 'To Color (Hex)', type: 'string', initialValue: '#1976D2'},
      ],
      description: 'Used for individual project liquid gradients.',
    }),
    defineField({
      name: 'content',
      title: 'Page Content (Page Builder)',
      type: 'array',
      description: 'Build the unique flow of this project page using blocks.',
      of: [
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text Block',
          fields: [{name: 'body', type: 'text', title: 'Body Text'}],
        },
        {
          type: 'object',
          name: 'imageBlock',
          title: 'Image Block',
          fields: [
            {name: 'image', type: 'image', title: 'Image'},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
        },
        {
          type: 'object',
          name: 'codeBlock',
          title: 'Code Snippet',
          fields: [
            {name: 'code', type: 'text', title: 'Code'},
            {name: 'language', type: 'string', title: 'Language'},
          ],
        },
      ],
    }),
  ],
})
