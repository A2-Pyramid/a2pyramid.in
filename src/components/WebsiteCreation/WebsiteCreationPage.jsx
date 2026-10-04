import React, { useState } from 'react';
import { 
  Globe, ArrowLeft, CheckCircle2, Cpu, ShieldCheck, Zap, 
  Server, Code, Smartphone as Mobile, Layers, Terminal, Sparkles, MessageSquare, 
  ArrowRight, Phone, Mail, MapPin, X
} from 'lucide-react';

export const WebsiteCreationPage = ({ onBackToMain, navigateTo }) => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Website Creation',
    budget: '$1,000 - $5,000',
    details: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsConsultModalOpen(false);
    setToast({
      visible: true,
      message: `Thank you, ${formState.name || 'Client'}! Your web project request has been submitted. Our engineering team will reach out to ${formState.email} within 24 hours.`
    });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 5000);
    setFormState({
      name: '',
      email: '',
      phone: '',
      projectType: 'Website Creation',
      budget: '$1,000 - $5,000',
      details: ''
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-black">
      {/* Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo & Back Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToMain}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-teal-500 hover:text-slate-950 text-slate-300 text-xs font-semibold uppercase tracking-wider transition-all border border-slate-800 shadow-md"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to A2 Pyramid</span>
            </button>

            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 group"
            >
              <img src="/logo.jpeg" alt="A2 Pyramid Logo" className="w-9 h-9 rounded-xl border border-teal-500/30 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  A2 Pyramid
                </span>
                <span className="text-[10px] tracking-widest text-teal-400 font-semibold uppercase -mt-1">
                  Digital Engineering
                </span>
              </div>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
            <button onClick={() => scrollToSection('overview')} className="text-slate-300 hover:text-teal-400 transition-colors">Overview</button>
            <button onClick={() => scrollToSection('services-grid')} className="text-slate-300 hover:text-teal-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('tech-architecture')} className="text-slate-300 hover:text-teal-400 transition-colors">Architecture</button>
            <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-teal-400 transition-colors">Process</button>
          </nav>

          {/* CTA Action */}
          <button
            onClick={() => setIsConsultModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Your Web Project</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* User Provided Hero & Showcase Section */}
        <section id="overview" className="relative bg-slate-950 text-slate-100 py-24 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans border-b border-slate-800/60">
          {/* Background Glow Effects (Deep Teal & Cyan Accents) */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header & Brand Tag */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <Sparkles size={14} />
                <span>A2 Pyramid Edutech Pvt. Ltd.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                YOUR VISION. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">OUR TECHNOLOGY.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                From Websites to AI-Powered Digital Ecosystems — We Build It All.
              </p>
            </div>

            {/* Central Showcase Display (Mockup Mock / Split Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
              {/* Left Info Cards / Tech Ecosystem Focus */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 font-bold text-lg">01</div>
                  <h3 className="text-xl font-bold text-white mb-2">End-to-End Digital Solutions</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">We design, develop, automate, launch, and manage entire product ecosystems under one unified roof.</p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 font-bold text-lg">02</div>
                  <h3 className="text-xl font-bold text-white mb-2">AI & Modern Architecture</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Harness intelligent AI assistants, scalable cloud backends, microservices, and robust cross-platform mobile applications.</p>
                </div>
              </div>

              {/* Right Central Workspace Graphic Simulation / Glassmorphism Panel */}
              <div className="lg:col-span-7" id="tech-architecture">
                <div className="relative rounded-3xl p-1 bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-slate-800 shadow-2xl">
                  <div className="bg-slate-900 rounded-[22px] p-6 sm:p-8 relative overflow-hidden">
                    {/* Simulated Window Header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      </div>
                      <div className="text-xs font-mono text-teal-400 tracking-wider flex items-center gap-1.5">
                        <Terminal size={14} />
                        A2_PYRAMID_CORE_ENGINE.SYS
                      </div>
                    </div>

                    {/* Simulated Interface Elements */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Active Pipeline</div>
                          <div className="text-sm font-semibold text-slate-200">AI Ecosystem & Cloud Integration</div>
                        </div>
                        <span className="px-3 py-1 text-xs bg-teal-500/20 text-teal-300 rounded-full font-medium border border-teal-500/30 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                          Online
                        </span>
                      </div>

                      {/* Interactive Architecture Selector Tabs */}
                      <div className="flex gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
                        <button
                          onClick={() => setActiveTab('frontend')}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'frontend' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'text-slate-400 hover:text-white'}`}
                        >
                          Frontend Engine
                        </button>
                        <button
                          onClick={() => setActiveTab('backend')}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'backend' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
                        >
                          Cloud Backend
                        </button>
                        <button
                          onClick={() => setActiveTab('ai')}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'ai' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'}`}
                        >
                          AI Automation
                        </button>
                      </div>

                      {activeTab === 'frontend' && (
                        <div className="p-4 rounded-xl bg-slate-950/90 border border-teal-500/30 space-y-2">
                          <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">React 18 / Next.js / Vite / Tailwind UI</div>
                          <p className="text-xs text-slate-300 leading-relaxed">Lightning-fast SPA & SSR web interfaces optimized for 100/100 Google Lighthouse scores, smooth micro-interactions, and mobile responsiveness.</p>
                        </div>
                      )}

                      {activeTab === 'backend' && (
                        <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/30 space-y-2">
                          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Node.js / Express / Cloud Database Architecture</div>
                          <p className="text-xs text-slate-300 leading-relaxed">High-throughput REST & GraphQL APIs, secure JWT/OAuth authentication, serverless cloud functions, and real-time database syncing.</p>
                        </div>
                      )}

                      {activeTab === 'ai' && (
                        <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-2">
                          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">LLM Connectors / Custom AI Workflows / Automation</div>
                          <p className="text-xs text-slate-300 leading-relaxed">Embedded AI chatbots, automated content generation pipelines, intelligent data extraction, and automated user onboarding flows.</p>
                        </div>
                      )}

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 text-center">
                          <div className="text-xs text-teal-400 font-bold mb-1">Frontend</div>
                          <div className="text-xs text-slate-300">Responsive UI</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 text-center">
                          <div className="text-xs text-cyan-400 font-bold mb-1">Backend</div>
                          <div className="text-xs text-slate-300">Secure APIs</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 text-center col-span-2 sm:col-span-1">
                          <div className="text-xs text-emerald-400 font-bold mb-1">Automation</div>
                          <div className="text-xs text-slate-300">Smart Workflows</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack / Services Bar */}
            <div className="py-6 px-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md mb-16 text-center">
              <p className="text-xs sm:text-sm font-medium tracking-widest text-slate-400 uppercase">
                Design <span className="text-teal-500 mx-2">•</span> Development <span className="text-teal-500 mx-2">•</span> AI <span className="text-teal-500 mx-2">•</span> Automation <span className="text-teal-500 mx-2">•</span> Mobile Apps <span className="text-teal-500 mx-2">•</span> Cloud <span className="text-teal-500 mx-2">•</span> Maintenance
              </p>
            </div>

            {/* Call to Action Banner Footer */}
            <div className="text-center bg-gradient-to-r from-teal-950/60 via-slate-900 to-cyan-950/60 p-8 sm:p-12 rounded-3xl border border-teal-500/20 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mb-3">
                ONE PARTNER. EVERY DIGITAL SOLUTION.
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
                Ready to take your digital products to the next level? Connect with A2 Pyramid today to build, scale, and secure your technology platform.
              </p>
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </section>

        {/* Extended Web Services Grid Section */}
        <section id="services-grid" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-900/40 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest block mb-2">Comprehensive Web Capabilities</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">WHAT WE BUILD & MANAGE FOR YOU</h2>
              <p className="text-slate-400 text-sm mt-3">From single-page high-converting websites to complex cloud-hosted SaaS applications, our engineering team handles every detail.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Custom Website Design</h3>
                <p className="text-slate-400 text-sm leading-relaxed">High-converting, brand-tailored websites built with modern responsive CSS, smooth micro-animations, and intuitive user experiences.</p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> Corporate & Business Portals</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> High-Converting Landing Pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> Interactive UI/UX Design</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Web Application Development</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Full-stack web applications engineered for speed, scalability, and security using React, Node.js, and modern cloud databases.</p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> SaaS & Custom Admin Dashboards</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> E-Commerce Platforms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> API Integration & Microservices</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">AI Assistant & Automation</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Embed intelligent conversational AI, automated customer support assistants, and custom backend automation into your website.</p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Smart AI Chatbots & Knowledge Bases</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Automated Lead Capture & CRM</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Workflow Automation Connectors</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Cloud Hosting & DevOps</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Zero-downtime deployment pipelines, automated SSL, global Content Delivery Networks (CDNs), and cloud infrastructure setup.</p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> AWS & Google Cloud Infrastructure</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> Continuous Deployment (CI/CD)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> Domain & SSL Security Configuration</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">24/7 Maintenance & Support</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Continuous uptime tracking, security patch updates, content updates, performance optimization, and regular data backups.</p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Proactive Security Monitoring</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Weekly Content & Feature Updates</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Page Speed & SEO Optimization</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Progressive Web & Mobile Apps</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Deliver desktop and mobile application experiences directly through the browser with offline capability and instant loading.</p>
                <ul className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Progressive Web App (PWA) Setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Cross-Platform React Native Support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Touch-Optimized UI Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development & Handling Process */}
        <section id="process" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-950 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest block mb-2">Structured Execution</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">OUR 5-STEP BUILDING & HANDLING PROCESS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-teal-400">STEP 01</span>
                <h3 className="text-lg font-bold text-white">Discovery</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Understanding your business goals, target audience, and architecture requirements.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-cyan-400">STEP 02</span>
                <h3 className="text-lg font-bold text-white">Design & UI</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Creating clean responsive layouts, modern design tokens, and user experience flows.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-emerald-400">STEP 03</span>
                <h3 className="text-lg font-bold text-white">Engineering</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Writing high-performance code, integrating APIs, databases, and AI models.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-teal-400">STEP 04</span>
                <h3 className="text-lg font-bold text-white">Testing & Launch</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Auditing speed, mobile responsiveness, security, and deploying to cloud servers.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative">
                <span className="text-xs font-mono font-bold text-cyan-400">STEP 05</span>
                <h3 className="text-lg font-bold text-white">Handling</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Ongoing technical updates, server monitoring, backups, and growth enhancements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="A2 Pyramid Logo" className="w-10 h-10 rounded-xl border border-teal-500/30" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">A2 Pyramid</span>
              <span className="text-[10px] tracking-widest text-teal-400 font-semibold uppercase -mt-1">
                Edutech Pvt. Ltd.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium tracking-wider uppercase">
            <button onClick={onBackToMain} className="hover:text-teal-400 transition-colors">A2 Pyramid Home</button>
            <button onClick={() => scrollToSection('overview')} className="hover:text-teal-400 transition-colors">Overview</button>
            <button onClick={() => scrollToSection('services-grid')} className="hover:text-teal-400 transition-colors">Services</button>
            <button onClick={() => setIsConsultModalOpen(true)} className="hover:text-teal-400 transition-colors">Request Quote</button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 A2 Pyramid Edutech Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>contact@a2pyramid.com</span>
            <span>+91 (Available on Request)</span>
          </div>
        </div>
      </footer>

      {/* Consultation / Proposal Modal */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative bg-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Start Your Web Project</h3>
                <p className="text-xs text-teal-400">A2 Pyramid Digital Technology Services</p>
              </div>
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Project Type</label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Website Creation">Website Creation</option>
                    <option value="Web Application">Web Application Development</option>
                    <option value="AI Integration">AI Integration & Chatbot</option>
                    <option value="Maintenance & Support">Website Maintenance & Hosting</option>
                    <option value="Full Digital Ecosystem">Full Digital Ecosystem</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Target Budget</label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000+">$15,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Project Requirements / Ideas</label>
                <textarea
                  rows="3"
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder="Describe your vision, required features, or tech stack preferences..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:from-teal-400 hover:to-cyan-400 transition-all"
              >
                Submit Project Request →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-teal-500/50 p-4 rounded-2xl shadow-2xl max-w-md flex items-center gap-3 animate-bounce">
          <CheckCircle2 size={24} className="text-teal-400 flex-shrink-0" />
          <p className="text-xs text-slate-200 leading-relaxed">{toast.message}</p>
        </div>
      )}
    </div>
  );
};
