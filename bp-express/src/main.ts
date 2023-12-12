import express from "express";
const app = express();
const port = 3000;

var req: express.Request;
var res: express.Response;

app.get("/", (req, res) => {
  res.send("Express Server!");
});

app.get("/hello", (req, res) => {
  res.send("Hello Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
