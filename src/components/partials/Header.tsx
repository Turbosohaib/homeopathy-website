/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TopBar from "./TopBar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// Updated navigation structure with sub-menus
const navItems = [
    { href: "/", label: "Home", submenu: false },
    {
        href: "/about",
        label: "About Us",
        submenu: true,
        submenuItems: [
            { href: "/about#mission", label: "Mission & Vision" },
            { href: "/about#about", label: "About Dr. Muhammad Zahid" },
            { href: "/about#clinic", label: "Our Clinic" },
            { href: "/about#practice", label: "Practice Philosophy" },
            { href: "/about#qualifications", label: "Qualifications" },
        ],
    },
    {
        href: "/homeopathy",
        label: "Homeopathy",
        submenu: true,
        submenuItems: [
            { href: "/homeopathy/what-is-homeopathy", label: "What is Homeopathy?" },
            { href: "/homeopathy/facts-and-myths", label: "Facts and Myths" },
            {
                href: "/homeopathy/scientific-homeopathy",
                label: "Scientific Homeopathy",
            },
            { href: "/homeopathy/research", label: "Research" },
            { href: "/homeopathy/benefits", label: "Benefits" },
        ],
    },
    {
        href: "/diseases",
        label: "Conditions Treated",
        submenu: true,
        submenuItems: [
            { href: "/diseases/chronic", label: "Chronic Diseases" },
            { href: "/diseases/skin", label: "Skin Conditions" },
            { href: "/diseases/digestive", label: "Digestive Disorders" },
            { href: "/diseases/mental-health", label: "Mental Health" },
            { href: "/diseases/pediatric", label: "Pediatric Care" },
            { href: "/diseases/all", label: "View All Conditions" },
        ],
    },
    {
        href: "/treatment",
        label: "Treatment Options",
        submenu: true,
        submenuItems: [
            { href: "/treatment/approach", label: "Treatment Approach" },
            { href: "/treatment/consultation", label: "Consultation Process" },
            { href: "/treatment/remedies", label: "Homeopathic Remedies" },
            { href: "/treatment/faq", label: "Treatment FAQs" },
        ],
    },
    {
        href: "/media",
        label: "Media Room",
        submenu: true,
        submenuItems: [
            { href: "/media/articles", label: "Articles" },
            { href: "/media/videos", label: "Videos" },
            { href: "/media/publications", label: "Publications" },
            { href: "/media/news", label: "News" },
        ],
    },
    { href: "/contact", label: "Contact Us", submenu: false },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    const pathname = usePathname();

    const toggleMobileNav = () => setIsOpen((prev) => !prev);
    const isActive = (href: string) =>
        href.startsWith("#")
            ? false
            : pathname === href || pathname.startsWith(href + "/");

    // Close submenu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (!isMobile) setActiveSubmenu(null);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMobile]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        setHasMounted(true);
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            setShowHeader(current < lastScrollY || current < 10);
            setLastScrollY(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close all when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveSubmenu(null);
    }, [pathname]);

    // Function to toggle submenu open/close
    const toggleSubmenu = (index: number) => {
        if (activeSubmenu === index) {
            setActiveSubmenu(null);
        } else {
            setActiveSubmenu(index);
        }
    };

    return (
        <>
            <motion.header
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="sticky top-0 sm:top-[-40px] z-50 w-full bg-background border-b"
            >
                <TopBar />
                <div className="flex h-16 items-center justify-between sm:px-6 px-5">
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
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

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-5">
                        {navItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative"
                                onMouseEnter={() =>
                                    !isMobile && item.submenu && setActiveSubmenu(idx)
                                }
                                onMouseLeave={() =>
                                    !isMobile && item.submenu && setActiveSubmenu(null)
                                }
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center cursor-pointer font-medium transition-colors border-b-2 ${isActive(item.href) ? "text-[#0059B3] border-[#0059B3]" : "border-transparent hover:text-[#0059B3] hover:border-[#0059B3]"}`}
                                >
                                    {item.submenu ? (
                                        <>
                                            <Link href={item.href} className="py-1">
                                                {item.label}
                                            </Link>
                                            <ChevronDown
                                                className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === idx ? "rotate-180" : ""}`}
                                            />
                                        </>
                                    ) : (
                                        <Link href={item.href} className="py-1">
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>

                                {/* Submenu on hover */}
                                {item.submenu && (
                                    <AnimatePresence>
                                        {activeSubmenu === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                                            >
                                                {item.submenuItems?.map((sub, sidx) => (
                                                    <Link
                                                        key={sidx}
                                                        href={sub.href}
                                                        className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isActive(sub.href) ? "text-[#0059B3] font-medium" : "text-gray-700"}`}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
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
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-white"
                        >
                            <div className="flex flex-col space-y-1 px-4 py-3 max-h-[70vh] overflow-y-auto">
                                {navItems.map((item, midx) => (
                                    <div key={midx} className="border-b border-gray-100 py-2">
                                        {item.submenu ? (
                                            <>
                                                <div
                                                    className={`flex items-center justify-between cursor-pointer py-1 ${isActive(item.href) ? "text-[#0059B3] font-medium" : ""}`}
                                                    onClick={() => toggleSubmenu(midx)}
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown
                                                        className={`h-5 w-5 transition-transform ${activeSubmenu === midx ? "rotate-180" : ""}`}
                                                    />
                                                </div>
                                                <AnimatePresence>
                                                    {activeSubmenu === midx && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4"
                                                        >
                                                            {item.submenuItems?.map((sub, sidx2) => (
                                                                <Link
                                                                    onClick={() => setIsOpen(false)}
                                                                    key={sidx2}
                                                                    href={sub.href}
                                                                    className={`block py-1.5 text-sm ${isActive(sub.href) ? "text-[#0059B3] font-medium" : "text-gray-700"}`}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={`block py-1 ${isActive(item.href) ? "text-[#0059B3] font-medium" : ""}`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-2">
                                    <Button
                                        className="w-full bg-[#0059B3] hover:bg-[#002ab3]"
                                        asChild
                                    >
                                        <Link href="#appointment">Book Appointment</Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default Header;
