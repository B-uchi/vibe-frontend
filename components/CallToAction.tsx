import React from "react";
import Image from "next/image";
import clipMan from "../public/clipman.png";
import BouncingText from "./BouncingText";

const CallToAction = () => {
  return (
    <div className="h-[100vh] hidden lg:lfex bg-white justify-center items-center">
      <BouncingText />
    </div>
  );
};

export default CallToAction;
