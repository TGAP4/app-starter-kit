import express from "express";
import { createYoga } from "graphql-yoga";
import { useDisableIntrospection } from "@graphql-yoga/plugin-disable-introspection";
import schema from "./schema";
import ViteExpress from "vite-express";
import { createContext } from "./context";
import router from "./router";

const app = express();

const yoga = createYoga({
  schema,
  context: createContext,
  plugins: [process.env.NODE_ENV === "production" && useDisableIntrospection()],
  graphiql: process.env.NODE_ENV === "development",
});

app.use(yoga.graphqlEndpoint, yoga);

app.use(router);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!asdf");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
