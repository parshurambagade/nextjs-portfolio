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
    <div className='min-h-screen w-full bg-gray-900/[.5] py-12  px-2 sm:px-12 lg:px-20'>
        <div className='my-8 mb-12'>
            <h2 className='text-4xl md:text-5xl text-center text-cyan-500 font-bold my-4'>Featured Projects</h2>
            <p className='text-center'>Here is a list of my highlighted work.</p>
        </div>

        <div className='w-full flex  flex-wrap flex-col md:flex-row justify-evenly gap-8'>
        {featuredProjects.map((project:Project) => (
          <div key={project.id} className='w-full lg:w-[24rem] h-full'>
          <BackgroundGradient className="rounded-[22px] h-full max-w-full  p-4 py-6 sm:p-6 bg-white dark:bg-zinc-900">
          <Image
            src={`${project.img}`}
            alt="screenshot"
            height="400"
            width="400"
            className="object-contain md:w-full"
          />
  
          <div className='my-4'>
          <h4 className=" text-base sm:text-xl font-bold text-black  dark:text-neutral-200 my-2">
            {project.title}
          </h4>
          
    
          <div className='flex flex-col gap-2'>
            {project.desc.map((line: string, i: number) => (
            <p key={i} className="list-item  ml-6 md:ml-3 text-sm text-neutral-600 dark:text-neutral-400">
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
              <div className='flex justify-center my-8 text-gray-400'>

        <Link href={"/projects"} className='text-center hover:text-white'>View all projects</Link>
              </div>
    </div>
  )
}

export default FeaturedProjects