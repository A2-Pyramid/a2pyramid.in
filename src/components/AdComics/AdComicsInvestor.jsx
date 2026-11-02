import React from 'react';

const HEROES = [
  { name: 'POLARIS',    img: '/polaris.jpeg',    color: 'cyan',    label: 'Magnetic Power'   },
  { name: 'VAJRA',      img: '/vajra.jpeg',       color: 'amber',   label: 'Divine Strength'  },
  { name: 'GHOSTMARK',  img: '/ghostmark.jpeg',   color: 'purple',  label: 'The Infiltrator'  },
  { name: 'CYBERSNARE', img: '/cybersnare.jpeg',  color: 'sky',     label: 'The AI Machine'   },
  { name: 'FORGE',      img: '/forge.jpeg',       color: 'emerald', label: 'Unknown Force'    },
];

const colorText = { cyan: 'text-cyan-400', amber: 'text-amber-400', purple: 'text-purple-400', sky: 'text-sky-400', emerald: 'text-emerald-400' };
const colorBorder = { cyan: 'border-cyan-500/50', amber: 'border-amber-500/50', purple: 'border-purple-500/50', sky: 'border-sky-500/50', emerald: 'border-emerald-500/50' };
const colorGlow = { cyan: 'rgba(6,182,212,0.3)', amber: 'rgba(245,158,11,0.3)', purple: 'rgba(168,85,247,0.3)', sky: 'rgba(56,189,248,0.3)', emerald: 'rgba(16,185,129,0.3)' };

