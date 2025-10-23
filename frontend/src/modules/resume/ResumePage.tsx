import { motion } from "framer-motion";

export function ResumePage() {
  // const reveal = {
  //   hidden: { opacity: 0, y: 16 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };
  return (
    <div className="grid" style={{ gap: 16 }}>
      <motion.section
        className="card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        // variants={reveal}
      >
        <h1 style={{ marginTop: 0 }}>Resume</h1>
        <p>Download my resume or browse key experience and projects below.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            className="btn primary"
            href="/downloads/Samuel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
          <a className="btn" href="/downloads/Samuel_Resume.pdf" download>
            Quick Download
          </a>
        </div>
      </motion.section>

      <section
        className="grid"
        style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        <motion.div
          className="card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          // variants={reveal}
        >
          <h3 style={{ marginTop: 0 }}>Preview</h3>
          <div
            style={{
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 10,
              overflow: "hidden",
              height: 500,
            }}
          >
            <iframe
              title="Resume Preview"
              src="/downloads/Samuel_Resume.pdf#view=fitH"
              style={{ width: "100%", height: "100%", border: "0" }}
            />
          </div>
        </motion.div>
        <div style={{ display: "grid", gap: 16 }}>
          <motion.div
            className="card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            // variants={reveal}
          >
            <h3 style={{ marginTop: 0 }}>Experience</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>
                <strong>Backend Developer</strong> (2022–Present) — Node.js,
                APIs, databases
              </li>
              <li>
                <strong>Junior Developer</strong> (2021–2022) — web apps,
                microservices
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            // variants={reveal}
          >
            <h3 style={{ marginTop: 0 }}>Education</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>B.Sc. Computer Engineering — Obafemi Awolowo University</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="card"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        // variants={reveal}
      >
        <h3 style={{ marginTop: 0 }}>Skills Matrix</h3>
        <div className="tags">
          {[
            "Node.js",
            "Express",
            "REST",
            "GraphQL",
            "Socket.io",
            "MongoDB",
            "PostgreSQL",
            "Redis",
            "Docker",
            "AWS",
            "Jest",
            "Mocha",
          ].map((s) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
