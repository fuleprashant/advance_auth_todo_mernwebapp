import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

db();

app.get("/", (req, res) => {
  res.send("the server has been start on the browser");
});

app.listen(port, () => {
  console.log(`the server has been start on port http://localhost:${port}`);
});
