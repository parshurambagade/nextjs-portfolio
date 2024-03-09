"use client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// TODO: add toast in the form (email sent/error) 
export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_1rqgzkn', 'template_7qyvknh', form.current, {
          publicKey: '9p06IpkmvE6vUP_X8',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      form.current.reset();
    }
  };
  return (
    <section id="contact" className="xl:mt-40 py-20 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] ">
       <div className="space-y-2 mx-4 lg:mx-0">
        <h2 className='text-4xl md:text-5xl text-center text-cyan-500 font-bold my-4'>Contact Me</h2>
          <p className="text-gray-500 text-center dark:text-gray-400">Want to work together? Drop me a message.</p>
        </div>
    <div className="mx-auto container flex flex-col-reverse lg:flex-row max-w-2xl gap-8 py-2 items-center justify-center space-y-8 px-4 md:px-0 lg:px-4 md:w-3/4  md:gap-12 lg:py-12 lg:space-y-12 xl:max-w-4xl xl:gap-16">
      <div className="w-full space-y-4 lg:w-3/4 px-4 lg:px-0">
       
        <div className="w-full space-y-4">

          

          <form ref={form} onSubmit={sendEmail} className="w-full grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="user_name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="user_email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea  name="message" className="min-h-[200px]" id="message" placeholder="Enter your message" />
            </div>
            
        <button type="submit" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" value="send">
          Send Message
        </button>
  
    
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center w-max md:w-full lg:w-max md:my-4 lg:my-0">
        <div className="w-full max-w-[300px] mx-auto md:max-w-full lg:max-w-max ">
          <div className="box-border w-full  flex flex-wrap  justify-evenly lg:mx-0 lg:justify-normal md:grid grid-cols-4 lg:grid-cols-1 gap-4 lg:gap-8 md:justify-center        ">
            <Link className="flex flex-1 items-center p-4 rounded-lg gap-4 bg-gray-800 lg:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800" href="https://www.linkedin.com/in/parshuram-bagade/">
              <LinkedinIcon className="w-6     h-6 rounded-lg  " />
              <span className="font-medium">LinkedIn</span>
            </Link>
            <Link className="flex flex-1  items-center p-4 rounded-lg gap-4 bg-gray-800 lg:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800" href="https://github.com/parshurambagade/">
              <GithubIcon className="w-6 h-6 rounded-full overflow-hidden " />
              <span className="font-medium">GitHub</span>
            </Link>
            <Link className="flex flex-1 items-center p-4 rounded-lg gap-4 bg-gray-800 lg:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800" href="mailto:parshuram.bagade@outlook.com">
              <ChromeIcon className="w-6 h-6 rounded-full overflow-hidden " />
              <span className="font-medium">Gmail</span>
            </Link>
            <Link className="flex flex-1 items-center p-4 rounded-lg gap-4 bg-gray-800 lg:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
              <TwitterIcon className="w-6 h-6 rounded-full overflow-hidden " />
              <span className="font-medium">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}


function ChromeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
