import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../layout/layout.css";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string | null;
  image: string;
};

export function HomePage() {
  // const reveal = {
  //   hidden: { opacity: 0, y: 16 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data: Project[]) => setProjects(data.filter((p) => p)))
      .catch(() => setProjects([]));
  }, []);

  return (
    <div className="grid" style={{ gap: 28 }}>
      <section className="hero">
        <div>
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            // variants={reveal}
          >
            Hi, I'm Samuel
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            // variants={reveal}
          >
            Backend Developer & API Architect crafting robust services with
            Node.js, Express, and modern databases. I care about clarity,
            performance, and DX— from schema design and caching to monitoring
            and graceful failure.
          </motion.p>
          <div className="tags" style={{ marginBottom: 8 }}>
            {[
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Docker",
            ].map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="actions">
            <a className="btn primary" href="/projects">
              View Projects
            </a>
            <a className="btn" href="/contact">
              Contact Me
            </a>
            <a
              className="btn"
              href="/downloads/Samuel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
        <motion.div
          className="hero-media"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.96 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          <div
            className="card"
            style={{ display: "grid", placeItems: "center", padding: "28px" }}
          >
            <div className="avatar-wrap">
              <img
                className="avatar"
                src="/images/profile.jpg"
                alt="Samuel Profile"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = "/vite.svg";
                }}
              />
            </div>
            <h3 style={{ marginTop: 0 }}>Quick Stats</h3>
            <div
              className="grid"
              style={{ gridTemplateColumns: "repeat(4,1fr)" }}
            >
              <div>
                <h2 style={{ margin: 0 }}>3+</h2>
                <span className="muted">Years</span>
              </div>
              <div>
                <h2 style={{ margin: 0 }}>15+</h2>
                <span className="muted">Projects</span>
              </div>
              <div>
                <h2 style={{ margin: 0 }}>10+</h2>
                <span className="muted">APIs</span>
              </div>
              <div>
                <h2 style={{ margin: 0 }}>24/7</h2>
                <span className="muted">Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="grid"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <motion.div
          className="card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          // variants={reveal}
        >
          <h3 style={{ marginTop: 0 }}>Services</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
            <li>RESTful API design and implementation</li>
            <li>Database schema and performance tuning</li>
            <li>WebSocket and real-time features</li>
          </ul>
        </motion.div>
        <motion.div
          className="card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          // variants={reveal}
        >
          <h3 style={{ marginTop: 0 }}>Tech</h3>
          <div className="tags">
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "Docker",
            ].map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          // variants={reveal}
        >
          <h3 style={{ marginTop: 0 }}>Contact</h3>
          <p style={{ color: "var(--muted)" }}>
            Available for freelance and full-time roles. Let’s discuss your
            project.
          </p>
          <a className="btn primary" href="/contact">
            Get In Touch
          </a>
        </motion.div>
      </section>

      <section>
        <h2 style={{ margin: "6px 0 12px" }}>Featured Projects</h2>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {projects.slice(0, 3).map((p, idx) => (
            <motion.article
              className="card"
              key={p.id}
              whileHover={{ y: -4 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, delay: idx * 0.06 },
                },
              }}
            >
              <h3 style={{ marginTop: 0 }}>{p.title}</h3>
              <p style={{ color: "var(--muted)" }}>
                {p.description.slice(0, 120)}...
              </p>
              <div className="tags">
                {p.technologies.slice(0, 4).map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                <a className="btn" href={p.github} target="_blank">
                  View Code
                </a>
                {p.live && (
                  <a className="btn primary" href={p.live} target="_blank">
                    Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
