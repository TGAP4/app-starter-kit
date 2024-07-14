import builder, { prisma } from "../builder";

builder.queryFields((t) => ({
  getPosts: t.prismaField({
    type: ["Post"],
    args: {
      authorId: t.arg.int(),
    },
    resolve: (query, root, args, ctx, info) => {
      return prisma.post.findMany({
        ...query,
        ...(args.authorId && { where: { authorId: args.authorId } }),
      });
    },
  }),
}));
