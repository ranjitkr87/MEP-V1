export interface Project {
  id: string;
  ref: string;
  title: string;
  location: string;
  country: string;
  description: string;
  coolingCapacity: string;
  powerCapacity: string;
  area: string;
  yearCompleted: string;
  rating: string;
  disciplines: string[];
  imageUrl: string;
  altText: string;
  client: string;
  scopeSummary: string;
  equipmentSchedule: { item: string; spec: string; qty: string }[];
  keyChallenges: string[];
  bimClashResolution: string;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  keySpecs: string[];
  codes: string[];
  subsystems: string[];
}

export interface SectorItem {
  number: string;
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  altText: string;
  keyRequirements: string[];
  typicalLoads: string;
}

export interface InsightPaper {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  fullContent: {
    abstract: string;
    challenge: string;
    solution: string;
    engineeringFindings: string[];
    standardReferences: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const ENGINEERING_METRICS = {
  yearsExperience: "15+",
  megaprojectsDelivered: "250+",
  criticalDispatchSupport: "24/7",
  sqftManaged: "12M+",
  gccMarketsServed: "8+",
  ltiFreeManHours: "18,400,000+",
  bimClashAccuracy: "100%",
  maxAmbientDesign: "+52°C",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    id: "hvac",
    title: "HVAC Engineering",
    shortDesc: "Centralized district cooling heat exchanger substations, magnetic chillers, precision AHU arrays, and variable air distribution systems.",
    fullDesc: "Complete thermal engineering engineered specifically for extreme Middle Eastern climatic conditions. We calculate rigorous peak dynamic heat loads, model envelope solar heat gain coefficients (SHGC), and construct resilient hydronic cooling infrastructure capable of sustaining uninterrupted internal climate comfort at +52°C ambient temperatures.",
    icon: "mode_fan",
    keySpecs: [
      "District cooling energy transfer stations (ETS) up to 10,000 TR capacity",
      "Magnetic-bearing frictionless centrifugal chillers (0.52 kW/TR)",
      "High-delta T chilled water loops (5.5°C supply / 14.5°C return)",
      "Custom double-skin thermal-break AHUs with variable speed EC fans",
      "HEPA & UV-C germicidal irradiation filtration stages"
    ],
    codes: ["ASHRAE 90.1", "ASHRAE 62.1", "SMACNA", "DW144", "Eurovent"],
    subsystems: ["Chilled Water Substation", "VAV Air Systems", "Cooling Towers", "Ventilation"]
  },
  {
    number: "02",
    id: "mechanical",
    title: "Mechanical Systems",
    shortDesc: "Hydronic piping networks, industrial plant heat rejection systems, boiler plants, compressed air infrastructure, and vibration attenuation.",
    fullDesc: "Precision industrial and commercial mechanical infrastructure designed for structural longevity and lowest vibration transfer. Our hydraulic network designs integrate variable primary pumping, chemical water treatment, and specialized inertia bases that isolate mechanical resonance from building superstructures.",
    icon: "settings",
    keySpecs: [
      "Carbon steel & grooved ductile iron hydronic distribution up to 36-inch diameter",
      "End-suction and horizontal split-case pump arrays with VFD automation",
      "Acoustic floating inertia concrete inertia bases with spring isolators (98% efficiency)",
      "Pressurized expansion tanks, air/dirt separators, and de-aeration systems",
      "Central domestic hot water heat pump boilers with solar thermal preheat"
    ],
    codes: ["ASME B31.9", "BS EN 12828", "CIBSE Guide B", "HI Standards"],
    subsystems: ["Hydronic Pumping", "Boiler Plants", "Compressed Air", "Vibration Isolation"]
  },
  {
    number: "03",
    id: "electrical",
    title: "Electrical Systems",
    shortDesc: "11kV/33kV MV/LV transformer substations, smart busbar trunking, power distribution panels, standby UPS grids, and smart power telemetry.",
    fullDesc: "Robust heavy power distribution from utility intake through secondary switchgear to final branch sub-circuits. We deliver coordinated electrical networks with comprehensive arc-flash analysis, harmonic filtration, and automated synchronization of standby diesel generator plants.",
    icon: "bolt",
    keySpecs: [
      "11kV & 33kV dry-type cast resin and oil-immersed step-down transformers",
      "Form 4b Type 7 Main Distribution Boards (MDBs) and intelligent motor control centers (MCCs)",
      "Sandwich-type copper busbar trunking systems with low voltage drop",
      "Rotary & static modular UPS topologies for continuous critical power redundancy",
      "DEWA / Kahramaa / SEC statutory liaison, testing, and energized handovers"
    ],
    codes: ["IEC 61439", "IEEE 242", "BS 7671 (IET)", "DEWA Regulations"],
    subsystems: ["Substations MV/LV", "Emergency Generators", "UPS Systems", "Busbar Distribution"]
  },
  {
    number: "04",
    id: "plumbing",
    title: "Plumbing & Drainage",
    shortDesc: "Potable water booster plants, high-rise drainage stack attenuation, solar domestic hot water networks, greywater reclamation, and RO plants.",
    fullDesc: "Engineered public health and hydraulic distribution that conserves regional water resources while maintaining high velocity stability and noise attenuation. We design pressure-reducing valve (PRV) zones for super-tall buildings and integrate greywater recycling for sustainable district cooling makeup water.",
    icon: "water_drop",
    keySpecs: [
      "Multi-stage vertical variable speed booster pump skids with NSF-61 certified wetted parts",
      "Acoustically insulated multi-layer acoustic drainage piping (dB-rated < 20 dBA)",
      "Automated sea-water & brackish reverse osmosis (RO) desalinators",
      "Gravity and siphonic roof rainwater drainage systems (ASPE / BS 8558)",
      "Legionella prevention continuous thermal recirculation with automated UV sanitization"
    ],
    codes: ["IPC / UPC", "BS EN 12056", "WHO Water Guidelines", "Dubai Green Building Regulations"],
    subsystems: ["Potable Water Booster", "Acoustic Drainage", "Greywater Treatment", "Siphonic Drainage"]
  },
  {
    number: "05",
    id: "fire",
    title: "Fire Protection",
    shortDesc: "UL/FM certified fire pumping units, pre-action sprinkler systems, clean agent gaseous suppression (FM-200/Novec 1230), and smoke evacuation.",
    fullDesc: "Life-safety engineering governed strictly by NFPA codes and local Civil Defense authority regulations. From high-hazard storage ESFR sprinkler arrays to clean-agent gaseous flooding for data rooms, our fire fighting networks guarantee rapid suppression with zero collateral asset damage.",
    icon: "local_fire_department",
    keySpecs: [
      "UL-listed and FM-approved electric & diesel fire pump sets (up to 3,000 GPM @ 250 PSI)",
      "Wet pipe, dry pipe, deluge, and double-interlock pre-action sprinkler networks",
      "Total flooding clean agent suppression (FM-200, Novec 1230, IG-541 Inergen)",
      "High-velocity smoke extract fans certified for 400°C / 2 hours continuous run",
      "Staircase pressurization and zone fire damper interface matrices"
    ],
    codes: ["NFPA 13", "NFPA 20", "NFPA 72", "NFPA 92", "UAE Fire & Life Safety Code"],
    subsystems: ["Fire Pump Stations", "Sprinkler Networks", "Clean Agent Flooding", "Smoke Management"]
  },
  {
    number: "06",
    id: "bms",
    title: "BMS & Controls",
    shortDesc: "BACnet IP supervisory architecture, direct digital controls (DDC), energy sub-metering grids, and algorithmic chiller plant optimization.",
    fullDesc: "Open-protocol intelligent building automation integrating HVAC, mechanical plant, lighting, and power metering onto unified operational dashboards. Dynamic AI algorithms adjust chilled water setpoints and static air pressure based on real-time external wet-bulb humidity, cutting utility consumption by up to 24%.",
    icon: "memory",
    keySpecs: [
      "Native BACnet/IP, Modbus TCP/RTU, and LonWorks multi-protocol supervisory servers",
      "Freely programmable DDC controllers with distributed I/O modules",
      "Chiller plant algorithmic optimization software balancing kW/TR in real-time",
      "High-precision calibrated temperature, RH, CO2, and differential pressure sensors",
      "Class-A cybersecurity encryption with SCADA integration and remote telemetry"
    ],
    codes: ["ASHRAE 135 (BACnet)", "ISO 16484", "CIBSE Guide H"],
    subsystems: ["Central Supervisory Server", "Plant Room DDCs", "Energy Sub-metering", "Field Instrumentation"]
  },
  {
    number: "07",
    id: "tab",
    title: "Testing & TAB",
    shortDesc: "NEBB & CSA standard hydronic balancing, air duct leakage testing (DW143), thermographic electrical surveys, and full system black-building runs.",
    fullDesc: "Independent, accredited testing, adjusting, and balancing ensuring that every MEP system performs strictly according to design parameters prior to building occupation. We verify flow rates, air distributions, noise criteria, and authority life-safety interfaces with calibrated digital instrumentation.",
    icon: "fact_check",
    keySpecs: [
      "Hydronic ultrasonic and orifice plate balancing for high-delta T cooling loops",
      "Air duct leakage testing to DW143 Class C and SMACNA high-pressure standards",
      "Infrared thermographic surveys of switchgear, busway joints, and capacitor banks",
      "Acoustic sound pressure level (NC/NR) verification in occupied zones",
      "Integrated systems testing (IST) & black-building power drop simulations"
    ],
    codes: ["NEBB Procedural Standards", "AABC Standards", "BSRIA BG 49/2015", "DW143"],
    subsystems: ["Air TAB", "Hydronic Balancing", "Thermal Imaging", "Integrated Systems Testing"]
  },
  {
    number: "08",
    id: "om",
    title: "Operation & O&M",
    shortDesc: "Comprehensive predictive maintenance programs, vibration baseline analysis, on-site certified engineering crews, and guaranteed 2-hour SLA response.",
    fullDesc: "Long-term facility preservation protecting client capital investments across the building lifecycle. Our certified resident engineers utilize computerized maintenance management systems (CMMS), oil spectrometry, and thermal auditing to prevent unexpected outages.",
    icon: "build",
    keySpecs: [
      "24/7 dedicated regional emergency response fleet with 120-minute on-site SLA",
      "Predictive vibration FFT analysis and laser shaft alignment for rotating machinery",
      "Condenser tube mechanical and chemical descaling programs sustaining peak COP",
      "Automated computerized maintenance management system (CMMS) barcode tracking",
      "Turnkey statutory annual Civil Defense and municipality maintenance renewals"
    ],
    codes: ["SFG20 Maintenance Standard", "ISO 55001 Asset Management", "ASHRAE Guideline 4"],
    subsystems: ["Preventive Maintenance", "Emergency Dispatch", "Vibration Analysis", "Asset Tagging"]
  }
];

export const SECTORS_DATA: SectorItem[] = [
  {
    number: "01",
    id: "commercial",
    title: "Commercial Towers",
    desc: "High-density vertical distribution, floor-by-floor air zoning, and flexible multi-tenant electrical submetering.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD90MjPCCik0vNEIFsRMpBscq93QQ7mmVUdQzTEQOiXidUmSfXEczzgQtOtabcrGk5BLtB2_aiO5ycjMc059e5AzLNXmnMGmgxMxuU3vH0ICnZJdybpyC1---QDHpR_cSevYWIev-s-NzFDSKuFP89jYJXpAqPiBJk11iNdhm1V0khnNqjSu5wvPgT1wn2NyySl9Accj0oseOIQ80YJuvGV1dSynlaqx90NiB6BLzvzubwVHNmUIWNB",
    altText: "Modern commercial skyscraper exterior in Dubai with glass curtain walls",
    keyRequirements: [
      "Central district cooling energy transfer station (ETS)",
      "Multi-tenant tenant revenue submetering",
      "High-rise vertical water riser pressure break tanks",
      "Integrated life-safety smoke clearance shafts"
    ],
    typicalLoads: "180 - 220 Sq.Ft / TR"
  },
  {
    number: "02",
    id: "healthcare",
    title: "Healthcare & Labs",
    desc: "Positive pressure cleanroom air handling, HTM 03-01 specialized ventilation, and redundant medical gas infrastructure.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEPRYHHJ2bDv509Zq_F4xFFHFIWiQ0Tmeg5rOEDbkrld6q18THFEwmPOrwsdTRtf5NGa1W8Ymug_b1aIlBhl91H_QlpJqTYouS_P1X6E5_hd1SYDyteSrkMW971AkuwiO9rpiLN4SZmDov_xQ3Z8AqHKROXA0Wdio8weX7al_9Br8jzKmgkDCrvBTsfIwnKhw3ssPPdt6hdAorL1Jm6QQBxN-I6Y1TSUTsD1GVkokU0mYaIeI-zCeD",
    altText: "Clinical surgical hospital interior corridor with flush HEPA filtration",
    keyRequirements: [
      "100% fresh air AHUs with run-around energy recovery coils",
      "Operating theatre laminar flow diffusers with HEPA H14 filtration",
      "HTM 02-01 certified medical gas pipeline distribution (O2, N2O, Air4/7, Vac)",
      "N+1 emergency generator synchronization within 10 seconds"
    ],
    typicalLoads: "120 - 150 Sq.Ft / TR"
  },
  {
    number: "03",
    id: "hospitality",
    title: "Hospitality & Resorts",
    desc: "Acoustic isolation (NC-25 criteria), silent fan coils, infinity pool hydraulic plants, and smart guestroom energy controls.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuowq6tzUYZRpJloXxdCq6fS92OOn-PxEWnWmnf33pc0GcgTcxEK4e-lJUyid5gU41eKyjUsByUQsY5opg0FY-TT1yqKqCiI232JGCGdCDDwhg45jeOG2eyMOs8tst0pyyiY8OUU3H8dJMTzlBpze6jPwhuuduiiLth88MndzKYnZYngc6wJqqxwpwi0hHFcKMYWd3VaqvBam_y5xpZJMzCn0PiE1Bkh7iH6hJEIdH3UQ_-Y8YLPhV",
    altText: "Ultra-luxury Middle East Waterfront Marina Resort",
    keyRequirements: [
      "Ultra-silent ECM fan coil units meeting NC-25 acoustic ceiling benchmarks",
      "Centralized domestic hot water return loops under 5 seconds to fixture",
      "Marine environment 316L stainless steel and anti-corrosion condenser fin coatings",
      "Guestroom energy management system (GRMS) integrated with PMS hotel software"
    ],
    typicalLoads: "160 - 200 Sq.Ft / TR"
  },
  {
    number: "04",
    id: "industrial",
    title: "Industrial & Logistics",
    desc: "Cold-chain refrigeration, high-bay ESFR fire protection, dust extraction networks, and heavy 3-phase industrial power feeds.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNbgRQ4vIHsgoelAxypgxJQqfbtqsmw2DLbJiStrvy2ims0BpVacyDgOxe9BCZVqa7ESLEUAmm4PV2i1TCqtnJYwMgLr7WzrF8alaZnxUZFoaTBUaZj1QSnaZIgU_emeb-0nozSSfU1Nr2_-3MjZyoh-AnIh3vp3dcKWyD2gyDhHHzMc_viiAV3eW4tkhg7e8zc26tfU5qlwlEQvvCIwQjl2t-3sJx25bXtWBvHw5T9MFDceqZTNAs",
    altText: "Industrial logistics facility interior with high ceilings and heavy HVAC ducting",
    keyRequirements: [
      "Ammonia-free sub-zero CO2 cascade refrigeration loops (-25°C to +4°C)",
      "Early suppression fast response (ESFR) fire sprinklers for 14-meter rack storage",
      "Explosion-proof (ATEX) ventilation for chemical storage bays",
      "Busway networks accommodating dynamic machine layout relocations"
    ],
    typicalLoads: "250 - 350 Sq.Ft / TR"
  },
  {
    number: "05",
    id: "residential",
    title: "Luxury Residential",
    desc: "Concealed ducted VRV systems, smart thermostat home automation integration, and silent sanitary drainage acoustics.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ezbkWdUdagRtYXy9O_6Fzw1IyILcuVA2HOkzEgs-3oXNqlm9G5fPNIyYGLpfFJGtqwv_QT1-u-4AZdHLyikIsdrD4L7xvdsQmGwOfte6ED21w43yUAlEmppVIecaBjbGFGUOV9ls1LF5kEe96OqV1AdmWbBpa_974sLpfukP4saEQLLfZ6uzUaXtDR6RAoh87e-F7MHda6bKBTMxS-6MRPsbiQEG6WxqJ5RZiN-oCINEZlKD52x0",
    altText: "Modern architectural luxury residential community in Abu Dhabi with white limestone facades",
    keyRequirements: [
      "Concealed linear slot diffusers matching luxury architectural ceilings",
      "High seasonal energy efficiency ratio (ESEER) inverter VRV systems",
      "Tri-generation hot water recovery from air-conditioning condenser heat",
      "Multi-layered acoustic drainage pipe wraps dampening vertical water falls"
    ],
    typicalLoads: "200 - 240 Sq.Ft / TR"
  },
  {
    number: "06",
    id: "retail",
    title: "Retail & Mixed-Use",
    desc: "High-volume public atrium displacement ventilation, rapid commercial kitchen exhaust filtration, and multi-zone life safety smoke venting.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTH_pqvY7DsGwIWJvt5y2uBeRyJCNE1oXSuCodNWNFdotc7RpPx8oUpc06WodN_s_dyMW1FYKPGrHOlTatTk5VKKOnBiDsPhWMKp8ZxWs4-BGQ6lpPYameV_88R0twg_CPNJqQJIWK0YhLM4XpLt-k9cqxYMDikQiRKD9vJ2cNZpikb4hpSiCL9AJbJ1s-pF32nUUJqOkCoatXrA2cmwN3kOdG_IkYVafksxCBRz-WdhImL30inWWY",
    altText: "High ceiling retail atrium with glass skylights and architectural louvers",
    keyRequirements: [
      "Floor-level low-velocity displacement ventilation in 20-meter glass atriums",
      "Commercial kitchen electrostatic precipitator (ESP) grease & odor extract",
      "Rapid tenant changeover modular MEP connection points",
      "Emergency smoke purge system extracting up to 400,000 CFM"
    ],
    typicalLoads: "150 - 190 Sq.Ft / TR"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "twin-towers-dubai",
    ref: "PRJ-DXB-2024",
    title: "Twin Commercial Towers & Financial Center",
    location: "Business Bay, Dubai",
    country: "United Arab Emirates",
    description: "Complete turnkey MEP infrastructure encompassing a 4,500 TR district cooling plant substation, primary MV 11kV distribution, smart LED DMX facades, and unified life-safety smoke clearance.",
    coolingCapacity: "4,500 TR",
    powerCapacity: "16 MVA Substation",
    area: "1,450,000 Sq.Ft",
    yearCompleted: "2024",
    rating: "LEED PLATINUM",
    disciplines: ["HVAC", "Electrical MV/LV", "BMS", "Plumbing", "Fire Protection"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD_I8Pk5rGOM21LCxEF-Pe73SJzNWT42rTxNRZ0bEZw_h8yYfU7RBFZ-FR4bwTnFKXdDRYgWQvzBOqxGtCrb61AAG1KTuK6hNHxQCkUPZ5u-6XrJAMz7czDeUxAXj0Svv7nE04aaLAvRvrkEa1SISV5QmnbZY0pKk9wvvAuw0exUktP42fCjGVCfKTu5vVuKJ3J2STPiJshKdfu9yytmadxEvHHoUj3lhhTB0U9lWxrsMvSTe_sHhn",
    altText: "Twin Tower Commercial Complex with Integrated MEP Substation in Dubai",
    client: "Emaar Properties / DIFC Authority",
    scopeSummary: "Full EPC delivery of mechanical, electrical, and public health infrastructure across two 58-storey mixed-use office towers. Tectonic delivered zero-clash BIM coordination across 14,000 MEP elements, shaving 11 weeks off project critical path.",
    equipmentSchedule: [
      { item: "Plate Heat Exchangers", spec: "Sondex High Delta-T 1,500 TR x 3 Units", qty: "3 Sets" },
      { item: "Primary Variable Pumps", spec: "Armstrong Horizontal Split Case 110 kW", qty: "6 Units" },
      { item: "11kV / 415V Transformers", spec: "Schneider Cast Resin 2,500 kVA", qty: "6 Units" },
      { item: "Air Handling Units", spec: "Carrier Custom Thermal-Break AHUs with EC Fans", qty: "72 Units" },
      { item: "BMS Supervisory Server", spec: "Schneider Electric EcoStruxure BACnet/IP", qty: "Redundant Pair" }
    ],
    keyChallenges: [
      "Integrating high-pressure district cooling chilled water into 240-meter riser shafts without hydraulic hammering.",
      "Achieving LEED Platinum operational efficiency with ambient daytime heat exceeding +48°C.",
      "Zero acoustic noise intrusion into 52nd-floor executive boardrooms (NC-25 achieved)."
    ],
    bimClashResolution: "1,842 physical clashes cleared in Revit LOD 400 prior to shop-floor fabrication."
  },
  {
    id: "coastal-resort-doha",
    ref: "PRJ-QAT-2023",
    title: "Luxury Coastal Resort & Superyacht Marina",
    location: "Lusail Marina, Doha",
    country: "Qatar",
    description: "Precision HVAC with specialized anti-corrosion marine coatings, acoustic vibration dampening across private villas, sea-water reverse osmosis filtration, and advanced marina shore-power distribution.",
    coolingCapacity: "3,200 TR",
    powerCapacity: "12 MVA Shore-Power",
    area: "980,000 Sq.Ft",
    yearCompleted: "2023",
    rating: "GSAS 5-STAR",
    disciplines: ["HVAC", "Marine Electrical", "Plumbing & RO", "Fire Protection"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuowq6tzUYZRpJloXxdCq6fS92OOn-PxEWnWmnf33pc0GcgTcxEK4e-lJUyid5gU41eKyjUsByUQsY5opg0FY-TT1yqKqCiI232JGCGdCDDwhg45jeOG2eyMOs8tst0pyyiY8OUU3H8dJMTzlBpze6jPwhuuduiiLth88MndzKYnZYngc6wJqqxwpwi0hHFcKMYWd3VaqvBam_y5xpZJMzCn0PiE1Bkh7iH6hJEIdH3UQ_-Y8YLPhV",
    altText: "Luxury Coastal Resort and Superyacht Marina in Doha Qatar",
    client: "Qatari Diar Real Estate Investment Co.",
    scopeSummary: "Turnkey MEP contractor for 220 luxury hotel suites, 45 private overwater villas, and an 80-berth marina. Engineered coastal protective solutions resisting high saline humidity and salt-spray oxidation.",
    equipmentSchedule: [
      { item: "Modular Chillers", spec: "Daikin Magnetic Bearing Centrifugal Chiller (Marine Coated)", qty: "4 Units" },
      { item: "Seawater RO Plant", spec: "Containerized 2-Pass Brackish Desalination 1,200 m³/day", qty: "2 Trains" },
      { item: "Marina Shore Power", spec: "Mennekes 400V 125A 3P+N+E Marine Bollards", qty: "80 Pedestals" },
      { item: "Ultra-Quiet FCUs", spec: "Trox Acoustic Fan Coils with Brushless DC Motors", qty: "480 Units" }
    ],
    keyChallenges: [
      "Preventing galvanic corrosion across underground plumbing and submerged marina power cabling.",
      "Achieving complete silence in private guest suites located directly adjacent to chiller plantrooms.",
      "Strict GSAS sustainability compliance and greywater reuse across 12 hectares of landscaped grounds."
    ],
    bimClashResolution: "1,120 spatial coordination clearances verified before marine pile driving."
  },
  {
    id: "medical-center-riyadh",
    ref: "PRJ-KSA-2023",
    title: "Regional Specialty Medical Center & Research Wing",
    location: "Al Olaya District, Riyadh",
    country: "Kingdom of Saudi Arabia",
    description: "Turnkey clinical HVAC including 24 surgical theatre laminar flow systems, redundant dual-path medical gas piping networks, class-100 cleanroom certification, and automated quarantine pressure zones.",
    coolingCapacity: "2,800 TR",
    powerCapacity: "10 MVA Dual Feed + 4MW UPS",
    area: "750,000 Sq.Ft",
    yearCompleted: "2023",
    rating: "JCI COMPLIANT",
    disciplines: ["HVAC Cleanrooms", "Medical Gas", "Critical Power", "BMS"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoWINpJAdXi6f4reaUYLUOqu53SvDxngZs3sVW7C2h5EN3jPG_1TKAFiyWN1si1yi_hL5lOWsrtvFu1aSNzjBfwnoJYJOibyQKwBQhSQhiZ7hJRBOq0skHGyHnR-vL3a9oZ7uxtS1URkHrG9QkJ_SXf9TeAkQJVIaSFvzJl-NJ9fuomXsOHp5btTEhTR1gwYisHAn-k4n8aEy-mfl2cq1BG4Xww_HN1HVwiLKOjL8l7e_E8rsdKHFe",
    altText: "Architectural exterior of modern specialty hospital facility in Riyadh",
    client: "Ministry of Health / Private Healthcare Conglomerate",
    scopeSummary: "Complete MEP engineering for a 350-bed specialized oncology and surgical hospital. Built to HTM 03-01 standards with uninterrupted dual-transformer emergency feeds and sterile air containment.",
    equipmentSchedule: [
      { item: "Hygienic AHUs", spec: "FläktGroup Eurovent Certified Cleanroom AHUs with HEPA H14", qty: "36 Units" },
      { item: "Medical Gas Plant", spec: "BeaconMedaes Duplex Vacuum & Triplex O2/Medical Air", qty: "1 Turnkey Skid" },
      { item: "Critical UPS Units", spec: "Socomec Delphys MP Elite 800 kVA N+1", qty: "4 Units" },
      { item: "Positive/Negative DDCs", spec: "Siemens Desigo Room Automation Pressurization Monitors", qty: "64 Rooms" }
    ],
    keyChallenges: [
      "Maintaining positive pressure cascades across 24 operating suites under all HVAC load conditions.",
      "Meeting stringent Joint Commission International (JCI) infection control and air particulate benchmarks.",
      "Zero interruption to life-critical ICUs during power transfer simulations."
    ],
    bimClashResolution: "986 medical gas and sterile ducting conflicts resolved virtually before site installation."
  },
  {
    id: "logistics-facility-kizad",
    ref: "PRJ-AUH-2022",
    title: "Advanced Logistics & Cold Storage Facility",
    location: "KIZAD Industrial Zone, Abu Dhabi",
    country: "United Arab Emirates",
    description: "Industrial ammonia-free CO2 cascade refrigeration loops, high-volume automated warehouse air circulation, ESFR quick-response fire sprinkler grid, and a 2.5 MW backup diesel power station.",
    coolingCapacity: "1,900 TR Refrigeration",
    powerCapacity: "8 MVA + 2.5 MW Diesel",
    area: "620,000 Sq.Ft",
    yearCompleted: "2022",
    rating: "FM GLOBAL APPROVED",
    disciplines: ["Industrial Refrigeration", "ESFR Fire", "Heavy Electrical", "TAB"],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdTWP5zZurtx7ROdMRB47SuqXHxet8xkfoarfBa_Hay10buI8rD87aX5hvJDK_dV-XCJllU3lEw1fLvnDZFQ8yezJGK1LRc60GX2qU59iQR1_h5TpbivxPMCdH1mdFJCTskvAvHUSWGm5kfYYKPu5WPW79B_4IJvU_2bY8WD7vCOYNAx2Evdnn8_qU3gE0qnjioCOe5xbxlzoZ0mouTwJ9I5oXv9RzGGqY4sOpC9CuTKf61VnPEZ7l",
    altText: "Automated logistics fulfillment center interior with structural ducting and high ceilings",
    client: "AD Ports Logistics Division",
    scopeSummary: "EPC delivery of cold-chain mechanical and electrical engineering for food and pharmaceutical logistics. Maintained dual temperature zones (-25°C blast freezers and +4°C handling docks) with energy recovery.",
    equipmentSchedule: [
      { item: "CO2 Subcritical Rack", spec: "Bitzer Transcritical & Subcritical Compressor Rack", qty: "3 Skids" },
      { item: "ESFR Sprinklers", spec: "Viking Model VK510 K25.2 High-Bay Sprinklers", qty: "4,200 Heads" },
      { item: "Backup Diesel Generators", spec: "Cummins QSK60-G4 2,500 kVA Prime Power", qty: "2 Sets" },
      { item: "HVLS Destratification Fans", spec: "Big Ass Fans Powerfoil D 7.3m Diameter", qty: "18 Units" }
    ],
    keyChallenges: [
      "Preventing floor subsoil permafrost heave in -25°C freezer zones through sub-slab warm glycol heating.",
      "Meeting strict FM Global 8-9 criteria for high-challenge storage fire protection.",
      "Optimizing heavy thermal insulation vapor barriers under extreme UAE summer humidity."
    ],
    bimClashResolution: "740 clash clearances between structural overhead cranes and sprinkler headers."
  }
];

export const INSIGHTS_DATA: InsightPaper[] = [
  {
    id: "paper-thermal-gcc",
    tag: "THERMAL DYNAMICS",
    title: "Designing Efficient HVAC for Extreme GCC Climates",
    excerpt: "Evaluating heat gain calculations, high-delta T hydronic coils, and chilled water temperature staging under +50°C summer conditions.",
    readTime: "7 min read",
    date: "August 2024",
    author: "Dr. Farhan Malik, CEng MCIBSE",
    authorRole: "Head of Thermal Engineering",
    fullContent: {
      abstract: "In the Gulf Cooperation Council (GCC) region, ambient air temperatures frequently exceed +50°C accompanied by relative humidity levels swinging from 15% in desert interiors to 95% in coastal zones. This whitepaper analyzes mathematical strategies to enhance cooling plant coefficient of performance (COP) through high-delta T hydronic staging and variable primary pumping.",
      challenge: "Conventional ASHRAE design templates engineered for North American or European climates under-predict peak solar radiant heat flux on high-mass curtain walls and underestimate district cooling return water temperature penalties.",
      solution: "By shifting from traditional 5.5°C/10.0°C chilled water loops (delta-T of 4.5°C) to engineered high-delta T regimes (5.5°C supply / 14.5°C return, delta-T of 9.0°C), hydronic flow volume is reduced by 50%. This cuts pumping electrical demand by up to 58% and ensures compliance with district cooling provider return temperature thresholds.",
      engineeringFindings: [
        "Hydronic pumping kilowatt expenditure decreased from 0.082 kW/TR to 0.034 kW/TR.",
        "Plate heat exchanger surface area must increase by 18% to maintain pinch point temperatures below 1.2°C.",
        "Pressure drop across 2-way modulating control valves must be actively balanced with dynamic differential pressure controllers (DPCVs) to prevent low-delta T syndrome."
      ],
      standardReferences: "ASHRAE Standard 90.1-2022, CIBSE Knowledge Series KS14, Dubai Green Building Regulations Section 6."
    }
  },
  {
    id: "paper-bim-lod400",
    tag: "DIGITAL TWIN & BIM",
    title: "MEP Coordination & Clash Detection in BIM LOD 400",
    excerpt: "How parameterized 3D digital coordination eliminates spatial conflicts in congested ceiling plenums and riser shafts.",
    readTime: "5 min read",
    date: "June 2024",
    author: "Sarah Jenkins, B.Arch ACP",
    authorRole: "BIM & Digital Delivery Director",
    fullContent: {
      abstract: "High-density commercial towers pack chilled water pipes, cable trays, sprinkler mains, acoustic drainage, and supply ductwork into vertical shafts and shallow ceiling plenums. This research details Tectonic's LOD 400 fabrication-grade workflow that eliminates on-site demolition and rework.",
      challenge: "2D and LOD 300 coordination routinely miss fabrication-level realities: flange clearances, hanger support rods, valve handle rotation sweeps, and gravity pipe slope intersections.",
      solution: "Tectonic implements automated clash matrix rules in Autodesk Navisworks and BIM Collaborate Pro, tagging every MEP object with weight, fabrication cut-lengths, and installation clearances before generating factory shop drawings.",
      engineeringFindings: [
        "Average site RFIs regarding spatial clashes dropped from 320 per project to zero.",
        "Pre-fabrication of modular MEP corridor multi-service racks (MSR) reduced on-site installation labor by 35%.",
        "Digital twin as-built models exported seamlessly into client CAFM/CMMS systems with asset COBie data."
      ],
      standardReferences: "ISO 19650-1/2:2018, BIM Forum LOD Specification 2023, PAS 1192-2."
    }
  },
  {
    id: "paper-district-cooling",
    tag: "ENERGY RETROFIT",
    title: "Commercial Energy & District Cooling Integration",
    excerpt: "Strategies to reduce ETS pressure loss, optimize plate heat exchanger thermal transfer, and trim non-revenue cooling consumption.",
    readTime: "6 min read",
    date: "April 2024",
    author: "Eng. Tariq Al-Mansoor, PE",
    authorRole: "Chief MEP Infrastructure Engineer",
    fullContent: {
      abstract: "District cooling networks across Dubai (Empower, Tabreed) and Qatar (Marafeq) impose stiff financial surcharges when customer buildings fail to achieve their contractually stipulated minimum return water temperatures. This paper presents empirical retrofit case studies rectifying low-delta T syndrome.",
      challenge: "Building operators frequently experience low-delta T due to 3-way bypassing valves, degraded cooling coil heat transfer surfaces, oversized pump impellers, and decoupled secondary loops.",
      solution: "Implementing pressure-independent control valves (PICVs), automated coil chemical flushing, and algorithmic setpoint floating dynamically raises return water temperature back to +14.5°C.",
      engineeringFindings: [
        "Customer monthly district cooling capacity surcharges were completely eliminated across a 40-storey tower.",
        "Overall building chilled water consumption dropped by 18.2% through smart variable valve modulation.",
        "Payback period for full PICV valve retrofit was achieved in 14.2 months."
      ],
      standardReferences: "International District Energy Association (IDEA) District Cooling Best Practice Guide."
    }
  },
  {
    id: "paper-preventive-valuation",
    tag: "ASSET PRESERVATION",
    title: "Why Preventive HVAC Matters for Asset Valuation",
    excerpt: "Quantifying the direct link between documented proactive maintenance logs and commercial real estate terminal capital valuations.",
    readTime: "8 min read",
    date: "January 2024",
    author: "Faisal Al-Qasim, CMIOSH",
    authorRole: "Director of Asset Operations",
    fullContent: {
      abstract: "Real estate investment trusts (REITs) and institutional buyers in the GCC heavily scrutinize building services logs during acquisition technical due diligence. Deferred HVAC maintenance can trigger capital expenditure deductions of 5% to 12% of total asset purchase price.",
      challenge: "Reacting only when chillers trip or air handlers seize leads to compressor burnouts, refrigerant contamination, indoor mold proliferation, and tenant turnover.",
      solution: "Establishing an SFG20 compliant, CMMS-audited maintenance schedule with monthly oil spectrometry, infrared switchgear imaging, and certified TAB verification maintains equipment asset lifespan by up to 40%.",
      engineeringFindings: [
        "Unplanned equipment downtime reduced by 91% compared to run-to-failure baseline.",
        "Chiller plant lifecycle extended from typical 12-year replacement threshold to 20+ years.",
        "Building technical due diligence score ranked in 95th percentile during institutional refinancing."
      ],
      standardReferences: "SFG20 Maintenance Standard, ISO 55001, RICS Guidance Note: Technical Due Diligence."
    }
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: "Thermal & Climate Engineering",
    question: "What ambient design conditions does TECTONIC engineer for in the GCC?",
    answer: "We engineer all central cooling, heat rejection, and air handling equipment for +52°C dry-bulb ambient peak conditions with 95% coastal relative humidity. All heat exchangers and condensers feature specialized Blygold or Heresite anti-corrosion coil coatings to resist saline sand environments."
  },
  {
    category: "Statutory Approvals & Compliance",
    question: "Does TECTONIC handle all authority approvals across Dubai, Abu Dhabi, Saudi Arabia, and Qatar?",
    answer: "Yes. As a licensed Tier-1 MEP EPC contractor, we manage end-to-end statutory submittals, NOCs, and inspections with DEWA, Empower, Tabreed, Dubai Municipality, Dubai Civil Defense (DCD), Kahramaa, Ashghal, SEC, and Saudi Civil Defense."
  },
  {
    category: "BIM & Clash Elimination",
    question: "How do you guarantee zero spatial clashes on high-density MEP projects?",
    answer: "We mandate BIM LOD 400 modeling in Autodesk Revit before any material is purchased or fabricated. Our team federates architectural, structural, and all MEP disciplines in Navisworks with hard clash thresholds of 5mm, resolving every conflict digitally before site teams mobilize."
  },
  {
    category: "Emergency & SLA Response",
    question: "What is your emergency dispatch response time for critical infrastructure?",
    answer: "We maintain a 24/7 dedicated engineering dispatch fleet with a contractually guaranteed sub-2-hour on-site mobilization SLA across Dubai, Abu Dhabi, Riyadh, and Doha. Every team arrives equipped with mobile diagnostics, refrigerant recovery, and bypass hardware."
  },
  {
    category: "Turnkey Scope & Project Sizing",
    question: "What is the typical minimum project scale TECTONIC undertakes?",
    answer: "We specialize in medium-to-megaproject scale infrastructure contracts, typically ranging from 100,000 sq.ft up to multi-million sq.ft developments, including commercial towers, hospitals, luxury resorts, data centers, and industrial logistics facilities."
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: "Dubai Regional HQ",
    address: "Al Quoz Industrial 3, Sheikh Zayed Road, PO Box 4921, Dubai, United Arab Emirates",
    phone: "+971 4 800 6370",
    email: "dubai@tectonic-mep.com",
    license: "LIC. #8849-DXB | CR #1048820"
  },
  {
    city: "Riyadh Technical Office",
    address: "King Fahd Road, Al Olaya District, Riyadh 12211, Kingdom of Saudi Arabia",
    phone: "+966 11 800 9410",
    email: "riyadh@tectonic-mep.com",
    license: "SAGIA LIC. #194821"
  },
  {
    city: "Doha Operations Center",
    address: "Lusail Marina Tower, Floor 14, Lusail City, Doha, Qatar",
    phone: "+974 44 800 520",
    email: "doha@tectonic-mep.com",
    license: "QFC LIC. #00842"
  }
];
