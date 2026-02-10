// All are api functions

// Get all products Done
export const getProduct = async () => {
  try {
    const response = await fetch("http://localhost:8000/products", {
      method: "GET",
    });
    const data = await response.json();
    // console.log("data ", data);

    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

// Get product by id Done
export const ProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/product/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    // console.log("data", data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

// POST product by ID Done
export const addProduct = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/product/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const result = await response.json();
    // console.log("response", result);
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
};

// DELETE product by id
export const deleteProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/product/delete/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log("Failed to delete product");
    }
    const data = await response.json();
    console.log("Deleted", data);
    return data;
  } catch (err) {
    console.log("Error", err.message);
  }
};

// DELETE all
export const removeProduct = async () => {
  try {
    const response = await fetch("http://localhost:8000/product/delete", {
      method: "DELETE",
    });

    return await response.json();
  } catch (error) {
    console.error("Delete error", error);
  }
};

// PUT product by id
export const putProductById = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:8000/product/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text(); // 👈 HTML bhi safe
      console.error("Backend error response:", errorText);
      // throw new Error("Failed to update product");
    }

    return await response.json();
  } catch (error) {
    console.log("Put product by id error", error);
    throw error;
  }
};

//     return await response.json();
//   } catch (error) {
//     console.log("Put product by id error", error);
//   }
// };
