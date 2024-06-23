"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip'
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
    {
        num: '01',
        category: 'Fullstack',
        title: 'project 1',
        description: 'AORA is a mobile application built with React Native using the Expo framework. It leverages Tailwind CSS for styling and Appwrite for backend services such as authentication and database.',
        stack: [{ name: 'Javascript' }, { name: 'Tailwind' }, { name: 'Appwrite' }],
        image: '/assets/work/thumb1.png',
        live: '',
        github: 'https://github.com/nguynqthawq/aora',
    },
    {
        num: '02',
        category: 'Coffee Shop Management',
        title: 'project 2',
        description: 'OnlyFood is an effective restaurant management application that helps optimize business processes and improve customer experience.',
        stack: [{ name: 'C#' }, { name: 'Windform' }, { name: 'MongoDB' }],
        image: '/assets/work/thumb2.png',
        live: '',
        github: 'https://github.com/DoAnLapTrinhTrucQuanUIT/IT008.O13',
    },
    {
        num: '03',
        category: 'Enigma - AI generated work of art',
        title: 'project 3',
        description: 'Enigma is an AI-generated work of art that uses a combination of machine learning and generative adversarial networks to create unique, one-of-a-kind pieces.',
        stack: [{ name: 'Java' }, { name: 'Figma' }, { name: 'Firebase' }],
        image: '/assets/work/thumb3.png',
        live: '',
        github: 'https://github.com/FiveD-SE/Enigma',
    },

]
const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        setProject(projects[swiper.activeIndex])
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 2.4,
                    ease: 'easeIn'
                }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-6">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ','}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-5">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            className="xl:h-[520px] mb-12"
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}>
                            {projects.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    className="object-cover w-full h-full"
                                                    alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider button */}
                            <WorkSliderButton
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                buttonStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work