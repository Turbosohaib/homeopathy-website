"use client";
import BackgroundAnimation from "@/components/partials/BackgroundAnimation";
import {
    AboutDr,
    QualificationsExperience,
    Hero,
    MissionVision,
    OurClinic,
    PracticePhilosophy,
} from "@/components/pages/about/sections";
import { BreadCrumb } from "@/components/partials";

export function AboutPage() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <Hero />
            <main className="flex-1 w-full flex flex-col justify-center items-center">
                {/* Soothing Particles Background */}
                <BackgroundAnimation />
                {/* Breadcrumb */}
                <BreadCrumb currentPage="About Us" />
                {/* Mission & Vision */}
                <MissionVision />
                {/* About Dr. Muhammad Zahid */}
                <AboutDr />

                {/* Practice Philosophy */}
                <PracticePhilosophy />

                {/* Our Clinic */}
                <OurClinic />

                {/* Certifications & Affiliations */}
                <QualificationsExperience />
            </main>
        </div>
    );
}
