import React from "react";

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      num: "01 // DOMAIN MASTERY",
      title: "Deep GCC Technical Expertise",
      desc: "Our senior engineers possess in-depth local knowledge of Middle East thermal behaviors, extreme ambient design loads, and utility authority criteria.",
    },
    {
      num: "02 // INTEGRATION",
      title: "Single-Source MEP Delivery",
      desc: "Eliminating multi-vendor friction by handling HVAC, mechanical piping, electrical distribution, and plumbing under a singular chain of command.",
    },
    {
      num: "03 // PRECISION",
      title: "BIM LOD 400 Coordination",
      desc: "All physical penetrations, equipment clearances, and cable trays are resolved virtually before site mobilization, preventing costly field re-work.",
    },
    {
      num: "04 // EXECUTION",
      title: "Quality-Focused Handover",
      desc: "Every component undergoes stringent factory acceptance and on-site testing protocols with full traceability for civil defense and municipal certification.",
    },
    {
      num: "05 // SAFETY",
      title: "Safety & Regulatory Rigor",
      desc: "ISO 45001 audited protocols ensure that high-risk electrical and mechanical lifting maneuvers proceed without interruption or compromise.",
    },
    {
      num: "06 // CONTINUITY",
      title: "Long-Term Asset Support",
      desc: "We back our construction deliverables with dedicated regional operations and maintenance teams ready to sustain optimal COP across decades.",
    },
  ];

  return (
    <section
      className="w-full bg-surface-container-lowest border-b border-outline-variant py-24"
      aria-labelledby="why-us-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
            STRATEGIC ADVANTAGE
          </span>
          <h2
            id="why-us-heading"
            className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-4"
          >
            WHY PROJECT TEAMS WORK WITH US
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Contractors, developer conglomerates, and master consultants partner
            with Tectonic for systematic certainty across complex MEP contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.num}
              className="p-6 border border-outline-variant bg-surface hover:border-secondary transition-colors"
            >
              {/* <span className="font-tech-caption text-tech-caption uppercase text-secondary font-bold block mb-2">
                {adv.num}
              </span> */}
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                {adv.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
