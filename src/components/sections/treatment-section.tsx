import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const treatments = [
    {
        id: 1,
        title: "Chronic Diseases",
        image: "/assets/images/treatment1.jpg?height=200&width=300",
        description:
            "Effective homeopathic treatments for chronic conditions like arthritis, asthma, and autoimmune disorders.",
        link: "/diseases/chronic",
    },
    {
        id: 2,
        title: "Skin Conditions",
        description: "Natural remedies for eczema, psoriasis, acne, and other persistent skin problems.",
        image: "/assets/images/treatment2.png?height=200&width=300",
        link: "/diseases/skin",
    },
    {
        id: 3,
        title: "Digestive Disorders",
        description: "Homeopathic approaches to IBS, acid reflux, Crohn's disease, and other digestive issues.",
        image: "/assets/images/treatment3.jpg?height=200&width=300",
        link: "/diseases/digestive",
    },
    {
        id: 4,
        title: "Mental Health",
        description: "Support for anxiety, depression, stress, and other mental health concerns through homeopathy.",
        image: "/assets/images/treatment4.png?height=200&width=300",
        link: "/diseases/mental-health",
    },
]

export default function TreatmentSection() {
    return (
        <section className="py-16 px-10 sm:px-24 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Conditions We Treat</h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Dr. Muhammad Zahid specializes in treating a wide range of health conditions using scientific homeopathic approaches.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {treatments.map((treatment) => (
                        <Card key={treatment.id} className="pt-0 border-0 shadow-[0px_0px_5px_0px_rgba(105,105,105,1)]">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={treatment.image || "/placeholder.svg"}
                                    alt={treatment.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardContent className="px-6 pb-6 flex-1 relative">
                                <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                                <p className="text-muted-foreground mb-4">{treatment.description}</p>
                                <Button variant="outline" size="sm" asChild className="absolute bottom-0 w-fit">
                                    <a href={treatment.link}>
                                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild className="bg-[#0059B3] hover:bg-[#002ab3]">
                        <a href="/diseases">
                            View All Conditions <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
