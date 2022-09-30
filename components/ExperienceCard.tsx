import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  subTitle?: string;
  dates?: string;
  duties?: any[];
};

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-zinc-800 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/me.jpg"
        alt="image logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of papafam</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        {/* <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/aboutImage.jpg"
            alt="some image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/aboutImage.jpg"
            alt="some image"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/aboutImage.jpg"
            alt="some image"
          />
        </div> */}
        <p className="uppercase py-5 text-gray-300">Started work... ended...</p>
        <ul className=" list-disc space-y-4 ml-5 text-lg">
          <li>sumary</li>
          <li>sumary</li>
          <li>sumary</li>
          <li>sumary</li>
          <li>sumary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
