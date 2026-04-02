import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Fleet from '../components/Fleet';
import Coverage from '../components/Coverage';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface selection:bg-electric selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <Coverage />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
