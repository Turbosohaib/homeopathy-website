"use client"
import React from 'react'
import About from "@/components/sections/About"
import Homeopathy from "@/components/sections/Homeopathy"
import Appointment from "@/components/sections/Appointment"
import TestimonialSlider from "@/components/sections/testimonial-slider"
import TreatmentSection from "@/components/sections/treatment-section"
import Header from "@/components/partials/Header"
import Footer from "@/components/partials/Footer"
import Hero from "@/components/sections/Hero"

const Home = () => {


    return (
        <div className="flex flex-col w-full">
            {/* Header */}
            <Header />
            {/* Hero Section */}
            <Hero />
            <main className="flex-1 w-full flex flex-col justify-center items-center">
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
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home