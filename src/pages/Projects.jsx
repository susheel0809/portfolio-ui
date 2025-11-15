import React from "react";
import ProjectCard from "../components/public/ProjectCard";
import projects from "../data/sampleProjects.json";

export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
