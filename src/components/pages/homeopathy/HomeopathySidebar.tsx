"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HomeopathySidebarProps {
    currentPath: string;
}

const homeopathyLinks = [
    { title: "What is Homeopathy?", href: "/homeopathy/what-is-homeopathy#whatishomeopathy" },
    { title: "What Homeopathy is Not", href: "/homeopathy/what-homeopathy-is-not" },
    { title: "What Your Doctor Won't Tell You", href: "/homeopathy/what-doctors-wont-tell" },
    { title: "Facts and Myths", href: "/homeopathy/facts-and-myths#facts&myths" },
    { title: "Scientific Homeopathy", href: "/homeopathy/scientific-homeopathy" },
    { title: "Homeopathy Research", href: "/homeopathy/research" },
    { title: "What Doctors Should Know", href: "/homeopathy/for-doctors" },
    { title: "How to Find a Good Homeopath?", href: "/homeopathy/find-good-homeopath" },
    { title: "Benefits of Homeopathy", href: "/homeopathy/benefits" },
    { title: "FAQ on Various Diseases", href: "/homeopathy/faq-diseases" },
    { title: "Homeopathic Clinics", href: "/homeopathy/clinics" },
    { title: "Integration with Conventional Medicine", href: "/homeopathy/integration-conventional-medicine" },
    { title: "Homeopathic Doctors", href: "/homeopathy/doctors" },
    { title: "Sources of Medicines", href: "/homeopathy/medicine-sources" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function HomeopathySidebar({ currentPath }: HomeopathySidebarProps) {
    return (
        <motion.div
            className="bg-muted/30 rounded-lg p-6 sticky top-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h3
                className="text-lg font-bold mb-4"
                variants={itemVariants}
            >
                Homeopathy Topics
            </motion.h3>

            <motion.nav>
                <motion.ul className="space-y-2">
                    {homeopathyLinks.map((link, index) => (
                        <motion.li key={index} variants={itemVariants}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "block py-2 px-3 rounded-md transition-colors",
                                    currentPath === link.href
                                        ? "bg-[#0059B3] text-primary-foreground font-medium"
                                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.title}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>

            <motion.div
                className="mt-8 p-4 bg-primary/10 rounded-lg"
                variants={itemVariants}
            >
                <h4 className="font-bold text-primary">Need Help?</h4>
                <p className="text-sm mt-2">Have questions about homeopathic treatment?</p>
                <Link
                    href="/contact"
                    className="mt-3 text-sm font-medium text-primary hover:underline inline-block"
                >
                    Contact Us
                </Link>
            </motion.div>
        </motion.div>
    );
}
