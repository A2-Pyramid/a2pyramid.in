import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Menu, X, ChevronDown, ArrowRight, Globe, BookOpen, MapPin,
  Briefcase, Mail, Phone, MapPin as LocationPin,
  ExternalLink, Sparkles, CheckCircle2
} from 'lucide-react';

// Custom Social Icon Components (Lucide removed brand icons)
const Facebook = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Color Palette Constants
const colors = {
  primary: '#116B6B',      // Teal
  primaryDark: '#0D5252',  // Dark Teal
  primaryLight: '#E6F2F2', // Light Teal Tint
  bgOffWhite: '#F8FAFC',   // Off-white / light grey
  cardBg: '#FFFFFF',       // Pure white for cards
  textMain: '#0F172A',     // Dark Navy / Charcoal
  textMuted: '#64748B',    // Muted grey
  borderLight: '#E2E8F0',  // Light border
  accentWeb: '#0284C7',    // Blue
  accentComic: '#E11D48',  // Coral / Red
  accentMap: '#0D9488',    // Teal
  accentProject: '#7C3AED' // Violet
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(17, 107, 107, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(17, 107, 107, 0); }
  100% { box-shadow: 0 0 0 0 rgba(17, 107, 107, 0); }
`;

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.bgOffWhite};
  color: ${colors.textMain};
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

// Navbar
const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.borderLight};
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.85rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
  }
`;

const LogoBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  text-decoration: none;

  img {
    height: 40px;
    width: 40px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${colors.textMain};
    letter-spacing: -0.5px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.textMain};
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover > .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.textMain};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 260px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.borderLight};
  padding: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 100;
  margin-top: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 24px;
    width: 12px;
    height: 12px;
    background: #FFFFFF;
    transform: rotate(45deg);
    border-top: 1px solid ${colors.borderLight};
    border-left: 1px solid ${colors.borderLight};
  }
`;

const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${colors.textMain};
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: ${colors.primaryLight};
    color: ${colors.primary};
    transform: translateX(3px);
  }

  svg {
    color: ${colors.primary};
    flex-shrink: 0;
  }
`;

const ContactNavBtn = styled.a`
  background-color: ${colors.primary};
  color: #FFFFFF;
  padding: 0.6rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(17, 107, 107, 0.2);

  &:hover {
    background-color: ${colors.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(17, 107, 107, 0.3);
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${colors.textMain};
  cursor: pointer;
  padding: 0.25rem;

  @media (max-width: 968px) {
    display: block;
  }
`;

const MobileDrawer = styled.div`
  display: none;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    border-bottom: 1px solid ${colors.borderLight};
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    padding: 1.5rem;
    gap: 1.25rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-120%)')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999;
  }
`;

const MobileNavLink = styled.a`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${colors.textMain};
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${colors.borderLight};

  &:hover {
    color: ${colors.primary};
  }
`;

const MobileSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  gap: 0.5rem;
  margin-top: 0.25rem;
  border-left: 2px solid ${colors.primaryLight};
`;

// Hero Section
const HeroSection = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4.5rem 2rem 2.5rem 2rem;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 3rem 1.25rem 1.5rem 1.25rem;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.primaryLight};
  color: ${colors.primaryDark};
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.3px;

  svg {
    color: ${colors.primary};
    width: 16px;
    height: 16px;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  font-weight: 800;
  color: ${colors.textMain};
  line-height: 1.15;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;

  span {
    color: ${colors.primary};
    position: relative;
    display: inline-block;
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: ${colors.textMuted};
  max-width: 740px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
`;

const SectionHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 700;
    color: ${colors.textMain};
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 0.95rem;
    color: ${colors.textMuted};
  }

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: ${colors.primary};
    margin: 1rem auto 0 auto;
    border-radius: 2px;
  }
`;

// Services Grid & Cards
const ServicesContainer = styled.section`
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
    margin-bottom: 3rem;
  }
