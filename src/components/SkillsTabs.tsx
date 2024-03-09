"use client";
import React from "react";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import skillsData from "@/data/skillsData.json";
import { BackgroundGradient } from "./ui/background-gradient";

// TODO: convert skills flex to grid 
const SkillsTabs = () => {
  // console.log(skillsData.frontend);
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-blue-500">
          <p>Frontend Skills</p>
          <DummyContent data={skillsData.frontend} />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-violet-500">
          <p>Backend Skills</p>
          <DummyContent data={skillsData.backend} />
        </div>
      ),
    },
    {
      title: "Fullstack",
      value: "fullstack",
      content: (
        <div className="w-full overflow-scroll lg:overflow-hidden relative h-full rounded-2xl p-6 md:p-10 lg:pt-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Fullstack Skills</p>
          <DummyContent data={skillsData.fullstack} />
        </div>
      ),
    },

    {
      title: "Tools",
      value: "tools",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10  text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-400">
          <p>Tools</p>
          <DummyContent data={skillsData.tools} />
        </div>
      ),
    },
  ];

  return (
    <div id="skills" className="min-h-screen md:min-h-[40rem] h-[55rem]  overflow-hidden  [perspective:1000px] relative  box-border  flex flex-col  max-w-5xl  mx-2 lg:mx-auto lg:w-full items-center  md:items-start justify-start lg:justify-center my-0 lg:my-12 px-4">
      <div className='mt-16 mb-6  lg:mb-12 mx-auto'>
            <h2 className='text-4xl md:text-5xl text-center text-cyan-500 font-bold my-2 md:my-4'>My Skills</h2>
            {/* <p className='text-center'>Here is a list of my highlighted work.</p> */}
        </div>
       
      <Tabs tabs={tabs} />
   
    </div>
  );
};
interface Skill {
  name: string;
  icon: string;
}


const DummyContent = ({ data }: { data: Skill[] }) => {
  return (
    
      
    <div  className="w-full grid grid-cols-3 lg:flex  lg:flex-wrap lg:justify-normal gap-4 my-6 md:my-12 lg:my-6">
      {data.map((skill: Skill) => (
        <button key={skill.name} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className=" p-4  md:px-8 md:pt-6 md:pb-4 flex flex-col items-center justify-center gap-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-black/60 ">
            <div className="w-max">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
              />
            </div>
            <div className="hidden lg:inline-block text-xl  ">{skill.name}</div>
          </div>
        </button>
      ))}
    </div>

  );
};

export default SkillsTabs;
