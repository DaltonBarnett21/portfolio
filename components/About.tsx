import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 hidden md:flex uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        height={15}
        width={15}
        viewport={{ once: true }}
        src="/aboutImage.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold mt-16">A little About Me </h4>
        <p className="text-sm md:text-lg">
          Hello, my name is Dalton, I have a bachelors in Computer Science and I
          have been coding professional for 2 years now. My journey started at
          Amazon as a Data Analyst, where I would code Visual Basic scripts with
          Excel, as well as python scripts to interact with internal Amazon
          APIs. This experience with cookies, HTTP Requests, JSON, and SQL
          pushed me to want to grow and interact with the web even more, so I
          decided that web development was the path I wanted to go. As of today
          I work at National Bus Sales as Web Developer, where I use multiple
          modern technogies such as React, Next.js, Express, Node, SQL, mongoDB,
          and many others to build and deploy websites. Please feel free to
          reach out and thank you for visiting my page!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
