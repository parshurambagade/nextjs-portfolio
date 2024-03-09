"use client";
import React from 'react'
import projectsData from "@/data/projectsData.json";
import { ThreeDCard } from '@/components/ThreeDCard';

const page = () => {
    // console.log(projectsData.projects)
  return (
    <section className='min-h-screen px-2 md:px-6 lg:px-20 bg-blue-700/[.2]'>
 
        <div className='pt-28  lg:pt-16 pb-8      '>
            <h2 className='text-4xl md:text-5xl text-center text-cyan-500 font-bold my-4'>Featured Projects</h2>
            <p className='text-center'>Here is a list of my all projects</p>
        </div>
        <div className='md:grid lg:grid-cols-3 w-full h-max pb-8'>
            {projectsData.projects.map((project) => (<ThreeDCard key={project.id} title={project.title} subtitle={project.subtitle} image={project.img} github={project.codeUrl} liveLink={project.liveUrl} desc={project.desc} techStack={project.techstack} />))}
        </div>

    </section>
  )
}

export default page