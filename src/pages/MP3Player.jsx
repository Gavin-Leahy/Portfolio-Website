import React from "react";
import ProjectDetailLayout from "@/components/portfolio/ProjectDetailLayout";
import YouTubeEmbed from "@/components/portfolio/YouTubeEmbed";

const PROJECT = {
  title: "MP3 Player",
  category: "Electronics / Hardware",
  image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1600&q=80",
  overview:
    "A compact, custom-built MP3 player combining embedded audio decoding with a tactile user interface. The device reads audio files from onboard storage, decodes them through a dedicated audio module, and outputs clean sound through a headphone amplifier — all driven by a hand-wired control board and a small display for track navigation.",
  highlights: [
    "Hardware MP3 decoding with dedicated audio DAC",
    "Custom control board with tactile navigation buttons",
    "Battery-powered portable enclosure design",
    "Track listing and playback status display",
  ],
  tech: ["Embedded C", "Audio DAC", "Microcontroller", "Engineering Economics", "Soldering", "3D Printing"],
};

export default function MP3Player() {
  return (
    <ProjectDetailLayout
      {...PROJECT}
      extra={
        <YouTubeEmbed videoId="P22Dx2LRQP8" label="Garden Watering System Demo" />
      }
    />
  );
}
