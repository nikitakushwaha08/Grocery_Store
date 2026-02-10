import { deleteProductById } from "../api/index.jsx";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function RemoveProductById() {
  const { id } = useParams();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (!isDeleted) {
      deleteProductById(id).then(() => {
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

      <button onClick={handleDelete}>Delete</button>

      {isDeleted && <p> Product Deleted successfully With ID : {id}</p>}
    </div>
  );
}

export default RemoveProductById;
