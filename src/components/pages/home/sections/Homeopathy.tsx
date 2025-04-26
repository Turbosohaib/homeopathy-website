"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export const Homeopathy = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-16 px-6 sm:px-24 z-10" ref={ref}>
            <div className=" z-10">
                <motion.div
                    className="text-center mb-12 z-10"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Scientific Homeopathy
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Discover the science behind homeopathic treatments and how they can
                        effectively address various health conditions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {[...Array(3)].map((_, idx) => (
                        <motion.div key={idx} variants={cardVariants}>
                            <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                <CardContent>
                                    <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#0059B3"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6 text-primary"
                                        >
                                            {idx === 0 && (
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                            )}
                                            {idx === 1 && (
                                                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                                            )}
                                            {idx === 2 && (
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                            )}
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        {idx === 0 && "Personalized Care"}
                                        {idx === 1 && "Natural Healing"}
                                        {idx === 2 && "Research-Backed"}
                                    </h3>
                                    <p className="mt-2 text-muted-foreground">
                                        {idx === 0 &&
                                            "Treatments tailored to your specific condition, medical history, and individual needs."}
                                        {idx === 1 &&
                                            "Stimulate your body's natural healing mechanisms without harmful side effects."}
                                        {idx === 2 &&
                                            "Treatments supported by clinical research and decades of successful patient outcomes."}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-10 z-10"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.6 }}
                >
                    <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                        <Link href="/homeopathy">
                            Explore Homeopathy <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
