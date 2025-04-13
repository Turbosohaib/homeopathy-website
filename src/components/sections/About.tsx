import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react"

const About = () => {
    return (
        <section className="py-16 sm:px-24 bg-muted/30">
            <div className="container px-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Dr. Muhammad Zahid</h2>
                        <div className="mt-4 h-1 w-20 bg-[#0059B3]"></div>
                        <p className="mt-6 text-muted-foreground">
                            Dr. Muhammad Zahid is a renowned homeopathic physician with over 20 years of experience in treating various
                            chronic and acute conditions. His scientific approach to homeopathy has helped thousands of patients
                            worldwide.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            With a focus on integrating homeopathic treatments with conventional medicine, Dr. Muhammad Zahid provides
                            comprehensive care that addresses the root cause of diseases rather than just the symptoms.
                        </p>
                        <Button className="mt-6" variant="outline" asChild>
                            <a href="/about">
                                Learn More <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="w-fit">
                            <Image src="/assets/images/dr.png" alt="Dr. Muhammad Zahid" width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About