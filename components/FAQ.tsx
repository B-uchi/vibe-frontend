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
    {
      question: "What makes Vibe different from other chat apps?",
      answer: 
        "Vibe stands out with its unique focus on authentic connections and shared interests. Our advanced matching algorithm and intuitive interface make it easier than ever to find and connect with like-minded people.",
    },
    {
      question: "Is Vibe available worldwide?",
      answer:
        "Yes! Vibe is available globally, connecting people across different countries and cultures. Our platform supports multiple languages and provides a seamless experience regardless of your location.",
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 bg-gray-100 backdrop-blur-sm rounded-full text-sm font-medium text-[#313131]">
            ❓ Got Questions?
          </span>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-[#313131]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about Vibe. Can't find what you're looking for? 
            Feel free to reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion faqs={faqs} />
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-[#313131] text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
