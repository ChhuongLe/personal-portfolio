import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { SiCplusplus } from 'react-icons/si'

export default function ExperienceCard() {
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
        <Image src="https://i0.wp.com/anda.us/wp-content/uploads/2021/08/Anda-Logo.png?fit=300%2C100&ssl=1"
        width={150}
        height={150}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Applications Engineer</h4>
          <p className="font-bold text-2xl mt-1">Anda Technologies, USA</p>
          <div className="flex space-x-2 my-2">
            <div className=" rounded-full">
              <SiCplusplus size="2em"/>
            </div>
          </div>
          <p className="uppercase py-5 text-gray-300">Aug 2019 - May 2021</p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Engineering lead of Anda's R&D department</li>
            <li>Head developer of data analysis application that is used in tandem with thermal profiler</li>
            <li>Designed and implemented autonomous firmware on current industry leading fume extraction unit</li>
            <li>Lead clinics and classes training hundreds of clients and employees on how to efficiently use Anda products</li>
            <li>Performed routine maintainence on Anda products to ensure longevity</li>
          </ul>
        </div>
      </motion.div>
    </article>
  )
}