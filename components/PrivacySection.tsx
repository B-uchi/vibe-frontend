import Image from "next/image";
import sectionImage from "../public/sectionImage3.jpg";
import { PiCaretRightLight } from "react-icons/pi";

const PrivacySection = () => {
  return (
    <section className="h-[100vh] bg-gray-100 border-t-[1px] border-t-[#e1e1e1]">
      <div className="container mx-auto flex lg:flex-row-reverse flex-col-reverse justify-center items-center h-full lg:text-left text-center">
        <div className="lg:w-1/2 lg:p-28 p-5">
          <h1 className="font-poppins font-bold italic lg:text-5xl text-2xl">
            Your Privacy, Our Priority{" "}
          </h1>
          <p className="font-poppins mt-5 leading-[30px]">
            At Vibe, we understand that privacy is crucial. Our robust
            security protocols protect your data from unauthorized access,
            giving you peace of mind as you chat. Vibe is committed to
            keeping your conversations private and secure.
          </p>
          <div className="mt-10">
            <button className="bg-[#313131] p-2 px-4 flex items-center gap-1 rounded-md text-white font-bold">
              <PiCaretRightLight size={20}/>
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={sectionImage}
            alt="Message Line"
            objectFit="cover"
            quality={100}
            className="mx-auto lg:w-[75%] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
