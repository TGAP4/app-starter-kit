import builder from "./builder";
import "./user";
import "./post";

builder.queryType({});
builder.mutationType({});

const schema = builder.toSchema();

export default schema;
