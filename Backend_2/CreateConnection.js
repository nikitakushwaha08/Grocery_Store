import mysql from "mysql2";

// 1: to connect to mysql server
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "grocerystore",
});
console.log("MySQL connection created Successfully ");

// we need to create a db
// const createdDB = "CREATE DATABASE IF NOT EXISTS New";
// connection.query(createdDB, (err, result) => {
//   if (err) {
//     console.log("Database not created", err);
//   } else {
//     console.log("Database created successfully", result);
//   }
// });

// or
// await connection.execute("CREATE DATABASE IF NOT EXISTS mysql_db");
// console.log(await connection.execute("SHOW DATABASES"));

// then create a table

export default connection;
