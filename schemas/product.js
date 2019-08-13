export default {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Creator",
      name: "creator",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Category",
      name: "category",
      type: "string",
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
      title: "Provider",
      name: "provider",
      type: "reference",
      to: [{ type: "provider" }],
    },
    {
      title: "Affiliate Link",
      name: "link",
      type: "string",
    },
  ],
};
