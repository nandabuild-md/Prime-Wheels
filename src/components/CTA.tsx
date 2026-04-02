import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWTdKpQJzl1yysRQGacfBykxchV80-qpL1jvKQMcs-EwiWD0lUzgw41m05ZTwXUlzuDvvpZ_e_90VW7b5nHgn9ItlYke-qM_5bRbjO9AUzmLTUvACdVxtF1lO1yG1BtsCkwoZNVlevlhER9AbzrBvQvwJmqLxpdcehLpgoEOhZjHKYHcKEBbqkM3F_YIdssu1hpEOMtmP9-7gynUT0yDBG2kQ0z3k9Gq7KpgtHmVRHxBOcj_f5eWUj8RkTwD57m8Kvrx_NpFmhu7JC" 
          alt="Car Detail" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/50 to-transparent"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-2xl mx-auto py-32 px-8 relative z-10"
      >
        <div className="max-w-2xl">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Butuh Sewa Mobil Sekarang?
          </h2>
          <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
            Dapatkan penawaran harga terbaik untuk perjalanan Anda berikutnya. Tim support kami siap membantu pemesanan Anda 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/booking" className="metallic-gradient text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] text-center">
              Booking Sekarang
            </Link>
            <button className="glass-dark text-white px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
              Daftar Akun Member
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
