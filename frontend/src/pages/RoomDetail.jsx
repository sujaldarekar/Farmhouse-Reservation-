import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getRoomById } from '../services/roomService';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const data = await getRoomById(id);
        setRoom(data);
      } catch (err) {
        console.error('Failed to fetch room:', err);
        setError('Failed to load room details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const calculateTotal = () => {
    if (!room) return 0;
    if (guests === 2) return room.couplePrice;
    if (guests >= room.minGroupSize) return room.groupPrice * guests;
    return room.perHeadPrice * guests;
  };

  const getPriceLabel = () => {
    if (guests === 2) return "(Couples Plan)";
    if (guests >= room?.minGroupSize) return `(Group Rate: ₹${room.groupPrice} per head)`;
    return "(Per Head Plan)";
  };

  if (loading) return (
    <div className="pt-40 text-center text-white/60">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-rose-500 mx-auto mb-4" />
      Loading details...
    </div>
  );
  
  if (error || !room) return (
    <div className="pt-40 text-center">
      <p className="text-rose-500 mb-4">{error || "Room not found"}</p>
      <Link to="/rooms" className="text-white hover:underline">Back to Rooms</Link>
    </div>
  );

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <Link to="/rooms" className="text-rose-500 font-bold mb-8 inline-block hover:underline">← Back to Plans</Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 relative group"
        >
          <img src={room.images?.[0] || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070'} alt={room.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold uppercase tracking-widest">{room.type}</span>
              <span className="text-white/40 text-sm">Max {room.maxGuests} Guests</span>
            </div>
            <h1 className="text-6xl font-black mb-4 tracking-tighter">{room.name}</h1>
            <div className="flex flex-col gap-1">
              <div className="text-4xl font-black text-rose-500">₹{calculateTotal()}</div>
              <div className="text-white/40 text-sm font-medium uppercase tracking-wider">{getPriceLabel()}</div>
            </div>
          </motion.div>

          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-6">
            <div>
              <label className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3 block">Number of Guests</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-rose-500 transition-colors"
                >
                  -
                </button>
                <span className="text-3xl font-black w-12 text-center">{guests}</span>
                <button 
                  onClick={() => setGuests(Math.min(room.maxGuests, guests + 1))}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-rose-500 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Couples Special</span>
                <span className="font-bold">₹{room.couplePrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Standard Per Head</span>
                <span className="font-bold">₹{room.perHeadPrice}</span>
              </div>
              {room.groupPrice && (
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Group Rate ({room.minGroupSize}+ guests)</span>
                  <span className="font-bold">₹{room.groupPrice}/head</span>
                </div>
              )}
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg leading-relaxed italic"
          >
            {room.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-black mb-4 uppercase tracking-widest text-white/40">Included Amenities</h3>
            <div className="grid grid-cols-2 gap-y-3">
              {room.amenities.map(a => (
                <div key={a} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {a}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-8"
          >
            <Link to="/booking" className="inline-block w-full py-5 bg-white text-black hover:bg-rose-500 hover:text-white font-black text-lg uppercase tracking-widest rounded-2xl transition-all text-center">
              Confirm Reservation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
