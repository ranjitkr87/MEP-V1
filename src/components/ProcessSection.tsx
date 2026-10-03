import React, { useState } from "react";

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: "01",
      phase: "PRE-CON",
      title: "Consultation & Planning",
      desc: "Thermal load modeling, utility liaison (DEWA/Kahramaa/SEC), and cost plan validation.",
      details:
        "Comprehensive upfront thermodynamic simulation assessing building envelope, solar shading coefficients, and municipal utility connection points to guarantee power and chilled water availability.",
    },
    {
      num: "02",
      phase: "DESIGN",
      title: "BIM Coordination",
      desc: "LOD 400 fabrication modeling, automated clash clearance, and shop drawing sign-offs.",
      details:
        "Direct spatial integration in Autodesk Revit and Navisworks. All ductwork, pipe supports, valves, and cable trays are federated with zero hard or soft interference tolerances.",
    },
    {
      num: "03",
      phase: "SUPPLY",
      title: "Procurement & Staging",
      desc: "Tier-1 OEM long-lead equipment procurement, factory witness testing (FAT), and logistics.",
      details:
        "Direct procurement partnerships with Daikin, York, Carrier, Schneider, and Armstrong. Dedicated QA engineers oversee Factory Acceptance Tests before regional shipment.",
    },
    {
      num: "04",
      phase: "EXECUTION",
      title: "Installation & TAB",
      desc: "Rigorous on-site erection, pressure testing, certified air/water balancing, and SAT runs.",
      details:
        "Supervised by licensed MEP construction managers. Includes hydrostatic pressure testing, weld radiography, SMACNA duct leakage verification, and certified NEBB balancing.",
    },
    {
      num: "05",
      phase: "ASSET LIFE",
      title: "Handover & O&M",
      desc: "Civil Defense clearances, as-built documentation, operator training, and SLA execution.",
      details:
        "Smooth handover encompassing Civil Defense approvals, comprehensive O&M manuals, client engineering staff training, and deployment of 24/7 emergency response coverage.",
    },
  ];

  return (
    <section
      className="w-full bg-surface border-b border-outline-variant py-24"
      aria-labelledby="process-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
            PROJECT LIFECYCLE
          </span>
          <h2
            id="process-heading"
            className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-4"
          >
            FROM DESIGN TO COMMISSIONING
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A systematic EPC delivery workflow engineered to eliminate spatial
            conflicts, control capital costs, and secure flawless authority
            approvals.
          </p>
        </div>

        {/* 5-Step Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(idx + 1)}
              className={`border p-6 flex flex-col justify-between transition-all cursor-pointer ${
                activeStep === idx + 1
                  ? "bg-surface-container-lowest border-secondary shadow-sm ring-1 ring-secondary/20"
                  : "bg-surface-container-lowest border-outline-variant hover:border-secondary"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && setActiveStep(idx + 1)
              }
              aria-label={`Inspect Step ${step.num}: ${step.title}`}
            >
              <div>
                <span className="font-tech-data text-tech-data font-bold text-secondary block mb-4">
                  {/* {step.num} // {step.phase} */}
                </span>
                <h3 className="font-tech-index text-tech-index text-primary font-bold uppercase mb-3">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-outline-variant font-tech-caption text-tech-caption text-on-surface-variant uppercase flex items-center justify-between">
                <span>PHASE {step.num}</span>
                <span className="text-secondary font-bold">
                  {activeStep === idx + 1 ? "●" : "○"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Phase Deep Dive Banner */}
        {/* <div className="mt-8 p-6 bg-surface-container border border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-tech-caption text-tech-caption uppercase tracking-wider text-secondary font-bold block mb-1">
              EXECUTION PROTOCOL // PHASE 0{activeStep}:{" "}
              {steps[activeStep - 1].title}
            </span>
            <p className="font-body-sm text-on-surface-variant max-w-3xl">
              {steps[activeStep - 1].details}
            </p>
          </div>
          <span className="font-tech-data text-xs text-primary font-mono whitespace-nowrap bg-surface px-3 py-1.5 border border-outline-variant">
            GATEWAY AUDIT: PASSED
          </span>
        </div> */}
      </div>
    </section>
  );
};
