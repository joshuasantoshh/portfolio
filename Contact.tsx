"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-primary uppercase font-mono">&gt; DECRYPT_CONTACT</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Establish Communication</h3>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
            <div className="space-y-6">
              {/* Direct Email Action Button */}
              <a
                href="mailto:joshuasantosh06@gmail.com?subject=Project%20Collaboration%20Inquiry"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 bg-primary hover:bg-primary/90 text-white font-bold font-mono text-xs tracking-widest transition-all duration-200 border border-primary"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))"
                }}
              >
                <Mail className="w-4 h-4" />
                <span>SEND_DIRECT_EMAIL</span>
              </a>

              {/* Mail Card */}
              <div className="cyber-card p-6 flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 font-mono uppercase tracking-widest">// SEC_EMAIL</h4>
                  <a href="mailto:joshuasantosh06@gmail.com" className="text-base font-semibold text-white hover:text-primary transition-colors duration-200 font-mono">
                    joshuasantosh06@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="cyber-card p-6 flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 font-mono uppercase tracking-widest">// SEC_LINE</h4>
                  <a href="tel:+919667728044" className="text-base font-semibold text-white hover:text-primary transition-colors duration-200 font-mono">
                    +91 9667728044
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="cyber-card p-6 flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 font-mono uppercase tracking-widest">// COORDINATES</h4>
                  <span className="text-base font-semibold text-white font-mono">
                    BANGALORE, IN
                  </span>
                </div>
              </div>
            </div>

            {/* Social Panel */}
            <div className="cyber-card p-6 space-y-4">
              <h4 className="text-[10px] font-bold text-gray-500 font-mono uppercase tracking-widest">// DECRYPT_CHANNELS</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/20 hover:scale-105 rounded-md transition-all duration-200"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/20 hover:scale-105 rounded-md transition-all duration-200"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Console Form */}
          <div className="lg:col-span-7">
            <div
              className="cyber-card p-8 h-full flex flex-col justify-center text-left"
            >
              {/* Tech corner decoration outlines */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      &gt; USER_NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="[ENTER_NAME]"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-none text-white transition-all duration-200 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      &gt; USER_INBOX
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="[NAME@DOMAIN.COM]"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-none text-white transition-all duration-200 text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    &gt; INQUIRY_SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="[ESTABLISH_SESSION_TOPIC]"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-none text-white transition-all duration-200 text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    &gt; SECURE_PAYLOAD_BODY
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="[COMPOSE_PAYLOAD_MESSAGE_STRING...]"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none rounded-none text-white transition-all duration-200 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold tracking-widest transition-all duration-200 border border-primary"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))"
                  }}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>TRANSMIT_PAYLOAD</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded-none text-center"
                  >
                    [SUCCESS]: PAYLOAD TRANSMITTED SECURELY.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
