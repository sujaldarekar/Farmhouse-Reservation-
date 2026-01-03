import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Natural Luxury
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Nestled in the heart of nature, Morya Farmhouse offers a perfect
            blend of modern comfort and rustic charm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Rooms",
              desc: "Luxury suites with stunning views.",
            },
            {
              title: "Private Pool",
              desc: "Crystal clear water for your relaxation.",
            },
            {
              title: "Organic Food",
              desc: "Farm-to-table experience with local flavors.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="glass-card group"
            >
              <h3 className="text-xl font-bold font-playfair mb-3 group-hover:text-rose-500 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
                Featured
                <br />
                <span className="text-rose-500">Accommodation</span>
              </h2>
              <p className="text-white/60 max-w-md italic font-medium">
                Handpicked escapes for your perfect stay.
              </p>
            </div>
            <Link
              to="/rooms"
              className="text-rose-500 font-bold hover:underline mb-2"
            >
              View all rooms →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              {
                id: 1,
                name: "Luxury Garden Suite",
                img: "/images/room.png",
                desc: "Escape to tranquility in our garden-facing luxury suite."
              },
              {
                id: 2,
                name: "Private Pool Villa",
                img: "/images/pool.png",
                desc: "Dive into luxury with your own private crystal clear pool."
              },
            ].map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="group relative rounded-[40px] overflow-hidden aspect-video border border-white/10"
              >
                <img
                  src={room.img}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  alt={room.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-rose-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">Featured Stay</span>
                  <h3 className="text-3xl font-black font-playfair mb-2">
                    {room.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-6">{room.desc}</p>
                  <Link
                    to={`/room/${room.id}`}
                    className="px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-rose-500 hover:text-white transition-all inline-block"
                  >
                    View Plan →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
