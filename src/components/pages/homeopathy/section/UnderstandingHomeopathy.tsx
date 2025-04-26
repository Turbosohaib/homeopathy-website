"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const UnderstandingHomeopathy: React.FC = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <section id="understand" className="py-16 px-6 sm:px-24">
            <div className="">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                            Understanding Homeopathy
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-[#0059B3]" />
                        <p className="mt-6 text-muted-foreground">
                            Homeopathy is a natural form of medicine used by over 200 million
                            people worldwide to treat both acute and chronic conditions. It is
                            based on the principle of &apos;like cures like&apos; – in other
                            words, a substance that can cause symptoms when taken in large
                            doses, can be used in small amounts to treat similar symptoms.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            At Dr. Zahid Homeopathy, we practice scientific homeopathy,
                            combining traditional homeopathic principles with modern medical
                            knowledge and research. Our approach is evidence-based,
                            personalized, and focused on treating the root cause of illness
                            rather than just suppressing symptoms.
                        </p>
                        <Button className="mt-6 bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                            <Link href="/appointment">
                                Book a Consultation <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative h-[400px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/assets/images/understandhomeopathy.webp?height=400&width=600"
                            alt="Homeopathy"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
