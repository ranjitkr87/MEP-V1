import React, { useState } from 'react';
import { SafeImage } from './SafeImage.tsx';

interface HvacFeatureSectionProps {
  onExploreHvac: () => void;
}

export const HvacFeatureSection: React.FC<HvacFeatureSectionProps> = ({ onExploreHvac }) => {
  const [showThermalSim, setShowThermalSim] = useState(false);
  const [ambientTemp, setAmbientTemp] = useState<number>(50);

  // Dynamic COP calculation based on ambient temperature
  const estimatedCop = (6.4 - (ambientTemp - 35) * 0.08).toFixed(2);
  const deltaTReturn = (5.5 + (ambientTemp > 45 ? 9.0 : 8.0)).toFixed(1);

  return (
    <section 
      className="w-full bg-surface-container-lowest border-b border-outline-variant py-24"
      aria-labelledby="hvac-feature-heading"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Asset Left */}
          <div className="lg:col-span-6">
            <div className="relative bg-surface p-2 border border-outline-variant">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container group">
                <SafeImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3Zo4uP2nLYMwRpcbNuPBzCIWOgHHB82MLkXBHRARObAgwnVLCLS-9kDEa567fe4zlVr9X-8-fEtqbGiH26O_LCtd4ZRy91fQXGXC5iyWcBcJArf4gWuLLtOi20P3q85_ZZvvIr0bOVlzZHt9FG0t7wgpTbiREvCT-JYb5roQKFVwo8b2q71kOGKs9f6GrypySecdQLJfWHOp5Fl-IsbfB-tfIS-RQtjeSyKk0nzp3IGf8aGa2hzJ"
                  alt="Industrial Chilled Water Mechanical Plant Room with magnetic chillers"
                  fallbackTitle="High-Delta T Chilled Water Plant Room"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-on-primary font-tech-caption px-3 py-1 uppercase tracking-wider text-xs">
                  HIGH-DELTA T CENTRAL PLANT // YORK CHILLERS
                </div>
              </div>

              {/* Thermal Sizing Simulator Drawer */}
              <div className="mt-3 p-4 bg-surface-container border border-outline-variant/60">
                <div className="flex items-center justify-between">
                  <span className="font-tech-data text-xs text-primary font-bold uppercase">
                    THERMAL SIMULATOR // +52°C AMBIENT RATING
                  </span>
                  <button
                    onClick={() => setShowThermalSim(!showThermalSim)}
                    className="font-tech-caption text-[11px] text-secondary hover:text-primary uppercase font-bold"
                  >
                    {showThermalSim ? 'CLOSE SIMULATOR' : 'TEST AMBIENT COP →'}
                  </button>
                </div>

                {showThermalSim && (
                  <div className="mt-3 pt-3 border-t border-outline-variant/50 space-y-3">
                    <div className="flex items-center justify-between text-xs font-tech-data">
                      <span>Ambient Outdoor Air: <strong className="text-secondary">{ambientTemp}°C</strong></span>
                      <input 
                        type="range" 
                        min="35" 
                        max="52" 
                        value={ambientTemp} 
                        onChange={(e) => setAmbientTemp(Number(e.target.value))}
                        className="w-36 accent-secondary"
                        aria-label="Outdoor ambient air temperature slider"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-tech-data pt-1">
                      <div className="p-2 bg-surface border border-outline-variant/50">
                        <span className="text-[10px] text-on-surface-variant block">CHILLER COP</span>
                        <strong className="text-primary text-sm tabular-nums">{estimatedCop}</strong>
                      </div>
                      <div className="p-2 bg-surface border border-outline-variant/50">
                        <span className="text-[10px] text-on-surface-variant block">SUPPLY / RETURN</span>
                        <strong className="text-primary text-sm tabular-nums">5.5° / {deltaTReturn}°C</strong>
                      </div>
                      <div className="p-2 bg-surface border border-outline-variant/50">
                        <span className="text-[10px] text-on-surface-variant block">PUMP POWER</span>
                        <strong className="text-secondary text-sm tabular-nums">-48% kW</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Technical Breakdown Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-secondary block mb-3 font-bold">
              THERMAL INFRASTRUCTURE
            </span>
            <h2 
              id="hvac-feature-heading"
              className="font-headline-lg text-headline-lg text-primary font-bold uppercase tracking-tight mb-6"
            >
              COMFORT IS ENGINEERED.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Middle Eastern climatic extremes demand precision thermal engineering. We design, install, and optimize central cooling infrastructures that operate reliably at +52°C ambient temperatures while maintaining strict coefficient of performance (COP) thresholds.
            </p>

            {/* 10 Structured Technical Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 mb-10 pb-8 border-b border-outline-variant text-body-sm font-medium">
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Chilled Water &amp; High-Delta T Loops</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">VRF / VRV Modular Systems</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Centrifugal &amp; Magnetic Chillers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Custom AHUs with HEPA Filtration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Low-Noise Precision FCUs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">High-Performance Ventilation Systems</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Precision Insulated Ductwork (DW144)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Induced-Draft Cooling Towers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">Life-Safety Smoke Extraction Networks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-secondary font-bold text-xs" aria-hidden="true">■</span>
                <span className="text-primary font-tech-data">BACnet BMS &amp; Flow Sensor Staging</span>
              </div>
            </div>

            <div>
              <button
                onClick={onExploreHvac}
                className="inline-flex items-center gap-2 font-tech-index text-tech-index uppercase tracking-wider text-secondary font-bold hover:text-primary transition-colors cursor-pointer bg-transparent border-0 p-0"
              >
                <span>Explore HVAC Capabilities</span>
                <span className="text-base" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
