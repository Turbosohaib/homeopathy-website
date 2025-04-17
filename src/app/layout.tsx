import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Muhammad Zahid Homeopathy - Scientific Homeopathic Treatments",
  description:
    "Dr. Muhammad Zahid provides scientific homeopathic treatments for a wide range of conditions with proven results and personalized care.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={`${quicksand.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 
