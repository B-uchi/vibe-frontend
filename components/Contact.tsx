const Contact = () => {
  return (
    <section id="contact" className="font-poppins py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col justify-evenly items-center lg:px-[90px]">
          <div className="lg:w-1/2 space-y-6">
            <div>
              <span className="inline-block px-4 py-1 bg-gray-100 backdrop-blur-sm rounded-full text-sm font-medium text-[#313131]">
                📨 Get in Touch
              </span>
              <h1 className="text-5xl font-bold mt-4 text-[#313131]">
                Let&apos;s Start a <br />
                Conversation
              </h1>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Have questions or suggestions? We&apos;d love to hear from you. 
              Our team is always here to help make your experience better.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-[#313131]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-600">support@vibe.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-[#313131]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-600">Somewhere on, Earth</span>
              </div>
            </div>
          </div>

          <form className="lg:w-1/2 w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl space-y-6 mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#313131] focus:border-transparent transition duration-200 outline-none"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#313131] focus:border-transparent transition duration-200 outline-none"
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#313131] focus:border-transparent transition duration-200 outline-none"
                type="text"
                id="subject"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#313131] focus:border-transparent transition duration-200 outline-none resize-none"
                id="message"
                rows={5}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              className="w-full bg-[#313131] text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#313131]"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
