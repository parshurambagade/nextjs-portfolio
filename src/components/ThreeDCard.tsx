"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface ThreeDCardType {
  image: string;
  title: string;
  subtitle: string;
  liveLink?: string;
  github: string;
  desc: string[];
  techStack: string[];
}

export function ThreeDCard({
  image,
  title,
  subtitle,
  liveLink,
  github,
  desc,
  techStack,
}: ThreeDCardType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-zinc-900  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900 dark:border-white/[0.2] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 md:p-8 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {subtitle}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full   rounded-xl group-hover/card:shadow-xl object-fill"
            alt="thumbnail"
            loading="eager"
          />
        </CardItem>
        <CardItem className="mt-8 flex flex-col gap-2 text-neutral-400 dark:text-neutral-400">
          {desc.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </CardItem>
        <CardItem className="mt-4 flex flex-col gap-2 text-white dark:text-white">
          <h4 className="text-lg font-bold">Tech Stack:</h4>
          <p className="text-neutral-400 dark:text-neutral-400">
            {techStack.join(", ")}
          </p>
        </CardItem>
        <div className="flex justify-between items-center mt-4 ">
          <Link href={github} target="_blank">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white dark:text-white"
            >
              GitHub
            </CardItem>
          </Link>
          <Link href={liveLink ? liveLink : "/projects"} target="_blank">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
            >
              Live
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
