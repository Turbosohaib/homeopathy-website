import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, UserSquare, Sofa, Wind, Check } from 'lucide-react';

export const OurClinic = () => {
    return (
        <section id="clinic" className="py-16 px-6 sm:px-24 w-full flex items-center justify-center">
            <div className="container z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Our Clinic
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Our simple yet comfortable clinic is designed to provide a
                        healing environment for all patients.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Card className="border-0 shadow-md overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex items-start mb-6 border-b pb-6">
                                <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mr-4">
                                    <MapPin className="h-6 w-6 text-[#0059B3]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Peshawar Clinic</h3>
                                    <p className="text-muted-foreground">
                                        Seena Ploy clinic Board Bus Stop Jamrud Road Peshawar
                                    </p>
                                </div>
                            </div>

                            <p className="mb-6">
                                Our clinic provides a comfortable environment for
                                patients seeking homeopathic treatment. The facility
                                features:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-[#0059B3]/5 rounded-lg p-4 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mb-3">
                                        <Users className="h-6 w-6 text-[#0059B3]" />
                                    </div>
                                    <h4 className="font-medium mb-1">Men&apos;s Waiting Area</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Comfortable seating with privacy
                                    </p>
                                </div>

                                <div className="bg-[#0059B3]/5 rounded-lg p-4 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-[#0059B3]/10 flex items-center justify-center mb-3">
                                        <Users className="h-6 w-6 text-[#0059B3]" />
                                    </div>
                                    <h4 className="font-medium mb-1">Women&apos;s Waiting Area</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Separate space ensuring comfort and privacy
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#0059B3]/5 p-6 rounded-lg">
                                <h4 className="font-bold mb-4 flex items-center">
                                    <span className="h-8 w-8 rounded-full bg-[#0059B3]/10 flex items-center justify-center mr-2">
                                        <Check className="h-4 w-4 text-[#0059B3]" />
                                    </span>
                                    Clinic Features
                                </h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start">
                                        <div className="h-8 w-8 rounded-full bg-[#0059B3]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <Users className="h-4 w-4 text-[#0059B3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Separate Waiting Areas</p>
                                            <p className="text-sm text-muted-foreground">For men and women</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-8 w-8 rounded-full bg-[#0059B3]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <UserSquare className="h-4 w-4 text-[#0059B3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Consultation Room</p>
                                            <p className="text-sm text-muted-foreground">With Dr. Muhammad Zahid</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-8 w-8 rounded-full bg-[#0059B3]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <Sofa className="h-4 w-4 text-[#0059B3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Comfortable Seating</p>
                                            <p className="text-sm text-muted-foreground">For patient comfort</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="h-8 w-8 rounded-full bg-[#0059B3]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <Wind className="h-4 w-4 text-[#0059B3]" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Peaceful Environment</p>
                                            <p className="text-sm text-muted-foreground">Clean and calming atmosphere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}