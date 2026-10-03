import React, { useEffect } from 'react';
import { InsightPaper } from '../../data/engineeringData.ts';

interface InsightReaderModalProps {
  paper: InsightPaper | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const InsightReaderModal: React.FC<InsightReaderModalProps> = ({
  paper,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (paper) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [paper, onClose]);

  if (!paper) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-insight-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-lowest border-2 border-outline-variant overflow-y-auto hairline-grid shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary-container text-on-primary px-6 py-4 flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <span className="font-tech-data text-xs text-secondary font-bold font-mono">
              TECHNICAL DISPATCH // {paper.tag}
            </span>
            <span className="text-outline-variant" aria-hidden="true">|</span>
            <span className="font-tech-data text-xs text-on-primary-container font-mono">
              {paper.date}
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

        {/* Paper Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-tech-data text-secondary font-bold mb-2">
              <span>{paper.readTime}</span>
              <span>·</span>
              <span>Peer Reviewed Engineering Research</span>
            </div>
            <h2 id="modal-insight-title" className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary mb-3">
              {paper.title}
            </h2>
            <div className="flex items-center gap-2 text-xs font-tech-data text-on-surface-variant">
              <span>Author:</span>
              <strong className="text-primary">{paper.author}</strong>
              <span>({paper.authorRole})</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="p-5 bg-surface-container border-l-4 border-secondary text-body-md text-on-surface italic leading-relaxed">
            &ldquo;{paper.fullContent.abstract}&rdquo;
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-4">
            <div>
              <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-1">
                REGIONAL THERMAL CHALLENGE
              </span>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {paper.fullContent.challenge}
              </p>
            </div>

            <div>
              <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-1">
                ENGINEERED INTERVENTION
              </span>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {paper.fullContent.solution}
              </p>
            </div>
          </div>

          {/* Empirical Findings */}
          <div>
            <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-2">
              KEY EMPIRICAL FINDINGS &amp; FIELD DATA
            </span>
            <div className="space-y-2">
              {paper.fullContent.engineeringFindings.map((finding, idx) => (
                <div key={idx} className="p-3 bg-surface border border-outline-variant/60 flex items-start gap-2.5 text-xs font-tech-data">
                  <span className="text-secondary font-bold mt-0.5">●</span>
                  <span className="text-primary font-medium">{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Citations */}
          <div className="p-4 bg-surface-container border border-outline-variant text-xs font-tech-data">
            <span className="font-bold text-primary block uppercase mb-1">
              Standard Citations &amp; Authority References:
            </span>
            <span className="text-on-surface-variant font-mono">
              {paper.fullContent.standardReferences}
            </span>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 border border-outline-variant font-tech-index text-xs uppercase font-bold text-primary hover:bg-surface-container cursor-pointer"
            >
              Close Paper
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-8 py-2.5 bg-primary-container text-on-primary font-tech-index text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-colors cursor-pointer"
            >
              Consult Engineering Team on this Methodology →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
