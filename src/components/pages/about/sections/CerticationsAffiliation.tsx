import React from 'react'
import Image from 'next/image'

export const CerticationsAffiliation = () => {
    return (
        <section id="certifications" className="py-16 px-6 sm:px-24 z-10">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Certifications & Affiliations
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        We maintain the highest standards through professional
                        affiliations and certifications.
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
                        <h3 className="font-bold text-center">
                            International Homeopathic Association
                        </h3>
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
                        <h3 className="font-bold text-center">
                            American Institute of Homeopathy
                        </h3>
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
                        <h3 className="font-bold text-center">
                            Homeopathic Research Foundation
                        </h3>
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
                        <h3 className="font-bold text-center">
                            Global Complementary Medicine Association
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
