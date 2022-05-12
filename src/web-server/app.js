const express = require("express");
const app = express();
const port = 3000;

app.post("/", (req, res) => {
  console.log("app request received");
  const isAllowed = req.headers["x-has-permission"] === "true";
  console.log("has permission");
  if (isAllowed) {
    res.send("Hello World!");
    return;
  }
  res.sendStatus(401);
});

app.listen(port, () => {
  console.log(`Web Server listening at http://localhost:${port}`);
});
