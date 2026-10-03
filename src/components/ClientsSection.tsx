import React from 'react';

export const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'EMAAR // DEV', region: 'DUBAI' },
    { name: 'ROSHN // KSA', region: 'RIYADH' },
    { name: 'QATARI DIAR', region: 'DOHA' },
    { name: 'ALDAR // PROP', region: 'ABU DHABI' },
    { name: 'RED SEA GLOBAL', region: 'KSA' },
    { name: 'MERAAS // GRP', region: 'DUBAI' },
  ];

  return (
    <section 
      className="w-full bg-surface border-b border-outline-variant py-16"
      aria-label="Institutional Clients and Regional Master Developers"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-on-surface-variant font-bold">
            TRUSTED ACROSS COMPLEX BUILT ENVIRONMENTS
          </span>
        </div>

        {/* Monochrome Institutional Developer Marks */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center opacity-85">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-center font-tech-index text-xs sm:text-tech-index font-bold text-primary tracking-widest border border-outline-variant/60 py-4 px-2 bg-surface-container-lowest hover:border-secondary hover:text-secondary transition-colors"
            >
              <div>{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
