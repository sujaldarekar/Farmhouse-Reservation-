import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Button from './Button';

export const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070')] bg-cover bg-center opacity-50 scale-105" />
      </div>

      <div className="relative z-10 text-center px-6">
        <div ref={titleRef}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
            MORYA <span className="text-rose-500">RESORT</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">
            Discover a sanctuary of peace and elegance. Your perfect getaway awaits in the lap of nature.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto px-12 py-5 text-lg">
              Book Your Stay
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto px-12 py-5 text-lg">
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-rose-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
