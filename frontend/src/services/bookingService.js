/**
 * Booking Service
 * Methods for creating and retrieving reservations.
 */
import api from './api';

// Submit a new booking request to the backend
export const createBooking = async (bookingData) => {
  const res = await api.post('/bookings', bookingData);
  return res.data;
};

// Retrieve bookings for the currently authenticated user
export const getMyBookings = async () => {
  const res = await api.get('/bookings/my-bookings');
  return res.data;
};
