import seo from "./seo";

export default {
  title: "Activity",
  name: "hobby",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Image (Remember to tinyjpg)",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Blog Posts",
      name: "resources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
    {
      title: "Products",
      name: "products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    ...seo,
  ],
};
