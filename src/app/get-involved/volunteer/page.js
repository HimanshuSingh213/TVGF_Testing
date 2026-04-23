"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  "Research & Policy",
  "Media & Communications",
  "Design & Visual",
  "Filmmaking & Storytelling",
  "Grassroots & Community Mobilisation",
  "Technology"
];

export default function VolunteerPage() {
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
        <section className="pt-24 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
          <Link href="/get-involved" className="hero-el inline-flex items-center gap-2 mb-12 text-xs font-cabin font-bold tracking-widest uppercase text-glacier-teal hover:translate-x-[-4px] transition-transform">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M15 10H5M10 15l-5-5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Pathways
          </Link>
          <div className="max-w-4xl">
            <h1 className="hero-el font-nohemi text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tight">
              Volunteer <br /><span className="text-glacier-teal">& Internships.</span>
            </h1>
            <p className="hero-el font-cabin text-xl md:text-2xl text-glacier-navy/70 leading-relaxed max-w-3xl">
              Direct engagement with an early-stage impactful organisation. Expect mentorship from the core team, real deliverables, and a chance to shape the future of glacier conservation.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-32">
          <h2 className="font-nohemi text-3xl font-bold mb-12 uppercase tracking-wider">Available Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 flex items-center gap-6 group hover:border-glacier-teal transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="w-3 h-3 rounded-full bg-glacier-teal group-hover:scale-150 transition-transform duration-500" />
                <span className="font-nohemi text-lg font-bold group-hover:text-glacier-teal transition-colors duration-500">{area}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-20 max-w-7xl mx-auto mb-40">
          <div className="bg-glacier-navy p-12 md:p-24 rounded-[40px] text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-glacier-teal/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />
            
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="font-nohemi text-4xl md:text-5xl font-bold mb-10 leading-tight">Apply to <br /><span className="text-glacier-teal">Contribute.</span></h2>
                <p className="font-cabin text-lg text-white/60 leading-relaxed mb-12">
                  We review applications on a rolling basis. Tell us about your background and how you want to help.
                </p>
                <div className="space-y-8 font-cabin">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-glacier-teal/20 border border-glacier-teal/40 flex items-center justify-center shrink-0 text-glacier-teal">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-white/80 font-medium pt-2">Direct engagement with the core team</p>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-glacier-teal/20 border border-glacier-teal/40 flex items-center justify-center shrink-0 text-glacier-teal">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-white/80 font-medium pt-2">Mentorship and professional growth</p>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-glacier-teal/20 border border-glacier-teal/40 flex items-center justify-center shrink-0 text-glacier-teal">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <p className="text-white/80 font-medium pt-2">Tangible impact on climate preparedness</p>
                  </div>
                </div>
              </div>

              <form className="space-y-6 font-cabin">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-glacier-teal outline-none transition-all focus:bg-white/10" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Background / Experience</label>
                  <textarea rows="3" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-glacier-teal outline-none transition-all focus:bg-white/10" placeholder="Briefly describe your skills..."></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Area of Interest</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 rounded-xl bg-glacier-navy border border-white/10 focus:border-glacier-teal outline-none transition-all appearance-none">
                        {areas.map((a, i) => <option key={i}>{a}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white"><path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Availability (hrs/week)</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-glacier-teal outline-none transition-all focus:bg-white/10" placeholder="e.g. 10-15" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Location</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-glacier-teal outline-none transition-all focus:bg-white/10" placeholder="City, Country" />
                </div>
                <button className="w-full py-5 bg-glacier-teal text-white rounded-xl font-bold tracking-[0.1em] uppercase text-sm hover:bg-white hover:text-glacier-navy transition-all duration-500 shadow-xl shadow-glacier-teal/20">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
