import React from 'react';

const WHATSAPP_NUMBER = '919472994483';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi AD Comics! I wanted to get in touch regarding...');

const HEROES = [
  { name: 'POLARIS',    img: '/polaris.jpeg',   color: 'cyan',    label: 'Magnetic Power'  },
  { name: 'VAJRA',      img: '/vajra.jpeg',      color: 'amber',   label: 'Divine Strength' },
  { name: 'GHOSTMARK',  img: '/ghostmark.jpeg',  color: 'purple',  label: 'The Infiltrator' },
  { name: 'CYBERSNARE', img: '/cybersnare.jpeg', color: 'sky',     label: 'The AI Machine'  },
  { name: 'FORGE',      img: '/forge.jpeg',      color: 'emerald', label: 'Unknown Force'   },
];

const colorText   = { cyan: 'text-cyan-400', amber: 'text-amber-400', purple: 'text-purple-400', sky: 'text-sky-400', emerald: 'text-emerald-400' };
const colorBorder = { cyan: 'border-cyan-500/40', amber: 'border-amber-500/40', purple: 'border-purple-500/40', sky: 'border-sky-500/40', emerald: 'border-emerald-500/40' };
const colorGlow   = { cyan: 'rgba(6,182,212,0.25)', amber: 'rgba(245,158,11,0.25)', purple: 'rgba(168,85,247,0.25)', sky: 'rgba(56,189,248,0.25)', emerald: 'rgba(16,185,129,0.25)' };

export const AdComicsContact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/60 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-[#0a0b0e] pointer-events-none"></div>

        {/* Background character strip — decorative */}
        <div className="absolute inset-0 flex opacity-[0.07] pointer-events-none overflow-hidden">
          {HEROES.map(h => (
            <div key={h.name} className="flex-1 overflow-hidden">
              <img src={h.img} alt="" className="w-full h-full object-cover object-top" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/60 via-transparent to-[#0a0b0e]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-transparent to-[#08090d]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3 inline-block">Get in Touch</span>
          <h1 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight mb-4 text-white">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white [text-shadow:0_0_25px_rgba(59,130,246,0.6)]">AD COMICS</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light mb-4">
            LET'S BUILD THE UNIVERSE TOGETHER.
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-10">
            "Have a question, partnership idea, collaboration opportunity, media inquiry or simply want to connect with AD Comics? We'd love to hear from you."
          </p>

          {/* Hero avatar row */}
          <div className="flex items-center justify-center gap-3">
            {HEROES.map(h => (
              <div key={h.name} className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 ${colorBorder[h.color]}`} style={{ boxShadow: `0 0 14px ${colorGlow[h.color]}` }}>
                <img src={h.img} alt={h.name} className="w-full h-full object-cover object-top" />
              </div>
            ))}
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-['Orbitron'] ml-2 hidden sm:block">Phase 1 · 5 Heroes</span>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold block mb-2">Direct Channels</span>
            <h2 className="text-3xl font-black font-['Outfit'] text-white">CONNECT WITH US</h2>
          </div>

          {/* Email 1 */}
          <a
            href="mailto:hr@a2pyramid.in"
            className="flex items-center gap-5 p-6 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/50 transition-all group [box-shadow:0_0_35px_rgba(59,130,246,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-envelope text-lg"></i>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-blue-400 font-semibold tracking-widest uppercase block mb-0.5">Official Email</span>
              <span className="text-white font-semibold font-mono text-sm sm:text-base group-hover:text-blue-400 transition-colors">hr@a2pyramid.in</span>
            </div>
            <i className="fa-solid fa-arrow-right text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></i>
          </a>

          {/* Email 2 */}
          <a
            href="mailto:studypyramid@gmail.com"
            className="flex items-center gap-5 p-6 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/50 transition-all group [box-shadow:0_0_35px_rgba(59,130,246,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-google text-lg"></i>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-blue-400 font-semibold tracking-widest uppercase block mb-0.5">Gmail</span>
              <span className="text-white font-semibold font-mono text-sm sm:text-base group-hover:text-blue-400 transition-colors">studypyramid@gmail.com</span>
            </div>
            <i className="fa-solid fa-arrow-right text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></i>
          </a>

          {/* Phone */}
          <a
            href="tel:+919472994483"
            className="flex items-center gap-5 p-6 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/50 transition-all group [box-shadow:0_0_35px_rgba(59,130,246,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-phone text-lg"></i>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-blue-400 font-semibold tracking-widest uppercase block mb-0.5">Phone</span>
              <span className="text-white font-semibold font-mono text-sm sm:text-base group-hover:text-blue-400 transition-colors">+91 94729 94483</span>
            </div>
            <i className="fa-solid fa-arrow-right text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"></i>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl bg-[#0a1a0f] border border-emerald-500/40 hover:border-emerald-400/70 transition-all group [box-shadow:0_0_35px_rgba(16,185,129,0.15)]"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-emerald-400 font-semibold tracking-widest uppercase block mb-0.5">WhatsApp — Tap to Message</span>
              <span className="text-white font-semibold font-mono text-sm sm:text-base group-hover:text-emerald-400 transition-colors">+91 94729 94483</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <i className="fa-solid fa-arrow-right text-emerald-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"></i>
            </div>
          </a>
        </div>
      </section>

      {/* Character Showcase Strip */}
      <section className="py-16 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-slate-700"></div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-['Orbitron']">The Universe Behind Every Message</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-slate-700"></div>
          </div>

          <div className="grid grid-cols-5 gap-3 sm:gap-4">
            {HEROES.map(h => (
              <div key={h.name} className={`group relative rounded-2xl overflow-hidden border ${colorBorder[h.color]}`} style={{ boxShadow: `0 0 25px ${colorGlow[h.color]}` }}>
                <div className="aspect-[2/3] overflow-hidden">
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-center">
                  <div className={`text-[8px] sm:text-[10px] font-black font-['Orbitron'] tracking-wider ${colorText[h.color]}`}>{h.name}</div>
                  <div className="text-[7px] sm:text-[9px] text-slate-500 hidden sm:block">{h.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0b0e] to-[#0d111a] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-2 block">Professional Network</span>
            <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white mb-4">BUILD WITH AD COMICS</h2>
            <p className="text-slate-300 font-light text-sm sm:text-base">
              "AD Comics is creating an original superhero universe with stories designed to expand across multiple forms of entertainment and storytelling."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-3">
              <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">Opportunities</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">PARTNERSHIPS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Explore opportunities to collaborate with AD Comics on projects and brand alignment.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-3">
              <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">Creators</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">CREATIVE COLLABORATION</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Connect with creators, artists, storytellers and production partners.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#12141c] border border-slate-800 hover:border-blue-500/40 transition-all space-y-3">
              <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">Commerce</span>
              <h3 className="text-xl font-bold font-['Outfit'] text-white">BUSINESS OPPORTUNITIES</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Discuss distribution, investment, licensing and other potential opportunities.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hr@a2pyramid.in"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30"
            >
              <i className="fa-solid fa-envelope"></i> START A CONVERSATION
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-emerald-600/30 border border-emerald-400/30"
            >
              <i className="fa-brands fa-whatsapp text-base"></i> WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
