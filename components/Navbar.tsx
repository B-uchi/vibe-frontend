import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > window.innerHeight-20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 z-30 w-full p-2 py-3 ${
        isScrolled ? "bg-[#313131] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            {" "}
            <h1 className="text-white font-rowdies font-bold lg:text-xl text-2xl">
              Vibe
            </h1>
          </div>
          <div className="">
            <ul className=" space-x-6 hidden md:flex">
              <li className="text-white font-poppins cursor-pointer">
                <MenuItem text="Home" />
              </li>
              <li className="text-white font-poppins cursor-pointer">
                <MenuItem text="About" />
              </li>
              <li>
                <MenuItem text="Contact" />
              </li>
            </ul>
          </div>
          <div className="">
            <button className="bg-white text-black lg:px-4 lg:py-2 text-sm lg:text-[16px] px-2 py-2 rounded-lg font-poppins">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
