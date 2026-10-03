import React from 'react';
import { ENGINEERING_METRICS } from '../data/engineeringData.ts';

export const QualitySafetySection: React.FC = () => {
  return (
    <section 
      className="w-full bg-surface-container-lowest border-b border-outline-variant py-24"
      aria-labelledby="quality-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
              GOVERNANCE &amp; STANDARDS
            </span>
            <h2 
              id="quality-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-6"
            >
              BUILT AROUND QUALITY.<br />GOVERNED BY SAFETY.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Our engineering execution adheres strictly to international engineering benchmarks including ASHRAE, SMACNA, NFPA, and IEEE standards. Operating with an uncompromising Zero-Harm occupational health and safety culture, every project maintains strict ISO-certified audit protocols from mobilization through final asset demobilization.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-secondary font-bold text-sm mt-1" aria-hidden="true">■</span>
                <div>
                  <h3 className="font-tech-index text-tech-index text-primary uppercase font-bold">
                    Zero-Harm Occupational Safety Protocol
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Over {ENGINEERING_METRICS.ltiFreeManHours} man-hours executed without Loss-Time Injury (LTI) across flagship GCC sites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-secondary font-bold text-sm mt-1" aria-hidden="true">■</span>
                <div>
                  <h3 className="font-tech-index text-tech-index text-primary uppercase font-bold">
                    Third-Party Independent Verification
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Full statutory authority inspections, acoustic field tests, and electrical power-quality logging.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ISO Certification Cards Right */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="border border-outline-variant p-6 bg-surface flex items-center justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-tech-data text-tech-data text-secondary uppercase font-bold">
                  ACCREDITATION
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  ISO 9001:2015
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Quality Management System Certification
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-3xl text-secondary" aria-hidden="true">
                verified
              </span>
            </div>

            <div className="border border-outline-variant p-6 bg-surface flex items-center justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-tech-data text-tech-data text-secondary uppercase font-bold">
                  ACCREDITATION
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  ISO 14001:2015
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Environmental Management System Framework
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-3xl text-secondary" aria-hidden="true">
                eco
              </span>
            </div>

            <div className="border border-outline-variant p-6 bg-surface flex items-center justify-between hover:border-secondary transition-colors">
              <div>
                <span className="font-tech-data text-tech-data text-secondary uppercase font-bold">
                  ACCREDITATION
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  ISO 45001:2018
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Occupational Health &amp; Safety Management
                </p>
              </div>
              <span className="material-symbols-outlined text-outline text-3xl text-secondary" aria-hidden="true">
                shield
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
