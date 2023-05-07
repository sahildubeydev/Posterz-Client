import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
