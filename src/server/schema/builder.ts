import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
// import { PrismaClient } from '@prisma/client';
import {GraphQLContext} from '../context';
import {PrismaClient} from '@prisma/client/extension';

export let prismaa: PrismaClient;

async function initPrisma() {
  const { PrismaClient } = await import('@prisma/client');
  prismaa = new PrismaClient();
}

initPrisma().catch((e) => {
  console.error('Failed to initialize Prisma Client', e);
});

async function prisma() {
  await initPrisma();
  console.log(prismaa)
  return prismaa;
}

export { prisma };

// export const prisma = new PrismaClient({});

const builder = new SchemaBuilder<{
  Context: GraphQLContext
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prismaa,
    // Use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
    // Warn when not using a query parameter correctly
    onUnusedQuery: process.env.NODE_ENV === 'production' ? null : 'warn',
  },
});

export default builder