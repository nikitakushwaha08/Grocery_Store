import { ProductById } from "../api/index.jsx";

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

export default GetProductById;
