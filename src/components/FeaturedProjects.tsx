"use client";
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import projectsData from "@/data/projectsData.json";
import Link from 'next/link';

interface Project{
    id: number,
    title: string,
    subtitle: string,
    img: string,
    type: string,
    desc: string[],
    liveUrl?: string,
    codeUrl: string,
    techstack: string[], 
    isFeatured: boolean,   
}

const FeaturedProjects = () => {

    // console.log(data);

    const featuredProjects = projectsData.projects.filter((project:Project) => (project.isFeatured));
  // console.log(featuredProjects);
  return (
    <div id='projects' className='min-h-screen w-full bg-gray-900/[.5]  py-4 md:py-12  px-2 md:px-12 lg:px-20'>
        <div className='mt-16 mb-12'>
            <h2 className='text-4xl md:text-5xl text-center text-cyan-500 font-bold my-4'>Featured Projects</h2>
            <p className='text-center'>Here is a list of my highlighted work.</p>
        </div>

        <div className='w-full flex  flex-wrap flex-col md:flex-row justify-evenly gap-8 md:gap-16 lg:gap-8   '>
        {featuredProjects.map((project:Project) => (
          <div key={project.id} className='w-full md:w-3/4 lg:w-[24rem] h-full'>
          <BackgroundGradient className="rounded-[22px] h-full max-w-full  p-4 py-6 sm:p-6 bg-zinc-900 dark:bg-zinc-900">
          <Image
            src={`${project.img}`}
            alt="screenshot"
            height="400"
            width="400"
            className="object-contain md:w-full"
          />
  
          <div className='my-4'>
          <h4 className=" text-base sm:text-xl font-bold text-neutral-200  dark:text-neutral-200 my-2">
            {project.title}
          </h4>
          
    
          <div className='flex flex-col gap-2'>
            {project.desc.map((line: string, i: number) => (
            <p key={i} className="list-item  ml-6 md:ml-3 text-sm text-neutral-400 dark:text-neutral-400">
            {line}
            </p>))}
          </div>
          <div className='flex gap-2 flex-wrap my-4 text-gray-400 text-xs'>{project.techstack.map((tech:string, i:number) => (<p key={i} className='border border-gray-700 bg-slate-800/[.5] py-1 px-2 rounded-xl'>{tech}</p>))}</div>
          </div>
  
          <div className='flex justify-evenly md:justify-between mt-6 '>
              <Link href={project.codeUrl} className="flex text-sm items-center underline underline-offset-4  font-normal pr-4 py-2 bg-transparent text-gray-400 hover:text-cyan-200 rounded-lg transform hover:-translate-y-1 transition duration-400">
              <span className='mr-[.3rem]'>Code</span><FaGithub />
  </Link>
          <Link href={project.liveUrl || "/"} className="hover:text-cyan-200 text-sm inline-flex h-max animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] py-2 px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className='mr-2'>Live</span> <FiExternalLink />
          </Link>
          </div>
  
        
        </BackgroundGradient>
          </div>
        ))}
        
        
        </div> 
              <div className='flex justify-center my-0 md:my-8 text-gray-400'>

        <Link href={"/projects"} className="p-[3px] mt-16 mb-8 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg" />
  <div className="px-4 lg:px-8 py-2   lg:py-4  bg-black rounded-[6px]  relative group transition duration-200 text-base lg:text-xl text-white  hover:text-black hover:bg-transparent">
  View all projects
  </div>
</Link>
              </div>
    </div>
  )
}

export default FeaturedProjects