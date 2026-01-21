import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  getProduct,
  getById,
  addProduct,
  deleteById,
  deleteAll,
} from "/routes/Product.js";

import { allUsers, newUser } from "./routes/User.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get all products
app.get("/product", getProduct);

// Get product by id
app.get("/product/:id", getById);

// Add new product
app.post("/product/new", addProduct);

// Delete product by id
app.delete("/product/delete/:id", deleteById);

// Delete all product
app.delete("/product/delete", deleteAll);

// Get all Users
app.get("/users", allUsers);

// Add new user
app.post("/user/new", newUser);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
