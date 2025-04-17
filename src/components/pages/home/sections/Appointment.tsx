import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import AppointmentForm from "@/components/partials/appointment-form";

export const Appointment = () => {
    return (
        <section id="appointment" className="py-16 sm:px-24 bg-muted">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="px-6 sm:px-0 z-10">
                        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                            Book an Appointment
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-[#0059B3]"></div>
                        <p className="mt-6 text-muted-foreground">
                            Schedule a consultation with Dr. Muhaa=mmad Zahid to discuss your
                            health concerns and explore homeopathic treatment options.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start">
                                <Phone className="h-5 w-5 text-[#0059B3] mt-0.5 mr-3" />
                                <div>
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-muted-foreground">+92-91-2551199</p>
                                    <p className="text-muted-foreground">0335-9251199</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-[#0059B3] mt-0.5 mr-3" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">info@sjconsult.org</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-[#0059B3] mt-0.5 mr-3" />
                                <div>
                                    <h3 className="font-medium">Locations</h3>
                                    <p className="text-muted-foreground">
                                        Hussain plaza Shell Oil Pump
                                    </p>
                                    <p className="text-muted-foreground">Hussain Abad Gulbahar</p>
                                    <p className="text-muted-foreground">
                                        Seena Ploy clinic Board Bus Stop
                                    </p>
                                    <p className="text-muted-foreground">Jamrud Road Peshawar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-10">
                        <AppointmentForm />
                    </div>
                </div>
            </div>
        </section>
    );
};
