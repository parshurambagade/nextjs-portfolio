import React from 'react'
import { Button } from "@/components/ui/moving-border";
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen h-full w-full flex-wrap my-8 md:my-0  lg:py-8 px-4 md:px-20 lg:px-28">
        <h1 className='md:text-8xl  text-6xl lg:text-8xl font-bold text-wrap my-8 md:text-center'>Parshuram Bagade</h1>
        <p className='md:text-center lg:text-xl lg:w-2/3 tracking-wide'>Building dynamic and user-centric web experiences through front-end development and full-stack proficiency. I leverage the power of ReactJS, Node.js, and cutting-edge technologies to bring your vision to life. Let&apos;s collaborate!</p>

        <div className="flex my-8">
        {/* <Link href={"/"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Download CV
      </Button>
      </Link> */}

      <Link href={"/"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg"
      >
        Hire me
      </Button>
      </Link>
        </div>
      </div>
  )
}

export default HeroSection