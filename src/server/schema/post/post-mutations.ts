import builder, { prisma } from "../builder";

builder.mutationFields((t) => ({
  createPost: t.prismaField({
    type: "Post",
    args: {
      title: t.arg.string({ required: true }),
      content: t.arg.string({ required: true }),
      userId: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      const post = await prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          author: {
            connect: { id: args.userId },
          },
        },
      });
      return post;
    },
  }),
}));
