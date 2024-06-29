import builder, {prisma} from '../builder'

builder.mutationFields((t) => ({
  updateUser: 
      t.prismaField({
        type: 'User',
        args: {
          id: t.arg.int({required: true}),
          firstName: t.arg.string(),
          lastName: t.arg.string()
        },
        resolve: async (query, root, args, ctx, info) => {
          const updatedUser = await prisma.user.update({
            where: {
              id: args.id,
            },
            data: {
              ...args.firstName && {firstName: args.firstName},
              ...args.lastName && {lastName: args.lastName}
            },
          }
            
          )
          return updatedUser
        }

        })
}));

