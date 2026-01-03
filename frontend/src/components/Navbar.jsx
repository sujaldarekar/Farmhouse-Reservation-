import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-rose-500">
          MORYA<span className="text-white">FARMHOUSE</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-rose-500 transition-colors">Home</Link>
          <Link to="/rooms" className="text-sm font-medium hover:text-rose-500 transition-colors">Rooms</Link>
          <Link to="/booking" className="text-sm font-medium hover:text-rose-500 transition-colors">Booking</Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-rose-500 transition-colors">Dashboard</Link>
          <Link to="/login" className="px-5 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-rose-500 hover:text-white transition-all duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
