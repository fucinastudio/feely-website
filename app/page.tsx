import Navbar from '@/components/modules/homepage/navbar';
import Hero from '@/components/modules/homepage/hero';
import Features from '@/components/modules/homepage/features';
import Banner from '@/components/modules/homepage/banner';
import Footer from '@/components/modules/homepage/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Banner />
      <Footer />
    </main>
  );
}