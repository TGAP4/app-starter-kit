import builder, {prisma} from '../builder'

builder.queryFields((t) => ({
  user: t.prismaField({
    type: 'User',
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: (query, root, args, context, info) =>
      prisma.user.findUniqueOrThrow({
        ...query,
        where: { id: args.id },
      }),
  })
}));
