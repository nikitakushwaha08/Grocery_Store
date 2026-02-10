import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllProducts from "../Pages/GetAllProducts";
import GetProductById from "../Pages/GetProductById";
import PostProduct from "../Pages/PostProduct";
import RemoveProductById from "../Pages/RemoveProductById";
import RemoveAllProduct from "../Pages/RemoveAllProduct";
import UpdateProduct from "../Pages/UpdateProduct";

function ProductRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<GetAllProducts />} /> {/* done */}
        <Route path="/product/:id" element={<GetProductById />} />
        <Route path="/product/new" element={<PostProduct />} /> {/* done */}
        <Route path="/product/delete/:id" element={<RemoveProductById />} />
        {/* done */}
        <Route path="/product/delete" element={<RemoveAllProduct />}></Route>
        {/* done */}
        <Route path="/product/update/:id" element={<UpdateProduct />}></Route>
        {/* done */}
      </Routes>
    </BrowserRouter>
  );
}

export default ProductRoutes;
