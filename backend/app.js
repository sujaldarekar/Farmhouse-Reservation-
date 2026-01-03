/**
 * Express Application Setup
 * Configures middleware, routes, and database connectivity.
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Route Imports
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Global Middleware
app.use(cors());     // Enable Cross-Origin Resource Sharing
app.use(helmet());   // Security headers
app.use(express.json()); // Parse JSON request bodies

// API Route Definitions
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

// Server Health Check
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

/**
 * Database Connection Function
 * Uses environment variable MONGODB_URI for connection string.
 */
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB Connected successfully');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = { app, connectDB };
