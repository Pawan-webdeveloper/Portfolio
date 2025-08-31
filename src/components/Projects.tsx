"use client";
import React from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/StickyScroll";
import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiBootstrap, SiReact, SiNextdotjs, 
  SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, 
  SiFramer, SiEthereum
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import work1 from "../images/gyan.png"
import work2 from '../images/xora.png'
import work3 from '../images/health.png'



const content = [
  {
    title: "GV Tutorials",
    description:
      "An educational website offering simple, responsive, and user-friendly tutorials for students of all levels. Across all domains including Web Dev, App Dev, Languages or Universities courses",
    href: "https://gvtutorials.com",
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "XORA - AI Video Editor",
    description:
      "An AI-powered SaaS application that allows users to edit videos and convert them into anime-style visuals with ease. Featuring smart editing tools, style filters, and cloud-based rendering.",
    href: "https://pawan-webdeveloper.github.io/saas-landing/",
    techStack: [
      { name: "ReactJS", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "NodeJS", icon: SiNodedotjs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "Framer Motion", icon: SiFramer },
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "HealthPass - A Blockchain based Healthcare System",
    description:
      "A decentralized healthcare platform that ensure secure patient data management, transparent medical records, and seamless sharing between patients, doctors, and healthcare providers.",
    href: "https://health-6cce-8jyaj6amw-pawan572893-gmailcoms-projects.vercel.app/home",
    techStack: [
      { name: "ReactJS", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "NodeJS", icon: SiNodedotjs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Ethereum", icon: SiEthereum },
      { name: "IPFS", icon: BiNetworkChart },
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive and modern portfolio website designed to highlight my projects, technical skills, and achievements. ",
    href: "https://pawan-portfolio.com",
    techStack: [
      { name: "NextJS", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "NodeJS", icon: SiNodedotjs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "Framer Motion", icon: SiFramer },
    ],
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export function Projects() {
  return (
    <div className="w-full py-4 bg-white dark:bg-neutral-950">
      {/* Centered Title */}
      <div className="text-center mb-12">
      <h1
        className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-black from-30% to-black/40 
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent sm:text-6xl md:text-7xl lg:text-8xl 
        dark:from-white dark:to-white/40"
      >
        My Projects
      </h1>
        {/* <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-40 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
        /> */}
      </div>
      
      <StickyScroll content={content} />
    </div>
  );
}
