import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name:"image",
      title:"Image",
      type:"string",
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text"
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to:{ type: "skill" } }]
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
  ],
})
