const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }, // Base price for a single person/default
  couplePrice: { type: Number, default: 2500 },
  perHeadPrice: { type: Number, default: 1500 },
  groupPrice: { type: Number, default: 1200 },
  minGroupSize: { type: Number, default: 5 },
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
