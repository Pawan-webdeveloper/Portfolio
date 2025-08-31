"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { animate } from "motion";
import work1 from "../../images/gyan.png"
import work2 from '../../images/xora.png'
import work3 from '../../images/health.png'
import work4 from '../../images/portfolio.png'

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    href?: string;
    techStack?: { name: string; icon: any }[];
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    work1, // cyan-500 to emerald-500
    work2, // pink-500 to indigo-500
    work3, // orange-500 to yellow-500
    work4, // portfolio
  ];



  return (
    <motion.div
      className="relative flex h-[30rem] justify-center space-x-2 overflow-y-auto rounded-md p-5 md:p-0 sm-p-0 lg:p-0 lg:space-x-0 max-w-7xl mx-auto [&::-webkit-scrollbar]:hidden"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
              
              {/* Tech Stack Buttons */}
              {item.techStack && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-4"
                >
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, techIndex) => {
                      const IconComponent = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: activeCard === index ? 1 : 0.3, y: 0 }}
                          transition={{
                            delay: 0.1 + techIndex * 0.05,
                            type: "spring",
                            stiffness: 150,
                            damping: 25,
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button
                            className="rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md 
                            bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 
                            transition-all duration-300 
                            border border-white/20 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50
                            shadow-sm flex items-center gap-1 text-white"
                          >
                            <IconComponent className="w-3 h-3" />
                            <span>{tech.name}</span>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              
              {item.href && (
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-200"
                >
                  View Live
                </motion.a>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-108 overflow-hidden rounded-md bg-white lg:block group",
          contentClassName,
        )}
      >
        <img
          src={linearGradients[activeCard % linearGradients.length]}
          alt={`Project ${activeCard + 1}`}
          className="h-full w-full object-cover blur-none group-hover:blur-sm transition-all duration-200"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={content[activeCard].href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
          >
            View Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};
