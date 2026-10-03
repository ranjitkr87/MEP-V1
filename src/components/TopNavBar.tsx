import React, { useState, useEffect } from "react";

interface TopNavBarProps {
  onOpenConsultation: () => void;
  isBlueprintMode: boolean;
  onToggleBlueprintMode: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  onOpenConsultation,
  isBlueprintMode,
  onToggleBlueprintMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    // { label: "Capabilities", href: "#capabilities" },
    // { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-surface-container-lowest border-b border-outline-variant transition-all duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
        role="banner"
      >
        <div className="w-full mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Brand Zone */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-secondary"
            aria-label="TECTONIC HVAC & MEP Engineering - Return to top"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1V0H6J-ahxATC5WJRvlXCTw20BrNvx337CgNBEvFq6MXfzBbJxP7v30TXHE1joo4WkdqSC5W8qcdQdf-egsxLMUqnKOZYkBIQU_Q-kNoyR3qbegPGnObkwjHz5akpGo4ONGHU7PyHn1yTaUPLINIvjBuP0f_rrrkoufMOetqJd46rmIb2wYpHyKABwCdcTWv7GpWis6l9fcyYoRTKgQwFt1oGjOkEJBJwRWqad_aGufkY8JRVVccg5SIpY"
              alt="TECTONIC MEP Engineering Logo"
              className="h-10 w-auto object-contain"
              width="180"
              height="40"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="hidden xl:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-on-surface font-tech-index pb-1 hover:text-secondary hover:border-b-2 hover:border-secondary transition-all duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Trailing Action & Regional Indicator */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Blueprint Mode Toggle */}
            {/* <button
              onClick={onToggleBlueprintMode}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 border border-outline-variant text-tech-caption font-tech-caption uppercase hover:border-secondary text-on-surface-variant transition-colors"
              title={
                isBlueprintMode
                  ? "Switch to Standard View"
                  : "Switch to CAD Blueprint Mode"
              }
              aria-label="Toggle CAD Blueprint View Mode"
            >
              <span
                className="material-symbols-outlined text-sm"
                aria-hidden="true"
              >
                {isBlueprintMode ? "light_mode" : "architecture"}
              </span>
              <span>{isBlueprintMode ? "CAD: ON" : "CAD: VIEW"}</span>
            </button> */}

            {/* Direct Dispatch Line */}

            {/* CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center h-11 sm:h-12 px-4 sm:px-6 bg-primary-container text-on-primary font-tech-index uppercase tracking-wider hover:bg-secondary transition-colors duration-150 border-0 cursor-pointer whitespace-nowrap text-xs sm:text-sm font-semibold"
            >
              Request a Consultation
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-on-surface hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              <span
                className="material-symbols-outlined text-3xl"
                aria-hidden="true"
              >
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden fixed inset-0 z-40 bg-surface/95 backdrop-blur-sm pt-20 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="py-6 space-y-4 border-b border-outline-variant">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/60">
              <span className="text-tech-caption font-tech-caption uppercase tracking-wider text-secondary font-bold">
                EPC INFRASTRUCTURE NAVIGATION
              </span>
              <button
                onClick={onToggleBlueprintMode}
                className="px-2 py-1 border border-outline-variant text-tech-caption font-tech-caption uppercase text-on-surface"
              >
                {isBlueprintMode ? "Standard Mode" : "CAD Mode"}
              </button>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline-md text-2xl font-bold text-primary hover:text-secondary transition-colors py-2 flex items-center justify-between border-b border-outline-variant/30"
                >
                  <span>{link.label}</span>
                  <span className="text-secondary text-base">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 space-y-4">
            <div className="p-4 bg-surface-container border border-outline-variant">
              <span className="font-tech-caption text-tech-caption uppercase text-on-surface-variant block mb-1">
                24/7 GCC DISPATCH CENTER
              </span>
              <a
                href="tel:+97148006370"
                className="font-tech-index text-lg font-bold text-primary hover:text-secondary block"
              >
                +971 4 800 6370
              </a>
              <span className="font-tech-data text-xs text-on-surface-variant">
                Direct engineer hotline for tenders & active sites
              </span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full h-14 bg-primary-container text-on-primary font-tech-index uppercase tracking-wider flex items-center justify-center hover:bg-secondary transition-colors font-bold text-sm"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
};
