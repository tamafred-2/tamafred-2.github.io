import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCover({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (project.cover)
    return (
      <div className={`project-cover ${large ? "cover-large" : ""}`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          className="cover-image"
        />
      </div>
    );
  return (
    <div
      className={`project-cover ${large ? "cover-large" : ""}`}
      aria-hidden="true"
    >
      <span className="cover-label">
        {project.visibility === "private"
          ? "Private team project"
          : "Project / overview"}
      </span>
      <span className="cover-wordmark">
        {project.coverTitle}
        <span className="accent">.</span>
      </span>
      <span className="cover-caption">{project.context}</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectCover project={project} />
      <div className="card-body">
        <p className="eyebrow">{project.context}</p>
        <h3>
          <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
        </h3>
        <p className="card-summary">{project.summary}</p>
        <ul className="tags" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          className="text-link card-link"
          href={`/projects/${project.slug}/`}
          aria-label={`View project: ${project.title}`}
        >
          View project <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