`;

const Grid2x2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCardItem = styled.div`
  background: ${colors.cardBg};
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid ${colors.borderLight};
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${({ $accentColor }) => $accentColor || colors.primary};
    opacity: 0.8;
    transition: height 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 35px -10px rgba(15, 23, 42, 0.12);
    border-color: ${({ $accentColor }) => $accentColor || colors.primary};

    &::before {
      height: 8px;
      opacity: 1;
    }

    .card-icon-box {
      transform: scale(1.1) rotate(3deg);
      background: ${({ $accentColor }) => $accentColor || colors.primary};
      color: #FFFFFF;
    }

    .cta-link {
      color: ${({ $accentColor }) => $accentColor || colors.primary};
      transform: translateX(4px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: ${colors.primaryLight};
  color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  svg {
    width: 32px;
    height: 32px;
  }
`;

const CardContent = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${colors.textMain};
    margin-bottom: 0.75rem;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 0.95rem;
    color: ${colors.textMuted};
    line-height: 1.6;
  }
`;

const CardFooter = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  border-top: 1px dashed ${colors.borderLight};
`;

const CtaAction = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.textMain};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
  }
`;

const ExternalBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  background: #F1F5F9;
  color: ${colors.textMuted};
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

// Footer Component
const FooterWrapper = styled.footer`
  background-color: #0B132B;
  color: #94A3B8;
  padding: 5rem 2rem 2rem 2rem;
  margin-top: auto;
  border-top: 1px solid #1E293B;

  @media (max-width: 768px) {
    padding: 3rem 1.25rem 1.5rem 1.25rem;
  }
`;

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.25fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #1E293B;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterBrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .brand-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    img {
      height: 36px;
      width: 36px;
      object-fit: contain;
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;
      color: #FFFFFF;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #94A3B8;
    max-width: 320px;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    a {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #1E293B;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;

      &:hover {
        background: ${colors.primary};
        transform: translateY(-2px);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const FooterCol = styled.div`
  h4 {
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    letter-spacing: 0.3px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li a {
      color: #94A3B8;
      font-size: 0.9rem;
      transition: color 0.2s ease;
      text-decoration: none;

      &:hover {
        color: #FFFFFF;
      }
    }
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: #94A3B8;

    svg {
      color: ${colors.primary};
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      margin-top: 3px;
    }
  }
`;

const CopyrightBar = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #64748B;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

// Modal / Route simulation view for placeholders
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  padding: 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  text-align: left;

  .close-btn {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: #F1F5F9;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${colors.textMain};
    transition: background 0.2s ease;

    &:hover {
      background: ${colors.borderLight};
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${colors.textMain};
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${colors.textMuted};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .badge-route {
    display: inline-block;
    background: ${colors.primaryLight};
    color: ${colors.primaryDark};
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.95rem;
      color: ${colors.textMain};
      font-weight: 500;

      svg {
        color: ${colors.primary};
        width: 18px;
        height: 18px;
      }
    }
  }

  .modal-actions {
    display: flex;
    gap: 1rem;

    button {
      flex: 1;
      padding: 0.75rem 1.5rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .primary-btn {
      background: ${colors.primary};
      color: #FFFFFF;
      border: none;

      &:hover {
        background: ${colors.primaryDark};
      }
    }

    .secondary-btn {
      background: #F1F5F9;
      color: ${colors.textMain};
      border: 1px solid ${colors.borderLight};

      &:hover {
        background: ${colors.borderLight};
      }
    }
  }
`;

import { AdComics } from './components/AdComics/AdComics';
import { WebsiteCreationPage } from './components/WebsiteCreation/WebsiteCreationPage';
import { ProjectHandlingPage } from './components/ProjectHandling/ProjectHandlingPage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPath.startsWith('/ad_comics') || currentPath.startsWith('/services/ad-comics')) {
    let initialTab = 'home';
    if (currentPath.includes('/about')) initialTab = 'about';
    if (currentPath.includes('/characters')) initialTab = 'characters';
    if (currentPath.includes('/investor')) initialTab = 'investor';
    if (currentPath.includes('/contact')) initialTab = 'contact';

    return <AdComics onBackToMain={() => navigateTo('/')} initialTab={initialTab} />;
  }

  if (currentPath.startsWith('/services/website-creation') || currentPath.startsWith('/website-creation') || currentPath.startsWith('/website_creation')) {
    return <WebsiteCreationPage onBackToMain={() => navigateTo('/')} navigateTo={navigateTo} />;
  }

  if (currentPath.startsWith('/services/project-handling') || currentPath.startsWith('/project-handling') || currentPath.startsWith('/project_handling')) {
    return <ProjectHandlingPage onBackToMain={() => navigateTo('/')} navigateTo={navigateTo} />;
  }

  // Service data configuration
  const services = [
    {
      id: 'website-creation',
      title: 'Website Creation and Handling',
      description: 'Build your digital presence with modern, responsive websites, web applications, maintenance, and ongoing technical support.',
      icon: <Globe />,
      accent: colors.accentWeb,
      cta: 'Explore Web Services →',
      route: '/services/website-creation',
      features: [
        'Custom Responsive Web Design',
        'High-Performance Web Applications',
        'Secure Cloud Hosting & Setup',
        'Ongoing Technical Maintenance & Support'
      ]
    },
    {
      id: 'ad-comics',
      title: 'AD Comics',
      description: 'Bring ideas, brands, and stories to life through creative comics, engaging visual storytelling, and innovative advertising content.',
      icon: <BookOpen />,
      accent: colors.accentComic,
      cta: 'Explore AD Comics →',
      route: '/services/ad-comics',
      features: [
        'Custom Branded Comic Strips',
        'Engaging Visual Storytelling & Art',
        'Innovative Advertising Campaigns',
        'Dynamic Character & Concept Design'
      ]
    },
    {
      id: 'map-my-teacher',
      title: 'Map My Teacher',
      description: 'Discover teachers, mentors, courses, and educational opportunities through our teacher discovery and learning platform.',
      icon: <MapPin />,
      accent: colors.accentMap,
      cta: 'Explore Map My Teacher →',
      url: 'https://www.mapmyteacher.com/',
      isExternal: true,
      features: [
        'Verified Teacher & Mentor Profiles',
        'Interactive Course Discovery',
        'Seamless Student-Mentor Connect',
        'Comprehensive Educational Directory'
      ]
    },
    {
      id: 'project-handling',
      title: 'Project Handling and Team Setup',
      description: 'Turn your ideas into structured projects with project coordination, team setup, execution support, and business solutions.',
      icon: <Briefcase />,
      accent: colors.accentProject,
      cta: 'Explore Project Services →',
      route: '/services/project-handling',
      features: [
        'End-to-End Project Coordination',
        'Dedicated Technical & Operational Teams',
        'Agile Execution & Milestone Tracking',
        'Strategic Business & Tech Solutions'
      ]
    }
  ];

  const handleCardClick = (service) => {
    if (service.isExternal) {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    } else if (service.id === 'ad-comics' || service.route === '/services/ad-comics') {
      navigateTo('/ad_comics');
    } else if (service.id === 'website-creation' || service.route === '/services/website-creation') {
      navigateTo('/services/website-creation');
    } else if (service.id === 'project-handling' || service.route === '/services/project-handling') {
      navigateTo('/services/project-handling');
    } else {
      setActiveModal(service);
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageWrapper>
      {/* Navigation Bar */}
      <NavContainer>
        <NavContent>
          <LogoBrand href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.jpeg" alt="A2 Pyramid Logo" />
            <span>A2 Pyramid</span>
          </LogoBrand>

          <NavLinks>
            <NavLink href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</NavLink>
            <NavLink href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about-section'); }}>About</NavLink>

            <DropdownWrapper>
              <DropdownTrigger>
                Services <ChevronDown size={16} />
              </DropdownTrigger>
              <DropdownMenu className="dropdown-menu">
                {services.map((s) => (
                  <DropdownItem
                    key={s.id}
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCardClick(s);
                    }}
                  >
                    {s.icon}
                    <span>{s.title}</span>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </DropdownWrapper>

            <NavLink href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}>Contact</NavLink>
          </NavLinks>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ContactNavBtn href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}>
              Get in Touch
            </ContactNavBtn>

            <MobileMenuBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </MobileMenuBtn>
          </div>
        </NavContent>

        {/* Mobile Navigation Drawer */}
        <MobileDrawer $isOpen={mobileMenuOpen}>
          <MobileNavLink href="#home" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about-section'); }}>
            About
          </MobileNavLink>
          <div>
            <MobileNavLink as="div" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}>
              Services <ChevronDown size={16} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </MobileNavLink>
            {servicesDropdownOpen && (
              <MobileSubMenu>
                {services.map((s) => (
                  <MobileNavLink
                    key={s.id}
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      handleCardClick(s);
                    }}
                    style={{ fontSize: '0.9rem', borderBottom: 'none', padding: '0.3rem 0' }}
                  >
                    {s.title}
                  </MobileNavLink>
                ))}
              </MobileSubMenu>
            )}
          </div>
          <MobileNavLink href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}>
            Contact
          </MobileNavLink>
        </MobileDrawer>
      </NavContainer>

      {/* Hero Section */}
      <HeroSection id="home">
        <Badge>
          <Sparkles /> A2 Pyramid Edutech Pvt. Ltd.
        </Badge>
        <HeroTitle>
          Choose the Right Solution for Your <span>Next Big Idea.</span>
        </HeroTitle>
        <HeroSubtitle>
          From building your digital presence to growing educational platforms and managing projects, A2 Pyramid helps turn ideas into reality.
        </HeroSubtitle>
      </HeroSection>

      {/* Services Section */}
      <ServicesContainer id="services">
        <SectionHeaderContainer>
          <h2>Explore Our Services</h2>
          <p>Select a service to explore what we can do for you.</p>
        </SectionHeaderContainer>

        <Grid2x2>
          {services.map((service) => (
            <ServiceCardItem
              key={service.id}
              $accentColor={service.accent}
              onClick={() => handleCardClick(service)}
            >
              <CardTop>
                <div className="card-icon-box" style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: `${service.accent}15`,
                  color: service.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <CardContent>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </CardContent>
              </CardTop>

              <CardFooter>
                <CtaAction className="cta-link">
                  {service.cta}
                </CtaAction>
                {service.isExternal && (
                  <ExternalBadge>
                    External <ExternalLink size={12} />
                  </ExternalBadge>
                )}
              </CardFooter>
            </ServiceCardItem>
          ))}
        </Grid2x2>
      </ServicesContainer>

      {/* About Section */}
      <section id="about-section" style={{ background: '#FFFFFF', padding: '5rem 2rem', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Badge>About A2 Pyramid</Badge>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
            Innovating Education & Digital Solutions
          </h2>
          <p style={{ fontSize: '1.05rem', color: colors.textMuted, lineHeight: '1.8', marginBottom: '2.5rem' }}>
            A2 Pyramid Edutech Pvt. Ltd. is a forward-thinking organization dedicated to bridging the gap between innovative ideas and professional execution. Whether you are looking to build cutting-edge web infrastructure, engage audiences with creative visual storytelling through AD Comics, discover verified mentors on Map My Teacher, or execute large-scale projects seamlessly, we provide the right expertise and dedication.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: colors.primary, marginBottom: '0.25rem' }}>100+</div>
              <div style={{ fontSize: '0.9rem', color: colors.textMuted, fontWeight: 600 }}>Projects Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: colors.primary, marginBottom: '0.25rem' }}>4+</div>
              <div style={{ fontSize: '0.9rem', color: colors.textMuted, fontWeight: 600 }}>Core Pillars</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: colors.primary, marginBottom: '0.25rem' }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: colors.textMuted, fontWeight: 600 }}>Client Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWrapper id="contact-section">
        <FooterContainer>
          <FooterBrandCol>
            <div className="brand-header">
              <img src="/logo.jpeg" alt="A2 Pyramid Logo" />
              <span>A2 Pyramid</span>
            </div>
            <p>
              Empowering ideas through robust digital solutions, creative storytelling, teacher discovery, and professional project management.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
            </div>
          </FooterBrandCol>

          <FooterCol>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about-section'); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact-section'); }}>Contact Us</a></li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h4>Our Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); handleCardClick(s); }}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol>
            <h4>Contact Info</h4>
            <ContactInfoList>
              <div className="contact-item">
                <LocationPin />
                <span>A2 Pyramid Edutech Pvt. Ltd., India</span>
              </div>
              <div className="contact-item">
                <Mail />
                <span>contact@a2pyramid.com</span>
              </div>
              <div className="contact-item">
                <Phone />
                <span>+91 (Available on Request)</span>
              </div>
            </ContactInfoList>
          </FooterCol>
        </FooterContainer>

        <CopyrightBar>
          <span>© 2026 A2 Pyramid Edutech Pvt. Ltd. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: '#64748B', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: '#64748B', textDecoration: 'none' }}>Terms of Service</a>
          </span>
        </CopyrightBar>
      </FooterWrapper>

      {/* Interactive Placeholder Modal */}
      {activeModal && (
        <ModalOverlay onClick={() => setActiveModal(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveModal(null)}>
              <X size={20} />
            </button>
            <span className="badge-route">Route: {activeModal.route}</span>
            <h2>{activeModal.title}</h2>
            <p>{activeModal.description}</p>

            <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem', color: colors.textMain }}>
              What's included in this service:
            </div>
            <ul className="features-list">
              {activeModal.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button className="secondary-btn" onClick={() => setActiveModal(null)}>
                Close
              </button>
              <button className="primary-btn" onClick={() => {
                const isAdComics = activeModal.id === 'ad-comics';
                const isWebCreation = activeModal.id === 'website-creation';
                const isProjectHandling = activeModal.id === 'project-handling';
                setActiveModal(null);
                if (isAdComics) {
                  navigateTo('/ad_comics');
                } else if (isWebCreation) {
                  navigateTo('/services/website-creation');
                } else if (isProjectHandling) {
                  navigateTo('/services/project-handling');
                } else {
                  alert(`Redirecting to ${activeModal.title} consultation / booking form.`);
                }
              }}>
                {activeModal.id === 'ad-comics' 
                  ? 'Explore AD Comics Universe →' 
                  : activeModal.id === 'website-creation' 
                  ? 'Explore Web Services →' 
                  : activeModal.id === 'project-handling'
                  ? 'Explore Project Services →'
                  : 'Book Consultation'}
              </button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
}
