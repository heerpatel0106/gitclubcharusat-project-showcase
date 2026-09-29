import React from 'react';
import { Layers, Globe, Brain, Smartphone, Cpu, Palette } from 'lucide-react';
import { CATEGORIES } from '../data/projectsData';
import './Toolbar.css';

const ICON_MAP = {
  'All': Layers,
  'Web Development': Globe,
  'AI / ML': Brain,
  'App Development': Smartphone,
  'IoT': Cpu,
  'Design': Palette
};

export default function CategoryFilter({ selectedCategory, onSelectCategory, categoryCounts = {} }) {
  const totalCount = Object.values(categoryCounts).reduce((acc, curr) => acc + curr, 0);

  const filterOptions = [
    { id: 'All', name: 'All Categories', count: totalCount },
    ...CATEGORIES.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: categoryCounts[cat.id] || 0
    }))
  ];

  return (
    <div className="category-filter-scroll" role="tablist" aria-label="Filter projects by domain">
      {filterOptions.map((opt) => {
        const IconComponent = ICON_MAP[opt.id] || Layers;
        const isSelected = selectedCategory === opt.id;

        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={`filter-pill-btn ${isSelected ? 'pill-active' : ''}`}
            onClick={() => onSelectCategory(opt.id)}
          >
            <IconComponent size={15} className="pill-icon" />
            <span className="pill-label">{opt.name}</span>
            <span className={`pill-counter ${isSelected ? 'counter-active' : ''}`}>
              {opt.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
