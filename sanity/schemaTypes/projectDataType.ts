import { defineField, defineType } from "sanity";

export const projectDataType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "picture",
      type: "image",
      title: "Picture",
      options: {
        hotspot: true,
      },
    }),
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
      name: "icons",
      title: "Icons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Image",
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
      name: "codeLink",
      type: "url",
      title: "Code Link",
    }),
    defineField({
      name: "liveSiteLink",
      type: "url",
      title: "Live Site Link",
    }),
  ],
});
