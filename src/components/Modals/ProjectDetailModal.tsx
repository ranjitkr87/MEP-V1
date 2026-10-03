import React, { useEffect } from 'react';
import { Project } from '../../data/engineeringData.ts';
import { SafeImage } from '../SafeImage.tsx';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-lowest border-2 border-outline-variant overflow-y-auto hairline-grid shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary-container text-on-primary px-6 py-4 flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <span className="font-tech-data text-xs text-secondary font-bold font-mono">
              REF: {project.ref}
            </span>
            <span className="text-outline-variant" aria-hidden="true">|</span>
            <span className="font-tech-data text-xs text-on-primary-container font-mono">
              {project.location}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-primary hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Banner */}
          <div className="aspect-[16/9] overflow-hidden bg-surface-container border border-outline-variant">
            <SafeImage
              src={project.imageUrl}
              alt={project.altText}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Key Data */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-surface px-3 py-1 border border-outline-variant font-tech-caption text-xs uppercase font-bold text-secondary">
                {project.rating}
              </span>
              <span className="bg-surface px-3 py-1 border border-outline-variant font-tech-caption text-xs uppercase text-on-surface">
                {project.coolingCapacity}
              </span>
              <span className="bg-surface px-3 py-1 border border-outline-variant font-tech-caption text-xs uppercase text-on-surface">
                {project.powerCapacity}
              </span>
              <span className="bg-surface px-3 py-1 border border-outline-variant font-tech-caption text-xs uppercase text-on-surface">
                {project.area}
              </span>
            </div>

            <h2 id="modal-project-title" className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-3">
              {project.title}
            </h2>

            <div className="flex items-center gap-2 text-xs font-tech-data text-on-surface-variant mb-4">
              <span>Client / Master Developer:</span>
              <strong className="text-primary font-semibold">{project.client}</strong>
            </div>

            <p className="font-body-md text-on-surface-variant leading-relaxed">
              {project.scopeSummary}
            </p>
          </div>

          {/* Clash Resolution & BIM Stats */}
          <div className="p-5 bg-surface-container border border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-tech-caption text-[11px] uppercase text-secondary font-bold block mb-1">
                BIM LOD 400 INTEGRATION METRIC
              </span>
              <p className="font-body-sm text-xs text-primary font-medium">
                {project.bimClashResolution}
              </p>
            </div>
            <div className="px-3 py-1.5 bg-primary text-on-primary font-tech-data text-xs font-mono uppercase whitespace-nowrap">
              CLASH TOLERANCE: ZERO
            </div>
          </div>

          {/* Key Engineering Challenges */}
          <div>
            <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-3">
              PRIMARY ENGINEERING OVERCOMES
            </span>
            <div className="space-y-2">
              {project.keyChallenges.map((challenge, idx) => (
                <div key={idx} className="p-3 bg-surface border border-outline-variant/60 flex items-start gap-3 text-xs font-tech-data">
                  <span className="text-secondary font-bold mt-0.5">0{idx + 1}</span>
                  <span className="text-on-surface-variant">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Schedule */}
          <div>
            <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-3">
              INSTALLED ASSET &amp; EQUIPMENT SCHEDULE
            </span>
            <div className="overflow-x-auto border border-outline-variant">
              <table className="w-full text-left font-tech-data text-xs border-collapse">
                <thead>
                  <tr className="bg-surface-container border-b border-outline-variant text-on-surface-variant">
                    <th className="p-3 uppercase">Equipment Item</th>
                    <th className="p-3 uppercase">Technical Specification</th>
                    <th className="p-3 uppercase text-right">Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/40 bg-surface">
                  {project.equipmentSchedule.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-3 font-bold text-primary">{row.item}</td>
                      <td className="p-3 text-on-surface-variant">{row.spec}</td>
                      <td className="p-3 text-right font-mono text-secondary font-bold">{row.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 border border-outline-variant font-tech-index text-xs uppercase font-bold text-primary hover:bg-surface-container cursor-pointer"
            >
              Close Case Study
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-8 py-2.5 bg-primary-container text-on-primary font-tech-index text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-colors cursor-pointer"
            >
              Request Similar Project Specification →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
