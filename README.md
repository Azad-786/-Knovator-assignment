# 🛒 Full-Stack E-Commerce Assignment (MERN)

This is a **full-stack e-commerce web application** built as part of a practical interview assignment.  
It includes a **React (Vite) frontend** and a **Node.js + Express backend**.  

---

## ✨ Features

### 🔹 Frontend (React + Tailwind + Zustand)
- **Product Listing Page**
  - Responsive grid layout for products  
  - Shows image, title, description, and price  
  - Add to Cart functionality  
- **Cart Page**
  - View selected items with image, title, price, and description  
  - Increase/decrease quantity with `+` / `–` buttons  
  - Remove items from cart  
  - Shows total price dynamically  
- **Checkout (Address Page)**
  - Collects First Name, Last Name, and Address  
  - Validation for required fields  
  - Sends order + cart details to backend  
  - On success → clears cart, shows success toast, redirects to Home  
- **Other Highlights**
  - Global state management with **Zustand**  
  - Styling with **Tailwind CSS**  
  - Notifications with **React Hot Toast**  
  - Responsive and clean UI  

---

### 🔹 Backend (Node.js + Express)
- `GET /products` → Returns a list of 10 sample products (static JSON).  
- `POST /orders` → Accepts order details (name, address, cart).  
  - Validates required fields.  
  - Logs order details to the console.  
  - Returns `{ message: "Order placed successfully!" }`.  
- Organized with MVC pattern:

## ⚙️ Tech Stack
- **Frontend:** React (Vite), React Router, Zustand, Tailwind CSS, React Hot Toast  
- **Backend:** Node.js, Express, CORS, Nodemon  
- **Database:** Not required (products are static, orders logged in console)  

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-link>
cd project-folder


Setup Backend
cd backend
npm install
npm run dev   # starts with nodemon (auto restart on save)
# or
npm start     # starts with node


**Backend runs on: http://localhost:5050
APIs available:
GET /products → Fetch all products
POST /orders → Place an order

** Setup Frontend
cd frontend
npm install
npm run dev
Frontend runs on: http://localhost:5173
 (default Vite port).
The frontend fetches products from: http://localhost:5050/products
Orders are submitted to: http://localhost:5050/orders


⚡ Challenges Faced

Making UI fully responsive with Tailwind CSS.
Managing cart state globally → solved with Zustand.
Handling smooth integration between frontend and backend.
Showing proper error/success messages with toast notifications.


✅ Final Notes

Products are static (served from backend products.js).
Orders are not saved to DB (only logged in backend console).
This setup fulfills all assignment requirements (frontend + backend + integration).
