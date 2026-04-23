"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    index: "01",
    title: "Partner With Us",
    subtitle: "Institutional & Funding Partnerships",
    description:
      "Align your institution, foundation, or corporation with the most urgent conservation mission of our era. All funding conversations happen through this dedicated pathway.",
    href: "/get-involved/partner",
    accent: "#2A787C",
    tags: ["Institutions", "Foundations", "Corporations"],
  },
  {
    index: "02",
    title: "Volunteer & Internships",
    subtitle: "Contribute Your Skills to the Cause",
    description:
      "Direct engagement with an early-stage impactful organisation. Bring your skills in research, media, design, or technology and receive mentorship from the core team.",
    href: "/get-involved/volunteer",
    accent: "#042A33",
    tags: ["Field Research", "Media", "Operations"],
  },
  {
    index: "03",
    title: "Join as Glacier Guardian",
    subtitle: "Become Part of the Community",
    description:
      "The community backbone of the TVGF ecosystem. A global network of climbers, youth leaders, artists, and scientists actively contributing to glacier preparedness.",
    href: "/get-involved/glacier-guardian",
    accent: "#8B0333",
    tags: ["Community", "Movement", "Impact"],
  },
];

export default function GetInvolvedPage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-animate", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 90%" }
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section ref={heroRef} className="px-6 md:px-20 max-w-7xl mx-auto mb-24">
          <div className="max-w-4xl">
            <span className="hero-animate block text-glacier-teal font-cabin font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Empower the Cryosphere
            </span>
            <h1 className="hero-animate font-nohemi text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Many Ways to <br />
              <span className="text-glacier-teal">Contribute.</span>
            </h1>
            <p className="hero-animate font-cabin text-xl md:text-2xl text-glacier-navy/70 leading-relaxed max-w-3xl">
              There are many ways to contribute to this work — whether you lead an institution, bring a skill, or simply want to be part of a movement that matters.
            </p>
          </div>
        </section>

        {/* Pathways Grid */}
        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <Link 
                key={i} 
                href={card.href}
                ref={el => cardsRef.current[i] = el}
                className="group relative bg-white border border-gray-100 rounded-3xl p-10 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:border-glacier-teal/20"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="font-nohemi text-5xl text-gray-100 group-hover:text-glacier-teal/10 transition-colors duration-500">
                    {card.index}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-glacier-teal group-hover:text-white transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="font-nohemi text-2xl font-bold mb-4">{card.title}</h3>
                <p className="font-cabin text-glacier-navy/60 text-sm mb-8 leading-relaxed flex-grow">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.tags.map((tag, t) => (
                    <span key={t} className="text-[10px] font-cabin font-bold uppercase tracking-widest px-3 py-1 bg-gray-50 text-glacier-navy/40 rounded-full group-hover:bg-glacier-teal/5 group-hover:text-glacier-teal transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Impact Band */}
        <section className="w-full bg-glacier-navy py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-glacier-teal/10 to-transparent opacity-50" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-nohemi text-4xl md:text-5xl text-white font-bold mb-8">
              The glaciers can&apos;t wait. <br />
              <span className="text-glacier-teal italic font-light">Neither can we.</span>
            </h2>
            <p className="font-cabin text-white/60 text-lg mb-12 max-w-2xl mx-auto">
              Every partnership, every volunteer hour, every guardian subscription extends the timeline for Earth&apos;s vanishing ice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/get-involved/glacier-guardian" className="w-full sm:w-auto px-10 py-4 bg-glacier-teal text-white font-cabin font-bold rounded-md hover:bg-white hover:text-glacier-navy transition-all duration-300">
                Join as Guardian
              </Link>
              <Link href="/get-involved/partner" className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-cabin font-bold rounded-md hover:bg-white hover:text-glacier-navy transition-all duration-300">
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
