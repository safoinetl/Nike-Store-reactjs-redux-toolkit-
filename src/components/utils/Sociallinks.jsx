import React from "react";

const Sociallinks = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 flex items-center cursor-pointer md:h-6 md:w-6 sm:h-5 sm:w-5 transition-all duration-200 hover:scale-150"
      />
    </>
  );
};

export default Sociallinks;
