import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#212121] text-white  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>Daltons Introduction</title>
        <meta
          name="description"
          content="Created with love by Dalton Barnett"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* <section id="skills" className="snap-start">
        <Skills />
      </section> */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-center ">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
