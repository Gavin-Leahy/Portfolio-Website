import React from "react";
import ProjectDetailLayout from "@/components/portfolio/ProjectDetailLayout";

const PROJECT = {
  title: "General CAD Skills",
  category: "Design / Modeling",
  image: "https://media.base44.com/images/public/6a6cb815420b1b7d4fa30585/1e1726b1d_Screenshot_2026-07-31_133955.png",
  overview:
    "A showcase of general CAD proficiency across mechanical parts, assemblies, and technical drawings. The work spans parametric part modeling, assembly design with proper mate constraints, and production-ready drawing documentation — demonstrating a well-rounded foundation in computer-aided design for both functional and aesthetic components.",
  highlights: [
    "Parametric part modeling with design intent",
    "Multi-part assemblies with mate constraints",
    "Technical drawings with dimensions and tolerances",
    "Experience across functional and aesthetic modeling",
  ],
  tech: ["CAD", "Parametric Modeling", "Technical Drawing", "Assembly Design"],
};

export default function GeneralCADSkills() {
  return (
    <ProjectDetailLayout
      {...PROJECT}
      extra={
        <>
        </>
      }
    />
  );
}