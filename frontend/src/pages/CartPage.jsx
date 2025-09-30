import React from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import useCartStore from '../store/cartStore'

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCartStore()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const increment = (id, currentQty) => {
    updateQuantity(id, currentQty + 1)
  }

  const decrement = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1)
    }
  }

  return (
<div className="flex justify-center bg-gray-100 min-h-screen p-6">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
    <h1 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h1>
    {cart.length === 0 ? (
      <p className="text-center text-gray-600">Your cart is empty.</p>
    ) : (
      <>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 shadow-sm rounded-lg p-4"
            >
                
              <div className="flex items-center space-x-4 w-full sm:w-2/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {item.description.length > 60
                      ? item.description.substring(0, 60) + '...'
                      : item.description}
                  </p>
                  <p className="text-gray-800 font-bold mt-1">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <button
                  onClick={() => decrement(item.id, item.quantity)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  –
                </button>
                <span className="px-3 py-1 border rounded">{item.quantity}</span>
                <button
                  onClick={() => increment(item.id, item.quantity)}
                  className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    removeFromCart(item.id)
                    toast.success('Item removed from cart')
                  }}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right font-bold text-xl">
          Total: ${total.toFixed(2)}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/address">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Proceed to Address
            </button>
          </Link>
        </div>
      </>
    )}
  </div>
</div>

  )
}

export default CartPage
