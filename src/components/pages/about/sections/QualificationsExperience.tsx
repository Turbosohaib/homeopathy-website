"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const QualificationsExperience = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const entries = [
        {
            src: "/assets/images/dr-nadir-hospital.jpg",
            alt: "Dr. Nadir Homeopathic Hospital Karachi",
            text: "Former Medical Officer at Dr. Nadir Homeopathic Hospital Karachi",
        },
        {
            src: "/assets/images/govt-homeopathic-hospital.webp",
            alt: "Govt Homeopathic Hospital Karachi",
            text: "Former House Officer at Govt Homeopathic Hospital Karachi",
        },
        {
            src: "/assets/images/zoology-college.webp",
            alt: "Govt Superior Science College Peshawar",
            text: "Studied Zoology at Govt Superior Science College, Peshawar",
        },
        {
            src: "/assets/images/chemistry-college.webp",
            alt: "Govt Post Graduate College Charsadda",
            text: "Studied Chemistry at Govt Post Graduate College, Charsadda (KPK)",
        },
        {
            src: "/assets/images/higher-secondary-school.webp",
            alt: "Govt Higher Secondary School No.1 Peshawar",
            text: "Attended Govt Higher Secondary School No. 1, Peshawar",
        },
        {
            src: "/assets/images/frontier-dhms-college.webp",
            alt: "Frontier Homeopathic Medical College",
            text: "Studied DHMS at Frontier Homeopathic Medical College",
        },
    ];

    return (
        <section id="qualifications" className="py-16 px-6 sm:px-24 z-10">
            <div className="">
                {/* Header */}
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Qualifications & Experience
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto" />
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        A snapshot of Dr. Muhammad Zahid’s professional roles and education.
                    </p>
                </motion.div>

                {/* Entries Grid */}
                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {entries.map((entry, idx) => {
                        // for the 5th item (idx=4) start in column 2,
                        // for the 6th item (idx=5) start in column 3
                        let positionClasses = "";
                        if (idx === 4) positionClasses = "md:col-start-2";
                        if (idx === 5) positionClasses = "md:col-start-3";

                        return (
                            <div
                                key={entry.text}
                                className={`flex flex-col items-center ${positionClasses}`}
                            >
                                <div className="relative w-24 h-24 rounded-full bg-gray-100 overflow-hidden">
                                    <Image
                                        src={entry.src}
                                        alt={entry.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-center mt-4">{entry.text}</h3>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
