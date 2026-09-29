import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Brain, Smartphone, Cpu, Palette, 
  ArrowRight, Layers, Sparkles 
} from 'lucide-react';
import { CATEGORIES, getAllProjects, getCategoryCounts } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import './CategoriesPage.css';

const ICON_MAP = {
  'Web Development': Globe,
  'AI / ML': Brain,
  'App Development': Smartphone,
  'IoT': Cpu,
  'Design': Palette
};

export default function CategoriesPage() {
  const allProjects = getAllProjects();
  const categoryCounts = getCategoryCounts();

  return (
    <div className="categories-page-root">
      {/* Header */}
      <section className="categories-header-section">
        <div className="app-container">
          <div className="categories-header-content">
            <span className="section-label">Technology Domains</span>
            <h1 className="categories-page-title">Browse by Category</h1>
            <p className="categories-page-subtitle">
              Explore the five core technical tracks fostered by Git Club CHARUSAT. Discover projects, architectures, and student engineering across diverse domains.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Sections with sample project teasers */}
      <div className="app-container categories-body-container">
        <div className="categories-detailed-list">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.id] || Globe;
            const catProjects = allProjects.filter((p) => p.category === cat.id);
            const count = categoryCounts[cat.id] || 0;

            return (
              <section key={cat.id} className="category-block-row" id={cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                <div className="category-block-header">
                  <div className="cat-title-cluster">
                    <div
                      className="cat-domain-icon"
                      style={{
                        backgroundColor: `${cat.accentColor}18`,
                        color: cat.accentColor,
                        borderColor: `${cat.accentColor}30`
                      }}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div>
                      <h2 className="cat-domain-title">{cat.name}</h2>
                      <p className="cat-domain-desc">{cat.description}</p>
                    </div>
                  </div>

                  <Link
                    to={`/projects?category=${encodeURIComponent(cat.id)}`}
                    className="btn btn-secondary btn-sm cat-view-all-link"
                  >
                    <span>View all {count} projects</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Preview sample cards for this domain */}
                <div className="cat-projects-sample-grid">
                  {catProjects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
