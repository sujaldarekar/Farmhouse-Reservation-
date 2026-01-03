const mongoose = require('mongoose');
const Room = require('./models/Room');
require('dotenv').config();

const rooms = [
  {
    name: "Luxury Garden Suite",
    type: "Luxury",
    price: 1500,
    couplePrice: 2500,
    perHeadPrice: 1500,
    groupPrice: 1200,
    minGroupSize: 5,
    description: "Spacious suite with a private garden view and premium amenities. Perfect for couples or small families.",
    amenities: ["King Bed", "Garden View", "Air Conditioning", "Mini Bar"],
    images: ["/images/room.png", "/images/garden.png"],
    maxGuests: 4,
    available: true
  },
  {
    name: "Private Pool Villa",
    type: "Villa",
    price: 1500,
    couplePrice: 2500,
    perHeadPrice: 1500,
    groupPrice: 1200,
    minGroupSize: 5,
    description: "Exclusive villa featuring a private crystal clear pool and modern decor. Ideal for groups and private events.",
    amenities: ["Private Pool", "Kitchenette", "Modern Decor", "24/7 Room Service"],
    images: ["/images/pool.png", "/images/exterior.png"],
    maxGuests: 8,
    available: true
  },
  {
    name: "Rustic Cottage",
    type: "Deluxe",
    price: 1500,
    couplePrice: 2500,
    perHeadPrice: 1500,
    groupPrice: 1200,
    minGroupSize: 5,
    description: "Cozy cottage nestled in the woods, perfect for a peaceful retreat and nature lovers.",
    amenities: ["Woods View", "Cozy Vibe", "Breakfast Included", "WiFi"],
    images: ["/images/exterior.png", "/images/dining.png"],
    maxGuests: 2,
    available: true
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Room.deleteMany({});
    console.log('Cleared existing rooms.');
    
    await Room.insertMany(rooms);
    console.log('Successfully seeded rooms!');
    
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
