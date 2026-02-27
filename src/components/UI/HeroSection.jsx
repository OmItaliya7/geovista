
// import { memo } from "react";
import React, { memo } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="text-white min-h-96 py-16 sm:py-20 lg:py-24 flex items-center ">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-16 ">

        {/* LEFT */}
        <div className="flex-1 text-center md:text-left space-y-6">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Explore the World, One Country at a Time
          </h1>

          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            Discover the history and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          
          <NavLink to="/country">
          <button className="border border-white px-6 py-2 rounded-lg transition hover:bg-white hover:text-black flex items-center gap-2 mx-auto md:mx-0 ">
            Start Exploring
            <FaLongArrowAltRight className="text-sm mt-1" />
          </button>
          </NavLink>

        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <img
            src="./pictures/world.webp"
            alt="World Image"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
          />
        </div>

      </div>

    </main>
  );
};

// export default HeroSection;
export default React.memo(HeroSection);
