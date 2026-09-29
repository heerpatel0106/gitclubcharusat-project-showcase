import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Github, ArrowRight, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { CategoryBadge, StatusBadge } from './ProjectBadge';
import ProjectThumbnail from './ProjectThumbnail';
import './FeaturedProject.css';

export default function FeaturedProject({ project }) {
  if (!project) return null;

  const {
    id,
    title,
    category,
    shortDescription,
    technologies = [],
    team = [],
    status,
    github,
    demo,
    highlights = [],
    stats = {}
  } = project;

  return (
    <div className="featured-spotlight-card">
      <div className="spotlight-visual-side">
        <ProjectThumbnail project={project} height="100%" />
        <div className="spotlight-badge-floating">
          <Star size={13} fill="#F59E0B" />
          <span>Spotlight Project</span>
        </div>
      </div>

      <div className="spotlight-info-side">
        {/* Badges */}
        <div className="spotlight-meta-header">
          <CategoryBadge category={category} />
          <StatusBadge status={status} />
          <span className="badge badge-sample">Sample Project</span>
        </div>

        {/* Project Name */}
        <h3 className="spotlight-title">
          <Link to={`/projects/${id}`}>{title}</Link>
        </h3>

        {/* Description */}
        <p className="spotlight-description">{shortDescription}</p>

        {/* Key Highlights Bullet points */}
        {highlights.length > 0 && (
          <ul className="spotlight-highlights-list">
            {highlights.map((h, i) => (
              <li key={i} className="highlight-item">
                <CheckCircle size={15} className="highlight-icon" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="spotlight-tech-container">
          <span className="spotlight-section-label">Tech Stack:</span>
          <div className="spotlight-tech-pills">
            {technologies.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="spotlight-team-row">
          <span className="spotlight-section-label">Creators:</span>
          <div className="spotlight-team-avatars">
            {team.map((member) => (
              <div key={member.name} className="spotlight-member-pill" title={`${member.name} - ${member.role}`}>
                <span className="spotlight-avatar">{member.avatar}</span>
                <span className="spotlight-member-name">{member.name}</span>
                <span className="spotlight-member-role">({member.role})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="spotlight-actions">
          <Link to={`/projects/${id}`} className="btn btn-primary btn-md">
            <span>Explore Project</span>
            <ArrowRight size={16} />
          </Link>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-md"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-md"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
