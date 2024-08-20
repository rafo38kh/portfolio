import { defineField, defineType } from "sanity";

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
      name: "author",
      type: "string",
      title: "Author",
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isRead",
      type: "boolean",
      title: "Is Read",
    }),
  ],
});
