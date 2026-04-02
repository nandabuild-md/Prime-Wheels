import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Coverage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="coverage" ref={ref} className="py-32 bg-navy text-white overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">
              Jasa Rental Mobil<br/>Luar Kota & Antar Provinsi
            </h2>
            <p className="text-slate-400 mb-16 max-w-lg text-lg font-light leading-relaxed">
              Kami menyediakan layanan transportasi profesional dengan cakupan wilayah luas. Nikmati kenyamanan perjalanan jauh dengan armada yang selalu terawat dan driver berpengalaman.
            </p>
            
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-16">
              <div>
                <div className="text-5xl font-headline font-bold text-electric mb-3">50+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Unit Armada</div>
              </div>
              <div>
                <div className="text-5xl font-headline font-bold text-electric mb-3">8 Thn</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Pengalaman</div>
              </div>
              <div>
                <div className="text-5xl font-headline font-bold text-electric mb-3">10k+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Perjalanan Selesai</div>
              </div>
              <div>
                <div className="text-5xl font-headline font-bold text-electric mb-3">4.9</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Rating Google</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Surabaya', 'Malang', 'Bali', 'Yogyakarta', 'Bandung', 'Jakarta'].map((city) => (
                <span key={city} className="px-5 py-2.5 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-sm hover:bg-white/10 transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] bg-navy-dark overflow-hidden rounded-sm"
          >
            <motion.img 
              style={{ y }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe6xKjXGiNWDqUm0zlki9EO46DKtaYgo8JPCoHj9mHUaArpMJS1-tSIKWF9WbK_Qm2KBnWgXkbZAoqESoKCnImpQpzu9Azm0wVbbYjOsnzpY5VgPpHvQLEfiBw4yGOYlIswX_S3SqdHMAx4DGTfCGg7_OdJSu804P5OX0Vw4NtaRVdk-KtovCUgp7s3fHgulqPZAgJm1HF2hGc4S4sE2GBRZzHgwCikQccrdRJn2EG6t9tIy8nzfMBrbd7hNDxMxo7tN6zBCAuvpmp" 
              alt="Professional Driver" 
              className="absolute inset-0 w-full h-[140%] object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 glass-dark p-8 rounded-sm">
              <p className="text-sm font-medium text-white italic leading-relaxed">
                "Fokus kami adalah memberikan layanan sewa mobil dengan standar transparansi harga dan kualitas armada terbaik."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
