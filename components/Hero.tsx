import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Avatar from "../public/me.jpg";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Dalton", "I-love-music.tsx", "<ILoveProgramming/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircle />

      <Image
        className="relative  rounded-full "
        height={250}
        width={250}
        src={Avatar}
        objectFit="cover"
        alt="Dalton Avatar"
      />
      <div>
        <h2 className=" z-20 text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <div className="pt-5 mt-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
