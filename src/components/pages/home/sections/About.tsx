"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <section className="py-16 sm:px-24" ref={ref}>
            <div className="px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="z-10"
                        variants={fadeInLeft}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                            About Dr. Muhammad Zahid
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-[#0059B3]"></div>
                        <p className="mt-6 text-muted-foreground">
                            Dr. Muhammad Zahid is a renowned homeopathic physician with over
                            20 years of experience in treating various chronic and acute
                            conditions. His scientific approach to homeopathy has helped
                            thousands of patients worldwide.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            With a focus on integrating homeopathic treatments with
                            conventional medicine, Dr. Muhammad Zahid provides comprehensive
                            care that addresses the root cause of diseases rather than just
                            the symptoms.
                        </p>
                        <Button className="mt-6" variant="outline" asChild>
                            <Link href="/about">
                                Learn More <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        className="w-full flex justify-center items-center z-10"
                        variants={fadeInRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="w-fit">
                            <Image
                                src="/assets/images/dr.png"
                                alt="Dr. Muhammad Zahid"
                                width={300}
                                height={300}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
