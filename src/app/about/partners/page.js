"use client";

import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaGlobeAmericas, FaBuilding } from 'react-icons/fa';

export default function Partners() {
    useEffect(() => {
        document.title = "Partners & Networks | The Voice of Glacier Foundation";
    }, []);

    const institutionalPartners = [
        { name: "ICIMOD", src: "/footer/ICIMOD.png", desc: "Regional intergovernmental learning and knowledge sharing centre serving the HKH." },
        { name: "IIT Bhubaneswar", src: "/footer/iitb.png", desc: "Scientific partner via Cryosense Lab focused on glacier dynamics and modeling." },
        { name: "Ministry of Earth Sciences", src: "/footer/MoES.png", desc: "Government of India's nodal agency for climate research and earth sciences." },
        { name: "NDMA", src: "/footer/ndma.png", desc: "National Disaster Management Authority for robust disaster resilience in India." },
        { name: "UNDP", src: "/footer/UNDP.webp", desc: "United Nations agency tasked with international development and climate goals." },
        { name: "UNESCO", src: "/footer/UNESCO.png", desc: "Collaborating on science, education, and cultural preservation of cryosphere heritage." },
        { name: "WMO", src: "/footer/WMO.png", desc: "Providing world-class meteorological data and climate forecasting standards." },
        { name: "Conservation International", src: "/footer/COInt.png", desc: "Global partner dedicated to protecting nature for the benefit of humanity." },
        { name: "SDC Foundation", src: "/partners/sdc.png", desc: "Action-oriented think tank working on sustainable development in the Himalayas." }
    ];

    const networks = [
        { name: "Techstars", placeholder: "/partners/techstars.jpg" },
        { name: "Startup Weekend", placeholder: "/partners/startup.jpg" },
        { name: "Global Shapers", placeholder: "/partners/GSC.avif" },
        { name: "2041 Foundation", placeholder: "/partners/2041F.jpg" },
        { name: "SEALA", placeholder: "/partners/SEALA.webp" },
        { name: "Terra.do", placeholder: "/partners/terrado.jpg" },
        { name: "Teach For India", placeholder: "/partners/TFI.jpg" },
        { name: "AIYD", placeholder: "/partners/aiyd.webp" },
        { name: "ORF", placeholder: "/partners/ORF.jpg" }
    ];

    return (
        <div className="min-h-screen bg-glacier-offwhite font-cabin selection:bg-glacier-teal selection:text-white">
            <Navbar />

            {/* 🏔️ OG Cinematic Hero */}
            <section className="relative h-[70vh] flex items-center justify-center pt-32 bg-glacier-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/partners/hero.jpg"
                        alt="Global Partnerships Background"
                        className="object-cover w-full h-full grayscale brightness-[0.80]"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glacier-navy via-transparent to-glacier-navy/60"></div>

                <div className="max-w-7xl mx-auto relative z-10 w-full text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-6xl lg:text-[6rem] font-nohemi text-white mb-10 leading-[0.8] tracking-tighter drop-shadow-2xl">
                            Partners & <br className="md:hidden" /> <span className="text-glacier-teal italic">Networks</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* 🏗️ Core Page Layout */}
            <section className="py-32 px-6 md:px-12 bg-white relative">
                <div className="max-w-7xl mx-auto">

                    {/* Official WEF Recognition Callout - Highly Prominent */}
                    <div className="mb-48 text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white border border-glacier-navy/5 p-16 md:p-20 rounded-[3rem] text-glacier-navy relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,128,128,0.15)]"
                        >
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-glacier-teal opacity-5 rounded-full -mr-32 -mt-32 backdrop-blur-3xl"></div>

                            {/* Official WEF Visual Mark */}
                            <div className="mx-auto mb-10 flex justify-center relative z-10 w-full">
                                <Image src="/partners/WEF.svg" alt="WEF Logo" width={140} height={140} className="w-auto h-28 md:h-32 object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-xl" />
                            </div>

                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-glacier-teal mb-4 font-nohemi">Official Recognition</p>
                            <h2 className="text-4xl md:text-6xl font-nohemi mb-6 tracking-tight leading-none text-glacier-navy">Young Global <span className="text-glacier-teal italic">Leader</span></h2>
                            <p className="text-sm md:text-base font-light text-glacier-navy/50 tracking-[0.2em] uppercase font-nohemi">World Economic Forum — Class of 2025</p>
                        </motion.div>
                    </div>

                    {/* Institutional Partners Grid with Descriptions */}
                    <div className="mb-48 border-t border-glacier-navy/5 pt-32">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi px-4 py-1.5 border border-glacier-teal/20 rounded-full mb-6 inline-block">Collaborators</span>
                            <h2 className="text-4xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Institutional <span className="text-glacier-teal italic">Partners</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                            {institutionalPartners.map((partner, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="w-full flex flex-col group p-8 bg-glacier-offwhite/50 rounded-[2.5rem] border border-transparent hover:border-glacier-navy/5 hover:bg-white hover:shadow-2xl hover:shadow-glacier-navy/5 transition-all duration-500"
                                >
                                    <div className="h-24 w-full flex items-center justify-start mb-6">
                                        <Image
                                            src={partner.src}
                                            alt={partner.name}
                                            width={180}
                                            height={80}
                                            className="object-contain max-h-16 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 origin-left"
                                            onError={(e) => {
                                                // Fallback if logo like sdc.png doesn't exist yet
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                        <span style={{ display: 'none' }} className="text-xl font-nohemi font-bold text-glacier-navy opacity-50">{partner.name}</span>
                                    </div>
                                    <h4 className="text-lg font-nohemi text-glacier-navy tracking-wide font-medium mb-3">{partner.name}</h4>
                                    <p className="text-xs text-glacier-navy/60 leading-relaxed font-light font-cabin">{partner.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Affiliations & Global Networks */}
                    <div className="border-t border-glacier-navy/5 pt-32">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-glacier-teal font-nohemi px-4 py-1.5 border border-glacier-teal/20 rounded-full mb-6 inline-block">Global Ecosystem</span>
                            <h2 className="text-4xl md:text-5xl font-nohemi text-glacier-navy tracking-tight">Affiliations & <span className="text-glacier-teal italic">Networks</span></h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                            {networks.map((net, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    className="flex flex-col items-center group cursor-default"
                                >
                                    <div className="w-full aspect-[4/3] bg-white rounded-[1.5rem] border border-glacier-navy/5 flex items-center justify-center shadow-sm shadow-glacier-navy/5 p-4 group-hover:bg-white group-hover:border-glacier-teal/20 group-hover:shadow-xl transition-all duration-500 mb-4 text-glacier-teal/20 group-hover:text-glacier-teal relative overflow-hidden">
                                        <Image 
                                            src={net.placeholder} 
                                            alt={net.name} 
                                            width={140} 
                                            height={100} 
                                            className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                    <h4 className="text-[10px] md:text-xs font-nohemi text-glacier-navy/70 text-center tracking-widest uppercase font-bold">{net.name}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}