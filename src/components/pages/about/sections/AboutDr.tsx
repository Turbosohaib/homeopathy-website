import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Award, Building, GraduationCap } from "lucide-react";
import Link from "next/link";

export const AboutDr = () => {
    return (
        <section id="about" className="py-16 px-6 sm:px-24 w-full flex items-center justify-center">
            <div className="container z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Meet Dr. Muhammad Zahid
                    </h2>
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
                                <p className="text-primary font-medium mb-4">
                                    Homeopathic Physician
                                </p>
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
                                    <Link
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
                                    </Link>
                                    <Link
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
                                    </Link>
                                    <Link
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <Tabs defaultValue="biography" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger className="cursor-pointer" value="biography">
                                    Biography
                                </TabsTrigger>
                                <TabsTrigger className="cursor-pointer" value="expertise">
                                    Expertise
                                </TabsTrigger>
                                <TabsTrigger className="cursor-pointer" value="research">
                                    Research
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent
                                value="biography"
                                className="p-6 bg-white rounded-lg shadow-sm mt-4"
                            >
                                <h3 className="text-xl font-bold mb-4">
                                    Professional Background
                                </h3>
                                <p className="mb-4">
                                    Dr. Muhammad Zahid is a renowned homeopathic physician with
                                    over 20 years of experience in treating various chronic and
                                    acute conditions. He completed his Bachelor of Homeopathic
                                    Medicine and Surgery (BHMS) from a prestigious medical college
                                    and later earned his MD in Homeopathy, specializing in chronic
                                    disease management.
                                </p>
                                <p className="mb-4">
                                    After completing his education, Dr. Zahid worked at several
                                    leading homeopathic hospitals before establishing his own
                                    practice. His dedication to providing personalized care and
                                    his scientific approach to homeopathy has earned him
                                    recognition both nationally and internationally.
                                </p>
                                <h3 className="text-xl font-bold mb-4 mt-8">
                                    Philosophy of Care
                                </h3>
                                <p className="mb-4">
                                    Dr. Zahid believes in treating the whole person, not just the
                                    disease. His approach combines classical homeopathic
                                    principles with modern medical knowledge, ensuring that each
                                    patient receives comprehensive care tailored to their unique
                                    needs.
                                </p>
                                <p>
                                    &quot;Homeopathy is not just about treating symptoms;
                                    it&apos;s about understanding the root cause of illness and
                                    stimulating the body&apos;s natural healing mechanisms. When
                                    practiced with scientific rigor, homeopathy can offer
                                    effective solutions for many chronic conditions that
                                    conventional medicine struggles to address completely.&quot; -
                                    Dr. Zahid
                                </p>
                            </TabsContent>
                            <TabsContent
                                value="expertise"
                                className="p-6 bg-white rounded-lg shadow-sm mt-4"
                            >
                                <h3 className="text-xl font-bold mb-4">
                                    Areas of Specialization
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="mr-4 h-8 w-8 px-4 rounded-full bg-[#0059B3]/10 flex items-center justify-center">
                                            <span className="text-primary font-bold">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Chronic Disease Management</h4>
                                            <p className="text-muted-foreground">
                                                Specialized treatment for arthritis, asthma, allergies,
                                                and autoimmune disorders using advanced homeopathic
                                                protocols.
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
                                                Treatment of skin disorders including eczema, psoriasis,
                                                acne, and other persistent skin problems with proven
                                                homeopathic remedies.
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
                                                Comprehensive treatment for IBS, Crohn&apos;s disease,
                                                ulcerative colitis, and other gastrointestinal issues.
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
                                                Holistic approach to anxiety, depression, stress-related
                                                disorders, and other mental health concerns.
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
                                                Gentle and effective treatments for children&apos;s
                                                health issues, including developmental concerns,
                                                behavioral problems, and recurrent infections.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>
                            <TabsContent
                                value="research"
                                className="p-6 bg-white rounded-lg shadow-sm mt-4"
                            >
                                <h3 className="text-xl font-bold mb-4">
                                    Research Contributions
                                </h3>
                                <p className="mb-6">
                                    Dr. Zahid has contributed significantly to the field of
                                    homeopathy through his research and publications. His work
                                    focuses on establishing scientific evidence for homeopathic
                                    treatments and developing standardized protocols for chronic
                                    conditions.
                                </p>
                                <div className="space-y-6">
                                    <div className="border-l-4 border-[#0059B3] pl-4">
                                        <h4 className="font-bold">
                                            Clinical Study on Homeopathic Treatment of Rheumatoid
                                            Arthritis
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Published in International Journal of Homeopathy, 2018
                                        </p>
                                        <p className="mt-2">
                                            A double-blind, placebo-controlled study demonstrating the
                                            efficacy of individualized homeopathic treatment in
                                            reducing pain and improving mobility in patients with
                                            rheumatoid arthritis.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-[#0059B3] pl-4">
                                        <h4 className="font-bold">
                                            Homeopathic Approaches to Allergic Rhinitis
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Published in Journal of Complementary Medicine, 2020
                                        </p>
                                        <p className="mt-2">
                                            Research showing significant improvement in symptoms and
                                            quality of life in patients with allergic rhinitis treated
                                            with specific homeopathic protocols.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-[#0059B3] pl-4">
                                        <h4 className="font-bold">
                                            Integrative Approach: Combining Homeopathy with
                                            Conventional Medicine
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Published in Homeopathy in Practice, 2022
                                        </p>
                                        <p className="mt-2">
                                            A comprehensive review of cases where homeopathic
                                            treatments were successfully integrated with conventional
                                            medical approaches, highlighting the benefits of
                                            complementary care.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold mb-4">Ongoing Research</h3>
                                    <p>
                                        Dr. Zahid is currently leading a research project on the
                                        efficacy of homeopathic treatments for autoimmune disorders,
                                        with a focus on developing protocols that can be integrated
                                        into mainstream healthcare.
                                    </p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};
