"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaBookOpen, FaUserTie, FaUsers, FaHandshake, FaArrowRight } from 'react-icons/fa';

export default function AboutLanding() {
    useEffect(() => {
        document.title = "About Us | The Voice of Glacier Foundation";
    }, []);

    const cards = [
        { 
            name: "Our Story", 
            href: "/about/story", 
            desc: "Organisation origin, mission, and the SPACE Framework for glacier protection.",
            icon: <FaBookOpen />,
            bg: "bg-glacier-navy"
        },
        { 
            name: "Founder Story", 
            href: "/about/founder", 
            desc: "From a near-fatal mountain fall to founding a global resilience movement.",
            icon: <FaUserTie />,
            bg: "bg-glacier-teal"
        },
        { 
            name: "Team & Advisors", 
            href: "/about/team", 
            desc: "The multidisciplinary experts and advisors driving our institutional capacity.",
            icon: <FaUsers />,
            bg: "bg-glacier-navy"
        },
        { 
            name: "Partners & Networks", 
            href: "/about/partners", 
            desc: "Our global collaborations across governments, NGOs, and innovation hubs.",
            icon: <FaHandshake />,
            bg: "bg-glacier-teal"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-cabin selection:bg-glacier-teal selection:text-white overflow-x-hidden">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero */}
            <section className="relative h-[55vh] flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/story/crisiss.jpg" 
                        alt="About Us Background" 
                        className="object-cover w-full h-full grayscale brightness-[0.25] scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-4">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-4 md:space-y-8"
                    >
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-nohemi text-white mb-6 md:mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            The <span className="text-glacier-teal italic">Foundation</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 🏛️ Institutional Mandate - High Impact Asymmetric Statement */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-glacier-offwhite relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-6"
                        >
                            <span className="text-[10px] text-glacier-teal font-bold tracking-[0.3em] uppercase block mb-6">Institutional Mandate</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-nohemi text-glacier-navy tracking-tight leading-[1.1]">
                                Developing <span className="text-glacier-teal italic">resilience</span> for the world's frozen assets.
                            </h2>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-6 border-l border-glacier-navy/10 pl-8 md:pl-12 space-y-6"
                        >
                            <p className="text-lg md:text-xl md:text-2xl text-glacier-navy/80 font-cabin leading-relaxed font-light">
                                The Voice of Glaciers Foundation is a registered Section 8 nonprofit in India. Born from lived survival on Mt. Annapurna, our core mandate is to redefine human reliance on the cryosphere.
                            </p>
                            <p className="text-base md:text-lg text-glacier-navy/50 font-cabin leading-relaxed font-light">
                                Our current operational focus lies completely within the Hindu Kush Himalaya (HKH) region, specializing in extreme climate preparedness and building top-tier institutional capacity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🔳 Navigation Grid - Correctly Balanced & Snappy Transitions */}
            <section className="py-24 px-4 md:px-12 bg-white relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        {cards.map((card, i) => (
                            <Link key={i} href={card.href} className="group">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className={`relative h-[280px] md:h-[320px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:shadow-glacier-teal/10`}
                                >
                                    {/* Backdrop/BG */}
                                    <div className={`absolute inset-0 ${card.bg} transition-colors duration-500`}></div>
                                    
                                    {/* Static Glass Layer */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] backdrop-saturate-[1.2]"></div>

                                    {/* Hover Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-105%] group-hover:translate-x-[105%] transition-transform duration-1000"></div>

                                    {/* Content Area */}
                                    <div className="relative z-10 p-10 h-full flex flex-col justify-between items-start">
                                        <div className="space-y-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/20 flex items-center justify-center text-white text-lg md:text-xl bg-white/5 backdrop-blur-3xl group-hover:bg-glacier-teal group-hover:scale-105 group-hover:border-transparent transition-all duration-500">
                                                {card.icon}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-nohemi text-white tracking-tight leading-none group-hover:text-glacier-teal transition-colors">
                                                {card.name}
                                            </h3>
                                            <p className="text-[11px] md:text-[13px] text-white/40 font-light leading-relaxed max-w-[200px] md:max-w-[240px] group-hover:text-white/70 transition-colors uppercase tracking-widest font-cabin">
                                                {card.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 group-hover:text-glacier-teal transition-colors font-nohemi transform group-hover:translate-x-1 duration-500">
                                            <span>Explore Chapter</span> 
                                            <FaArrowRight className="text-lg opacity-40 group-hover:opacity-100" />
                                        </div>
                                    </div>

                                    {/* Subtle Ambient Hover Circle */}
                                    <div className="absolute -right-32 -top-32 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-glacier-teal/10 transition-all duration-1000"></div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}