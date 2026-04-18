import fryumsImg from '../assets/images/fryums-plant.jpg';
import kurkureImg from '../assets/images/kurkure-plant.jpg';
import namkeenImg from '../assets/images/namkeen-plant.jpg';
import potatoImg from '../assets/images/potato-chips-plant.jpg';
import cornPuffImg from '../assets/images/corn-puff-plant.jpg';
import noodlesImg from '../assets/images/noodles-plant.jpg';
import fryersImg from '../assets/images/fryers.jpg';
import conveyorsImg from '../assets/images/conveyors.jpg';
import extrudersImg from '../assets/images/extruders.jpg';
import flavoringImg from '../assets/images/flavoring.jpg';
import hero1Img from '../assets/images/hero-1.jpg';
import rndImg from '../assets/images/r-and-d.jpg';
import besanExtruderImg from '../assets/images/besan-extruder.jpg';
import multiFryerImg from '../assets/images/multipurpose-fryer.jpg';
import mumraPlantImg from '../assets/images/mumra-plant.jpg';
import namkeenPlantImg from '../assets/images/namkeen-plant.jpg';
import bucketElevatorImg from '../assets/images/bucket-elevator.jpg';
import circularFryerImg from '../assets/images/circular-batch-fryer.jpg';
import doughMixerImg from '../assets/images/dough-mixer.jpg';
import flavoringDrumImg from '../assets/images/flavoring-drum.jpg';
import fryumsHydroImg from '../assets/images/fryums-line-hydro.jpg';
import fryumsNoHydroImg from '../assets/images/fryums-line-no-hydro.jpg';
import hydroConveyorImg from '../assets/images/hydro-conveyor.jpg';
import noodlesPlantImg from '../assets/images/noodles-plant.jpg';
import noodlesRollerImg from '../assets/images/noodles-combine-roller.jpg';
import nylonSevImg from '../assets/images/nylon-sev-extruder.jpg';
import puffExtruderImg from '../assets/images/puff-extruder.jpg';
import rectangularFryerImg from '../assets/images/rectangular-batch-fryer.jpg';
import vacuumFeederImg from '../assets/images/vacuum-feeding-system.jpg';

