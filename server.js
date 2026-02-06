//assignment 3 & 4
const express = require("express");
const app = express();
const PORT = 3000;

/* Serve static files from public */
app.use(express.static("public"));

const products = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Phone", price: 600, stock: 10 },
];

// dynamic route
app.get("/welcome", (req, res) => {
  res.send("Hello world ");
});

app.get("/api/products", (req, res) => {
  const names = products.map((p) => p.name);
  res.json(names);
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
