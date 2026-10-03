import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full bg-surface-container-low border-t border-outline-variant transition-colors duration-150 ease-in-out"
      role="contentinfo"
    >
      <div className="w-full mx-auto px-6 lg:px-12 py-16">
        {/* Top Grid: Branding & Office Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Corporate Identification */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <img
                alt="TECTONIC MEP Engineering Logo"
                className="h-10 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1V0H6J-ahxATC5WJRvlXCTw20BrNvx337CgNBEvFq6MXfzBbJxP7v30TXHE1joo4WkdqSC5W8qcdQdf-egsxLMUqnKOZYkBIQU_Q-kNoyR3qbegPGnObkwjHz5akpGo4ONGHU7PyHn1yTaUPLINIvjBuP0f_rrrkoufMOetqJd46rmIb2wYpHyKABwCdcTWv7GpWis6l9fcyYoRTKgQwFt1oGjOkEJBJwRWqad_aGufkY8JRVVccg5SIpY"
                width="180"
                height="40"
              />
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              Regional licensed EPC contractor delivering high-precision HVAC,
              mechanical, electrical, and public health engineering across the
              United Arab Emirates, Kingdom of Saudi Arabia, and Qatar.
            </p>
            {/* <div className="flex items-center gap-3">
              <span className="font-tech-data text-tech-data uppercase text-primary font-bold">
                CR # 1048820
              </span>
              <span className="text-outline-variant" aria-hidden="true">|</span>
              <span className="font-tech-data text-tech-data uppercase text-secondary font-bold">
                FIDIC REGISTERED
              </span>
            </div> */}
          </div>

          {/* Discipline Links Column */}
          <div className="lg:col-span-3">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-on-surface-variant block mb-4 font-bold">
              TECHNICAL DISCIPLINES
            </span>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <a
                  className="font-tech-data text-tech-data text-on-surface hover:text-secondary transition-colors"
                  href="#services"
                >
                  HVAC &amp; District Cooling
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-tech-data text-on-surface hover:text-secondary transition-colors"
                  href="#services"
                >
                  Electrical &amp; Substation MV/LV
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-tech-data text-on-surface hover:text-secondary transition-colors"
                  href="#services"
                >
                  Plumbing &amp; Public Health
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-tech-data text-on-surface hover:text-secondary transition-colors"
                  href="#services"
                >
                  Fire Protection &amp; Life Safety
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-tech-data text-on-surface hover:text-secondary transition-colors"
                  href="#services"
                >
                  Building Management Systems (BMS)
                </a>
              </li>
            </ul>
          </div>

          {/* Middle East Regional Office Directory */}
          <div className="lg:col-span-3">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-on-surface-variant block mb-4 font-bold">
              REGIONAL OFFICES
            </span>
            <div className="space-y-4 font-body-sm text-body-sm text-on-surface-variant">
              <div>
                <strong className="font-tech-data text-primary block">
                  Dubai Regional HQ
                </strong>
                <span>
                  Al Quoz Industrial 3, Sheikh Zayed Road, PO Box 4921, Dubai,
                  UAE
                </span>
              </div>
              <div>
                <strong className="font-tech-data text-primary block">
                  Riyadh Technical Office
                </strong>
                <span>
                  King Fahd Road, Al Olaya District, Riyadh 12211, Kingdom of
                  Saudi Arabia
                </span>
              </div>
              <div>
                <strong className="font-tech-data text-primary block">
                  Doha Operations Center
                </strong>
                <span>Lusail Marina Tower, Lusail City, Doha, Qatar</span>
              </div>
            </div>
          </div>

          {/* Legal Compliance, Standards & Crawler Artifacts */}
          <div className="lg:col-span-2">
            <span className="font-tech-caption text-tech-caption uppercase tracking-widest text-on-surface-variant block mb-4 font-bold">
              STANDARDS &amp; REPO
            </span>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <span className="font-tech-data text-tech-data text-on-surface">
                  ISO 9001:2015
                </span>
              </li>
              <li>
                <span className="font-tech-data text-tech-data text-on-surface">
                  ISO 14001:2015
                </span>
              </li>
              <li>
                <span className="font-tech-data text-tech-data text-on-surface">
                  ISO 45001:2018
                </span>
              </li>
              {/* <li className="pt-2">
                <a
                  className="font-tech-data text-xs text-on-surface-variant hover:text-secondary transition-colors block"
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  robots.txt
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-xs text-on-surface-variant hover:text-secondary transition-colors block"
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sitemap.xml
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-xs text-on-surface-variant hover:text-secondary transition-colors block"
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  llms.txt
                </a>
              </li>
              <li>
                <a
                  className="font-tech-data text-xs text-on-surface-variant hover:text-secondary transition-colors block"
                  href="/humans.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  humans.txt
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar / Immutable Copyright */}
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-tech-caption text-tech-caption text-on-surface-variant uppercase text-center md:text-left">
            © 2025 AL-MUTQAN MEP INFRASTRUCTURE CONTRACTING LLC. ALL RIGHTS
            RESERVED. REGIONAL LICENSED EPC CONTRACTOR (GCC / MENA).
          </p>
          <div className="flex items-center gap-6">
            <span className="font-tech-caption text-tech-caption text-on-surface-variant uppercase font-semibold">
              ALL SUB-CONTRACTED WORKS AUTHORIZED &amp; INSURED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
