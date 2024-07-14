import builder, { prisma } from "../builder";

builder.mutationFields((t) => ({
  postUser: t.prismaField({
    type: "User",
    args: {
      firstName: t.arg.string({ required: true }),
      lastName: t.arg.string({ required: true }),
    },
    resolve: async (query, root, args, ctx, info) => {
      const createdUser = await prisma.user.create({
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
        },
      });
      return createdUser;
    },
  }),
}));
