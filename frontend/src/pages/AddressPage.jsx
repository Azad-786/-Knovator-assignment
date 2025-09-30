import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import useCartStore from '../store/cartStore'

const AddressPage = () => {
  const { cart, clearCart } = useCartStore()
  const [form, setForm] = useState({ firstName: '', lastName: '', address: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handlePlaceOrder = async () => {
  if (!form.firstName || !form.lastName || !form.address) {
    toast.error('Please fill in all fields')
    return
  }

  if (cart.length === 0) {
    toast.error('Your cart is empty!')
    return
  }

  try {
    const response = await fetch('http://localhost:5050/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, cart }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      toast.error(errorData.message || 'Failed to place order')
      return
    }

    const data = await response.json()
    console.log('✅ Order placed:', data)

    clearCart()
    toast.success('🎉 Order placed successfully! Redirecting...')

    setTimeout(() => navigate('/'), 2000)
  } catch (error) {
    console.error('Error placing order:', error)
    toast.error('Something went wrong. Please try again.')
  }
}


  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-xl bg-white shadow-xl rounded-lg p-8">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
      Shipping Address
    </h1>
    <div className="space-y-5">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        rows="4"
        className="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </div>
  </div>
</div>

  )
}

export default AddressPage;
