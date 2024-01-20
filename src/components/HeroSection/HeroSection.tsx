import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 h-screen my-0 flex flex-col items-center justify-center ">
      <div className=" px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-12 flex flex-col items-center">
        <img
          alt="name"
          src="/img/IMG_1953.jpg"
          className="h-64 w-64 rounded-full object-cover mb-8"
        />

        <h3 className="mb-4 text-xl font-bold tracking-tight leading-none text-gray-400 md:text-xl lg:text-xl dark:text-gray-400">
          Hi, I am
        </h3>
        <TypeAnimation
          className=" mb-6 md:text-5xl lg:text-6xl  text-3xl font-bold text-[--ifm-color-primary] uppercase "
          sequence={["Rohan Maharjan", 100000]}
          repeat={Infinity}
          cursor={false}
        />
        <h3 className="mb-4 text-xl font-bold tracking-tight leading-none  text-gray-400 md:text-xl lg:text-xl">
          Full Stack Web Developer
        </h3>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          I'm a Full-Stack Web Developer based in Nepal who loves bringing ideas
          to life through design and code. I build reliable and secure web
          applications for you.
          <br />
          <span className="text-[--ifm-color-primary-lighter]">
            Let's turn your digital vision into reality!
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
