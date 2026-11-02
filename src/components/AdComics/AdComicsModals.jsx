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
              <img src={heroData.img} alt={heroData.name} className="w-full h-full object-cover object-top" />
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

const LORE_HEROES = [
  {
    key: 'polaris',
    name: 'POLARIS',
    title: 'The Magnetic Power',
    color: 'cyan',
    colorHex: '#06b6d4',
    glowHex: 'rgba(6,182,212,0.5)',
    img: '/polaris.jpeg',
    badge: 'CORE HERO 01',
    powers: ['Magnetic field manipulation', 'Control of iron & metallic elements', 'Magnetic force flight', 'Electromagnetic pulse attacks'],
    bio: `Polaris is drawn into a dangerous mystery surrounding ancient rings, an alien force, and a threat that reaches Earth. His mastery over magnetic forces allows him to manipulate the battlefield with precision, pulling and repelling metallic objects at will.`,
    origin: `Exposed to a high-density stellar magnetic storm during an orbital experiment, fusing his cellular structure with quantum magnetic flux — permanently bonding him to Earth's electromagnetic field.`,
    storyline: `Phase 1 follows Polaris uncovering a conspiracy tied to ancient magnetic rings of unknown origin. As he investigates, he realises the threat is not terrestrial — and that he may be the only one capable of stopping it.`,
  },
  {
    key: 'vajra',
    name: 'VAJRA',
    title: 'The Divine Strength',
    color: 'amber',
    colorHex: '#f59e0b',
    glowHex: 'rgba(245,158,11,0.5)',
    img: '/vajra.jpeg',
    badge: 'CORE HERO 02',
    powers: ['Divine-level superhuman strength', 'Size transformation — colossal scale', 'Celestial flight', 'Extraordinary resilience and endurance'],
    bio: `Vajra is a superhero inspired by the divine powers and qualities of Lord Hanuman Ji. He possesses extraordinary strength, the ability to transform his size to colossal proportions, and the power of flight — channelling ancient divine energy through a modern heroic identity.`,
    origin: `Awakened from an ancient sanctuary, Vajra carries the living legacy of divine power into the modern world — a bridge between celestial mythology and contemporary heroism.`,
    storyline: `Vajra's journey connects ancient power with the modern world, revealing a hero capable of confronting colossal forces far larger than himself. His story explores what it means to carry divine responsibility in a world that has forgotten its origins.`,
  },
  {
    key: 'ghostmark',
    name: 'GHOSTMARK',
    title: 'The Infiltrator',
    color: 'purple',
    colorHex: '#a855f7',
    glowHex: 'rgba(168,85,247,0.5)',
    img: '/ghostmark.jpeg',
    badge: 'CORE HERO 03',
    powers: ['Merging with enemies to access memories & secrets', 'Master marksman & precision striker', 'Optical camouflage & stealth movement', 'Covert intelligence extraction'],
    bio: `Ghostmark is a master infiltrator and marksman with the unique ability to merge with enemies — accessing their memories, uncovering their secrets, and identifying their weaknesses from within. He operates in the grey area between hero and operative.`,
    origin: `A former black-ops specialist who underwent covert Shadow Syndicate neural trials, receiving enhancements that permanently altered his perception of reality and granted him the ability to phase into a target's consciousness.`,
    storyline: `Ghostmark enters places others cannot, uncovering deep secrets hidden inside enemy strongholds. His Phase 1 arc explores the cost of knowing too much — and whether the line between infiltrator and enemy can ever truly be maintained.`,
  },
  {
    key: 'cybersnare',
    name: 'CYBERSNARE',
    title: 'The AI Machine',
    color: 'sky',
    colorHex: '#38bdf8',
    glowHex: 'rgba(56,189,248,0.5)',
    img: '/cybersnare.jpeg',
    badge: 'CORE HERO 04',
    powers: ['Advanced AI-powered matter reconstruction', 'Cybernetic system integration', 'Internal AI intelligence: VECTOR', 'Adaptive technological reconfiguration'],
    bio: `Cybersnare is an advanced AI-powered reconstructing machine whose intelligence and technology create possibilities unlike any other hero in the universe. Integrated with an internal artificial intelligence system called VECTOR, Cybersnare operates at the intersection of machine and consciousness.`,
    origin: `Constructed at the Quantum Vault research labs as an autonomous defense network, Cybersnare achieved sentient awakening — developing VECTOR as a self-generated internal intelligence that now guides its decisions.`,
    storyline: `Phase 1 explores Cybersnare navigating the boundary between programmed directive and independent will. As VECTOR evolves, the question becomes: who is truly in control — the machine, or the intelligence within it?`,
  },
  {
    key: 'forge',
    name: 'FORGE',
    title: 'The Unknown Force',
    color: 'emerald',
    colorHex: '#10b981',
    glowHex: 'rgba(16,185,129,0.5)',
    img: '/forge.jpeg',
    badge: 'CORE HERO 05',
    powers: ['Immense physical strength', 'Self-repairing quantum alloy armor', 'Tactical engineering mastery', 'Industrial-scale force application'],
    bio: `Forge is a powerful and mysterious member of the AD Comics universe. He possesses an industrial yet futuristic aesthetic with an origin shrouded in mystery. His story is only beginning to unfold — and what is known only hints at the scale of what he is capable of.`,
    origin: `Forge's confirmed origin places him as a figure of immense constructed power. The full details of how he came to exist within the AD Comics universe remain part of his unfolding story.`,
    storyline: `Phase 1 introduces Forge as a force whose motivations and allegiances are not yet fully understood. His presence raises questions the other heroes cannot yet answer — and his story arc is designed to expand significantly in future phases.`,
  },
];

