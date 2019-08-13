export default {
  title: "Provider",
  name: "provider",
  type: "document",
  fields: [
    {
      title: "Logo",
      description:
        "Get a really good .png (transparent background) of their logo.",
      name: "image",
      type: "image",
    },
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Site",
      name: "site",
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
  ],
};
