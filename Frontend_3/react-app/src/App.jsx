import "./App.css";

import { useEffect, useState } from "react";
import {
  getProduct,
  ProductById,
  addProduct,
  deleteProductById,
  removeProduct,
  putProductById,
} from "./api/index.jsx";
import { Link, useParams } from "react-router-dom";

// GET all product
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
                  <Link to={`/product/put/${e.product_id}`}>
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

// GET product by ID
function GetProductById() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      console.log("Product id is required");
    }

    ProductById(id)
      .then((res) => {
        setData([res]);
        setError("");
      })
      .catch(() => {
        setError("Product not found");
        setData([]);
      });
  }, [id]);

  return (
    <div className="App">
      <h3>Product ID: {id}</h3>

      {error && <p>{error}</p>}

      {data && data.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>S no.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {data.map((e) => (
              <tr key={e.product_id}>
                <td>{e.product_id}</td>
                <td>{e.product_name}</td>
                <td>{e.price}</td>
                <td>{e.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>No data</p>
      )}
    </div>
  );
}

// POST product

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
      console.log(res);
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

//  DELETE product by id
function RemoveProductById() {
  const { id } = useParams();

  const handleDelete = () => {
    deleteProductById(id);
  };

  return (
    <div>
      <Link to="/products">
        <button>Show product list</button>
      </Link>
      <br />
      <br />
      <br />
      <p>Product has beed deleted : {id}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

// DELETE all
function RemoveAllProduct() {
  const handleDelete = () => {
    removeProduct().then((res) => {
      console.log("All products deleted successfully", res);
    });
  };

  return (
    <div>
      <Link to="/products">
        <button>Show product list</button>
      </Link>
      <br />
      <br />
      <button onClick={handleDelete}>
        <p>All Productes Are Deleted Successfully </p>
      </button>
    </div>
  );
}

function UpdateProduct() {
  const [data, setData] = useState({
    product_id: "",
    product_name: "",
    price: "",
    quantity: "",
  });

  const [message, setMessage] = useState("");
  const [updateInfo, setUpdateInfo] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    putProductById(data).then((res) => {
      setMessage(res.message);
      setUpdateInfo(res);
    });
  };

  return (
    <>
      <Link to="/products">
        <button>Show product list</button>
      </Link>
      <form onSubmit={handleUpdate}>
        <input
          name="product_id"
          placeholder="Product ID"
          onChange={handleChange}
        />
        <input
          name="product_name"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="quantity" placeholder="Quantity" onChange={handleChange} />

        <button type="submit">Update Product</button>
      </form>

      {message && <h3> {message}</h3>}

      {updateInfo && (
        <div>
          <h4>Product ID: {updateInfo.product_id}</h4>

          <h5>Old Data</h5>
          <p>Name: {updateInfo.oldData.product_name}</p>
          <p>Price: {updateInfo.oldData.price}</p>
          <p>Quantity: {updateInfo.oldData.quantity}</p>

          <h5>Updated Data</h5>
          <p>Name: {updateInfo.newData.product_name}</p>
          <p>Price: {updateInfo.newData.price}</p>
          <p>Quantity: {updateInfo.newData.quantity}</p>
        </div>
      )}
    </>
  );
}

export default GetAllProducts;
export { GetProductById };
export { PostProduct };
export { RemoveProductById };
export { RemoveAllProduct };
export { UpdateProduct };
