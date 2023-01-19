import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Skill from './Skill';
import { urlFor } from '../sanity';

export default function Skills({ skills }) {
  let data = skills;
  return(
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">hover over a skill to see my current proficiency</h3>
      <div className="grid grid-cols-4 gap-3 md:grid-cols-4 md:gap-5">
        { data.map((skill)=>{
          return(
            <Skill key={skill._id} skill={skill} />
          )
        })}
      </div>
    </motion.div>
  )
}