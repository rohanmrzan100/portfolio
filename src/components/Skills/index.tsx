import React from "react";
import { TypeAnimation } from "react-type-animation";
const Skill = () => {
  const skills = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    // "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "https://docusaurus.io/img/docusaurus.svg",
    // "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  ];
  return (
    <div className="md:m-8 lg:m-8 h-min-screen ">
      <h1 className="bold  my-16 text-left md:text-6xl lg:text-7xl  text-5xl ">
        Favourite Tech Stack
        {/* <span className=" text-[--ifm-color-primary] "> Stack</span> */}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div className="bg-white p-8 rounded-lg  " key={index}>
            <img
              className="h-auto max-w-full rounded-lg hover:scale-125 "
              src={skill}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
