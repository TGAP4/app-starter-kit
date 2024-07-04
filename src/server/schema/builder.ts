import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { PrismaClient } from '../../../node_modules/.prisma/client';
import {GraphQLContext} from '../context';

export const prisma = new PrismaClient({});

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