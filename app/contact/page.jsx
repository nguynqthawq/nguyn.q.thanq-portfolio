"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        content: "+84 346 129 897"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        content: "nguyenqthangwork@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        content: "Di An, Binh Duong, Viet Nam"
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (value) => {
        setFormData({ ...formData, service: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.firstname) formErrors.firstname = "Firstname is required";
        if (!formData.lastname) formErrors.lastname = "Lastname is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.phone) formErrors.phone = "Phone number is required";
        if (!formData.service) formErrors.service = "Service selection is required";
        if (!formData.message) formErrors.message = "Message is required";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setSending(true);
        setSuccess(false);

        const templateParams = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message
        };

        try {
            await emailjs.send(
                'service_few42sf',
                'template_8t3a5s6',
                templateParams,
                'Nl1iQyWHKyjE-1BLY'
            );
            setSuccess(true);
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            console.error('Failed to send email. Error: ', error);
        } finally {
            setSending(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 2.4,
                    ease: 'easeIn'
                }
            }}
            className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I am available for freelance work. Connect with me via phone or email.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type='text' name='firstname' placeholder='Firstname' value={formData.firstname} onChange={handleInputChange} />
                                {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}
                                <Input type='text' name='lastname' placeholder='Lastname' value={formData.lastname} onChange={handleInputChange} />
                                {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
                                <Input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                                <Input type='text' name='phone' placeholder='Phone Number' value={formData.phone} onChange={handleInputChange} />
                                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                            </div>
                            {/* select */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className='w-full justify-between'>
                                    <SelectValue placeholder='Select a service' value={formData.service} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Services</SelectLabel>
                                        <SelectItem value='Web Development'>Web Development</SelectItem>
                                        <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                                        <SelectItem value='Freelance'>Freelance</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.service && <p className="text-red-500">{errors.service}</p>}
                            {/* textarea */}
                            <Textarea
                                className='h-[200px]'
                                name='message'
                                placeholder='Type your message here.'
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                            {errors.message && <p className="text-red-500">{errors.message}</p>}
                            {/* button */}
                            <Button type='submit' className='max-w-40' disabled={sending}>
                                {sending ? 'Sending...' : 'Send message'}
                            </Button>
                            {success && <p className="text-green-500">Message sent successfully!</p>}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.content}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;
