import React from "react";
const Skill = () => {
  return (
    <div className="m-8">
      <h1 className="text-5xl bold m-8 text-center">Skills</h1>
      <div className="grid grid-cols-5 md:grid-cols-5 sm:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt=""
          />
        </div>

        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            alt=""
          />
        </div>
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt=""
          />
        </div>
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt=""
          />
        </div>
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
            alt=""
          />
        </div>

        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt=""
          />
        </div>

        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt=""
          />
        </div>
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://docusaurus.io/img/docusaurus.svg"
            alt=""
          />
        </div>
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
            alt=""
          />
        </div>
        <div className="bg-white p-8 rounded-lg ">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
