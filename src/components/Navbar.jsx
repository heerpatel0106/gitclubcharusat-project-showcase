import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code2, ArrowUpRight, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="app-container navbar-container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar-brand" aria-label="Git Club CHARUSAT Home">
          <div className="brand-icon-wrapper">
            <Code2 size={20} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Git Club</span>
            <span className="brand-subtag">CHARUSAT</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Categories
          </NavLink>
        </nav>

        {/* Right Action CTA */}
        <div className="navbar-actions">
          <Link to="/projects" className="btn btn-primary btn-sm nav-cta-btn">
            <span>Explore Projects</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-inner app-container">
          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
            >
              Categories
            </NavLink>
          </nav>

          <div className="mobile-nav-footer">
            <Link to="/projects" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              <span>Explore All Projects</span>
              <ArrowUpRight size={18} />
            </Link>
            <p className="mobile-menu-note">
              A student community project portfolio at CHARUSAT
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
