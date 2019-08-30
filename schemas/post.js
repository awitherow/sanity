import seo from "./seo";

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    ...seo,
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      title: "Products",
      name: "products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
  orderings: [
    {
      title: "Last Updated",
      name: "updatedNewestFirst",
      by: [{ field: "_updatedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
