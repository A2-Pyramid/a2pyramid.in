import React from 'react';

export const AdComicsCharacters = ({ openHeroModal }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/60 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-[#0a0b0e] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3 inline-block">The Roster</span>
          <h1 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight mb-4 text-white">
            MEET THE <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white [text-shadow:0_0_25px_rgba(59,130,246,0.6)]">HEROES</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light mb-6">
            THE STORIES BEGIN WITH THEM. Five unique heroes. Five different paths. One connected universe.
          </p>
        </div>
      </section>

      {/* Polaris */}
      <section id="polaris" className="py-24 border-b border-slate-800/40 relative overflow-hidden bg-gradient-to-b from-[#0a0b0e] to-[#0d111a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-widest uppercase">
              Core Hero 01
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit'] tracking-tight text-white">
              POLARIS
            </h2>
            <h3 className="text-lg font-semibold text-blue-400 tracking-wider uppercase">THE MAGNETIC POWER</h3>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Polaris is drawn into a dangerous mystery surrounding ancient rings, an alien force, and a threat that reaches Earth. His mastery over magnetic forces allows him to manipulate the battlefield with precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block mb-1">Power</span>
                <p className="text-sm text-slate-300">Magnetic manipulation and control of iron and magnetically controllable elements.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold block mb-1">Ability</span>
                <p className="text-sm text-slate-300">Can manipulate metallic objects and use magnetic force for powerful attacks and flight.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openHeroModal('polaris')}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-blue-600/30 border border-blue-400/30 group"
              >
                EXPLORE POLARIS <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#12141c] [box-shadow:0_0_35px_rgba(59,130,246,0.15)] aspect-[16/10] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/60 via-transparent to-slate-900/40"></div>
              <div className="relative z-10 text-center p-8 space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-2xl shadow-blue-500/50 border-2 border-white/20">
                  <span className="text-3xl font-black text-white font-['Outfit']">P</span>
                </div>
                <h4 className="text-xl font-bold font-['Outfit'] text-white tracking-wider">POLARIS</h4>
                <p className="text-xs text-blue-300 tracking-widest uppercase">Magnetic Guardian</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/60 backdrop-blur border border-slate-700 text-[10px] text-slate-400 font-mono">AD-CHR-01</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vajra */}
      <section id="vajra" className="py-24 border-b border-slate-800/40 relative overflow-hidden bg-gradient-to-b from-[#0d111a] to-[#0a0b0e]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#12141c] [box-shadow:0_0_35px_rgba(6,182,212,0.2)] aspect-[16/10] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/40 via-transparent to-slate-900/40"></div>
              <div className="relative z-10 text-center p-8 space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center shadow-2xl shadow-amber-500/40 border-2 border-white/20">
                  <span className="text-3xl font-black text-white font-['Outfit']">V</span>
                </div>
                <h4 className="text-xl font-bold font-['Outfit'] text-white tracking-wider">VAJRA</h4>
                <p className="text-xs text-amber-300 tracking-widest uppercase">Divine Strength</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/60 backdrop-blur border border-slate-700 text-[10px] text-slate-400 font-mono">AD-CHR-02</div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Core Hero 02
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit'] tracking-tight text-white">
              VAJRA
            </h2>
            <h3 className="text-lg font-semibold text-amber-400 tracking-wider uppercase">THE DIVINE STRENGTH</h3>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Vajra's journey connects ancient power with the modern world, revealing a hero capable of confronting colossal forces far larger than himself through divine-level strength and celestial armor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold block mb-1">Power</span>
                <p className="text-sm text-slate-300">Divine-level strength and celestial resilience.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold block mb-1">Ability</span>
                <p className="text-sm text-slate-300">Can dramatically increase scale, fly, and engage massive enemy threats.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openHeroModal('vajra')}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-amber-600/30 border border-amber-400/30 group"
              >
                EXPLORE VAJRA <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ghostmark */}
      <section id="ghostmark" className="py-24 border-b border-slate-800/40 relative overflow-hidden bg-gradient-to-b from-[#0a0b0e] to-[#0d111a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-widest uppercase">
              Core Hero 03
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit'] tracking-tight text-white">
              GHOSTMARK
            </h2>
            <h3 className="text-lg font-semibold text-purple-400 tracking-wider uppercase">THE INFILTRATOR</h3>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Ghostmark operates in the grey area between hero and infiltrator, entering places others cannot and uncovering deep secrets hidden inside enemy strongholds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-purple-400 uppercase tracking-widest font-semibold block mb-1">Role</span>
                <p className="text-sm text-slate-300">Infiltrator and covert intelligence specialist.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-purple-400 uppercase tracking-widest font-semibold block mb-1">Skill</span>
                <p className="text-sm text-slate-300">Can merge with hostile environments and execute precision strikes without detection.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openHeroModal('ghostmark')}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-purple-600/30 border border-purple-400/30 group"
              >
                EXPLORE GHOSTMARK <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#12141c] [box-shadow:0_0_35px_rgba(59,130,246,0.15)] aspect-[16/10] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/60 via-transparent to-slate-900/40"></div>
              <div className="relative z-10 text-center p-8 space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-purple-700 to-indigo-900 flex items-center justify-center shadow-2xl shadow-purple-500/40 border-2 border-white/20">
                  <span className="text-3xl font-black text-white font-['Outfit']">G</span>
                </div>
                <h4 className="text-xl font-bold font-['Outfit'] text-white tracking-wider">GHOSTMARK</h4>
                <p className="text-xs text-purple-300 tracking-widest uppercase">Stealth Operative</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/60 backdrop-blur border border-slate-700 text-[10px] text-slate-400 font-mono">AD-CHR-03</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersnare */}
      <section id="cybersnare" className="py-24 border-b border-slate-800/40 relative overflow-hidden bg-gradient-to-b from-[#0d111a] to-[#0a0b0e]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#12141c] [box-shadow:0_0_35px_rgba(6,182,212,0.2)] aspect-[16/10] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/60 via-transparent to-slate-900/40"></div>
              <div className="relative z-10 text-center p-8 space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-cyan-600 to-blue-800 flex items-center justify-center shadow-2xl shadow-cyan-500/40 border-2 border-white/20">
                  <span className="text-3xl font-black text-white font-['Outfit']">C</span>
                </div>
                <h4 className="text-xl font-bold font-['Outfit'] text-white tracking-wider">CYBERSNARE</h4>
                <p className="text-xs text-cyan-300 tracking-widest uppercase">AI Reconstruction Machine</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/60 backdrop-blur border border-slate-700 text-[10px] text-slate-400 font-mono">AD-CHR-04</div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              Core Hero 04
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit'] tracking-tight text-white">
              CYBERSNARE
            </h2>
            <h3 className="text-lg font-semibold text-cyan-400 tracking-wider uppercase">THE AI MACHINE</h3>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Cybersnare is an advanced AI-powered reconstructing machine whose intelligence and technology create possibilities unlike any other hero in the universe. Integrated with internal intelligence <span className="text-cyan-300 font-semibold">VECTOR</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-cyan-400 uppercase tracking-widest font-semibold block mb-1">Power</span>
                <p className="text-sm text-slate-300">Advanced technological reconstruction and digital integration.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-cyan-400 uppercase tracking-widest font-semibold block mb-1">Internal AI</span>
                <p className="text-sm text-cyan-300 font-mono font-semibold">VECTOR</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openHeroModal('cybersnare')}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-cyan-600/30 border border-cyan-400/30 group"
              >
                EXPLORE CYBERSNARE <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Forge */}
      <section id="forge" className="py-24 border-b border-slate-800/40 relative overflow-hidden bg-gradient-to-b from-[#0a0b0e] to-[#0d111a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              Core Hero 05
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-['Outfit'] tracking-tight text-white">
              FORGE
            </h2>
            <h3 className="text-lg font-semibold text-emerald-400 tracking-wider uppercase">THE UNKNOWN FORCE</h3>
            <p className="text-slate-300 text-base leading-relaxed font-light">
              A powerful and mysterious member of the AD Comics universe. Forge possesses an industrial yet futuristic aesthetic with an origin shrouded in mystery. His story is only beginning to unfold.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-emerald-400 uppercase tracking-widest font-semibold block mb-1">Identity</span>
                <p className="text-sm text-slate-300">Mysterious powerhouse within the AD Comics universe.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#12141c] border border-slate-800/80">
                <span className="text-xs text-emerald-400 uppercase tracking-widest font-semibold block mb-1">Status</span>
                <p className="text-sm text-slate-300">His story is only beginning to unfold.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => openHeroModal('forge')}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-emerald-600/30 border border-emerald-400/30 group"
              >
                EXPLORE FORGE <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 bg-[#12141c] [box-shadow:0_0_35px_rgba(59,130,246,0.15)] aspect-[16/10] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/60 via-transparent to-slate-900/40"></div>
              <div className="relative z-10 text-center p-8 space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-emerald-600 to-teal-800 flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-2 border-white/20">
                  <span className="text-3xl font-black text-white font-['Outfit']">F</span>
                </div>
                <h4 className="text-xl font-bold font-['Outfit'] text-white tracking-wider">FORGE</h4>
                <p className="text-xs text-emerald-300 tracking-widest uppercase">Industrial Force</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/60 backdrop-blur border border-slate-700 text-[10px] text-slate-400 font-mono">AD-CHR-05</div>
            </div>
          </div>
        </div>
      </section>

      {/* Roster Grid */}
      <section id="roster" className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-2 block">Complete Lineup</span>
            <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white">THE AD COMICS ROSTER</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div
              onClick={() => openHeroModal('polaris')}
              className="group bg-[#12141c] hover:bg-[#181b26] p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between text-center shadow-xl cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-950 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="font-['Outfit'] font-bold text-blue-400 text-lg">P</span>
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-white text-base mb-1">POLARIS</h3>
                <p className="text-xs text-slate-400 mb-4">Magnetic Power</p>
              </div>
              <span className="text-xs text-blue-400 font-semibold tracking-wider group-hover:translate-x-1 transition-transform inline-block">VIEW STORY →</span>
            </div>

            <div
              onClick={() => openHeroModal('vajra')}
              className="group bg-[#12141c] hover:bg-[#181b26] p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between text-center shadow-xl cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-950 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="font-['Outfit'] font-bold text-amber-400 text-lg">V</span>
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-white text-base mb-1">VAJRA</h3>
                <p className="text-xs text-slate-400 mb-4">Divine Strength</p>
              </div>
              <span className="text-xs text-amber-400 font-semibold tracking-wider group-hover:translate-x-1 transition-transform inline-block">VIEW STORY →</span>
            </div>

            <div
              onClick={() => openHeroModal('ghostmark')}
              className="group bg-[#12141c] hover:bg-[#181b26] p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between text-center shadow-xl cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-950 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="font-['Outfit'] font-bold text-purple-400 text-lg">G</span>
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-white text-base mb-1">GHOSTMARK</h3>
                <p className="text-xs text-slate-400 mb-4">The Infiltrator</p>
              </div>
              <span className="text-xs text-purple-400 font-semibold tracking-wider group-hover:translate-x-1 transition-transform inline-block">VIEW STORY →</span>
            </div>

            <div
              onClick={() => openHeroModal('cybersnare')}
              className="group bg-[#12141c] hover:bg-[#181b26] p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between text-center shadow-xl cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="font-['Outfit'] font-bold text-cyan-400 text-lg">C</span>
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-white text-base mb-1">CYBERSNARE</h3>
                <p className="text-xs text-slate-400 mb-4">The AI Machine</p>
              </div>
              <span className="text-xs text-cyan-400 font-semibold tracking-wider group-hover:translate-x-1 transition-transform inline-block">VIEW STORY →</span>
            </div>

            <div
              onClick={() => openHeroModal('forge')}
              className="group bg-[#12141c] hover:bg-[#181b26] p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between text-center shadow-xl cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="font-['Outfit'] font-bold text-emerald-400 text-lg">F</span>
              </div>
              <div>
                <h3 className="font-['Outfit'] font-bold text-white text-base mb-1">FORGE</h3>
                <p className="text-xs text-slate-400 mb-4">Unknown Force</p>
              </div>
              <span className="text-xs text-emerald-400 font-semibold tracking-wider group-hover:translate-x-1 transition-transform inline-block">VIEW STORY →</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
