import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Head from "next/head";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function Home() {
  const animationLayerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    scrollTo(0,0)
    const timeline = gsap.timeline();

    // Animate each letter with a drop effect
    timeline.fromTo(
      lettersRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "bounce.out",
      }
    );

    // Create a radial reveal effect and scroll up
    timeline.to(animationLayerRef.current, {
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
      
      opacity: 0.9,
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Scroll up and disappear
    timeline.to(animationLayerRef.current, {
      y: "-100vh",
      duration: 2,
      opacity: 0.8,
      ease: "power2.in",
      onComplete: () => {
        if (animationLayerRef.current) {
          animationLayerRef.current.style.display = "none";
        }
      },
    });
  }, []);

  return (
    <main className="relative">
      {/* <div
        ref={animationLayerRef}
        className="absolute inset-0 flex items-start justify-center bg-[#313131] z-50"
      >
        <div className="font-rowdies mt-20 flex space-x-2 text-white text-6xl font-bold">
          {["V", "I", "B", "E"].map((letter, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) lettersRef.current[index] = el;
              }}
              className="letter"
            >
              {letter}
            </div>
          ))}
        </div>
      </div> */}
      <Head>
        <title>Vibe - Start a Chat, Catch a Vibe</title>
        <meta name="description" content="Vibe - Start a Chat, Catch a Vibe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <CallToAction />
      <FAQ/>
      <Footer/>
    </main>
  );
}
