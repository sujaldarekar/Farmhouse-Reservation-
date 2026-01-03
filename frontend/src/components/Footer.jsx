const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tighter text-rose-500 mb-2">
            MORYA<span className="text-white">FARMHOUSE</span>
          </h2>
          <p className="text-sm text-white/40">© 2026 Morya Farmhouse. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-sm text-white/60">
          <a href="#" className="hover:text-rose-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Facebook</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
