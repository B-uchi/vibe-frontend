import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSideMennu, setSHowSideMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > window.innerHeight - 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const showSideMenu = () => {
    setSHowSideMenu(!showSideMennu);
  };

  return (
    <nav
      className={`fixed top-0 z-30 w-full ${
        isScrolled ? "bg-[#313131] shadow-lg" : "bg-transparent"
      }`}
    >
      {showSideMennu && (
        <div className="absolute h-[100vh] bg-[#444444] text-white w-[75%] z-50 border-r-[1px] border-r-[#353535] p-5 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="text-2xl -mb-2 font-rowdies font-extrabold">
                Vibe
              </h1>
              <small className="font-poppins">
                Start a chat, catch a vibe...
              </small>
            </div>
            <button onClick={() => showSideMenu()}>
              <IoMdClose color="red" size={30} />
            </button>
          </div>
          <div className="">
            <ul className="flex flex-col">
              <li className="border-b-[1px] border-b-[#313131] py-3">
                <Link href="/#home" onClick={()=>{setSHowSideMenu(false)}}>
                  <MenuItem text="Home" bold={true}/>
                </Link>
              </li>
              <li className="border-b-[1px] border-b-[#313131] py-3">
                <Link href="/#features" onClick={()=>{setSHowSideMenu(false)}}>
                  <MenuItem text="About" bold={true}/>
                </Link>
              </li>
              <li className="py-3">
                <Link href="/#contact" onClick={()=>{setSHowSideMenu(false)}}>
                  <MenuItem text="Contact" bold={true}/>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <small className="font-rowdies">&copy; Vibe 2024.</small>
          </div>
        </div>
      )}
      <div className="container mx-auto p-2 py-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center font-rowdies">
            {" "}
            <button className="block md:hidden" onClick={() => showSideMenu()}>
              <IoMdMenu color="white" size={25} />
            </button>
            <h1 className="text-white  font-bold lg:text-xl text-2xl">Vibe</h1>
          </div>
          <div className="">
            <ul className=" space-x-6 hidden md:flex">
              <li>
                <Link href="/#home">
                  <MenuItem text="Home" />
                </Link>
              </li>
              <li>
                <Link href="/#features">
                  <MenuItem text="About" />
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <MenuItem text="Contact" />
                </Link>
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
