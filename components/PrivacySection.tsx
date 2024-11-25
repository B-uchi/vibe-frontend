import Image from "next/image";
import sectionImage from "../public/sectionImage3.jpg";
import { PiCaretRightLight } from "react-icons/pi";

const PrivacySection = () => {
  return (
    <section className="bg-gradient-to-br from-[#313131] to-gray-900 py-20 max-w-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl"></div>

        <div className="relative flex lg:flex-row-reverse flex-col items-center gap-12">
          {/* Image - Moved to top for mobile */}
          <div className="lg:w-1/2 order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 transform -rotate-3 rounded-2xl"></div>
              <Image
                src={sectionImage}
                alt="Privacy First"
                quality={100}
                className="relative rounded-2xl shadow-xl transform hover:rotate-2 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-8 text-white">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                🔒 Security First
              </span>
              <h2 className="font-poppins font-bold text-4xl lg:text-5xl leading-tight">
                Your Privacy,<br/>
                Our Priority
              </h2>
            </div>

            <p className="font-poppins text-gray-300 text-lg leading-relaxed">
              At Vibe, we understand that privacy is crucial. Our robust security protocols 
              protect your data from unauthorized access, giving you peace of mind as you chat. 
              Vibe is committed to keeping your conversations private and secure.
            </p>

            <div className="flex items-center gap-4">
              <button className="group px-6 py-3 bg-white rounded-xl text-[#313131] font-bold font-poppins hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Learn More
                <PiCaretRightLight className="group-hover:translate-x-1 transition-transform duration-300"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
