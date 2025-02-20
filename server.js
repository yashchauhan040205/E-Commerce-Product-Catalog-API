const express = require("express");
const app = express();
const PORT = 5000;
const productRoutes = require("./routes/products");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
