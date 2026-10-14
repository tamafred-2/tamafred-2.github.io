import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ProjectCover } from "@/components/project-card";
import { ScreenshotCarousel } from "@/components/screenshot-carousel";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}/`,
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.summary,
    },
  };
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      <ul className="prose-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main id="main-content" className="container detail-page">
      <Link className="text-link back-link" href="/#work">
        <span aria-hidden="true">←</span> Back to projects
      </Link>
      <header className="detail-header">
        <p className="eyebrow section-index">{project.context}</p>
        <h1>
          {project.title}
          <span className="accent">.</span>
        </h1>
        <p className="detail-summary">{project.summary}</p>
        <ul className="tags" aria-label="Project categories">
          {project.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </header>
      {project.screenshots.length > 0 ? (
        <ScreenshotCarousel
          key={project.slug}
          images={project.screenshots}
          projectTitle={project.title}
        />
      ) : (
        <ProjectCover project={project} large />
      )}
      <div className="detail-layout">
        <div>
          <section className="detail-section">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
          {project.problem && (
            <section className="detail-section">
              <h2>The focus</h2>
              <p>{project.problem}</p>
            </section>
          )}
          <DetailList title="My contribution" items={project.contributions} />
          <DetailList title="Selected features" items={project.features} />
          <DetailList
            title="Planned direction"
            items={project.plannedFeatures}
          />
          <DetailList
            title="Lessons & next steps"
            items={project.lessons ?? []}
          />
        </div>
        <aside className="project-facts" aria-label="Project information">
          <h2>Project notes</h2>
          {project.role && (
            <div>
              <h3>Role</h3>
              <p>{project.role}</p>
            </div>
          )}
          {project.visibility === "private" && (
            <div>
              <h3>Access</h3>
              <p>
                Private team project at Outsoar PH. Source code and internal
                systems are not public.
              </p>
            </div>
          )}
          {project.status && (
            <div>
              <h3>Status</h3>
              <p>{project.status.replace("-", " ")}</p>
            </div>
          )}
          <div>
            <h3>Technology</h3>
            <ul className="tags">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.stackNote && (
              <p className="stack-note">{project.stackNote}</p>
            )}
          </div>
          {(project.repositoryUrl || project.demoUrl) && (
            <div className="actions">
              {project.repositoryUrl && project.visibility === "public" && (
                <a className="text-link" href={project.repositoryUrl}>
                  View source ↗
                </a>
              )}
              {project.demoUrl && (
                <a className="text-link" href={project.demoUrl}>
                  Visit project ↗
                </a>
              )}
            </div>
          )}
        </aside>
      </div>
      <div className="detail-bottom">
        <Link className="button button-secondary" href="/#work">
          ← Explore all projects
        </Link>
      </div>
    </main>
  );
}
