import React from 'react'
import Link from 'next/link'
export const BreadCrumb = ({ currentPage }: { currentPage?: string }) => {
    return (
        <section className="border-b bg-muted/30 w-full px-6 sm:px-24 z-10">
            <div className="container py-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span>{currentPage}</span>
                </div>
            </div>
        </section>
    )
}
