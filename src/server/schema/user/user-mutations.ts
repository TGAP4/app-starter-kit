import builder, {prisma} from '../builder'

builder.mutationFields((t) => ({
  updateUser: 
      t.prismaField({
        type: 'User',
        args: {
          firstName: t.arg.string(),
          lastName: t.arg.string()
        },
        resolve: async (parent, a, args, info) =>
          args.firstName
      })
}));

