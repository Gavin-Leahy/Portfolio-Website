import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WORKSPACE_IMG = "https://media.base44.com/images/public/6a46e6b113927564cb8a8b2f/07e09f6ee_generated_image.png";

export default function AboutSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div ref={titleRef}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              className="font-body text-sm text-ink_soft uppercase tracking-[0.2em] mb-4">
              
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-6xl text-ink uppercase tracking-tight mb-8">
              
              Building What's Next
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-5">
              
              <p className="text-base text-ink leading-relaxed text-left [font-family:'Inter',_ui-sans-serif,_system-ui,_sans-serif] font-normal">I'm Gavin Leahy,  a sophomore at Purdue University majoring in Industrial Engineering. My focus sits at the intersection of electronics and the CAD systems, and I'm working toward a defense-related engineering internship in Fort Wayne, Indiana next summer.

              </p>
              <p className="font-body text-ink_soft leading-relaxed text-base">I got into engineering because I like understanding how systems actually work, not just the individual parts, but how they fit together and where the failure points are. That systems-level thinking is what draws me to industrial engineering: it's less about one discipline and more about optimizing the whole picture.

              </p>
              <p className="font-body text-ink_soft leading-relaxed text-base">Right now I'm building my foundation. I am strong in problem solving, coding, and CAD, and sharpening the technical fundamentals that'll carry into future work. Although studying in West Lafayette, I'm based in Fort Wayne and plan to build my career here, with an eye toward roles that combine hands-on engineering with real-world impact.

              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-black/10">
              
              <div>
                <p className="font-heading font-bold text-3xl text-ink">IE Major</p>
                <p className="font-body text-xs text-ink_soft mt-1">Sophomore Year</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-ink">Fort Wayne, IN</p>
                <p className="font-body text-xs text-ink_soft mt-1">Home</p>
              </div>
              <div>
                <p className="font-heading font-bold text-3xl text-ink">CAD+ Electronics</p>
                <p className="font-body text-xs text-ink_soft mt-1">Engineers</p>
              </div>
            </motion.div>
          </div>

          {/* Workspace image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative">
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-cream">
              <img src="https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/779e79393_IMG_5725__1_.JPG" alt="Workspace" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            


            
          </motion.div>
        </div>
      </div>
    </section>);

}