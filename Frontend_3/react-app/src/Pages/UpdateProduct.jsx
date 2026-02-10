import { putProductById } from "../api/index.jsx";
import { ProductById } from "../api/index.jsx";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateProduct() {
  const { id } = useParams();

  const [data, setData] = useState({
    product_id: "",
    product_name: "",
    price: "",
    quantity: "",
  });

  const [updateInfo, setUpdateInfo] = useState(null);

  useEffect(() => {
    if (id) {
      ProductById(id).then((res) => {
        setData({
          product_id: res.product_id,
          product_name: res.product_name,
          price: res.price,
          quantity: res.quantity,
        });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    putProductById(id, data).then((res) => {
      if (res) {
        setUpdateInfo(res);
      }
    });
  };

  return (
    <>
      <Link to="/products">
        <button>Show product list</button>
      </Link>

      <form onSubmit={handleUpdate}>
        <input name="product_id" value={data.product_id} readOnly />

        <input
          name="product_name"
          value={data.product_name}
          onChange={handleChange}
          placeholder="Product Name"
        />

        <input
          name="price"
          value={data.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          name="quantity"
          value={data.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />

        <button type="submit">Update Product</button>
      </form>

      {updateInfo && <p>Product updated successfully with id: {id}</p>}
    </>
  );
}

export default UpdateProduct;
