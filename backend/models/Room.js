const mongoose = require("mongoose");

/**
 * Room Model
 * Defines the schema for farmhouse units and their person-based pricing plans.
 */
const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  // Base price for a single person or default display
  price: { type: Number, required: true }, 
  
  // Custom Pricing Plans as per requirement
  couplePrice: { type: Number, default: 2500 }, // Flat rate for 2 guests
  perHeadPrice: { type: Number, default: 1500 }, // Standard rate per person
  groupPrice: { type: Number, default: 1200 },   // Discounted rate for large groups
  minGroupSize: { type: Number, default: 5 },    // Threshold for group pricing
  
  maxGuests: { type: Number, required: true },
  amenities: [String],
  images: [String],
  type: {
    type: String,
    enum: ["Deluxe", "Luxury", "Villa"],
    default: "Deluxe",
  },
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Room", roomSchema);
