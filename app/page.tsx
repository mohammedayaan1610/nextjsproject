import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Retreats from "@/components/Retreats";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061b20] text-white">
      <Navbar />
      <Hero />
      <Retreats />
    </main>
  );
}