"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const homeopathyTopics = [
    {
        title: "What is Homeopathy?",
        description: "Learn about the fundamental principles and philosophy behind homeopathic medicine.",
        icon: "📚",
        link: "/homeopathy/what-is-homeopathy",
    },
    {
        title: "What Homeopathy is Not",
        description: "Clarifying common misconceptions and understanding the boundaries of homeopathic treatment.",
        icon: "❌",
        link: "/homeopathy/what-homeopathy-is-not",
    },
    {
        title: "What Your Doctor Won't Tell You",
        description: "Discover important aspects of homeopathy often overlooked in conventional medical discussions.",
        icon: "🔍",
        link: "/homeopathy/what-doctors-wont-tell",
    },
    {
        title: "Facts and Myths",
        description: "Separating scientific facts from common myths about homeopathic medicine.",
        icon: "⚖️",
        link: "/homeopathy/facts-and-myths",
    },
    {
        title: "Scientific Homeopathy",
        description: "Exploring the scientific basis and research supporting homeopathic treatments.",
        icon: "🔬",
        link: "/homeopathy/scientific-homeopathy",
    },
    {
        title: "Homeopathy Research",
        description: "Review of current research, clinical studies, and evidence in the field of homeopathy.",
        icon: "📊",
        link: "/homeopathy/research",
    },
    {
        title: "What Doctors Should Know",
        description: "Essential information for medical professionals about homeopathic medicine.",
        icon: "👨‍⚕️",
        link: "/homeopathy/for-doctors",
    },
    {
        title: "How to Find a Good Homeopath?",
        description: "Guidelines and criteria for selecting a qualified and experienced homeopathic practitioner.",
        icon: "🔎",
        link: "/homeopathy/find-good-homeopath",
    },
    {
        title: "Benefits of Homeopathy",
        description: "The advantages and positive outcomes of homeopathic treatment approaches.",
        icon: "✅",
        link: "/homeopathy/benefits",
    },
    {
        title: "FAQ on Various Diseases",
        description: "Answers to frequently asked questions about homeopathic treatments for common conditions.",
        icon: "❓",
        link: "/homeopathy/faq-diseases",
    },
    {
        title: "Homeopathic Clinics",
        description: "Information about our homeopathic clinics and what to expect during your visit.",
        icon: "🏥",
        link: "/homeopathy/clinics",
    },
    {
        title: "Integration with Conventional Medicine",
        description: "How homeopathy can work alongside conventional medical treatments for optimal health outcomes.",
        icon: "🤝",
        link: "/homeopathy/integration-conventional-medicine",
    },
    {
        title: "Homeopathic Doctors",
        description: "Meet our qualified homeopathic physicians and learn about their expertise.",
        icon: "👩‍⚕️",
        link: "/homeopathy/doctors",
    },
    {
        title: "Sources of Medicines",
        description: "Understanding the origins, preparation, and quality of homeopathic remedies.",
        icon: "💊",
        link: "/homeopathy/medicine-sources",
    },
];

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const TopicGrid: React.FC = () => {
    return (
        <section id="explore" className="py-16 px-6 sm:px-24">
            <div className="">
                {/* Animated Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInLeft}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-[#0059B3]">
                        Explore Homeopathy
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto" />
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Discover all aspects of homeopathic medicine through our comprehensive resources.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {homeopathyTopics.map((topic, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                        >
                            <Card className="h-full w-full overflow-hidden border-0 hover:shadow-lg transition-shadow">
                                <Link href={topic.link}>
                                    <CardContent className="p-6 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="text-4xl mb-4">{topic.icon}</div>
                                            <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                                            <p className="text-muted-foreground mb-4">{topic.description}</p>
                                        </div>
                                        <div className="flex items-center text-primary font-medium">
                                            Read More <ChevronRight className="ml-1 h-4 w-4" />
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
