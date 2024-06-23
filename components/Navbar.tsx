const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full p-2 py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            {" "}
            <h1 className="text-white font-rowdies lg:text-xl text-2xl">Vibe</h1>
          </div>
          <div className="">
            <ul className=" space-x-6 hidden md:flex">
              <li className="text-white font-poppins cursor-pointer">Home</li>
              <li className="text-white font-poppins cursor-pointer">About</li>
              <li className="text-white font-poppins cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="">
            <button className="bg-white text-black lg:px-4 lg:py-2 text-sm lg:text-xl px-2 py-2 rounded-lg font-poppins">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
