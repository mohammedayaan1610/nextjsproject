import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Retreats from "@/components/Retreats";
import FeaturedRetreats from "@/components/FeaturedRetreats";
import AboutUs from "@/components/AboutUs";
import CombineRetreat from "@/components/CombineRetreat";
import ExploreByDestination from "@/components/ExploreByDestination";
import HowVitaWorks from "@/components/HowVitaWorks";
import Practitioners from "@/components/Practitioners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#091b20] text-white overflow-x-hidden selection:bg-[#fb9826] selection:text-[#091b20]">
      {/* 1. Fixed / sticky Navbar */}
      <Navbar />

      {/* 2. Hero section */}
      <Hero />

      {/* 3. Retreats section */}
      <Retreats />

      {/* 5. About Us section */}
      <AboutUs />

      {/* 4. Featured Retreats section */}
      <FeaturedRetreats />

      <CombineRetreat />

      <ExploreByDestination />

      <HowVitaWorks />

      <Practitioners />

      <Footer />
      
    </main>
  );
}