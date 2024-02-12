import React from "react";
import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <FaCode className="text-xl" />
      <h2 className="font-bold font-montserrat text-lg max-[280px]:text-sm uppercase">
        <span className="text-blue-800">M</span>onye{" "}
        <span className="text-blue-800">J</span>ude
      </h2>
    </div>
  );
};
export default Logo;
