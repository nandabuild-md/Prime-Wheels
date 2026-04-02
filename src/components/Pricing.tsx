import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    tier: "Short Trip",
    name: "Harian",
    features: ["Sewa 12-24 Jam", "Dengan Driver Profesional", "Unit Bersih & Terawat"],
    cta: "Lihat Unit",
    isPopular: false
  },
  {
    tier: "Long Term",
    name: "Mingguan",
    features: ["Diskon Harga Sewa", "Free Cuci Mobil 1x", "Prioritas Service Unit", "Antar Jemput Unit"],
    cta: "Hubungi Sales",
    isPopular: true
  },
  {
    tier: "Enterprise",
    name: "Bulanan",
    features: ["Harga Korporat Khusus", "Maintenance Rutin Berkala", "Unit Pengganti Siaga", "Invoice Term 30 Hari"],
    cta: "Minta Penawaran",
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id="harga" className="py-32 bg-surface px-8">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 tracking-tight">Paket Rental Fleksibel</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Pilih paket sewa yang paling sesuai dengan durasi dan kebutuhan mobilitas Anda dengan harga transparan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-12 flex flex-col rounded-sm ${
                plan.isPopular 
                  ? 'bg-navy text-white relative overflow-hidden shadow-2xl scale-105 z-10 py-16' 
                  : 'bg-surface-lowest border border-outline-variant ambient-shadow'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-6 right-[-35px] bg-electric text-white px-12 py-1.5 text-[10px] font-bold uppercase tracking-widest rotate-45">
                  Popular
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${plan.isPopular ? 'text-slate-400' : 'text-on-surface-variant'}`}>
                  {plan.tier}
                </h3>
                <div className={`text-4xl md:text-5xl font-headline font-bold ${plan.isPopular ? 'text-white' : 'text-on-surface'}`}>
                  {plan.name}
                </div>
              </div>
              
              <ul className={`space-y-5 mb-12 flex-grow ${plan.isPopular ? 'text-slate-300' : 'text-on-surface-variant'}`}>
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm">
                    <Check size={18} className="text-electric shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              
              <Link to="/booking" className={`block text-center w-full py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
                plan.isPopular 
                  ? 'metallic-gradient text-white hover:brightness-110 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]' 
                  : 'border border-on-surface text-on-surface hover:bg-on-surface hover:text-white'
              }`}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
