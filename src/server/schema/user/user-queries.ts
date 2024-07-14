import builder, { prisma } from "../builder";

builder.queryFields((t) => ({
  getUser: t.prismaField({
    type: "User",
    nullable: true,
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: (query, root, args, ctx, info) => {
      try {
        return prisma.user.findUniqueOrThrow({
          ...query,
          where: { id: args.id },
        });
      } catch (e) {
        return null;
      }
    },
  }),
}));
