import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layers, SlidersHorizontal, Sparkles, Filter, X } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortDropdown from '../components/SortDropdown';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '../components/EmptyState';
import { getAllProjects, getCategoryCounts } from '../data/projectsData';
import './ProjectsPage.css';

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const categoryCounts = getCategoryCounts();

  // Read initial values from URL query parameters (e.g. /projects?category=AI%20%2F%20ML&q=react)
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('q') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);

  // Sync URL search params when state changes
  useEffect(() => {
    const params = {};
    if (selectedCategory && selectedCategory !== 'All') {
      params.category = selectedCategory;
    }
    if (searchQuery.trim()) {
      params.q = searchQuery.trim();
    }
    if (sortBy && sortBy !== 'featured') {
      params.sort = sortBy;
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, sortBy, setSearchParams]);

  // Synchronize when browser back/forward buttons change searchParams
  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    const q = searchParams.get('q') || '';
    const s = searchParams.get('sort') || 'featured';

    setSelectedCategory(cat);
    setSearchQuery(q);
    setSortBy(s);
  }, [searchParams]);

  // Combined Search, Category Filter, and Sorting logic
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...allProjects];

    // 1. Category Filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(
        (project) => project.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // 2. Real-time Search query matching title, description, category, and technologies
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((project) => {
        const matchTitle = project.title.toLowerCase().includes(q);
        const matchDesc = project.shortDescription.toLowerCase().includes(q);
        const matchFullDesc = project.fullDescription ? project.fullDescription.toLowerCase().includes(q) : false;
        const matchProblem = project.problem ? project.problem.toLowerCase().includes(q) : false;
        const matchCategory = project.category.toLowerCase().includes(q);
        const matchTech = project.technologies.some((tech) => tech.toLowerCase().includes(q));
        const matchTeam = project.team.some((member) => member.name.toLowerCase().includes(q));

        return matchTitle || matchDesc || matchFullDesc || matchProblem || matchCategory || matchTech || matchTeam;
      });
    }

    // 3. Sorting
    result.sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured === b.featured) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return a.featured ? -1 : 1;
      }
      if (sortBy === 'newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === 'az') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    return result;
  }, [allProjects, selectedCategory, searchQuery, sortBy]);

  // Handle Clear Filters button action
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery.trim() !== '' || sortBy !== 'featured';

  return (
    <div className="projects-page-root">
      {/* Page Header */}
      <section className="projects-header-section">
        <div className="app-container">
          <div className="projects-header-content">
            <span className="section-label">Community Portfolio</span>
            <h1 className="projects-page-title">Explore Projects</h1>
            <p className="projects-page-subtitle">
              Discover what the community is building. Filter by domain, search technologies, and dive into project case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Explorer Workspace */}
      <div className="app-container projects-workspace-container">
        {/* Toolbar Container */}
        <div className="explorer-toolbar-panel">
          {/* Top Row: Search and Sort */}
          <div className="toolbar-top-row">
            <div className="toolbar-search-wrapper">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by title, React, Python, IoT, AI, or author..."
              />
            </div>
            <div className="toolbar-sort-wrapper">
              <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>

          {/* Bottom Row: Category Pill Filters */}
          <div className="toolbar-categories-row">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              categoryCounts={categoryCounts}
            />
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="results-metadata-bar">
          <div className="results-count-text">
            Showing <strong>{filteredAndSortedProjects.length}</strong> of {allProjects.length} projects
            {selectedCategory !== 'All' && (
              <span className="active-filter-badge">
                Domain: {selectedCategory}
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  aria-label="Remove category filter"
                  className="filter-remove-icon"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="active-filter-badge">
                Query: "{searchQuery}"
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Remove search query"
                  className="filter-remove-icon"
                >
                  <X size={12} />
                </button>
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="clear-all-inline-btn"
              onClick={handleClearFilters}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Project Grid or Empty State */}
        {filteredAndSortedProjects.length > 0 ? (
          <div className="projects-grid-section">
            <div className="projects-grid">
              {filteredAndSortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ) : (
          <EmptyState
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onClearFilters={handleClearFilters}
          />
        )}
      </div>
    </div>
  );
}
