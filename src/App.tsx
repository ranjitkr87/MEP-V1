/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TopNavBar } from "./components/TopNavBar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { ServicesSection } from "./components/ServicesSection.tsx";
import { HvacFeatureSection } from "./components/HvacFeatureSection.tsx";
import { BimCoordinationSection } from "./components/BimCoordinationSection.tsx";
import { IndustriesSection } from "./components/IndustriesSection.tsx";
import { ProjectsSection } from "./components/ProjectsSection.tsx";
import { ProcessSection } from "./components/ProcessSection.tsx";
import { QualitySafetySection } from "./components/QualitySafetySection.tsx";
import { MaintenanceSection } from "./components/MaintenanceSection.tsx";
import { WhyUsSection } from "./components/WhyUsSection.tsx";
import { ClientsSection } from "./components/ClientsSection.tsx";
import { InsightsSection } from "./components/InsightsSection.tsx";
import { FaqSection } from "./components/FaqSection.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { Footer } from "./components/Footer.tsx";

// Interactive Modals
import { ConsultationModal } from "./components/Modals/ConsultationModal.tsx";
import { ProjectDetailModal } from "./components/Modals/ProjectDetailModal.tsx";
import { ServiceDetailModal } from "./components/Modals/ServiceDetailModal.tsx";
import { InsightReaderModal } from "./components/Modals/InsightReaderModal.tsx";

import {
  PROJECTS_DATA,
  Project,
  ServiceItem,
  InsightPaper,
} from "./data/engineeringData.ts";

export default function App() {
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const [selectedPaper, setSelectedPaper] = useState<InsightPaper | null>(null);

  const toggleBlueprintMode = () => {
    setIsBlueprintMode((prev) => !prev);
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-body-md text-body-md transition-colors duration-200 ${isBlueprintMode ? "blueprint-mode" : ""}`}
    >
      {/* 1. Header Navigation */}
      <TopNavBar
        onOpenConsultation={() => setConsultationOpen(true)}
        isBlueprintMode={isBlueprintMode}
        onToggleBlueprintMode={toggleBlueprintMode}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection
          onExploreServices={() => scrollToSection("services")}
          onViewProjects={() => scrollToSection("projects")}
          onOpenProjectCaseStudy={handleOpenProjectById}
        />

        {/* 3. Corporate Profile */}
        <AboutSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 4. Core Disciplines / Bento Grid */}
        <ServicesSection onSelectService={(svc) => setSelectedService(svc)} />

        {/* 5. Thermal Infrastructure & HVAC Features */}
        <HvacFeatureSection onExploreHvac={() => scrollToSection("services")} />

        {/* 6. BIM LOD 400 Coordination Blueprint Core */}
        {/* <BimCoordinationSection /> */}

        {/* 7. Sector Specialization */}
        <IndustriesSection
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 8. Portfolio Track Record & Selected Projects */}
        <ProjectsSection onSelectProject={(prj) => setSelectedProject(prj)} />

        {/* 10. Engineering Process Lifecycle */}
        <ProcessSection />

        {/* 11. Governance, Standards & Zero-Harm Safety */}
        <QualitySafetySection />

        {/* 12. Lifecycle Continuity & Maintenance */}
        <MaintenanceSection
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 13. Strategic Advantage / Why Us */}
        <WhyUsSection />

        {/* 14. Clients & Master Developer Trust */}
        <ClientsSection />

        {/* 15. Engineering Insights & Technical Whitepapers */}
        {/* <InsightsSection onSelectPaper={(paper) => setSelectedPaper(paper)} /> */}

        {/* 16. Technical & Authority FAQ */}
        <FaqSection />

        {/* 17. Tender Consultation & Project Engagement */}
        <ContactSection />
      </main>

      {/* 18. Technical Corporate Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <InsightReaderModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </div>
  );
}
