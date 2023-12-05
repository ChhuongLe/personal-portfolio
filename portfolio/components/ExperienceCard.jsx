import {React} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { SiCplusplus } from 'react-icons/si'
import { urlFor } from '../sanity';

export default function ExperienceCard({title, companyName, image, dateStarted, dateEnded, isCurrentlyWorkingHere, points, technologies}) {
  let tech;

  if(technologies !== null && technologies !== undefined){
    tech = technologies.map((el)=>{
      return (
        <Image key={el._id} src={urlFor(el.image).url()} alt='' width={30} height={30} className="mr-2 w-5 h-5 md:w-8 md:h-8 xl:w-12 xl:h-12"/>
      )

    })
  }
  return (
    <div className=" hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
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
        className="mt-20 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] h-[520px] md:w-[500px] md:h-[600px] xl:w-[600px] xl:h-auto xl:overflow-hidden snap-center bg-[#292929] p-10 overflow-scroll"
      >
        <Image src={image}
        alt=''
        width={150}
        height={150}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" />
        <div className="px-0 md:px-10">
          <h4 className="text-md md:text-2xl xl:text-4xl font-light">{title}</h4>
          <p className="font-bold text-sm md:text-lg xl:text-2xl mt-1">{companyName}</p>
          <div className="flex flex-row">
            {tech}
          </div>
          <div className="flex space-x-2 my-2">
          </div>
          <p className="uppercase text-sm md:text-lg xl:text-2xl text-gray-300">{dateStarted} - {dateEnded}</p>
          <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg xl:text-2xl">
            {points.map((point, i) => {
              return (
                <li key={i}>{point}</li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}