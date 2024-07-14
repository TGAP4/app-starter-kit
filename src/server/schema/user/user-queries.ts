import builder, { prisma } from "../builder";

builder.queryFields((t) => ({
  getUser: t.prismaField({
    type: "User",
    nullable: true,
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      return await prisma.user.findUnique({
        ...query,
        where: { id: args.id },
      });
    },
  }),
}));
