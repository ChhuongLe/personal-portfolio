import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <Image
          src="https://lh3.googleusercontent.com/oysLeSyXo3URGfIuht9ZZCA9O8a7F9KbRMUUqH8WHm9AfFmd2-uSW2mr2DB4KP4adXri_0d2km0saICBtyD-Cole01IE5M2zbMZoEbltlj9hajDR4bJGahdtRIcZaMRUJa3XmfocHek=w2400"
          width={500}
          height={500}
          className="mb-20 md:mb-0 w-56 h-56 rounded-full relative mx-auto object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">My background</h4>
          <p className="text-base">
            My name is Chhuong (pronounced "CHONG"). I am a former Applications Engineer that came from an industry leading automation comapany. I have transitioned my carrer path towards software development and could not be happier with my choice. I have several years of experience as an application developer with my previous company and have made my own full stack applications to grow with the always expanding industry. In my hours away from the computer, I am an avid photographer and cat father to a beautiful ragdoll named Loki.
          </p>
        </div>
      </motion.div>

    </div>
  )
}