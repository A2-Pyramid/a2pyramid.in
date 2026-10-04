import React, { useState, useEffect } from 'react';
import { AdComicsNav } from './AdComicsNav';
import { AdComicsHome } from './AdComicsHome';
import { AdComicsAbout } from './AdComicsAbout';
import { AdComicsCharacters } from './AdComicsCharacters';
import { AdComicsContact } from './AdComicsContact';
import { AdComicsInvestor } from './AdComicsInvestor';
import { AdComicsFooter } from './AdComicsFooter';
import { HeroModal, UniverseHubModal, ToastNotification } from './AdComicsModals';

const HEROES_DATA = {
  polaris: {
    name: "POLARIS",
    subtitle: "Magnetic Power & Team Leader",
    power: "Magnetic Power",
    badge: "Visual Center",
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
    bio: "Polaris is the magnetic anchor of the AD Comics universe. Possessing master-level control over electromagnetic fields, he commands battlefield dynamics with precision.",
    origin: "Exposed to a high-density stellar magnetic storm during an orbital experiment, fusing his cellular structure with quantum magnetic flux."
  },
  vajra: {
    name: "VAJRA",
    subtitle: "Divine Strength & Ancient Warrior",
    power: "Divine Strength",
    badge: "Divine Force",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    bio: "A towering warrior radiating divine energy. Vajra channels ancient mythic force through modern-engineered celestial armor.",
    origin: "Awakened from an ancient sanctuary buried deep beneath Neo-Babylon carrying the legacy of forgotten pantheons."
  },
  ghostmark: {
    name: "GHOSTMARK",
    subtitle: "The Infiltrator & Master Spy",
    power: "The Infiltrator",
    badge: "Stealth Ops",
    img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    bio: "Operating strictly from the shadows, Ghostmark is an elusive operative equipped with state-of-the-art optical camouflage.",
    origin: "A former black-ops specialist who volunteered for covert Shadow Syndicate trials, receiving advanced neural enhancements."
  },
  cybersnare: {
    name: "CYBERSNARE",
    subtitle: "Advanced AI & Reconstructing Machine",
    power: "The AI Machine",
    badge: "AI Recon",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    bio: "Cybersnare is an artificial intelligence marvel capable of instantaneous matter reconstruction and cybernetic interfacing.",
    origin: "Constructed at the Quantum Vault research labs as an autonomous defense network before achieving sentient awakening."
  },
  forge: {
    name: "FORGE",
    subtitle: "Master Builder & Original Force",
    power: "The Unknown Force",
    badge: "Master Builder",
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop",
    bio: "Forge combines brutal strength with peerless tactical engineering and self-repairing quantum alloy armor.",
    origin: "Forged in stellar foundries of deep space, designing his legendary suit to combat encroaching dimensional tyrants."
  }
};

export const AdComics = ({ onBackToMain, initialTab = 'home' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeHero, setActiveHero] = useState(null);
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [isUniverseModalOpen, setIsUniverseModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, title: '', desc: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const openHeroModal = (heroKeyOrData) => {
    if (typeof heroKeyOrData === 'string' && HEROES_DATA[heroKeyOrData.toLowerCase()]) {
      setActiveHero(HEROES_DATA[heroKeyOrData.toLowerCase()]);
    } else if (typeof heroKeyOrData === 'object') {
      setActiveHero(heroKeyOrData);
    } else {
      setActiveHero({
        name: heroKeyOrData,
        desc: "Core hero of the AD Comics original superhero universe."
      });
    }
    setIsHeroModalOpen(true);
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
  };

  const showToast = (title, desc) => {
    setToast({ visible: true, title, desc });
    setTimeout(() => {
      setToast({ visible: false, title: '', desc: '' });
    }, 4000);
  };

  const showUniverseLore = () => {
    showToast(
      'AD Comics Universe Map',
      'Phase 1 lore web is fully synchronized. Investor briefing documents available upon request.'
    );
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-[#f1f5f9] font-['Inter'] selection:bg-cyan-500 selection:text-black">
      {/* Top Header */}
      <AdComicsNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBackToMain={onBackToMain}
        openUniverseModal={() => setIsUniverseModalOpen(true)}
      />

      {/* Tab Content */}
      <main className="min-h-[80vh]">
        {activeTab === 'home' && (
          <AdComicsHome
            openHeroModal={openHeroModal}
            showToast={showToast}
            showUniverseLore={showUniverseLore}
          />
        )}

        {activeTab === 'about' && (
          <AdComicsAbout
            openHeroModal={openHeroModal}
            openUniverseModal={() => setIsUniverseModalOpen(true)}
          />
        )}

        {activeTab === 'characters' && (
          <AdComicsCharacters
            openHeroModal={openHeroModal}
          />
        )}

        {activeTab === 'investor' && (
          <AdComicsInvestor
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'contact' && (
          <AdComicsContact
            showToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <AdComicsFooter setActiveTab={setActiveTab} />

      {/* Modals & Toasts */}
      <HeroModal
        isOpen={isHeroModalOpen}
        heroData={activeHero}
        onClose={closeHeroModal}
      />

      <UniverseHubModal
        isOpen={isUniverseModalOpen}
        onClose={() => setIsUniverseModalOpen(false)}
      />

      <ToastNotification
        toast={toast}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
};
