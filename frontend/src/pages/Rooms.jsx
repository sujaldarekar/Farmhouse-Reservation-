/**
 * Rooms Page
 * Fetches and displays a list of all farmhouse rooms/plans.
 * Shows a summary of the pricing plans (Couple/Per-Head).
 */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getRooms } from '../services/roomService';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all rooms from the backend API
    const fetchRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (err) {
        console.error('Failed to fetch rooms:', err);
        setError('Failed to load rooms. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Loading indicator for better UX
  if (loading) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-rose-500 mx-auto mb-4" />
        <p className="text-white/60">Loading rooms...</p>
      </div>
    );
  }

  // Error state display
  if (error) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <p className="text-rose-500 font-bold mb-4">{error}</p>
        <button onClick={() => window.location.reload()} className="px-6 py-2 bg-white text-black rounded-lg font-bold">Retry</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 tracking-tight uppercase">Our Farmhouse Plans</h1>
        <p className="text-white/60 text-lg">Choose the perfect plan for your nature retreat.</p>
      </motion.div>

      {/* Responsive Grid for Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room, i) => (
          <motion.div 
            key={room._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-rose-500/50 transition-all duration-500"
          >
            {/* Room Image with Hover Zoom Effect */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={room.images?.[0] || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070'} 
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Room Details Overlay */}
            <div className="p-8">
              <div className="mb-6">
                <Link to={`/room/${room._id}`} className="hover:text-rose-500 transition-colors">
                  <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                </Link>
                {/* Summary of Pricing Structure */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Couples Plan:</span>
                    <span className="text-rose-500 font-bold">₹{room.couplePrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/60">Per Head Plan:</span>
                    <span className="text-rose-500 font-bold">₹{room.perHeadPrice}</span>
                  </div>
                </div>
              </div>

              {/* Top 3 Amenities Icons/Labels */}
              <div className="flex flex-wrap gap-2 mb-8">
                {room.amenities.slice(0, 3).map(a => (
                  <span key={a} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 uppercase tracking-wider">{a}</span>
                ))}
              </div>

              {/* Primary Call to Action */}
              <Link to={`/room/${room._id}`} className="block w-full text-center py-4 bg-white text-black font-bold rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all">
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
