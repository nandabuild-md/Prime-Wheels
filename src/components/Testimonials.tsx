import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Sangat puas dengan layanan rental ini. Alphard yang saya sewa sangat bersih dan driver sangat profesional. Cocok untuk kebutuhan bisnis.",
    name: "Budi Santoso",
    role: "Business Owner",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOfcQqfqYpaTrQMpU2HQ9tjJCypUtC8GCvQ94RN-IiZOTx6W77j4DUJB7-U7svgjYVHmj9HlFzDIwfRNIR-7Sk_qa6wMBm3Ets2Yzt19ArvvCofmSt1tOmyrcWsuuKVK3v1MVjdTJsEjDQaCnbKLnwSaaXMz1FOnU5FUsZ_3zqUbHLFz5Iftj_IWELV5LcbzoNKtrbLTk21oXldT2aE_lpm8xLleKkzInYnVjW5sq202UQXAiY59cRetrPIBNdNjF2MMFsSvTfNVIx"
  },
  {
    text: "Proses sewa mobil lewat WhatsApp sangat cepat. Unit Innova Reborn-nya terawat sekali. Liburan keluarga jadi tenang dan nyaman.",
    name: "Rina Wahyuni",
    role: "Traveler",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9OGkiR1dFpl09JxsstFHwOzkb2Y-I0rTMnZmoh_giQ5UY0bTBb7Uf2PVcaytfflkXUkn43eEPvZoKo_Cx2pMxJBNa_5mFhPLN_IIx2Uq_cTYh-fvJsuNmfzGmnb8VJNKl1e-2k-_juMxowQzZ2a0bi1cTwXwjGvMOK9_WlLy0xjDUVJqsHWeHEwTDqfGnZTL1bA7YoFV8ICobhRUFHhpuIESazKfoCK1wfZrJVewdoP4udcys5NEp7QmuA7FdTEAMUUlwGUrXYIB-"
  },
  {
    text: "Kami menggunakan jasa Prime Wheels untuk sewa bulanan operasional kantor. Pelayanan maintenance rutin dan responnya sangat baik.",
    name: "PT. Surya Mandiri",
    role: "Corporate Client",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCITG2BlhrVIVx-a5vJP8y8v2ure80Alwcg84Dd34kVbpBB70I6TxprG7CVgzcKiPv47cQyG8W2_PzI_Q9x_vPmuZ_Sd2Fw4UpGRtZTwGhSM6ivRXeXtpaPgWs2Hr7QHNEJFd4Jcvz5enXuoFwc9DDfuyQMFFyNc73Xbw4ecyy5H0vUlp0hSNYWXgTAByZfOSQmRkleuQNwJerOLuoeR2yQO3D73h_x04NBvQtDHFBk7-0LZfjkvr3eoPGLwatH475u3k2627zmFY15"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface-low px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-center text-4xl md:text-5xl font-bold mb-20 tracking-tight"
        >
          Ulasan Pelanggan
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-surface-lowest p-10 border-l-4 border-electric ambient-shadow rounded-r-sm"
            >
              <div className="flex gap-1 text-electric mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-10 leading-relaxed text-lg">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-surface-low overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="font-bold text-on-surface font-headline">{t.name}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
