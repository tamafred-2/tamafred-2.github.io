import type { Metadata } from "next";
import Image from "next/image";
import { education, experience, profile, skills } from "@/content/profile";
import { projects } from "@/content/projects";
import { ProjectGrid } from "@/components/project-grid";
import { ContactMethods } from "@/components/contact-methods";
import { Certificates } from "@/components/certificates";
import { GitHubActivity } from "@/components/github-activity";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content" className="container">
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">
            <span aria-hidden="true" className="red-line" /> Hello, I’m{" "}
            {profile.name}
          </p>
          <h1 id="intro-title">
            {profile.title.split(" ").slice(0, -1).join(" ")}
            <br />
            <span className="accent">{profile.title.split(" ").at(-1)}.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="actions">
            <a className="button button-primary" href="#work">
              View projects <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={profile.githubUrl}>
              GitHub <span aria-hidden="true">↗</span>
            </a>
            {profile.resume && (
              <a
                className="button button-secondary"
                href={profile.resume.url}
                download
              >
                {profile.resume.label}
              </a>
            )}
          </div>
          <p className="hero-location">{profile.location}</p>
        </div>
        <figure className="hero-portrait">
          <Image {...profile.portrait} alt={profile.portrait.alt} loading="eager" className="graduation-picture" />
          <figcaption>
            <span className="portrait-name">{profile.name}</span>
            <span>{education.degree}</span>
          </figcaption>
        </figure>
      </section>
      <section id="work" className="section" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-index">01 / Selected work</p>
            <h2 id="work-title">
              Projects with a purpose<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Web systems, mobile apps,
            <br className="desktop-break" /> and automation.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>
      <section
        id="experience"
        className="section split-section"
        aria-labelledby="experience-title"
      >
        <div>
          <p className="eyebrow section-index">02 / Experience</p>
          <h2 id="experience-title">
            Learning through
            <br />
            real work<span className="accent">.</span>
          </h2>
        </div>
        <article className="experience-entry">
          <p className="eyebrow">{experience.period}</p>
          <h3>{experience.title}</h3>
          <p className="company">
            {experience.company} <span aria-hidden="true">/</span>{" "}
            {experience.location}
          </p>
          <p>{experience.description}</p>
          <ul className="prose-list">
            {experience.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="section" aria-labelledby="skills-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-index">03 / Skills & tools</p>
            <h2 id="skills-title">
              My development toolkit<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Technologies I work with
            <br className="desktop-break" /> and explore through projects.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((group) => (
            <div key={group.name} className="skill-row">
              <h3>{group.name}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Certificates />
      <section
        id="about"
        className="section split-section"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow section-index">05 / A little about me</p>
          <h2 id="about-title">
            Curious by default<span className="accent">.</span>
          </h2>
        </div>
        <div className="about-body">
          <p>{profile.about}</p>
          <div className="education">
            <p className="eyebrow">Education</p>
            <h3>{education.degree}</h3>
            <p>{education.major}</p>
            <p>{education.university}</p>
            <p className="recognition">{education.recognition}</p>
          </div>
          <div className="education">
            <p className="eyebrow">Senior high school</p>
            <h3>{education.seniorHigh.track}</h3>
            <p>{education.seniorHigh.school}</p>
          </div>
        </div>
      </section>
      <GitHubActivity />
      <section
        id="contact"
        className="section contact-section"
        aria-labelledby="contact-title"
      >
        <div>
          <p className="eyebrow section-index">07 / Contact</p>
          <h2 id="contact-title">
            Let’s connect<span className="accent">.</span>
          </h2>
          <p>
            Interested in my work or have a project to discuss?
            <br className="desktop-break" /> Send an email or find me online.
          </p>
        </div>
        <ContactMethods />
      </section>
    </main>
  );
}
