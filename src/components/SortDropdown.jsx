import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import './Toolbar.css';

export default function SortDropdown({ sortBy, onSortChange }) {
  return (
    <div className="sort-dropdown-root">
      <label htmlFor="sort-select" className="sort-label">
        <ArrowUpDown size={14} className="sort-icon" />
        <span>Sort:</span>
      </label>
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-select-input"
        aria-label="Sort projects"
      >
        <option value="featured">Featured First</option>
        <option value="newest">Newest First</option>
        <option value="az">A – Z (Title)</option>
      </select>
    </div>
  );
}