export const AdComicsInvestor = ({ setActiveTab }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-slate-800/60 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-[#0a0b0e] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              AD COMICS · Strategic Opportunity
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] tracking-tight text-white leading-tight">
              BUILDING THE NEXT GENERATION OF{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                ENTERTAINMENT IP
              </span>
            </h1>
            <p className="text-lg text-slate-300 font-light max-w-xl">
              An original superhero universe built for comics, animation, games, licensing and global distribution — powered by AI-native production.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-xs uppercase tracking-widest font-medium">
              {['5-Year Vision', 'Multiple Revenue Engines', 'Brand & Licensing Platform'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-[#12141c] border border-slate-800 text-slate-400">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a href="#core-idea" className="px-7 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30">
                EXPLORE THE OPPORTUNITY
              </a>
              <button onClick={() => setActiveTab('contact')} className="px-7 py-3.5 rounded-lg bg-[#12141c] hover:bg-[#181b26] text-slate-200 font-semibold text-xs tracking-widest uppercase transition-all border border-slate-700">
                CONTACT THE TEAM
              </button>
            </div>
          </div>

          {/* Right: Hero character strip */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] font-['Orbitron'] text-cyan-400 uppercase tracking-widest">Phase 1 · 5 Core Heroes · Confirmed IP</span>
              </div>
              {/* Character strip */}
              <div className="grid grid-cols-5 gap-2">
                {HEROES.map((h) => (
                  <div key={h.name} className={`relative rounded-xl overflow-hidden border ${colorBorder[h.color]} group`} style={{ boxShadow: `0 0 20px ${colorGlow[h.color]}` }}>
                    <div className="aspect-[2/3] overflow-hidden">
                      <img src={h.img} alt={h.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                      <div className={`text-[8px] font-black font-['Orbitron'] tracking-wider ${colorText[h.color]}`}>{h.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center text-[10px] text-slate-600 uppercase tracking-widest font-['Orbitron']">Original character artwork · AD Comics Universe</div>
            </div>
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
            {[
              { n: '01', title: 'ONE ORIGINAL UNIVERSE', sub: 'Connected Universe', desc: '"Build a connected portfolio of superheroes, villains, stories and worlds."', mono: '[ Universe Map: Polaris • Vajra • Ghostmark • Cybersnare • Forge ]' },
              { n: '02', title: 'AI-NATIVE PRODUCTION', sub: 'Modern Production', desc: '"Use AI-assisted workflows to prototype, animate, visualize and iterate content faster."', mono: '[ Pipeline: Storyboards ➔ AI Prototyping ➔ Animation ]' },
              { n: '03', title: 'CHARACTERS FIRST', sub: 'Multi-Platform IP', desc: '"Build characters that can live across comics, video, games, social media, merchandise and licensing."', mono: '[ Expansion: Comics ➔ Video ➔ Games ➔ Merch ]' },
            ].map(c => (
              <div key={c.n} className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
                <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block">{c.n} / {c.sub}</span>
                <h3 className="text-xl font-bold font-['Outfit'] text-white">{c.title}</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">{c.desc}</p>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">{c.mono}</div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-[#12141c]/80 border border-blue-500/30 text-center space-y-2">
            <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block">Long-Term Objective</span>
            <p className="text-sm text-slate-200 font-medium">"Turn AD Comics from a content project into an expandable IP and media ecosystem."</p>
          </div>
        </div>
      </section>

      {/* Section: Proof of Concept — Character Showcase */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0e] to-[#0d111a] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Proof of Concept</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">THE IP IS ALREADY BUILT</h2>
            <p className="text-slate-300 text-base font-light">Five fully developed original characters with confirmed visual identities, powers, origins and storylines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {HEROES.map((h) => (
              <div key={h.name} className={`group relative rounded-2xl overflow-hidden border ${colorBorder[h.color]} bg-[#0d0f1a] transition-all hover:-translate-y-1`} style={{ boxShadow: `0 0 30px ${colorGlow[h.color]}` }}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-[#0d0f1a]/20 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-black/60 border ${colorBorder[h.color]} ${colorText[h.color]}`}>CONFIRMED IP</span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <div className={`text-[10px] font-semibold uppercase tracking-widest ${colorText[h.color]}`}>{h.label}</div>
                  <div className="font-['Orbitron'] text-sm font-black text-white">{h.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Polaris prototype callout */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-[#12141c] border border-cyan-500/30 [box-shadow:0_0_40px_rgba(6,182,212,0.15)]">
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img src="/polaris.jpeg" alt="Polaris Prototype" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[9px] font-['Orbitron'] text-cyan-400 uppercase tracking-widest">Polaris · Visual Prototype</span>
              </div>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">Live Prototype · Phase 1</span>
              </div>
              <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-black text-white">POLARIS — PROTOTYPE DEMO AVAILABLE</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                A working AI-assisted animation prototype of Polaris has already been produced, demonstrating the production pipeline and visual direction of the AD Comics universe. This is not a concept — it is a working proof of the model.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['AI-Assisted Animation', 'Original Character Design', 'Phase 1 Production Pipeline'].map(t => (
                  <div key={t} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <i className="fa-solid fa-check text-cyan-400 text-[10px]"></i>
                    <span className="text-xs text-slate-300">{t}</span>
                  </div>
                ))}
              </div>
              <a href="https://www.youtube.com/watch?v=Yq9ayvA6YR0" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs tracking-widest uppercase transition-all">
                <i className="fa-brands fa-youtube"></i> WATCH PROTOTYPE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why the Model Can Scale */}
      <section className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Business Scalability</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">WHY THE MODEL CAN SCALE</h2>
            <p className="text-slate-300 text-base font-light">"One successful character can generate many products and formats."</p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#12141c] border border-slate-800 max-w-5xl mx-auto mb-16 relative overflow-hidden [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
            {/* Mini character row inside */}
            <div className="flex items-center justify-center gap-3 mb-8">
              {HEROES.map(h => (
                <div key={h.name} className={`w-10 h-10 rounded-full overflow-hidden border-2 ${colorBorder[h.color]}`} style={{ boxShadow: `0 0 10px ${colorGlow[h.color]}` }}>
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover object-top" />
                </div>
              ))}
              <span className="text-xs text-slate-400 ml-2 font-['Orbitron'] uppercase tracking-widest">5 Core Heroes</span>
            </div>
            <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">Central IP Core</div>
            <div className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white mb-8 tracking-wider">AD COMICS UNIVERSE HERO</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold tracking-wider uppercase text-slate-300">
              {['Comics', 'Animation', 'Web Series', 'Films & Specials', 'Games', 'Merchandise', 'Licensing', 'Brand Partnerships'].map(t => (
                <div key={t} className="p-4 rounded-xl bg-[#0a0b0e] border border-slate-800 hover:border-blue-500/40 transition-all">{t}</div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white">
            {['STORIES', 'ATTENTION', 'AUDIENCE', 'DISTRIBUTION'].map((t, i) => (
              <React.Fragment key={t}>
                <span className="px-5 py-3 rounded-lg bg-[#12141c] border border-slate-800">{t}</span>
                <span className="text-blue-500 font-bold">→</span>
              </React.Fragment>
            ))}
            <span className="px-5 py-3 rounded-lg bg-blue-600 text-white border border-blue-400">REVENUE</span>
          </div>
        </div>
      </section>

      {/* Section 3: Revenue Engines */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0e] to-[#0d111a] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Monetization Architecture</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">MULTIPLE REVENUE ENGINES</h2>
            <p className="text-slate-300 text-sm">All connected directly to the central AD Comics IP ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { n: '01', title: 'CONTENT & MEDIA', items: ['Digital comics & premium editions', 'Animated shorts & web series', 'Streaming / OTT licensing', 'International distribution'] },
              { n: '02', title: 'CONSUMER PRODUCTS', items: ['Character merchandise & toys', 'Figures & action collectibles', 'Apparel, artwork & limited editions', 'Product licensing rights'] },
              { n: '03', title: 'GAMES & INTERACTIVE', items: ['Mobile & PC games', 'Interactive storyline apps', 'AR / VR experiences', 'Co-development licensing'] },
              { n: '04', title: 'ADVERTISING & PARTNERSHIPS', items: ['Co-branded campaigns', 'Character product placement', 'Sponsored episodes & releases'] },
            ].map(r => (
              <div key={r.n} className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
                <span className="text-xs text-blue-400 font-mono font-bold">{r.n}</span>
                <h3 className="text-xl font-bold font-['Outfit'] text-white">{r.title}</h3>
                <ul className="text-xs text-slate-300 space-y-2 font-light">
                  {r.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}

            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 [box-shadow:0_0_35px_rgba(59,130,246,0.15)] lg:col-span-2">
              <span className="text-xs text-blue-400 font-mono font-bold">05</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">LICENSING & IP</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-light">
                {['Character licensing portfolio', 'Publishing & global distribution', 'Film adaptation rights', 'Regional studio partnerships'].map(i => (
                  <div key={i} className="flex items-center gap-2"><i className="fa-solid fa-circle-dot text-blue-400 text-[8px]"></i>{i}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Roadmap */}
      <section className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Strategic Horizon</span>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">THE 5-YEAR ROADMAP</h2>
            <p className="text-slate-300 text-sm">Phased expansion of the AD Comics universe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { y: 'YEAR 1', t: 'FOUNDATION', d: 'Finalize core universe, character bible, visual identity, comics, short-form videos, and social channels.' },
              { y: 'YEAR 2', t: 'AUDIENCE',   d: 'Consistent animated/comic content, character testing, community growth, and merchandise prototypes.' },
              { y: 'YEAR 3', t: 'EXPANSION',  d: 'Larger series/projects, licensing, brand collaborations, and game concepts.' },
              { y: 'YEAR 4', t: 'SCALE',      d: 'Expanded distribution, international audience, consumer products, and strategic media partnerships.' },
              { y: 'YEAR 5', t: 'IP PLATFORM',d: 'Multiple active franchises, licensing portfolio, games / interactive projects, and larger production partnerships.' },
            ].map((r, i) => (
              <div key={r.y} className="relative p-6 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4">
                {/* Hero avatar for each year */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700 mb-2">
                  <img src={HEROES[i].img} alt={HEROES[i].name} className="w-full h-full object-cover object-top" />
                </div>
                <span className="text-xs text-blue-400 font-mono font-bold tracking-widest block">{r.y}</span>
                <h3 className="text-lg font-bold font-['Outfit'] text-white">{r.t}</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{r.d}</p>
                {i < 4 && <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-500 text-lg z-10">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0e] to-[#0d111a] border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-[#12141c] [box-shadow:0_0_60px_rgba(59,130,246,0.2)] p-8 sm:p-14">
            {/* Background character silhouettes */}
            <div className="absolute inset-0 flex items-stretch opacity-10 pointer-events-none">
              {HEROES.map(h => (
                <div key={h.name} className="flex-1 overflow-hidden">
                  <img src={h.img} alt="" className="w-full h-full object-cover object-top" />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-[#12141c] via-transparent to-[#12141c]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-[#12141c]"></div>
            </div>

            <div className="relative z-10 text-center space-y-8">
              <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block">Core Proposition</span>
              <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">THE INVESTMENT THESIS</h2>
              <p className="text-xl sm:text-2xl font-black font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white max-w-4xl mx-auto leading-relaxed">
                CHARACTERS → STORIES → AUDIENCE → DISTRIBUTION → MULTIPLE REVENUE STREAMS
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30"
                >
                  CONTACT AD COMICS STUDIO
                </button>
                <a href="https://www.youtube.com/watch?v=Yq9ayvA6YR0" target="_blank" rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-lg bg-[#0a0b0e] hover:bg-slate-800 text-slate-200 font-semibold text-xs tracking-widest uppercase transition-all border border-slate-700 flex items-center gap-2">
                  <i className="fa-brands fa-youtube text-red-400"></i> WATCH PROTOTYPE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
