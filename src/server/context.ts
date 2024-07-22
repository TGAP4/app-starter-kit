import { initContextCache } from "@pothos/core";
import { User } from "@prisma/client";
import { prisma } from "./schema/builder";

export type GraphQLContext = {
  currentUser: User | null;
};

export const createContext = async (): Promise<GraphQLContext> => {
  return {
    // Adding this will prevent any issues if your server implementation
    // copies or extends the context object before passing it to your resolvers
    ...initContextCache(),

    currentUser: await prisma.user.findFirst({}),
  };
};
