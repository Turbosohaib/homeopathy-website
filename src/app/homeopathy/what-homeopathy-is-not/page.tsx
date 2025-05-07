import Image from "next/image"
import Link from "next/link"
import { ChevronRight, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HomeopathySidebar from "@/components/pages/homeopathy/HomeopathySidebar"

export default function WhatHomeopathyIsNotPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[83vh] sm:h-[84.5vh]">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="relative h-full w-full">
                    <Image
                        src="/assets/images/whathomeopathyisnot-img.webp?height=300&width=1920"
                        alt="What Homeopathy is Not"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeIn">What Homeopathy is Not</h1>
                    <p className="mt-6 max-w-2xl text-lg animate-slideUp">
                        Clarifying common misconceptions and understanding the boundaries of homeopathic treatment.
                    </p>
                </div>
            </section>

            <main id="whathomeopathyisnot" className="flex-1 w-full flex flex-col justify-center items-center">
                {/* Breadcrumb */}
                <section className="border-b bg-muted/30 w-full px-6 z-10">
                    <div className="py-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <Link href="/homeopathy" className="hover:text-primary transition-colors">
                                Homeopathy
                            </Link>
                            <span className="mx-2">/</span>
                            <span>What Homeopathy is Not</span>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-16 pt-5 w-full">
                    <div className="px-6 sm:pr-10 sm:pl-0">
                        <div className="grid md:grid-cols-4 gap-10">
                            {/* Sidebar */}
                            <div className="md:col-span-1">
                                <HomeopathySidebar currentPath="/homeopathy/what-homeopathy-is-not#whathomeopathyisnot" />
                            </div>

                            {/* Main Content */}
                            <div className="md:col-span-3 pt-10">
                                <h2 className="text-3xl font-bold tracking-tight">Clarifying Misconceptions About Homeopathy</h2>
                                <div className="mt-4 h-1 w-20 bg-primary"></div>

                                <p className="mt-8">
                                    As homeopathy has gained popularity, it has also been subject to various misconceptions and
                                    misunderstandings. To fully appreciate what homeopathy is, it&apos;s important to understand what it is
                                    not. This page addresses common misconceptions to provide clarity about the boundaries and nature of
                                    homeopathic medicine.
                                </p>

                                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-8">
                                    <div className="flex">
                                        <AlertCircle className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
                                        <p>
                                            <span className="font-bold">Important Note:</span> Understanding what homeopathy is not helps
                                            patients have realistic expectations and make informed healthcare decisions.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 space-y-10">
                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not a Quick Fix</h3>
                                            <p>
                                                Unlike some conventional medications that may provide immediate symptom relief, homeopathic
                                                treatments often work gradually, especially for chronic conditions. Homeopathy aims to stimulate
                                                the body&apos;s own healing mechanisms, which can take time. While some acute conditions may respond
                                                quickly to homeopathic remedies, chronic conditions typically require patience and consistent
                                                treatment.
                                            </p>
                                            <p className="mt-4">
                                                Homeopathy focuses on treating the underlying cause of illness rather than merely suppressing
                                                symptoms. This approach may take longer but often leads to more lasting results.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not the Same as Herbal Medicine</h3>
                                            <p>
                                                A common misconception is that homeopathy and herbal medicine are the same. While both are
                                                natural approaches to healing, they differ significantly in their principles and preparation
                                                methods:
                                            </p>
                                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                                <li>
                                                    <span className="font-medium">Herbal medicine</span> uses plant materials in their natural
                                                    form or as concentrated extracts, with the active biochemical compounds directly affecting the
                                                    body.
                                                </li>
                                                <li>
                                                    <span className="font-medium">Homeopathy</span> uses highly diluted substances (which may
                                                    include plants, minerals, or animal products) prepared through a specific process of dilution
                                                    and succussion (vigorous shaking).
                                                </li>
                                            </ul>
                                            <p className="mt-4">
                                                While some homeopathic remedies are derived from plants also used in herbal medicine, the
                                                preparation and principles of use are entirely different.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not a One-Size-Fits-All Approach</h3>
                                            <p>
                                                Unlike some conventional treatments where the same medication is prescribed for everyone with a
                                                particular diagnosis, homeopathy is highly individualized. Two people with the same medical
                                                diagnosis may receive completely different homeopathic remedies based on their specific
                                                symptoms, constitution, and overall health picture.
                                            </p>
                                            <p className="mt-4">
                                                This individualization is a fundamental principle of homeopathy and requires a detailed
                                                consultation with a qualified homeopath who considers the totality of symptoms—physical, mental,
                                                and emotional—before prescribing a remedy.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not Anti-Conventional Medicine</h3>
                                            <p>
                                                Homeopathy is not opposed to conventional medicine, and it&apos;s not meant to replace all
                                                conventional medical treatments. Many homeopaths and patients view homeopathy as complementary
                                                to conventional care, not as a replacement for it.
                                            </p>
                                            <p className="mt-4">
                                                Responsible homeopathic practice recognizes the value of conventional medicine, especially in:
                                            </p>
                                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                                <li>Emergency situations requiring immediate intervention</li>
                                                <li>Conditions requiring surgical procedures</li>
                                                <li>Cases where pharmaceutical drugs are essential for managing serious conditions</li>
                                                <li>Diagnostic procedures that provide valuable information about health conditions</li>
                                            </ul>
                                            <p className="mt-4">
                                                At Dr. Zahid Homeopathy, we believe in an integrative approach that utilizes the best of both
                                                homeopathic and conventional medicine for optimal patient care.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not a Religious or Spiritual Practice</h3>
                                            <p>
                                                While homeopathy takes a holistic approach to health, considering mental and emotional aspects
                                                alongside physical symptoms, it is not a religious or spiritual practice. It is a medical system
                                                based on specific principles of healing developed through observation and experimentation.
                                            </p>
                                            <p className="mt-4">
                                                Homeopathy does not require any particular belief system to be effective. Its remedies work
                                                based on their interaction with the body&apos;s physiological processes, not through spiritual or
                                                mystical means.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not Unregulated or Unstandardized</h3>
                                            <p>
                                                In many countries, homeopathy is regulated, with standards for education, practice, and remedy
                                                preparation. Homeopathic pharmacies follow strict guidelines for manufacturing remedies to
                                                ensure consistency and quality.
                                            </p>
                                            <p className="mt-4">
                                                Professional homeopathic organizations establish standards of practice and ethical guidelines
                                                for practitioners. Qualified homeopaths undergo extensive training in homeopathic principles,
                                                materia medica (the study of remedies), and clinical practice.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-4">Homeopathy is Not Limited to Minor Health Issues</h3>
                                            <p>
                                                While homeopathy is often associated with treating minor ailments, its scope extends to
                                                supporting patients with various chronic and complex conditions. Homeopathy can be valuable in:
                                            </p>
                                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                                <li>Managing chronic conditions like arthritis, asthma, and allergies</li>
                                                <li>Supporting patients with autoimmune disorders</li>
                                                <li>Addressing mental health concerns like anxiety and depression</li>
                                                <li>Helping with hormonal imbalances and women&apos;s health issues</li>
                                            </ul>
                                            <p className="mt-4">
                                                However, it&apos;s important to note that for serious or life-threatening conditions, homeopathy is
                                                best used as a complement to appropriate conventional medical care, not as the sole treatment.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Conclusion */}
                                    <div className="bg-muted/30 p-6 rounded-lg mt-8">
                                        <h3 className="text-xl font-bold mb-4">Understanding the True Nature of Homeopathy</h3>
                                        <p>
                                            By understanding what homeopathy is not, we can better appreciate what it truly is: a systematic,
                                            individualized approach to healthcare that aims to stimulate the body&apos;s natural healing abilities.
                                            At Dr. Zahid Homeopathy, we are committed to practicing evidence-based homeopathy that
                                            complements—rather than conflicts with—conventional medicine when appropriate.
                                        </p>
                                        <p className="mt-2">
                                            We believe that informed patients make better healthcare decisions. If you have questions about
                                            how homeopathy might fit into your healthcare plan, we encourage you to schedule a consultation to
                                            discuss your specific needs and concerns.
                                        </p>
                                    </div>

                                    <div className="mt-10 flex flex-col sm:flex-row gap-4  justify-between items-center">
                                        <Button variant="outline" asChild>
                                            <Link href="/homeopathy/what-is-homeopathy">
                                                <ChevronRight className="mr-2 h-4 w-4 rotate-180" /> What is Homeopathy?
                                            </Link>
                                        </Button>
                                        <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                                            <Link href="/homeopathy/what-doctors-wont-tell">
                                                What Your Doctor Won&apos;t Tell You <ChevronRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
