import React, { useEffect } from 'react';
import { ServiceItem } from '../../data/engineeringData.ts';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-lowest border-2 border-outline-variant overflow-y-auto hairline-grid shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-primary-container text-on-primary px-6 py-4 flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <span className="font-tech-data text-xs text-secondary font-bold font-mono">
              DISCIPLINE // {service.number}
            </span>
            <span className="text-outline-variant" aria-hidden="true">|</span>
            <span className="font-tech-data text-xs text-on-primary-container font-mono">
              REGIONAL EPC SPECIFICATION
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
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-surface-container border border-outline-variant text-secondary">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                {service.icon}
              </span>
            </div>
            <div>
              <h2 id="modal-service-title" className="font-headline-md text-2xl font-bold text-primary uppercase">
                {service.title}
              </h2>
              <span className="font-tech-caption text-xs uppercase text-on-surface-variant font-semibold">
                GCC LICENSED INFRASTRUCTURE SPECIALIZATION
              </span>
            </div>
          </div>

          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Subsystems */}
          <div>
            <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-2">
              INTEGRATED SUB-SYSTEM ARRAYS
            </span>
            <div className="flex flex-wrap gap-2">
              {service.subsystems.map((sub, idx) => (
                <span key={idx} className="bg-surface px-3 py-1.5 border border-outline-variant font-tech-data text-xs text-primary font-semibold">
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Key Specs */}
          <div>
            <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-2">
              TECHNICAL CAPACITY CRITERIA
            </span>
            <ul className="space-y-2 list-none p-0 m-0">
              {service.keySpecs.map((spec, idx) => (
                <li key={idx} className="p-3 bg-surface-container-low border border-outline-variant/60 flex items-start gap-2.5 text-xs font-tech-data">
                  <span className="text-secondary font-bold" aria-hidden="true">■</span>
                  <span className="text-primary font-medium">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Codes & Regulations */}
          <div className="p-4 bg-surface-container border border-outline-variant">
            <span className="font-tech-caption text-[11px] uppercase text-on-surface-variant font-bold block mb-2">
              STATUTORY CODES &amp; STANDARDS GOVERNANCE:
            </span>
            <div className="flex flex-wrap gap-2">
              {service.codes.map((code, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-surface border border-outline-variant font-mono text-xs text-primary font-bold">
                  {code}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 border border-outline-variant font-tech-index text-xs uppercase font-bold text-primary hover:bg-surface-container cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-8 py-2.5 bg-primary-container text-on-primary font-tech-index text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-colors cursor-pointer"
            >
              Request Tender Scope for {service.title} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
