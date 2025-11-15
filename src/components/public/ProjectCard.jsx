import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-0">
      <img
        src={project.image_url}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="text-sm mt-2 line-clamp-3">{project.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {project.tech_stack?.join(" • ")}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
