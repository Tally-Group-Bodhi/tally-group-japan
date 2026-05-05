import { defineType, defineField } from "sanity";

export default defineType({
  name: "career",
  title: "Career",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Software Development", value: "Software Development" },
          { title: "Design", value: "Design" },
          { title: "Customer Success", value: "Customer Success" },
          { title: "Sales", value: "Sales" },
          { title: "Marketing", value: "Marketing" },
          { title: "Operations", value: "Operations" },
          { title: "Data Science", value: "Data Science" },
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
