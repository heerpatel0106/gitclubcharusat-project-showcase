import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Star, Users } from 'lucide-react';
import { CategoryBadge, StatusBadge } from './ProjectBadge';
import ProjectThumbnail from './ProjectThumbnail';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const {
    id,
    title,
    category,
    shortDescription,
    technologies = [],
    team = [],
    status,
    featured,
    github,
    stats
  } = project;

  return (
    <article className="project-card showcase-card" aria-labelledby={`proj-title-${id}`}>
      {/* Card Thumbnail Banner */}
      <Link to={`/projects/${id}`} className="card-media-link" tabIndex={-1} aria-hidden="true">
        <ProjectThumbnail project={project} height="190px" />
        <div className="card-media-overlay">
          <span className="view-detail-hint">
            <span>View Case Study</span>
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="card-content">
        {/* Badges Row */}
        <div className="card-badges-row">
          <CategoryBadge category={category} />
          <StatusBadge status={status} />
          {featured && (
            <span className="badge badge-featured">
              <Star size={11} fill="#F59E0B" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="card-title" id={`proj-title-${id}`}>
          <Link to={`/projects/${id}`} className="card-title-link">
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="card-description">{shortDescription}</p>

        {/* Technologies Tags */}
        <div className="card-tech-list" aria-label="Technologies used">
          {technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="tech-tag-more">+{technologies.length - 4}</span>
          )}
        </div>

        {/* Card Footer: Team & Actions */}
        <div className="card-footer-row">
          {/* Team Avatars & Info */}
          <div className="team-preview" title={`Team: ${team.map(m => m.name).join(', ')}`}>
            <div className="avatar-group">
              {team.slice(0, 3).map((member, i) => (
                <div
                  key={member.name}
                  className="member-avatar-chip"
                  style={{ zIndex: 3 - i }}
                  title={`${member.name} (${member.role})`}
                >
                  {member.avatar}
                </div>
              ))}
            </div>
            <span className="team-count-text">
              {team.length} {team.length === 1 ? 'creator' : 'creators'}
            </span>
          </div>

          {/* Action Links */}
          <div className="card-actions-group">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-action-btn github-icon-btn"
                aria-label={`View ${title} repository on GitHub`}
                title="View GitHub Repository"
              >
                <Github size={16} />
              </a>
            )}
            <Link
              to={`/projects/${id}`}
              className="card-action-btn view-project-btn"
              aria-label={`Explore ${title} details`}
            >
              <span>Explore</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
