import express from "express";
import ViteExpress from "vite-express";
console.log(111111111)
const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!asdf");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
