import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full">
            {/* <BackgroundAnimation /> */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative h-full w-full">
                <Image
                    src="/assets/images/about-hero-img.jpg?height=400&width=1920"
                    alt="About Us Hero"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="container sm:mt-14 mt-0 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fadeIn">
                    About Us
                </h1>
                <p className="mt-6 max-w-2xl text-lg px-5 sm:px-0 animate-slideUp">
                    Learn about our mission and Dr. Muhammad Zahid&apos;s commitment to
                    providing exceptional homeopathic care.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeIn">
                    <Button className="bg-[#0059B3] hover:bg-[#002ab3]" size="lg" asChild>
                        <Link href="#mission">Our Mission & Vision</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white border-white hover:bg-white/20"
                        asChild
                    >
                        <Link href="#about">Dr. Muhammad Zahid</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
