import Image from "next/image";
import sectionImage from "../public/sectionImage.jpg";
import { PiCaretRightLight } from "react-icons/pi";

const SeamlessConversationSection = () => {
  return (
    <section className="min-h-screen bg-white py-20 max-w-screen" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 lg:w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-8 -right-8 lg:w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>

          <div className="relative flex lg:flex-row flex-col-reverse items-center gap-12">
            {/* Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-[#313131] font-medium tracking-wider text-sm uppercase">
                  Why Choose Vibe
                </span>
                <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[#313131]">
                  Seamless Conversations Anytime, Anywhere.
                </h2>
              </div>

              <p className="font-poppins text-gray-600 text-lg leading-relaxed">
                Vibe is designed to make your conversations flow effortlessly.
                Whether you&apos;re catching up with friends, collaborating with
                colleagues, or meeting new people, Vibe provides a smooth and
                intuitive chat experience.
              </p>

              <div className="flex items-center gap-4">
                <button className="group relative px-6 py-3 font-bold text-white rounded-lg bg-[#313131] hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    Learn More
                    <PiCaretRightLight
                      className="group-hover:translate-x-1 transition-transform duration-300"
                      size={20}
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#313131] transform rotate-3 rounded-2xl"></div>
                <Image
                  src={sectionImage}
                  alt="Seamless Conversations"
                  quality={100}
                  className="relative rounded-2xl shadow-xl transform hover:-rotate-2 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessConversationSection;
