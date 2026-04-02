import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Bagaimana cara melakukan booking unit?",
    a: "Anda dapat melakukan booking langsung melalui website dengan memilih armada yang tersedia, atau menghubungi admin kami melalui WhatsApp untuk konsultasi rute dan ketersediaan unit secara real-time."
  },
  {
    q: "Apakah harga sewa mobil sudah termasuk BBM?",
    a: "Kami menyediakan paket 'All-In' (Mobil + Driver + BBM) atau paket 'Sewa Unit + Driver'. Biaya operasional seperti Tol dan Parkir biasanya ditanggung oleh penyewa agar lebih transparan."
  },
  {
    q: "Bagaimana standar driver di Prime Wheels?",
    a: "Seluruh driver kami telah melalui proses seleksi ketat, memiliki izin mengemudi yang valid, berpengalaman di berbagai rute, dan mengedepankan etika pelayanan serta keamanan berkendara."
  },
  {
    q: "Apakah melayani drop-off bandara 24 jam?",
    a: "Ya, kami menyediakan layanan Airport Transfer 24 jam. Driver kami akan standby di titik penjemputan tepat waktu untuk memastikan Anda tidak tertinggal jadwal penerbangan."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-surface-low px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
        >
          Tanya Jawab Rental
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-lowest rounded-sm overflow-hidden ambient-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-on-surface hover:bg-surface-low/50 transition-colors"
              >
                <span className="text-lg">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-on-surface-variant" />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
