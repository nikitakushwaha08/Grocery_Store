import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  getProduct,
  getById,
  addProduct,
  deleteById,
  deleteAll,
  updateById,
} from "./routes/Product.js";

import { allUsers, userById, newUser, userDeleteById } from "./routes/User.js";

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

// Update product by id
app.put("/product/update/:id", updateById);

// **********************************************
// Get all Users
app.get("/users", allUsers);

// Get user by id
app.get("/user/:id", userById);

// Add new user
app.post("/user/new", newUser);

// Delete user by id
app.delete("/user/delete/:id", userDeleteById);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
