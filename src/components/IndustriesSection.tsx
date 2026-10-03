import React, { useState } from 'react';
import { SECTORS_DATA, SectorItem } from '../data/engineeringData.ts';
import { SafeImage } from './SafeImage.tsx';

interface IndustriesSectionProps {
  onOpenConsultation: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const [activeSector, setActiveSector] = useState<SectorItem | null>(null);

  return (
    <section 
      id="industries" 
      className="w-full bg-surface-container-lowest border-b border-outline-variant py-24"
      aria-labelledby="industries-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
              SECTOR SPECIALIZATION
            </span>
            <h2 
              id="industries-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-4"
            >
              ENGINEERED FOR COMPLEX ENVIRONMENTS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Every vertical presents unique statutory regulations, thermodynamic profiles, and life-safety mandates.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="mt-4 md:mt-0 font-tech-index text-tech-index uppercase tracking-wider text-secondary font-bold hover:text-primary transition-colors inline-flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
          >
            <span>Request Sector Proposal</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS_DATA.map((sector) => (
            <div
              key={sector.id}
              onClick={() => setActiveSector(activeSector?.id === sector.id ? null : sector)}
              className="border border-outline-variant bg-surface p-6 group hover:border-secondary transition-all cursor-pointer flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSector(activeSector?.id === sector.id ? null : sector);
                }
              }}
              aria-label={`View requirements for ${sector.title}`}
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-surface-container">
                  <SafeImage
                    src={sector.imageUrl}
                    alt={sector.altText}
                    fallbackTitle={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-tech-data text-tech-data text-secondary uppercase font-bold block">
                    SECTOR // {sector.number}
                  </span>
                  <span className="font-tech-caption text-[11px] text-on-surface-variant font-mono">
                    {sector.typicalLoads}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                  {sector.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                  {sector.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/60">
                <span className="font-tech-caption text-xs uppercase text-secondary font-bold flex items-center justify-between">
                  <span>{activeSector?.id === sector.id ? 'Hide Specifications' : 'View Sector Specifications'}</span>
                  <span className="text-sm font-bold">{activeSector?.id === sector.id ? '−' : '+'}</span>
                </span>

                {activeSector?.id === sector.id && (
                  <div className="mt-4 pt-3 border-t border-outline-variant/40 space-y-2 text-xs font-tech-data">
                    <span className="font-bold text-primary block uppercase">Key Mechanical Mandates:</span>
                    <ul className="space-y-1 text-on-surface-variant list-none pl-0">
                      {sector.keyRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-secondary font-bold" aria-hidden="true">■</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
