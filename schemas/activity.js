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
  ],
};
