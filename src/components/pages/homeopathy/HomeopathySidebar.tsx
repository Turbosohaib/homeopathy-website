"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronUp, ChevronDown } from "lucide-react"

interface HomeopathySidebarProps {
  currentPath: string
}

const homeopathyLinks = [
  {
    title: "What is Homeopathy?",
    href: "/homeopathy/what-is-homeopathy#whatishomeopathy",
  },
  {
    title: "What Homeopathy is Not",
    href: "/homeopathy/what-homeopathy-is-not#whathomeopathyisnot",
  },
  {
    title: "What Your Doctor Won't Tell You",
    href: "/homeopathy/what-doctors-wont-tell#whatdoctorswonttell",
  },
  { title: "Facts and Myths", href: "/homeopathy/facts-and-myths#facts&myths" },
  { title: "Scientific Homeopathy", href: "/homeopathy/scientific-homeopathy#scientifichomeopathy" },
  { title: "Homeopathy Research", href: "/homeopathy/research#research" },
  { title: "What Doctors Should Know", href: "/homeopathy/for-doctors#fordoctors" },
  {
    title: "How to Find a Good Homeopath?",
    href: "/homeopathy/find-good-homeopath#findgooddoctor",
  },
  { title: "Benefits of Homeopathy", href: "/homeopathy/benefits" },
  { title: "FAQ on Various Diseases", href: "/homeopathy/faq-diseases" },
  { title: "Homeopathic Clinics", href: "/homeopathy/clinics" },
  {
    title: "Integration with Conventional Medicine",
    href: "/homeopathy/integration-conventional-medicine",
  },
  { title: "Homeopathic Doctors", href: "/homeopathy/doctors" },
  { title: "Sources of Medicines", href: "/homeopathy/medicine-sources" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export default function HomeopathySidebar({ currentPath }: HomeopathySidebarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  // Function to scroll the container
  const scrollContainer = (direction: "up" | "down") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 150 // Adjust this value as needed
    const currentScroll = scrollContainerRef.current.scrollTop

    scrollContainerRef.current.scrollTo({
      top: direction === "up" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    })
  }

  // Check if scrolling is possible
  const checkScrollability = () => {
    if (!scrollContainerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
    setCanScrollUp(scrollTop > 0)
    setCanScrollDown(scrollTop < scrollHeight - clientHeight - 5) // 5px buffer
  }

  // Set up scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      checkScrollability()
      scrollContainer.addEventListener("scroll", checkScrollability)

      // Also check on window resize
      window.addEventListener("resize", checkScrollability)

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollability)
        window.removeEventListener("resize", checkScrollability)
      }
    }
  }, [])

  // Scroll to active link on initial render
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeLink = scrollContainerRef.current.querySelector(`a[href="${currentPath}"]`)
      if (activeLink) {
        // Scroll the active link into view with some offset
        const containerTop = scrollContainerRef.current.offsetTop
        const linkTop = (activeLink as HTMLElement).offsetTop
        const containerHeight = scrollContainerRef.current.clientHeight

        // Center the active link if possible
        scrollContainerRef.current.scrollTop = linkTop - containerTop - containerHeight / 2 + 30

        checkScrollability()
      }
    }
  }, [currentPath])

  return (
    <motion.div
      className="bg-muted/30 rounded-lg p-6 sticky top-24 flex flex-col max-h-[calc(140vh-120px)]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3 className="text-lg font-bold mb-4" variants={itemVariants}>
        Homeopathy Topics
      </motion.h3>

      {/* Scroll up button */}
      {canScrollUp && (
        <button
          onClick={() => scrollContainer("up")}
          className="absolute top-16 right-4 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors"
          aria-label="Scroll up"
        >
          <ChevronUp className="h-5 w-5 text-primary" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="overflow-y-auto pr-2 flex-grow custom-scrollbar"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#e3e6e8 #f1f5f9",
        }}
      >
        <motion.nav>
          <motion.ul className="space-y-2">
            {homeopathyLinks.map((link, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-2 px-3 rounded-md transition-colors",
                    currentPath === link.href
                      ? "bg-[#0059B3] text-primary-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>

      {/* Scroll down button */}
      {canScrollDown && (
        <button
          onClick={() => scrollContainer("down")}
          className="absolute bottom-28 right-4 z-10 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </button>
      )}

      <motion.div className="mt-4 p-4 bg-primary/10 rounded-lg" variants={itemVariants}>
        <h4 className="font-bold text-primary">Need Help?</h4>
        <p className="text-sm mt-2">Have questions about homeopathic treatment?</p>
        <Link href="/contact" className="mt-3 text-sm font-medium text-primary hover:underline inline-block">
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  )
}
