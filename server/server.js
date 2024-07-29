const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
app.use(cors());
app.get("/api/products", async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  res.json(response.data);
});

app.get("/api/products/:id", async (req, res) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${req.params.id}`
  );
  res.json(response.data);
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
