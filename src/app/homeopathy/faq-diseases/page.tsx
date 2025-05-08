import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  TreesIcon as Lungs,
  StickerIcon as Stomach,
  Smile,
  Brain,
  Activity,
  Baby,
  Heart,
  HelpCircle,
  Thermometer,
  ShieldPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HomeopathySidebar from "@/components/pages/homeopathy/HomeopathySidebar";

export default function FAQDiseasesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[83vh] sm:h-[84.5vh]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/faq-hero.webp?height=300&width=1920"
            alt="FAQ on Various Diseases"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeIn">
            FAQ on Various Diseases
          </h1>
          <p className="mt-6 max-w-2xl text-lg animate-slideUp">
            Answers to frequently asked questions about homeopathic treatments
            for common conditions.
          </p>
        </div>
      </section>

      <main id="faq" className="flex-1 w-full flex flex-col justify-center items-center">
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
              <span>FAQ on Various Diseases</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 pt-5 w-full">
          <div className="px-6 sm:pr-10 sm:pl-0">
            <div className="grid md:grid-cols-10 gap-10">
              {/* Sidebar */}
              <div className="md:col-span-3">
                <HomeopathySidebar currentPath="/homeopathy/faq-diseases#faq" />
              </div>

              {/* Main Content */}
              <div className="md:col-span-7 pt-10">
                <h2 className="text-3xl font-bold tracking-tight">
                  Common Questions About Homeopathic Treatment
                </h2>
                <div className="mt-4 h-1 w-20 bg-primary"></div>

                <p className="mt-8">
                  Patients often have specific questions about how homeopathy
                  can help with particular health conditions. This page
                  addresses frequently asked questions about homeopathic
                  approaches to various diseases and conditions. While these
                  answers provide general information, please remember that
                  homeopathic treatment is individualized, and a consultation
                  with a qualified homeopath is necessary for personalized
                  advice.
                </p>

                <div className="mt-10 space-y-10">
                  {/* Introduction */}
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <HelpCircle className="h-6 w-6 text-primary mr-3" />
                      Understanding Homeopathic Treatment for Diseases
                    </h3>
                    <p>
                      Homeopathy approaches disease differently than
                      conventional medicine. Rather than focusing solely on
                      diagnosing and treating specific diseases, homeopathy
                      considers the individual&apos;s unique expression of
                      symptoms, along with their constitution, temperament, and
                      overall health. This means that two people with the same
                      medical diagnosis might receive different homeopathic
                      remedies.
                    </p>
                    <p className="mt-4">
                      The FAQs below provide general information about
                      homeopathic approaches to common conditions, but they
                      cannot replace the individualized assessment that is
                      central to effective homeopathic treatment. For
                      personalized advice, we recommend consulting with a
                      qualified homeopathic practitioner.
                    </p>
                  </div>

                  {/* Respiratory Conditions */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Lungs className="h-6 w-6 text-primary mr-3" />
                      Respiratory Conditions
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with allergic rhinitis and hay
                          fever?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Yes, homeopathy can be effective for many people
                            with allergic rhinitis and hay fever. Homeopathic
                            treatment aims to reduce sensitivity to allergens
                            and strengthen the body&apos;s overall resilience,
                            rather than just suppressing symptoms.
                          </p>
                          <p className="mt-2">
                            Common remedies that might be considered (depending
                            on individual symptoms) include Allium cepa for
                            watery eyes and nose with burning discharge,
                            Euphrasia for eye irritation with bland nasal
                            discharge, and Sabadilla for violent sneezing with
                            itching in the nose and palate.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment started several months
                            before allergy season often provides the best
                            results, potentially reducing both the severity and
                            duration of seasonal symptoms.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach asthma treatment?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathic treatment for asthma focuses on reducing
                            the frequency and severity of attacks, improving
                            overall respiratory function, and addressing
                            underlying triggers. It aims to decrease
                            hypersensitivity and strengthen respiratory health
                            over time.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the specific nature
                            of the asthma attacks, triggers, accompanying
                            symptoms, and the patient&apos;s overall
                            constitution. For example, Arsenicum album might be
                            considered for asthma worse at night with anxiety
                            and restlessness, while Natrum sulphuricum might be
                            indicated for asthma triggered by damp weather.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> Homeopathic
                            treatment for asthma is typically used as a
                            complementary approach alongside conventional
                            management, especially for moderate to severe
                            asthma. Patients should not discontinue prescribed
                            inhalers or medications without consulting their
                            physician.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for recurrent sinusitis?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be beneficial for recurrent sinusitis
                            by addressing both acute symptoms and underlying
                            factors that contribute to recurrence. The goal is
                            to reduce the frequency, duration, and intensity of
                            sinus infections.
                          </p>
                          <p className="mt-2">
                            Remedies like Kali bichromicum (for thick, stringy
                            discharges), Silicea (for chronic sinusitis with
                            poor drainage), or Pulsatilla (for sinusitis with
                            yellow-green discharge that is worse in warm rooms)
                            might be considered based on the specific symptom
                            picture.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment between acute episodes can
                            help strengthen overall resistance and address
                            underlying tendencies that make a person prone to
                            sinusitis.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with chronic cough?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Chronic cough can have many causes, and homeopathy
                            approaches it by identifying the underlying pattern
                            and selecting remedies that match the specific
                            characteristics of the cough and associated
                            symptoms.
                          </p>
                          <p className="mt-2">
                            For example, Bryonia might be considered for a dry,
                            painful cough that is worse with movement; Rumex for
                            a cough triggered by cold air or deep breathing; or
                            Drosera for spasmodic coughing fits that are worse
                            at night.
                          </p>
                          <p className="mt-2">
                            A thorough homeopathic assessment is important for
                            chronic cough, as it may be a symptom of various
                            conditions ranging from post-nasal drip to more
                            serious respiratory issues. Proper medical diagnosis
                            is essential before beginning homeopathic treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Digestive Disorders */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Stomach className="h-6 w-6 text-primary mr-3" />
                      Digestive Disorders
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          How can homeopathy help with irritable bowel syndrome
                          (IBS)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be particularly valuable for IBS, as
                            it addresses both the physical symptoms and the
                            emotional factors that often trigger or exacerbate
                            this condition. Homeopathic treatment aims to
                            regulate bowel function, reduce pain and discomfort,
                            and improve overall digestive health.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the specific symptom
                            pattern, triggers, and accompanying symptoms. For
                            example, Colocynthis might be considered for
                            cramping abdominal pain improved by pressure or
                            bending double; Lycopodium for bloating and gas that
                            is worse in the late afternoon and evening; or
                            Argentum nitricum for diarrhea triggered by anxiety
                            and anticipation.
                          </p>
                          <p className="mt-2">
                            Many patients report significant improvement in IBS
                            symptoms with constitutional homeopathic treatment,
                            particularly when stress and emotional factors play
                            a role in their condition.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy address acid reflux and GERD?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer support for acid reflux and
                            GERD by addressing both the immediate symptoms and
                            the underlying factors that contribute to these
                            conditions. The goal is to improve digestive
                            function rather than simply neutralizing or
                            suppressing acid production.
                          </p>
                          <p className="mt-2">
                            Remedies like Nux vomica (for reflux associated with
                            dietary excesses or stress), Carbo vegetabilis (for
                            bloating with burning pain and a need to belch), or
                            Robinia (for intense, sour regurgitation) might be
                            considered based on the specific symptom picture.
                          </p>
                          <p className="mt-2">
                            Homeopathic treatment is often combined with dietary
                            and lifestyle modifications for optimal results. For
                            severe or long-standing GERD, homeopathy may work
                            best as a complement to conventional medical
                            management.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for inflammatory bowel disease
                          (IBD)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Inflammatory bowel diseases like Crohn&apos;s
                            disease and ulcerative colitis are serious
                            conditions that typically require conventional
                            medical management. However, homeopathy can play a
                            valuable complementary role in managing symptoms and
                            supporting overall health.
                          </p>
                          <p className="mt-2">
                            Homeopathic treatment aims to reduce inflammation,
                            extend periods of remission, manage symptoms during
                            flares, and address factors that trigger
                            exacerbations. Remedies are selected based on the
                            specific symptom pattern, location of inflammation,
                            and individual constitution.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> For IBD, homeopathy
                            is best used as part of an integrative approach in
                            coordination with a gastroenterologist. Patients
                            should not discontinue conventional medications
                            without medical supervision, as this can lead to
                            serious complications.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach chronic constipation?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy addresses chronic constipation by
                            identifying the underlying pattern and selecting
                            remedies that match the specific characteristics
                            rather than simply stimulating bowel movements. The
                            goal is to restore normal, healthy bowel function.
                          </p>
                          <p className="mt-2">
                            Remedies might include Alumina (for inactivity of
                            the rectum with soft stools that are difficult to
                            pass), Bryonia (for dry, hard stools with a
                            sensation of dryness throughout the body), or Nux
                            vomica (for ineffectual urging and a sense of
                            incomplete evacuation).
                          </p>
                          <p className="mt-2">
                            Constitutional treatment often provides better
                            long-term results than acute treatment for
                            constipation. Homeopathic treatment is typically
                            combined with appropriate dietary changes, adequate
                            hydration, and regular physical activity for optimal
                            results.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Skin Conditions */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Smile className="h-6 w-6 text-primary mr-3" />
                      Skin Conditions
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with eczema (atopic dermatitis)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be particularly effective for eczema,
                            addressing both the skin manifestations and the
                            underlying tendencies that contribute to this
                            condition. The goal is to reduce inflammation,
                            itching, and recurrence while improving overall skin
                            health.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the specific
                            characteristics of the eczema, including appearance,
                            location, sensations, modalities (what makes it
                            better or worse), and accompanying symptoms. For
                            example, Graphites might be considered for oozing,
                            honey-like discharges that crust over; Petroleum for
                            cracked, bleeding skin that worsens in winter; or
                            Sulphur for intensely itchy, red, burning eruptions
                            that worsen with heat.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is particularly important
                            for chronic eczema, as it addresses the deeper
                            susceptibility to skin inflammation. Many patients,
                            especially children, show significant improvement
                            with proper homeopathic treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for psoriasis?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Psoriasis is a complex autoimmune condition that can
                            be challenging to treat with any approach.
                            Homeopathy can offer benefits for many psoriasis
                            patients by addressing the inflammatory process,
                            reducing plaque formation, and addressing triggers
                            that exacerbate the condition.
                          </p>
                          <p className="mt-2">
                            Remedies like Arsenicum album (for dry, scaly
                            patches with burning and restlessness), Graphites
                            (for thick, cracked skin with oozing), or Petroleum
                            (for deep cracks that bleed easily) might be
                            considered based on the specific presentation.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for psoriasis,
                            as it addresses the deeper immune dysregulation.
                            While homeopathy may not completely cure psoriasis
                            in all cases, many patients experience significant
                            improvement in symptoms, reduced flare frequency,
                            and better quality of life.
                          </p>
                          <p className="mt-2">
                            Patience is important, as homeopathic treatment for
                            psoriasis typically takes time to show results,
                            often several months for significant improvement.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach acne treatment?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy addresses acne by treating both the skin
                            manifestations and the underlying hormonal,
                            digestive, or stress-related factors that contribute
                            to breakouts. The goal is to reduce inflammation,
                            prevent new lesions, and improve overall skin
                            health.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the type of acne,
                            location, accompanying symptoms, and triggers. For
                            example, Pulsatilla might be considered for hormonal
                            acne that fluctuates with menstrual cycles; Hepar
                            sulphuris for painful, extremely sensitive pustules;
                            or Sulphur for red, inflamed acne with oily skin.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment often provides better
                            long-term results than acute treatment for acne,
                            particularly for chronic or recurrent cases.
                            Homeopathic treatment is typically combined with
                            appropriate skincare, dietary modifications, and
                            stress management for optimal results.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with urticaria (hives)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be effective for both acute and
                            chronic urticaria by addressing the allergic
                            response and reducing the body&apos;s
                            hypersensitivity. The goal is to provide relief from
                            current symptoms and prevent recurrence.
                          </p>
                          <p className="mt-2">
                            For acute urticaria, remedies like Apis mellifica
                            (for swellings with stinging pain that are better
                            with cold applications), Urtica urens (for hives
                            with intense burning and stinging), or Rhus
                            toxicodendron (for intensely itchy eruptions that
                            are worse at night and with heat) might be
                            considered based on the specific symptoms.
                          </p>
                          <p className="mt-2">
                            For chronic or recurrent urticaria, constitutional
                            treatment is essential to address the underlying
                            tendency toward allergic reactions. Many patients
                            with chronic urticaria report significant
                            improvement with homeopathic treatment, even when
                            other approaches have failed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Mental Health Concerns */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Brain className="h-6 w-6 text-primary mr-3" />
                      Mental Health Concerns
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          How can homeopathy help with anxiety disorders?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy offers a gentle yet effective approach to
                            anxiety disorders by addressing both the
                            mental-emotional symptoms and their physical
                            manifestations. The goal is to reduce anxiety,
                            improve coping mechanisms, and restore emotional
                            balance.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the specific nature
                            of the anxiety, its triggers, accompanying symptoms,
                            and the individual&apos;s overall constitution. For
                            example, Argentum nitricum might be considered for
                            anticipatory anxiety with restlessness and digestive
                            disturbances; Phosphorus for anxiety with heightened
                            sensitivity and fear of being alone; or Lycopodium
                            for performance anxiety with lack of confidence
                            despite capabilities.
                          </p>
                          <p className="mt-2">
                            Many patients report not only reduced anxiety but
                            also improved sleep, better energy, and a greater
                            sense of emotional resilience with homeopathic
                            treatment. For severe anxiety disorders, homeopathy
                            may work best as part of an integrative approach
                            that includes appropriate psychological support.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy address depression?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer support for many people with
                            depression by addressing the emotional, mental, and
                            physical aspects of this condition. The goal is to
                            improve mood, energy, motivation, and overall sense
                            of wellbeing.
                          </p>
                          <p className="mt-2">
                            Remedies like Aurum metallicum (for deep depression
                            with feelings of worthlessness and suicidal
                            thoughts), Natrum muriaticum (for depression
                            following grief or disappointment with emotional
                            withdrawal), or Pulsatilla (for depression with
                            tearfulness and a need for consolation) might be
                            considered based on the specific emotional pattern.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> For moderate to
                            severe depression, homeopathy is best used as part
                            of an integrative approach that includes appropriate
                            psychological support and, when necessary,
                            conventional treatment. Suicidal thoughts require
                            immediate professional intervention.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for insomnia?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be very effective for insomnia by
                            addressing the underlying causes rather than simply
                            inducing sleep. The goal is to restore natural,
                            refreshing sleep patterns without creating
                            dependency or morning grogginess.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the specific sleep
                            disturbance pattern, accompanying symptoms, and
                            causative factors. For example, Coffea cruda might
                            be considered for insomnia due to an overactive
                            mind; Arsenicum album for insomnia with anxiety and
                            restlessness, worse around midnight; or Passiflora
                            for insomnia from physical exhaustion in the elderly
                            or children.
                          </p>
                          <p className="mt-2">
                            Many patients appreciate that homeopathic treatment
                            for insomnia addresses the root cause of their sleep
                            difficulties rather than creating dependency on
                            sleep medications. Improvement in sleep quality
                            often accompanies overall improvement in health with
                            constitutional treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach stress-related disorders?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy offers a comprehensive approach to
                            stress-related disorders by addressing both the
                            immediate symptoms of stress and the underlying
                            vulnerability to stress effects. The goal is to
                            improve stress resilience, reduce reactivity, and
                            restore balance to stress-response systems.
                          </p>
                          <p className="mt-2">
                            Remedies like Ignatia (for emotional stress with
                            paradoxical symptoms), Phosphoric acid (for
                            exhaustion from prolonged stress with indifference),
                            or Gelsemium (for anticipatory anxiety with weakness
                            and trembling) might be considered based on the
                            specific stress response pattern.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is particularly valuable
                            for chronic stress, as it addresses the deeper
                            susceptibility to stress effects. Many patients
                            report not only better stress management but also
                            improved energy, sleep, and overall wellbeing with
                            homeopathic treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Musculoskeletal and Pain Conditions */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Activity className="h-6 w-6 text-primary mr-3" />
                      Musculoskeletal and Pain Conditions
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with arthritis?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer significant benefits for many
                            arthritis patients, addressing both pain and
                            inflammation while potentially slowing disease
                            progression in some cases. The approach differs
                            depending on whether the arthritis is
                            osteoarthritis, rheumatoid arthritis, or another
                            form.
                          </p>
                          <p className="mt-2">
                            For osteoarthritis, remedies like Rhus toxicodendron
                            (for stiffness that improves with continued motion),
                            Bryonia (for pain worse from any movement), or
                            Calcarea fluorica (for arthritis with joint
                            enlargement) might be considered based on the
                            specific symptom pattern.
                          </p>
                          <p className="mt-2">
                            For rheumatoid arthritis, constitutional treatment
                            is essential to address the autoimmune component.
                            Remedies are selected based on the complete symptom
                            picture, not just the joint symptoms.
                          </p>
                          <p className="mt-2">
                            Many arthritis patients report reduced pain,
                            improved mobility, and decreased need for
                            anti-inflammatory medications with homeopathic
                            treatment. For advanced or severe arthritis,
                            homeopathy works best as part of an integrative
                            approach.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for fibromyalgia?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be particularly valuable for
                            fibromyalgia, a condition that often responds poorly
                            to conventional treatments. The homeopathic approach
                            addresses the widespread pain, fatigue, sleep
                            disturbances, and other symptoms that characterize
                            this complex condition.
                          </p>
                          <p className="mt-2">
                            Remedies like Rhus toxicodendron (for pain worse
                            with initial movement but better with continued
                            motion), Bryonia (for pain aggravated by any
                            movement), or Causticum (for burning pain with
                            muscle weakness) might be considered based on the
                            specific pain pattern and accompanying symptoms.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is especially important for
                            fibromyalgia, as it addresses the deeper
                            susceptibility to pain and other symptoms. Many
                            fibromyalgia patients report improved pain levels,
                            better sleep quality, increased energy, and enhanced
                            overall functioning with homeopathic treatment.
                          </p>
                          <p className="mt-2">
                            Research, including randomized controlled trials,
                            has shown promising results for homeopathy in
                            fibromyalgia management, though more studies are
                            needed.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach back pain?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy addresses back pain by identifying the
                            specific nature of the pain, its location, what
                            makes it better or worse, and accompanying symptoms.
                            The goal is to reduce pain, improve mobility, and
                            address underlying factors contributing to back
                            problems.
                          </p>
                          <p className="mt-2">
                            Remedies like Rhus toxicodendron (for back pain
                            worse with initial movement and in cold, damp
                            weather), Bryonia (for pain that is worse with the
                            slightest movement), or Nux vomica (for back pain
                            with muscle spasms and irritability) might be
                            considered based on the specific symptom pattern.
                          </p>
                          <p className="mt-2">
                            For chronic back pain, constitutional treatment
                            often provides better long-term results than acute
                            treatment. Homeopathic treatment is typically
                            combined with appropriate physical therapy,
                            ergonomic adjustments, and exercise for optimal
                            results.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> Acute, severe back
                            pain or back pain with neurological symptoms (like
                            numbness or weakness in the legs) requires prompt
                            medical evaluation to rule out serious conditions
                            before beginning homeopathic treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with migraines and headaches?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be very effective for both migraines
                            and other types of headaches by addressing the
                            specific pain pattern, triggers, accompanying
                            symptoms, and underlying susceptibility. The goal is
                            to reduce the frequency, intensity, and duration of
                            headaches.
                          </p>
                          <p className="mt-2">
                            Remedies like Belladonna (for sudden, violent
                            headaches with throbbing pain and sensitivity to
                            light), Natrum muriaticum (for headaches that begin
                            with visual disturbances and are worse from sun
                            exposure), or Spigelia (for left-sided headaches
                            with severe neuralgic pain) might be considered
                            based on the specific headache pattern.
                          </p>
                          <p className="mt-2">
                            For recurrent headaches, constitutional treatment is
                            essential to address the underlying tendency. Many
                            patients report not only fewer and less severe
                            headaches but also improved overall health with
                            proper homeopathic treatment.
                          </p>
                          <p className="mt-2">
                            Identifying and addressing headache triggers (such
                            as certain foods, stress, or hormonal fluctuations)
                            is an important part of the homeopathic approach to
                            headache management.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Women's Health */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Heart className="h-6 w-6 text-primary mr-3" />
                      Women&apos;s Health
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          How can homeopathy help with menstrual disorders?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy offers effective support for various
                            menstrual disorders, including painful periods
                            (dysmenorrhea), irregular cycles, heavy bleeding,
                            and premenstrual syndrome (PMS). The goal is to
                            restore hormonal balance and normal menstrual
                            function.
                          </p>
                          <p className="mt-2">
                            For dysmenorrhea, remedies like Magnesia phosphorica
                            (for cramping pain improved by heat and pressure),
                            Colocynthis (for severe cramping improved by bending
                            double), or Cimicifuga (for shooting pains and
                            irritability) might be considered based on the
                            specific pain pattern.
                          </p>
                          <p className="mt-2">
                            For PMS, remedies are selected based on the
                            emotional and physical symptoms that occur
                            predictably before menstruation. Constitutional
                            treatment often provides the best long-term results
                            for menstrual disorders by addressing the underlying
                            hormonal imbalance.
                          </p>
                          <p className="mt-2">
                            Many women report not only improved menstrual
                            symptoms but also better overall health, energy, and
                            emotional wellbeing with homeopathic treatment for
                            menstrual disorders.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy address menopausal symptoms?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can provide significant relief for
                            menopausal symptoms by supporting the body through
                            this natural transition. The goal is to reduce hot
                            flashes, night sweats, mood changes, sleep
                            disturbances, and other symptoms while promoting
                            overall wellbeing.
                          </p>
                          <p className="mt-2">
                            Remedies like Lachesis (for hot flashes with
                            flushing and intolerance of tight clothing), Sepia
                            (for irritability, fatigue, and feeling worse from
                            heat), or Pulsatilla (for emotional sensitivity and
                            changeable symptoms) might be considered based on
                            the specific symptom pattern.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is particularly valuable
                            during menopause, as it addresses the
                            individual&apos;s unique experience of this
                            transition. Many women appreciate that homeopathy
                            offers a natural alternative to hormone replacement
                            therapy, with fewer risks and side effects.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for polycystic ovary syndrome
                          (PCOS)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer support for women with PCOS by
                            addressing hormonal imbalances, menstrual
                            irregularities, and associated symptoms. While
                            homeopathy may not completely reverse the condition
                            in all cases, many women experience significant
                            improvement in symptoms and overall hormonal
                            balance.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for PCOS, as
                            it addresses the deeper hormonal dysregulation.
                            Remedies are selected based on the complete symptom
                            picture, including physical, mental, and emotional
                            aspects.
                          </p>
                          <p className="mt-2">
                            Homeopathic treatment for PCOS is typically combined
                            with appropriate dietary modifications, regular
                            exercise, and stress management for optimal results.
                            For severe PCOS or cases with fertility concerns,
                            homeopathy works best as part of an integrative
                            approach that may include conventional medical
                            management.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach endometriosis?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can provide valuable support for women
                            with endometriosis by addressing pain, inflammation,
                            and hormonal factors that contribute to this
                            challenging condition. While homeopathy may not
                            completely eliminate endometriosis tissue, many
                            women experience significant improvement in symptoms
                            and quality of life.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for
                            endometriosis, as it addresses the deeper
                            susceptibility to abnormal tissue growth and
                            inflammation. Remedies are selected based on the
                            complete symptom picture, including the specific
                            nature of the pain, accompanying symptoms, and
                            overall constitution.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> For severe
                            endometriosis or cases with significant fertility
                            concerns, homeopathy works best as part of an
                            integrative approach that may include conventional
                            medical management. Proper diagnosis through
                            conventional methods is important before beginning
                            homeopathic treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Children's Health */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Baby className="h-6 w-6 text-primary mr-3" />
                      Children&apos;s Health
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with attention deficit
                          hyperactivity disorder (ADHD)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer support for children with ADHD
                            by addressing both behavioral symptoms and
                            underlying constitutional factors. The goal is to
                            improve focus, reduce hyperactivity and impulsivity,
                            and support overall development and learning.
                          </p>
                          <p className="mt-2">
                            Remedies like Hyoscyamus (for children with
                            excessive talking and disruptive behavior), Verat
                            album (for hyperactivity with exhaustion), or
                            Tuberculinum (for restlessness with the need for
                            constant change) might be considered based on the
                            specific behavioral pattern and constitutional type.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for ADHD, as
                            it addresses the child&apos;s unique expression of
                            symptoms and overall health. Many families report
                            improved behavior, better academic performance, and
                            enhanced social skills with homeopathic treatment.
                          </p>
                          <p className="mt-2">
                            For moderate to severe ADHD, homeopathy may work
                            best as part of a comprehensive approach that
                            includes appropriate educational support, behavioral
                            strategies, and sometimes conventional treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach recurrent ear infections
                          in children?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be particularly effective for
                            children with recurrent ear infections (otitis
                            media) by addressing both acute symptoms and the
                            underlying susceptibility. The goal is to reduce the
                            frequency and severity of infections and strengthen
                            overall immunity.
                          </p>
                          <p className="mt-2">
                            For acute ear infections, remedies like Belladonna
                            (for sudden onset with intense pain and redness),
                            Pulsatilla (for ear infections with yellow discharge
                            and tearfulness), or Chamomilla (for unbearable pain
                            with irritability) might be considered based on the
                            specific symptom pattern.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment between acute episodes is
                            essential for breaking the cycle of recurrent
                            infections. Many children who previously experienced
                            frequent ear infections show significant improvement
                            with homeopathic treatment, often avoiding the need
                            for repeated antibiotic courses or ear tube surgery.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> Acute ear
                            infections with high fever or severe pain should be
                            evaluated by a healthcare provider. Homeopathy can
                            be used alongside conventional treatment when
                            necessary.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy help with childhood eczema?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be particularly effective for
                            childhood eczema, addressing both the skin
                            manifestations and the underlying susceptibility.
                            Children often respond especially well to
                            homeopathic treatment for skin conditions.
                          </p>
                          <p className="mt-2">
                            Remedies like Sulphur (for hot, red, itchy eruptions
                            worse from bathing), Graphites (for oozing,
                            honey-like discharges that crust over), or Calcarea
                            carbonica (for eczema in chubby, sweaty children)
                            might be considered based on the specific
                            characteristics of the eczema and the child&apos;s
                            constitution.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is particularly important
                            for childhood eczema, as it addresses the deeper
                            susceptibility to skin inflammation. Many children
                            show significant improvement or complete resolution
                            of eczema with proper homeopathic treatment.
                          </p>
                          <p className="mt-2">
                            Identifying and addressing triggers (such as certain
                            foods, environmental allergens, or stress) is an
                            important part of the homeopathic approach to
                            childhood eczema.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for behavioral and emotional
                          issues in children?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer gentle yet effective support
                            for various behavioral and emotional issues in
                            children, including anxiety, fears, aggression,
                            irritability, and mood swings. The goal is to help
                            children achieve emotional balance and develop
                            healthy coping skills.
                          </p>
                          <p className="mt-2">
                            Remedies are selected based on the specific
                            emotional and behavioral patterns, triggers, and the
                            child&apos;s overall constitution. For example,
                            Pulsatilla might be considered for clingy, tearful
                            children who seek consolation; Chamomilla for
                            irritable, demanding children who are difficult to
                            please; or Lycopodium for children with lack of
                            confidence despite capabilities.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment addresses the child as a
                            whole, recognizing that behavioral issues often
                            reflect deeper imbalances or unmet needs. Many
                            parents report not only improved behavior but also
                            better sleep, enhanced learning ability, and greater
                            emotional resilience with homeopathic treatment.
                          </p>
                          <p className="mt-2">
                            For significant behavioral or emotional issues,
                            homeopathy works best as part of a comprehensive
                            approach that includes appropriate parenting
                            strategies, educational support, and sometimes
                            psychological counseling.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Autoimmune Conditions */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <ShieldPlus className="h-6 w-6 text-primary mr-3" />
                      Autoimmune Conditions
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          How can homeopathy help with autoimmune thyroid
                          disorders?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer support for autoimmune thyroid
                            conditions like Hashimoto&apos;s thyroiditis and
                            Graves&apos; disease by addressing the immune
                            dysregulation and supporting healthy thyroid
                            function. The goal is to reduce antibody levels,
                            manage symptoms, and potentially reduce the need for
                            conventional medications over time.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for autoimmune
                            thyroid disorders, as it addresses the deeper immune
                            imbalance. Remedies are selected based on the
                            complete symptom picture, including physical,
                            mental, and emotional aspects.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> Homeopathic
                            treatment for thyroid disorders should be monitored
                            with appropriate laboratory testing to track
                            antibody levels and thyroid function. For patients
                            on thyroid medication, any adjustments should be
                            made only under the supervision of the prescribing
                            physician.
                          </p>
                          <p className="mt-2">
                            Many patients with autoimmune thyroid conditions
                            report improved energy, reduced symptoms, and better
                            overall wellbeing with homeopathic treatment, even
                            if they still require some conventional medication.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy address rheumatoid arthritis?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer valuable support for rheumatoid
                            arthritis (RA) by addressing both the inflammatory
                            process and the underlying immune dysregulation. The
                            goal is to reduce pain and inflammation, improve
                            joint function, and potentially slow disease
                            progression.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for RA, as it
                            addresses the deeper autoimmune imbalance. Remedies
                            are selected based on the complete symptom picture,
                            including the specific joint involvement,
                            modalities, and accompanying symptoms.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> For moderate to
                            severe RA, homeopathy works best as part of an
                            integrative approach that may include conventional
                            disease-modifying treatments. Early intervention is
                            important to prevent joint damage.
                          </p>
                          <p className="mt-2">
                            Many RA patients report reduced pain and stiffness,
                            improved mobility, and enhanced quality of life with
                            homeopathic treatment. Some are able to reduce their
                            conventional medications under medical supervision,
                            though complete discontinuation is not always
                            possible or advisable.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for lupus (SLE)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can provide supportive care for systemic
                            lupus erythematosus (SLE) by addressing immune
                            dysregulation, reducing inflammation, and managing
                            various symptoms. While homeopathy may not
                            completely reverse this complex condition, many
                            patients experience significant improvement in
                            symptoms and quality of life.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for lupus, as
                            it addresses the deeper autoimmune imbalance.
                            Remedies are selected based on the complete symptom
                            picture, including the specific organ involvement,
                            characteristic symptoms, and overall constitution.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> For lupus,
                            homeopathy works best as part of an integrative
                            approach that includes appropriate conventional
                            medical management, especially during flares or when
                            major organs are involved. Regular monitoring with
                            laboratory tests and clinical evaluation is
                            essential.
                          </p>
                          <p className="mt-2">
                            Many lupus patients report reduced fatigue, fewer
                            flares, improved skin symptoms, and better overall
                            wellbeing with homeopathic treatment as part of
                            their comprehensive care plan.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach multiple sclerosis (MS)?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can offer supportive care for multiple
                            sclerosis by addressing immune dysregulation,
                            managing symptoms, and potentially slowing disease
                            progression in some cases. The goal is to improve
                            quality of life and functional capacity while
                            supporting overall health.
                          </p>
                          <p className="mt-2">
                            Constitutional treatment is essential for MS, as it
                            addresses the deeper immune imbalance. Remedies are
                            selected based on the complete symptom picture,
                            including the specific neurological symptoms,
                            modalities, and overall constitution.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> For MS, homeopathy
                            works best as part of an integrative approach that
                            includes appropriate conventional medical
                            management, especially for relapsing-remitting MS
                            where disease-modifying therapies have shown
                            benefit. Regular neurological evaluation is
                            essential.
                          </p>
                          <p className="mt-2">
                            Many MS patients report improved energy, reduced
                            frequency of exacerbations, better management of
                            symptoms like fatigue and muscle weakness, and
                            enhanced overall wellbeing with homeopathic
                            treatment as part of their comprehensive care plan.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Acute Conditions */}
                  <div className="border-0 shadow-lg z-10 bg-[#f7fcf9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Thermometer className="h-6 w-6 text-primary mr-3" />
                      Acute Conditions
                    </h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left font-medium">
                          How can homeopathy help with colds and flu?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be particularly effective for colds
                            and flu, often reducing the duration and severity of
                            symptoms when used at the first signs of illness.
                            The goal is to support the body&apos;s natural
                            immune response rather than suppressing symptoms.
                          </p>
                          <p className="mt-2">
                            Remedies like Oscillococcinum or Influenzinum might
                            be used preventatively during flu season, while
                            specific remedies for active infections are selected
                            based on the particular symptom pattern. For
                            example, Aconite for sudden onset with high fever
                            after cold exposure; Bryonia for gradual onset with
                            dry cough and desire to be left alone; or Gelsemium
                            for flu with exhaustion, heaviness, and chills up
                            and down the spine.
                          </p>
                          <p className="mt-2">
                            Many patients report faster recovery and fewer
                            complications when using homeopathy for colds and
                            flu. Constitutional treatment between acute episodes
                            can strengthen overall immunity and reduce
                            susceptibility to respiratory infections.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> High-risk
                            individuals (such as the elderly, very young
                            children, or those with compromised immunity) with
                            severe flu symptoms should seek conventional medical
                            care alongside homeopathic treatment.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left font-medium">
                          Can homeopathy address acute injuries?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can be very effective for acute injuries
                            like sprains, strains, bruises, and minor trauma.
                            When used promptly, homeopathic remedies can reduce
                            pain, swelling, and bruising while supporting the
                            healing process.
                          </p>
                          <p className="mt-2">
                            Arnica montana is perhaps the most well-known remedy
                            for injuries, especially those with bruising and
                            soreness. Other remedies might include Rhus
                            toxicodendron for sprains with stiffness that
                            improves with continued motion; Ruta graveolens for
                            injuries to tendons and periosteum; or Hypericum for
                            injuries to nerve-rich areas with shooting pains.
                          </p>
                          <p className="mt-2">
                            Many athletes and active individuals keep a basic
                            homeopathic first aid kit for injuries, finding that
                            prompt treatment speeds recovery and reduces
                            downtime.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> Serious injuries,
                            suspected fractures, or injuries with significant
                            swelling, severe pain, or inability to bear weight
                            should be evaluated by a healthcare provider.
                            Homeopathy can be used alongside conventional
                            treatment for these cases.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left font-medium">
                          Is homeopathy effective for acute digestive issues?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can provide rapid relief for many acute
                            digestive issues, including food poisoning,
                            traveler&apos;s diarrhea, indigestion, and
                            gastroenteritis. The goal is to alleviate symptoms
                            while supporting the body&apos;s natural recovery
                            process.
                          </p>
                          <p className="mt-2">
                            Remedies like Arsenicum album (for food poisoning
                            with burning pain and anxiety), Nux vomica (for
                            indigestion from overindulgence), or Veratrum album
                            (for violent diarrhea with cold sweat and
                            exhaustion) might be considered based on the
                            specific symptom pattern.
                          </p>
                          <p className="mt-2">
                            Many patients report quicker resolution of digestive
                            upsets with homeopathic treatment. Constitutional
                            treatment between acute episodes can strengthen
                            digestive function and reduce susceptibility to
                            digestive disturbances.
                          </p>
                          <p className="mt-2">
                            <strong>Important note:</strong> Severe or prolonged
                            digestive symptoms, especially with dehydration,
                            high fever, or bloody stools, require prompt medical
                            evaluation. Homeopathy can be used alongside
                            conventional treatment for these cases.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left font-medium">
                          How does homeopathy approach acute stress and anxiety?
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Homeopathy can provide effective support for acute
                            stress and anxiety reactions, helping to restore
                            emotional balance during challenging situations. The
                            goal is to reduce immediate distress while
                            supporting resilience.
                          </p>
                          <p className="mt-2">
                            Remedies like Aconite (for panic attacks with fear
                            of death), Argentum nitricum (for anticipatory
                            anxiety with restlessness and digestive upset), or
                            Gelsemium (for performance anxiety with weakness and
                            trembling) might be considered based on the specific
                            anxiety pattern.
                          </p>
                          <p className="mt-2">
                            Many patients find that homeopathic remedies help
                            them navigate stressful situations with greater calm
                            and clarity. Constitutional treatment between acute
                            episodes can strengthen overall emotional resilience
                            and reduce susceptibility to stress reactions.
                          </p>
                          <p className="mt-2">
                            Homeopathic remedies for acute anxiety can be
                            particularly valuable because they work quickly
                            without causing drowsiness or impaired functioning,
                            unlike many conventional anti-anxiety medications.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Conclusion */}
                  <div className="bg-muted/30 p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-bold mb-4">
                      Personalized Homeopathic Treatment
                    </h3>
                    <p>
                      While this FAQ provides general information about
                      homeopathic approaches to various conditions, it&apos;s
                      important to remember that effective homeopathic treatment
                      is highly individualized. The remedy that works best for
                      one person with a particular condition may not be the
                      right choice for another person with the same diagnosis.
                    </p>
                    <p className="mt-4">
                      For personalized advice and treatment, we recommend
                      consulting with a qualified homeopathic practitioner who
                      can take your complete case history and prescribe remedies
                      tailored to your specific needs. At Dr. Shah Homeopathy,
                      we provide comprehensive homeopathic consultations and
                      individualized treatment plans for a wide range of health
                      concerns.
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
                      <Link href="/homeopathy/clinics">
                        Homeopathic Clinics{" "}
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
