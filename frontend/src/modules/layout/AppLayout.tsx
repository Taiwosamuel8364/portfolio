import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "./layout.css";

export function AppLayout() {
  return (
    <div className="layout-root">
      <header className="site-header">
        <nav className="nav">
          <NavLink to="/" end className="logo">
            <span className="mono">S</span>amuel
          </NavLink>
          <div className="links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact" className="cta">
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="main">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Samuel — Backend Developer</p>
      </footer>
    </div>
  );
}
