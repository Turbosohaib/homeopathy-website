import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export const Homeopathy = () => {
    return (
        <section className="py-16 px-6 sm:px-24">
            <div className="container">
                <div className="text-center mb-12 z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Scientific Homeopathy
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Discover the science behind homeopathic treatments and how they can
                        effectively address various health conditions.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
                    <Card className="border-0 shadow-lg z-10">
                        <CardContent className="">
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
                            <h3 className="text-xl font-bold">Personalized Care</h3>
                            <p className="mt-2 text-muted-foreground">
                                Treatments tailored to your specific condition, medical history,
                                and individual needs.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg z-10">
                        <CardContent className="">
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
                            <h3 className="text-xl font-bold">Natural Healing</h3>
                            <p className="mt-2 text-muted-foreground">
                                Stimulate your body&apos;s natural healing mechanisms without
                                harmful side effects.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg z-10">
                        <CardContent className="">
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
                            <h3 className="text-xl font-bold">Research-Backed</h3>
                            <p className="mt-2 text-muted-foreground">
                                Treatments supported by clinical research and decades of
                                successful patient outcomes.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center mt-10">
                    <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                        <a href="/homeopathy">
                            Explore Homeopathy <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
