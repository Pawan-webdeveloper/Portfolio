"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiSanity, SiContentful,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiZod,
  SiPnpm, SiBun, SiGit, SiGithub, SiVercel, SiAmazon, SiDocker, SiExpo, SiClerk, SiLinux
} from "react-icons/si";
import { BiStore } from "react-icons/bi";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {[
                            { name: "ReactJS", icon: SiReact },
                            { name: "NextJS", icon: SiNextdotjs },
                            { name: "TypeScript", icon: SiTypescript },
                            { name: "Tailwind CSS", icon: SiTailwindcss },
                            { name: "Motion", icon: SiFramer },
                            { name: "Sanity", icon: SiSanity },
                            { name: "Contentful", icon: SiContentful },
                            { name: "NodeJS", icon: SiNodedotjs },
                            { name: "ExpressJS", icon: SiExpress },
                            { name: "PostgreSQL", icon: SiPostgresql },
                            { name: "MongoDB", icon: SiMongodb },
                            { name: "Prisma", icon: SiPrisma },
                            { name: "Zustand", icon: BiStore },
                            { name: "Zod", icon: SiZod },
                            { name: "pnpm", icon: SiPnpm },
                            { name: "Bun", icon: SiBun },
                            { name: "Git", icon: SiGit },
                            { name: "GitHub", icon: SiGithub },
                            { name: "Vercel", icon: SiVercel },
                            { name: "AWS", icon: SiAmazon },
                            { name: "Docker", icon: SiDocker },
                            { name: "Expo", icon: SiExpo },
                            { name: "Clerk", icon: SiClerk },
                            { name: "Linux", icon: SiLinux }
                        ].map((tech, index) => {
                            const IconComponent = tech.icon;
                            return (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.5 + index * 0.05,
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 25,
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full px-4 py-2 text-sm font-medium backdrop-blur-md 
                                        bg-white/90 hover:bg-white/100 dark:bg-black/90 dark:hover:bg-black/100 
                                        transition-all duration-300 
                                        border border-black/10 dark:border-white/10
                                        hover:shadow-md dark:hover:shadow-neutral-800/50
                                        shadow-sm flex items-center gap-2"
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        <span className="text-black dark:text-white">{tech.name}</span>
                                    </Button>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
