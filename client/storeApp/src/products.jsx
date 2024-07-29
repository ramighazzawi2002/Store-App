import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
    })();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 truncate">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <Link
                to={`/product/${product.id}`}
                className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
