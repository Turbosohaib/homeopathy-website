"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TopBar from "./TopBar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/homeopathy", label: "Homeopathy" },
    { href: "/diseases", label: "Diseases" },
    { href: "/treatment", label: "Treatment" },
    { href: "#appointment", label: "Contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname();

    const toggleMobileNav = () => setIsOpen((prev) => !prev);

    const isActive = (href: string) => {
        if (href.startsWith("#")) return false;
        return pathname === href;
    };

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowHeader(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <motion.header
                initial={isMobile ? false : { y: -100, opacity: 0 }}
                animate={isMobile ? {} : { y: showHeader ? 0 : -100, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="sm:fixed sticky top-0 z-50 w-full bg-background border-b"
            >
                <TopBar />
                <div className="flex h-16 items-center justify-between sm:px-6 px-5">
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                            <Image
                                src="/assets/logos/homopathy-logo.png"
                                alt="Doctor's Logo"
                                width={40}
                                height={40}
                                className="rounded-md"
                            />
                        </motion.div>
                        <span className="text-xl font-bold">Dr. Muhammad Zahid</span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-5">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ scale: 1.05 }}
                                className={`relative font-medium transition-colors border-b-2 ${isActive(item.href)
                                    ? "text-[#0059B3] border-[#0059B3]"
                                    : "border-transparent hover:text-[#0059B3] hover:border-[#0059B3]"
                                    }`}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                                <Link href="#appointment">Book Appointment</Link>
                            </Button>
                        </motion.div>
                    </nav>

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

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden"
                        >
                            <div className="flex flex-col space-y-2 px-2 py-2">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={`font-medium transition-colors border-b-2 ${isActive(item.href)
                                            ? "text-[#0059B3] border-[#0059B3]"
                                            : "border-transparent hover:text-[#0059B3] hover:border-[#0059B3]"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                                    <Link href="#appointment">Book Appointment</Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default Header;
