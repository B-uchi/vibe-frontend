import phoneMessage from "../public/phone-message.png";
import Image from "next/image";
import Link from "next/link";
import { PiCaretRightLight } from "react-icons/pi";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-screen min-h-screen overflow-hidden">
      <div className="h-screen w-full relative text-white">
        <div className="dotted-overlay"></div>
        
        {/* Main Content Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Right Content - Images (moved to top for mobile) */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full order-first lg:order-last">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
                <Image
                  src={phoneMessage}
                  alt="Hero Image"
                  quality={100}
                  className="z-20 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] mx-auto bounce"
                  priority
                />
              </div>

              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8 z-10 text-center lg:text-left">
                <div className="space-y-3 lg:space-y-4">
                  <span className="inline-block px-3 py-1 lg:px-4 lg:py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium">
                    🚀 Welcome to the Future of Chat
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-poppins leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Start a chat,<br/>
                    catch a vibe...
                  </h1>
                </div>
                
                <p className="text-base sm:text-lg text-gray-300 font-poppins max-w-xl mx-auto lg:mx-0">
                  Discover new connections, share your passions, and immerse
                  yourself in engaging conversations. Experience the joy of genuine,
                  vibrant interactions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="https://vibe-chat-react.vercel.app/sign-in" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-xl text-[#313131] font-bold font-poppins hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Get Started
                      <PiCaretRightLight className="group-hover:translate-x-1 transition-transform duration-300"/>
                    </button>
                  </Link>
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/30 rounded-xl font-poppins hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
