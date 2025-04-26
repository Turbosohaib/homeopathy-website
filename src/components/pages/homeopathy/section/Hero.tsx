import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export const Hero = () => {
    return (
        <section className="relative h-[83vh] sm:h-[84.5vh]">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative h-full w-full">
                <Image
                    src="/assets/images/homeopathy-hero.webp?height=400&width=1920"
                    alt="Homeopathy"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fadeIn">Homeopathy</h1>
                <p className="mt-6 max-w-2xl text-lg animate-slideUp">
                    Discover the science and art of homeopathic medicine and how it can help restore your health naturally.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fadeIn">
                    <Button className="bg-[#0059B3] hover:bg-[#002ab3]" size="lg" asChild>
                        <Link href="#understand">Understanding Homeopathy</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white border-white hover:bg-white/20"
                        asChild
                    >
                        <Link href="#explore">Explore Homeopathy</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
