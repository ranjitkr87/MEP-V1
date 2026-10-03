import React from 'react';
import { SafeImage } from './SafeImage.tsx';

interface HeroSectionProps {
  onExploreServices: () => void;
  onViewProjects: () => void;
  onOpenProjectCaseStudy: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onViewProjects,
  onOpenProjectCaseStudy,
}) => {
  return (
    <section 
      id="main-content"
      className="relative w-full border-b border-outline-variant bg-surface overflow-hidden"
      aria-label="Introduction & Infrastructure Engineering Overview"
    >
      <div className="w-full mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-secondary inline-block" aria-hidden="true"></span>
              <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary font-bold">
                HVAC • MEP • ENGINEERING
              </span>
              <span className="text-outline-variant" aria-hidden="true">|</span>
              <span className="font-tech-caption text-tech-caption text-on-surface-variant uppercase tracking-wider">
                REGIONAL INFRASTRUCTURE
              </span>
            </div>

            <h1 className="font-display-xl text-display-xl text-primary font-bold tracking-tight mb-8 leading-[1.05]">
              ENGINEERING COMFORT.<br />
              <span className="text-on-surface-variant font-light">
                BUILDING PERFORMANCE.
              </span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Integrated HVAC and MEP engineering, construction, and maintenance solutions for commercial, industrial, healthcare, and hospitality environments across the Middle East.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreServices();
                }}
                className="h-12 px-8 bg-primary-container text-on-primary font-tech-index uppercase tracking-wider flex items-center justify-center hover:bg-secondary transition-colors duration-150 cursor-pointer font-semibold text-sm"
              >
                Explore Our Services
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onViewProjects();
                }}
                className="h-12 px-8 bg-transparent text-primary border border-primary font-tech-index uppercase tracking-wider flex items-center justify-center hover:bg-surface-container hover:text-secondary transition-colors duration-150 cursor-pointer font-semibold text-sm"
              >
                View Projects
              </a>
            </div>

            {/* Engineering Discipline Matrix Bar */}
            <div className="pt-8 border-t border-outline-variant flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="font-tech-data text-tech-data uppercase tracking-wider text-primary font-semibold">
                  HVAC
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="font-tech-data text-tech-data uppercase tracking-wider text-primary font-semibold">
                  MECHANICAL
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="font-tech-data text-tech-data uppercase tracking-wider text-primary font-semibold">
                  ELECTRICAL
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="font-tech-data text-tech-data uppercase tracking-wider text-primary font-semibold">
                  PLUMBING
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Architectural Asset Stamp) */}
          <div className="lg:col-span-6">
            <div className="relative bg-surface-container-lowest p-2 border border-outline-variant">
              {/* Technical crosshair corners */}
              <div className="absolute -top-1.5 -left-1.5 font-tech-data text-outline text-xs leading-none select-none" aria-hidden="true">+</div>
              <div className="absolute -top-1.5 -right-1.5 font-tech-data text-outline text-xs leading-none select-none" aria-hidden="true">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 font-tech-data text-outline text-xs leading-none select-none" aria-hidden="true">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 font-tech-data text-outline text-xs leading-none select-none" aria-hidden="true">+</div>

              <div className="relative overflow-hidden aspect-[4/3] bg-surface-container group">
                <SafeImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD_I8Pk5rGOM21LCxEF-Pe73SJzNWT42rTxNRZ0bEZw_h8yYfU7RBFZ-FR4bwTnFKXdDRYgWQvzBOqxGtCrb61AAG1KTuK6hNHxQCkUPZ5u-6XrJAMz7czDeUxAXj0Svv7nE04aaLAvRvrkEa1SISV5QmnbZY0pKk9wvvAuw0exUktP42fCjGVCfKTu5vVuKJ3J2STPiJshKdfu9yytmadxEvHHoUj3lhhTB0U9lWxrsMvSTe_sHhn"
                  alt="Twin Commercial High-Rise Towers Middle East with integrated MEP substation"
                  fallbackTitle="Commercial High-Rise Towers Middle East"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Coordinate & Spec Stamp Overlay */}
                <div 
                  onClick={() => onOpenProjectCaseStudy('twin-towers-dubai')}
                  className="absolute bottom-4 left-4 right-4 sm:right-auto bg-surface-container-lowest/95 backdrop-blur-none border border-outline-variant p-3 max-w-sm cursor-pointer hover:border-secondary transition-colors"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenProjectCaseStudy('twin-towers-dubai');
                    }
                  }}
                  aria-label="View case study for Twin Tower Commercial Complex"
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <span className="font-tech-caption text-tech-caption text-secondary uppercase font-bold">
                      COORDINATE REF // DXB-892
                    </span>
                    <span className="font-tech-data text-tech-data text-on-surface-variant font-mono">
                      25.1972° N, 55.2744° E
                    </span>
                  </div>
                  <p className="font-tech-data text-tech-data text-primary font-medium flex items-center justify-between">
                    <span>Twin Tower Commercial Complex • Integrated MEP Substation</span>
                    <span className="text-secondary ml-2 font-bold">↗</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
