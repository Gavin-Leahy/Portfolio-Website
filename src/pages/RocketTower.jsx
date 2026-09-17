import React from "react";
import ProjectDetailLayout from "@/components/portfolio/ProjectDetailLayout";
import YouTubeEmbed from "@/components/portfolio/YouTubeEmbed";

const PROJECT = {
  title: "Rocket Tower",
  category: "Mechanical Design",
  image:
    "/images/bell-tower.png",
  overview:
    "The Bell Tower Rocket was a project done to celebrate Purdue University's 150th anniversary. This project combines Purdue's themes of space exploration with its famous Bell Tower.",
  highlights: [
    "Displays both Purdue themes and famous landmarks",
    "Taught build-for-manufacturing fundamentals",
    "Taught different production methods and how production methods affect design",
    "Award-winning fifth-place design in class competition",
  ],
  tech: [
    "CAD",
    "System Design",
    "3D Printing",
    "Mechanical Assembly",
    "Arduino Embedded Coding",
  ],
};

export default function RocketTower() {
  return (
    <ProjectDetailLayout
      {...PROJECT}
      imageAspect="3/4"
      extra={
        <>
          <YouTubeEmbed
            videoId="xUffN5xI0Ec"
            label="Rocket Tower Demo"
          />
        </>
      }
    />
  );
}
