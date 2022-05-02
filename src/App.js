import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { ProductList } from "./Components/ProductList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ProductDetail } from "./Components/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
