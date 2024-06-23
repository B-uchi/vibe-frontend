const Contact = () => {
  return (
    <section id="contact" className="font-poppins py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="mx-auto mb-5 lg:mb-0 lg:text-left text-center">
            {" "}
            <h1 className="text-4xl font-bold">
              Contact Us
            </h1>
            <p>Send a mail to the team. We&apos;ll get back soon...</p>{" "}
          </div>
          <form className="w-full mx-auto max-w-lg bg-gray-100 p-6 rounded-lg shadow-lg">
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
                className="w-full bg-[#313131] text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