export const categories = [
  {
    id: "automatic-besan-extruder",
    name: "Automatic Besan Extruder",
    description: "High-precision extruder for besan based snacks and namkeen.",
    image: besanExtruderImg,
    features: ["Digital Control", "Stainless Steel 304", "Adjustable Die"],
    specs: { capacity: "100-300 kg/hr", power: "15-30 kW", area: "8x4 meters" }
  },
  {
    id: "automatic-multipurpose-fryer",
    name: "Automatic Multipurpose Fryer",
    description: "Advanced frying system for various pellet and extruded snacks.",
    image: fryersImg,
    features: ["Heat Exchanger", "Continuous Filtration", "Precision Temp"],
    specs: { capacity: "200-500 kg/hr", power: "Variable", area: "10x5 meters" }
  },
  {
    id: "automatic-mumra-plant",
    name: "Automatic Mumra Plant",
    description: "Complete processing line for high-quality expanded rice (Mumra).",
    image: cornPuffImg,
    features: ["Steam Heating", "Uniform Roasting", "Full Automation"],
    specs: { capacity: "150-400 kg/hr", power: "25-50 kW", area: "15x8 meters" }
  },
  {
    id: "automatic-namkeen-plant",
    name: "Automatic Namkeen Plant",
    description: "Industrial grade production line for traditional Indian namkeens.",
    image: namkeenImg,
    features: ["Multiple Extruders", "Automatic Frying", "Oil Extraction"],
    specs: { capacity: "500-1000 kg/hr", power: "40-80 kW", area: "25x12 meters" }
  },
  {
    id: "bucket-elevator",
    name: "Bucket Elevator",
    description: "Hygienic material handling and vertical conveying system.",
    image: conveyorsImg,
    features: ["Food Grade Buckets", "Variable Speed", "Easy Clean"],
    specs: { capacity: "Up to 2 tons/hr", power: "1.5-3 kW", area: "Vertical" }
  },
  {
    id: "dough-mixer",
    name: "Industrial Dough Mixer",
    description: "Heavy-duty mixing system for noodle and snack dough preparation.",
    image: rndImg,
    features: ["High Torque", "Safety Interlocks", "Uniform Mixing"],
    specs: { capacity: "50-150 kg/batch", power: "5-10 kW", area: "3x3 meters" }
  },
  {
    id: "flavoring-drum",
    name: "Flavoring Drum & Applicator",
    description: "Continuous coating system for uniform spice and flavor distribution.",
    image: flavoringImg,
    features: ["Mist Spraying", "Variable Rotation", "Powder Feeder"],
    specs: { capacity: "Sync with line", power: "2-5 kW", area: "5x3 meters" }
  },
  {
    id: "fryums-line-hydro",
    name: "Fryums Line (with Hydro)",
    description: "Complete 2D/3D pellet processing with moisture control units.",
    image: fryumsImg,
    features: ["Hydro-extractor", "Continuous Dryer", "Multi-stage Frying"],
    specs: { capacity: "100-500 kg/hr", power: "30-60 kW", area: "25x10 meters" }
  },
  {
    id: "instant-noodles-plant",
    name: "Instant Noodles Plant",
    description: "High-speed automated noodle production with precision rolling.",
    image: noodlesImg,
    features: ["Combine Roller", "Steam Cooking", "Auto Folding"],
    specs: { capacity: "200-800 kg/hr", power: "60-120 kW", area: "40x15 meters" }
  },
  {
    id: "nylon-sev-extruder",
    name: "Nylon Sev Extruder",
    description: "Specialized extruder for thin nylon sev and vermicelli.",
    image: extrudersImg,
    features: ["Micro-hole Dies", "High Pressure", "Consistent Flow"],
    specs: { capacity: "50-150 kg/hr", power: "10-20 kW", area: "6x4 meters" }
  },
  {
    id: "potato-chips-plant",
    name: "Potato Chips Plant",
    description: "Fully integrated line from potato washing to final flavoring.",
    image: potatoImg,
    features: ["Auto Peeler", "Slicer with Water Spray", "Low Oil Retain"],
    specs: { capacity: "100-1000 kg/hr", power: "50-150 kW", area: "35x12 meters" }
  },
  {
    id: "kurkure-plant",
    name: "Kurkure / Nik Nak Plant",
    description: "Rotary head extruder line for crunchy corn-based sticks.",
    image: kurkureImg,
    features: ["Corn Meal Feed", "Random Shape Dies", "Rapid Cooling"],
    specs: { capacity: "100-300 kg/hr", power: "35-55 kW", area: "15x8 meters" }
  },
  {
    id: "vacum-feeding-system",
    name: "Vacuum Feeding System",
    description: "Automated pneumatic material transfer for flour and powders.",
    image: conveyorsImg,
    features: ["Dust-free", "Vertical Lift", "Level Sensors"],
    specs: { capacity: "500 kg/hr", power: "5-10 kW", area: "Compact" }
  }
];

export const heroSlides = [
  {
    title: "Revolutionizing Food Processing",
    subtitle: "High-performance automated machines for the global snack industry.",
    image: hero1Img,
    cta: "Explore Our Plants"
  },
  {
    title: "SS 304 Food Grade Precision",
    subtitle: "Built with the highest standards of hygiene and durability in mind.",
    image: hero1Img,
    cta: "View Catalog"
  },
  {
    title: "High Production, Low Consumption",
    subtitle: "Engineered for maximum efficiency with minimum oil and fuel usage.",
    image: rndImg,
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
  { name: "Snacks Industry", image: kurkureImg },
  { name: "Namkeen Industry", image: namkeenImg },
  { name: "Potato Chips", image: potatoImg },
  { name: "Corn Puff", image: fryumsImg },
  { name: "Noodles Industry", image: noodlesImg }
];
