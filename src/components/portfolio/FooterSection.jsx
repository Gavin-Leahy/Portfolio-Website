import React from "react";

export default function FooterSection() {
  return (
    <footer className="relative py-16 bg-cream/40 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif italic font-bold text-2xl text-ink">Gavin Leahy

            </span>
            <span className="text-black/10">|</span>
            <span className="font-body text-sm text-ink_soft">Industrial Engineer</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/gavin-leahy/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-ink_soft hover:text-ink transition-colors">leahgc01@purdue.edu

            </a>
            <a href="https://www.linkedin.com/in/gavin-leahy/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-ink_soft hover:text-ink transition-colors">
              LinkedIn
            </a>
            <a href="https://www.linkedin.com/in/gavin-leahy/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-ink_soft hover:text-ink transition-colors">(260)-418-0837

            </a>
          </div>

          <div className="flex items-center gap-2">
            
            

            
          </div>
        </div>
      </div>
    </footer>);

}
