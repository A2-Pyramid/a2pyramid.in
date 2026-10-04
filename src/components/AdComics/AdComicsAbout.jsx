import React from 'react';

export const AdComicsAbout = ({ openHeroModal, openUniverseModal }) => {
  return (
    <>
      {/* About Hero Section */}
      <section className="relative min-h-[70vh] pt-32 pb-20 flex items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(14,23,42,0.8)_0%,rgba(8,9,13,1)_70%)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-[#08090d]/90 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Official Universe Lore & Vision
          </div>

          <h1 className="cinematic-font text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-tight font-['Orbitron']">
            THE AD COMICS UNIVERSE
          </h1>

          <h2 className="cinematic-font text-lg sm:text-2xl text-cyan-300 font-bold tracking-widest uppercase mb-6 [text-shadow:0_0_20px_rgba(56,189,248,0.6)] font-['Orbitron']">
            A NEW WORLD OF HEROES, STORIES AND POSSIBILITIES.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-light">
            AD Comics is an original superhero universe built around powerful characters, interconnected stories, mystery, technology, mythology, and cinematic adventures.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#vision"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold uppercase tracking-wider text-xs shadow-xl shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-3"
            >
              <span>Discover Our Vision</span>
              <i className="fa-solid fa-angle-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-[#12141c]/40 relative border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] rounded-2xl border border-slate-700/60 overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop"
                  alt="AD Comics Universe Concept"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#08090d]/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 cinematic-font font-['Orbitron']">Sector 9 World Building</span>
                  <span class="text-xs text-slate-400">Phase 1 Blueprint</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase w-fit">
                Core Philosophy
              </div>
              <h2 className="cinematic-font text-3xl sm:text-4xl font-bold text-white font-['Orbitron']">OUR VISION</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
              <p className="text-slate-300 text-base leading-relaxed italic border-l-2 border-cyan-500/50 pl-4 py-1">
                “AD Comics is being created as a connected superhero universe where every character has a unique identity, every origin has a purpose, and individual stories can eventually become part of a much larger narrative.”
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Our goal is to build original characters and stories that can exist across comics, cinematic experiences, animation, digital entertainment, and future storytelling formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-24 relative overflow-hidden bg-[#08090d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">One Universe. Many Stories.</span>
            <h2 className="cinematic-font text-3xl sm:text-4xl font-black text-white mb-4 font-['Orbitron']">MORE THAN ONE STORY</h2>
            <p className="text-slate-400 text-sm">Exploring the foundational pillars that uphold the AD Comics universe architecture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#12141c]/60 flex flex-col gap-4 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-users-viewfinder"></i>
              </div>
              <h3 className="cinematic-font text-base font-bold text-white font-['Orbitron']">HEROES</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Original characters with unique abilities, profound vulnerabilities, and distinct personal motivations.</p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#12141c]/60 flex flex-col gap-4 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-mask"></i>
              </div>
              <h3 className="cinematic-font text-base font-bold text-white font-['Orbitron']">MYSTERY</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Ancient secrets, unexplained cosmic forces, and hidden underworld syndicates waiting to be unmasked.</p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#12141c]/60 flex flex-col gap-4 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <h3 className="cinematic-font text-base font-bold text-white font-['Orbitron']">TECHNOLOGY</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Advanced machines, artificial intelligence constructs like VECTOR, and futuristic engineering marvels.</p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#12141c]/60 flex flex-col gap-4 hover:border-amber-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="cinematic-font text-base font-bold text-white font-['Orbitron']">MYTHOLOGY</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Powerful ancient pantheons and legendary celestial elements resurrected in a modern cyberpunk era.</p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-[#12141c]/60 flex flex-col gap-4 hover:border-blue-500/50 transition-all group md:col-span-3 lg:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-globe"></i>
              </div>
              <h3 className="cinematic-font text-base font-bold text-white font-['Orbitron']">COSMIC ADVENTURE</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Expansive storylines reaching far beyond Earth into uncharted dimensions and unexplored worlds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ensemble Lineup Horizontal Cards */}
      <section className="py-24 bg-[#12141c]/50 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Ensemble Lineup</span>
              <h2 className="cinematic-font text-3xl sm:text-4xl font-bold text-white font-['Orbitron']">THE HEROES OF AD COMICS</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Polaris */}
            <div
              onClick={() => openHeroModal('polaris')}
              className="group relative rounded-2xl border border-slate-800 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop" alt="Polaris" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold tracking-widest uppercase mb-1">The Magnetic Power</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">POLARIS</h3>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-cyan-300 flex items-center gap-1 font-semibold">View Dossier <i className="fa-solid fa-chevron-right text-[10px]"></i></span>
              </div>
            </div>

            {/* Vajra */}
            <div
              onClick={() => openHeroModal('vajra')}
              className="group relative rounded-2xl border border-slate-800 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop" alt="Vajra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-semibold tracking-widest uppercase mb-1">The Divine Strength</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">VAJRA</h3>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-amber-300 flex items-center gap-1 font-semibold">View Dossier <i className="fa-solid fa-chevron-right text-[10px]"></i></span>
              </div>
            </div>

            {/* Ghostmark */}
            <div
              onClick={() => openHeroModal('ghostmark')}
              className="group relative rounded-2xl border border-slate-800 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop" alt="Ghostmark" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-purple-400 font-semibold tracking-widest uppercase mb-1">The Infiltrator</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">GHOSTMARK</h3>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-purple-300 flex items-center gap-1 font-semibold">View Dossier <i className="fa-solid fa-chevron-right text-[10px]"></i></span>
              </div>
            </div>

            {/* Cybersnare */}
            <div
              onClick={() => openHeroModal('cybersnare')}
              className="group relative rounded-2xl border border-slate-800 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop" alt="Cybersnare" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-emerald-400 font-semibold tracking-widest uppercase mb-1">The AI Machine</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">CYBERSNARE</h3>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-emerald-300 flex items-center gap-1 font-semibold">View Dossier <i className="fa-solid fa-chevron-right text-[10px]"></i></span>
              </div>
            </div>

            {/* Forge */}
            <div
              onClick={() => openHeroModal('forge')}
              className="group relative rounded-2xl border border-slate-800 overflow-hidden bg-gradient-to-b from-slate-900 to-[#08090d] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop" alt="Forge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-1">The Unknown Force</div>
                  <h3 className="cinematic-font text-lg font-bold text-white mb-2 font-['Orbitron']">FORGE</h3>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-blue-300 flex items-center gap-1 font-semibold">View Dossier <i className="fa-solid fa-chevron-right text-[10px]"></i></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Depth */}
      <section className="py-24 relative overflow-hidden bg-[#08090d] border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Narrative Depth</span>
          <h2 className="cinematic-font text-3xl sm:text-5xl font-black text-white mb-8 font-['Orbitron']">EVERY HERO HAS AN ORIGIN</h2>

          <p className="text-slate-200 text-lg sm:text-xl font-light italic leading-relaxed mb-6">
            “AD Comics focuses on character-driven storytelling. Heroes are not defined only by their powers, but by their choices, relationships, discoveries, conflicts, and consequences.”
          </p>
          <p className="text-cyan-400 cinematic-font text-sm font-semibold tracking-widest uppercase font-['Orbitron']">
            Every story opens another door into the universe.
          </p>
        </div>
      </section>

      {/* Aspirational Growth */}
      <section className="py-24 bg-gradient-to-b from-[#08090d] via-[#12141c]/40 to-[#08090d] border-t border-slate-800/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase">Aspirational Growth</span>
              <h2 className="cinematic-font text-3xl sm:text-4xl font-bold text-white font-['Orbitron']">THE JOURNEY HAS JUST BEGUN</h2>
              <p className="text-slate-300 text-base leading-relaxed font-light">
                “AD Comics is designed to grow beyond individual stories into a connected entertainment universe.”
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Spanning across comic publications, animated features, cinematic experiences, digital platforms, and immersive media, our horizons are limitless.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-3 rounded-xl border border-slate-800 bg-[#08090d]/60 text-center">
                  <i className="fa-solid fa-book text-cyan-400 text-lg mb-1"></i>
                  <div className="text-[11px] text-slate-300 uppercase">Comics</div>
                </div>
                <div className="p-3 rounded-xl border border-slate-800 bg-[#08090d]/60 text-center">
                  <i className="fa-solid fa-film text-blue-400 text-lg mb-1"></i>
                  <div className="text-[11px] text-slate-300 uppercase">Animation</div>
                </div>
                <div className="p-3 rounded-xl border border-slate-800 bg-[#08090d]/60 text-center">
                  <i className="fa-solid fa-vr-cardboard text-purple-400 text-lg mb-1"></i>
                  <div className="text-[11px] text-slate-300 uppercase">Digital</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] rounded-2xl border border-slate-700/60 overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" alt="Future Horizon" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-cyan-300 cinematic-font font-['Orbitron']">Phase 1 & Beyond</span>
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
