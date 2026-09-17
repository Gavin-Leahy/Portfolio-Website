import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import FooterSection from "@/components/portfolio/FooterSection";

export default function ProjectDetailLayout({ title, category, image, imageAspect = "16/9", overview, highlights, tech, extra }) {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <section className="relative bg-white pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-ink_soft hover:text-ink transition-colors mb-10">
            
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm text-ink_soft uppercase tracking-[0.2em] mb-4">
            
            {category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-6xl text-ink uppercase tracking-tight mb-8">
            
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-black/5 mb-14">
            
            <img 
              src={image}
              alt={title}
              className="w-full object-cover"
              style={{ aspectRatio: imageAspect }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-heading font-bold text-2xl text-ink uppercase tracking-tight">Overview</h2>
              <p className="font-body text-base text-ink_soft leading-relaxed">{overview}</p>

              <h2 className="font-heading font-bold text-2xl text-ink uppercase tracking-tight pt-4">Highlights</h2>
              <ul className="space-y-3">
                {highlights.map((h) =>
                <li key={h} className="flex gap-3 font-body text-base text-ink_soft leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange_pulse flex-shrink-0" />
                    {h}
                  </li>
                )}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-ink uppercase tracking-tight">Tech</h2>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) =>
                <span
                  key={t}
                  className="px-3 py-1 bg-cream rounded-full font-body text-[11px] text-ink_soft font-medium uppercase tracking-wider">
                  
                    {t}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {extra}
      <FooterSection />
    </div>);

}
