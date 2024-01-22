import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faPen } from "@fortawesome/free-solid-svg-icons";
const EduAndExp = () => {
  return (
    <div className="h-min-screen  lg:m-8">
      <h1 className="bold  my-16 text-left md:text-6xl lg:text-7xl  text-5xl ">
        Qualification
      </h1>

      <div className="flex items-start justify-center flex-col md:flex-row">
        <div className="md:w-[40%] w-[100%]">
          <h1 className=" text-[--ifm-color-primary]  text-left text-2xl mb-16">
            <FontAwesomeIcon icon={faPen} /> Education
          </h1>
          <ul role="list" className="my-8 max-w-screen-md">
            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>
              <h1 className="mt-2 text-sm/6 font-semibold text-white">
                Bachelor's in Computer Engineering
              </h1>
              <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-sky-300">
                Graduated Year 2024
              </p>
              <p className="mt-0.5 text-sm/6 text-zinc-400">
                Kathmandu Engineering College, Tribhuvan University (T.U)
              </p>
            </li>
            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>
              <h1 className="mt-2 text-sm/6 font-semibold text-white">
                High School +2 Science
              </h1>
              <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-sky-300">
                Graduated Year 2019
              </p>
              <p className="mt-0.5 text-sm/6 text-zinc-400">
                Kathmandu BernHardt College, NEB
              </p>
            </li>
            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>
              <h1 className="mt-2 text-sm/6 font-semibold text-white">
                School SEE
              </h1>
              <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-sky-300">
                Graduated Year 2017
              </p>
              <p className="mt-0.5 text-sm/6 text-zinc-400">
                Jyoti Academy, HSEB
              </p>
            </li>
          </ul>
        </div>
        <div className="md:w-[60%] w-[100%]">
          <h1 className=" text-[--ifm-color-primary]  text-left  text-2xl mb-16">
            <FontAwesomeIcon icon={faBriefcase} /> Experience
          </h1>

          <ul role="list" className="my-8 max-w-screen-md">
            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>

              <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-sky-300">
                2023 - Present
              </p>
              <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-[--ifm-color-primary-lighter]">
                Organization : <span className="text-white">Harness</span>
              </p>
              <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-[--ifm-color-primary-lighter]">
                Role : <span className="text-white">Software Engineer</span>
              </p>
              <p className="mt-0.5 text-sm/6 text-zinc-400">
                Spearheaded the addition of new functionalities, ensured
                continuous maintenance of marketing and documentation websites,
                successfully integrated and optimized various third-party
                software solutions (e.g., Scarf and Refiner) into the
                documentation site, and implemented SSO authentication
              </p>
            </li>
            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
              <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
              <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>

              <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-sky-300">
                2021 - 2023
              </p>
              <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-[--ifm-color-primary-lighter]">
                Organization :{" "}
                <span className="text-white">Annapurna Cloud Technology</span>
              </p>
              <p className="font-display text-xl order-first font-semibold tracking-[0.2em] text-[--ifm-color-primary-lighter]">
                Role :{" "}
                <span className="text-white">
                  Junior Fullstack Developer / Intern
                </span>
              </p>
              <p className="mt-0.5 text-sm/6 text-zinc-400  ">
                Developed complex feature modules using React & Next, engineered
                RESTful APIs in Express.js with TypeScript, and integrated with
                databases like MySQL and MongoDB; also participated in
                deployment procedures using Digital Ocean.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EduAndExp;
