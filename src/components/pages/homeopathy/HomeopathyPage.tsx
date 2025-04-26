import React from "react";
import { BreadCrumb } from "@/components/partials";
import {
    Hero,
    TopicGrid,
    UnderstandingHomeopathy,
} from "@/components/pages/homeopathy/section";

export const HomeopathyPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero />
            <main className="flex-1 w-full flex flex-col justify-center items-center">
                {/* Breadcrumb */}
                <BreadCrumb currentPage="Homeopathy" />
                {/* Introduction */}
                <UnderstandingHomeopathy />
                {/* Topics Grid */}
                <TopicGrid />
            </main>
        </div>
    );
};
