// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// store, content
import hobby from "./activity.js";
import activity from "./activity.js";
import tag from "./tag.js";
import product from "./product.js";

// blog items
import author from "./author.js";
import blockContent from "./blockContent.js";
import post from "./post.js";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "hi-vibe",
  types: schemaTypes.concat([
    // content
    hobby,
    tag,
    // store
    product,
    // blog
    author,
    blockContent,
    post,
  ]),
});
