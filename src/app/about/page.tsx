
import Link from "next/link"
import Image from "next/image";
import developer from "@/../public/img/developer2.svg"
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section className="box-border  dark:bg-grid-small-white/[0.2] ">
        <div className="absolute top-0 w-full h-full overflow-hidden"> 
        <Boxes />
        </div>
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 mx-auto overflow-hidden max-w-screen my-20 lg:my-24 xl:my-32">
      
        <div className="space-y-8 xl:space-y-10 flex items-center  ">
          <div className="w-full h-3/4 rounded-lg overflow-hidden shadow-lg">
            <Image
              alt="Image"
              className="w-full h-full relative z-10"
              src={developer}
              // layout="responsive"
              // width={600}
              // height={900}
            />
          </div>
        </div>
        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-2 flex flex-col gap-4 ">
            <h2 className="relative z-10 text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-gray-900 dark:text-gray-100">
              Hi, I&apos;m Parshuram Bagade
            </h2>
            <p className="relative z-10 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               a passionate web developer with a knack for building creative and user-friendly applications.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m currently pursuing my Master&apos;s in Computer Applications (MCA) and have a strong foundation in both front-end and back-end development. I&apos;m proficient in popular frameworks like React.js, Redux Toolkit, and libraries like Tailwind CSS and Firebase.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              In my projects, you&apos;ll see examples of how I&apos;ve used these skills to bring ideas to life. I built a movie recommendation platform called NetflixGPT that uses clever AI to suggest movies you&apos;ll love. I also created VideoX, a platform for discovering exciting new videos on the fly.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m a big believer in clean code and efficient development practices. I leverage tools like Git and GitHub for version control and collaboration, and I&apos;m always looking for ways to improve the performance and user experience of my applications.
            </p>
            <p className="relative z-10 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let&apos;s connect! Feel free to browse my portfolio or reach out to me directly. I&apos;m excited to see what we can create together.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

