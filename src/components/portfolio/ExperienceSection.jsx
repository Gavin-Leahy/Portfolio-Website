import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillRows = [
{
  period: "2019—24",
  category: "Business Development",
  skills: ["Strategy", "Client Relations", "Growth", "Consulting"]
},
{
  period: "2019—24",
  category: "Full-Stack Development",
  skills: ["React", "Next.js", "Node.js", "TypeScript"]
},
{
  period: "2019—24",
  category: "Cloud & DevOps",
  skills: ["AWS", "GCP", "Docker", "Kubernetes"]
},
{
  period: "2022—24",
  category: "AI & Automation",
  skills: ["LLMs", "AI Agents", "Automation", "Data Pipelines"]
},
{
  period: "2022—24",
  category: "Project Management",
  skills: ["Agile", "Team Leadership", "Architecture", "Scaling"]
}];


function SkillRow({ row, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="grid grid-cols-12 gap-4 py-6 border-t border-black/10 items-center hover:bg-cream/40 transition-colors duration-300 px-4 -mx-4 rounded-lg">
      
      <div className="col-span-3 md:col-span-2">
        <span className="font-body text-sm text-ink_soft font-medium">{row.period}</span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <h3 className="font-heading font-bold text-base md:text-lg text-ink">{row.category}</h3>
      </div>
      <div className="col-span-12 md:col-span-6 flex flex-wrap gap-2">
        {row.skills.map((s) =>
        <span key={s} className="px-3 py-1 bg-cream border border-black/5 rounded-full font-body text-[11px] text-ink_soft font-medium">
            {s}
          </span>
        )}
      </div>
    </motion.div>);

}

export default function ExperienceSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return null;





























}