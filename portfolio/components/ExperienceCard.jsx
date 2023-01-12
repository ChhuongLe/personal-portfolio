import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { SiCplusplus } from 'react-icons/si'

export default function ExperienceCard({title, companyName, image, dateStarted, dateEnded, isCurrentlyWorkingHere, points}) {

  return (
    <article className=" hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.div
        initial={{
          y:-100,
          opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{once: true}}
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 overflow-hidden"
      >
        <Image src={image}
        width={150}
        height={150}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">{title}</h4>
          <p className="font-bold text-2xl mt-1">{companyName}</p>
          <div className="flex space-x-2 my-2">
            <div className=" rounded-full">
              <SiCplusplus size="2em"/>
            </div>
          </div>
          <p className="uppercase py-5 text-gray-300">{dateStarted} - {dateEnded}</p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            {points.map((point) => {
              return (
                <li>{point}</li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </article>
  )
}