import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative h-[83vh]">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative h-full w-full">
                <Image
                    src="/assets/images/home-hero-img.webp?height=500&width=1920"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Advanced Homeopathic Care</h1>
                <p className="mt-6 max-w-2xl text-lg">
                    Providing scientific homeopathic treatments for a wide range of conditions with proven results and
                    personalized care.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#0059B3] hover:bg-[#002ab3]" size="lg" asChild>
                        <a href="/appointment">Book an Appointment</a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white border-white hover:bg-white/20"
                        asChild
                    >
                        <a href="/treatment">Learn About Treatments</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero