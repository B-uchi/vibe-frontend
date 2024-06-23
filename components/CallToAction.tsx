import React from "react";
import BouncingText from "./BouncingText";

const CallToAction = () => {
  return (
    <div className="h-[100vh] bg-gray-100">
      <div className="h-[50%] w-full"></div>
      <div className="h-[50%] bg-white border-t-[2px] border-[#e1e1e1] flex justify-center items-center">
        <BouncingText/>
      </div>
      {/* <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form className="w-full max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="email"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                id="subject"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                id="message"
                rows={5}
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-700">123 Street, City, Country</p>
            <p className="text-gray-700">Email: info@example.com</p>
            <p className="text-gray-700">Phone: +123 456 7890</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CallToAction;
