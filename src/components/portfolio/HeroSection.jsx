import React from "react";
import { motion } from "framer-motion";

const PHOTO_URL = "https://media.base44.com/images/public/6a46e6b113927564cb8a8b2f/2a0abdaf3_generated_image.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-white warm-gradient overflow-hidden">
      {/* greeting text: large, behind the face, horizontally centered like the reference */}
      <div className="absolute top-[17%] md:top-[18%] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif italic font-normal text-[clamp(5.4rem,13vw,10.8rem)] text-ink leading-none tracking-[-0.075em]">
          
          Hey, there
        </motion.h1>
      </div>

      {/* portrait: centered and larger, covering the middle of the greeting */}
      <div className="absolute left-1/2 top-[9%] md:top-[10%] -translate-x-1/2 z-20 w-[54vw] max-w-[520px] min-w-[310px]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          
          <img src="https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/509aad122_ChatGPT_Image_Jul_31__2026__11_16_33_AMpng__1___1_-EDIT.png"

          alt="Ahmed Hassan Yaseen"
          className="w-full aspect-[3/4] object-cover object-top portrait-fade" />
          
        </motion.div>
      </div>

      {/* left availability badge */}
      <motion.div
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="absolute left-6 md:left-14 top-[47%] md:top-[48%] z-30">
        
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full shadow-lg shadow-black/10 border border-black/5">
          <span className="relative flex h-4 w-4 rounded-full bg-orange_pulse/10 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-orange_pulse" />
          </span>
          <span className="font-body text-[11px] md:text-xs text-ink font-medium whitespace-nowrap">
            Available for new opportunities
          </span>
        </div>
      </motion.div>

      {/* right specialization text */}
      






      

      {/* massive lower-left name block */}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.75 }}
        className="absolute left-6 md:left-14 bottom-[8%] z-30 font-heading font-bold text-[clamp(4rem,10.3vw,9.6rem)] text-ink leading-[0.78] tracking-[-0.09em] uppercase">
        
        I AM<br />GAVIN
      </motion.h2>

      {/* lower-right title block */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.02, duration: 0.75 }}
        className="absolute right-6 md:right-14 lg:right-20 bottom-[9%] z-30 text-left">
        
        <p className="font-heading font-bold text-[clamp(1.9rem,4.4vw,4.4rem)] text-ink leading-[0.86] tracking-[-0.065em] uppercase">Industrial
Engineer
        </p>
        <p className="font-body text-xs md:text-sm text-ink_soft mt-3">Purdue University: Sophomore</p>
      </motion.div>
    </section>);

}