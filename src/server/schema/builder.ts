import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
// import { PrismaClient } from '@prisma/client';
import {GraphQLContext} from '../context';
import {PrismaClient} from '@prisma/client/extension';

export let prisma: PrismaClient;

async function initPrisma() {
  const { PrismaClient } = await import('@prisma/client');
  prisma = new PrismaClient();
}

initPrisma().catch((e) => {
  console.error('Failed to initialize Prisma Client', e);
});

async function getPrisma() {
  await initPrisma();
  return prisma;
}

export { getPrisma };

// export const prisma = new PrismaClient({});

const builder = new SchemaBuilder<{
  Context: GraphQLContext
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
    // Use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
    // Warn when not using a query parameter correctly
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
});

export default builder