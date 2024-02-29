"use client";
import React from 'react'
 
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import skillsData from "@/data/skillsData.json";

const SkillsTabs = () => {
    console.log(skillsData.frontend)
    const tabs = [
        {
          title: "Frontend",
          value: "frontend",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-blue-500">
              <p>Frontend Skills</p>
              <DummyContent data={skillsData.frontend}/>
            </div>
          ),
        },
        {
          title: "Backend",
          value: "backend",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-violet-500">
              <p>Backend Skills</p>
              <DummyContent data={skillsData.backend} />
            </div>
          ),
        },
        {
          title: "Fullstack",
          value: "fullstack",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p>Fullstack Skills</p>
              <DummyContent data={skillsData.fullstack} />
            </div>
          ),
        },
    

        {
            title: "Tools",
            value: "tools",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-400">
                    <p>Tools</p>
                    <DummyContent data={skillsData.tools} />
                </div>
            ),
        },
      ];
     
      return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
          <Tabs tabs={tabs} />
        </div>
      );
    }

    interface Data {
        data: string[],
    }
     
    const DummyContent = ({ data }: { data: string[] }) => {
        return (
            <div className='w-full flex justify-normal flex-wrap gap-4  my-12 '>
                {data.map((skill: string) => (
                    <button key={skill} className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            {skill}
                        </div>
                    </button>
                ))}
            </div>
        );
    };

export default SkillsTabs