import React, { useState } from 'react';

export const AdComicsNav = ({ activeTab, setActiveTab, onBackToMain, openUniverseModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'characters', label: 'CHARACTERS' },
    { id: 'investor', label: 'INVESTOR' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#08090d]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Back to A2 Pyramid & Brand */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToMain}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-cyan-500 hover:text-black text-slate-300 text-xs font-semibold uppercase tracking-wider transition-all border border-slate-700"
            title="Return to A2 Pyramid Main Website"
          >
            <i className="fa-solid fa-arrow-left text-xs"></i>
            <span className="hidden sm:inline">A2 Pyramid</span>
          </button>

          <div
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-bolt text-black text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="cinematic-font text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-['Orbitron']">
                AD COMICS
              </span>
              <span className="text-[9px] tracking-[0.3em] text-cyan-400 font-semibold uppercase -mt-1">
                Original Universe
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Tabs */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase font-['Orbitron']">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`relative py-1 transition-colors ${
                activeTab === item.id
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-300 hover:text-cyan-300'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_#38bdf8]"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleTabClick('characters')}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Universe</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 text-xl p-2"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#12141c] border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`text-left font-medium tracking-wider uppercase text-sm font-['Orbitron'] ${
                activeTab === item.id ? 'text-cyan-400 font-bold' : 'text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onBackToMain}
            className="mt-2 py-2 px-4 rounded bg-slate-800 text-cyan-400 text-xs uppercase tracking-wider font-semibold text-center border border-slate-700"
          >
            ← Return to A2 Pyramid Main Site
          </button>
        </div>
      )}
    </header>
  );
};
