import React from 'react';
import { INSIGHTS_DATA, InsightPaper } from '../data/engineeringData.ts';

interface InsightsSectionProps {
  onSelectPaper: (paper: InsightPaper) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectPaper }) => {
  return (
    <section 
      id="insights" 
      className="w-full bg-surface-container-lowest border-b border-outline-variant py-24"
      aria-labelledby="insights-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
              KNOWLEDGE DISPATCH
            </span>
            <h2 
              id="insights-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight"
            >
              ENGINEERING INSIGHTS
            </h2>
          </div>
          <span className="font-tech-caption text-tech-caption text-on-surface-variant uppercase tracking-wider mt-4 md:mt-0">
            TECHNICAL PAPERS &amp; RESEARCH
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS_DATA.map((paper) => (
            <article
              key={paper.id}
              onClick={() => onSelectPaper(paper)}
              className="border border-outline-variant bg-surface p-6 flex flex-col justify-between hover:border-secondary transition-colors group cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectPaper(paper);
                }
              }}
              aria-label={`Read technical whitepaper: ${paper.title}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-tech-data text-tech-data text-secondary uppercase font-bold block">
                    {paper.tag}
                  </span>
                  <span className="font-tech-caption text-[11px] text-on-surface-variant">
                    {paper.readTime}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-headline-sm text-primary font-bold mb-3 leading-snug">
                  {paper.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                  {paper.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant font-tech-caption text-tech-caption text-on-surface-variant uppercase flex items-center justify-between">
                <span className="group-hover:text-primary font-semibold">READ PAPER</span>
                <span className="text-secondary group-hover:translate-x-1 transition-transform font-bold" aria-hidden="true">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