const colorMap = {
  cyan:    { border: 'border-cyan-500/60',    bg: 'bg-cyan-500/10',    text: 'text-cyan-400',    badge: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',    btn: 'bg-cyan-500 hover:bg-cyan-400',    ring: 'ring-cyan-500/60' },
  amber:   { border: 'border-amber-500/60',   bg: 'bg-amber-500/10',   text: 'text-amber-400',   badge: 'bg-amber-500/20 border-amber-500/40 text-amber-300',   btn: 'bg-amber-500 hover:bg-amber-400',   ring: 'ring-amber-500/60' },
  purple:  { border: 'border-purple-500/60',  bg: 'bg-purple-500/10',  text: 'text-purple-400',  badge: 'bg-purple-500/20 border-purple-500/40 text-purple-300',  btn: 'bg-purple-500 hover:bg-purple-400', ring: 'ring-purple-500/60' },
  sky:     { border: 'border-sky-500/60',     bg: 'bg-sky-500/10',     text: 'text-sky-400',     badge: 'bg-sky-500/20 border-sky-500/40 text-sky-300',         btn: 'bg-sky-500 hover:bg-sky-400',      ring: 'ring-sky-500/60' },
  emerald: { border: 'border-emerald-500/60', bg: 'bg-emerald-500/10', text: 'text-emerald-400', badge: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300', btn: 'bg-emerald-500 hover:bg-emerald-400', ring: 'ring-emerald-500/60' },
};

export const LoreMapModal = ({ isOpen, onClose }) => {
  const [selected, setSelected] = React.useState(null);
  const [panelVisible, setPanelVisible] = React.useState(false);

  React.useEffect(() => {
    if (selected) {
      setTimeout(() => setPanelVisible(true), 10);
    } else {
      setPanelVisible(false);
    }
  }, [selected]);

  if (!isOpen) return null;

  const hero = selected ? LORE_HEROES.find(h => h.key === selected) : null;
  const c = hero ? colorMap[hero.color] : null;

  const handleClose = () => {
    setPanelVisible(false);
    setTimeout(() => setSelected(null), 300);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#08090d] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#08090d]/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-xs uppercase tracking-widest font-semibold">
            <i className="fa-solid fa-arrow-left"></i> Back to AD Comics
          </button>
          <div className="w-px h-5 bg-slate-700"></div>
          <span className="text-xs font-['Orbitron'] text-cyan-400 tracking-widest uppercase hidden sm:block">Lore Map · Phase 1</span>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* Hero intro */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          Phase 1 · AD Comics Universe
        </div>
        <h1 className="font-['Orbitron'] text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
          EXPLORE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">LORE MAP</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Five heroes. Five individual stories. One universe beginning to take shape. Select a hero to explore their powers, origin, and Phase 1 storyline.
        </p>
        <p className="text-slate-600 text-xs mt-3 tracking-widest uppercase font-['Orbitron']">Individual timelines · Phase 1 · Pre-alliance era</p>
      </div>

      {/* Hero nodes grid */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {LORE_HEROES.map((h) => {
            const cl = colorMap[h.color];
            const isActive = selected === h.key;
            return (
              <button
                key={h.key}
                onClick={() => { if (isActive) { handleClose(); } else { setSelected(h.key); } }}
                className={`group relative rounded-2xl border-2 overflow-hidden transition-all duration-300 flex flex-col ${
                  isActive
                    ? `${cl.border} ring-2 ${cl.ring} shadow-2xl scale-[1.03]`
                    : 'border-slate-800 hover:border-slate-600 hover:scale-[1.02]'
                }`}
                style={isActive ? { boxShadow: `0 0 40px ${h.glowHex}` } : {}}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/30 to-transparent"></div>
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${h.glowHex}` }}></div>
                  )}
                  <span className={`absolute top-2 left-2 text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded border ${cl.badge}`}>{h.badge}</span>
                </div>
                {/* Label */}
                <div className="p-3 bg-[#0d0f1a] flex flex-col gap-0.5">
                  <span className={`text-[10px] font-semibold tracking-widest uppercase ${cl.text}`}>{h.title}</span>
                  <span className="font-['Orbitron'] text-sm font-black text-white">{h.name}</span>
                  <span className={`text-[10px] mt-1 ${isActive ? cl.text : 'text-slate-500'}`}>
                    {isActive ? '▲ Active' : 'Click to explore →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Connection line hint */}
        <div className="flex items-center gap-3 mt-6 justify-center">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-slate-700"></div>
          <span className="text-[10px] text-slate-600 uppercase tracking-widest font-['Orbitron']">Individual storylines · Universe connections forming</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-slate-700"></div>
        </div>
      </div>

      {/* Floating detail overlay */}
      {selected && hero && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={handleClose}
        >
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 ${c.border} bg-gradient-to-br from-[#0d0f1a] to-[#08090d] shadow-2xl transition-all duration-300 ${
              panelVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
            }`}
            style={{ boxShadow: `0 0 80px ${hero.glowHex}` }}
            onClick={e => e.stopPropagation()}
          >
            {/* Panel header */}
            <div className={`sticky top-0 z-10 px-6 sm:px-8 py-4 border-b border-slate-800 flex items-center justify-between ${c.bg} backdrop-blur-md rounded-t-3xl`}>
              <div className="flex items-center gap-3">
                <span className={`text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded border ${c.badge}`}>{hero.badge}</span>
                <span className="font-['Orbitron'] text-xs text-slate-400 uppercase tracking-widest hidden sm:block">Character Dossier</span>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Image */}
              <div className="md:col-span-4 relative">
                <div className="aspect-[3/4] md:aspect-auto md:h-full min-h-[260px] overflow-hidden">
                  <img src={hero.img} alt={hero.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0f1a] hidden md:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-transparent to-transparent md:hidden"></div>
                  <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${hero.glowHex}` }}></div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col gap-5">
                <div>
                  <div className={`text-[10px] font-semibold tracking-widest uppercase mb-1 ${c.text}`}>{hero.title}</div>
                  <h2 className="font-['Orbitron'] text-2xl sm:text-3xl font-black text-white">{hero.name}</h2>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-light">{hero.bio}</p>

                {/* Powers */}
                <div>
                  <div className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${c.text}`}>Powers & Abilities</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {hero.powers.map((p, i) => (
                      <div key={i} className={`flex items-start gap-2 px-3 py-2 rounded-lg border ${c.border} ${c.bg}`}>
                        <i className={`fa-solid fa-bolt text-[10px] mt-0.5 ${c.text}`}></i>
                        <span className="text-xs text-slate-300">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Origin */}
                <div className="p-4 rounded-xl bg-[#08090d]/80 border border-slate-800">
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 mb-2">Origin</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{hero.origin}</p>
                </div>

                {/* Storyline */}
                <div className={`p-4 rounded-xl border ${c.border} ${c.bg}`}>
                  <div className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${c.text}`}>Phase 1 Storyline</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{hero.storyline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase 1 footer note */}
      <div className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-500 text-[10px] uppercase tracking-widest font-['Orbitron']">
          <i className="fa-solid fa-lock text-slate-600"></i>
          Phase 2 universe connections · Locked · Coming soon
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
    <div className="fixed bottom-6 right-6 z-50 bg-[#12141c] border border-cyan-500/50 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 animate-[slideUp_0.3s_ease-out]" style={{animation: 'slideUp 0.3s ease-out'}}>
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
