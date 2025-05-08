import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  Users,
  Coffee,
  Sofa,
  UserRound,
  UserCircle2,
  Stethoscope,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import HomeopathySidebar from "@/components/pages/homeopathy/HomeopathySidebar";

export default function ClinicPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[83vh] sm:h-[84.5vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/clinic-hero.webp?height=1080&width=1920"
            alt="Our Clinic"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeIn">
            Our Clinic
          </h1>
          <p className="mt-6 max-w-2xl text-lg animate-slideUp">
            Our simple yet comfortable clinic is designed to provide a healing
            environment for all patients.
          </p>
        </div>
      </section>

      <main id="clinic" className="flex-1 w-full flex flex-col justify-center items-center">
        {/* Breadcrumb */}
        <section className="border-b bg-muted/30 w-full px-6 z-10">
          <div className="py-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/homeopathy"
                className="hover:text-primary transition-colors"
              >
                Homeopathy
              </Link>
              <span className="mx-2">/</span>
              <span>Our Clinic</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 pt-5 w-full">
          <div className="px-6 sm:pr-10 sm:pl-0">
            <div className="grid md:grid-cols-10 gap-10">
              {/* Sidebar */}
              <div className="md:col-span-3">
                <HomeopathySidebar currentPath="/homeopathy/clinics#clinic" />
              </div>

              {/* Main Content */}
              <div className="md:col-span-7 pt-10">
                <h2 className="text-3xl font-bold tracking-tight">
                  Peshawar Clinic
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary"></div>

                <p className="mt-8">
                  Our clinic provides a comfortable environment for patients
                  seeking homeopathic treatment. We have designed our facility
                  with patient comfort and privacy in mind, creating a peaceful
                  atmosphere that promotes healing and well-being.
                </p>

                <div className="mt-10 space-y-10">
                  {/* Clinic Location */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <MapPin className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Clinic Location
                        </h3>
                        <p>
                          Our homeopathic clinic is conveniently located in
                          Peshawar, making it easily accessible for patients
                          from across the region.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            <span className="font-medium">Address:</span> Seena
                            Ploy clinic, Board Bus Stop, Jamrud Road, Peshawar
                          </li>
                          <li>
                            <span className="font-medium">Landmarks:</span>{" "}
                            Located near Board Bus Stop for easy navigation
                          </li>
                          <li>
                            <span className="font-medium">Accessibility:</span>{" "}
                            The clinic is accessible by public transportation
                          </li>
                        </ul>
                        <p className="mt-4">
                          Our central location makes it convenient for patients
                          to access quality homeopathic care without traveling
                          long distances.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Hours */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <Clock className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">Clinic Hours</h3>
                        <p>
                          We offer convenient consultation hours to accommodate
                          our patients&apos; schedules. Our clinic operates on
                          the following schedule:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            <span className="font-medium">
                              Monday to Saturday:
                            </span>{" "}
                            9:00 AM - 6:00 PM
                          </li>
                          <li>
                            <span className="font-medium">Sunday:</span> Closed
                          </li>
                          <li>
                            <span className="font-medium">
                              Consultation Duration:
                            </span>{" "}
                            Initial consultations typically last 45-60 minutes,
                            while follow-up visits are usually 20-30 minutes
                          </li>
                        </ul>
                        <p className="mt-4">
                          We recommend scheduling appointments in advance to
                          ensure availability, though we do our best to
                          accommodate walk-in patients when possible.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <Phone className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Contact Information
                        </h3>
                        <p>
                          We&apos;re always available to answer your questions
                          and assist with scheduling appointments. You can reach
                          us through the following channels:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            <span className="font-medium">Phone:</span> +92 91
                            XXXXXXX
                          </li>
                          <li>
                            <span className="font-medium">Email:</span>{" "}
                            info@drhomeopathy.com
                          </li>
                          <li>
                            <span className="font-medium">WhatsApp:</span>{" "}
                            Available for appointment reminders and quick
                            queries
                          </li>
                        </ul>
                        <p className="mt-4">
                          For non-urgent matters, you can also use the contact
                          form on our website, and we&apos;ll respond within 24
                          hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Men&apos;s Waiting Area */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <UserRound className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Men&apos;s Waiting Area
                        </h3>
                        <p>
                          Our clinic features a dedicated waiting area for male
                          patients, designed with comfort and privacy in mind.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>Comfortable seating arranged for privacy</li>
                          <li>Well-ventilated space with natural light</li>
                          <li>Reading materials on health and homeopathy</li>
                          <li>Clean and calming environment</li>
                        </ul>
                        <p className="mt-4">
                          This separate waiting area ensures that all patients
                          can feel comfortable while waiting for their
                          appointments, respecting cultural preferences and
                          enhancing the overall patient experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Women&apos;s Waiting Area */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <UserCircle2 className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Women&apos;s Waiting Area
                        </h3>
                        <p>
                          We provide a separate waiting area exclusively for
                          female patients, ensuring their comfort and privacy
                          throughout their visit.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            Private space away from the general waiting area
                          </li>
                          <li>Comfortable seating and pleasant decor</li>
                          <li>Accommodations for mothers with children</li>
                          <li>
                            Maintained with the highest standards of cleanliness
                          </li>
                        </ul>
                        <p className="mt-4">
                          This dedicated space allows our female patients to
                          wait for their appointments in a comfortable
                          environment that respects their need for privacy and
                          creates a stress-free experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Room */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <Stethoscope className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Consultation Room
                        </h3>
                        <p>
                          Our consultation room is where Dr. Muhammad Zahid
                          meets with patients to provide personalized
                          homeopathic care. The space is designed to facilitate
                          thorough consultations in a comfortable setting.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            Private and soundproofed for confidential
                            discussions
                          </li>
                          <li>
                            Equipped with all necessary tools for comprehensive
                            homeopathic assessment
                          </li>
                          <li>
                            Comfortable seating for patients and accompanying
                            family members
                          </li>
                          <li>
                            Designed to create a calm atmosphere that encourages
                            open communication
                          </li>
                        </ul>
                        <p className="mt-4">
                          In this space, Dr. Zahid conducts detailed
                          consultations that consider all aspects of a
                          patient&apos;s health, allowing for truly
                          individualized homeopathic treatment plans.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Peaceful Environment */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <Coffee className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Peaceful Environment
                        </h3>
                        <p>
                          We believe that the healing process begins the moment
                          a patient enters our clinic. That&apos;s why
                          we&apos;ve created a peaceful, calming atmosphere
                          throughout our facility.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            Clean and uncluttered spaces that promote
                            tranquility
                          </li>
                          <li>Soft lighting and soothing color scheme</li>
                          <li>Good ventilation and air quality</li>
                          <li>Minimal noise and distractions</li>
                          <li>
                            Overall atmosphere conducive to healing and
                            well-being
                          </li>
                        </ul>
                        <p className="mt-4">
                          Our patients often comment on the calming effect of
                          our clinic environment, which helps reduce anxiety and
                          creates an optimal setting for the homeopathic healing
                          process.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comfortable Seating */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <Sofa className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Comfortable Seating
                        </h3>
                        <p>
                          Patient comfort is a priority at our clinic.
                          We&apos;ve selected seating that provides proper
                          support and comfort, especially important for patients
                          who may be experiencing discomfort due to their health
                          conditions.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            Ergonomically designed chairs in all waiting areas
                          </li>
                          <li>Additional cushions available upon request</li>
                          <li>
                            Seating arranged to provide personal space for each
                            patient
                          </li>
                          <li>
                            Options for patients with special needs or mobility
                            issues
                          </li>
                        </ul>
                        <p className="mt-4">
                          We understand that physical comfort contributes
                          significantly to the overall patient experience and
                          can impact the effectiveness of the consultation
                          process.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Practitioner */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <div className="flex items-start">
                      <Users className="h-8 w-8 text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">
                          Our Practitioner
                        </h3>
                        <p>
                          Our clinic is led by Dr. Muhammad Zahid, a qualified
                          and experienced homeopathic physician dedicated to
                          providing the highest standard of care.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                          <li>
                            <span className="font-medium">Qualifications:</span>{" "}
                            Comprehensive training in classical homeopathy
                          </li>
                          <li>
                            <span className="font-medium">Experience:</span>{" "}
                            Years of clinical practice treating a wide range of
                            acute and chronic conditions
                          </li>
                          <li>
                            <span className="font-medium">Approach:</span>{" "}
                            Patient-centered care that considers the whole
                            person, not just symptoms
                          </li>
                          <li>
                            <span className="font-medium">
                              Continuing Education:
                            </span>{" "}
                            Regularly updates knowledge and skills through
                            professional development
                          </li>
                        </ul>
                        <p className="mt-4">
                          Dr. Zahid takes the time to listen carefully to each
                          patient, conducting thorough consultations that form
                          the foundation for effective homeopathic treatment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Patient Experiences */}
                  <div className="bg-muted/30 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Patient Experiences
                    </h3>
                    <p>
                      Our patients consistently report positive experiences with
                      both the clinical care they receive and the comfortable
                      environment of our facility:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>
                        &quot;The clinic environment is so peaceful and calming.
                        Dr. Zahid took the time to listen to all my concerns and
                        provided a treatment plan that has significantly
                        improved my health.&quot; - Ahmed K.
                      </li>
                      <li>
                        &quot;I appreciate the separate waiting areas which
                        provide privacy. The staff is courteous and the
                        homeopathic treatment I received has been very effective
                        for my chronic condition.&quot; - Fatima S.
                      </li>
                      <li>
                        &quot;The comfortable seating and peaceful atmosphere
                        make visits to this clinic a pleasant experience, even
                        when I&apos;m not feeling well. Dr. Zahid&apos;s
                        approach to treatment has helped me tremendously.&quot;
                        - Mohammad R.
                      </li>
                    </ul>
                    <p className="mt-4">
                      We strive to create a healing environment where patients
                      feel valued, respected, and comfortable throughout their
                      treatment journey.
                    </p>
                  </div>

                  {/* Conclusion */}
                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-4">Visit Our Clinic</h3>
                    <p>
                      We invite you to experience the healing environment of our
                      clinic and the benefits of homeopathic treatment with Dr.
                      Muhammad Zahid. Whether you&apos;re seeking relief from a
                      specific health concern or interested in improving your
                      overall wellbeing, our clinic provides:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>
                        A comfortable, peaceful setting conducive to healing
                      </li>
                      <li>Privacy and respect for all patients</li>
                      <li>
                        Personalized homeopathic care tailored to your unique
                        needs
                      </li>
                      <li>
                        A holistic approach that considers all aspects of your
                        health
                      </li>
                    </ul>
                    <p className="mt-4">
                      To schedule an appointment or learn more about our
                      services, please contact us by phone or email. We look
                      forward to supporting you on your journey to better health
                      through homeopathy.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    <Button variant="outline" asChild>
                      <Link href="/homeopathy/benefits">
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />{" "}
                        Benefits of Homeopathy
                      </Link>
                    </Button>
                    <Button className="bg-[#0059B3] hover:bg-[#002ab3]" asChild>
                      <Link href="/homeopathy/integration-conventional-medicine">
                        Integration with Conventional Medicine{" "}
                        <ChevronRight className="ml-2 h-4 w-4" />
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
  );
}
