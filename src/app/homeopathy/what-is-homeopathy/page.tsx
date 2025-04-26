import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HomeopathySidebar from "@/components/pages/homeopathy/HomeopathySidebar"

export default function WhatIsHomeopathyPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[83vh] sm:h-[84.5vh]">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="relative h-full w-full">
                    <Image
                        src="/assets/images/whatishomeopathy.webp?height=300&width=1920"
                        alt="What is Homeopathy"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeIn">What is Homeopathy?</h1>
                    <p className="mt-6 max-w-2xl text-lg animate-slideUp">Understanding the principles and practice of homeopathic medicine.</p>
                </div>
            </section>

            <main className="flex-1 w-full flex flex-col justify-center items-center">
                {/* Breadcrumb */}
                <section className="border-b bg-muted/30 w-full px-6 z-10">
                    <div className=" py-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Link href="/" className="hover:text-primary transition-colors">
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <span>Homeopathy</span>
                            <span className="mx-2">/</span>
                            <span>What is Homeopathy</span>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16">
                    <div className="px-6 sm:pr-10 sm:pl-0">
                        <div className="grid md:grid-cols-4 gap-10">
                            {/* Sidebar */}
                            <div className="md:col-span-1">
                                <HomeopathySidebar currentPath="/homeopathy/what-is-homeopathy" />
                            </div>

                            {/* Main Content */}
                            <div className="md:col-span-3">
                                <h2 className="text-3xl font-bold tracking-tight">The Fundamentals of Homeopathy</h2>
                                <div className="mt-4 h-1 w-20 bg-primary"></div>

                                <div className="mt-8 space-y-6">
                                    <p>
                                        Homeopathy is a medical system developed in the late 18th century by German physician Samuel
                                        Hahnemann. The term &quot;homeopathy&quot; comes from the Greek words &quot;homoios&quot; (similar) and &quot;pathos&quot;
                                        (suffering), embodying the principle that &apos;like cures like&apos;.
                                    </p>

                                    <div className="relative h-[300px] rounded-lg overflow-hidden my-8">
                                        <Image
                                            src="/assets/images/homeopathicremedies.webp?height=300&width=800"
                                            alt="Homeopathic remedies"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mt-8">Core Principles</h3>

                                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                                        <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                            <CardContent className="p-6">
                                                <h4 className="text-xl font-bold mb-2">Law of Similars</h4>
                                                <p>
                                                    The principle that a substance that causes symptoms in a healthy person can be used in minute
                                                    doses to treat similar symptoms in a sick person. This is the foundation of &quot;like cures like.&quot;
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                            <CardContent className="p-6">
                                                <h4 className="text-xl font-bold mb-2">Individualization</h4>
                                                <p>
                                                    Homeopathic treatment is tailored to each individual&apos;s specific symptoms, considering their
                                                    physical, mental, and emotional state rather than just the named disease.
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                            <CardContent className="p-6">
                                                <h4 className="text-xl font-bold mb-2">Minimum Dose</h4>
                                                <p>
                                                    Homeopathic remedies are prepared through a process of dilution and succussion (vigorous
                                                    shaking), resulting in extremely small doses that are still therapeutically active.
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-0 shadow-lg z-10 bg-[#f7fcf9]">
                                            <CardContent className="p-6">
                                                <h4 className="text-xl font-bold mb-2">Holistic Approach</h4>
                                                <p>
                                                    Homeopathy treats the whole person, not just isolated symptoms, recognizing that physical,
                                                    mental, and emotional aspects are interconnected.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <h3 className="text-2xl font-bold mt-10">How Homeopathy Works</h3>
                                    <p>
                                        Homeopathic remedies stimulate the body&apos;s own healing mechanisms. Rather than suppressing symptoms,
                                        which are the body&apos;s attempt to restore health, homeopathy works with these natural processes to
                                        strengthen the body&apos;s vital force and restore balance.
                                    </p>

                                    <p>
                                        The exact mechanism of action is still being researched, but studies suggest that the process of
                                        dilution and succussion creates nanoparticles of the original substance that can interact with the
                                        body at a cellular level, triggering a healing response.
                                    </p>

                                    <h3 className="text-2xl font-bold mt-10">The Homeopathic Consultation</h3>
                                    <p>
                                        A homeopathic consultation is typically much longer than a conventional medical appointment. The
                                        homeopath takes a detailed case history, asking about physical symptoms, mental and emotional
                                        states, lifestyle, diet, and personal and family medical history.
                                    </p>

                                    <p>
                                        This comprehensive approach allows the homeopath to understand the unique expression of the illness
                                        in each individual and to select the most appropriate remedy based on the totality of symptoms.
                                    </p>

                                    <div className="bg-muted/30 p-6 rounded-lg mt-8">
                                        <h3 className="text-xl font-bold mb-4">Scientific Homeopathy at Dr. Zahid&apos;s Practice</h3>
                                        <p>
                                            At Dr. Zahid Homeopathy, we practice scientific homeopathy, which combines traditional homeopathic
                                            principles with modern medical knowledge and research. Our approach is evidence-based,
                                            personalized, and focused on treating the root cause of illness rather than just suppressing
                                            symptoms.
                                        </p>
                                        <p className="mt-2">
                                            We use advanced diagnostic methods alongside homeopathic case-taking to ensure a comprehensive
                                            understanding of each patient&apos;s condition, leading to more precise remedy selection and better
                                            treatment outcomes.
                                        </p>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-2xl font-bold">Common Questions About Homeopathy</h3>
                                        <div className="mt-6 space-y-6">
                                            <div>
                                                <h4 className="text-lg font-bold">Is homeopathy safe?</h4>
                                                <p className="mt-2">
                                                    Yes, homeopathic remedies are highly diluted and generally considered safe. They have minimal
                                                    to no side effects and can be used by people of all ages, including infants, pregnant women,
                                                    and the elderly.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold">How long does homeopathic treatment take?</h4>
                                                <p className="mt-2">
                                                    The duration of treatment depends on the nature of the condition, its severity, and how long
                                                    you&apos;ve had it. Acute conditions may respond quickly, while chronic conditions typically
                                                    require longer treatment. Your homeopath will discuss the expected timeline during your
                                                    consultation.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold">Can homeopathy be used alongside conventional medicine?</h4>
                                                <p className="mt-2">
                                                    Yes, homeopathy can complement conventional medical treatments. However, it&apos;s important to
                                                    inform both your homeopath and conventional doctor about all treatments you&apos;re receiving to
                                                    ensure coordinated care.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 flex justify-between items-center">
                                        <Button variant="outline" asChild>
                                            <Link href="/homeopathy">
                                                <ChevronRight className="mr-2 h-4 w-4 rotate-180" /> Back to Homeopathy
                                            </Link>
                                        </Button>
                                        <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                                            <Link href="/homeopathy/what-homeopathy-is-not">
                                                What Homeopathy is Not <ChevronRight className="ml-2 h-4 w-4" />
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
