import { defineField, defineType } from "sanity";

export const techData = defineType({
  name: "icons",
  title: "Icons",
  type: "document",
  fields: [
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              type: "image",
              title: "Icon",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Icon Name",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              type: "image",
              title: "Icon",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Icon Name",
            }),
          ],
        },
      ],
    }),
  ],
});
