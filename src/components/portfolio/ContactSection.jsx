import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const TO_EMAIL = "leahgc01@purdue.edu";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await base44.integrations.Core.SendEmail({
        to: TO_EMAIL,
        subject: `New portfolio message from ${form.name}`,
        body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
      });
      setSent(true);
    } catch (err) {
      setError("Something went wrong sending your message. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-sm text-ink_soft uppercase tracking-[0.2em] mb-4">
            
            Let's Talk
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-7xl text-ink uppercase tracking-tight">
            
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-ink_soft mt-4 max-w-lg mx-auto">
            
            Ready to build something extraordinary? Drop a message and I'll get back within 24 hours.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-cream/50 rounded-3xl p-8 md:p-12">
          
          {sent ?
          <div className="p-12 text-center space-y-4">
              <CheckCircle size={48} className="text-ink mx-auto" />
              <p className="font-heading font-bold text-xl text-ink">Message Sent</p>
              <p className="font-body text-sm text-ink_soft">I'll respond within 24 hours. Stay connected.</p>
            </div> :

          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-xs text-ink_soft font-medium uppercase tracking-wider">Name</label>
                  <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink_soft/40 focus:border-ink focus:outline-none transition-colors" />
                
                </div>
                <div className="space-y-2">
                  <label className="font-body text-xs text-ink_soft font-medium uppercase tracking-wider">Email</label>
                  <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink_soft/40 focus:border-ink focus:outline-none transition-colors" />
                
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-body text-xs text-ink_soft font-medium uppercase tracking-wider">Message</label>
                <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 font-body text-sm text-ink placeholder:text-ink_soft/40 focus:border-ink focus:outline-none transition-colors resize-none" />
              
              </div>
              {error && <p className="font-body text-xs text-red-500">{error}</p>}
              <button
              type="submit"
              disabled={sending}
              className="w-full py-4 bg-ink text-white font-heading font-semibold text-sm rounded-xl hover:bg-ink_soft transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
              
                {sending ?
              <><Loader2 size={16} className="animate-spin" /> Sending...</> :

              <><Send size={16} /> Send Message</>
              }
              </button>
            </form>
          }
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <a href="https://stacksmesh.com/assessment/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-ink_soft hover:text-ink transition-colors">leahgc01@purdue.edu

          </a>
          <span className="hidden sm:block text-black/10">|</span>
          <a href="https://pk.linkedin.com/company/stacksmesh" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-ink_soft hover:text-ink transition-colors">
            LinkedIn →
          </a>
          <span className="hidden sm:block text-black/10">|</span>
          <a href="tel:+12027738131" className="font-body text-sm text-ink_soft hover:text-ink transition-colors">+1 (260)-418-0837

          </a>
        </div>
      </div>
    </section>);

}