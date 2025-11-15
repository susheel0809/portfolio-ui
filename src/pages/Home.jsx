import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/sampleProjects.json";
import ProjectCard from "../components/public/ProjectCard";

export default function Home() {
  const featured = projects.slice(0, 2);
  return (
    <div>
      {/* <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
          <p className="mt-4 text-gray-700">
            I build web apps using Spring Boot and React. I teach yoga and build
            digital experiences for wellness.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="btn-primary px-4 py-2 rounded">
              Contact me
            </Link>
            <Link to="/projects" className="px-4 py-2 rounded border">
              View projects
            </Link>
          </div>
        </div>
        <div>
          <div className="grid gap-4">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section> */}
    </div>
  );
}
