import React from 'react'
import Link from 'next/link'

interface BreadCrumbProps {
    currentPage?: string
    subPage?: string
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ currentPage, subPage }) => {
    return (
        <section className="border-b bg-muted/30 w-full px-6 sm:px-24 z-10">
            <div className=" py-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>

                    {currentPage && (
                        <>
                            <span className="mx-2">/</span>
                            <span>{currentPage}</span>
                        </>
                    )}

                    {subPage && (
                        <>
                            <span className="mx-2">/</span>
                            <span>{subPage}</span>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
