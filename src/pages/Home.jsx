import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import WorkSection from "@/components/portfolio/WorkSection";
import AboutSection from "@/components/portfolio/AboutSection";
import FooterSection from "@/components/portfolio/FooterSection";

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <WorkSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}