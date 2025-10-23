import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string | null;
  category?: string;
  status?: string;
  image?: string;
};

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState("All");

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const base = projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
    if (tech === "All") return base;
    return base.filter((p) => p.technologies.includes(tech));
  }, [projects, query, tech]);

  return (
    <div className="grid" style={{ gap: 16 }}>
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>Projects</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              background: "var(--card)",
              color: "var(--text)",
              border: "1px solid rgba(255,255,255,.12)",
              padding: "10px 12px",
              borderRadius: 10,
            }}
          />
          <select
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            style={{
              background: "var(--card)",
              color: "var(--text)",
              border: "1px solid rgba(255,255,255,.12)",
              padding: "10px 12px",
              borderRadius: 10,
            }}
          >
            {[
              "All",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "Socket.io",
              "JWT",
            ].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {filtered.map((p, idx) => (
          <motion.article
            className="card"
            key={p.id}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, delay: idx * 0.05 },
              },
            }}
          >
            {p.image && (
              <div style={{ marginBottom: 10 }}>
                <img
                  src={
                    p.image.startsWith("http") ? p.image : `/images/${p.image}`
                  }
                  alt={`${p.title} screenshot`}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/images/project-placeholder.jpg";
                  }}
                />
              </div>
            )}
            <h3 style={{ marginTop: 0 }}>{p.title}</h3>
            <p style={{ color: "var(--muted)" }}>{p.description}</p>
            <div className="tags">
              {p.technologies.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <a
                className="btn"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              {p.live && (
                <a
                  className="btn primary"
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </motion.article>
        ))}
        {filtered.length === 0 && (
          <div
            className="card"
            style={{ gridColumn: "1 / -1", textAlign: "center" }}
          >
            <p style={{ color: "var(--muted)" }}>
              No projects match your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
