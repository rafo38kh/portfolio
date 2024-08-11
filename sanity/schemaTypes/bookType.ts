import { defineArrayMember, defineField, defineType } from "sanity";

export const bookType = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      options: {
        hotspot: true,
      },
    }),
  ],
});
