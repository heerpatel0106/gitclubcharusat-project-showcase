import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Compass, Lightbulb, Users, 
  Github, Terminal, Layers, Star, Code2, ShieldAlert 
} from 'lucide-react';
import HeroMockup from '../components/HeroMockup';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import CategoryCard from '../components/CategoryCard';
import { 
  getAllProjects, 
  getFeaturedProjects, 
  CATEGORIES, 
  getCategoryCounts 
} from '../data/projectsData';
import './HomePage.css';

export default function HomePage() {
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();
  const categoryCounts = getCategoryCounts();

  // Primary featured spotlight is the first one (CampusConnect)
  const spotlightProject = featuredProjects[0] || allProjects[0];
  // Other featured projects (approx 2 more)
  const secondaryFeatured = featuredProjects.slice(1, 3);

  const scrollToFeatured = (e) => {
    e.preventDefault();
    const elem = document.getElementById('featured-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page-root">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="app-container hero-container">
          <div className="hero-grid">
            {/* Left Content Column */}
            <div className="hero-content">
              {/* Badge */}
              <div className="hero-announcement-badge">
                <span className="badge-pulse-indicator"></span>
                <span>Git Club CHARUSAT Showcase</span>
                <span className="badge-sep">/</span>
                <span className="badge-highlight">Problem Statement 3</span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title">
                See What We <span className="text-gradient-blue">Build.</span>
              </h1>

              {/* Supporting Text */}
              <p className="hero-subtitle">
                Explore projects created by the Git Club community — from web experiences and AI tools to creative experiments and campus solutions.
              </p>

              {/* Action Buttons */}
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary btn-lg hero-cta-btn">
                  <span>Explore Projects</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#featured-section"
                  onClick={scrollToFeatured}
                  className="btn btn-secondary btn-lg"
                >
                  <Star size={18} className="star-icon" />
                  <span>View Featured</span>
                </a>
              </div>

              {/* Micro-metrics */}
              <div className="hero-stats-row">
                <div className="stat-pill">
                  <strong>{allProjects.length}</strong>
                  <span>Projects Online</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-pill">
                  <strong>5</strong>
                  <span>Tech Domains</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-pill">
                  <strong>100%</strong>
                  <span>Open Source</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="hero-visual-wrapper">
              <HeroMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION SECTION */}
      <section className="value-prop-section">
        <div className="app-container">
          <div className="section-header">
            <span className="section-label">Centralized Hub</span>
            <h2 className="section-title">One place for everything we build.</h2>
            <p className="section-subtitle">
              Never lose track of community code scattered across individual repositories, socials, or student drives. Discover the purpose, architecture, and minds behind every build.
            </p>
          </div>

          <div className="value-blocks-grid">
            {/* Block 1: Discover */}
            <div className="value-block-card">
              <div className="value-icon-box vb-blue">
                <Compass size={24} />
              </div>
              <h3 className="value-block-title">Discover</h3>
              <p className="value-block-desc">
                Explore projects across different categories — from full-stack web platforms to machine learning and embedded hardware.
              </p>
              <Link to="/projects" className="value-block-link">
                <span>Browse catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Block 2: Understand */}
            <div className="value-block-card">
              <div className="value-icon-box vb-purple">
                <Lightbulb size={24} />
              </div>
              <h3 className="value-block-title">Understand</h3>
              <p className="value-block-desc">
                See the problem, solution, architecture, and technology behind each project through structured case studies.
              </p>
              <Link to={`/projects/${spotlightProject.id}`} className="value-block-link">
                <span>See sample study</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Block 3: Connect */}
            <div className="value-block-card">
              <div className="value-icon-box vb-teal">
                <Users size={24} />
              </div>
              <h3 className="value-block-title">Connect</h3>
              <p className="value-block-desc">
                Meet the people who built them, explore their contributions, inspect their source repositories, or try live web demos.
              </p>
              <a
                href="https://github.com/gitclub-charusat"
                target="_blank"
                rel="noopener noreferrer"
                className="value-block-link"
              >
                <span>Visit community</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES EXPLORATION SECTION */}
      <section className="categories-preview-section">
        <div className="app-container">
          <div className="section-header-row">
            <div>
              <span className="section-label">Browse By Track</span>
              <h2 className="section-title">Explore by Category</h2>
              <p className="section-subtitle">
                Find exactly what interests you across our core engineering tracks.
              </p>
            </div>
            <Link to="/categories" className="btn btn-secondary btn-sm view-all-cats-btn">
              <span>All Categories</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="categories-grid">
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                projectCount={categoryCounts[category.id] || 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="featured-section" className="featured-section">
        <div className="app-container">
          <div className="section-header">
            <span className="section-label">Curated Showcase</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              High-impact solutions engineered by Git Club members to address university life, healthcare guidance, and sustainability.
            </p>
          </div>

          {/* Primary Spotlight Featured Card */}
          <FeaturedProject project={spotlightProject} />

          {/* Secondary Featured Cards Grid */}
          <div className="secondary-featured-grid">
            {secondaryFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom Explore All CTA */}
          <div className="featured-bottom-cta">
            <Link to="/projects" className="btn btn-primary btn-lg">
              <span>View All {allProjects.length} Community Projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY INVITATION BANNER */}
      <section className="community-banner-section">
        <div className="app-container">
          <div className="community-banner-card">
            <div className="banner-text">
              <span className="banner-subtag">Git Club CHARUSAT</span>
              <h2 className="banner-title">Have a project to showcase?</h2>
              <p className="banner-desc">
                Whether you built a weekend hackathon MVP, an embedded IoT gadget, or a full-stack open-source library, add your build to the community directory.
              </p>
            </div>
            <div className="banner-actions">
              <a
                href="https://github.com/gitclub-charusat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg"
              >
                <Github size={18} />
                <span>Submit on GitHub</span>
              </a>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                <span>Explore Directory</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
