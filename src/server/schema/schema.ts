import builder from "./builder";
import "./user";

builder.queryType({});
builder.mutationType({});

const schema = builder.toSchema();

export default schema;
