import React, { useState, useEffect } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Full Turnkey MEP Infrastructure',
}) => {
  const [projectType, setProjectType] = useState<string>('Commercial High-Rise');
  const [region, setRegion] = useState<string>('Dubai (DEWA / Empower)');
  const [areaSqFt, setAreaSqFt] = useState<number>(250000);
  const [disciplines, setDisciplines] = useState<string[]>([
    'Central HVAC & District Cooling',
    'Heavy Electrical Substation',
    'BIM LOD 400 Coordination'
  ]);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Engineering calculation estimates
  const coolingFactorMap: Record<string, number> = {
    'Commercial High-Rise': 200,
    'Specialized Hospital / Healthcare': 130,
    'Luxury 5-Star Resort': 180,
    'Data Center Tier III/IV': 50,
    'Industrial Cold Storage': 300,
    'Retail Atrium Mall': 160
  };

  const coolingDivisor = coolingFactorMap[projectType] || 200;
  const estimatedTonnage = Math.round(areaSqFt / coolingDivisor);
  const estimatedPowerMva = (estimatedTonnage * 0.0035 + (areaSqFt * 0.00004)).toFixed(1);
  const estimatedBimElements = Math.round(areaSqFt * 0.012).toLocaleString();

  const toggleDiscipline = (disc: string) => {
    if (disciplines.includes(disc)) {
      setDisciplines(disciplines.filter(d => d !== disc));
    } else {
      setDisciplines([...disciplines, disc]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consultation-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-lowest border-2 border-outline-variant overflow-y-auto hairline-grid shadow-2xl"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-primary-container text-on-primary px-6 py-4 flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-secondary inline-block" aria-hidden="true"></span>
            <div>
              <span className="font-tech-caption text-[10px] uppercase tracking-widest text-on-primary-container block">
                ENGINEERING RFP &amp; TENDER DESK
              </span>
              <h2 id="modal-consultation-title" className="font-tech-index text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                Tender Scope &amp; Capacity Estimator
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-on-primary hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <span className="material-symbols-outlined text-5xl text-secondary" aria-hidden="true">
                verified
              </span>
              <h3 className="font-headline-md text-primary font-bold">
                Tender Scope Transmitted to Senior Estimators
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{clientName || 'Partner'}</strong>. Your inquiry for <strong>{projectType}</strong> ({areaSqFt.toLocaleString()} Sq.Ft in {region}) has been assigned reference <strong>#TCT-EST-{Math.floor(1000 + Math.random() * 9000)}</strong>.
              </p>
              <div className="p-4 bg-surface-container border border-outline-variant max-w-md mx-auto text-left text-xs font-tech-data space-y-2">
                <div><strong>Estimated Tonnage:</strong> {estimatedTonnage.toLocaleString()} TR</div>
                <div><strong>Estimated Power Load:</strong> {estimatedPowerMva} MVA</div>
                <div><strong>Lead Engineering Hub:</strong> {region.includes('Dubai') ? 'Dubai HQ (Al Quoz)' : region.includes('Riyadh') ? 'Riyadh Technical Office' : 'Doha Operations Center'}</div>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-primary-container text-on-primary font-tech-index text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-colors"
                >
                  Return to Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8">
              {/* Step 1: Parameters */}
              <div>
                <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-4">
                  01 // ASSET TYPOLOGY &amp; SCALE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-tech-data text-xs text-on-surface mb-1 font-semibold">
                      Building Classification
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3 py-2.5 bg-surface border border-outline-variant text-xs text-primary font-medium focus:border-secondary focus:outline-none"
                    >
                      <option value="Commercial High-Rise">Commercial High-Rise Office</option>
                      <option value="Specialized Hospital / Healthcare">Specialized Hospital / Healthcare</option>
                      <option value="Luxury 5-Star Resort">Luxury 5-Star Resort &amp; Marina</option>
                      <option value="Data Center Tier III/IV">Data Center Tier III / IV</option>
                      <option value="Industrial Cold Storage">Industrial Logistics &amp; Cold Storage</option>
                      <option value="Retail Atrium Mall">Retail Shopping Center &amp; Atrium</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-tech-data text-xs text-on-surface mb-1 font-semibold">
                      Regional Regulatory Jurisdiction
                    </label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full px-3 py-2.5 bg-surface border border-outline-variant text-xs text-primary font-medium focus:border-secondary focus:outline-none"
                    >
                      <option value="Dubai (DEWA / Empower)">Dubai, UAE (DEWA / Empower / DCD)</option>
                      <option value="Abu Dhabi (ADDC / KIZAD)">Abu Dhabi, UAE (ADDC / Tabreed)</option>
                      <option value="Riyadh (SEC / SASO)">Riyadh, KSA (SEC / Royal Commission)</option>
                      <option value="Doha (Kahramaa / Ashghal)">Doha, Qatar (Kahramaa / Marafeq)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-tech-data text-xs text-on-surface mb-1 font-semibold">
                      Gross Floor Area (Sq. Ft.)
                    </label>
                    <input
                      type="number"
                      min={10000}
                      max={5000000}
                      step={10000}
                      value={areaSqFt}
                      onChange={(e) => setAreaSqFt(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-surface border border-outline-variant text-xs text-primary font-medium focus:border-secondary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Real-time Engineering Capacity Output Matrix */}
              <div className="p-4 sm:p-5 bg-surface-container border border-outline-variant">
                <span className="font-tech-caption text-[11px] uppercase text-on-surface-variant block mb-3 font-semibold">
                  ESTIMATED SYSTEM DEMANDS (BASED ON ASHRAE +52°C GCC CLIMATIC CURVES):
                </span>
                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-outline-variant/60 font-tech-data">
                  <div>
                    <span className="text-[11px] text-on-surface-variant block">COOLING TONNAGE</span>
                    <strong className="text-secondary text-lg sm:text-xl block tabular-nums font-bold">
                      {estimatedTonnage.toLocaleString()} TR
                    </strong>
                    <span className="text-[10px] text-on-surface-variant">District ETS / Chillers</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[11px] text-on-surface-variant block">ELECTRICAL LOAD</span>
                    <strong className="text-primary text-lg sm:text-xl block tabular-nums font-bold">
                      {estimatedPowerMva} MVA
                    </strong>
                    <span className="text-[10px] text-on-surface-variant">Substation Rating</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[11px] text-on-surface-variant block">BIM LOD 400 ASSETS</span>
                    <strong className="text-primary text-lg sm:text-xl block tabular-nums font-bold">
                      {estimatedBimElements}
                    </strong>
                    <span className="text-[10px] text-on-surface-variant">Revit Model Elements</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Required Subsystems */}
              <div>
                <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-3">
                  02 // REQUIRED MEP DISCIPLINES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-tech-data">
                  {[
                    'Central HVAC & District Cooling',
                    'Heavy Electrical Substation',
                    'BIM LOD 400 Coordination',
                    'Potable & Acoustic Plumbing',
                    'UL/FM Certified Fire Suppression',
                    'BACnet IP Smart BMS Automation',
                    'Certified NEBB Testing & TAB',
                    '24/7 SLA Operations & Maintenance'
                  ].map((disc) => (
                    <label
                      key={disc}
                      className={`flex items-center gap-3 p-3 border cursor-pointer transition-colors ${
                        disciplines.includes(disc)
                          ? 'border-secondary bg-surface-container-low font-semibold text-primary'
                          : 'border-outline-variant bg-surface text-on-surface-variant hover:border-secondary'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={disciplines.includes(disc)}
                        onChange={() => toggleDiscipline(disc)}
                        className="accent-secondary h-4 w-4"
                      />
                      <span>{disc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div>
                <span className="font-tech-caption text-xs uppercase text-secondary font-bold block mb-4">
                  03 // TRANSMISSION DESK CONTACT
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-tech-caption text-[11px] uppercase text-on-surface mb-1 font-semibold">
                      Your Name &amp; Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Sarah Mansour, Senior PM"
                      className="w-full px-3 py-2 bg-surface border border-outline-variant text-xs text-primary focus:border-secondary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-tech-caption text-[11px] uppercase text-on-surface mb-1 font-semibold">
                      Company Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="s.mansour@entity.ae"
                      className="w-full px-3 py-2 bg-surface border border-outline-variant text-xs text-primary focus:border-secondary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-tech-caption text-[11px] uppercase text-on-surface mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3 py-2 bg-surface border border-outline-variant text-xs text-primary focus:border-secondary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block font-tech-caption text-[11px] uppercase text-on-surface mb-1 font-semibold">
                    Specific Technical Directives / Target Mobilization Date
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specify project stage (Concept, Schematic, Detailed Design, or Ready for Construction)..."
                    className="w-full px-3 py-2 bg-surface border border-outline-variant text-xs text-primary focus:border-secondary focus:outline-none resize-y"
                  ></textarea>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-tech-data text-xs text-on-surface-variant text-center sm:text-left">
                  Tenders processed under strict non-disclosure FIDIC protocols.
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-6 py-2.5 border border-outline-variant font-tech-index text-xs uppercase hover:bg-surface-container text-primary font-bold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 sm:w-auto px-8 py-2.5 bg-primary-container text-on-primary font-tech-index text-xs uppercase tracking-wider font-bold hover:bg-secondary transition-colors cursor-pointer"
                  >
                    Submit Scope Specification →
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
