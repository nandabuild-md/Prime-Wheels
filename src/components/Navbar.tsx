import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(11, 20, 55, 0)', 'rgba(11, 20, 55, 0.95)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 h-[72px] w-full z-50 transition-all duration-300 border-b border-white/5"
    >
      <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto h-full">
        <Link to="/" className="text-2xl font-bold text-white tracking-tight font-headline uppercase">
          Prime Wheels
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="/#armada" className="text-white text-sm font-medium hover:text-electric transition-colors">Armada</a>
          <a href="/#coverage" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Coverage</a>
          <a href="/#harga" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Harga</a>
          <a href="/#faq" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">FAQ</a>
        </div>

        <Link to="/booking" className="metallic-gradient text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:brightness-110 transition-all active:scale-95 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
          Booking Sekarang
        </Link>
      </div>
    </motion.nav>
  );
}
