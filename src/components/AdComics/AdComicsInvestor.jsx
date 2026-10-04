import React from 'react';

export const AdComicsInvestor = ({ setActiveTab }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-slate-800/60 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-[#0a0b0e] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-widest uppercase">
            <span>AD COMICS</span> • <span>Strategic Opportunity</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Outfit'] tracking-tight text-white max-w-5xl mx-auto leading-tight">
            BUILDING THE NEXT GENERATION OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white [text-shadow:0_0_25px_rgba(59,130,246,0.6)]">ENTERTAINMENT IP</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Building an AI-native entertainment & character IP universe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-400 font-medium pt-2">
            <span className="px-3 py-1 rounded bg-[#12141c] border border-slate-800">5-Year Vision</span>
            <span className="text-blue-500">•</span>
            <span className="px-3 py-1 rounded bg-[#12141c] border border-slate-800">Multiple Revenue Engines</span>
            <span className="text-blue-500">•</span>
            <span className="px-3 py-1 rounded bg-[#12141c] border border-slate-800">Brand & Licensing Platform</span>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6">
            <a
              href="#core-idea"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30"
            >
              EXPLORE THE OPPORTUNITY
            </a>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 rounded-lg bg-[#12141c] hover:bg-[#181b26] text-slate-200 font-semibold text-xs tracking-widest uppercase transition-all border border-slate-700"
            >
              CONTACT THE TEAM
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: The Core Idea */}
      <section id="core-idea" className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Strategic Foundation</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">THE CORE IDEA</h2>
            <p className="text-xl text-slate-300 font-light">ONE ORIGINAL UNIVERSE. MANY POSSIBILITIES.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block">01 / Connected Universe</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">ONE ORIGINAL UNIVERSE</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">“Build a connected portfolio of superheroes, villains, stories and worlds.”</p>
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
                [ Universe Map: Polaris • Vajra • Ghostmark • Cybersnare • Forge ]
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block">02 / Modern Production</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">AI-NATIVE PRODUCTION</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">“Use AI-assisted workflows to prototype, animate, visualize and iterate content faster.”</p>
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
                [ Pipeline: Storyboards ➔ AI Prototyping ➔ Animation ]
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block">03 / Multi-Platform IP</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">CHARACTERS FIRST</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">“Build characters that can live across comics, video, games, social media, merchandise and licensing.”</p>
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
                [ Expansion: Comics ➔ Video ➔ Games ➔ Merch ]
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-[#12141c]/80 border border-blue-500/30 text-center space-y-2">
            <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block">Long-Term Objective</span>
            <p className="text-sm text-slate-200 font-medium">
              “Turn AD Comics from a content project into an expandable IP and media ecosystem.”
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why the Model Can Scale */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0e] to-[#0d111a] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Business Scalability</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">WHY THE MODEL CAN SCALE</h2>
            <p className="text-slate-300 text-base font-light">
              “One successful character can generate many products and formats.”
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#12141c] border border-slate-800 max-w-5xl mx-auto mb-16 relative overflow-hidden [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-6">Central IP Core</div>
            <div className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white mb-8 tracking-wider">AD COMICS UNIVERSE HERO</div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold tracking-wider uppercase text-slate-300">
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Comics</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Animation</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Web Series</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Films & Specials</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Games</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Merchandise</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Licensing</div>
              <div className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800">Brand Partnerships</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white">
            <span className="px-5 py-3 rounded-lg bg-[#12141c] border border-slate-800">STORIES</span>
            <span className="text-blue-500 font-bold">→</span>
            <span className="px-5 py-3 rounded-lg bg-[#12141c] border border-slate-800">ATTENTION</span>
            <span className="text-blue-500 font-bold">→</span>
            <span className="px-5 py-3 rounded-lg bg-[#12141c] border border-slate-800">AUDIENCE</span>
            <span className="text-blue-500 font-bold">→</span>
            <span className="px-5 py-3 rounded-lg bg-[#12141c] border border-slate-800">DISTRIBUTION</span>
            <span className="text-blue-500 font-bold">→</span>
            <span className="px-5 py-3 rounded-lg bg-blue-600 text-white border border-blue-400">REVENUE</span>
          </div>
        </div>
      </section>

      {/* Section 3: Revenue Engines */}
      <section className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Monetization Architecture</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">MULTIPLE REVENUE ENGINES</h2>
            <p className="text-slate-300 text-sm">All connected directly to the central AD Comics IP ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-mono font-bold">01</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">CONTENT & MEDIA</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-light">
                <li>• Digital comics & premium editions</li>
                <li>• Animated shorts & web series</li>
                <li>• Streaming / OTT licensing</li>
                <li>• International distribution</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-mono font-bold">02</span>
              <h3 className="text-xl font-bold font-display text-white">CONSUMER PRODUCTS</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-light">
                <li>• Character merchandise & toys</li>
                <li>• Figures & action collectibles</li>
                <li>• Apparel, artwork & limited editions</li>
                <li>• Product licensing rights</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-mono font-bold">03</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">GAMES & INTERACTIVE</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-light">
                <li>• Mobile & PC games</li>
                <li>• Interactive storyline apps</li>
                <li>• AR / VR experiences</li>
                <li>• Co-development licensing</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-mono font-bold">04</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">ADVERTISING & PARTNERSHIPS</h3>
              <ul className="text-xs text-slate-300 space-y-2 font-light">
                <li>• Co-branded campaigns</li>
                <li>• Character product placement</li>
                <li>• Sponsored episodes & releases</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)] lg:col-span-2">
              <span className="text-xs text-blue-400 font-mono font-bold">05</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">LICENSING & IP</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-light">
                <li>• Character licensing portfolio</li>
                <li>• Publishing & global distribution</li>
                <li>• Film adaptation rights</li>
                <li>• Regional studio partnerships</li>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0e] to-[#0d111a] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Strategic Horizon</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">THE 5-YEAR ROADMAP</h2>
            <p className="text-slate-300 text-sm">Phased expansion of the AD Comics universe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800 space-y-4">
              <span className="text-xs text-blue-400 font-mono font-bold tracking-widest">YEAR 1</span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">FOUNDATION</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">Finalize core universe, character bible, visual identity, comics, short-form videos, and social channels.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800 space-y-4">
              <span className="text-xs text-blue-400 font-mono font-bold tracking-widest">YEAR 2</span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">AUDIENCE</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">Consistent animated/comic content, character testing, community growth, and merchandise prototypes.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800 space-y-4">
              <span className="text-xs text-blue-400 font-mono font-bold tracking-widest">YEAR 3</span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">EXPANSION</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">Larger series/projects, licensing, brand collaborations, and game concepts.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800 space-y-4">
              <span className="text-xs text-blue-400 font-mono font-bold tracking-widest">YEAR 4</span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">SCALE</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">Expanded distribution, international audience, consumer products, and strategic media partnerships.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800 space-y-4">
              <span className="text-xs text-blue-400 font-mono font-bold tracking-widest">YEAR 5</span>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">IP PLATFORM</h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">Multiple active franchises, licensing portfolio, games / interactive projects, and larger production partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis CTA */}
      <section className="py-24 bg-[#0a0b0e] border-b border-slate-800/60 text-center">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Core Proposition</span>
          <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">THE INVESTMENT THESIS</h2>

          <p className="text-xl sm:text-2xl font-black font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white [text-shadow:0_0_25px_rgba(59,130,246,0.6)] max-w-4xl mx-auto leading-relaxed">
            CHARACTERS → STORIES → AUDIENCE → DISTRIBUTION → MULTIPLE REVENUE STREAMS
          </p>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30"
            >
              CONTACT AD COMICS STUDIO
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
