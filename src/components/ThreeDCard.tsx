"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


interface ThreeDCardType {
    image: string,
    title: string,
    subtitle: string,
    liveLink?: string,
    github: string,
    desc: string[],
    techStack: string[]
}

export function ThreeDCard({ image, title, subtitle, liveLink, github, desc, techStack}: ThreeDCardType) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 md:p-8 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {subtitle}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem className="mt-8 flex flex-col gap-2">
                    {desc.map((item,i) => (<li key={i}>{item}</li>))}
                </CardItem>
                <CardItem className="mt-4 flex flex-col gap-2">
                    <h4 className="text-lg font-bold">Tech Stack:</h4>
                    {techStack.join(", ")}
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                    <Link href={github}>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        GitHub
                    </CardItem>
                    </Link>
                    <Link href={liveLink ? liveLink : "/projects"}>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Live
                    </CardItem>
                    </Link>
                </div>
            </CardBody>
        </CardContainer>
    );
}
