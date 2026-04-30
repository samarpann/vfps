// All images served from /public/images/ as .jpg (converted from .tif for browser compatibility)

export const categories = [
  {
    id: "automatic-continuous-fryer",
    name: "Automatic Continuous Fryer",
    description: "Advanced continuous frying system for various pellet and extruded snacks.",
    image: "/images-2/Automatic Continuous Fryer.jpeg",
    features: ["Heat Exchanger", "Continuous Filtration", "Precision Temp"],
    specs: { capacity: "200-500 kg/hr", power: "Variable", area: "10x5 meters" }
  },
  {
    id: "automatic-murmura-plant",
    name: "Automatic Murmura Plant",
    description: "Complete processing line for high-quality expanded rice (Murmura).",
    image: "/images-2/Automatic Murmura Plant.jpeg",
    features: ["Steam Heating", "Uniform Roasting", "Full Automation"],
    specs: { capacity: "150-400 kg/hr", power: "25-50 kW", area: "15x8 meters" }
  },
  {
    id: "z-type-bucket-elevator",
    name: "Z-Type Bucket Elevator",
    description: "Hygienic material handling and vertical conveying system.",
    image: "/images-2/Z-Type Bucket Elevator.jpeg",
    features: ["Food Grade Buckets", "Variable Speed", "Easy Clean"],
    specs: { capacity: "Up to 2 tons/hr", power: "1.5-3 kW", area: "Vertical" }
  },
  {
    id: "circular-batch-fryer",
    name: "Circular Batch Fryer",
    description: "High-efficiency circular fryer for batch production of namkeens and snacks.",
    image: "/images-2/Circular Batch Fryer.jpeg",
    features: ["Even Heat Distribution", "Easy Drain", "Low Oil Retention"],
    specs: { capacity: "100-300 kg/batch", power: "20-40 kW", area: "6x6 meters" }
  },
  {
    id: "flavouring-system",
    name: "Flavouring System",
    description: "Continuous coating system for uniform spice and flavor distribution.",
    image: "/images-2/Flavouring System.jpeg",
    features: ["Mist Spraying", "Variable Rotation", "Powder Feeder"],
    specs: { capacity: "Sync with line", power: "2-5 kW", area: "5x3 meters" }
  },
  {
    id: "automatic-fryums-plant",
    name: "Automatic Fryums Plant",
    description: "Complete 2D/3D pellet processing with moisture control units.",
    image: "/images-2/Automatic Fryums Plant.jpeg",
    features: ["Hydro-extractor", "Continuous Dryer", "Multi-stage Frying"],
    specs: { capacity: "100-500 kg/hr", power: "30-60 kW", area: "25x10 meters" }
  },
  {
    id: "automatic-fryums-plant-without-hydro",
    name: "Automatic Fryums Plant Without Hydro",
    description: "Complete 2D/3D pellet processing system without hydro-extraction.",
    image: "/images-2/Automatic Fryums Plant Without Hydro.jpeg",
    features: ["Continuous Frying", "Oil Filtration", "Space Efficient"],
    specs: { capacity: "100-300 kg/hr", power: "25-50 kW", area: "20x8 meters" }
  },
  {
    id: "corn-puff-extruder",
    name: "Corn Puff Extruder",
    description: "Specialized extruder for corn puffs, rice puffs, and similar snacks.",
    image: "/images-2/Corn Puff Extruder.jpeg",
    features: ["Adjustable Die", "High Throughput", "Low Power"],
    specs: { capacity: "100-400 kg/hr", power: "20-45 kW", area: "8x4 meters" }
  },
  {
    id: "automatic-corn-puff-plant",
    name: "Automatic Corn Puff Plant",
    description: "Complete automated line for manufacturing corn puffs and extruded snacks.",
    image: "/images-2/Automatic Corn Puff Plant.jpeg",
    features: ["Extrusion", "Baking/Frying", "Flavouring"],
    specs: { capacity: "150-500 kg/hr", power: "40-80 kW", area: "30x10 meters" }
  },
  {
    id: "rectangular-batch-fryer",
    name: "Rectangular Batch Fryer",
    description: "Industrial rectangular fryer for large-scale snack and namkeen production.",
    image: "/images-2/Rectangular Batch Fryer.jpeg",
    features: ["Stainless Steel", "Gas/Electric", "Uniform Frying"],
    specs: { capacity: "200-500 kg/batch", power: "30-60 kW", area: "8x5 meters" }
  },
  {
    id: "automatic-hakka-noodles-plant",
    name: "Automatic Hakka Noodles Plant",
    description: "High-speed automated noodle production with precision rolling and steaming.",
    image: "/images-2/Automatic Hakka Noodles Plant.jpeg",
    features: ["Combine Roller", "Steam Cooking", "Auto Folding"],
    specs: { capacity: "200-800 kg/hr", power: "60-120 kW", area: "40x15 meters" }
  },
  {
    id: "automatic-potato-chips-plant",
    name: "Automatic Potato Chips Plant",
    description: "Complete end-to-end plant for processing fresh potatoes into crispy chips.",
    image: "/images-2/Automatic Potato Chips Plant.jpeg",
    features: ["Peeling & Slicing", "Blanching", "Continuous Frying"],
    specs: { capacity: "200-1000 kg/hr", power: "50-100 kW", area: "40x12 meters" }
  },
  {
    id: "automatic-besan-extruder",
    name: "Automatic Besan Extruder",
    description: "Advanced extruder for producing besan-based snacks like sev and bhujia.",
    image: "/images-2/Automatic Besan Extruder.jpeg",
    features: ["Precision Dies", "Continuous Operation", "Easy Cleaning"],
    specs: { capacity: "100-300 kg/hr", power: "15-30 kW", area: "5x3 meters" }
  },
  {
    id: "bhujiya-extruder",
    name: "Bhujiya Extruder",
    description: "Specialized extrusion system for authentic bhujiya production.",
    image: "/images-2/Bhujiya Extruder.jpeg",
    features: ["Fine Extrusion", "High Speed", "SS 304 Build"],
    specs: { capacity: "100-250 kg/hr", power: "10-25 kW", area: "4x3 meters" }
  },
  {
    id: "cutting-roller",
    name: "Cutting Roller",
    description: "Precision cutting machinery for shaping dough and extruded snacks.",
    image: "/images-2/Cutting Roller.jpeg",
    features: ["Adjustable Speed", "Multiple Shapes", "Safety Guards"],
    specs: { capacity: "Sync with line", power: "2-5 kW", area: "2x2 meters" }
  },
  {
    id: "dough-mixture",
    name: "Dough Mixture",
    description: "Heavy-duty industrial mixer for preparing consistent snack dough.",
    image: "/images-2/Dough Mixture.jpeg",
    features: ["High Torque", "Uniform Mixing", "Tilting Mechanism"],
    specs: { capacity: "50-200 kg/batch", power: "5-15 kW", area: "3x3 meters" }
  },
  {
    id: "malli-machine",
    name: "Malli Machine",
    description: "Efficient machine for specialized regional snack preparation.",
    image: "/images-2/Malli Machine.jpeg",
    features: ["High Durability", "Consistent Output", "Low Maintenance"],
    specs: { capacity: "100-200 kg/hr", power: "5-10 kW", area: "4x3 meters" }
  },
  {
    id: "slurry-kettle",
    name: "Slurry Kettle",
    description: "Heated mixing kettle for preparing flavouring slurries and syrups.",
    image: "/images-2/Slurry Kettle.jpeg",
    features: ["Jacketed Heating", "Agitator", "Temperature Control"],
    specs: { capacity: "100-500 Liters", power: "10-30 kW", area: "2x2 meters" }
  }
];

