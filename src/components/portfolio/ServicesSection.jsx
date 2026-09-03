import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "CAD Modeling",
    desc: "Parametric part modeling, assemblies, and technical drawings for mechanical and product design.",
    full:
      "I work across parametric part modeling, multi-part assemblies with mate constraints, and production-ready technical drawings. From concept sketches to detailed, toleranced drawings, I build clean, editable models with proper design intent — whether it's a single bracket or a full rocket tower assembly. My focus is on models that are not only accurate but structured for manufacturing and future iteration.",
    tags: ["Siemens NX", "Inventor", "SolidWorks", "Parametric Modeling", "Assemblies", "Technical Drawing"],
  },
  {
    num: "02",
    title: "Hardware Coding",
    desc: "Embedded firmware and control logic for microcontrollers, sensors, and actuators.",
    full:
      "I write embedded firmware that brings hardware to life — reading sensors, driving actuators, and coordinating real-time control loops. From soil-moisture-triggered valve actuation to audio playback pipelines, I handle the full stack: pin-level I/O, interrupts, communication protocols, and power-conscious design. My code is structured for reliability in long-running, unattended operation.",
    tags: ["C/C++", "Arduino", "Microcontrollers", "ESP 32", "Firmware"],
  },
  {
    num: "03",
    title: "Circuit Building",
    desc: "Hands-on design, prototyping, and soldering of custom PCBs and electronics.",
    full:
      "I design and build circuits from the ground up — schematic capture, breadboard prototyping, custom PCB layout, and hand soldering. Whether it's an MP3 player with a dedicated audio DAC or a sensor-driven control board, I handle component selection, signal-integrity basics, and physical assembly to produce working, reliable hardware.",
    tags: ["PCB Design", "Soldering", "Schematics", "Prototyping"],
  },
  {
    num: "04",
    title: "Data Analysis Coding",
    desc: "Turning raw data into clear insights with code, statistics, and visualization.",
    full:
      "I write code to collect, clean, and analyze data so decisions are grounded in evidence rather than guesswork. I'm comfortable with statistical methods, scripting for data pipelines, and building clear visualizations that communicate findings. From process optimization in industrial settings to experimental data, I focus on translating numbers into actionable insight.",
    tags: ["MatLab", "R", "Python", "Statistics", "Visualization", "Pipelines"],
  },
];

function ServiceRow({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onClick={() => setExpanded((e) => !e)}
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-black/10 hover:bg-cream/50 transition-colors duration-300 px-2 md:px-6 -mx-2 md:-mx-6 rounded-lg cursor-pointer"
    >
      <div className="md:col-span-1">
        <span className="font-heading font-bold text-2xl text-ink/20 group-hover:text-ink transition-colors duration-300">
          {service.num}
        </span>
      </div>
      <div className="md:col-span-4">
        <h3 className="font-heading font-bold text-xl md:text-2xl text-ink group-hover:text-ink transition-colors">
          {service.title}
        </h3>
      </div>
      <div className="md:col-span-5">
        <p className="font-body text-sm text-ink_soft leading-relaxed">{service.desc}</p>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden font-body text-sm text-ink leading-relaxed mt-3"
            >
              {service.full}
            </motion.p>
          )}
        </AnimatePresence>
        <div className="flex flex-wrap gap-2 mt-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white border border-black/10 rounded-full font-body text-[10px] text-ink_soft font-medium uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 flex items-start justify-end">
        <ArrowUpRight
          size={24}
          className={`text-ink_soft group-hover:text-ink transition-all duration-300 ${
            expanded ? "rotate-45" : ""
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="relative py-24 md:py-32 bg-cream/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={titleRef} className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-body text-sm text-ink_soft uppercase tracking-[0.2em] mb-4"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-6xl text-ink uppercase tracking-tight"
          >
            My Best Skills
          </motion.h2>
        </div>

        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} index={i} />
          ))}
          <div className="border-t border-black/10" />
        </div>
      </div>
    </section>
  );
}