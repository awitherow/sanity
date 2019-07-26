// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "hi-vibe",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Hobby",
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
          title: "Image (1:1 Square Proportions, Use Tinyjpg first too!)",
          name: "image",
          type: "image",
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
          title: "Benefits (Descriptive Link)",
          name: "benefits",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "address", type: "string", title: "Address" },
                { name: "text", type: "string", title: "Text" },
              ],
            },
          ],
        },
        {
          title: "Products",
          name: "products",
          type: "array",
          of: [{ type: "reference", to: [{ type: "product" }] }],
        },
      ],
    },
    {
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
          title: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      title: "Tag",
      name: "tag",
      type: "document",
      fields: [
        {
          title: "Tag",
          name: "tag",
          type: "string",
        },
      ],
    },
  ]),
});
