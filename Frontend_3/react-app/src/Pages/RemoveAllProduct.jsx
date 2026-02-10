import { removeProduct } from "../api/index.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

function RemoveAllProduct() {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (!isDeleted) {
      removeProduct().then(() => {
        setIsDeleted(true);
      });
    }
  };

  return (
    <div>
      <Link to="/products">
        <button>Show product list</button>
      </Link>
      <br />
      <br />
      <button onClick={handleDelete}>Deleted</button>
      {isDeleted && <p>All Productes Are Deleted Successfully </p>}
    </div>
  );
}

export default RemoveAllProduct;
