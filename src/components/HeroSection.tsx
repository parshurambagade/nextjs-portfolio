"use client";
import React from 'react'
import { Button } from "@/components/ui/moving-border";
import Link from 'next/link';
import { WavyBackground } from "@/components/ui/wavy-background";

const HeroSection = () => {
  return (
    <WavyBackground className="flex flex-col justify-center items-center min-h-screen h-full w-full flex-wrap my-4 md:my-0  lg:py-8 px-4 md:px-20 lg:px-28">
      <h1 className='md:text-8xl  text-6xl lg:text-8xl font-bold text-wrap my-8 text-center text-white'>Parshuram Bagade</h1>
      <p className='text-center lg:text-2xl lg:w-2/3 tracking-wide dark:text-slate-200 text-slate-200'>Frontend Developer | React.js | Next.js | Node.js | MERN</p>

      <div className="flex my-8 gap-4">
        <Link href={"/#contact "}>
          <Button
            borderRadius="1.75rem"
            className="bg-slate-900/[.8] dark:bg-slate-900/[.8] text-white dark:text-white border-slate-800 dark:border-slate-800 text-lg"
          >
            Let&apos;s Chat 
          </Button>
        </Link>
        <Link href="https://bit.ly/parshuram-resume" target="_blank" rel="noopener noreferrer">
          <Button
            borderRadius="1.75rem"
            className="bg-white/[.8] dark:bg-white/[.8 ] text-black dark:text-black border-slate-800 dark:border-slate-800 text-lg"
          > 
            Download CV
          </Button>
        </Link>
      </div>
    </WavyBackground>
  )
}

export default HeroSection