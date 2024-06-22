"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaAndroid } from 'react-icons/fa';
import { SiTailwindcss, SiNodedotjs, SiMongodb, SiFirebase, SiMysql } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
    title: 'About me',
    description: 'A passionate software developer with over 2 years of experience, specializing in full-stack development, UI/UX design, and mobile applications. Fluent in Vietnamese and English, and currently available for freelance projects.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Nguyen Quoc Thang',
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+84) 346 129 897',
        },
        {
            fieldName: 'Experience',
            fieldValue: '2+ Years',
        },
        {
            fieldName: 'Instagram',
            fieldValue: 'nguyn.q.thanq',
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Viet Nam',
        },
        {
            fieldName: 'Email',
            fieldValue: 'nguyenqthangwork@gmail.com',
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available',
        },
        {
            fieldName: 'Languages',
            fieldValue: 'Vietnamese, English',
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Diverse experience across full-stack development, front-end internships, freelance projects, teaching assistance, UI/UX design, and junior development roles.',
    item: [
        {
            company: 'Tech solution Inc.',
            position: 'Full Stack Developer',
            duration: '2022 - present'
        },
        {
            company: 'Web Design Studio',
            position: 'Front-End Developer Intern',
            duration: 'Summer 2021 '
        },
        {
            company: 'E-commerce Startup',
            position: 'Freelance Developer',
            duration: '2020 - 2021'
        },
        {
            company: 'Tech Academy',
            position: 'Teaching Assistant',
            duration: '2019 - 2020'
        },
        {
            company: 'Digital Agency',
            position: 'UI/UX Designer',
            duration: '2018 - 2019'
        },
        {
            company: 'Software Developer Firm',
            position: 'Junior Developer',
            duration: '2017 - 2018'
        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'A solid educational background in software engineering, complemented by specialized courses in front-end development, programming, and UI/UX design.',
    item: [
        {
            institution: 'University of IT - VNUHCM',
            position: 'Software Engineer',
            duration: '2022 - present'
        },
        {
            institution: 'Tan Tao Gifted High School',
            position: 'Student',
            duration: '2019 - 2022'
        },
        {
            institution: 'Codeacademy',
            position: 'Front-End Track',
            duration: '2022'
        },
        {
            institution: 'Online Course',
            position: 'Programming Course',
            duration: '2023'
        },
        {
            institution: 'Cousera Course',
            position: 'UI/UX Design',
            duration: '2023'
        },
    ]
}

const skills = {
    title: 'My skills',
    description: 'Proficient in a wide range of technologies including HTML5, CSS3, JavaScript, React, Tailwind CSS, Figma, Node.js, Express, MongoDB, Firebase, MySQL, GitHub, and Android development.',
    skillList: [
        {
            icon: <FaHtml5 />,
            title: 'html 5',
        },
        {
            icon: <FaCss3 />,
            title: 'css 3',
        },
        {
            icon: <FaJs />,
            title: 'javascript',
        },
        {
            icon: <FaReact />,
            title: 'react',
        },
        {
            icon: <SiTailwindcss />,
            title: 'tailwind css',
        },
        {
            icon: <FaFigma />,
            title: 'figma',
        },
        {
            icon: <FaNodeJs />,
            title: 'node js',
        },
        {
            icon: <SiNodedotjs />,
            title: 'express',
        },
        {
            icon: <SiMongodb />,
            title: 'mongo db',
        },
        {
            icon: <SiFirebase />,
            title: 'firebase',
        },
        {
            icon: <SiMysql />,
            title: 'mysql',
        },
        {
            icon: <FaGithub />,
            title: 'github',
        },
        {
            icon: <FaAndroid />,
            title: 'android',
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
            className='min-h-[80px] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className='min-h-[70xvh] w-full'>
                        {/* experiences */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.item.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] px-6 py-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.item.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] px-6 py-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.institution}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.position}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value='skills' className='w-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 xl:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.title}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about me */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul>
                                    {about.info.map((info, index) => {
                                        return (
                                            <li key={index} className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                                <span className='text-accent'>{info.fieldName}:</span>
                                                <p className='text-xl'>{info.fieldValue}</p>
                                            </li>
                                        )

                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume