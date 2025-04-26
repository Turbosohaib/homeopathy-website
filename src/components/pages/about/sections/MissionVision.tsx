"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const MissionVision = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <section id="mission" className="py-16 px-6 sm:px-24">
            <div className="">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="z-10"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                            Our Mission & Vision
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-[#0059B3]" />
                        <p className="mt-6 text-muted-foreground">
                            At Dr. Muhammad Zahid Homeopathy, our mission is to provide the
                            highest quality homeopathic care using scientific principles and
                            evidence-based approaches. We are dedicated to treating the whole
                            person, not just the symptoms, and to helping our patients achieve
                            optimal health and wellness.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Our vision is to be a trusted provider of homeopathic medicine,
                            recognized for our scientific approach, exceptional patient
                            outcomes, and contributions to advancing the field of homeopathy
                            through research and education.
                        </p>
                        <div className="mt-8 flex flex-col sm:grid grid-cols-2 gap-4">
                            <div className="flex items-start">
                                <div className="mr-4 h-12 w-12 px-3 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                    <Heart className="h-6 w-6 text-[#0059B3]" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Patient-Centered</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Individualized care for each patient
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-4 h-12 w-12 px-3 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                    <BookOpen className="h-6 w-6 text-[#0059B3]" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Evidence-Based</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Scientific approach to homeopathy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative h-[400px] rounded-lg overflow-hidden z-10"
                    >
                        <Image
                            src="/assets/images/ourmission.webp?height=400&width=600"
                            alt="Our Mission"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
