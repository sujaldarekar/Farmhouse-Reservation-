/**
 * Room Controller
 * Handles all business logic for managing farmhouse rooms.
 */
const Room = require('../models/Room');

/**
 * Get all rooms from the database
 * Returns an array of room objects.
 */
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rooms: ' + error.message });
  }
};

/**
 * Get a single room by ID
 * Returns the room object or 404 if not found.
 */
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching room: ' + error.message });
  }
};

/**
 * Create a new room
 * Accepts room details in the request body.
 */
exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(400).json({ message: 'Error creating room: ' + error.message });
  }
};

/**
 * Update room details
 * Finds a room by ID and updates with body contents.
 */
exports.updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRoom);
  } catch (error) {
    res.status(400).json({ message: 'Error updating room: ' + error.message });
  }
};

/**
 * Remove a room from the system
 */
exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Room successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting room: ' + error.message });
  }
};
