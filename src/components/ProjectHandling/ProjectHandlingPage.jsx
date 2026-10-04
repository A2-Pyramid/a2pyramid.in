import React, { useState } from 'react';
import { 
  Briefcase, ArrowLeft, CheckCircle2, Users, Target, ShieldCheck, 
  Clock, TrendingUp, Layers, Terminal, Sparkles, ArrowRight, 
  UserCheck, Cpu, Layout, X, MessageSquare
} from 'lucide-react';

export const ProjectHandlingPage = ({ onBackToMain, navigateTo }) => {
  const [activeTab, setActiveTab] = useState('sprint');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Dedicated Team Setup',
    teamSize: '3-5 Specialists',
    details: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsConsultModalOpen(false);
    setToast({
      visible: true,
      message: `Thank you ${formState.name || 'Partner'}! Your team setup request for "${formState.serviceType}" has been logged. Our workforce coordinator will reach out to ${formState.email} within 24 hours.`
    });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 5000);
    setFormState({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Dedicated Team Setup',
      teamSize: '3-5 Specialists',
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
                  Workforce & Project Ops
                </span>
              </div>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
            <button onClick={() => scrollToSection('overview')} className="text-slate-300 hover:text-teal-400 transition-colors">Overview</button>
            <button onClick={() => scrollToSection('core-services')} className="text-slate-300 hover:text-teal-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('team-dashboard')} className="text-slate-300 hover:text-teal-400 transition-colors">Dashboard</button>
            <button onClick={() => scrollToSection('roles')} className="text-slate-300 hover:text-teal-400 transition-colors">Team Roles</button>
          </nav>

          {/* CTA Action */}
          <button
            onClick={() => setIsConsultModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Set Up Your Team</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* User Provided Section Structure */}
        <section id="overview" className="relative bg-slate-950 text-slate-100 py-24 px-6 sm:px-12 lg:px-20 overflow-hidden font-sans border-b border-slate-800/60">
          {/* Ambient Deep Teal & Navy Glow Effects */}
          <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-950/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Main Headline & Subheading Header */}
            <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/90 border border-teal-500/30 text-teal-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-inner">
                <Sparkles size={14} />
                <span>A2 Pyramid Edutech Pvt. Ltd. — Workforce & Project Management</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                YOUR VISION. OUR TEAM. <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">YOUR SUCCESS.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
                From Managing Existing Projects to Building Dedicated Teams for Your Next Big Idea.
              </p>
            </div>

            {/* Core 3-Service Grid & Central Project Dashboard Workspace */}
            <div id="core-services" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
              {/* Left Column: The 3 Core Service Offerings */}
              <div className="lg:col-span-5 space-y-4">
                {/* Service 1 */}
                <div className="p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl group">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 font-bold text-sm">01</span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-400 transition-colors">Existing Project Management</h3>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-11">
                    <strong className="text-slate-300">Already Have a Project? We'll Help You Execute It.</strong> Take ownership of ongoing deliverables, fix bottlenecks, optimize workflows, and hit deadlines.
                  </p>
                </div>

                {/* Service 2 */}
                <div className="p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl group">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 font-bold text-sm">02</span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Dedicated Team Setup</h3>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-11">
                    <strong className="text-slate-300">Have an Idea? We'll Build the Right Team for It.</strong> Transform raw concepts into structured execution units with top-tier specialized engineers and designers.
                  </p>
                </div>

                {/* Service 3 */}
                <div className="p-5 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 shadow-xl group">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 font-bold text-sm">03</span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Custom Scaled Teams</h3>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-11">
                    <strong className="text-slate-300">Something Different in Mind? We'll Create a Team Around Your Vision.</strong> Scalable resource allocation structured precisely around your industry domain and goals.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Digital Project Dashboard Preview */}
              <div className="lg:col-span-7" id="team-dashboard">
                <div className="relative rounded-3xl p-1 bg-gradient-to-r from-teal-500/30 via-cyan-500/20 to-slate-800 shadow-2xl">
                  <div className="bg-slate-900/90 rounded-[22px] p-6 sm:p-8 relative overflow-hidden backdrop-blur-md">
                    {/* Dashboard Title Bar */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                      </div>
                      <div className="text-xs font-mono text-teal-400 tracking-wider flex items-center gap-1.5">
                        <Terminal size={14} />
                        A2_PYRAMID_WORKSPACE_v2.6.SYS
                      </div>
                    </div>

                    {/* Dashboard Content Blocks */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Active Milestone Tracker</div>
                          <div className="text-sm font-semibold text-slate-200">Execution Phase: Sprint 4 Optimization</div>
                        </div>
                        <span className="px-3 py-1 text-xs bg-teal-500/20 text-teal-300 rounded-full font-medium border border-teal-500/30 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                          94% On Track
                        </span>
                      </div>

                      {/* Interactive View Toggles */}
                      <div className="flex gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
                        <button
                          onClick={() => setActiveTab('sprint')}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'sprint' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'text-slate-400 hover:text-white'}`}
                        >
                          Team Pods
                        </button>
                        <button
                          onClick={() => setActiveTab('kpi')}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'kpi' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
                        >
                          Resource Allocation
                        </button>
                        <button
                          onClick={() => setActiveTab('reporting')}
                          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${activeTab === 'reporting' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'}`}
                        >
                          Agile Reporting
                        </button>
                      </div>

                      {activeTab === 'sprint' && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center">
                            <div className="text-xs text-teal-400 font-bold mb-1">Architecture</div>
                            <div className="text-xs text-slate-300">Cloud & Backend</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center">
                            <div className="text-xs text-cyan-400 font-bold mb-1">UI/UX Design</div>
                            <div className="text-xs text-slate-300">Creative Systems</div>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-center col-span-2 sm:col-span-1">
                            <div className="text-xs text-emerald-400 font-bold mb-1">AI & Automation</div>
                            <div className="text-xs text-slate-300">Smart Workflows</div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'kpi' && (
                        <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-500/30 space-y-2 text-xs">
                          <div className="flex justify-between text-slate-300">
                            <span>Senior Full-Stack Engineers</span>
                            <span className="text-cyan-400 font-bold">4 Active</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>DevOps & Cloud Specialist</span>
                            <span className="text-cyan-400 font-bold">1 Active</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Project Manager / Scrum Master</span>
                            <span className="text-cyan-400 font-bold">1 Active</span>
                          </div>
                        </div>
                      )}

                      {activeTab === 'reporting' && (
                        <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-2 text-xs">
                          <div className="text-slate-300 flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            Daily Standups & Transparent Jira / Trello Tracking
                          </div>
                          <div className="text-slate-300 flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            Weekly Milestone Code Reviews & QA Demos
                          </div>
                        </div>
                      )}

                      {/* Collaboration Stream Simulation */}
                      <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/20 flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                          Dedicated Resource Sync: Assigned 6 Senior Specialists
                        </span>
                        <span className="text-teal-400 font-mono font-bold">READY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Message Banner */}
            <div className="py-6 px-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md mb-12 text-center max-w-5xl mx-auto">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-slate-300 uppercase">
                You Bring the Project. You Bring the Idea. <span className="text-teal-400">We Bring the People, Planning, and Execution.</span>
              </p>
            </div>

            {/* Call to Action Footer */}
            <div className="text-center bg-gradient-to-r from-teal-950/60 via-slate-900 to-cyan-950/60 p-8 sm:p-12 rounded-3xl border border-teal-500/20 shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide mb-3">
                LET'S BUILD YOUR TEAM AND MAKE IT HAPPEN.
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto text-xs sm:text-sm mb-6">
                Partner with A2 Pyramid today to scale your workforce or successfully execute your next complex tech initiative.
              </p>
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Set Up Your Team Today
              </button>
            </div>
          </div>
        </section>

        {/* Roles & Pod Structures Section */}
        <section id="roles" className="py-24 px-6 sm:px-12 lg:px-20 bg-slate-900/40 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest block mb-2">Talent & Expertise Pods</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">ROLES WE ASSEMBLE FOR YOUR PROJECTS</h2>
              <p className="text-slate-400 text-sm mt-3">We curate hand-picked specialists matching your exact technology stack, timeline, and industry domain.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Role 1 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <UserCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Full-Stack Engineers</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Senior React, Next.js, Node.js, Python, and Java developers ready to build clean, maintainable codebases.</p>
              </div>

              {/* Role 2 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Cloud & DevOps Specialists</h3>
                <p className="text-slate-400 text-xs leading-relaxed">AWS, Google Cloud, Docker, Kubernetes, and CI/CD engineers ensuring zero-downtime scalability and security.</p>
              </div>

              {/* Role 3 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Layout size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">UI/UX & Visual Designers</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Product designers crafting intuitive user flows, responsive design systems, and stunning visual interfaces.</p>
              </div>

              {/* Role 4 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">Scrum Masters & PMs</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Agile project managers orchestrating daily standups, backlog grooming, milestone delivery, and client syncs.</p>
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
            <button onClick={() => scrollToSection('core-services')} className="hover:text-teal-400 transition-colors">Services</button>
            <button onClick={() => setIsConsultModalOpen(true)} className="hover:text-teal-400 transition-colors">Setup Team</button>
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

      {/* Team Setup Proposal Modal */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative bg-slate-900 border border-teal-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Setup Your Project Team</h3>
                <p className="text-xs text-teal-400">A2 Pyramid Workforce & Operations</p>
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
                    placeholder="Enter your name"
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
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Engagement Type</label>
                  <select
                    value={formState.serviceType}
                    onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Existing Project Management">Existing Project Management</option>
                    <option value="Dedicated Team Setup">Dedicated Team Setup</option>
                    <option value="Custom Scaled Team">Custom Scaled Team</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Required Team Size</label>
                  <select
                    value={formState.teamSize}
                    onChange={(e) => setFormState({ ...formState, teamSize: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="1-2 Specialists">1-2 Dedicated Specialists</option>
                    <option value="3-5 Specialists">3-5 Full-Stack Pod</option>
                    <option value="6-10 Specialists">6-10 Complete Delivery Team</option>
                    <option value="10+ Custom Team">10+ Scaled Enterprise Team</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Project Goals & Tech Stack Requirements</label>
                <textarea
                  rows="3"
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder="Describe your project, required roles, or current challenges..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:from-teal-400 hover:to-cyan-400 transition-all"
              >
                Submit Team Request →
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
