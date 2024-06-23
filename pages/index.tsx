import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-green-400">
      <Navbar />
      <HeroSection />
    </main>
  );
}
