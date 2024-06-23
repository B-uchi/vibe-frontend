import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#313131] text-white p-3 py-4 font-poppins">
      <div className="container">
        <div className="flex justify-between items-center">
          <p>&copy; <span className="font-rowdies font-bold">Vibe</span> 2024</p>
          <div className="flex space-x-4">
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
