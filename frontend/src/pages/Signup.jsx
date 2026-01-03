import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Signup = () => {
  return (
    <div className="pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card backdrop-blur-xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black mb-2 tracking-tight">Create Account</h1>
          <p className="text-white/60">Join Morya Farmhouse and start your journey.</p>
        </div>

        <form className="space-y-6">
          <Input 
            label="Full Name"
            placeholder="John Doe"
          />
          <Input 
            label="Username"
            placeholder="username"
          />
          <Input 
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <Button className="w-full py-5">
            Sign Up
          </Button>
        </form>

        <p className="text-center mt-8 text-white/40 text-sm">
          Already have an account? <Link to="/login" className="text-rose-500 font-bold hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
