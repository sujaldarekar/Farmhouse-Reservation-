# Morya Farmhouse - Premium Nature Resort

A full-stack farmhouse management and booking application built with the MERN stack.

## ✨ Features

- **Premium UI/UX**: Modern dark-themed design with Framer Motion and GSAP animations.
- **Dynamic Pricing**: Custom pricing plans for Couples (₹2,500), Per-Head (₹1,500), and Groups (₹1,200).
- **Live Booking**: Integrated reservation system with date and guest count selectors.
- **Accommodation Management**: Dynamic room listing with premium visual assets.
- **Dashboard**: Track reservations and upcoming stays.

## 🚀 Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Framer Motion, GSAP.
- **Backend**: Node.js, Express, MongoDB, Mongoose.
- **Authentication**: JWT (JSON Web Tokens).

## 🛠️ Setup & Installation

### Prerequisites

- Node.js installed
- MongoDB running locally or on Atlas

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd farmhouse
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   # Create a .env file based on .env.example
   npm run dev
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Seed Database (Optional)**
   ```bash
   cd ../backend
   node seed.js
   ```

## 📸 Visuals

Premium images are located in `frontend/public/images/`.

## 📄 License

MIT
