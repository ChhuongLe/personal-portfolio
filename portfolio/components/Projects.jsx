import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MediumClone from '../public/Medium.png';

export default function Projects() {
  const projects = [1,2,3,4,5]
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20" >
        {projects.map((projects, i)=>{
          return (
            <div className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44">
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
                <Image src={MediumClone}  />
              </motion.div>
            <div>
              <h4>Project {i+1}: Medium Clone</h4>
            </div>
          </div>
          )
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}