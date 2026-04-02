import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAR_DATA } from '../data/cars';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Fleet() {
  return (
    <section id="armada" className="py-32 px-8 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
              Pilih Armada Terbaik Kami
            </h2>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Kurasi kendaraan terbaik mulai dari MPV keluarga hingga Luxury SUV, disiapkan dalam kondisi teknis sempurna untuk performa maksimal.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <button className="w-12 h-12 rounded-sm border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-sm border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CAR_DATA.map((car, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="group bg-surface-lowest flex flex-col ambient-shadow rounded-sm overflow-hidden"
            >
              <div className="h-[280px] overflow-hidden relative bg-surface-low">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {car.tag && (
                  <div className={`absolute top-4 left-4 ${car.tagColor || 'bg-on-surface'} text-white text-[10px] font-bold px-3 py-1.5 tracking-widest uppercase rounded-sm`}>
                    {car.tag}
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight">{car.name}</h3>
                    <p className="text-on-surface-variant text-sm mt-1">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">Mulai dari</span>
                    <span className="text-xl font-headline font-bold text-electric">Rp {car.price}<span className="text-sm font-body font-normal text-on-surface-variant">/hari</span></span>
                  </div>
                </div>
                <div className="flex gap-6 mb-10 border-t border-outline-variant pt-6">
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                    <Users size={16} className="text-electric" /> {car.seats} Kursi
                  </div>
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                    <Settings size={16} className="text-electric" /> {car.trans}
                  </div>
                </div>
                <Link to="/booking" className="mt-auto block w-full py-4 text-center font-bold text-on-surface border border-outline-variant hover:bg-on-surface hover:text-white transition-all rounded-sm uppercase tracking-widest text-xs">
                  Booking Unit
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
