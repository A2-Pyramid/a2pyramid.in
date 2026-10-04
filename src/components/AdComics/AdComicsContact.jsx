import React, { useState } from 'react';

export const AdComicsContact = ({ showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(
      'Message Transmitted',
      `Thank you ${formData.name || 'friend'}. Your message regarding ${formData.subject} has been received.`
    );
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-slate-800/60 bg-[radial-gradient(rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-[#0a0b0e] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3 inline-block">Get in Touch</span>
          <h1 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight mb-4 text-white">
            CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white [text-shadow:0_0_25px_rgba(59,130,246,0.6)]">AD COMICS</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light mb-4">
            LET'S BUILD THE UNIVERSE TOGETHER.
          </p>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            “Have a question, partnership idea, collaboration opportunity, media inquiry or simply want to connect with AD Comics? We'd love to hear from you.”
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-[#0a0b0e] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-2 block">Direct Channels</span>
              <h2 className="text-3xl font-black font-['Outfit'] text-white mb-6">CONNECT WITH US</h2>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800/80 hover:border-blue-500/40 transition-all [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase block mb-1">General Inquiries</span>
              <p className="text-xs text-slate-400 mb-3">For general questions about AD Comics.</p>
              <a href="mailto:hello@adcomics.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono">
                hello@adcomics.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800/80 hover:border-blue-500/40 transition-all [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase block mb-1">Business & Partnerships</span>
              <p className="text-xs text-slate-400 mb-3">For partnerships, investment discussions, distribution, licensing and business opportunities.</p>
              <a href="mailto:partners@adcomics.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono">
                partners@adcomics.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141c] border border-slate-800/80 hover:border-blue-500/40 transition-all [box-shadow:0_0_35px_rgba(59,130,246,0.15)]">
              <span className="text-xs text-blue-400 font-semibold tracking-widest uppercase block mb-1">Media & Press</span>
              <p className="text-xs text-slate-400 mb-3">For media inquiries, interviews and press-related communication.</p>
              <a href="mailto:media@adcomics.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono">
                media@adcomics.com
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12141c] border border-slate-800 p-8 sm:p-10 rounded-2xl shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
              <h3 className="text-2xl font-black font-['Outfit'] text-white mb-6 relative z-10">SEND US A MESSAGE</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#0a0b0e] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full bg-[#0a0b0e] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0a0b0e] border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="investment">Investment</option>
                    <option value="media">Media</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-400 font-semibold block">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-[#0a0b0e] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30"
                >
                  SEND MESSAGE →
                </button>
              </form>
            </div>
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
              “AD Comics is creating an original superhero universe with stories designed to expand across multiple forms of entertainment and storytelling.”
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

          <div className="text-center">
            <a
              href="mailto:partners@adcomics.com"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl shadow-blue-600/30 border border-blue-400/30"
            >
              START A CONVERSATION →
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-[#0a0b0e] border-b border-slate-800/60 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h3 className="text-2xl font-black font-['Outfit'] text-white">FOLLOW THE JOURNEY</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            “Stay connected as the AD Comics universe continues to grow.”
          </p>
          <div className="flex items-center justify-center gap-6 pt-2">
            <a href="#" className="w-12 h-12 rounded-xl bg-[#12141c] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-all font-bold text-sm">IG</a>
            <a href="#" className="w-12 h-12 rounded-xl bg-[#12141c] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-all font-bold text-sm">YT</a>
            <a href="#" className="w-12 h-12 rounded-xl bg-[#12141c] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-all font-bold text-sm">IN</a>
            <a href="#" className="w-12 h-12 rounded-xl bg-[#12141c] border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-all font-bold text-sm">X</a>
          </div>
        </div>
      </section>
    </>
  );
};
