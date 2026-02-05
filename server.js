const express = require("express");
const app = express();
const PORT = 3000;

/* Serve static files from public */
app.use(express.static("public"));

// dynamic route
app.get("/welcome", (req, res) => {
  res.send("Hello world ");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
