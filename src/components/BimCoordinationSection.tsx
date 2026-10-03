import React, { useState } from 'react';

export const BimCoordinationSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(0); // 0 = Core overview

  const nodeDetails = [
    {
      title: "BIM LOD 400 Federated Coordination Core",
      clashes: "0 Active Clashes",
      tolerance: "±2mm Fabrication Tolerance",
      software: "Autodesk Revit 2025 • Navisworks Manage • BIM Collaborate Pro",
      note: "Centralized spatial common data environment (CDE) linking all mechanical, electrical, and hydraulic elements into unified digital shop drawings before field fabrication."
    },
    {
      title: "01 / HVAC Spatial Clearance Standards",
      clashes: "100% Pre-cleared",
      tolerance: "Min 150mm overhead servicing clearance",
      software: "Revit MEP Fabrication Ductwork + Computational Fluid Dynamics (CFD)",
      note: "Ductwork sizing and acoustic silencer integration pre-coordinated with structural beams to prevent non-standard plenum offsets and airflow throttling."
    },
    {
      title: "02 / Mechanical Plant & Piping Isolation",
      clashes: "100% Pre-cleared",
      tolerance: "Min 300mm pipe-to-wall access clearance",
      software: "CAESAR II Pipe Stress Analysis + Revit Fabrication MEP",
      note: "High-pressure chilled water risers and horizontal mains modeled with thermal expansion loops, seismic restraints, and spring inertia blocks."
    },
    {
      title: "03 / Electrical LV/MV Cable Tray Containment",
      clashes: "100% Pre-cleared",
      tolerance: "Min 300mm vertical separation from hydronic lines",
      software: "ETAP Arc Flash & Short Circuit Simulation + Revit Electrical",
      note: "High-voltage 11kV/33kV containment routes separated strictly from water and drainage lines, ensuring total electromagnetic compatibility (EMC)."
    },
    {
      title: "04 / Plumbing & Fire Fighting Grids",
      clashes: "100% Pre-cleared",
      tolerance: "Gravity fall preserved at 1:60 to 1:100",
      software: "HydraCAD Hydraulic Fire Calculation + Revit Plumbing",
      note: "Gravity sanitary stacks modeled with exact hydraulic gradients and acoustic encasements, avoiding conflicts with cable trays and life-safety sprinkler mains."
    }
  ];

  return (
    <section 
      id="capabilities" 
      className="w-full bg-surface border-b border-outline-variant py-24"
      aria-labelledby="bim-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-2 font-bold">
            SYSTEM HARMONIZATION
          </span>
          <h2 
            id="bim-heading"
            className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-4"
          >
            ONE PARTNER.<br />COMPLETE BUILDING SYSTEMS.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            MEP engineering fails when disciplines are compartmentalized. We execute all five mechanical and electrical subsystems through a unified spatial BIM LOD 400 model.
          </p>
        </div>

        {/* Architectural Blueprint Coordinate Diagram Card */}
        <div className="bg-surface-container-lowest border border-outline-variant p-6 sm:p-8 md:p-14 relative overflow-hidden hairline-grid">
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Interactive Nodes Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 items-center">
              {/* Discipline 1: HVAC */}
              <div 
                onClick={() => setSelectedNode(1)}
                className={`bg-surface border p-5 text-center cursor-pointer transition-all ${
                  selectedNode === 1 ? 'border-secondary ring-2 ring-secondary/20 shadow-md' : 'border-outline-variant hover:border-secondary'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedNode(1)}
                aria-label="Inspect HVAC Systems coordination node"
              >
                <div className="font-tech-data text-tech-data text-secondary font-bold mb-1">01 / DISCIPLINE</div>
                <h3 className="font-tech-index text-tech-index text-primary uppercase font-bold mb-2">HVAC Systems</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Thermal loads, chilled loops, air handling &amp; acoustic baffling</p>
              </div>

              {/* Discipline 2: Mechanical */}
              <div 
                onClick={() => setSelectedNode(2)}
                className={`bg-surface border p-5 text-center cursor-pointer transition-all ${
                  selectedNode === 2 ? 'border-secondary ring-2 ring-secondary/20 shadow-md' : 'border-outline-variant hover:border-secondary'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedNode(2)}
                aria-label="Inspect Mechanical Plant coordination node"
              >
                <div className="font-tech-data text-tech-data text-secondary font-bold mb-1">02 / DISCIPLINE</div>
                <h3 className="font-tech-index text-tech-index text-primary uppercase font-bold mb-2">Mechanical Plant</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Pumps, heat exchangers, vibration pads &amp; boiler circuits</p>
              </div>

              {/* Central Core Indicator */}
              <div 
                onClick={() => setSelectedNode(0)}
                className={`bg-primary text-on-primary border-2 p-6 text-center shadow-sm cursor-pointer transition-all ${
                  selectedNode === 0 ? 'border-secondary ring-4 ring-secondary/30 scale-102' : 'border-secondary/60 hover:border-secondary'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedNode(0)}
                aria-label="Inspect Central BIM LOD 400 Core node"
              >
                <span className="material-symbols-outlined text-secondary mb-2 text-2xl" aria-hidden="true">
                  hub
                </span>
                <h3 className="font-tech-index text-tech-index font-bold uppercase tracking-wider mb-1 text-white">
                  INTEGRATED PERFORMANCE
                </h3>
                <span className="font-tech-caption text-tech-caption text-on-primary-container uppercase block font-semibold">
                  BIM LOD 400 COMMON DATA
                </span>
              </div>

              {/* Discipline 3: Electrical */}
              <div 
                onClick={() => setSelectedNode(3)}
                className={`bg-surface border p-5 text-center cursor-pointer transition-all ${
                  selectedNode === 3 ? 'border-secondary ring-2 ring-secondary/20 shadow-md' : 'border-outline-variant hover:border-secondary'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedNode(3)}
                aria-label="Inspect Electrical Systems coordination node"
              >
                <div className="font-tech-data text-tech-data text-secondary font-bold mb-1">03 / DISCIPLINE</div>
                <h3 className="font-tech-index text-tech-index text-primary uppercase font-bold mb-2">Electrical LV/MV</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Substations, main switchboards, cable routes &amp; harmonics</p>
              </div>

              {/* Discipline 4: Plumbing & Life Safety */}
              <div 
                onClick={() => setSelectedNode(4)}
                className={`bg-surface border p-5 text-center cursor-pointer transition-all ${
                  selectedNode === 4 ? 'border-secondary ring-2 ring-secondary/20 shadow-md' : 'border-outline-variant hover:border-secondary'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedNode(4)}
                aria-label="Inspect Plumbing & Life Safety coordination node"
              >
                <div className="font-tech-data text-tech-data text-secondary font-bold mb-1">04 / DISCIPLINE</div>
                <h3 className="font-tech-index text-tech-index text-primary uppercase font-bold mb-2">Plumbing &amp; Fire</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Potable networks, clean agent suppression &amp; drainage</p>
              </div>
            </div>

            {/* Selected Node Inspector Detail Banner */}
            <div className="mt-8 p-5 bg-surface border border-outline-variant flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-tech-caption text-[11px] text-secondary font-bold uppercase">
                    ACTIVE NODE INSPECTOR:
                  </span>
                  <h4 className="font-tech-index text-sm font-bold text-primary uppercase">
                    {nodeDetails[selectedNode].title}
                  </h4>
                </div>
                <p className="font-body-sm text-xs text-on-surface-variant max-w-2xl">
                  {nodeDetails[selectedNode].note}
                </p>
              </div>
              <div className="flex flex-wrap md:flex-col gap-2 text-right font-tech-data text-xs whitespace-nowrap">
                <span className="text-secondary font-bold">{nodeDetails[selectedNode].clashes}</span>
                <span className="text-on-surface-variant font-mono">{nodeDetails[selectedNode].tolerance}</span>
              </div>
            </div>

            {/* Interconnectivity Data Row below */}
            <div className="mt-8 pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-tech-data text-tech-data">
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold" aria-hidden="true">■</span>
                <span>ZERO PHYSICAL CLASHES ON SITE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold" aria-hidden="true">■</span>
                <span>UNIFIED COMMISSIONING SCRIPTING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold" aria-hidden="true">■</span>
                <span>SINGLE CONTRACTUAL ACCOUNTABILITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
