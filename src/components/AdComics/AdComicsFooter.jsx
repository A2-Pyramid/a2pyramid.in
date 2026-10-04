import React from 'react';

export const AdComicsFooter = ({ setActiveTab }) => {
  return (
    <footer id="contact" className="bg-[#08090d] border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <i className="fa-solid fa-bolt text-black text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="cinematic-font text-2xl font-black tracking-wider text-white font-['Orbitron']">
                AD COMICS
              </span>
              <span className="text-[9px] tracking-[0.3em] text-cyan-400 font-semibold uppercase -mt-1">
                Original Superhero Universe
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium tracking-widest uppercase font-['Orbitron']">
            <button onClick={() => setActiveTab('home')} className="text-slate-400 hover:text-cyan-400 transition-colors">
              Home
            </button>
            <button onClick={() => setActiveTab('about')} className="text-slate-400 hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => setActiveTab('characters')} className="text-slate-400 hover:text-cyan-400 transition-colors">
              Characters
            </button>
            <button onClick={() => setActiveTab('investor')} className="text-slate-400 hover:text-cyan-400 transition-colors">
              Investor
            </button>
            <button onClick={() => setActiveTab('contact')} className="text-slate-400 hover:text-cyan-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400 text-lg">
            <a href="#" className="w-10 h-10 rounded-full bg-[#12141c] border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500 transition-all">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#12141c] border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500 transition-all">
              <i className="fa-brands fa-discord"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#12141c] border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500 transition-all">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#12141c] border border-slate-800 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-500 transition-all">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© AD COMICS — ORIGINAL SUPERHERO UNIVERSE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <button onClick={() => setActiveTab('investor')} className="hover:text-cyan-400 transition-colors">
              Investor Relations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
