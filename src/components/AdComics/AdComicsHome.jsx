import React from 'react';

export const AdComicsHome = ({ openHeroModal, showToast, showUniverseLore }) => {
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

          {/* Hero Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl border border-slate-700/50 p-4 bg-gradient-to-b from-slate-900/90 to-black/90 shadow-2xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.3)_0%,rgba(2,6,23,0.8)_50%,#000_100%)] pointer-events-none"></div>

              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop"
                    alt="AD Comics Cinematic Ensemble"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/40 text-[11px] cinematic-font text-cyan-300 flex items-center gap-2 font-['Orbitron']">
                    <i className="fa-solid fa-crosshairs text-cyan-400"></i> ENSEMBLE FOCUS: POLARIS (CENTER)
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 bg-[#08090d]/80 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span className="text-xs uppercase tracking-wider font-semibold text-white">Phase 1 Lineup Active</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                      <span>Polaris</span> &bull; 
                      <span>Vajra</span> &bull; 
                      <span>Ghostmark</span> &bull; 
                      <span>Cybersnare</span> &bull; 
                      <span>Forge</span>
                    </div>
                  </div>
                </div>
              </div>
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
          <div id="characters" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
            {/* Polaris */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop" alt="Polaris" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Visual Center</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-1">Magnetic Power</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">POLARIS</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Athletic male hero in dark futuristic suit with floating metallic objects and blue-white magnetic energy.</p>
                </div>
                <button
                  onClick={() => openHeroModal('polaris')}
                  className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Dossier</span>
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Vajra */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop" alt="Vajra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Divine Force</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-1">Divine Strength</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">VAJRA</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Muscular warrior combining ancient divine armor with modern superhero aesthetics and radiating energy.</p>
                </div>
                <button
                  onClick={() => openHeroModal('vajra')}
                  className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-black text-amber-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Dossier</span>
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Ghostmark */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop" alt="Ghostmark" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-purple-500/20 backdrop-blur-md border border-purple-500/40 text-purple-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Stealth Ops</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-purple-400 font-semibold tracking-widest uppercase mb-1">The Infiltrator</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">GHOSTMARK</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Mysterious infiltrator in dark tactical suit with masked face, standing silently in the shadows.</p>
                </div>
                <button
                  onClick={() => openHeroModal('ghostmark')}
                  className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-purple-500 hover:text-white text-purple-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Dossier</span>
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Cybersnare */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" alt="Cybersnare" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">AI Recon</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-emerald-400 font-semibold tracking-widest uppercase mb-1">The AI Machine</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">CYBERSNARE</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Advanced AI-powered reconstructing machine with glowing tech elements and internal identity VECTOR.</p>
                </div>
                <button
                  onClick={() => openHeroModal('cybersnare')}
                  className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-black text-emerald-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Dossier</span>
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
              </div>
            </div>

            {/* Forge */}
            <div className="group relative rounded-2xl border border-slate-700/40 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop" alt="Forge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-blue-500/20 backdrop-blur-md border border-blue-500/40 text-blue-300 text-[10px] uppercase font-semibold px-2.5 py-1 rounded">Master Builder</span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-1">The Unknown Force</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">FORGE</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Powerful original hero with strong heroic presence and distinctive futuristic armor design in confident stance.</p>
                </div>
                <button
                  onClick={() => openHeroModal('forge')}
                  className="mt-4 w-full py-2 rounded-lg bg-slate-800 hover:bg-blue-500 hover:text-black text-blue-400 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Dossier</span>
                  <i className="fa-solid fa-chevron-right text-[10px]"></i>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EVERY STORY CONNECTS.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-light">
                Explore uncharted dimensions, hidden syndicates, cosmic energy anomalies, and forgotten mythologies that tie the AD Comics universe into an immersive narrative web.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={showUniverseLore}
                  className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider text-xs shadow-lg shadow-cyan-500/25 transition-all"
                >
                  Explore Lore Map
                </button>
                <button
                  onClick={() => showToast('Cinematic Teaser', 'Phase 1 official trailer preview loaded successfully in cinematic presentation mode.')}
                  className="px-8 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-semibold uppercase tracking-wider text-xs transition-all"
                >
                  Watch Phase 1 Teaser
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
