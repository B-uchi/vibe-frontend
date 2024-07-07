import Image from "next/image";
import sectionImage from "../public/sectionImage2.jpg";
import { PiCaretRightLight } from "react-icons/pi";


const IntegrationSection = () => {
  return (
    <section className="h-[100vh] overflow-hidden">
      <div className="mx-auto flex lg:flex-row flex-col-reverse justify-center items-center h-full lg:text-left text-center">
        <div className="lg:w-1/2 lg:p-28 p-5">
          <h1 className="font-poppins font-bold italic lg:text-5xl text-2xl">
            Integrate Effortlessly with Your Digital Life.{" "}
          </h1>
          <p className="font-poppins mt-5 leading-[30px]">
            Vibe isn&apos;t just a chat app; it&apos;s a versatile tool that fits
            seamlessly into your digital lifestyle. With easy integration with
            popular services like Google Drive, Dropbox, and social media
            platforms, you can share files, photos, and links without missing a
            beat.
          </p>
          <div className="mt-10">
            <button className="bg-[#313131] p-2 lg:mx-0 mx-auto px-4 flex items-center gap-1 rounded-md text-white font-bold">
              <PiCaretRightLight size={20}/>
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-0 mt-5 flex lg:justify-end justify-center">
          <Image
            src={sectionImage}
            alt="Message Line"
            className="w-[80%] h-[100%] rounded-md lg:rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
