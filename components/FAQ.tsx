import Accordion from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Vibe?",
      answer:
        "Vibe is a social networking app designed to help you start a chat and catch a vibe with new people. It's a platform where you can connect, communicate, and build relationships based on shared interests and vibes.",
    },
    {
      question: "How do I get started with Vibe?",
      answer:
        "Getting started with Vibe is easy! Simply download the app, create an account, and complete your profile. Once your profile is set up, you can start browsing and chatting with other users to catch a vibe.",
    },
    {
      question: "Is my data safe on Vibe?",
      answer:
        "Yes, your data is safe on Vibe. We prioritize user privacy and security by implementing robust security measures and adhering to strict data protection protocols. Your personal information is protected and will not be shared without your consent.",
    },
  ];
  return (
    <section className="h-[100vh] bg-gray-100 border-t-[1px] border-t-[#e1e1e1] flex justify-center items-center pt-10">
      <div className="">
        <h1 className="font-poppins text-center font-bold text-xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-10">
          <Accordion faqs={faqs}/>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
