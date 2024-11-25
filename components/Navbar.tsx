import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <nav
      className={`fixed top-0 z-30 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#313131]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Side Menu for Mobile */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          showSideMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSideMenu}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          showSideMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-2xl font-rowdies font-bold text-[#313131]">
                Vibe
              </h1>
              <p className="text-sm text-gray-600 font-poppins">
                Start a chat, catch a vibe...
              </p>
            </div>
            <button
              onClick={toggleSideMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <IoMdClose className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <ul className="space-y-2">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  onClick={toggleSideMenu}
                  className="flex py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <MenuItem text={item} bold={true} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 w-full p-6 border-t">
          <p className="text-sm text-gray-500 font-rowdies">&copy; Vibe 2024</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
              onClick={toggleSideMenu}
            >
              <IoMdMenu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <h1 className="font-rowdies font-bold text-2xl text-white">
                Vibe
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className={`font-medium hover:text-gray-900 transition-colors ${
                      isScrolled ? "text-gray-700" : "text-white"
                    }`}
                  >
                    <MenuItem text={item} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="https://vibe-chat-react.vercel.app/sign-in"
            className="inline-flex"
          >
            <button
              className="
              px-6 py-2.5 rounded-full font-medium transition-all duration-300
                bg-white text-[#313131] hover:bg-gray-100"
            >
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
