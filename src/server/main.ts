import express from "express";
import { createYoga } from 'graphql-yoga'
import {schema} from './schema';
import ViteExpress from "vite-express";

const app = express();

const yoga = createYoga({schema})

app.use(yoga.graphqlEndpoint, yoga)

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!asdf");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
