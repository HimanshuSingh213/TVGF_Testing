import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

export default function GlacierXPlatformPage() {
  return (
    <main className="min-h-screen bg-glacier-offwhite selection:bg-glacier-teal selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-glacier-navy border-b-4 border-glacier-warmGrey overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glacier-lightTeal/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10">
          <div className="md:w-full">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-glacier-warmGrey text-white text-[10px] font-bold px-3 py-1.5 tracking-[0.2em] uppercase">
                In Development
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-nohemi font-bold text-white leading-[1.1] mb-8 tracking-tight">
              GlacierX Platform
            </h1>
            <p className="text-xl md:text-2xl text-glacier-teal font-cabin italic leading-relaxed max-w-4xl border-l-2 border-glacier-teal pl-6">
              "If India can build national financial and digital infrastructure at scale, we can build glacier resilience infrastructure."
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview & The Backbone */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">The Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy mb-6 leading-tight">
              More than software.
            </h2>
            <p className="text-lg text-glacier-warmGrey font-cabin leading-relaxed mb-8">
              GlacierX is a comprehensive resilience ecosystem. It hosts our Festivals, Residencies & Retreats, Fellowships & Expeditions, GlacierX Grants (photography & film), and GlacierX Awards.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="group bg-glacier-offwhite p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-glacier-teal"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-glacier-teal/10 rounded-full blur-3xl -mr-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <h3 className="text-2xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10">
                The Glacier Guardians Network
              </h3>
              <p className="text-base text-glacier-warmGrey font-cabin leading-relaxed mb-8 relative z-10">
                Technology alone cannot save glaciers. The Glacier Guardians Network is the community backbone powering the entire ecosystem, empowered by activation toolkits, education platforms, and technology tools to lead local resilience.
              </p>
              
              <div className="flex items-center gap-4 text-sm font-nohemi font-bold text-glacier-teal relative z-10">
                <span>PEOPLE</span>
                <span className="text-glacier-warmGrey">→</span>
                <span>TOOLS</span>
                <span className="text-glacier-warmGrey">→</span>
                <span>IMPACT</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6-Layer Cryosphere Stack */}
      <section className="py-24 px-6 md:px-12 bg-glacier-offwhite border-t border-glacier-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] text-glacier-warmGrey font-bold tracking-[0.2em] uppercase mb-4 block">GlacierX.ai</span>
              <h2 className="text-3xl md:text-5xl font-nohemi font-bold text-glacier-navy">6-Layer Cryosphere Stack</h2>
            </div>
            <p className="text-base font-cabin text-glacier-warmGrey max-w-sm">
              Interoperable, modular, and scalable technology infrastructure designed for the entire Hindu Kush Himalaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* L1 */}
            <div className="group bg-white p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-5xl font-nohemi font-bold text-glacier-offwhite group-hover:text-glacier-lightTeal/30 transition-colors duration-500">L1</div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-light group-hover:bg-glacier-teal transition-colors duration-300"></div>
              
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10 mt-6">Data Infrastructure</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                Drones, satellite imagery, SAR, DEM, AWS, hydrology, CMIP6, and on-ground field sensors.
              </p>
            </div>

            {/* L2 */}
            <div className="group bg-white p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-5xl font-nohemi font-bold text-glacier-offwhite group-hover:text-glacier-lightTeal/30 transition-colors duration-500">L2</div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-light group-hover:bg-glacier-teal transition-colors duration-300"></div>
              
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10 mt-6">Intelligence Engine</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                GLOF models, glacier mapping, slope detection, mass balance, climate downscaling, and risk scoring.
              </p>
            </div>

            {/* L3 */}
            <div className="group bg-white p-10 border border-glacier-light hover:border-glacier-teal shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-5xl font-nohemi font-bold text-glacier-offwhite group-hover:text-glacier-lightTeal/30 transition-colors duration-500">L3</div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-light group-hover:bg-glacier-teal transition-colors duration-300"></div>
              
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10 mt-6">Risk Standards</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                Standardised frameworks including the Glacier Risk Score, GLOF Risk Index, and Vulnerability Index.
              </p>
            </div>

            {/* L4 */}
            <div className="group bg-white p-10 border border-glacier-light hover:border-glacier-navy shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-5xl font-nohemi font-bold text-glacier-offwhite group-hover:text-glacier-lightTeal/30 transition-colors duration-500">L4</div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-light group-hover:bg-glacier-navy transition-colors duration-300"></div>
              
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10 mt-6">Monitoring & Alerts</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                Real-time lake monitoring, automated SMS alerts, Early Warning System (EWS) nodes, and satellite change detection.
              </p>
            </div>

            {/* L5 */}
            <div className="group bg-white p-10 border border-glacier-light hover:border-glacier-navy shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-5xl font-nohemi font-bold text-glacier-offwhite group-hover:text-glacier-lightTeal/30 transition-colors duration-500">L5</div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-light group-hover:bg-glacier-navy transition-colors duration-300"></div>
              
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10 mt-6">Applications</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                Government dashboards, hydropower analytics, and climate risk tools.
              </p>
            </div>

            {/* L6 */}
            <div className="group bg-white p-10 border border-glacier-light hover:border-glacier-navy shadow-sm hover:shadow-glacier-card transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-5xl font-nohemi font-bold text-glacier-offwhite group-hover:text-glacier-lightTeal/30 transition-colors duration-500">L6</div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-glacier-light group-hover:bg-glacier-navy transition-colors duration-300"></div>
              
              <h3 className="text-xl font-nohemi font-bold text-glacier-navy mb-4 relative z-10 mt-6">Governance & Trust</h3>
              <p className="text-sm text-glacier-warmGrey font-cabin leading-relaxed relative z-10">
                Scientific oversight, audit layers, and foundation partnership.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-32 px-6 md:px-12 bg-glacier-navy text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glacier-teal/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-nohemi font-bold text-white mb-8 leading-tight">
            "We are building a protocol, not a report."
          </h2>
          <p className="text-xl text-glacier-lightTeal font-cabin font-semibold uppercase tracking-[0.2em]">
            An Open Digital Public Good
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}