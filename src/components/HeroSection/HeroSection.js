import React from "react";
import ProfileImage from "@site/static/img/img.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 h-min-screen flex flex-col items-center justify-center ">
      <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 flex flex-col items-center">
        <img
          alt="name"
          src={ProfileImage}
          className="h-48 w-48 rounded-full object-cover object-[69%] mb-8"
        />

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  text-white">
          Hi, I am <br />
          <p className=" mt-4 md:text-5xl lg:text-6xl"> Rohan Maharjan</p>
        </h1>
        <h3 className="mb-4 text-xl font-bold tracking-tight leading-none text-gray-400 md:text-xl lg:text-xl dark:text-gray-400">
          Full Stack Web developer
        </h3>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Experienced web developer with a strong track record in frontend and
          backend development, adept at creating seamless online experiences.
        </p>
        {/* <div className="flex flex-col mb-4 lg:mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-yellow-300  focus:ring-4 focus:ring-gray-100 hover:no-underline hover:bg-[#3cad6e]">
            View Resume
          </button>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            CONTACT ME
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="https://github.com/rohanmaharjan100"
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4 border border-gray-900 rounded-xl hover:scale-105 hover:text-[#25c2a0] "
            >
              <FontAwesomeIcon icon={faSquareGithub} className="h-16" />
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-maharjan-98307a230/"
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4  rounded-xl hover:text-[#25c2a0] hover:scale-105"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-16" />
            </a>
            <a
              href="https://www.facebook.com/rohan.maharjan.7796420/"
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4 rounded-[50%] hover:text-[#25c2a0] hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareFacebook} className="h-16" />
            </a>
            <a
              href="
              https://mail.google.com/mail/?view=cm&fs=1&to=rohanmaharjan100@gmail.com
              "
              target="_blank"
              rel="noreferrer noopener"
              className=" mx-4  rounded-xl hover:text-[#25c2a0] hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-16" />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
