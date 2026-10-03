import React from 'react';
import { ENGINEERING_METRICS } from '../data/engineeringData.ts';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section 
      id="about" 
      className="w-full bg-surface-container-lowest border-b border-outline-variant py-20"
      aria-labelledby="about-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-3 font-bold">
              CORPORATE PROFILE
            </span>
            <h2 
              id="about-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight leading-tight"
            >
              ENGINEERING THAT WORKS BEHIND THE BUILDING.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              We deliver coordinated turnkey MEP engineering systems built to handle extreme thermal and environmental challenges across the GCC. From upfront engineering and detailed BIM LOD 400 clash resolution through installation, rigorous multi-stage commissioning, and lifecycle maintenance, our engineering frameworks operate continuously behind the most prestigious architectural landmarks in Dubai, Riyadh, and Doha.
            </p>

            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 font-tech-index text-tech-index uppercase tracking-wider text-secondary font-bold mb-12 hover:text-primary transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                <span>ABOUT THE COMPANY</span>
                <span className="text-base" aria-hidden="true">→</span>
              </button>
            </div>

            {/* Quantitative Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-outline-variant">
              <div>
                <span className="font-display-xl text-display-xl font-bold text-primary block leading-none mb-2 tabular-nums">
                  {ENGINEERING_METRICS.yearsExperience}
                </span>
                <span className="font-tech-caption text-tech-caption uppercase tracking-wider text-on-surface-variant block">
                  Years of GCC Experience
                </span>
              </div>
              <div className="sm:border-l border-outline-variant sm:pl-6">
                <span className="font-display-xl text-display-xl font-bold text-primary block leading-none mb-2 tabular-nums">
                  {ENGINEERING_METRICS.megaprojectsDelivered}
                </span>
                <span className="font-tech-caption text-tech-caption uppercase tracking-wider text-on-surface-variant block">
                  Megaprojects Delivered
                </span>
              </div>
              <div className="sm:border-l border-outline-variant sm:pl-6">
                <span className="font-display-xl text-display-xl font-bold text-secondary block leading-none mb-2 tabular-nums">
                  {ENGINEERING_METRICS.criticalDispatchSupport}
                </span>
                <span className="font-tech-caption text-tech-caption uppercase tracking-wider text-on-surface-variant block">
                  Critical Dispatch Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
