import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MediumClone from '../public/Medium.png';
import { urlFor } from '../sanity';

export default function Projects({ projects }) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="flex relative h-screen overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#DCD7C9]" >
        {projects.map((project, i)=>{
          return (
            <div key={i} className= "w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44">
              <motion.div
                initial={{
                  y:-300,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }}
                viewport={{ once: true }}
              >
                <Image src={project.image} width={1000} height={1000} />
              </motion.div>
            <div>
              <h4 className="text-2xl">Project {i+1}: {project.title}</h4>
              <p className="text-sm md:text-lg xl:text-2xl">{project.summary}</p>
            </div>
          </div>
          )
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}