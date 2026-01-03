/**
 * Room Service
 * Methods for interacting with the /api/rooms backend endpoints.
 */
import api from './api';

// Fetch all available rooms from the database
export const getRooms = async () => {
  const res = await api.get('/rooms');
  return res.data;
};

// Fetch a single room's details by its MongoDB ID
export const getRoomById = async (id) => {
  const res = await api.get(`/rooms/${id}`);
  return res.data;
};
