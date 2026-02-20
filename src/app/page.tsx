import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import RestaurantImage from '@/components/RestaurantImage';
import Divider from '@/components/Divider';
import Experience from '@/components/Experience';
import Services from '@/components/Services';
import About from '@/components/About';
import OpeningHours from '@/components/OpeningHours';
import Events from '@/components/Events';
import LunchMenu from '@/components/LunchMenu';
import LiveEvents from '@/components/LiveEvents';
import ReservationForm from '@/components/ReservationForm';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Navbar />
      <main>
        <ReservationForm />
        <RestaurantImage />
        <Divider />
        <Experience />
        <Services />
        <About />
        <OpeningHours />
        <LunchMenu />
        <Events />
        <LiveEvents />
      </main>
      <Map />
      <Footer />
    </div>
  );
}