export const heroSlides = [
  {
    title: "Revolutionizing Food Processing",
    subtitle: "High-performance automated machines for the global snack industry.",
    image: "/crousel/slide1.jpg",
    cta: "Explore Our Plants"
  },
  {
    title: "SS 304 Food Grade Precision",
    subtitle: "Built with the highest standards of hygiene and durability in mind.",
    image: "/crousel/slide2.jpg",
    cta: "View Catalog"
  },
  {
    title: "High Production, Low Consumption",
    subtitle: "Engineered for maximum efficiency with minimum oil and fuel usage.",
    image: "/crousel/slide3.jpg",
    cta: "Get a Quote"
  }
];

export const whyChooseUs = [
  {
    title: "Low Oil Consumption",
    description: "Advanced frying technology designed to minimize oil absorption and wastage.",
    icon: "Oil"
  },
  {
    title: "SS 304 Material",
    description: "Full food-grade stainless steel construction for hygiene and long life.",
    icon: "Shield"
  },
  {
    title: "Full Automation",
    description: "Smart PLC-controlled systems to reduce labor costs and increase precision.",
    icon: "Cpu"
  },
  {
    title: "Low Maintenance",
    description: "Robust engineering ensuring minimal downtime and easy servicing.",
    icon: "Settings"
  },
  {
    title: "Export Quality",
    description: "Meeting international standards with machines successfully installed worldwide.",
    icon: "Globe"
  }
];

export const industries = [
  { name: "Snacks Industry",  image: "/images/Automatic Multipurpose Fryer.jpg" },
  { name: "Namkeen Industry", image: "/images/Circular Barch Fryer.jpg" },
  { name: "Fryums Industry",  image: "/images/Fryums Line With Hydro.jpg" },
  { name: "Corn Puff",        image: "/images/Puff Extruder With mixture.jpg" },
  { name: "Noodles Industry", image: "/images/instant Noodles plant.jpg" }
];
