import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center ml-40">
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">
            The Best Tech,
            <br />
            <span className="font-light">Best Future</span>
          </h1>
          <Link
            to={"/products"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Buy Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
