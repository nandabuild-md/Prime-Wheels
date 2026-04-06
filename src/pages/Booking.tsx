import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import Footer from '../components/Footer';
import { CAR_DATA } from '../data/cars';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedCar, setSelectedCar] = useState<number | null>(1);
  const [serviceType, setServiceType] = useState('LEPAS KUNCI');
  
  // Trip Details State
  const [startDate, setStartDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [duration, setDuration] = useState('1 Hari (24 Jam)');

  const heroRef = useRef(null);

  const filteredCars = selectedCategory === 'Semua' 
    ? CAR_DATA 
    : CAR_DATA.filter(car => car.category === selectedCategory);

  const selectedCarData = CAR_DATA.find(car => car.id === selectedCar) || CAR_DATA[0];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Scroll to top when step changes
  useEffect(() => {
    if (step === 1) {
      window.scrollTo({ top: 700, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-electric selection:text-white">
      {/* TopNavBar */}
      <nav className={`fixed top-0 h-[72px] w-full z-50 bg-navy shadow-xl shadow-black/20 transition-transform duration-500 ${step > 1 ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex justify-between items-center w-full px-8 max-w-screen-2xl mx-auto h-full">
          <Link to="/" className="text-2xl font-bold text-white tracking-tight font-headline uppercase">
            Prime Wheels
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/#armada" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Armada</Link>
            <Link to="/#coverage" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Coverage</Link>
            <Link to="/#harga" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">Harga</Link>
            <Link to="/#faq" className="text-slate-300 text-sm font-medium hover:text-white transition-colors">FAQ</Link>
          </div>
          <Link to="/booking" className="metallic-gradient text-white px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all active:scale-95 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]">
            Booking Sekarang
          </Link>
        </div>
      </nav>

      {/* Section 1: Parallax Hero */}
      <section ref={heroRef} className={`relative h-[819px] overflow-hidden flex items-center justify-center bg-[#070C1E] ${step > 1 ? 'hidden' : ''}`}>
        {/* Layer 1: Background Texture */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30 grayscale blur-[2px]" 
            alt="Modern urban cityscape at twilight with glowing blue architectural lights" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtGrNB6JIsQrrCEML99JkDSRTqmzRH3zU0FD5q-lMuI5xWFhSuzhHsU2ThKD385VPC9s7_PfsKlpZKNt-AIWTgzrhaJTI7xvYzi6IfghHMyufsB0qWR6KT3x_7KUXDEEAXJ_C4ZoCa0VQntpC-7vApoB0rdzZ4YmulVn5P8jsISnUIigOCsohkHIGE3NZdjrXPFgjBNDDMBSxnyGp1DiZlkCyco5Gs3WHJmDemhvR5B5Qzn5h8rVi5UsyOCKBuZgokx40yDEMjO4PR"
          />
        </motion.div>
        
        {/* Layer 2: Text Content */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]), opacity }} className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white font-headline font-bold text-5xl md:text-7xl tracking-tighter mb-6 leading-none">
            Pilih Mobilmu,<br/><span className="text-electric">Tentukan Rutenya.</span>
          </h1>
          <p className="text-slate-400 font-body text-lg md:text-xl max-w-2xl mx-auto">
            Sistem reservasi cerdas Prime Wheels. Presisi teknis untuk kenyamanan berkendara di perkotaan modern.
          </p>
        </motion.div>
        
        {/* Layer 3: Dynamic Car Depth (Premium Car) */}
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }} className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] z-20 pointer-events-none">
          <img 
            className="w-full h-auto transform transition-transform duration-700 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]" 
            alt="Side profile of a premium black luxury sedan" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSxSuEbe4kNrNRJPcxllQRNlWLrTJv2asEtI4K5PgZpDMacWo09Scs3geUP03cBwqSgjFeLMf_q29mfSVQK_8mcQ74DdDHlg2_qTK9RXTq25y1W_Ha0kSTIZMw9H2w0VppaFjcoyLyubYwVcDRpnAcqJq-3P1eXKJVOq5oj43Py32_m20bsVQ-5PnWZl0Kkh5wXDaVZAzLEDKkyySkD7C4xhbFpB5V1ylPHCblqWB3qYnqC57jibpr3HEjh8IFJa1QujREsdo_qKKK"
          />
        </motion.div>
      </section>

      {/* Main Booking Canvas */}
      <main className={`relative z-30 max-w-7xl mx-auto px-6 mb-24 transition-all duration-500 ${step === 1 ? '-mt-16' : 'pt-8'}`}>
        {/* Booking Progress Tracker */}
        <div className={`sticky z-40 bg-white shadow-2xl rounded-sm p-2 flex mb-8 overflow-hidden transition-all duration-500 ${step === 1 ? 'top-[88px]' : 'top-4'}`}>
          <div className={`flex-1 py-4 text-center border-r border-slate-200 transition-colors ${step === 1 ? 'bg-electric text-white' : ''}`}>
            <span className={`block text-[10px] font-bold uppercase tracking-widest ${step === 1 ? 'opacity-60' : 'text-slate-500'}`}>Step 01</span>
            <span className={`font-headline font-bold ${step === 1 ? '' : 'text-slate-900'}`}>Armada</span>
          </div>
          <div className={`flex-1 py-4 text-center border-r border-slate-200 ${step === 2 ? 'bg-electric text-white' : ''}`}>
            <span className={`block text-[10px] font-bold uppercase tracking-widest ${step === 2 ? 'opacity-60' : 'text-slate-500'}`}>Step 02</span>
            <span className={`font-headline font-bold ${step === 2 ? '' : 'text-slate-900'}`}>Detail Perjalanan</span>
          </div>
          <div className={`flex-1 py-4 text-center ${step === 3 ? 'bg-electric text-white' : ''}`}>
            <span className={`block text-[10px] font-bold uppercase tracking-widest ${step === 3 ? 'opacity-60' : 'text-slate-500'}`}>Step 03</span>
            <span className={`font-headline font-bold ${step === 3 ? '' : 'text-slate-900'}`}>Konfirmasi</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: CAR SELECTOR */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <h2 className="font-headline font-bold text-4xl text-slate-900 leading-none mb-2">Koleksi Terkurasi</h2>
                  <p className="text-slate-600">Pilih kendaraan yang sesuai dengan karakter perjalanan Anda.</p>
                </div>
                <div className="flex gap-2">
                  {['Semua', 'MPV', 'Luxury', 'Electric'].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm cursor-pointer transition-colors ${selectedCategory === cat ? 'bg-electric text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Car Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <div 
                    key={car.id}
                    onClick={() => setSelectedCar(car.id)}
                    className={`group relative bg-white transition-all duration-300 cursor-pointer ${selectedCar === car.id ? 'border-2 border-electric scale-[1.02] shadow-xl' : 'border border-slate-200 shadow-sm hover:shadow-xl hover:border-electric/50 hover:scale-[1.02]'}`}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img className="w-full h-full object-cover" alt={car.name} src={car.img}/>
                      <div className="absolute top-4 right-4 bg-electric text-white px-3 py-1 text-xs font-bold rounded-sm">TERSEDIA</div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="font-headline font-bold text-2xl text-slate-900">{car.name}</h3>
                          <p className="text-slate-500 text-sm">{car.class}</p>
                        </div>
                        <div className="text-right">
                          <span className="block text-xs font-bold text-slate-500 uppercase">Mulai Dari</span>
                          <span className="font-headline font-bold text-xl text-electric">{car.price}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                        <div className="text-center">
                          <span className="material-symbols-outlined text-electric mb-1">person</span>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">{car.seats}</p>
                        </div>
                        <div className="text-center">
                          <span className="material-symbols-outlined text-electric mb-1">luggage</span>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">{car.luggage}</p>
                        </div>
                        <div className="text-center">
                          <span className="material-symbols-outlined text-electric mb-1">{car.fuel === 'Electric' ? 'ev_station' : 'local_gas_station'}</span>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">{car.fuel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  onClick={() => setStep(2)}
                  className="metallic-gradient text-white px-12 py-5 rounded-sm font-headline font-bold text-lg tracking-widest hover:brightness-110 transition-all flex items-center gap-3 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                >
                  LANJUTKAN RESERVASI <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: TRIP DETAILS */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="font-headline font-bold text-4xl text-slate-900 mb-2">Detail Perjalanan</h2>
                <p className="text-slate-600">Lengkapi informasi untuk personalisasi pengalaman berkendara Anda.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Trip Form */}
                <div className="space-y-8">
                  {/* Service Toggle */}
                  <div className="bg-slate-100 p-2 rounded-sm flex items-center">
                    <button 
                      onClick={() => setServiceType('LEPAS KUNCI')}
                      className={`flex-1 py-3 font-bold text-xs uppercase tracking-widest rounded-sm transition-all ${serviceType === 'LEPAS KUNCI' ? 'bg-electric text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200'}`}
                    >
                      LEPAS KUNCI
                    </button>
                    <button 
                      onClick={() => setServiceType('DENGAN DRIVER')}
                      className={`flex-1 py-3 font-bold text-xs uppercase tracking-widest rounded-sm transition-all ${serviceType === 'DENGAN DRIVER' ? 'bg-electric text-white shadow-sm' : 'text-slate-500 hover:bg-slate-200'}`}
                    >
                      DENGAN DRIVER
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Tanggal Mulai</label>
                        <input 
                          type="date" 
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="bg-white border border-slate-300 p-4 rounded-sm focus:ring-2 focus:ring-electric outline-none text-slate-900" 
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Waktu Jemput</label>
                        <input 
                          type="time" 
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="bg-white border border-slate-300 p-4 rounded-sm focus:ring-2 focus:ring-electric outline-none text-slate-900" 
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Lokasi Penjemputan</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-electric">location_on</span>
                        <input 
                          type="text" 
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          placeholder="Cari gedung, bandara, atau jalan..." 
                          className="w-full bg-white border border-slate-300 p-4 pl-12 rounded-sm focus:ring-2 focus:ring-electric outline-none text-slate-900" 
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Durasi Sewa</label>
                      <select 
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="bg-white border border-slate-300 p-4 rounded-sm focus:ring-2 focus:ring-electric outline-none appearance-none text-slate-900"
                      >
                        <option>1 Hari (24 Jam)</option>
                        <option>3 Hari (Paket Akhir Pekan)</option>
                        <option>7 Hari (Paket Mingguan)</option>
                        <option>30 Hari (Paket Bulanan)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Technical Area Visual */}
                <div className="bg-slate-100 flex flex-col items-center justify-center p-8 text-center space-y-4 border border-slate-200 rounded-sm">
                  <span className="material-symbols-outlined text-6xl text-electric/20">satellite_alt</span>
                  <h3 className="font-headline font-bold text-xl text-slate-900 uppercase tracking-tight">Cakupan Geofencing</h3>
                  <p className="text-xs text-slate-600 px-12 leading-relaxed">Sistem telemetri aktif untuk area Jabodetabek. Layanan penjemputan bandara tersinkronisasi 24 jam.</p>
                  
                  <div className="w-full h-48 bg-slate-200 rounded-sm mt-4 overflow-hidden border border-slate-300 relative">
                    <img 
                      className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
                      alt="High-tech monochromatic map view of Jakarta city center" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-nFoz3Z1ct-Ny8dedG6qsgu1D3rW1whYArxe49fnQb_M_t5uKleCWP5pzlpPBjKPLAuUI3ne-rKmXw1Np9liXYXc0CR-dbOOtR-4vb61fdFFi4YWwrpOpv_78Yk7Impod6hvoOEmwZ9zAI_IioQhq-qkEM9Nznm1h1LEVgJUNbNgQImfozsWFEsy9vFQ6x80Jk-bkPiditQzLl0NYMpQKFHIjsxF7R3j4-jPLtJWDlR0693aWhQm4tTDL99jiplJPRcswPBGX3fpZ"
                    />
                    <div className="absolute inset-0 bg-electric/10"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-12 border-t border-slate-200">
                <button 
                  onClick={() => setStep(1)}
                  className="text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 hover:text-electric transition-colors"
                >
                  <span className="material-symbols-outlined">arrow_back</span> Kembali
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="metallic-gradient text-white px-12 py-5 rounded-sm font-headline font-bold text-lg tracking-widest hover:brightness-110 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                >
                  TINJAU PESANAN
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SUMMARY + SEND */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-headline font-bold text-4xl text-slate-900 mb-2">Konfirmasi Reservasi</h2>
                <p className="text-slate-600">Pastikan seluruh data pesanan sudah sesuai sebelum mengirim reservasi.</p>
              </div>

              <div className="bg-white grid grid-cols-1 md:grid-cols-3 overflow-hidden shadow-2xl border border-slate-200 rounded-sm">
                {/* Car Summary Hero */}
                <div className="relative bg-[#070C1E] p-12 flex flex-col justify-between overflow-hidden">
                  <div className="z-10">
                    <span className="text-electric font-bold uppercase tracking-widest text-[10px] block mb-2">Mobil Terpilih</span>
                    <h3 className="text-white font-headline font-bold text-3xl">{selectedCarData.name}</h3>
                    <p className="text-slate-400 text-sm">{selectedCarData.class}</p>
                  </div>
                  <img 
                    className="w-full h-auto mt-8 z-10 transform scale-150 translate-x-8" 
                    alt={selectedCarData.name} 
                    src={selectedCarData.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070C1E] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Trip Details */}
                <div className="p-12 space-y-10 md:col-span-2">
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Pengambilan</label>
                        <p className="font-bold text-slate-900">{startDate ? new Date(startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Belum dipilih'}, {pickupTime || '00:00'} WIB</p>
                        <p className="text-sm text-slate-600">{pickupLocation || 'Lokasi belum ditentukan'}</p>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Durasi</label>
                        <p className="font-bold text-slate-900">{duration}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Layanan</label>
                        <p className="font-bold text-slate-900">{serviceType === 'LEPAS KUNCI' ? 'Lepas Kunci' : 'Dengan Driver'}</p>
                        <p className="text-sm text-slate-600">Standard Fuel Policy</p>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Proteksi</label>
                        <p className="font-bold text-slate-900">Prime Shield Premium</p>
                        <p className="text-sm text-slate-600">Full Coverage Insurance</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">Sewa Kendaraan</span>
                      <span className="font-bold text-slate-900">{selectedCarData.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">Biaya Layanan ({serviceType})</span>
                      <span className="font-bold text-slate-900">{serviceType === 'DENGAN DRIVER' ? 'Rp 250.000' : 'Gratis'}</span>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-slate-600">Asuransi Premium</span>
                      <span className="font-bold text-slate-900">Rp 350.000</span>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Estimasi</p>
                        <p className="font-headline font-bold text-4xl text-electric">
                          Rp {(selectedCarData.priceNum + 350000 + (serviceType === 'DENGAN DRIVER' ? 250000 : 0)).toLocaleString('id-ID')}
                        </p>
                      </div>
                      <button 
                        onClick={() => {
                          const message = `Halo Prime Wheels, saya ingin reservasi kendaraan:\n\nMobil: ${selectedCarData.name}\nLayanan: ${serviceType}\nTanggal: ${startDate}\nWaktu: ${pickupTime}\nLokasi: ${pickupLocation}\nDurasi: ${duration}\n\nMohon info ketersediaan.`;
                          window.open(`https://wa.me/6283167987800?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        className="bg-[#25D366] text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:brightness-95 transition-all shadow-lg shadow-green-500/20 active:scale-95"
                      >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.514-2.961-2.63-.086-.117-.704-.937-.704-1.787 0-.85.438-1.268.594-1.444.156-.176.339-.22.451-.22.113 0 .225.001.324.005.102.004.241-.039.378.29.141.339.482 1.173.524 1.258.041.085.069.184.012.298-.056.113-.085.184-.17.283-.085.099-.178.221-.254.298-.085.085-.174.178-.075.349.099.171.442.729.948 1.18.653.582 1.201.762 1.372.848.171.085.271.07.371-.044.1-.113.424-.495.537-.665.113-.17.226-.141.381-.085.156.056 1.001.467 1.171.552.17.085.283.127.324.198.041.07.041.405-.103.81zM12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.18 1.89 5.83L2 22l4.17-1.89C7.82 21.3 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.97 0-3.8-.59-5.33-1.61l-.38-.25-2.5.68.69-2.43-.27-.41C3.19 14.54 2.5 12.83 2.5 11c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5z"></path></svg>
                        KIRIM VIA WHATSAPP
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => setStep(2)}
                  className="text-slate-500 font-bold uppercase tracking-widest hover:text-electric transition-colors"
                >
                  Edit Detail
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
