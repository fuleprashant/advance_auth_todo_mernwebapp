import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("the server has been start on the browser");
});

app.listen(port, () => {
  console.log(`the server has been start on port http://localhost:${port}`);
});
