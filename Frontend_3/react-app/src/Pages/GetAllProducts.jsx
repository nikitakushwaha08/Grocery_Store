import { getProduct } from "../api/index.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function GetAllProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProduct().then((res) => {
      setData(res.data);
      // console.log("data", res.data);
    });
  }, []);

  return (
    <div className="App">
      <h2>Home Page</h2>

      <br />
      <br />
      <Link to="/product/new">
        <button>Add New Product</button>
      </Link>

      <Link to="/product/delete">
        <button style={{ marginLeft: "20px" }}>Delete All Products</button>
      </Link>
      <br />
      <br />
      <br />

      {data && data.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Se. No.</th>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions </th>
            </tr>
          </thead>

          <tbody>
            {data.map((e, index) => (
              <tr key={e.product_id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/product/${e.product_id}`}>{e.product_id}</Link>
                </td>
                <td>{e.product_name}</td>
                <td>{e.price}</td>
                <td>{e.quantity}</td>
                <td>
                  <Link to={`/product/delete/${e.product_id}`}>
                    <button>Delete</button>
                  </Link>
                  <Link to={`/product/update/${e.product_id}`}>
                    <button style={{ marginLeft: "10px" }}>Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default GetAllProducts;
