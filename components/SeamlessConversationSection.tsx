import Image from "next/image";
import sectionImage from "../public/sectionImage.jpg";
import { PiCaretRightLight } from "react-icons/pi";

const SeamlessConversationSection = () => {
  return (
    <section className="h-[100vh] overflow-hidden" id="why-vibe">
      <div className=" mx-auto flex lg:flex-row text-center lg:text-left flex-col-reverse justify-center items-center h-full">
        <div className="lg:w-1/2 lg:p-28 p-5">
          <h1 className="font-poppins font-bold italic lg:text-5xl text-2xl">
            Seamless Conversations Anytime, Anywhere.
          </h1>
          <p className="font-poppins mt-5 leading-[30px]">
            Vibe is designed to make your conversations flow effortlessly.
            Whether you&apos;re catching up with friends, collaborating with
            colleagues, or meeting new people, Vibe provides a smooth and
            intuitive chat experience.
          </p>
          <div className="mt-10">
            <button className="bg-[#313131] p-2 lg:mx-0 mx-auto px-4 flex items-center gap-1 rounded-md text-white font-bold">
              <PiCaretRightLight size={20}/>
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex lg:justify-end justify-center">
          <Image
            src={sectionImage}
            alt="Message Line"
            quality={100}
            className="w-[80%] h-[100%] rounded-md lg:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default SeamlessConversationSection;
