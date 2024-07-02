import Image from "next/image";
import sectionImage from "../public/sectionImage3.png";

const PrivacySection = () => {
  return (
    <section className="h-[100vh] bg-gray-100 border-t-[1px] border-t-[#e1e1e1]">
      <div className="container mx-auto flex lg:flex-row-reverse flex-col-reverse justify-center items-center h-full lg:text-left text-center">
        <div className="lg:w-1/2 lg:pr-14 p-5">
          <h1 className="font-poppins font-bold lg:text-5xl text-2xl">
            Your Privacy, Our Priority{" "}
          </h1>
          <p className="font-poppins mt-5 leading-[30px]">
            At Vibe, we understand that privacy is crucial. That&apos;s why we&apos;ve
            implemented end-to-end encryption to ensure that your messages are
            secure and only accessible to you and the recipient. Our robust
            security protocols protect your data from unauthorized access,
            giving you peace of mind as you chat. Whether you&apos;re sharing
            personal stories or sensitive information, Vibe is committed to
            keeping your conversations private and secure.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={sectionImage}
            alt="Message Line"
            objectFit="cover"
            quality={100}
            className="mx-auto lg:w-[75%]"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
