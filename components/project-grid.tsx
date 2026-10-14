"use client";

import { useState } from "react";
import { categories, type Category, type Project } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Category | "All">("All");
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  const featuredSlugs = new Set(featured.map(({ slug }) => slug));
  const collection =
    selected === "All"
      ? projects.filter(({ slug }) => !featuredSlugs.has(slug))
      : projects.filter(({ categories }) => categories.includes(selected));
  return (
    <>
      <div className="project-grid featured-grid">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="collection-heading">
        <div>
          <h3 id="collection-title">Project collection</h3>
          <p>
            {selected === "All"
              ? "More web, mobile, and automation projects."
              : "Matching projects from across my work."}
          </p>
        </div>
        <p className="result-count" role="status" aria-live="polite">
          {collection.length} {collection.length === 1 ? "project" : "projects"}
        </p>
      </div>
      <div
        className="filters"
        role="group"
        aria-label="Filter project collection"
      >
        {(["All", ...categories] as const).map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={selected === category}
            aria-controls="project-results"
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        id="project-results"
        className="project-grid collection-grid"
        aria-labelledby="collection-title"
      >
        {collection.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
