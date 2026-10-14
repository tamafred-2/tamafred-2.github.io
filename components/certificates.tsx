import Image from "next/image";
import { certificates } from "@/content/profile";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="section"
      aria-labelledby="certificates-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-index">04 / Certificates</p>
          <h2 id="certificates-title">
            Continuing to learn<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Course completions and
          <br className="desktop-break" /> community participation.
        </p>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.pdf}>
            <a
              className="certificate-preview"
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} certificate (PDF, opens in a new tab)`}
            >
              <Image
                src={certificate.preview}
                alt={`${certificate.title} certificate awarded to Alfred Tamayo`}
                width={certificate.width}
                height={certificate.height}
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) 50vw, 33vw"
              />
            </a>
            <div className="certificate-body">
              <div className="certificate-meta">
                <span>{certificate.type}</span>
                <time dateTime={certificate.date}>{certificate.dateLabel}</time>
              </div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="certificate-description">
                {certificate.description}
              </p>
              <a
                className="text-link"
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.title} certificate (PDF, opens in a new tab)`}
              >
                View certificate <span className="certificate-format">PDF</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
