import Image from "next/image";
import sectionImage from "../public/sectionImage2.jpg";
import { PiCaretRightLight } from "react-icons/pi";

const IntegrationSection = () => {
  return (
    <section className="min-h-screen bg-white py-20 max-w-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl"></div>

        <div className="relative flex lg:flex-row flex-col-reverse items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-gray-100 backdrop-blur-sm rounded-full text-sm font-medium text-[#313131]">
                🔌 Seamless Integration
              </span>
              <h2 className="font-poppins font-bold text-4xl lg:text-5xl leading-tight text-[#313131]">
                Connect Your<br/>
                Digital World
              </h2>
            </div>
            <p className="font-poppins text-gray-600 text-lg leading-relaxed">
              Vibe isn&apos;t just a chat app; it&apos;s a versatile tool that fits seamlessly into your digital lifestyle. 
              With easy integration with popular services like Google Drive, Dropbox, and social media platforms, 
              you can share files, photos, and links without missing a beat.
            </p>

            <div className="flex items-center gap-4">
              <button className="group px-6 py-3 bg-[#313131] rounded-xl text-white font-bold font-poppins hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Learn More
                <PiCaretRightLight className="group-hover:translate-x-1 transition-transform duration-300"/>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#313131] transform rotate-3 rounded-2xl"></div>
              <Image
                src={sectionImage}
                alt="Digital Integration"
                quality={100}
                className="relative rounded-2xl shadow-xl transform hover:-rotate-2 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
