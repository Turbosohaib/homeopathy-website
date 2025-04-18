import React from "react";
import Image from "next/image";
import { BookOpen, Heart } from "lucide-react";
export const MissionVision = () => {
    return (
        <section id="mission" className="py-16 px-6 sm:px-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                            Our Mission & Vision
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-[#0059B3]"></div>
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
                                <div className="mr-4 h-12 px-3 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
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
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden z-10">
                        <Image
                            src="/assets/images/vision.jpg?height=400&width=600"
                            alt="Our Mission"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
