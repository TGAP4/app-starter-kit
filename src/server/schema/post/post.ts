import builder from "../builder";

builder.prismaObject("Post", {
  fields: (t) => ({
    id: t.exposeID("id"),
    firstName: t.exposeString("title"),
    lastName: t.exposeString("content"),
    author: t.relation("author"),
    author_id: t.exposeInt("authorId"),
  }),
});
