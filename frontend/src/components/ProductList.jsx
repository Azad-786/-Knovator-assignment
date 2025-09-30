import React, { useEffect, useState } from 'react'
import Product from './Product'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5050/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
