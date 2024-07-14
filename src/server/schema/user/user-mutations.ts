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
  patchUser: t.prismaField({
    type: "User",
    args: {
      id: t.arg.int({ required: true }),
      firstName: t.arg.string(),
      lastName: t.arg.string(),
    },
    resolve: async (query, root, args, ctx, info) => {
      const updatedUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          ...(args.firstName && { firstName: args.firstName }),
          ...(args.lastName && { lastName: args.lastName }),
        },
      });
      return updatedUser;
    },
  }),
}));
