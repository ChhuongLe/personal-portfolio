import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import WorkExperience from '../components/WorkExperience.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import ContactMe from '../components/ContactMe.jsx';
import {ChevronDoubleUpIcon} from '@heroicons/react/24/solid';

export default function Home({experience}) {
  return (
    <div
      className="bg-[#2C3639] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#DCD7C9]/80"
    >
      <Head>
        <title>Chhuong's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experience={experience}/>
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-7 w-full">
          <div className="flex items-center justify-center animate-bounce">
            <ChevronDoubleUpIcon className="h-8 w-8 text-[#A27B5C]/40 hover:text-[#DCD7C9] transition druation-150 ease-in-out" />
          </div>
        </footer>
        </Link>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('http://localhost:3000/api/getExperience');
  const experience = await res.json();

  return{
    props: {
      experience,
    }
  };
}