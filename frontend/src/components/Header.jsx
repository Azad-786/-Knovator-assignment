import React from 'react'
import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'

const Header = () => {
  const { cart } = useCartStore()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-900 text-white px-8 py-4 shadow-md z-50">
      <Link to="/" className="text-2xl font-bold">MyShop</Link>
      <Link to="/cart" className="relative bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
        🛒 Cart
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  )
}

export default Header
