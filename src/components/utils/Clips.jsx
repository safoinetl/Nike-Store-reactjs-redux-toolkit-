import React from "react";
import { PlayIcon } from "@heroicons/react/16/solid";
const Clips = ({ imgsrc, clip }) => {
  return (
    <>
      <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 hover:scale-150 hover:m-2">
        <img
          src={imgsrc}
          alt="img/clips"
          className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl  z-10 transition-opacity duration-500 opacity-70 "
        />
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute right-0 left-0 top-0 flex h-full w-full  object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
