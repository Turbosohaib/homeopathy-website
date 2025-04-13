/* eslint-disable @next/next/no-html-link-for-pages */
"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TopBar from "./TopBar";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/homeopathy", label: "Homeopathy" },
    { href: "/diseases", label: "Diseases" },
    { href: "/treatment", label: "Treatment" },
    { href: "#contact", label: "Contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileNav = () => {
        setIsOpen((prev) => !prev);
    };

    const isActive = (href: string) => {
        // Handles hash links like "#contact"
        if (href.startsWith("#")) return false;
        return pathname === href;
    };

    return (
        <>
            <TopBar />
            <header className="sticky top-0 z-50 w-full bg-background border-b sm:px-10 px-5">
                <div className="flex h-16 items-center justify-between">
                    <a href="/" className="flex items-center space-x-2">
                        <Image
                            src="/assets/logos/homopathy-logo.png"
                            alt="Doctor's Logo"
                            width={40}
                            height={40}
                            className="rounded-md"
                        />
                        <span className="text-xl font-bold">Dr. Muhammad Zahid</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-5">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`font-medium transition-colors border-b-2 ${isActive(item.href)
                                    ? "text-[#0059B3] border-[#0059B3]"
                                    : "border-transparent hover:text-[#0059B3] hover:border-[#0059B3]"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                            <a href="/appointment">Book Appointment</a>
                        </Button>
                    </nav>

                    {/* Mobile nav button */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="lg:hidden cursor-pointer"
                        onClick={toggleMobileNav}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col space-y-2 px-2 py-2">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`font-medium transition-colors border-b-2 ${isActive(item.href)
                                    ? "text-[#0059B3] border-[#0059B3]"
                                    : "border-transparent hover:text-[#0059B3] hover:border-[#0059B3]"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                            <a href="/appointment">Book Appointment</a>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
