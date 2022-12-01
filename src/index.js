const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productsRotuer = require("./routes/products");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello Bootcamp!" });
});

app.use("/products", productsRotuer);

const connectDb = () => {
  mongoose.connect(process.env.DB_URI);
  console.log("Database connected");
};

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectDb();
});
