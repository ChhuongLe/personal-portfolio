import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '../sanity';

export default function Skill({ skill }) {
  const image = skill.image;
  const progress = skill.progress;
  const title = skill.title;
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0,
          x: -100
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x:0
        }}
        >
        <Image src={urlFor(skill.image).url()} alt='' width={50} height={50}
        className="rounded-full border border-gray-500 object-cover w-14 h-14 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"/>
      </motion.div>
      <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm md:text-lg xl:text-2xl font-bold text-black opacity-100">{progress}%</p>
          <p className="hidden md:block md:text-md xl:text-xl font-bold text-black opacity-100">{title}</p>
        </div>
      </div>
    </div>
  )
}