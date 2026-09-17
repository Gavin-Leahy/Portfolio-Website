import React from "react";
import ProjectDetailLayout from "@/components/portfolio/ProjectDetailLayout";
import YouTubeEmbed from "@/components/portfolio/YouTubeEmbed";

const PROJECT = {
  title: "Rocket Tower",
  category: "Mechanical Design",
  image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=80",
  overview:
    "The Bell Tower Rocket was a project done to celebrate Purdue University's 150th anniversary. This project combines Purdue's themes of space exploration with its famous Bell Tower. This project uses a pulley system for the user to pull the tower up and a button connected to a speaker and Arduino to play a space-themed song when the bell tower reaches the top.",
  highlights: [
    "Displays both Purdue Themes and Famous Land Marks",
    "Taught build for manufacturing fundamentals",
    "Taught different production methods and how production methods effect design",
    "Award winning 5th place design in class competition",
  ],
  tech: ["CAD", "System Design", "3D Printing", "Mechanical Assembly", "Arduino Embedded Coding"],
};

export default function RocketTower() {
  return (
    <ProjectDetailLayout
      {...PROJECT}
      extra={
        <>
          <YouTubeEmbed videoId="YOUR_VIDEO_ID" label="Rocket Tower Demo" />
        </>
      }
      }
    />
  );
}
