import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Profile = {
  name: string;
  role: string;
  email: string;
  location: string;
  links: Record<string, string>;
};

export function AboutPage() {
  // const reveal = {
  //   hidden: { opacity: 0, y: 16 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  return (
    <div className="grid" style={{ gap: 20 }}>
      <motion.section
        className="card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        // variants={reveal}
      >
        <h1 style={{ marginTop: 0 }}>About Me</h1>
        <p>
          I’m a backend engineer who designs and ships reliable APIs and data
          services. My focus is building scalable systems with Node.js, Express,
          PostgreSQL/MongoDB, robust authentication, observability, and
          performance in mind.
        </p>
        <p style={{ color: "var(--muted)" }}>
          I enjoy simplifying complex domains into clean architectures:
          domain-driven design, event-driven patterns, caching strategies, and
          resilient deployments with Docker and CI/CD. Recently, I’ve led
          efforts on API performance (p95 latency ↓ 40%), schema evolution, and
          production hardening around rate limiting and security.
        </p>
        {profile && (
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <div>
              <strong>Name:</strong> {profile.name}
            </div>
            <div>
              <strong>Role:</strong> {profile.role}
            </div>
            <div>
              <strong>Email:</strong> {profile.email}
            </div>
            <div>
              <strong>Location:</strong> {profile.location}
            </div>
          </div>
        )}
      </motion.section>

      <section
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}
      >
        <motion.div
          className="card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          // variants={reveal}
        >
          <h3 style={{ marginTop: 0 }}>Skills</h3>
          <div className="tags">
            {[
              "APIs",
              "Microservices",
              "GraphQL",
              "Socket.io",
              "Caching",
              "Message Queues",
              "Testing",
            ].map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          // variants={reveal}
        >
          <h3 style={{ marginTop: 0 }}>Links</h3>
          <div className="social-links">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="social-link"
              href={profile?.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="social-link"
              href={profile?.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="social-link"
              href={`mailto:${profile?.email}`}
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        // variants={reveal}
      >
        <h3 style={{ marginTop: 0 }}>Timeline</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
          <li>2022–Present: Backend Developer — building APIs and services</li>
          <li>2021–2022: Junior Developer — contributing to microservices</li>
          <li>2018–2022: B.Sc. Computer Engineering</li>
        </ul>
      </motion.section>
    </div>
  );
}
