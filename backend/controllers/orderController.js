const placeOrder = (req, res) => {
  const { firstName, lastName, address, cart } = req.body

  if (!firstName || !lastName || !address) {
    return res.status(400).json({ message: "First name, last name, and address are required" })
  }

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart cannot be empty" })
  }

 
  console.log("📦 New Order Received:", {
    customer: { firstName, lastName, address },
    cart,
  })

  res.status(201).json({ message: "Order placed successfully!" })
}

module.exports = { placeOrder }
