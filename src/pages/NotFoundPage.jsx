import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="app-container not-found-project-container">
      <div className="not-found-card">
        <div className="not-found-icon-box" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
          <Compass size={44} />
        </div>
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-text">
          The page or route you are looking for doesn't exist on the Git Club CHARUSAT Showcase.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary btn-md">
            <Home size={16} />
            <span>Go to Home</span>
          </Link>
          <Link to="/projects" className="btn btn-secondary btn-md">
            <ArrowLeft size={16} />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
