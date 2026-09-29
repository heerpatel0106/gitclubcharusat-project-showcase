import React from 'react';
import { Search, X } from 'lucide-react';
import './Toolbar.css';

export default function SearchBar({ value, onChange, placeholder = "Search by project name, tech (e.g. React), problem, or category..." }) {
  return (
    <div className="search-bar-root">
      <Search size={18} className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search projects by keyword, technology, or description"
      />
      {value && (
        <button
          type="button"
          className="search-clear-btn"
          onClick={() => onChange('')}
          aria-label="Clear search input"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
