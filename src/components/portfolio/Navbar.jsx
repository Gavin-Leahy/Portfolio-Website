import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
{ label: "Home", href: "#hero" },
{ label: "Skills", href: "#services" },
{ label: "Projects", href: "#projects" },
{ label: "About", href: "#about" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ?
        "bg-white/80 backdrop-blur-xl border-b border-black/5" :
        "bg-white/0"}`
        }>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          





          

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {e.preventDefault();scrollTo(item.href);}}

              className="font-body text-sm text-ink_soft hover:text-ink transition-colors duration-300">
              
                {item.label}
              </a>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-ink">
            
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 pt-20">
          
            {navItems.map((item, i) =>
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => {e.preventDefault();scrollTo(item.href);}}

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="font-heading font-bold text-3xl text-ink hover:text-orange_pulse transition-colors">
            
                {item.label}
              </motion.a>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </>);

}