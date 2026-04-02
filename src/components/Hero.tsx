import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen pt-[72px] bg-navy flex items-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGTKSF7DQMK5RGroxDFPKb-RSe__BWldfvb0VtVmsU_yFWEZleoCIRrKbf3B9qii9byvNeGMr3U0k8EwwXcW7L43F2RzIjBGobL5w12FdW3HOBaRGAZ9KyeTdn2QCSNqoInm-sSTQsJnjAXq7GdYpe2jpybjdSy0wpZdQDtTNGHHDRXR4FTMrAq5SQilmI9CtV-MeswtDi3aJaLhgdV87rDa20BCmyFWMC7YKmOOufKSVJBww5h93Lg7-m_leMaof7t1xqvAihpm21" 
          alt="Luxury car silhouette" 
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity object-center scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4"
          >
            <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-bold tracking-widest uppercase rounded-sm border border-electric/20">
              Premium Fleet
            </span>
            <span className="px-3 py-1 bg-white/5 text-slate-300 text-xs font-bold tracking-widest uppercase rounded-sm">
              Sewa Mobil Terpercaya
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-headline font-bold text-white leading-[1.1] text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter"
          >
            Perjalanan Premium,<br/>Tanpa Ribet.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-lg max-w-md font-light leading-relaxed"
          >
            Solusi sewa mobil terbaik dengan armada terbaru dan driver profesional. Kenyamanan kelas satu untuk setiap rute perjalanan Anda.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#armada" className="metallic-gradient text-white px-8 py-4 rounded-sm font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
              Eksplor Armada <ArrowRight size={18} />
            </a>
            <a href="#coverage" className="glass-dark text-white px-8 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
              <MapPin size={18} /> Cek Lokasi
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-12 flex gap-10 items-center border-t border-white/10 max-w-md"
          >
            <div>
              <div className="text-3xl font-headline font-bold text-white">4.9<span className="text-lg text-slate-400">/5</span></div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1">Rating Layanan</div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div>
              <div className="text-3xl font-headline font-bold text-white">10k+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1">Klien Puas</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
