import Link from "next/link";
import Image from "next/image";
import developer from "@/../public/img/developer2.svg";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const AboutSection = () => {
  return (
    <section className="bg-black relative box-border  w-full h-max  overflow-hidden  ">
      <div className="absolute top-0 w-full h-full overflow-hidden">
        <Boxes />
      </div>
      <div className="container grid gap-8 px-4 md:px-6 lg:px-20         lg:grid-cols-2 lg:gap-12 mx-auto overflow-hidden max-w-screen my-20    lg:my-24 xl:my-32">
        <div className="space-y-8 xl:space-y-10 flex items-center  ">
          <div className="w-full h-3/4 rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="Image"
              className="w-full h-full relative z-10"
              src={developer}
              // layout="responsive"
              // width={600}
              // height={900}
              loading="eager"
            />
          </div>
        </div>
        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-2 flex flex-col gap-4">
            <h2 className="relative z-10 text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-gray-100 dark:text-gray-100">
              Hi, I&apos;m Parshuram Bagade
            </h2>
            <p className="relative z-10 max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m a frontend developer who loves building clean and
              user-friendly web apps.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I’m doing my MCA and recently completed a 4-month internship where
              I fixed major UI issues and worked with Redux Toolkit, REST APIs,
              and accessibility.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I’ve built projects like NotesGen AI, which creates smart notes
              from YouTube videos, and SwadSeva, a food delivery app with live
              restaurant data. I also made What2Watch AI, which gives movie
              suggestions using Gemini AI.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I enjoy writing clean code, making smooth UIs with Tailwind and
              ShadCN, and using tools like Git, Postman, and VS Code to speed up
              my workflow.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Feel free to check my projects or message me. I&apos;m always open
              to learning and building new things!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
