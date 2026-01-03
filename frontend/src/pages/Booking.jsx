import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';
import { getRooms } from '../services/roomService';
import { createBooking } from '../services/bookingService';

const Booking = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    roomId: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
        if (data.length > 0) {
          setFormData(prev => ({ ...prev, roomId: data[0]._id }));
        }
      } catch (err) {
        console.error('Failed to fetch rooms:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createBooking(formData);
      alert('Booking successful!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Booking failed:', err);
      alert(err.response?.data?.message || 'Failed to create booking. Please check if you are logged in.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="pt-40 text-center text-white/60">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-rose-500 mx-auto mb-4" />
      Preparing booking system...
    </div>
  );

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl font-black mb-4 tracking-tight uppercase">Reserve Your Stay</h1>
        <p className="text-white/60 text-lg">Secure your dates at Morya Farmhouse.</p>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 glass-card shadow-2xl shadow-rose-500/5 p-10 rounded-[40px] border border-white/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            label="Check-in Date" 
            type="date" 
            required
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
          />
          <Input 
            label="Check-out Date" 
            type="date" 
            required
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-white/40 uppercase tracking-widest ml-1">Select Your Plan</label>
          <select 
            value={formData.roomId}
            onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-rose-500 outline-none transition-colors appearance-none cursor-pointer text-white"
          >
            {rooms.map(room => (
              <option key={room._id} value={room._id} className="bg-[#0a0a0a]">
                {room.name} (Max {room.maxGuests})
              </option>
            ))}
          </select>
        </div>

        <Input 
          label="Total Guests" 
          type="number" 
          min="1" 
          required
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
        />

        <Button type="submit" disabled={submitting} className="w-full py-5 mt-4 text-lg font-black uppercase tracking-widest">
          {submitting ? 'Processing...' : 'Confirm Reservation'}
        </Button>
      </motion.form>
    </div>
  );
};

export default Booking;
