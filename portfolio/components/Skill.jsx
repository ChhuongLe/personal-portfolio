import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Skill() {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
        }}>
        <Image src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" width={50} height={50}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"/>
      </motion.div>
      <div>

      </div>
    </div>
  )
}