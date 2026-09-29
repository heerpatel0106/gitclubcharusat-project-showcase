import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Brain, Smartphone, Cpu, Palette, ArrowRight } from 'lucide-react';
import './CategoryCard.css';

const ICON_MAP = {
  'Web Development': Globe,
  'AI / ML': Brain,
  'App Development': Smartphone,
  'IoT': Cpu,
  'Design': Palette
};

export default function CategoryCard({ category, projectCount = 0 }) {
  const IconComponent = ICON_MAP[category.id] || Globe;

  return (
    <Link
      to={`/projects?category=${encodeURIComponent(category.id)}`}
      className="category-explore-card"
      aria-label={`Explore ${category.name} projects (${projectCount} projects)`}
    >
      <div className="cat-card-header">
        <div
          className="cat-icon-box"
          style={{
            backgroundColor: `${category.accentColor}18`,
            color: category.accentColor,
            borderColor: `${category.accentColor}30`
          }}
        >
          <IconComponent size={24} />
        </div>
        <span className="cat-count-pill">
          {projectCount} {projectCount === 1 ? 'project' : 'projects'}
        </span>
      </div>

      <h3 className="cat-card-title">{category.name}</h3>
      <p className="cat-card-desc">{category.description}</p>

      <div className="cat-card-footer" style={{ color: category.accentColor }}>
        <span>Explore domain</span>
        <ArrowRight size={15} className="cat-arrow" />
      </div>
    </Link>
  );
}
