import { addProduct } from "../api/index.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function PostProduct() {
  const [data, setData] = useState({
    product_name: "",
    price: "",
    quantity: "",
  });
  const [responseMessage, setResponse] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop reload

    addProduct(data).then((res) => {
      // console.log(res);
      setResponse(res);
      setData({
        product_name: "",
        price: "",
        quantity: "",
      });
    });
  };

  return (
    <div className="App">
      <Link to="/products">
        <button>Show product list</button>
      </Link>
      <br />
      <br />
      <br />
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="product_name"
          placeholder="Product Name"
          value={data.product_name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={data.price}
          onChange={handleChange}
        />

        <input
          name="quantity"
          placeholder="Quantity"
          value={data.quantity}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
      {responseMessage && (
        <p>
          {responseMessage.message} with Id {responseMessage.product_id}
        </p>
      )}
    </div>
  );
}

export default PostProduct;
