// import heroImage from "../public/1.jpg"
import phoneMessage from "../public/phone-message.png";
import messageLine from '../public/message-line.png'
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-[100vh] bg-red-500 w-full relative text-white flex justify-center items-center">
      <div className="dotted-overlay"></div>
      <div className="absolute flex lg:flex-row flex-col-reverse items-center w-full justify-center lg:p-10 mt-10">
        <div className="lg:w-1/2 mx-auto lg:p-20 p-2">
          <h1 className="lg:text-6xl text-4xl text-center font-extrabold font-poppins lg:text-left">
            Start a chat, catch a vibe...
          </h1>
          <p className="mt-4 font-poppins text-center lg:text-left">
            Discover new connections, share your passions, and immerse yourself
            in engaging conversations. Whether you're looking to make new
            friends, find like-minded individuals, or just have a good time,
            Vibe is the place where your conversations come to life. Join us and
            experience the joy of genuine, vibrant interactions.
          </p>
        </div>
        <div className="lg:w-1/2 relative lg:mb-0 mb-5">
          <Image
            src={phoneMessage}
            alt="Hero Image"
            objectFit="cover"
            quality={100}
            className="mx-auto z-30 relative lg:w-[50%] w-[90%]"
          />
          <Image src={messageLine} alt="Message Line" objectFit="cover" quality={100} className="mx-auto absolute message-line top-[10%] -ml-[50px] -rotate-45 lg:rotate-0 lg:-top-[10%] lg:-ml-[30px] z-10" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
