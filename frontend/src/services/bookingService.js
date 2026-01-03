import api from './api';

export const createBooking = async (bookingData) => {
  const res = await api.post('/bookings', bookingData);
  return res.data;
};

export const getMyBookings = async () => {
  const res = await api.get('/bookings/my-bookings');
  return res.data;
};
