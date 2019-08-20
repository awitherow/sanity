import seo from "./seo";

export default {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    ...seo,
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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title: "Brand",
      name: "creator",
      type: "string",
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
    },
    {
      title: "Tier",
      description:
        "Please select a number representing quality/price 1-3 only.",
      name: "tier",
      type: "number",
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
