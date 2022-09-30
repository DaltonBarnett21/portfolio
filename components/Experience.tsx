import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 uppercase teacking-[20px] text-gray-400 text-2xl">
        Experience
      </h3>
      <div className="w-full mt-24 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <article className="flex flex-col h-[600px] rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-zinc-800 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover "
            src="/Amz.jpg"
            alt="image logo"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Data Analyst</h4>
            <p className="font-bold text-2xl mt-1">Amazon</p>
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
            <p className="uppercase py-5 text-gray-300">
              March 2021 - March 2022
            </p>
            <ul className=" list-disc space-y-4 ml-5 text-lg">
              <li>
                Gathers and reports data to senior operation managers in
                PowerPoint format
              </li>
              <li>
                Mines data using standard SQL query’s for more accurate Data
              </li>
              <li>
                Creates VBA macros by using multiple data sets for a better
                overview of metrics
              </li>
              <li>Debugs and maintains Excel VBA Macros</li>
              <li>Creates webhooks for Amazon Chime chat rooms using Python</li>
            </ul>
          </div>
        </article>
        <article className="flex flex-col h-[1000px] rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-zinc-800 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover "
            src="/nbs.png"
            alt="image logo"
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Web Developer</h4>
            <p className="font-bold text-2xl mt-1">National Bus Sales</p>
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
            <p className="uppercase py-5 text-gray-300">March 2022 - Present</p>
            <ul className=" list-disc space-y-4 ml-5 text-lg">
              <li>
                Creates scalable react apps using the next js framework for
                server side rendering
              </li>
              <li>
                Creates api endpoints in express and node js to handle customer
                form submissions to MongoDB
              </li>
              <li>
                Creates Node js server files to create subscriber lists via
                Aweber api
              </li>
              <li>
                Runs SQL query’s on Microsoft SQL Server, as well as creates
                tables for basic customer information or events
              </li>
              <li>
                Uses excel to gather data from Google analytics for tracking
                form conversions and SEO Optimization.
              </li>
              <li>
                Sets up digital ocean Linux servers on Ubuntu distributions
              </li>
              <li>Uses PM2 and NGINX for deployment</li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default Experience;
