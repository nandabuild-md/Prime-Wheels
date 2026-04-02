export default function Footer() {
  return (
    <footer className="bg-navy-dark py-20 px-8 text-white border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold text-white font-headline uppercase mb-8 tracking-tight">
            Prime Wheels
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Penyedia jasa rental mobil premium terpercaya di Indonesia dengan standar keamanan dan kenyamanan armada kelas dunia.
          </p>
          <div className="flex gap-4">
            {['IG', 'FB', 'TW'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-sm hover:bg-electric hover:text-white transition-all text-sm font-bold text-slate-400">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-slate-300 mb-8">Layanan Kami</h4>
          <ul className="space-y-4">
            <li><a href="#armada" className="text-slate-500 hover:text-electric transition-colors text-sm">Armada Rental</a></li>
            <li><a href="#coverage" className="text-slate-500 hover:text-electric transition-colors text-sm">Cakupan Wilayah</a></li>
            <li><a href="#harga" className="text-slate-500 hover:text-electric transition-colors text-sm">Daftar Harga</a></li>
            <li><a href="#faq" className="text-slate-500 hover:text-electric transition-colors text-sm">Pusat Bantuan</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-slate-300 mb-8">Kebijakan</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-500 hover:text-electric transition-colors text-sm">Syarat & Ketentuan</a></li>
            <li><a href="#" className="text-slate-500 hover:text-electric transition-colors text-sm">Kebijakan Privasi</a></li>
            <li><a href="#" className="text-slate-500 hover:text-electric transition-colors text-sm">Kebijakan Sewa</a></li>
            <li><a href="#" className="text-slate-500 hover:text-electric transition-colors text-sm">Asuransi Perjalanan</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-slate-300 mb-8">Kontak Operasional</h4>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">
            Jl. Raya Darmo Permai No. 123,<br/>Surabaya, Jawa Timur 60189
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Email: support@primewheels.id<br/>
            Hotline: +62 812 3456 7890
          </p>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 max-w-screen-2xl mx-auto">
        <p className="text-slate-600 text-xs">
          © 2024 Prime Wheels. Technical Precision Editorial.
        </p>
        <div className="flex gap-8 text-xs text-slate-600 font-medium uppercase tracking-widest">
          <span>Premium Car Rental Service</span>
          <span>Verified Transport Provider</span>
        </div>
      </div>
    </footer>
  );
}
