"use client";

import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";             // ← import Autoplay
import { motion } from "framer-motion";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Arrow_Icon from "../../../../../public/assets/icons/arrow.svg";



const testimonials = [
    {
        id: 1,
        name: "Sohaib Shah",
        location: "Houston, TX",
        image: "/assets/images/sohaib.jpeg",
        quote:
            "After struggling with chronic migraines for years, Dr. Muhammad Zahid's homeopathic treatment has been life-changing. I've gone from having weekly debilitating headaches to experiencing them only occasionally and with much less intensity.",
    },
    {
        id: 2,
        name: "Inayat Khan",
        location: "San Francisco, CA",
        image: "/placeholder.svg",
        quote:
            "I was skeptical about homeopathy at first, but after conventional treatments failed to help my eczema, I decided to give Dr. Muhammad Zahid a chance. Within two months, my skin cleared up dramatically. I'm so grateful for his expertise.",
    },
    {
        id: 3,
        name: "Umar Farooq",
        location: "Chicago, IL",
        image: "/placeholder.svg",
        quote:
            "Dr. Muhammad Zahid's approach to treating my autoimmune condition has been comprehensive and effective. He took the time to understand my symptoms and developed a personalized treatment plan that has significantly improved my quality of life.",
    },
];

// Register modules in non-hook context, disabling React Hooks rule
/* eslint-disable react-hooks/rules-of-hooks */
SwiperCore.use([Autoplay]);
/* eslint-enable react-hooks/rules-of-hooks */

export function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperCore>(null);



    return (
        <section className="py-16 z-10">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
            >
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0059B3]">
                        Patient Testimonials
                    </h2>
                    <div className="mt-4 h-1 w-20 bg-[#0059B3] mx-auto"></div>
                    <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
                        Read what our patients have to say about their experiences and
                        treatment outcomes.
                    </p>
                </motion.div>

                {/* Slider Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="relative mx-auto max-w-[350px] sm:max-w-xl md:max-w-2xl"
                >
                    {/* Left Arrow */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="hidden sm:block absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                    >
                        <Image
                            src={Arrow_Icon}
                            alt="arrow-icon"
                            className="w-[40px] rotate-180"
                        />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="hidden sm:block absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                    >
                        <Image src={Arrow_Icon} alt="arrow-icon" className="w-[40px]" />
                    </button>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView="auto"
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide
                                key={testimonial.id}
                                className="w-full max-w-[340px] sm:max-w-xl md:max-w-2xl px-4 pb-8"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="border-none shadow-lg">
                                        <CardContent className="px-8 py-4 flex-1">
                                            <Quote className="h-10 w-10 text-primary/20 mb-4" />
                                            <p className="text-sm italic mb-6">{testimonial.quote}</p>
                                            <div className="flex items-center">
                                                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 aspect-w-1 aspect-h-1">
                                                    <Image
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt={testimonial.name}
                                                        fill
                                                        style={{ objectFit: "cover" }}
                                                        className="rounded-md"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">{testimonial.name}</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {testimonial.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Mobile Pagination */}
                    <div className="flex justify-center items-center space-x-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="sm:hidden block z-10 cursor-pointer"
                        >
                            <Image
                                src={Arrow_Icon}
                                alt="arrow-icon"
                                className="w-[40px] rotate-180"
                            />
                        </button>

                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-primary" : "bg-muted"
                                    }`}
                                onClick={() => {
                                    swiperRef.current?.slideToLoop(index);
                                }}
                            >
                                <span className="sr-only">Testimonial {index + 1}</span>
                            </button>
                        ))}

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="sm:hidden block z-10 cursor-pointer"
                        >
                            <Image src={Arrow_Icon} alt="arrow-icon" className="w-[40px]" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
