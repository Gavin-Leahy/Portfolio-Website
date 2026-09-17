import React from "react";
import ProjectDetailLayout from "@/components/portfolio/ProjectDetailLayout";
import YouTubeEmbed from "@/components/portfolio/YouTubeEmbed";

const PROJECT = {
  title: "Garden Watering System",
  category: "Embedded / IoT",
  image: "https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/17f9ca1b5_Screenshot_2026-07-31_141858.png",
  overview:
    "An automated garden watering system designed to keep plants healthy with minimal intervention. Using soil moisture sensors and a programmable microcontroller, the system checks in the morning whether the soil moisture level is dry enough. If so, it opens the solinoids and sends all this data back to a local sever",
  highlights: [
    "Soil moisture sensing with automatic valve actuation",
    "Adjustable moisture thresholds per zone",
    "Low-power microcontroller design for continuous outdoor operation",
    "Manual override and scheduling support",
    "Custom Nozzle Design",
  ],
  tech: ["C/C++", "Microcontroller", "Soil Sensors", "Solenoid Valves", "CAD Systems"],
};

export default function GardenWateringSystem() {
  return (
    <ProjectDetailLayout
      {...PROJECT}
      extra={
        <YouTubeEmbed videoId="YOUR_GARDEN_VIDEO_ID" label="Garden Watering System Demo" />
      }
    />
  );
}
