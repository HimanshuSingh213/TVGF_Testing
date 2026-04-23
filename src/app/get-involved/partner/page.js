"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const partnershipTypes = [
  {
    title: "Knowledge Partner",
    desc: "Research institutions, universities, scientists: share data, co-author reports, support evidence-based storytelling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21V12M12 12L15 9M12 12L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2C7.58172 2 4 5.58172 4 10H20C20 5.58172 16.4183 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Funding & Resource Partner",
    desc: "Foundations, philanthropists, CSR arms: provide grants, in-kind resources, or capital to enable programmes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Community Partner",
    desc: "NGOs, local government, mountain communities: co-design resilience programmes and bridge indigenous knowledge with global platforms.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C23 17.1662 21.761 15.6114 20.0632 15.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 11C21.2091 11 23 9.20914 23 7C23 4.79086 21.2091 3 19 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Policy & Advocacy Partner",
    desc: "Government bodies, think tanks, UN agencies: collaborate on climate diplomacy, policy reform, and roundtables.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7L12 3L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Storytelling & Media Partner",
    desc: "Filmmakers, journalists, artists, media organisations: amplify glacier narratives and shape global public discourse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M15 10V14M15 10H5C3.89543 10 3 10.8954 3 12V18C3 19.1046 3.89543 20 5 20H15V14M15 14H5C3.89543 14 3 13.1046 3 12V6C3 4.89543 3.89543 4 5 4H15V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function PartnerPage() {
  const pageRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-el", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
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
        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-24">
          <div className="max-w-4xl">
            <Link href="/get-involved" className="hero-el inline-flex items-center gap-2 mb-12 text-xs font-cabin font-bold tracking-widest uppercase text-glacier-teal hover:translate-x-[-4px] transition-transform">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M15 10H5M10 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to Pathways
            </Link>
            <h1 className="hero-el font-nohemi text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Partner <br /><span className="text-glacier-teal">With Us.</span>
            </h1>
            <p className="hero-el font-cabin text-xl md:text-2xl text-glacier-navy/70 leading-relaxed max-w-3xl">
              We believe in &quot;partnership&quot;, not just &quot;donations&quot;. Align your vision with our mission to build a resilient future for Earth&apos;s cryosphere.
            </p>
          </div>
        </section>

        {/* Partnership Types Grid */}
        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipTypes.map((type, i) => (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                className="p-10 rounded-3xl bg-white border border-gray-100 hover:border-glacier-teal/20 hover:shadow-2xl transition-all duration-500 group shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-glacier-teal/5 text-glacier-teal transition-transform group-hover:scale-110">
                  {type.icon}
                </div>
                <h3 className="font-nohemi text-2xl font-bold mb-4">{type.title}</h3>
                <p className="font-cabin text-sm leading-relaxed text-glacier-navy/60">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inquiry Form */}
        <section ref={formRef} className="px-6 md:px-20 max-w-7xl mx-auto mb-40">
          <div className="grid lg:grid-cols-2 gap-20 bg-white p-12 md:p-20 rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-glacier-teal/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="font-nohemi text-4xl md:text-5xl font-bold mb-8">Start a <span className="text-glacier-teal">Conversation.</span></h2>
              <p className="font-cabin text-lg text-glacier-navy/70 mb-12 leading-relaxed">
                Our partnership process is structured but deeply personal. Fill out the inquiry form, and a member of our leadership team will reach out.
              </p>
              <div className="pt-10 border-t border-gray-100">
                <p className="font-cabin text-[10px] uppercase font-bold tracking-[0.2em] mb-4 text-glacier-navy/40">Direct Inquiry</p>
                <p className="font-cabin text-xl font-medium">
                  For urgent or senior inquiries, write directly to: <br />
                  <a href="mailto:partnerships@thevoiceofglaciers.org" className="text-glacier-teal underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">partnerships@thevoiceofglaciers.org</a>
                </p>
              </div>
            </div>

            <form className="relative z-10 space-y-6 font-cabin">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Organisation</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Organisation" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Type of Partnership</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white appearance-none">
                    <option>Knowledge Partner</option>
                    <option>Funding & Resource Partner</option>
                    <option>Community Partner</option>
                    <option>Policy & Advocacy Partner</option>
                    <option>Storytelling & Media Partner</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Geography of Work</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Regions you operate in" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Message / Intent</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="How do you envision our collaboration?"></textarea>
              </div>

              <button className="w-full py-5 bg-glacier-navy text-white rounded-xl font-bold tracking-[0.1em] uppercase text-sm hover:bg-glacier-teal transition-all duration-500 shadow-xl shadow-glacier-navy/20 hover:shadow-glacier-teal/20">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
