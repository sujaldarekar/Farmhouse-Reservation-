import api from './api';

export const getRooms = async () => {
  const res = await api.get('/rooms');
  return res.data;
};

export const getRoomById = async (id) => {
  const res = await api.get(`/rooms/${id}`);
  return res.data;
};
