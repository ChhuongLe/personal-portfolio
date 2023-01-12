import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Skill({icon}) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x:0
        }}
      >
        <Image src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="" width={50} height={50}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"/>
      </motion.div>
      <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">85%</p>
        </div>
      </div>

    </div>
  )
}