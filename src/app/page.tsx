import React from 'react'
import { cn } from "@/utils/cn";
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import WhyChooseMe from '@/components/WhyChooseMe';
import SkillsTabs from '@/components/SkillsTabs';
import { Contact } from '@/components/Contact';

const page = () => {
  return (
    <main className='bg-black dark:bg-black w-full min-h-screen h-max relative overflow-hidden'>
      <HeroSection/>
      <FeaturedProjects/>
      <SkillsTabs />
      <WhyChooseMe/>
      <Contact /> 
    </main>
  )
}

export default page