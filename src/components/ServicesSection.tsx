import React, { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "../data/engineeringData.ts";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredServices = SERVICES_DATA.filter((svc) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "thermal")
      return svc.id === "hvac" || svc.id === "mechanical";
    if (activeFilter === "electrical")
      return svc.id === "electrical" || svc.id === "bms";
    if (activeFilter === "safety")
      return svc.id === "plumbing" || svc.id === "fire";
    if (activeFilter === "lifecycle")
      return svc.id === "tab" || svc.id === "om";
    return true;
  });

  return (
    <section
      id="services"
      className="w-full bg-surface border-b border-outline-variant py-24"
      aria-labelledby="services-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-outline-variant pb-8">
          <div>
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
              CORE DISCIPLINES
            </span>
            <h2
              id="services-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight"
            >
              OUR ENGINEERING CAPABILITIES
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4 md:mt-0">
            Integrated building services engineered for sustained performance,
            high thermal efficiency, and zero operational downtime.
          </p>
        </div>

        {/* Interactive Discipline Filter Tabs */}
        {/* <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-outline-variant/40" role="tablist" aria-label="Discipline categories">
          {[
            { id: 'all', label: 'All Disciplines' },
            { id: 'thermal', label: 'HVAC & Mechanical' },
            { id: 'electrical', label: 'Electrical & BMS Controls' },
            { id: 'safety', label: 'Plumbing & Fire Safety' },
            { id: 'lifecycle', label: 'Testing TAB & Lifecycle O&M' },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeFilter === tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-tech-index uppercase tracking-wider transition-colors cursor-pointer border ${
                activeFilter === tab.id
                  ? 'bg-primary-container text-on-primary border-primary-container font-bold shadow-xs'
                  : 'bg-surface-container-lowest text-on-surface border-outline-variant hover:border-secondary hover:text-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div> */}

        {/* 8 Technical Service Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              // onClick={() => onSelectService(service)}
              className="bg-surface-container-lowest border border-outline-variant p-8 flex flex-col justify-between hover:border-secondary transition-all duration-150 group cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectService(service);
                }
              }}
              aria-label={`View technical specifications for ${service.title}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* <span className="font-tech-data text-tech-data font-bold text-secondary">
                    {service.number}
                  </span> */}
                  <span
                    className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors text-2xl"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* <div className="pt-6 border-t border-outline-variant/50 mt-8 flex items-center justify-between">
                <span className="font-tech-caption text-tech-caption uppercase text-on-surface-variant font-medium">
                  DISCIPLINE // {service.number}
                </span>
                <span
                  className="text-secondary font-bold group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
