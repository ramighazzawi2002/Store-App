import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      setProduct(response.data);
    })();
  }, [id]);
  console.log(product);
  return (
    <>
      {product && (
        <div className="bg-gray-100 min-h-screen py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
              <Link to="/" className="hover:underline hover:text-gray-600">
                Home
              </Link>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>{product.category}</span>
            </div>

            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <img
                    className="w-full h-full object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700">Price:</span>
                    <span className="text-gray-600 ml-2">${product.price}</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700">
                      Availability:
                    </span>
                    <span className="text-gray-600 ml-2">In Stock</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Select Color:</span>
                  <div className="flex items-center mt-2">
                    <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                    <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Select Size:</span>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      S
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      M
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      L
                    </button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                      XL
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">Description:</span>
                  <p className="text-gray-600 text-sm mt-2">
                    {product.description}
                  </p>
                </div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Customer Reviews
              </h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(product.rating?.rate)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 ml-2">
                  {product.rating?.rate} out of 5
                </span>
              </div>
              <p className="text-gray-600">
                {product.rating?.count} global ratings
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductDetail;
