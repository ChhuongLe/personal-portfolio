import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles.jsx';


export default function Hero() {
  const [text, count] = useTypewriter({
    words: ["Welcome! My name is Chhuong!",
            "Guy-that-loves-keyboards.jsx",
            "<LovesToCode />"],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://lh3.googleusercontent.com/IeoI3GVtxbvPn8EKYN6Onec1m2VhBcI2HHI8V398Hf0XkmikPgxlxOHGKq533K3mYkwDFFuauCTSUqwpEKShEwpRja7lKdZ6YL2fRTLWZxJsUBipY5NkQG9J8gYSlDYsuy0F6SQO4Nc=w2400"
        alt="Picture of me"
        width={500}
        height={500}
        className="relative rounded-full h-32 w-32 mx-auto object-cover"/>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[15px]">Software Engineer</h2>
        <h1 className="text-md sm:text-2xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor = "#A27B5C" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}