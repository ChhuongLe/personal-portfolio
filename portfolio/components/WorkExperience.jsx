import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { sanityClient } from "../sanity";

export default function WorkExperience({ experience }){
  let data = experience;
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transtion={{duration:1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#DCD7C9]">
        {data.map((el)=>{
          return (
            <ExperienceCard
              key={el._id}
              title={el.title}
              companyName={el.companyName}
              image={el.companyImage}
              dateStarted={el.dateStarted}
              dateEnded={el.dateEnded}
              isCurrentlyWorkingHere={el.isCurrentlyWorkingHere}
              points={el.points}
              technologies={el.technologies}
              />
            )
        })}
      </div>
    </motion.div>
  )
}

