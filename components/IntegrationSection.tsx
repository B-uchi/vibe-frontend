import Image from "next/image";
import sectionImage from "../public/sectionImage4.png";

const IntegrationSection = () => {
  return (
    <section className="h-[100vh]">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse justify-center items-center h-full lg:text-left text-center">
        <div className="lg:w-1/2 lg:pl-14 p-5">
          <h1 className="font-poppins font-bold lg:text-5xl text-2xl">
            Integrate Effortlessly with Your Digital Life.{" "}
          </h1>
          <p className="font-poppins mt-5 leading-[30px]">
            Vibe isn&apos;t just a chat app; it&apos;s a versatile tool that fits
            seamlessly into your digital lifestyle. With easy integration with
            popular services like Google Drive, Dropbox, and social media
            platforms, you can share files, photos, and links without missing a
            beat. Our app is designed to be intuitive and user-friendly, making
            it simple to connect with others and share content. Whether you&apos;re
            using Vibe for personal chats or professional collaboration, our
            integrations help you stay productive and connected.
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

export default IntegrationSection;
