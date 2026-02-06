import connection from "../CreateConnection.js";

// Get all products
export const getProduct = (req, res) => {
  const sql = "SELECT * FROM product";

  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Product Error", err);
      res.status(500).json({ error: "Database error" });
    } else {
      res.status(200).json({
        // message: "Get all product successfully",
        // count: result.length,
        data: result,
      });
    }
  });
};

// Get product by id
export const getById = (req, res) => {
  const product_id = req.params.id;

  const sql = "select * from product where product_id = ?";

  connection.query(sql, [product_id], (err, result) => {
    if (err) {
      // console.error("Product Error", err);
      res.status(500).json({ error: err.message });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json(result[0]);
      }
    }
  });
};

// Add new product
export const addProduct = (req, res) => {
  const { product_name, price, quantity } = req.body;
  // console.log(req.body);

  const sql =
    "insert into product (product_name, price, quantity)  values (?, ?, ?)";

  connection.query(sql, [product_name, price, quantity], (err, result) => {
    // console.log("result", result, " error", err);
    if (err) {
      console.log("Not add new product: ", err);
      return res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(201).json({
        message: "New product added successfuly",
        product_id: result.insertId,
      });
    }
  });
};

// Delete product by id
export const deleteById = (req, res) => {
  const productId = req.params.id;

  const sql = "delete from product where product_id = ?";

  connection.query(sql, [productId], (err, result) => {
    if (err) {
      console.error("Deletion failed", err);
      res.status(500).json({ error: "Product deletion failed" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json("Product not found");
      } else {
        res.status(200).json({
          message: "Product deleted successfully",
          deleteId: productId,
        });
      }
    }
  });
};

// Delete all product
export const deleteAll = (req, res) => {
  const sql = "truncate table product";

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Deletion failed" });
    } else {
      res.status(200).json({ message: "Deleted all products successfully" });
    }
  });
};

// Put Product by id
export const updateById = (req, res) => {
  const product_id = req.params.id;
  // console.log("product id", product_id);

  const data = req.body;
  // console.log("data", data);

  const sql = "update product set ? where product_id = ?";

  connection.query(sql, [data, product_id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Product updation failed" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json({ message: "Product updated successfully" });
      }
    }
  });
};
