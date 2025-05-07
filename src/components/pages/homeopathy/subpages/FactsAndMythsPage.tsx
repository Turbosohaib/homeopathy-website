"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, X } from "lucide-react";
import HomeopathySidebar from "@/components/pages/homeopathy/HomeopathySidebar";
import { Button } from "@/components/ui/button";
import { BreadCrumb } from "@/components/partials";

export function FactsAndMythsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[83vh] sm:h-[84.5vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/facts&myth-hero.webp?height=300&width=1920"
            alt="Facts and Myths About Homeopathy"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 65%" }}
            priority
          />
        </div>
        <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeIn">
            Facts and Myths About Homeopathy
          </h1>
          <p className="mt-6 max-w-2xl text-lg animate-slideUp">
            Separating scientific facts from common misconceptions about homeopathic medicine.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main
        id="facts&myths"
        className="flex-1 w-full flex flex-col justify-center items-center"
      >
        {/* Breadcrumb */}
        <BreadCrumb currentPage="Homeopathy" subPage="Facts and Myths" />

        {/* Content Section */}
        <section className="pb-16 pt-5 w-full">
          <div className="px-6 sm:pr-10 sm:pl-0">
            <div className="grid md:grid-cols-4 gap-10">
              {/* Sidebar */}
              <div className="md:col-span-1">
                <HomeopathySidebar currentPath="/homeopathy/facts-and-myths#facts&myths" />
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 pt-10">
                <h2 className="text-3xl font-bold tracking-tight">
                  Understanding Homeopathy: Facts vs. Myths
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary" />
                <p className="mt-8">
                  Homeopathy is often surrounded by misconceptions and misunderstandings. As a medical system with over 200 years of history, it&apos;s important to distinguish between scientific facts and common myths. This page aims to clarify some of the most prevalent misconceptions about homeopathy.
                </p>

                {/* Myths */}
                <div className="mt-10 space-y-12">
                  {/* Myth 1 */}
                  <div className="border-b pb-10">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <X className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          MYTH: Homeopathy is just a placebo effect
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          One of the most common criticisms of homeopathy is that its effects are merely placebo.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          FACT: Research shows effects beyond placebo
                        </h3>
                        <p className="mt-2">
                          While the placebo effect is a component of all medical treatments, including conventional medicine, multiple studies have shown that homeopathy has effects beyond placebo:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>Double-blind, randomized controlled trials have demonstrated efficacy of homeopathic treatments for specific conditions.</li>
                          <li>Homeopathy has shown effectiveness in animals and infants, where placebo effects are unlikely to play a significant role.</li>
                          <li>Basic science research has identified biological activity in highly diluted homeopathic preparations.</li>
                        </ul>
                        <p className="mt-4">
                          A 2014 meta-analysis in Systematic Reviews examined 188 randomized controlled trials and found statistically significant effects beyond placebo in certain conditions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Myth 2 */}
                  <div className="border-b pb-10">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <X className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          MYTH: There&apos;s nothing in homeopathic remedies
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Critics often claim that homeopathic remedies are &quot;just water&quot; due to their high dilution.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          FACT: Modern science has detected nanoparticles
                        </h3>
                        <p className="mt-2">
                          Research using electron microscopy and NMR spectroscopy has detected nanoparticles of the original substances in highly diluted homeopathic preparations.
                        </p>
                        <p className="mt-4">
                          These findings challenge the &quot;nothing there&quot; criticism.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Myth 3 */}
                  <div className="border-b pb-10">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <X className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          MYTH: Homeopathy is dangerous and delays proper treatment
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Some claim that homeopathy is dangerous because it prevents people from seeking conventional care.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          FACT: Homeopathy is safe and often complementary
                        </h3>
                        <p className="mt-2">
                          Qualified homeopaths refer out when necessary, and remedies have minimal side effects.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Myth 4 */}
                  <div className="border-b pb-10">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <X className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          MYTH: Homeopathy has no scientific basis
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          Critics claim it contradicts science, but emerging research suggests possible mechanisms.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-start">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          FACT: Emerging science supports homeopathic principles
                        </h3>
                        <p className="mt-2">
                          Studies on hormesis, nanomedicine, and epigenetics offer frameworks for understanding homeopathy&apos;s low-dose effects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-muted/30 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold mb-4">
                    The Importance of Evidence-Based Approach
                  </h3>
                  <p>
                    At Dr. Zahid Homeopathy, we believe in an evidence-based approach, integrating the latest research into our practice.
                  </p>
                  <p className="mt-2">
                    By separating facts from myths, we can have productive conversations about homeopathy in healthcare.
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Button variant="outline" asChild>
                    <Link href="/homeopathy">
                      <ChevronRight className="mr-2 h-4 w-4 rotate-180" /> Back to Homeopathy
                    </Link>
                  </Button>
                  <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                    <Link href="/homeopathy/scientific-homeopathy">
                      Scientific Homeopathy <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
