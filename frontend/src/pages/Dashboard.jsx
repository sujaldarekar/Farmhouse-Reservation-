import { motion } from 'framer-motion';
import Button from '../components/Button';

const bookings = [
  {
    id: "B-101",
    room: "Luxury Garden Suite",
    checkIn: "2026-02-14",
    checkOut: "2026-02-16",
    status: "Confirmed",
    total: "9,000"
  }
];

const Dashboard = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-black mb-2 tracking-tight">My Dashboard</h1>
        <p className="text-white/60">Manage your reservations and profile.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Upcoming Bookings</h2>
          {bookings.map((booking) => (
            <motion.div 
              key={booking.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div>
                <span className="text-xs font-bold text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-wider">
                  {booking.status}
                </span>
                <h3 className="text-2xl font-bold font-playfair">{booking.room}</h3>
                <p className="text-white/40 text-sm mt-1">ID: {booking.id} • {booking.checkIn} to {booking.checkOut}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-rose-500">₹{booking.total}</p>
                <button className="text-sm font-bold text-white/40 hover:text-white transition-colors mt-2">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-rose-700 p-10 rounded-3xl text-white flex flex-col justify-between aspect-square lg:aspect-auto shadow-2xl shadow-rose-500/20">
          <div>
            <h2 className="text-3xl font-black mb-4 tracking-tight">Morya Loyalty</h2>
            <p className="opacity-90">You're 2 stays away from becoming a Gold Member!</p>
          </div>
          <Button variant="secondary" className="w-full bg-white text-rose-500 hover:bg-white/90">
            View Benefits
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
