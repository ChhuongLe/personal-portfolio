import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "companyName",
      title: "CompanyName",
      type: "string"
    }),
    defineField({
      name:"companyImage",
      title:"CompanyImage",
      type:"string"
    }),
    defineField({
      name:"dateStarted",
      title:"DateStarted",
      type:"string",
    }),
    defineField({
      name: "dateEnded",
      title: "DateEnded",
      type: "string",
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean"
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of:[{ type:"reference", to: {type: "skill"} }]
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }]
    })
  ],
})
