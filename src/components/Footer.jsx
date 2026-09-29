import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Instagram, Heart, ExternalLink, ShieldCheck } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="app-container footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Mission */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand">
              <div className="footer-icon-wrapper">
                <Code2 size={20} />
              </div>
              <div>
                <span className="footer-brand-name">Git Club</span>
                <span className="footer-brand-sub">CHARUSAT</span>
              </div>
            </Link>
            <p className="footer-tagline">
              A vibrant community of student developers, designers, and innovators at Charotar University of Science and Technology building solutions for campus and beyond.
            </p>
            <div className="footer-social-links">
              <a
                href="https://github.com/gitclub-charusat"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Git Club GitHub Organization"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/company/gitclub-charusat"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Git Club LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/gitclub_charusat"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Git Club Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Project Explorer</Link>
              </li>
              <li>
                <Link to="/categories">Browse Categories</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Domains</h4>
            <ul className="footer-list">
              <li>
                <Link to="/projects?category=Web%20Development">Web Development</Link>
              </li>
              <li>
                <Link to="/projects?category=AI%20%2F%20ML">AI & Machine Learning</Link>
              </li>
              <li>
                <Link to="/projects?category=App%20Development">App Development</Link>
              </li>
              <li>
                <Link to="/projects?category=IoT">IoT & Hardware</Link>
              </li>
              <li>
                <Link to="/projects?category=Design">UI/UX & Design</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Showcase Info */}
          <div className="footer-info-col">
            <h4 className="footer-heading">Showcase Info</h4>
            <div className="showcase-info-box">
              <ShieldCheck size={16} className="showcase-info-icon" />
              <p>
                <strong>Community Portfolio:</strong> This platform centralizes software experiments and solutions developed during Git Club hackathons, study sprints, and open-source programs.
              </p>
            </div>
            <p className="footer-demo-note">
              *Projects and contributor roles displayed are demonstration mockups created for the Git Club Website Challenge (Problem Statement 3).
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Git Club CHARUSAT. All projects belong to their respective student creators.
          </p>
          <div className="footer-bottom-meta">
            <span>Built with React + Vite</span>
            <span className="dot-divider">&bull;</span>
            <span>Designed for Community Innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
