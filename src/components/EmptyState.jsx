import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';
import './Toolbar.css';

export default function EmptyState({ searchQuery, selectedCategory, onClearFilters }) {
  return (
    <div className="empty-state-card" role="status" aria-live="polite">
      <div className="empty-state-icon-box">
        <SearchX size={36} />
      </div>
      <h3 className="empty-state-title">No projects found</h3>
      <p className="empty-state-text">
        We couldn't find any community projects matching
        {searchQuery ? ` "${searchQuery}"` : ''}
        {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}.
        Try adjusting your keywords or clearing the active filters.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-md empty-state-btn"
        onClick={onClearFilters}
      >
        <RotateCcw size={16} />
        <span>Clear All Filters</span>
      </button>
    </div>
  );
}
