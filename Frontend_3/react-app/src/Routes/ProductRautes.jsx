import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAllProducts from "../App";
import { GetProductById } from "../App";
import { PostProduct } from "../App";
import { RemoveProductById } from "../App";
import { RemoveAllProduct } from "../App";
import { UpdateProduct } from "../App";

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
        <Route path="/product/put/:id" element={<UpdateProduct />}></Route>
        {/* done */}
      </Routes>
    </BrowserRouter>
  );
}

export default ProductRoutes;
