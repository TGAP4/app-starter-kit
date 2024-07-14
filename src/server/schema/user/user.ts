import builder from "../builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    firstName: t.exposeString("firstName"),
    lastName: t.exposeString("lastName"),
    fullName: t.string({
      resolve: (user) => `${user.firstName} ${user.lastName}`,
    }),
  }),
});
