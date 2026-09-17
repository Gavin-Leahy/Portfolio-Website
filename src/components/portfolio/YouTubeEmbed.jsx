// src/components/portfolio/YouTubeEmbed.jsx
import React from "react";

export default function YouTubeEmbed({ videoId, label = "Project Video" }) {
  if (!videoId) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pb-24">
      <h2 className="font-heading font-bold text-2xl text-ink uppercase tracking-tight mb-6">
        {label}
      </h2>
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-black/5">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={label}
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
