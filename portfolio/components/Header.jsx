import { React, useState } from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'
import { CiCircleRemove } from 'react-icons/ci'

export default function Header () {
  const [isClick, setClick] = useState(false);

  let dropDownMenu;

  const handleClick = () => {
    setClick(!isClick)
  }
  if(isClick === true) {
    dropDownMenu = (
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x:0,
              opacity: 1,
            }}
            transition={{ duration:0.3,}}
            className="absolute bg-[#A27B5C]/90 h-[300px] w-[150px] right-0 top-2 z-20 p-2 rounded-sm cursor-default">
            <button className="absolute right-2 top-5 text-2xl" onClick={handleClick}><CiCircleRemove size={25}/></button>
            <div className="absolute flex flex-col space-y-5 top-[50px] left-[25px]">
              <Link href="#hero" className="navElement">Main Page</Link>
              <Link href="#about" className="navElement">About</Link>
              <Link href="#experience" className="navElement">Experience</Link>
              <Link href="#skills" className="navElement">Skills</Link>
              <Link href="#projects" className="navElement" >Projects</Link>
            </div>
          </motion.div>
    )
  }

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center">
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 0.5,
      }}
       className="flex flex-row items-center">
        <SocialIcon
          url="https://github.com/chhuongle"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/chhuongle"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/supawok/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
         initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.5
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer space-x-2 mr-2">
        {dropDownMenu}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-grey-400">Get in touch</p>
        </Link>
        <AiOutlineMenu size={20} style={{opacity:"0.5"}} className="sm:hidden" onClick={handleClick}/>
      </motion.div>
    </header>
  )
}