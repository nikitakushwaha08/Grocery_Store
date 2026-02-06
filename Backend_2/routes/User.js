import connection from "../CreateConnection.js";

// Get all users
export const allUsers = (req, res) => {
  const sql = "select * from user";

  connection.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err.message,
      });
    } else {
      if (result.length === 0) {
        console.log("Data not added", result);
      } else result.length > 0;
      {
        res.status(200).json({
          message: "get user successfully",
          count: result.length,
          data: result,
        });
      }
    }
  });
};

// Get user by id
export const userById = (req, res) => {
  const user_id = req.params.id;
  const sql = "select * from user where user_id = ?";

  connection.query(sql, [user_id], (err, result) => {
    if (err) {
      // console.error( err);
      return res
        .status(500)
        .json({ message: "Internal server error", error: err });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: "User not exist" });
      } else {
        res.status(200).json({ message: "User existed", id: result[0] });
      }
    }
  });
};

// Add new user
export const newUser = (req, res) => {
  const { user_name, phone } = req.body;

  const sql = "insert into user (user_name, phone) values (?, ?)";

  connection.query(sql, [user_name, phone], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err.message,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "New user added successfully",
        user_id: result.insertId,
      });
    }
  });
};

// Delete user  by id

export const userDeleteById = (req, res) => {
  const { user_id } = req.params;

  const sql = "delete from user where user_id = ? ";

  connection.query(sql, [user_id], (err, result) => {
    if (err) {
      // console.err("Deletion failed", err);
      res
        .status(500)
        .json({ message: "Internal server error", err: err.message });
    } else {
      if (!user_id) {
        return res.status(400).json({
          message: "User id is required",
          err: err,
        });
      } else {
        res.status(200).json({
          message: "User deleted successfully",
          deleteId: result.insertId,
        });
      }
    }
  });
};
// Delete all users

// Put product by id $
