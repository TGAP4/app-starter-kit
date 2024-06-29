
import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';
import schema from './src/server/schema/schema';

const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
  overwrite: true,
  watch: true,
  silent: true,
};

export default config;

