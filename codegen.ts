import type { CodegenConfig } from "@graphql-codegen/cli";
import { writeFileSync } from "fs";
import { lexicographicSortSchema, printSchema } from "graphql";
import schema from "./src/server/schema";

const schemaAsString = printSchema(lexicographicSortSchema(schema));
writeFileSync("./schema.graphql", schemaAsString);

const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ["src/client/**/*.tsx", "src/client/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/client/gql/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: {
          ID: {
            input: "number",
            output: "number",
          },
        },
      },
    },
  },
  overwrite: true,
  watch: true,
  silent: true,
};

export default config;
