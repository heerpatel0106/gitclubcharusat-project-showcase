import React, { useState } from 'react';
import { 
  GitBranch, GitCommit, Sparkles, Terminal, Code2, 
  Layers, CheckCircle2, ArrowUpRight, FolderGit2 
} from 'lucide-react';
import './HeroMockup.css';

export default function HeroMockup() {
  const [activeTab, setActiveTab] = useState('project');

  return (
    <div className="hero-mockup-wrapper" aria-hidden="true">
      {/* Decorative ambient glow behind cards */}
      <div className="hero-glow-blob hero-glow-1"></div>
      <div className="hero-glow-blob hero-glow-2"></div>

      {/* Main Layered Showcase Container */}
      <div className="mockup-frame">
        {/* Window Chrome / Titlebar */}
        <div className="mockup-titlebar">
          <div className="window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-amber"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="window-tabs">
            <button
              type="button"
              className={`window-tab ${activeTab === 'project' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('project')}
            >
              <Code2 size={13} />
              <span>CampusConnect.jsx</span>
            </button>
            <button
              type="button"
              className={`window-tab ${activeTab === 'git' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('git')}
            >
              <GitBranch size={13} />
              <span>git-history.log</span>
            </button>
          </div>
          <div className="window-branch-tag">
            <GitBranch size={12} />
            <span>main</span>
          </div>
        </div>

        {/* Tab 1: Live Project Preview & Code Snippet */}
        {activeTab === 'project' ? (
          <div className="mockup-editor-body">
            <div className="editor-code-pane">
              <div className="code-line">
                <span className="line-num">01</span>
                <span className="tok-keyword">import</span> &#123; <span className="tok-var">ShowcaseCommunity</span> &#125; <span className="tok-keyword">from</span> <span className="tok-str">'@gitclub/charusat'</span>;
              </div>
              <div className="code-line">
                <span className="line-num">02</span>
              </div>
              <div className="code-line">
                <span className="line-num">03</span>
                <span className="tok-keyword">export default function</span> <span className="tok-fn">ProjectRegistry</span>() &#123;
              </div>
              <div className="code-line">
                <span className="line-num">04</span>
                <span className="code-indent"></span><span className="tok-keyword">const</span> [projects, setProjects] = <span className="tok-fn">useState</span>(communityWorks);
              </div>
              <div className="code-line">
                <span className="line-num">05</span>
                <span className="code-indent"></span><span className="tok-keyword">return</span> (
              </div>
              <div className="code-line">
                <span className="line-num">06</span>
                <span className="code-indent"></span><span className="code-indent"></span>&lt;<span className="tok-comp">ProjectGrid</span> <span className="tok-attr">featured</span>=&#123;<span className="tok-keyword">true</span>&#125; <span className="tok-attr">verified</span> /&gt;
              </div>
              <div className="code-line">
                <span className="line-num">07</span>
                <span className="code-indent"></span>);
              </div>
              <div className="code-line">
                <span className="line-num">08</span>
                &#125;
              </div>
            </div>

            {/* In-Editor Live Render Card */}
            <div className="mockup-preview-card">
              <div className="preview-card-header">
                <div className="preview-indicator">
                  <span className="live-pulse-dot"></span>
                  <span>Live Community Build</span>
                </div>
                <span className="preview-badge">React 18</span>
              </div>
              <div className="preview-title">CampusConnect v2.4</div>
              <p className="preview-text">
                Centralized student life hub connecting clubs, workshops & hackathons.
              </p>
              <div className="preview-tech-row">
                <span className="preview-chip">Vite</span>
                <span className="preview-chip">Tailwind</span>
                <span className="preview-chip">Node.js</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mockup-terminal-body">
            <div className="terminal-prompt-line">
              <span className="prompt-dir">~/charusat/gitclub</span> <span className="prompt-branch">(main)</span> $ git log --oneline -n 4
            </div>
            <div className="git-log-entry">
              <span className="commit-hash">c8f1a20</span>
              <span className="commit-msg">feat(showcase): implement project explorer &amp; search</span>
              <span className="commit-time">2h ago</span>
            </div>
            <div className="git-log-entry">
              <span className="commit-hash">4e9b731</span>
              <span className="commit-msg">chore(iot): publish SmartGarden telemetry firmware</span>
              <span className="commit-time">1d ago</span>
            </div>
            <div className="git-log-entry">
              <span className="commit-hash">8a1c905</span>
              <span className="commit-msg">feat(ai): integrate MediMind symptom tree classifier</span>
              <span className="commit-time">3d ago</span>
            </div>
            <div className="git-log-entry">
              <span className="commit-hash">2b604e8</span>
              <span className="commit-msg">init: bootstrap Git Club student project portfolio</span>
              <span className="commit-time">1w ago</span>
            </div>
          </div>
        )}

        {/* Floating Metrics Badge Card */}
        <div className="floating-stat-card">
          <div className="floating-stat-icon">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <div className="floating-stat-val">10 Verified Projects</div>
            <div className="floating-stat-lbl">Web • AI/ML • Apps • IoT • Design</div>
          </div>
        </div>

        {/* Floating Community Badge Card */}
        <div className="floating-comm-card">
          <div className="comm-avatars">
            <span className="comm-avatar ca-1">DV</span>
            <span className="comm-avatar ca-2">RT</span>
            <span className="comm-avatar ca-3">MJ</span>
          </div>
          <div className="comm-text">
            <strong>20+ Student Creators</strong>
            <span>Active contributors</span>
          </div>
        </div>
      </div>
    </div>
  );
}
