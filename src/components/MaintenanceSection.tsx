import React from "react";

interface MaintenanceSectionProps {
  onOpenConsultation: () => void;
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      className="w-full bg-surface border-b border-outline-variant py-24"
      aria-labelledby="maintenance-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
              LIFECYCLE CONTINUITY
            </span>
            <h2
              id="maintenance-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight"
            >
              PERFORMANCE AFTER HANDOVER
            </h2>
          </div>
          {/* <button
            onClick={onOpenConsultation}
            className="font-tech-index text-tech-index uppercase tracking-wider text-secondary font-bold hover:text-primary transition-colors inline-flex items-center gap-2 mt-4 md:mt-0 cursor-pointer bg-transparent border-0 p-0"
          >
            <span>Discuss Maintenance Support</span>
            <span aria-hidden="true">→</span>
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant p-8 hover:border-secondary transition-colors">
            <span className="font-tech-data text-tech-data text-secondary font-bold mb-4 block">
              01 // PREVENTIVE
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-3 uppercase">
              Scheduled PM
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Systematic filter changes, compressor oil sampling, refrigerant
              leak checks, and motor megger tests to avoid costly downtime.
            </p>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant p-8 hover:border-secondary transition-colors">
            <span className="font-tech-data text-tech-data text-secondary font-bold mb-4 block">
              {/* 02 // */} DISPATCH
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-3 uppercase">
              24/7 Emergency SLA
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Guaranteed under 2-hour regional mobilization response time for
              critical mission equipment and electrical outages.
            </p>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant p-8 hover:border-secondary transition-colors">
            <span className="font-tech-data text-tech-data text-secondary font-bold mb-4 block">
              03 // OPTIMIZATION
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-3 uppercase">
              Energy Retrofits
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Variable frequency drive retrofits, condenser tube cleaning
              systems, and algorithmic setpoint balancing lowering kW/TR by up
              to 24%.
            </p>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant p-8 hover:border-secondary transition-colors">
            <span className="font-tech-data text-tech-data text-secondary font-bold mb-4 block">
              04 // LIFECYCLE
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-3 uppercase">
              Asset Management
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Digital twin integration, barcode component tagging, and
              long-range capital replacement expenditure scheduling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
