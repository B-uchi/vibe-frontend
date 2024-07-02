import Image from "next/image";
import sectionImage from "../public/sectionImage1.png";

const SeamlessConversationSection = () => {
  return (
    <section className="h-[100vh]">
      <div className="container mx-auto flex lg:flex-row text-center lg:text-left flex-col-reverse justify-center items-center h-full">
        <div className="lg:w-1/2 lg:pl-14 p-5">
          <h1 className="font-poppins font-bold lg:text-5xl text-2xl">
            Seamless Conversations Anytime, Anywhere.
          </h1>
          <p className="font-poppins mt-5 leading-[30px]">
            Vibe is designed to make your conversations flow effortlessly.
            Whether you're catching up with friends, collaborating with
            colleagues, or meeting new people, Vibe provides a smooth and
            intuitive chat experience. Our real-time messaging ensures that your
            chats are always in sync, and with features like read receipts,
            typing indicators, and rich media sharing, you can communicate
            effectively and efficiently. Start a chat, catch a vibe, and keep
            the conversation going no matter where you are.
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

export default SeamlessConversationSection;
