import { useDisableIntrospection } from "@graphql-yoga/plugin-disable-introspection";
import express from "express";
import { createYoga } from "graphql-yoga";
import ViteExpress from "vite-express";
import apiRouter from "./apiRouter";
import { createContext } from "./context";
import schema from "./schema";

const app = express();

const yoga = createYoga({
  schema,
  context: createContext,
  plugins: [process.env.NODE_ENV === "production" && useDisableIntrospection()],
  graphiql: process.env.NODE_ENV === "development",
});

app.use(yoga.graphqlEndpoint, yoga);

app.use("/api", apiRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
