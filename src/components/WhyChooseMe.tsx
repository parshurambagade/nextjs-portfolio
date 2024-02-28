"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import content from "@/data/whyChooseMe.json"

const WhyChooseMe = () => {
  return (
    <div className="w-full min-h-screen py-16 ">
        <h2 className='text-4xl md:text-5xl text-center text-cyan-500 font-bold my-4'>Why Choose Me</h2>
        <div className="p-10 w-full h-[70vh]">
      <StickyScroll content={content.data} />
    </div>
    </div>
  )
}

export default WhyChooseMe