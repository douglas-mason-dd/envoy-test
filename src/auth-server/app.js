const express = require("express");
const app = express();
const port = 3001;

app.post("/", (req, res) => {
  console.log("checking auth");
  const isAllowed = req.headers["x-envoy-internal"] === "true";
  console.log("isAllowed", isAllowed);
  if (isAllowed) {
    res.sendStatus(200);
    return;
  }
  res.sendStatus(401);
});

app.listen(port, () => {
  console.log(`Auth Server listening at http://localhost:${port}`);
});
