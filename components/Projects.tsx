import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-12 uppercase teacking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>
      <div className="w-full flex justify-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <h2>Coming soon...</h2>
      </div>
    </div>
  );
};

export default Projects;
