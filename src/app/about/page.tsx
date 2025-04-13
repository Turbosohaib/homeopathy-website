/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image"
import { Award, BookOpen, Building, GraduationCap, Heart, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/partials/Header"
import Footer from "@/components/partials/Footer"


export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* Hero Section */}
            <section className="relative h-[83vh] w-full">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="relative h-full w-full">
                    <Image
                        src="/assets/images/about-hero-img.jpg?height=400&width=1920"
                        alt="About Us Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
                    <p className="mt-6 max-w-2xl text-lg px-5 sm:px-0">
                        Learn about our mission and Dr. Muhammad Zahid&apos;s commitment to providing exceptional homeopathic care.
                    </p>
                </div>
            </section>
            <main className="flex-1 w-full flex flex-col justify-center items-center ">
                {/* Breadcrumb */}
                <section className="border-b bg-muted/30 w-full px-6 sm:px-24">
                    <div className="container py-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <a href="/" className="hover:text-primary transition-colors">
                                Home
                            </a>
                            <span className="mx-2">/</span>
                            <span>About Us</span>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 px-6 sm:px-24">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Mission & Vision</h2>
                                <div className="mt-4 h-1 w-20 bg-[#0059B3]"></div>
                                <p className="mt-6 text-muted-foreground">
                                    At Dr. Muhammad Zahid Homeopathy, our mission is to provide the highest quality homeopathic care using
                                    scientific principles and evidence-based approaches. We are dedicated to treating the whole person,
                                    not just the symptoms, and to helping our patients achieve optimal health and wellness.
                                </p>
                                <p className="mt-4 text-muted-foreground">
                                    Our vision is to be a trusted provider of homeopathic medicine, recognized for our scientific
                                    approach, exceptional patient outcomes, and contributions to advancing the field of homeopathy through
                                    research and education.
                                </p>
                                <div className="mt-8 flex flex-col sm:grid grid-cols-2 gap-4">
                                    <div className="flex items-start">
                                        <div className="mr-4 h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                            <Heart className="h-6 w-6 text-[#0059B3]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Patient-Centered</h3>
                                            <p className="text-sm text-muted-foreground">Individualized care for each patient</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4 h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                            <BookOpen className="h-6 w-6 text-[#0059B3]" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Evidence-Based</h3>
                                            <p className="text-sm text-muted-foreground">Scientific approach to homeopathy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <Image src="/assets/images/vision.jpg?height=400&width=600" alt="Our Mission" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Dr. Muhammad Zahid */}
                <section className="py-16 bg-muted/30 px-6 sm:px-24 w-full flex items-center justify-center">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Meet Dr. Muhammad Zahid</h2>
                            <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            <div className="md:col-span-1">
                                <div className="sticky top-24">
                                    <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                                        <Image
                                            src="/assets/images/dr.png?height=400&width=300"
                                            alt="Dr. Muhammad Zahid"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-bold mb-4">Dr. Muhammad Zahid</h3>
                                        <p className="text-primary font-medium mb-4">Homeopathic Physician</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <GraduationCap className="h-5 w-5 text-primary mr-3" />
                                                <span>BHMS, MD (Homeopathy)</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Award className="h-5 w-5 text-primary mr-3" />
                                                <span>20+ Years Experience</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Building className="h-5 w-5 text-primary mr-3" />
                                                <span>International Homeopathic Association</span>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex space-x-4">
                                            <a
                                                href="#"
                                                className="h-10 w-10 rounded-full bg-[#0059B3]/10 flex items-center justify-center text-primary hover:bg-[#0059B3]/20 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#0059B3"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="h-10 w-10 rounded-full bg-[#0059B3]/10 flex items-center justify-center text-primary hover:bg-[#0059B3]/20 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#0059B3"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="#"
                                                className="h-10 w-10 rounded-full bg-[#0059B3]/10 flex items-center justify-center text-primary hover:bg-[#0059B3]/20 transition-colors"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="#0059B3"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect width="4" height="12" x="2" y="9" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <Tabs defaultValue="biography" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="biography">Biography</TabsTrigger>
                                        <TabsTrigger value="expertise">Expertise</TabsTrigger>
                                        <TabsTrigger value="research">Research</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="biography" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                                        <h3 className="text-xl font-bold mb-4">Professional Background</h3>
                                        <p className="mb-4">
                                            Dr. Muhammad Zahid is a renowned homeopathic physician with over 20 years of experience in
                                            treating various chronic and acute conditions. He completed his Bachelor of Homeopathic Medicine
                                            and Surgery (BHMS) from a prestigious medical college and later earned his MD in Homeopathy,
                                            specializing in chronic disease management.
                                        </p>
                                        <p className="mb-4">
                                            After completing his education, Dr. Zahid worked at several leading homeopathic hospitals before
                                            establishing his own practice. His dedication to providing personalized care and his scientific
                                            approach to homeopathy has earned him recognition both nationally and internationally.
                                        </p>
                                        <h3 className="text-xl font-bold mb-4 mt-8">Philosophy of Care</h3>
                                        <p className="mb-4">
                                            Dr. Zahid believes in treating the whole person, not just the disease. His approach combines
                                            classical homeopathic principles with modern medical knowledge, ensuring that each patient
                                            receives comprehensive care tailored to their unique needs.
                                        </p>
                                        <p>
                                            &quot;Homeopathy is not just about treating symptoms; it&apos;s about understanding the root cause of
                                            illness and stimulating the body&apos;s natural healing mechanisms. When practiced with scientific
                                            rigor, homeopathy can offer effective solutions for many chronic conditions that conventional
                                            medicine struggles to address completely.&quot; - Dr. Zahid
                                        </p>
                                    </TabsContent>
                                    <TabsContent value="expertise" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                                        <h3 className="text-xl font-bold mb-4">Areas of Specialization</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start">
                                                <div className="mr-4 h-8 w-8 px-4 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold">1</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Chronic Disease Management</h4>
                                                    <p className="text-muted-foreground">
                                                        Specialized treatment for arthritis, asthma, allergies, and autoimmune disorders using
                                                        advanced homeopathic protocols.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="mr-4 h-8 w-8 px-4 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold">2</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Dermatological Conditions</h4>
                                                    <p className="text-muted-foreground">
                                                        Treatment of skin disorders including eczema, psoriasis, acne, and other persistent skin
                                                        problems with proven homeopathic remedies.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="mr-4 h-8 w-8 px-4 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold">3</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Digestive System Disorders</h4>
                                                    <p className="text-muted-foreground">
                                                        Comprehensive treatment for IBS, Crohn&apos;s disease, ulcerative colitis, and other
                                                        gastrointestinal issues.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="mr-4 h-8 w-8 px-4 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold">4</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Mental Health</h4>
                                                    <p className="text-muted-foreground">
                                                        Holistic approach to anxiety, depression, stress-related disorders, and other mental health
                                                        concerns.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="mr-4 h-8 w-8 px-4 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold">5</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">Pediatric Care</h4>
                                                    <p className="text-muted-foreground">
                                                        Gentle and effective treatments for children&apos;s health issues, including developmental
                                                        concerns, behavioral problems, and recurrent infections.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </TabsContent>
                                    <TabsContent value="research" className="p-6 bg-white rounded-lg shadow-sm mt-4">
                                        <h3 className="text-xl font-bold mb-4">Research Contributions</h3>
                                        <p className="mb-6">
                                            Dr. Zahid has contributed significantly to the field of homeopathy through his research and
                                            publications. His work focuses on establishing scientific evidence for homeopathic treatments and
                                            developing standardized protocols for chronic conditions.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="border-l-4 border-[#0059B3] pl-4">
                                                <h4 className="font-bold">Clinical Study on Homeopathic Treatment of Rheumatoid Arthritis</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Published in International Journal of Homeopathy, 2018
                                                </p>
                                                <p className="mt-2">
                                                    A double-blind, placebo-controlled study demonstrating the efficacy of individualized
                                                    homeopathic treatment in reducing pain and improving mobility in patients with rheumatoid
                                                    arthritis.
                                                </p>
                                            </div>
                                            <div className="border-l-4 border-[#0059B3] pl-4">
                                                <h4 className="font-bold">Homeopathic Approaches to Allergic Rhinitis</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Published in Journal of Complementary Medicine, 2020
                                                </p>
                                                <p className="mt-2">
                                                    Research showing significant improvement in symptoms and quality of life in patients with
                                                    allergic rhinitis treated with specific homeopathic protocols.
                                                </p>
                                            </div>
                                            <div className="border-l-4 border-[#0059B3] pl-4">
                                                <h4 className="font-bold">
                                                    Integrative Approach: Combining Homeopathy with Conventional Medicine
                                                </h4>
                                                <p className="text-sm text-muted-foreground">Published in Homeopathy in Practice, 2022</p>
                                                <p className="mt-2">
                                                    A comprehensive review of cases where homeopathic treatments were successfully integrated with
                                                    conventional medical approaches, highlighting the benefits of complementary care.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-xl font-bold mb-4">Ongoing Research</h3>
                                            <p>
                                                Dr. Zahid is currently leading a research project on the efficacy of homeopathic treatments for
                                                autoimmune disorders, with a focus on developing protocols that can be integrated into
                                                mainstream healthcare.
                                            </p>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practice Philosophy */}
                <section className="py-16 px-6 sm:px-24">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Practice Philosophy</h2>
                            <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                                Dr. Zahid&apos;s approach to homeopathic medicine is guided by these core principles.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-6 border-0 shadow-md">
                                <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0059B3"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Individualized Care</h3>
                                <p className="text-muted-foreground">
                                    Every patient receives a personalized treatment plan based on their unique symptoms, medical history,
                                    and constitution. Dr. Zahid takes the time to understand each patient&apos;s condition thoroughly before
                                    prescribing remedies.
                                </p>
                            </Card>

                            <Card className="p-6 border-0 shadow-md">
                                <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0059B3"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Scientific Approach</h3>
                                <p className="text-muted-foreground">
                                    Dr. Zahid combines traditional homeopathic principles with modern scientific research. He stays
                                    updated with the latest developments in homeopathy and integrative medicine to provide evidence-based
                                    treatments.
                                </p>
                            </Card>

                            <Card className="p-6 border-0 shadow-md">
                                <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#0059B3"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6 text-primary"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Holistic Healing</h3>
                                <p className="text-muted-foreground">
                                    Dr. Zahid treats the whole person, not just isolated symptoms. His approach addresses physical,
                                    emotional, and mental aspects of health to promote complete healing and prevent recurrence of illness.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Clinic */}
                <section className="py-16 bg-muted/30 px-6 sm:px-24 w-full flex items-center justify-center">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Clinic</h2>
                            <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                                Our simple yet comfortable clinic is designed to provide a healing environment for all patients.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Card className="border-0 shadow-md">
                                <CardContent className="p-0">
                                    <div className="relative h-64 w-full">
                                        <Image
                                            src="/placeholder.svg?height=300&width=600"
                                            alt="Peshawar Clinic"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start mb-4">
                                            <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3" />
                                            <div>
                                                <h3 className="text-xl font-bold">Peshawar Clinic</h3>
                                                <p className="text-muted-foreground">Nouthia Jadeed, Peshawar Cantt, Pakistan</p>
                                            </div>
                                        </div>
                                        <p className="mb-4">
                                            Our clinic provides a comfortable environment for patients seeking homeopathic treatment. The
                                            facility features:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            <div className="relative h-24 rounded-md overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=100&width=200"
                                                    alt="Men's Waiting Area"
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <span className="text-white font-medium">Men&apos;s Waiting Area</span>
                                                </div>
                                            </div>
                                            <div className="relative h-24 rounded-md overflow-hidden">
                                                <Image
                                                    src="/placeholder.svg?height=100&width=200"
                                                    alt="Women's Waiting Area"
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <span className="text-white font-medium">Women&apos;s Waiting Area</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <h4 className="font-bold mb-2">Clinic Features:</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center">
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
                                                        className="h-5 w-5 text-primary mr-2"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span>Separate waiting areas for men and women</span>
                                                </li>
                                                <li className="flex items-center">
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
                                                        className="h-5 w-5 text-primary mr-2"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span>Consultation room with Dr. Muhammad Zahid</span>
                                                </li>
                                                <li className="flex items-center">
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
                                                        className="h-5 w-5 text-primary mr-2"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span>Comfortable seating arrangements</span>
                                                </li>
                                                <li className="flex items-center">
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
                                                        className="h-5 w-5 text-primary mr-2"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                    <span>Clean and peaceful environment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Certifications & Affiliations */}
                <section className="py-16 px-6 sm:px-24">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Certifications & Affiliations</h2>
                            <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                                We maintain the highest standards through professional affiliations and certifications.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center">
                                <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="International Homeopathic Association"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <h3 className="font-bold text-center">International Homeopathic Association</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="American Institute of Homeopathy"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <h3 className="font-bold text-center">American Institute of Homeopathy</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="Homeopathic Research Foundation"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <h3 className="font-bold text-center">Homeopathic Research Foundation</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <Image
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="Global Complementary Medicine Association"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <h3 className="font-bold text-center">Global Complementary Medicine Association</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 sm:px-24 w-full bg-[#0059B3] text-primary-foreground flex items-center justify-center">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight">Ready to Experience Scientific Homeopathy?</h2>
                                <p className="mt-6">
                                    Schedule a consultation with Dr. Muhammad Zahid to discuss your health concerns and explore
                                    personalized homeopathic treatment options.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                                        <a href="/appointment">Book an Appointment</a>
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                                        <a href="/contact">Contact Us</a>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative h-[300px] rounded-lg overflow-hidden">
                                <Image src="/assets/images/homeopathy-image.webp?height=300&width=500" alt="Consultation" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
