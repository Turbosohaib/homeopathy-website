"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const CallToAction = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <section className="py-16 px-6 sm:px-24 w-full bg-[#0059B3] text-primary-foreground flex items-center justify-center">
            <div className="">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight">
                            Ready to Experience Scientific Homeopathy?
                        </h2>
                        <p className="mt-6">
                            Schedule a consultation with Dr. Muhammad Zahid to discuss your
                            health concerns and explore personalized homeopathic treatment
                            options.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-primary hover:bg-white/90"
                                asChild
                            >
                                <Link href="/appointment">Book an Appointment</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-black/80 hover:bg-white/10 hover:text-white"
                                asChild
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative h-[300px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/assets/images/homeopathy-image.webp?height=300&width=500"
                            alt="Consultation"
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
