"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  "Climbers & Mountaineers",
  "Local Community Members",
  "Youth Leaders",
  "Artists & Filmmakers",
  "Scientists & Educators",
  "Journalists"
];

export default function GlacierGuardianPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-el", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFA] text-glacier-navy">
      <Navbar />

      <main className="pt-32">
        <section className="pt-24 pb-20 px-6 md:px-20 max-w-7xl mx-auto text-center">
          <Link href="/get-involved" className="hero-el inline-flex items-center gap-2 mb-12 text-xs font-cabin font-bold tracking-widest uppercase text-glacier-teal hover:translate-y-[-4px] transition-transform">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M15 10H5M10 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Pathways
          </Link>
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-el font-nohemi text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Glacier <br /><span className="text-glacier-teal">Guardian.</span>
            </h1>
            <p className="hero-el font-cabin text-xl md:text-2xl text-glacier-navy/70 leading-relaxed max-w-3xl mx-auto">
              The Glacier Guardians Network is the community backbone of the entire TVGF ecosystem. We are a global movement of individuals dedicated to protecting Earth&apos;s cryosphere.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-nohemi text-4xl font-bold mb-10 leading-tight">Who can <br /><span className="text-glacier-teal">Join?</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profiles.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-glacier-teal" />
                    <span className="font-cabin font-bold text-sm text-glacier-navy/80">{p}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 font-cabin text-lg text-glacier-navy/60 leading-relaxed">
                ...anyone who wants to actively contribute to glacier preparedness and be a witness to the changing cryosphere.
              </p>
            </div>
            
            <div className="bg-glacier-teal/[0.03] p-12 md:p-16 rounded-[40px] border border-glacier-teal/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-glacier-teal/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
              
              <h2 className="font-nohemi text-2xl font-bold mb-10 uppercase tracking-widest text-glacier-teal/60">Membership Meaning</h2>
              <ul className="space-y-10 font-cabin relative z-10">
                <li className="flex gap-6">
                  <span className="font-nohemi text-glacier-teal/30 font-bold text-3xl pt-1">01</span>
                  <div>
                    <p className="text-lg font-bold mb-2">Activation Toolkits</p>
                    <p className="text-sm text-glacier-navy/60 leading-relaxed">Ready-to-use resources for local advocacy and education.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="font-nohemi text-glacier-teal/30 font-bold text-3xl pt-1">02</span>
                  <div>
                    <p className="text-lg font-bold mb-2">Education Platforms</p>
                    <p className="text-sm text-glacier-navy/60 leading-relaxed">Exclusive access to climate science workshops and data.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="font-nohemi text-glacier-teal/30 font-bold text-3xl pt-1">03</span>
                  <div>
                    <p className="text-lg font-bold mb-2">Community Tools</p>
                    <p className="text-sm text-glacier-navy/60 leading-relaxed">Direct connection with other guardians globally to co-create impact.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-40">
          <div className="max-w-3xl mx-auto bg-white p-12 md:p-20 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-glacier-teal/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            
            <h2 className="font-nohemi text-4xl md:text-5xl font-bold mb-12 text-center">Join the <span className="text-glacier-teal">Network.</span></h2>
            <form className="space-y-6 font-cabin relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Full Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Country / Region</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Where are you based?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Background (Brief)</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="e.g. Student, Scientist, Climber..." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-glacier-navy/40">Why do you want to join?</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-glacier-teal outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Your motivation..."></textarea>
              </div>
              <button className="w-full py-5 bg-glacier-navy text-white rounded-xl font-bold tracking-[0.1em] uppercase text-sm hover:bg-glacier-teal transition-all duration-500 shadow-xl shadow-glacier-navy/20 hover:shadow-glacier-teal/20">
                Become a Guardian
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
