import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Github, ExternalLink, Share2, Check, 
  Layers, AlertCircle, Sparkles, CheckCircle2, ChevronRight,
  Code2, Users, Calendar, ShieldCheck, Terminal, Cpu, Info
} from 'lucide-react';
import { getProjectById, getAllProjects } from '../data/projectsData';
import { CategoryBadge, StatusBadge } from '../components/ProjectBadge';
import ProjectThumbnail from '../components/ProjectThumbnail';
import ProjectCard from '../components/ProjectCard';
import './ProjectDetailPage.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = getProjectById(id);
  const [copied, setCopied] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState(0);

  // If project is not found: Graceful fallback error state
  if (!project) {
    return (
      <div className="app-container not-found-project-container">
        <div className="not-found-card">
          <div className="not-found-icon-box">
            <AlertCircle size={44} />
          </div>
          <h1 className="not-found-title">Project Not Found</h1>
          <p className="not-found-text">
            We couldn't locate a Git Club showcase project with ID "<code>{id}</code>". It may have been renamed, moved, or the link may be outdated.
          </p>
          <div className="not-found-actions">
            <Link to="/projects" className="btn btn-primary btn-md">
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>
            <Link to="/" className="btn btn-secondary btn-md">
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const {
    title,
    category,
    shortDescription,
    fullDescription,
    problem,
    solution,
    howItWorks = [],
    technologies = [],
    team = [],
    status,
    github,
    demo,
    highlights = [],
    createdAt,
    stats = {}
  } = project;

  // Find related projects in same category
  const relatedProjects = getAllProjects()
    .filter((p) => p.category === category && p.id !== project.id)
    .slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Mock gallery screens/tabs for visual inspection
  const galleryViews = [
    { label: "Architecture View", desc: "System diagram & modular data flow" },
    { label: "Interface Layout", desc: "User interface components & interaction states" },
    { label: "Data Pipeline", desc: "Input handling, transformation & telemetry" }
  ];

  return (
    <div className="project-detail-root">
      {/* 1. BREADCRUMBS & TOP NAV */}
      <section className="detail-breadcrumb-bar">
        <div className="app-container">
          <div className="breadcrumb-nav-wrapper">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/projects" className="breadcrumb-crumb link-crumb">
                Projects
              </Link>
              <ChevronRight size={14} className="breadcrumb-sep" />
              <Link
                to={`/projects?category=${encodeURIComponent(category)}`}
                className="breadcrumb-crumb link-crumb"
              >
                {category}
              </Link>
              <ChevronRight size={14} className="breadcrumb-sep" />
              <span className="breadcrumb-crumb current-crumb" aria-current="page">
                {title}
              </span>
            </nav>

            <Link to="/projects" className="back-to-projects-link">
              <ArrowLeft size={15} />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROJECT HERO HEADER */}
      <header className="project-hero-header">
        <div className="app-container">
          <div className="header-meta-pills">
            <CategoryBadge category={category} />
            <StatusBadge status={status} />
            <span className="badge badge-sample">Sample Showcase</span>
            {project.featured && (
              <span className="badge badge-featured">Featured Project</span>
            )}
          </div>

          <h1 className="project-main-title">{title}</h1>
          <p className="project-tagline">{shortDescription}</p>

          <div className="project-header-actions">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-md"
              >
                <Github size={17} />
                <span>View on GitHub</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md"
              >
                <ExternalLink size={17} />
                <span>Launch Demo</span>
              </a>
            )}
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={handleShare}
              title="Copy share link"
            >
              {copied ? (
                <>
                  <Check size={16} style={{ color: 'var(--success)' }} />
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={16} />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO VISUAL BANNER */}
      <section className="detail-visual-banner-section">
        <div className="app-container">
          <div className="detail-visual-card">
            <ProjectThumbnail project={project} height="360px" />
            <div className="visual-caption-bar">
              <div className="caption-text">
                <Code2 size={15} />
                <span>Interactive Visual Mockup &amp; Architecture Spec</span>
              </div>
              <div className="caption-tags">
                <span>{project.technologies.slice(0, 3).join(' • ')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN TWO-COLUMN EDITORIAL CONTENT */}
      <div className="app-container detail-editorial-layout">
        {/* Left Column: Narrative Content */}
        <main className="editorial-main-flow">
          {/* Section: The Problem */}
          <section className="editorial-card problem-card">
            <div className="editorial-heading-row">
              <div className="editorial-icon-badge icon-problem">
                <Info size={18} />
              </div>
              <div>
                <span className="editorial-section-tag">Context &amp; Challenge</span>
                <h2 className="editorial-section-title">The Problem</h2>
              </div>
            </div>
            <p className="editorial-prose">{problem}</p>
          </section>

          {/* Section: The Solution */}
          <section className="editorial-card solution-card">
            <div className="editorial-heading-row">
              <div className="editorial-icon-badge icon-solution">
                <Sparkles size={18} />
              </div>
              <div>
                <span className="editorial-section-tag">Architecture &amp; Strategy</span>
                <h2 className="editorial-section-title">The Solution</h2>
              </div>
            </div>
            <p className="editorial-prose">{solution}</p>
            {fullDescription && fullDescription !== solution && (
              <p className="editorial-prose secondary-prose">{fullDescription}</p>
            )}

            {highlights.length > 0 && (
              <div className="highlights-box">
                <h4 className="highlights-box-title">Key Engineering Highlights</h4>
                <ul className="highlights-checklist">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="highlight-check-item">
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Section: How It Works */}
          <section className="editorial-card how-it-works-card">
            <div className="editorial-heading-row">
              <div className="editorial-icon-badge icon-workflow">
                <Layers size={18} />
              </div>
              <div>
                <span className="editorial-section-tag">Implementation Workflow</span>
                <h2 className="editorial-section-title">How It Works</h2>
              </div>
            </div>

            <div className="steps-vertical-flow">
              {howItWorks.map((stepItem, index) => (
                <div key={index} className="workflow-step-item">
                  <div className="step-number-bubble">{stepItem.step || index + 1}</div>
                  <div className="step-content-body">
                    <h3 className="step-title">{stepItem.title}</h3>
                    <p className="step-description">{stepItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Visual Gallery / Interface Wireframes */}
          <section className="editorial-card gallery-card">
            <div className="editorial-heading-row">
              <div className="editorial-icon-badge icon-gallery">
                <Terminal size={18} />
              </div>
              <div>
                <span className="editorial-section-tag">Visual Walkthrough</span>
                <h2 className="editorial-section-title">Interface &amp; Pipeline Previews</h2>
              </div>
            </div>

            <div className="gallery-tabs-header">
              {galleryViews.map((tab, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`gallery-tab-btn ${activeGalleryTab === idx ? 'gallery-tab-active' : ''}`}
                  onClick={() => setActiveGalleryTab(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="gallery-viewport-display">
              <div className="gallery-mock-terminal">
                <div className="terminal-top">
                  <span className="terminal-badge">
                    {galleryViews[activeGalleryTab].label}
                  </span>
                  <span className="terminal-sub">
                    {galleryViews[activeGalleryTab].desc}
                  </span>
                </div>
                <div className="terminal-inner-view">
                  <div className="code-block-mock">
                    <span className="comment-line">
                      // {title} — {galleryViews[activeGalleryTab].label}
                    </span>
                    <span className="code-row">
                      <span className="c-blue">const</span> instance = <span className="c-green">initializeModule</span>('{id}', &#123;
                    </span>
                    <span className="code-row code-indent-1">
                      category: '{category}',
                    </span>
                    <span className="code-row code-indent-1">
                      environment: 'production',
                    </span>
                    <span className="code-row code-indent-1">
                      status: '{status}',
                    </span>
                    <span className="code-row code-indent-1">
                      stack: [{technologies.map(t => `'${t}'`).join(', ')}]
                    </span>
                    <span className="code-row">&#125;);</span>
                    <span className="code-row">
                      <span className="c-purple">await</span> instance.<span className="c-green">executePipeline</span>();
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Right Column: Project Sidebar */}
        <aside className="editorial-sidebar">
          {/* Quick Info Box */}
          <div className="sidebar-card info-summary-card">
            <h3 className="sidebar-card-title">Project Metadata</h3>

            <div className="summary-data-table">
              <div className="summary-data-row">
                <span className="summary-label">Status</span>
                <StatusBadge status={status} />
              </div>
              <div className="summary-data-row">
                <span className="summary-label">Category</span>
                <span className="summary-value">{category}</span>
              </div>
              <div className="summary-data-row">
                <span className="summary-label">Date Published</span>
                <span className="summary-value">{createdAt}</span>
              </div>
              <div className="summary-data-row">
                <span className="summary-label">Community</span>
                <span className="summary-value">Git Club CHARUSAT</span>
              </div>
              <div className="summary-data-row">
                <span className="summary-label">License</span>
                <span className="summary-value">MIT Open Source</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Box */}
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Technologies</h3>
            <div className="sidebar-tech-wrap">
              {technologies.map((tech) => (
                <span key={tech} className="tech-tag sidebar-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team Members Card */}
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Project Contributors</h3>
            <p className="sidebar-card-hint">
              Student builders who designed, engineered, and maintained this build.
            </p>
            <div className="team-members-list">
              {team.map((member) => (
                <div key={member.name} className="member-detail-row">
                  <div className="member-avatar-box">{member.avatar}</div>
                  <div className="member-info-col">
                    <span className="member-name">{member.name}</span>
                    <span className="member-role">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links & Repository Actions */}
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Repository &amp; Live URLs</h3>
            <div className="sidebar-links-col">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md sidebar-link-btn"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={14} className="link-ext-icon" />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-md sidebar-link-btn"
                >
                  <ExternalLink size={16} />
                  <span>Live Project Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Community Notice disclaimer */}
          <div className="sidebar-disclaimer-box">
            <ShieldCheck size={16} className="disclaimer-icon" />
            <p>
              This is a demonstration project case study built for the Git Club CHARUSAT Website Challenge.
            </p>
          </div>
        </aside>
      </div>

      {/* 5. RELATED PROJECTS SECTION */}
      {relatedProjects.length > 0 && (
        <section className="related-projects-section">
          <div className="app-container">
            <div className="section-header">
              <span className="section-label">More in {category}</span>
              <h2 className="section-title">Similar Community Projects</h2>
            </div>
            <div className="secondary-featured-grid">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM NAVIGATION BAR */}
      <div className="app-container bottom-nav-action-bar">
        <Link to="/projects" className="btn btn-secondary btn-md">
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </Link>
        <Link to="/categories" className="btn btn-outline-primary btn-md">
          <span>Explore Other Tracks</span>
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
