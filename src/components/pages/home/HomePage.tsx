"use client";
import React from "react";
import {
    About,
    Appointment,
    Hero,
    Homeopathy,
    TestimonialSlider,
    TreatmentSection,
} from "@/components/pages/home/sections";
import BackgroundAnimation from "@/components/partials/BackgroundAnimation";
import { BreadCrumb } from "@/components/partials";




export function HomePage() {

    return (
        <div className="relative">
            <Hero />
            <main className="flex-1 w-full flex flex-col justify-center items-center">
                {/* Soothing Particles Background */}
                <BackgroundAnimation />
                {/* Breadcrumb */}
                <BreadCrumb />
                {/* About Section */}
                <About />

                {/* Homeopathy Section */}
                <Homeopathy />

                {/* Treatment Section */}
                <TreatmentSection />

                {/* Testimonials */}
                <TestimonialSlider />

                {/* Appointment Section */}
                <Appointment />
            </main>

        </div>
    );
}
