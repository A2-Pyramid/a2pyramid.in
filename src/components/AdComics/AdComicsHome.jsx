import React from 'react';

export const AdComicsHome = ({ openHeroModal, showUniverseLore }) => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(14,23,42,0.8)_0%,rgba(8,9,13,1)_70%)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-[#08090d]/90 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Phase 1 Universe Launch
            </div>

            <h1 className="cinematic-font text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white mb-4 leading-none font-['Orbitron']">
              AD COMICS
            </h1>

            <h2 className="cinematic-font text-xl sm:text-2xl text-cyan-300 font-bold tracking-widest uppercase mb-6 [text-shadow:0_0_20px_rgba(56,189,248,0.6)] font-['Orbitron']">
              A NEW UNIVERSE IS RISING.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed font-light">
              Five heroes. One universe. Infinite stories. Step into a masterfully crafted realm where divine mythology, advanced AI, and quantum forces collide.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
              <a
                href="#characters"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold uppercase tracking-wider text-sm shadow-xl shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-3"
              >
                <span>Explore Characters</span>
                <i className="fa-solid fa-users"></i>
              </a>
              <a
                href="#universe"
                onClick={e => { e.preventDefault(); document.getElementById('universe')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-4 rounded-xl border border-slate-700 bg-gradient-to-br from-white/5 to-[#12141c]/80 hover:bg-slate-800/80 text-white font-semibold uppercase tracking-wider text-sm transition-all transform hover:-translate-y-1 flex items-center gap-3"
              >
                <span>Discover AD Comics</span>
                <i className="fa-solid fa-compass"></i>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <div className="cinematic-font text-2xl font-bold text-cyan-400 font-['Orbitron']">05</div>
                <div className="text-xs text-slate-400 tracking-wider uppercase">Core Heroes</div>
              </div>
              <div>
                <div className="cinematic-font text-2xl font-bold text-white font-['Orbitron']">Infinite</div>
                <div className="text-xs text-slate-400 tracking-wider uppercase">Storylines</div>
              </div>
              <div>
                <div className="cinematic-font text-2xl font-bold text-cyan-300 font-['Orbitron']">100%</div>
                <div className="text-xs text-slate-400 tracking-wider uppercase">Original Lore</div>
              </div>
            </div>
          </div>

          {/* Cinematic TV Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center">

            {/* Top broadcast bar */}
            <div className="w-full flex items-center justify-between px-4 py-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">LIVE PROTOTYPE</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-['Orbitron']">AD-COMICS · PHASE 1</span>
            </div>

            {/* TV Body */}
            <div className="relative w-full">
              {/* Outer TV shell */}
              <div className="relative rounded-[2rem] bg-gradient-to-b from-[#1a1d2e] to-[#0d0f1a] border-[3px] border-slate-700/80 shadow-[0_0_60px_rgba(6,182,212,0.25),0_0_120px_rgba(6,182,212,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] p-3">

                {/* Screen bezel */}
                <div className="rounded-[1.4rem] bg-black overflow-hidden border border-slate-800/60 shadow-inner">

                  {/* Screen scanline overlay */}
                  <div className="relative">
                    <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)] rounded-[1.4rem]"></div>
                    <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.5)_100%)] rounded-[1.4rem]"></div>

                    {/* YouTube Embed */}
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/Yq9ayvA6YR0?autoplay=1&mute=1&loop=1&playlist=Yq9ayvA6YR0&controls=1&modestbranding=1&rel=0"
                        title="Polaris - AD Comics Prototype"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* TV bottom bar with brand */}
                <div className="flex items-center justify-between px-4 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]"></div>
                    <span className="text-[10px] font-['Orbitron'] text-cyan-400 tracking-widest uppercase">AD COMICS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/60"></div>
                  </div>
                </div>
              </div>

              {/* TV Stand neck */}
              <div className="mx-auto w-10 h-5 bg-gradient-to-b from-[#1a1d2e] to-[#0d0f1a] border-x border-slate-700/60"></div>
              {/* TV Stand base */}
              <div className="mx-auto w-40 h-3 rounded-b-xl bg-gradient-to-b from-[#1a1d2e] to-[#0d0f1a] border border-t-0 border-slate-700/60 shadow-[0_4px_20px_rgba(6,182,212,0.15)]"></div>
            </div>

            <div className="mt-5 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#12141c]/80 border border-slate-800 backdrop-blur max-w-full overflow-hidden">
              <i className="fa-solid fa-film text-cyan-400 text-sm shrink-0"></i>
              <span className="text-xs text-slate-300 font-light truncate">Polaris · <span className="text-cyan-400 font-semibold">Prototype Demo</span> · Phase 1 Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Vision Section */}
      <section id="about" className="py-24 bg-[#12141c]/50 relative border-t border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">The Core Vision</span>
            <h2 className="cinematic-font text-3xl sm:text-4xl font-bold text-white mb-6 font-['Orbitron']">
              WELCOME TO THE AD COMICS UNIVERSE
            </h2>
            <p className="text-slate-300 text-lg italic leading-relaxed font-light">
              “AD Comics is an original superhero universe built around powerful characters, interconnected stories, mystery, technology, mythology, and cinematic adventures.”
            </p>
          </div>

          {/* 5 Character Cards Grid */}
          <div id="characters" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
            {/* Polaris */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="/polaris.jpeg" alt="Polaris" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Core Hero 01</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-1">Magnetic Power</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">POLARIS</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Controls magnetic forces, manipulates iron and metallic elements, and commands the battlefield with electromagnetic precision.</p>
                </div>
                <button onClick={() => openHeroModal('polaris')} className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>View Dossier</span><i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Vajra */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="/vajra.jpeg" alt="Vajra" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Core Hero 02</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-1">Divine Strength</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">VAJRA</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Inspired by the divine powers of Lord Hanuman Ji — extraordinary strength, size transformation, and celestial flight.</p>
                </div>
                <button onClick={() => openHeroModal('vajra')} className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-black text-amber-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>View Dossier</span><i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Ghostmark */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="/ghostmark.jpeg" alt="Ghostmark" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-purple-500/20 backdrop-blur-md border border-purple-500/40 text-purple-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Core Hero 03</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-purple-400 font-semibold tracking-widest uppercase mb-1">The Infiltrator</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">GHOSTMARK</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Master infiltrator who merges with enemies to access their memories, secrets and weaknesses from within.</p>
                </div>
                <button onClick={() => openHeroModal('ghostmark')} className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-purple-500 hover:text-white text-purple-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>View Dossier</span><i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Cybersnare */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="/cybersnare.jpeg" alt="Cybersnare" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-sky-500/20 backdrop-blur-md border border-sky-500/40 text-sky-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Core Hero 04</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-sky-400 font-semibold tracking-widest uppercase mb-1">The AI Machine</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">CYBERSNARE</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">AI-powered reconstructing machine integrated with internal intelligence system <span className="text-sky-400 font-semibold">VECTOR</span>.</p>
                </div>
                <button onClick={() => openHeroModal('cybersnare')} className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-black text-sky-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>View Dossier</span><i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Forge */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="/forge.jpeg" alt="Forge" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Core Hero 05</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-emerald-400 font-semibold tracking-widest uppercase mb-1">The Unknown Force</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">FORGE</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">A powerful and mysterious force with industrial strength and self-repairing quantum alloy armor. His story is only beginning.</p>
                </div>
                <button onClick={() => openHeroModal('forge')} className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-black text-emerald-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                  <span>View Dossier</span><i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universe Interconnected Lore Section */}
      <section id="universe" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#08090d] via-slate-900/60 to-[#08090d]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative rounded-3xl border border-slate-700/50 overflow-hidden p-8 sm:p-16 bg-gradient-to-r from-slate-950/90 via-[#12141c]/80 to-slate-950/90 shadow-2xl">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
                <i className="fa-solid fa-globe"></i> Interconnected Lore
              </div>

              <h2 className="cinematic-font text-3xl sm:text-5xl font-black text-white mb-6 leading-tight font-['Orbitron']">
                EVERY HERO HAS A STORY.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EVERY STORY IS BEGINNING.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-light">
                Five individual origins. Five separate paths. One universe taking shape. Explore the Phase 1 lore map to discover each hero's story before the larger universe unfolds.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={showUniverseLore}
                  className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/25 transition-all"
                >
                  Explore Lore Map
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
