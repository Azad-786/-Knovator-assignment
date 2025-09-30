import React from 'react'
import useCartStore from '../store/cartStore'

const Product = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">
        {product.title.length > 30
          ? product.title.substring(0, 30) + '...'
          : product.title}
      </h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <p className="text-gray-600 text-sm mb-4">
        {product.description.length > 100
          ? product.description.substring(0, 100) + '...'
          : product.description}
      </p>
      <div className="flex justify-center mt-auto">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
