// Data configuration for all templates
// Modify this file to customize the content for any template

export const templatesData = {
  template1: {
    name: "Simple Industrial",
    company: "Industrial Solutions Inc.",
    tagline: "Quality Manufacturing Since 1995",
    description: "We provide comprehensive industrial manufacturing solutions with precision and reliability.",
    services: [
      { title: "CNC Machining", description: "High-precision CNC machining services for complex parts" },
      { title: "Metal Fabrication", description: "Custom metal fabrication with advanced welding techniques" },
      { title: "Quality Control", description: "Rigorous quality assurance processes" }
    ],
    contact: {
      phone: "+1 (555) 123-4567",
      email: "info@industrialsolutions.com",
      address: "123 Industrial Ave, Manufacturing District"
    }
  },
  template2: {
    name: "Steel Materials",
    company: "SteelTech Materials",
    tagline: "Premium Steel Products for Every Industry",
    description: "Leading supplier of high-grade steel materials and metal products.",
    products: [
      { name: "Stainless Steel", grade: "304/316", applications: "Food processing, medical equipment" },
      { name: "Carbon Steel", grade: "A36/A572", applications: "Construction, structural applications" },
      { name: "Tool Steel", grade: "D2/M2", applications: "Cutting tools, dies, molds" },
      { name: "Alloy Steel", grade: "4140/4340", applications: "Automotive, aerospace components" }
    ],
    certifications: ["ISO 9001", "ISO 14001", "ASTM Certified"],
    contact: {
      phone: "+1 (555) 234-5678",
      email: "sales@steeltech.com"
    }
  },
  template3: {
    name: "CNC Machinery",
    company: "Precision CNC Solutions",
    tagline: "Advanced CNC Technology for Modern Manufacturing",
    description: "State-of-the-art CNC machinery and precision engineering services.",
    capabilities: [
      { name: "5-Axis Machining", precision: "±0.001mm", materials: "Aluminum, Steel, Titanium" },
      { name: "Swiss Turning", precision: "±0.002mm", materials: "Brass, Stainless Steel" },
      { name: "EDM Services", precision: "±0.003mm", materials: "Hardened Steel, Carbide" }
    ],
    industries: ["Aerospace", "Medical Devices", "Automotive", "Electronics"],
    contact: {
      phone: "+1 (555) 345-6789",
      email: "info@precisioncnc.com"
    }
  },
  template4: {
    name: "Rubber Products",
    company: "FlexiRubber Industries",
    tagline: "Flexible Solutions for Every Application",
    description: "Custom rubber products and elastomer solutions for industrial applications.",
    services: [
      { title: "Custom Molding", description: "Precision rubber molding for custom parts", types: ["Compression", "Injection", "Transfer"] },
      { title: "Seals & Gaskets", description: "High-quality sealing solutions", materials: ["EPDM", "Nitrile", "Silicone"] },
      { title: "Industrial Hoses", description: "Durable hoses for various applications", ratings: ["High pressure", "Chemical resistant"] }
    ],
    materials: ["Natural Rubber", "EPDM", "Nitrile", "Silicone", "Neoprene", "Viton"],
    contact: {
      phone: "+1 (555) 456-7890",
      email: "orders@flexirubber.com"
    }
  },
  template5: {
    name: "Manufacturing",
    company: "Advanced Manufacturing Corp",
    tagline: "Innovation in Every Component",
    description: "Full-service manufacturing with cutting-edge technology and expertise.",
    solutions: [
      { title: "Prototyping", description: "Rapid prototyping for product development", turnaround: "24-48 hours" },
      { title: "Production", description: "High-volume production capabilities", capacity: "1M+ units/year" },
      { title: "Assembly", description: "Complete assembly and testing services", quality: "99.9% accuracy" }
    ],
    stats: {
      experience: "25+ Years",
      clients: "500+",
      projects: "10,000+",
      satisfaction: "98%"
    },
    contact: {
      phone: "+1 (555) 567-8901",
      email: "contact@advancedmfg.com"
    }
  },
  template6: {
    name: "Advanced Industrial",
    company: "TechForge Industries",
    tagline: "Where Technology Meets Craftsmanship",
    description: "Advanced industrial solutions with smart manufacturing technology.",
    features: [
      { title: "Smart Manufacturing", description: "IoT-enabled production systems", icon: "🏭" },
      { title: "Quality Assurance", description: "AI-powered quality control", icon: "✓" },
      { title: "Supply Chain", description: "Integrated supply chain management", icon: "🔗" },
      { title: "Sustainability", description: "Eco-friendly manufacturing processes", icon: "🌱" }
    ],
    technologies: ["Industry 4.0", "IoT Integration", "AI Quality Control", "Predictive Maintenance"],
    contact: {
      phone: "+1 (555) 678-9012",
      email: "info@techforge.com"
    }
  },
  template7: {
    name: "3D Showcase",
    company: "MetalCraft 3D",
    tagline: "Visualize Your Manufacturing Future",
    description: "Interactive 3D product visualization and custom manufacturing.",
    products: [
      { name: "Precision Components", category: "CNC Machined Parts", material: "Aluminum" },
      { name: "Steel Assemblies", category: "Welded Structures", material: "Carbon Steel" },
      { name: "Custom Tooling", category: "Production Tools", material: "Tool Steel" }
    ],
    capabilities3D: ["CAD Modeling", "3D Scanning", "Digital Twin", "Virtual Assembly"],
    contact: {
      phone: "+1 (555) 789-0123",
      email: "3d@metalcraft.com"
    }
  },
  template8: {
    name: "Modern Metal Works",
    company: "ModernMetal Studio",
    tagline: "Crafting Excellence in Metal",
    description: "Contemporary metal fabrication with artistic precision.",
    portfolio: [
      { project: "Architectural Metalwork", client: "City Center Plaza", year: "2024" },
      { project: "Custom Machinery Parts", client: "AutoTech Industries", year: "2024" },
      { project: "Structural Components", client: "BuildRight Construction", year: "2023" }
    ],
    specialties: ["Laser Cutting", "Precision Bending", "TIG Welding", "Surface Finishing"],
    awards: ["Manufacturing Excellence Award 2023", "Innovation in Metalwork 2022"],
    contact: {
      phone: "+1 (555) 890-1234",
      email: "studio@modernmetal.com"
    }
  },
  template9: {
    name: "Premium Engineering",
    company: "Elite Engineering Solutions",
    tagline: "Excellence is Our Standard",
    description: "Premium engineering services for discerning clients who demand the best.",
    services: [
      { 
        name: "Bespoke Manufacturing", 
        description: "Tailored manufacturing solutions for unique requirements",
        deliverables: ["Custom Design", "Prototype Development", "Limited Production"]
      },
      { 
        name: "Engineering Consultation", 
        description: "Expert guidance from concept to completion",
        deliverables: ["Feasibility Studies", "Design Optimization", "Process Planning"]
      },
      { 
        name: "Premium Materials", 
        description: "Sourcing and processing of exotic materials",
        deliverables: ["Titanium Alloys", "Inconel", "Carbon Fiber Composites"]
      }
    ],
    clientele: ["Aerospace Leaders", "Medical Device Innovators", "Luxury Automotive Brands"],
    philosophy: "We don't just manufacture; we create masterpieces in metal and composite materials.",
    contact: {
      phone: "+1 (555) 901-2345",
      email: "elite@eliteeng.com"
    }
  },
  template10: {
    name: "Interactive Factory",
    company: "FutureFactory Interactive",
    tagline: "Experience Manufacturing 4.0",
    description: "Next-generation interactive manufacturing solutions with real-time monitoring.",
    systems: [
      { 
        name: "Real-Time Monitoring", 
        description: "Live production tracking and analytics",
        features: ["Live Dashboards", "Predictive Analytics", "Alert Systems"]
      },
      { 
        name: "Automated Workflow", 
        description: "Intelligent automation and robotics",
        features: ["Robotic Arms", "AGV Systems", "Smart Conveyors"]
      },
      { 
        name: "Digital Integration", 
        description: "Seamless ERP and MES integration",
        features: ["Cloud Connectivity", "API Access", "Data Synchronization"]
      }
    ],
    metrics: {
      efficiency: "45% increase",
      quality: "99.7% accuracy",
      downtime: "85% reduction",
      roi: "18 months average"
    },
    technologies: ["AI/ML", "Computer Vision", "Edge Computing", "5G Connectivity"],
    contact: {
      phone: "+1 (555) 012-3456",
      email: "future@futurefactory.com"
    }
  }
};

// Shared assets and colors
export const sharedAssets = {
  colors: {
    primary: "#1a1a2e",
    secondary: "#16213e",
    accent: "#0f3460",
    highlight: "#e94560",
    light: "#f1f1f1",
    white: "#ffffff",
    steel: "#8c8c8c",
    metal: "#5a5a5a",
    rubber: "#2c2c2c",
    gold: "#d4af37"
  }
};
