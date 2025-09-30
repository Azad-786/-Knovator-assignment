const express = require('express')
const cors = require('cors')

const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')

const app = express()
const PORT = 5050

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})
