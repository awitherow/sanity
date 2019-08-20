import seo from "./seo";

export default {
  title: "Activity",
  name: "hobby",
  type: "document",
  fields: [
    ...seo,
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
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
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
  ],
};
