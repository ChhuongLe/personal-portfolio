import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles(){
  return (
    <motion.div
    intitial={{
      opacity: 0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius:["20%", "20%", "50%", "80%", "20%"]
    }}
    transtion={{
      duration: 3,
    }}
    className="relative flex justify-center items-center">
      <div className="absolute border border-[#A27B5C]/20 rounded-full h-[200px] w-[200px] mt-52 animate-ping-slow"/>
      <div className="absolute border border-[#A27B5C]/20 rounded-full h-[300px] w-[300px] mt-52 animate-ping-slow"/>
      <div className="absolute border border-[#A27B5C]/20 rounded-full h-[500px] w-[500px] mt-52 animate-ping-slow"/>
      <div className="absolute border border-[#DCD7C9] rounded-full opacity-20 h-[350px] w-[350px] sm:h-[600px] sm:w-[600px] xl:w-[650px] xl:h-[650px] mt-52 animate-pulse"/>
      <div />
    </motion.div>
  )
}