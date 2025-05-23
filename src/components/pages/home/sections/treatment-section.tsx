"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const treatments = [
    {
        id: 1,
        title: "Chronic Diseases",
        image: "/assets/images/chronic-diseases-illustration.webp?height=200&width=300",
        description:
            "Effective homeopathic treatments for chronic conditions like arthritis, asthma, and autoimmune disorders.",
        link: "/diseases/chronic",
    },
    {
        id: 2,
        title: "Skin Conditions",
        description:
            "Natural remedies for eczema, psoriasis, acne, and other persistent skin problems.",
        image: "/assets/images/skin-condition-illustration.webp?height=200&width=300",
        link: "/diseases/skin",
    },
    {
        id: 3,
        title: "Digestive Disorders",
        description:
            "Homeopathic approaches to IBS, acid reflux, Crohn's disease, and other digestive issues.",
        image: "/assets/images/digestive-disorders-illustration.webp?height=200&width=300",
        link: "/diseases/digestive",
    },
    {
        id: 4,
        title: "Mental Health",
        description:
            "Support for anxiety, depression, stress, and other mental health concerns through homeopathy.",
        image: "/assets/images/mental-health-illustration.webp?height=200&width=300",
        link: "/diseases/mental-health",
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function TreatmentSection() {
    return (
        <section className="py-16 px-6 sm:px-24 z-10">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className=""
            >
                <motion.div
                    variants={item}
                    className="text-center mb-12 z-10"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Conditions We Treat
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Dr. Muhammad Zahid specializes in treating a wide range of health
                        conditions using scientific homeopathic approaches.
                    </p>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={container}
                >
                    {treatments.map((treatment) => (
                        <motion.div
                            key={treatment.id}
                            variants={item}
                            whileHover={{ scale: 1.03 }}
                        >
                            <Card className="pt-0 border-0 shadow-lg z-10 h-full">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={treatment.image || "/placeholder.svg"}
                                        alt={treatment.title}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                </div>
                                <CardContent className="px-6 pb-6 flex-1 relative">
                                    <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                                    <p className="text-muted-foreground mb-4">
                                        {treatment.description}
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="absolute bottom-0 w-fit"
                                    >
                                        <Link href={treatment.link}>
                                            Learn More <ChevronRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={item} className="mt-12 text-center">
                    <Button
                        asChild
                        className="bg-[#0059B3] hover:bg-[#002ab3] cursor-pointer z-10"
                    >
                        <Link href="/diseases">
                            View All Conditions <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
