import React, { useState } from "react";
import {
  PROJECTS_DATA,
  ENGINEERING_METRICS,
  Project,
} from "../data/engineeringData.ts";
import { SafeImage } from "./SafeImage.tsx";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  const filteredProjects = PROJECTS_DATA.filter((prj) => {
    if (selectedCountry === "all") return true;
    if (selectedCountry === "uae")
      return prj.country.includes("United Arab Emirates");
    if (selectedCountry === "ksa") return prj.country.includes("Saudi Arabia");
    if (selectedCountry === "qatar") return prj.country.includes("Qatar");
    return true;
  });

  return (
    <>
      <section
        id="projects"
        className="w-full bg-surface border-b border-outline-variant py-24"
        aria-labelledby="projects-heading"
      >
        <div className="w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
                PORTFOLIO TRACK RECORD
              </span>
              <h2
                id="projects-heading"
                className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight"
              >
                SELECTED PROJECTS
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
              <span className="font-tech-caption text-tech-caption text-on-surface-variant uppercase tracking-wider bg-surface-container px-3 py-1.5 border border-outline-variant">
                CMS VERIFIED // GCC INFRASTRUCTURE
              </span>
            </div>
          </div>

          {/* Region Tabs */}
          <div
            className="flex items-center gap-2 mb-10 pb-4 border-b border-outline-variant/40"
            role="tablist"
            aria-label="Region filter"
          >
            {[
              { id: "all", label: "All Regions" },
              { id: "uae", label: "UAE (Dubai / Abu Dhabi)" },
              { id: "ksa", label: "Saudi Arabia (Riyadh)" },
              { id: "qatar", label: "Qatar (Doha)" },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selectedCountry === tab.id}
                onClick={() => setSelectedCountry(tab.id)}
                className={`px-4 py-2 text-xs font-tech-index uppercase tracking-wider transition-colors cursor-pointer border ${
                  selectedCountry === tab.id
                    ? "bg-primary-container text-on-primary border-primary-container font-bold shadow-xs"
                    : "bg-surface-container-lowest text-on-surface border-outline-variant hover:border-secondary hover:text-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3-Column Project Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-surface-container-lowest border border-outline-variant hover:border-secondary transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`View detailed case study for ${project.title}`}
              >
                {/* Visual Header */}
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-surface-container border-b border-outline-variant/60 relative">
                    <SafeImage
                      src={project.imageUrl}
                      alt={project.altText}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2.5 py-1 text-tech-caption font-tech-caption text-secondary uppercase font-bold border border-outline-variant/60">
                      REF: {project.ref}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-on-surface-variant font-tech-data text-xs font-mono">
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-surface px-2.5 py-1 border border-outline-variant font-tech-caption text-[11px] text-on-surface uppercase">
                        {project.rating}
                      </span>
                      <span className="bg-surface px-2.5 py-1 border border-outline-variant font-tech-caption text-[11px] text-on-surface uppercase font-semibold text-secondary">
                        {project.coolingCapacity}
                      </span>
                      <span className="bg-surface px-2.5 py-1 border border-outline-variant font-tech-caption text-[11px] text-on-surface uppercase">
                        {project.yearCompleted}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-outline-variant/50 flex items-center justify-between">
                    <span className="font-tech-index text-xs uppercase tracking-wider text-secondary font-bold group-hover:text-primary transition-colors">
                      View Project Case Study
                    </span>
                    <span
                      className="text-secondary font-bold group-hover:translate-x-1.5 transition-transform"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics Ribbon */}
      <section
        className="w-full bg-surface-container-low border-b border-outline-variant py-16"
        aria-label="Quantitative Infrastructure Track Record Statistics"
      >
        <div className="w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            <div className="pt-4 md:pt-0">
              <span className="font-display-xl text-display-xl font-bold text-primary block mb-2 leading-none tabular-nums">
                {ENGINEERING_METRICS.yearsExperience}
              </span>
              <span className="font-tech-data text-tech-data text-on-surface-variant uppercase tracking-wider">
                Years Operational
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-8">
              <span className="font-display-xl text-display-xl font-bold text-primary block mb-2 leading-none tabular-nums">
                {ENGINEERING_METRICS.megaprojectsDelivered}
              </span>
              <span className="font-tech-data text-tech-data text-on-surface-variant uppercase tracking-wider">
                Completed Projects
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-8">
              <span className="font-display-xl text-display-xl font-bold text-primary block mb-2 leading-none tabular-nums">
                {ENGINEERING_METRICS.sqftManaged}
              </span>
              <span className="font-tech-data text-tech-data text-on-surface-variant uppercase tracking-wider">
                Sq. Ft. MEP Managed
              </span>
            </div>
            <div className="pt-4 md:pt-0 md:pl-8">
              <span className="font-display-xl text-display-xl font-bold text-secondary block mb-2 leading-none tabular-nums">
                {ENGINEERING_METRICS.gccMarketsServed}
              </span>
              <span className="font-tech-data text-tech-data text-on-surface-variant uppercase tracking-wider">
                GCC Markets Served
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
