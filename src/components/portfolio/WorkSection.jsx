import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
{
  title: "Garden Watering System",
  category: "Embedded / IoT",
  desc: "Automated garden watering system with soil moisture sensing and programmable solenoid control for efficient, hands-off plant care.",
  stack: ["C/C++", "Microcontroller", "Soil Sensors", "Solenoid Valves", "CAD Systems"],
  impact: "Automated Irrigation",
  image: "https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/17f9ca1b5_Screenshot_2026-07-31_141858.png",
  path: "/projects/garden-watering-system"
},
{
  title: "MP3 Player",
  category: "Electronics / Hardware",
  desc: "Compact custom MP3 player with dedicated audio decoding, tactile controls, and silly parody songs to go along with it.",
  stack: ["Embedded C", "Audio DAC", "Microcontroller", "Engineering Economics", "3D Printing"],
  impact: "Custom Hardware",
  image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1200&q=80",
  path: "/projects/mp3-player"
},
{
  title: "Rocket Tower",
  category: "Mechanical Design",
  desc: "Structural rocket tower designed to showcase purdue's themes of Space Exploration.",
  stack: ["CAD", "System Design", "3D Printing", "Mechanical Assembly", "Arduino Embedded Coding"],
  impact: "Launch-Ready",
  image: "https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/1bb9b3120_pt-bell-towerOG.jpg",
  path: "/projects/rocket-tower"
},
{
  title: "General CAD Skills",
  category: "Design / Modeling",
  desc: "Showcase of CAD proficiency across parametric part modeling, assemblies, mate constraints, and production-ready technical drawings.",
  stack: ["CAD", "Parametric Modeling", "Technical Drawing", "Assemblies"],
  impact: "Full-Stack CAD",
  image: "https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/a4e9d77b0_Micro-Turbine.png",
  path: "/projects/general-cad-skills"
}];


function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Link to={project.path} className="block h-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.15, duration: 0.7 }}
        className="group relative h-full bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-ink/20 transition-all duration-500 hover:shadow-xl hover:shadow-black/5">
        
        <div className="relative overflow-hidden aspect-[4/3] bg-cream">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
            <span className="font-body text-[10px] text-ink font-medium uppercase tracking-wider">{project.category}</span>
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-ink/90 backdrop-blur-sm rounded-full">
            <span className="font-body text-[10px] text-white font-medium uppercase tracking-wider">{project.impact}</span>
          </div>
        </div>
        <div className="p-8 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading font-bold text-xl text-ink">{project.title}</h3>
            <ArrowUpRight size={20} className="text-ink_soft group-hover:text-ink group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
          </div>
          <p className="font-body text-sm text-ink_soft leading-relaxed">{project.desc}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((s) =>
            <span key={s} className="px-3 py-1 bg-cream rounded-full font-body text-[10px] text-ink_soft font-medium uppercase tracking-wider">
                {s}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>);

}

export default function WorkSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-sm text-ink_soft uppercase tracking-[0.2em] mb-4">
            
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-6xl text-ink uppercase tracking-tight">
            
            Recent Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) =>
          <ProjectCard key={project.title} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}