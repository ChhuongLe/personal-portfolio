import Image from 'next/image';
import Link from 'next/link';
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
      <div className="relative mt-16 sm:mt-0 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400 scrollbar-thumb-[#DCD7C9]" >
        {projects.map((project, i)=>{
          return (
            <div key={i} className= "w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44">
              <motion.div
                initial={{
                  y:-200,
                  opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }}
                viewport={{ once: true }}
              >
              <Image src={project.image} alt='' width={1000} height={1000} />
              </motion.div>
            <div>
              <Link href={project.link} className="cursor-pointer hover:underline">
                <h4 className="text-lg md:text-2xl xl:text-4xl font-bold">Project {i+1}: {project.title}</h4>
              </Link>

              <div className="flex flex-row">
                {project.technologies.map((tech)=>{
                  return (
                    <Image key={tech._id} src={urlFor(tech.image).url()} alt='' width={50} height={50} className="rounded-full border border-gray-500 w-6 h-6 md:w-7 md:h-7 xl:w-10 xl:h-10 mr-1 my-2"/>
                  )
                })}
              </div>
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