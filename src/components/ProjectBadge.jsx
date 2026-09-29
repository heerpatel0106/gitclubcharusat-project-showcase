import React from 'react';
import { Globe, Brain, Smartphone, Cpu, Palette, CheckCircle2, Clock, Wrench } from 'lucide-react';

export function CategoryBadge({ category, className = '' }) {
  let badgeClass = 'badge-web';
  let Icon = Globe;

  switch (category) {
    case 'AI / ML':
      badgeClass = 'badge-ai';
      Icon = Brain;
      break;
    case 'App Development':
      badgeClass = 'badge-app';
      Icon = Smartphone;
      break;
    case 'IoT':
      badgeClass = 'badge-iot';
      Icon = Cpu;
      break;
    case 'Design':
      badgeClass = 'badge-design';
      Icon = Palette;
      break;
    case 'Web Development':
    default:
      badgeClass = 'badge-web';
      Icon = Globe;
      break;
  }

  return (
    <span className={`badge ${badgeClass} ${className}`}>
      <Icon size={12} strokeWidth={2.5} />
      <span>{category}</span>
    </span>
  );
}

export function StatusBadge({ status, className = '' }) {
  let badgeClass = 'badge-status-completed';
  let Icon = CheckCircle2;

  switch (status) {
    case 'In Progress':
      badgeClass = 'badge-status-in-progress';
      Icon = Clock;
      break;
    case 'Prototype':
      badgeClass = 'badge-status-prototype';
      Icon = Wrench;
      break;
    case 'Completed':
    default:
      badgeClass = 'badge-status-completed';
      Icon = CheckCircle2;
      break;
  }

  return (
    <span className={`badge ${badgeClass} ${className}`}>
      <Icon size={12} strokeWidth={2.2} />
      <span>{status}</span>
    </span>
  );
}
