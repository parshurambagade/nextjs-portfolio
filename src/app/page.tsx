import React from 'react'
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import HeroSection from '@/components/HeroSection';

const page = () => {
  return (
    <main className='w-full min-h-screen h-max relative'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection/>
    </main>
  )
}

export default page