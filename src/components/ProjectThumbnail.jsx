import React from 'react';
import { 
  Globe, Brain, Smartphone, Cpu, Palette, 
  Terminal, Sparkles, Activity, Layers, Compass 
} from 'lucide-react';

export default function ProjectThumbnail({ project, className = '', height = '200px' }) {
  const { category, title, themeColor = '#2563EB', technologies = [] } = project;

  // Render a high-tech thematic visual canvas for each category
  const renderVisualContent = () => {
    switch (category) {
      case 'AI / ML':
        return (
          <g>
            {/* Neural network nodes & connections */}
            <circle cx="60" cy="50" r="14" fill="#8B5CF6" fillOpacity="0.25" stroke="#8B5CF6" strokeWidth="2" />
            <circle cx="60" cy="110" r="14" fill="#8B5CF6" fillOpacity="0.25" stroke="#8B5CF6" strokeWidth="2" />
            <circle cx="60" cy="170" r="14" fill="#8B5CF6" fillOpacity="0.25" stroke="#8B5CF6" strokeWidth="2" />

            <circle cx="160" cy="70" r="16" fill="#C084FC" fillOpacity="0.3" stroke="#C084FC" strokeWidth="2" />
            <circle cx="160" cy="150" r="16" fill="#C084FC" fillOpacity="0.3" stroke="#C084FC" strokeWidth="2" />

            <circle cx="260" cy="110" r="18" fill="#38BDF8" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="2" />

            {/* Neural synpase lines */}
            <line x1="74" y1="50" x2="144" y2="70" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
            <line x1="74" y1="110" x2="144" y2="70" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
            <line x1="74" y1="110" x2="144" y2="150" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.6" />
            <line x1="74" y1="170" x2="144" y2="150" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

            <line x1="176" y1="70" x2="242" y2="110" stroke="#38BDF8" strokeWidth="2" opacity="0.8" />
            <line x1="176" y1="150" x2="242" y2="110" stroke="#38BDF8" strokeWidth="2" opacity="0.8" />

            {/* Center pulsing core */}
            <circle cx="260" cy="110" r="7" fill="#38BDF8" />
            <path d="M 220,175 Q 260,140 300,175" fill="none" stroke="#A855F7" strokeWidth="2" opacity="0.5" />
          </g>
        );

      case 'App Development':
        return (
          <g>
            {/* Mobile frame */}
            <rect x="110" y="20" width="120" height="175" rx="14" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" opacity="0.9" />
            {/* Screen notch & speaker */}
            <rect x="145" y="26" width="50" height="4" rx="2" fill="#334155" />
            {/* UI Header */}
            <rect x="122" y="42" width="55" height="8" rx="3" fill="#0284C7" />
            <circle cx="215" cy="46" r="4" fill="#38BDF8" />
            {/* App Cards */}
            <rect x="122" y="60" width="96" height="38" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="130" y="68" width="50" height="6" rx="2" fill="#64748B" />
            <rect x="130" y="78" width="75" height="4" rx="2" fill="#475569" />
            <rect x="122" y="106" width="96" height="42" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="130" y="115" width="40" height="6" rx="2" fill="#38BDF8" />
            <rect x="130" y="125" width="60" height="4" rx="2" fill="#475569" />
            {/* Bottom Bar */}
            <rect x="122" y="160" width="96" height="20" rx="4" fill="#1E293B" />
            <circle cx="140" cy="170" r="3" fill="#38BDF8" />
            <circle cx="170" cy="170" r="3" fill="#64748B" />
            <circle cx="200" cy="170" r="3" fill="#64748B" />
          </g>
        );

      case 'IoT':
        return (
          <g>
            {/* Microcontroller PCB outline */}
            <rect x="50" y="35" width="240" height="145" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
            {/* Chip MCU */}
            <rect x="130" y="65" width="80" height="75" rx="4" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
            <circle cx="145" cy="80" r="2" fill="#6EE7B7" />
            {/* Chip pins */}
            <line x1="120" y1="75" x2="130" y2="75" stroke="#34D399" strokeWidth="2" />
            <line x1="120" y1="90" x2="130" y2="90" stroke="#34D399" strokeWidth="2" />
            <line x1="120" y1="105" x2="130" y2="105" stroke="#34D399" strokeWidth="2" />
            <line x1="120" y1="120" x2="130" y2="120" stroke="#34D399" strokeWidth="2" />

            <line x1="210" y1="75" x2="220" y2="75" stroke="#34D399" strokeWidth="2" />
            <line x1="210" y1="90" x2="220" y2="90" stroke="#34D399" strokeWidth="2" />
            <line x1="210" y1="105" x2="220" y2="105" stroke="#34D399" strokeWidth="2" />
            <line x1="210" y1="120" x2="220" y2="120" stroke="#34D399" strokeWidth="2" />

            {/* Circuit Traces */}
            <path d="M 65,50 L 100,50 L 115,75 L 120,75" fill="none" stroke="#6EE7B7" strokeWidth="1.5" />
            <path d="M 65,150 L 105,150 L 125,120 L 130,120" fill="none" stroke="#6EE7B7" strokeWidth="1.5" />
            <path d="M 220,105 L 245,105 L 265,70 L 280,70" fill="none" stroke="#6EE7B7" strokeWidth="1.5" />
            {/* Status LEDs */}
            <circle cx="70" cy="50" r="4" fill="#34D399" />
            <circle cx="70" cy="150" r="4" fill="#F59E0B" />
            <circle cx="280" cy="70" r="4" fill="#38BDF8" />
          </g>
        );

      case 'Design':
        return (
          <g>
            {/* Design canvas artboard */}
            <rect x="45" y="25" width="250" height="160" rx="8" fill="#18181B" stroke="#F43F5E" strokeWidth="1.5" />
            {/* Tool palette */}
            <rect x="55" y="38" width="18" height="135" rx="4" fill="#27272A" />
            <circle cx="64" cy="50" r="4" fill="#FB7185" />
            <circle cx="64" cy="65" r="4" fill="#A1A1AA" />
            <circle cx="64" cy="80" r="4" fill="#A1A1AA" />
            {/* Vector path with bezier handle */}
            <path d="M 100,140 C 120,50 180,60 220,120 S 260,150 280,110" fill="none" stroke="#FB7185" strokeWidth="2.5" />
            {/* Vector anchor points */}
            <rect x="96" y="136" width="8" height="8" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" />
            <rect x="216" y="116" width="8" height="8" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" />
            <circle cx="120" cy="50" r="3" fill="#FB7185" />
            <line x1="100" y1="140" x2="120" y2="50" stroke="#FB7185" strokeWidth="1" strokeDasharray="2 2" />
            {/* Color Swatches */}
            <circle cx="240" cy="45" r="7" fill="#F43F5E" />
            <circle cx="260" cy="45" r="7" fill="#8B5CF6" />
            <circle cx="280" cy="45" r="7" fill="#38BDF8" />
          </g>
        );

      case 'Web Development':
      default:
        return (
          <g>
            {/* Web Browser Frame */}
            <rect x="40" y="25" width="260" height="160" rx="8" fill="#0F172A" stroke="#2563EB" strokeWidth="1.5" />
            {/* Browser Top Bar */}
            <rect x="40" y="25" width="260" height="24" rx="8" fill="#1E293B" />
            <circle cx="55" cy="37" r="3.5" fill="#EF4444" />
            <circle cx="67" cy="37" r="3.5" fill="#F59E0B" />
            <circle cx="79" cy="37" r="3.5" fill="#10B981" />
            <rect x="100" y="31" width="130" height="12" rx="4" fill="#0F172A" />
            {/* Grid / Layout Mockup */}
            <rect x="55" y="60" width="80" height="55" rx="5" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="63" y="68" width="40" height="6" rx="2" fill="#38BDF8" />
            <rect x="63" y="80" width="60" height="4" rx="2" fill="#64748B" />
            <rect x="63" y="90" width="50" height="4" rx="2" fill="#475569" />

            <rect x="145" y="60" width="140" height="55" rx="5" fill="#1E293B" stroke="#334155" strokeWidth="1" />
            <rect x="155" y="68" width="60" height="6" rx="2" fill="#60A5FA" />
            <rect x="155" y="80" width="115" height="4" rx="2" fill="#64748B" />
            <rect x="155" y="90" width="95" height="4" rx="2" fill="#475569" />

            {/* Code Line Bottom Ribbon */}
            <rect x="55" y="125" width="230" height="45" rx="6" fill="#090D16" stroke="#1E293B" strokeWidth="1" />
            <text x="70" y="145" fill="#38BDF8" fontSize="11" fontFamily="JetBrains Mono, monospace">
              import &#123; createShowcase &#125;
            </text>
            <text x="70" y="160" fill="#34D399" fontSize="10" fontFamily="JetBrains Mono, monospace">
              gitclub.deploy(project);
            </text>
          </g>
        );
    }
  };

  return (
    <div
      className={`project-thumbnail-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        overflow: 'hidden',
        backgroundColor: '#090D16',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* SVG Canvas Art */}
      <svg
        viewBox="0 0 340 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      >
        <defs>
          <pattern id={`grid-pattern-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          </pattern>
          <radialGradient id={`glow-rad-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.35" />
            <stop offset="100%" stopColor="#090D16" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Dark Tech Background */}
        <rect width="100%" height="100%" fill="#090D16" />
        <rect width="100%" height="100%" fill={`url(#grid-pattern-${project.id})`} />
        <circle cx="170" cy="105" r="110" fill={`url(#glow-rad-${project.id})`} />

        {/* Thematic Category Vector Graphics */}
        {renderVisualContent()}
      </svg>

      {/* Subtle Bottom Gradient overlay for legibility */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40px',
          background: 'linear-gradient(to top, rgba(9, 13, 22, 0.6), transparent)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
