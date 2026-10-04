import React from 'react';

export const HeroModal = ({ isOpen, heroData, onClose }) => {
  if (!isOpen || !heroData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-opacity duration-300">
      <div className="relative bg-[#12141c] border border-cyan-500/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/20 transform transition-transform duration-300">
        <div className="sticky top-0 z-20 bg-[#12141c]/90 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] uppercase font-semibold">
              {heroData.badge || 'Hero Dossier'}
            </span>
            <span className="cinematic-font text-xs text-slate-400 uppercase tracking-widest font-['Orbitron']">
              AD Comics Database
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {heroData.img && (
            <div className="md:col-span-5 aspect-[3/4] rounded-xl overflow-hidden border border-cyan-500/30">
              <img src={heroData.img} alt={heroData.name} className="w-full h-full object-cover" />
            </div>
          )}
          <div className={`${heroData.img ? 'md:col-span-7' : 'md:col-span-12'} flex flex-col gap-4`}>
            {heroData.power && (
              <div className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">
                {heroData.power}
              </div>
            )}
            <h3 className="cinematic-font text-3xl font-black text-white font-['Orbitron']">
              {heroData.name}
            </h3>
            {heroData.subtitle && (
              <p className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">
                {heroData.subtitle}
              </p>
            )}
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {heroData.bio || heroData.desc}
            </p>
            {heroData.origin && (
              <div className="p-3 rounded-lg bg-[#08090d]/80 border border-slate-800 text-xs text-slate-400">
                <strong className="text-white block mb-1">Origin Summary:</strong>
                <span>{heroData.origin}</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#12141c]/90 px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

export const UniverseHubModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="relative bg-[#12141c] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl shadow-cyan-500/20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="cinematic-font text-2xl font-bold text-white font-['Orbitron']">
            AD COMICS UNIVERSE HUB
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Explore master lore maps, connected storylines, and phase roadmaps for investors, creators, and fans.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#08090d] border border-slate-800 text-center">
            <i className="fa-solid fa-layer-group text-cyan-400 text-2xl mb-2"></i>
            <h4 className="text-xs font-bold text-white uppercase mb-1">Phase 1 Blueprint</h4>
            <p className="text-[10px] text-slate-400">5 Core Heroes, Initial Story Arcs & Lore Sync</p>
          </div>
          <div className="p-4 rounded-xl bg-[#08090d] border border-slate-800 text-center">
            <i className="fa-solid fa-diagram-project text-blue-400 text-2xl mb-2"></i>
            <h4 className="text-xs font-bold text-white uppercase mb-1">Crossover Web</h4>
            <p className="text-[10px] text-slate-400">Interconnected origins & dimensional ties</p>
          </div>
          <div className="p-4 rounded-xl bg-[#08090d] border border-slate-800 text-center">
            <i className="fa-solid fa-rocket text-purple-400 text-2xl mb-2"></i>
            <h4 className="text-xs font-bold text-white uppercase mb-1">Future Phases</h4>
            <p className="text-[10px] text-slate-400">Expanded IP & Multi-platform distribution</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider"
          >
            Close Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export const ToastNotification = ({ toast, onClose }) => {
  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#12141c] border border-cyan-500/50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 animate-bounce">
      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
        <i className="fa-solid fa-info"></i>
      </div>
      <div>
        <h4 className="cinematic-font text-sm font-bold text-white font-['Orbitron']">{toast.title}</h4>
        <p className="text-xs text-slate-400">{toast.desc}</p>
      </div>
      <button onClick={onClose} className="text-slate-500 hover:text-white ml-2">
        <i className="fa-solid fa-xmark text-xs"></i>
      </button>
    </div>
  );
};
