import Products from "./products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./productDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
