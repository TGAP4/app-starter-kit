import builder, { prisma } from "../builder";

builder.queryFields((t) => ({
  getUser: t.prismaField({
    type: "User",
    nullable: true,
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      try {
        return await prisma.user.findUniqueOrThrow({
          ...query,
          where: { id: args.id },
        });
      } catch (e) {
        return null;
      }
    },
  }),
}));
