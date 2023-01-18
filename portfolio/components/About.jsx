import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';


export default function About () {
  return (
    <div
      className="flex flex-column relative h-screen text-center
      md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{once: true}}
        transition={{duration: 1.2}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 py-10 justify-evenly mx-auto items-center"
      >
        <Image
          src="https://lh3.googleusercontent.com/oysLeSyXo3URGfIuht9ZZCA9O8a7F9KbRMUUqH8WHm9AfFmd2-uSW2mr2DB4KP4adXri_0d2km0saICBtyD-Cole01IE5M2zbMZoEbltlj9hajDR4bJGahdtRIcZaMRUJa3XmfocHek=w2400"
          width={500}
          height={500}
          className="mt-20 mb-5 md:mb-0 md:mt-0 w-56 h-56 rounded-full relative mx-auto object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-1 px-0 md:px-10">
          <h4 className="text-lg md:text-2xl xl:text-4xl font-semibold">My background</h4>
          <p className="text-sm md:text-lg xl:text-2xl">
           Hello! The name's <span className="underline decoration-[#A27B5C]">Chhuong </span>(pronounced "CHONG"). I was a former Applications Engineer for an industry leading automation company where I self taught myself how to code in C++,Python, and PLC ladder logic. I am degreed in Chemical and Environmental Engineering from UC Riverside and a graduate from the rigorous and immersive coding bootcamp Hack Reactor. In my off time, I am a huge keyboard enthusiast constantly looking to improve my set up and cat dad to a beautiful ragdoll named Loki.
          </p>
        </div>
      </motion.div>
    </div>
  )
}