import builder, {prisma} from '../builder'

builder.queryFields((t) => ({
  posts: t.prismaField({
    type: ['Post'],
    args: {
      authorId: t.arg.int(),
    },
    resolve: (query, root, args, context, info) => {
      return prisma.post.findMany({
        ...query,
        ...(args.authorId && {where: { authorId: args.authorId }}),
      })
  }
})}))