import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import Link from 'next/link';

export default function GlacierXFestivalPage() {
    return (
        <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* Hero Section & Festival CTAs */}
            <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-teal overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-teal/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
                    <div className="md:w-full">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="bg-glacier-teal text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                                Launching 2026
                            </span>
                            <span className="font-cabin text-xs font-bold text-glacier-offwhite/70 uppercase tracking-[0.3em]">
                                Himalayan Region
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-6 tracking-tight">
                            GlacierX Festival
                        </h1>
                        <p className="text-lg md:text-xl text-glacier-offwhite/80 max-w-3xl leading-relaxed font-cabin mb-10">
                            An immersive convening where science, art, ritual, and policy converge to reimagine humanity&apos;s relationship with ice.
                        </p>

                        {/* Festival CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="#" className="bg-glacier-teal text-white px-8 py-4 rounded-sm font-cabin font-bold hover:bg-white hover:text-glacier-navy transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center shadow-lg shadow-glacier-teal/20">
                                Register your interest
                            </Link>
                            <Link href="/get-involved/partner" className="bg-transparent text-white border border-glacier-lightTeal px-8 py-4 rounded-sm font-cabin font-bold hover:border-white transition-all duration-300 transform hover:scale-[1.02] w-full sm:w-auto text-center">
                                Become a Festival Partner
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Feature 1: Residencies */}
                        <div className="group bg-glacier-offwhite border border-glacier-light hover:border-glacier-teal shadow-sm p-10 relative overflow-hidden transition-colors duration-500">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-glacier-teal"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block relative z-10">
                                Key Feature
                            </span>
                            <h3 className="text-3xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">
                                Residencies
                            </h3>
                            <p className="text-base text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                Includes residencies for artists, scientists, and local leaders.
                            </p>
                        </div>

                        {/* Framework */}
                        <div className="group bg-glacier-offwhite border border-glacier-light hover:border-glacier-teal shadow-sm p-10 relative overflow-hidden transition-colors duration-500">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-glacier-teal"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-glacier-teal/10 rounded-full blur-2xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block relative z-10">
                                Framework Alignment
                            </span>
                            <h3 className="text-3xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">
                                SPACE &apos;Culture&apos; Pillar
                            </h3>
                            <p className="text-base text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                                The Festival is the flagship cultural activation of the SPACE Framework&apos;s &apos;Culture&apos; pillar.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}