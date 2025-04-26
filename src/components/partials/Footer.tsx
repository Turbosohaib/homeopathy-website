import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react"
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className="bg-[#0059B3] text-primary-foreground w-full flex justify-center items-center py-12 px-6 sm:px-24">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Dr. Muhammad Zahid Homeopathy</h3>
                        <p className="text-primary-foreground/80">
                            Providing scientific homeopathic treatments with proven results and personalized care.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
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
                                    className="h-5 w-5"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
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
                                    className="h-5 w-5"
                                >
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
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
                                    className="h-5 w-5"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-primary-foreground hover:text-primary-foreground/80">
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
                                    className="h-5 w-5"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/homeopathy" className="text-primary-foreground/80 hover:text-primary-foreground">
                                    Homeopathy
                                </Link>
                            </li>
                            <li>
                                <Link href="/diseases" className="text-primary-foreground/80 hover:text-primary-foreground">
                                    Diseases
                                </Link>
                            </li>
                            <li>
                                <Link href="/treatment" className="text-primary-foreground/80 hover:text-primary-foreground">
                                    Treatment
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Homeopathy</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/homeopathy/what-is-homeopathy"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    What is Homeopathy?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/homeopathy/facts-and-myths"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    Facts and Myths
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/homeopathy/scientific-homeopathy"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    Scientific Homeopathy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/homeopathy/research"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    Homeopathy Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/homeopathy/benefits"
                                    className="text-primary-foreground/80 hover:text-primary-foreground"
                                >
                                    Benefits of Homeopathy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                                <span className="text-primary-foreground/80">+92-91-2551199</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                                <span className="text-primary-foreground/80">0335-9251199</span>
                            </li>
                            <li className="flex items-start">
                                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                                <span className="text-primary-foreground/80">info@sjconsult.org</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                                <span className="text-primary-foreground/80">Peshawar, Kpk</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
                    <p>&copy; {new Date().getFullYear()} Dr. Muhammad Zahid Homeopathy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer