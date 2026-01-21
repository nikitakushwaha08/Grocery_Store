import connection from "./CreateConnection.js";

// Get all users
export const allUsers = (req, res) => {
  const sql = "select * from user";

  connection.query(sql, (err, result) => {
    if (err) {
      console.error("User error", err);
      res.status(500).json({ error: "Database error" });
    } else {
      console.log("User result:", result);
      res
        .status(200)
        .json({ message: "Users get successfully", users: result });
    }
  });
};
// Get user by id
// Add new user

export const newUser = (req, res) => {
  const { user_name, phone } = req.body;

  const sql = "inser into user (user_name, phone) values (?, ?)";

  connection.query(sql, [user_name, phone], (err, result) => {
    if (err) {
      // console.error("User not added", err)
      res.status(500).json({ error: "User insertion failed" });
    } else {
      res.status(201).json({
        message: "New user added",
        user_id: result.insertId,
      });
    }
  });
};

// Delete user  by id
// Delete all users
