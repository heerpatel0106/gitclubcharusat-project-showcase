// Git Club CHARUSAT Project Showcase Data
// High-quality mock community projects across Web Dev, AI/ML, App Dev, IoT, and Design.

export const CATEGORIES = [
  {
    id: "Web Development",
    name: "Web Development",
    shortName: "Web",
    icon: "Globe",
    description: "Responsive web apps, portals, developer tooling, and modern full-stack systems built by the community.",
    accentColor: "#2563EB"
  },
  {
    id: "AI / ML",
    name: "AI / ML",
    shortName: "AI / ML",
    icon: "Brain",
    description: "Intelligent systems, natural language models, assistive computer vision, and predictive analytics.",
    accentColor: "#8B5CF6"
  },
  {
    id: "App Development",
    name: "App Development",
    shortName: "Mobile",
    icon: "Smartphone",
    description: "Cross-platform mobile applications, campus productivity tools, and on-the-go utility suites.",
    accentColor: "#0284C7"
  },
  {
    id: "IoT",
    name: "IoT & Hardware",
    shortName: "IoT",
    icon: "Cpu",
    description: "Embedded microcontrollers, smart environmental sensors, telemetry dashboards, and automated hardware.",
    accentColor: "#10B981"
  },
  {
    id: "Design",
    name: "UI/UX & Design",
    shortName: "Design",
    icon: "Palette",
    description: "Design systems, accessible component libraries, brand identities, and product design explorations.",
    accentColor: "#EC4899"
  }
];

export const PROJECTS_DATA = [
  {
    id: "campus-connect",
    title: "CampusConnect",
    category: "Web Development",
    shortDescription: "A centralized student life hub for discovering university clubs, hackathons, workshops, and campus announcements.",
    fullDescription: "CampusConnect eliminates fragmented social groups by providing CHARUSAT students with a single verified calendar, club recruitment workflows, and peer discussion spaces.",
    problem: "Student community updates at university are scattered across dozens of WhatsApp groups, physical bulletin boards, and random Instagram pages. Incoming and existing students frequently miss club orientations, tech workshops, and hackathon registration deadlines due to communication fragmentation.",
    solution: "A unified single-page web portal featuring club directory listings, an aggregated event calendar with iCal sync, real-time RSVP tracking, and role-based announcement boards maintained directly by student leads.",
    howItWorks: [
      {
        step: 1,
        title: "Club Onboarding & Verification",
        description: "Student clubs register official profiles with verified administrator roles, leadership contacts, and brand assets."
      },
      {
        step: 2,
        title: "Event Aggregation & Scheduling",
        description: "Organizers publish workshops, meetups, and hackathons with real-time seat limits and automated reminders."
      },
      {
        step: 3,
        title: "Student Discovery & Bookmarking",
        description: "Students filter events by tech category, bookmark sessions to personal calendars, and receive instant updates."
      },
      {
        step: 4,
        title: "Feedback & Community Polls",
        description: "Post-event surveys and interactive polls gather community feedback to help clubs improve future sessions."
      }
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite", "Node.js", "REST APIs"],
    team: [
      { name: "Devansh Vora", role: "Frontend Lead", avatar: "DV" },
      { name: "Pooja Shah", role: "UI/UX Designer", avatar: "PS" },
      { name: "Kavya Patel", role: "Backend Developer", avatar: "KP" }
    ],
    status: "Completed",
    featured: true,
    badgeText: "Community Favorite",
    createdAt: "2024-09-12",
    github: "https://github.com/gitclub-charusat/campus-connect",
    demo: "https://campus-connect.gitclub.example",
    stats: { stars: 42, forks: 14, views: 1280 },
    highlights: ["Over 800 student sign-ups simulated", "Sub-100ms client search", "Integrated dark/light theme"],
    gradient: "from-blue-600 via-indigo-600 to-sky-500",
    themeColor: "#2563EB"
  },
  {
    id: "medimind-ai",
    title: "MediMind AI",
    category: "AI / ML",
    shortDescription: "An AI-assisted health triage and clinical symptom synthesizer designed to provide structured wellness guidance.",
    fullDescription: "MediMind translates complex medical queries into accessible patient terminology, providing interactive symptom checking, verified specialist referrals, and medication timeline tracking.",
    problem: "When individuals search symptoms on generic web engines, they are often bombarded with alarmist, contradictory, or unverified information. Patients struggle to formulate accurate symptom summaries before visiting healthcare clinics, causing delays in medical triage.",
    solution: "MediMind utilizes fine-tuned conversational models coupled with structured medical decision trees to guide users through diagnostic inquiries, providing a structured summary report that patients can share with doctors.",
    howItWorks: [
      {
        step: 1,
        title: "Interactive Symptom Intake",
        description: "Users describe symptoms through a natural language chat interface or interactive anatomical body map."
      },
      {
        step: 2,
        title: "Clinical Synthesis & Risk Scoring",
        description: "The inference engine checks for red-flag indicators, cross-references clinical knowledge bases, and calculates risk scores."
      },
      {
        step: 3,
        title: "Triage Report Generation",
        description: "Generates an exportable PDF summary of onset, severity, and potential queries for clinical consultation."
      },
      {
        step: 4,
        title: "Follow-up Reminders",
        description: "Schedules automated check-ins to monitor symptom progression or recommend urgent physical care."
      }
    ],
    technologies: ["Python", "FastAPI", "React", "PyTorch", "Transformers", "Tailwind CSS"],
    team: [
      { name: "Rohan Trivedi", role: "ML Engineer", avatar: "RT" },
      { name: "Ananya Mehta", role: "Full Stack Engineer", avatar: "AM" }
    ],
    status: "Completed",
    featured: true,
    badgeText: "Innovation Award",
    createdAt: "2024-10-04",
    github: "https://github.com/gitclub-charusat/medimind-ai",
    demo: "https://medimind.gitclub.example",
    stats: { stars: 58, forks: 19, views: 2450 },
    highlights: ["94% symptom categorization accuracy", "Strict privacy-first local storage", "Multi-lingual query parser"],
    gradient: "from-purple-600 via-violet-600 to-indigo-500",
    themeColor: "#8B5CF6"
  },
  {
    id: "greenroute",
    title: "GreenRoute",
    category: "Web Development",
    shortDescription: "Carbon-conscious navigation and multimodal transit optimizer that calculates emissions across transport options.",
    fullDescription: "GreenRoute helps commuters choose sustainable transit modes by calculating real-time carbon offsets between cycling, public buses, carpooling, and personal vehicles.",
    problem: "Standard navigation apps optimize strictly for shortest travel time or toll avoidance, completely ignoring the carbon footprint of transport choices. Environmentally conscious commuters have no actionable metric to gauge their daily commute impact.",
    solution: "A dynamic route mapping web platform that evaluates elevation, transit timetables, and vehicle fuel consumption models to offer 'Green Score' travel alternatives with tangible carbon-saving rewards.",
    howItWorks: [
      {
        step: 1,
        title: "Origin & Destination Ingestion",
        description: "Users input route coordinates with preferences for active walking, cycling, or public transport."
      },
      {
        step: 2,
        title: "Multimodal Graph Routing",
        description: "The routing engine queries OpenStreetMap vectors and transit timetables to calculate route paths."
      },
      {
        step: 3,
        title: "Carbon Offset Quantification",
        description: "Applies EPA vehicle emission coefficients to deliver real-time grams of CO2 saved per commute option."
      },
      {
        step: 4,
        title: "Campus Leaderboards",
        description: "Students log eco-friendly commutes to earn Git Club sustainability badges on the university dashboard."
      }
    ],
    technologies: ["React", "Leaflet.js", "OpenStreetMap API", "Node.js", "Chart.js"],
    team: [
      { name: "Manan Joshi", role: "Full Stack Developer", avatar: "MJ" },
      { name: "Tanvi Soni", role: "GIS Data Analyst", avatar: "TS" }
    ],
    status: "Completed",
    featured: true,
    badgeText: "Eco Tech",
    createdAt: "2024-07-28",
    github: "https://github.com/gitclub-charusat/greenroute",
    demo: "https://greenroute.gitclub.example",
    stats: { stars: 36, forks: 8, views: 980 },
    highlights: ["Real-time OpenStreetMap integration", "CO2 savings calculator", "Zero API costs via open datasets"],
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    themeColor: "#10B981"
  },
  {
    id: "studysync",
    title: "StudySync",
    category: "App Development",
    shortDescription: "Collaborative peer study room app with synchronized Pomodoro timers, shared notes, and study group matchmaking.",
    fullDescription: "StudySync creates virtual study lounges where classmates can hold focused sessions, track group sprint tasks, and stay accountable during mid-term and finals examination weeks.",
    problem: "Remote and self-directed studying often leads to digital procrastination, isolation, and lack of accountability. Existing timer apps are single-player, while full video conferencing apps are too bandwidth-heavy and intrusive for quiet study.",
    solution: "A lightweight, cross-platform mobile application providing ambient virtual study rooms, synchronous group Pomodoro intervals, low-friction presence indicators, and task check-offs.",
    howItWorks: [
      {
        step: 1,
        title: "Lounge Creation & Topic Tagging",
        description: "Students set up topic rooms (e.g., 'Data Structures & Algorithms', 'Operating Systems') with custom timer cycles."
      },
      {
        step: 2,
        title: "Synchronized Focus Intervals",
        description: "A synchronized master clock keeps all participants in locked 25-minute focus cycles followed by 5-minute cooldowns."
      },
      {
        step: 3,
        title: "Ambient Accountability",
        description: "Members share bullet checklist goals; the app emits non-intrusive soundscapes and milestone celebrations."
      },
      {
        step: 4,
        title: "Progress Insights & Streaks",
        description: "Aggregates weekly focus hours and tracks consistent study streaks across student batches."
      }
    ],
    technologies: ["React Native", "Expo", "TypeScript", "WebSocket", "Tailwind CSS"],
    team: [
      { name: "Aryan Barot", role: "Mobile App Lead", avatar: "AB" },
      { name: "Disha Parmar", role: "Product Designer", avatar: "DP" }
    ],
    status: "In Progress",
    featured: false,
    badgeText: "High Velocity",
    createdAt: "2024-10-18",
    github: "https://github.com/gitclub-charusat/studysync",
    demo: "https://studysync.gitclub.example",
    stats: { stars: 29, forks: 6, views: 820 },
    highlights: ["Sub-50ms WebSocket timer sync", "Offline note persistence", "Low-power ambient audio engine"],
    gradient: "from-sky-600 via-blue-600 to-indigo-700",
    themeColor: "#0284C7"
  },
  {
    id: "smartgarden-iot",
    title: "SmartGarden IoT",
    category: "IoT",
    shortDescription: "Automated indoor botanical greenhouse controller with real-time soil telemetry and moisture-driven irrigation.",
    fullDescription: "SmartGarden utilizes ESP32 microcontrollers and capacitive moisture sensors to maintain optimal soil conditions, publishing real-time telemetry to an interactive web dashboard.",
    problem: "Campus greenhouses and indoor botanical projects often suffer from inconsistent manual watering cycles, leading to plant mortality, fungal root rot, or severe water wastage during university holidays.",
    solution: "A battery-efficient IoT hardware node with capacitive soil moisture sensors, ambient temperature/humidity probes, and automated solenoid valve triggers paired with a telemetry web interface.",
    howItWorks: [
      {
        step: 1,
        title: "Microclimate Telemetry Sampling",
        description: "ESP32 microcontrollers read soil moisture, luminosity, and ambient humidity every 60 seconds."
      },
      {
        step: 2,
        title: "MQTT Telemetry Transmission",
        description: "Sensor metrics are packaged as JSON payloads and transmitted via MQTT broker over campus Wi-Fi."
      },
      {
        step: 3,
        title: "Dynamic Irrigation Actuation",
        description: "When soil drops below plant-specific moisture thresholds, 12V submersible pumps activate for calibrated bursts."
      },
      {
        step: 4,
        title: "Web Dashboard Visualization",
        description: "Users view time-series charts, trigger manual watering overrides, and receive Telegram alert notices."
      }
    ],
    technologies: ["ESP32", "C++", "MQTT", "React", "Node.js", "Chart.js"],
    team: [
      { name: "Siddharth Dave", role: "Embedded Systems Engineer", avatar: "SD" },
      { name: "Nidhi Rana", role: "Hardware Designer", avatar: "NR" },
      { name: "Rahul Patel", role: "Frontend Developer", avatar: "RP" }
    ],
    status: "Completed",
    featured: false,
    badgeText: "Hardware Hack",
    createdAt: "2024-06-15",
    github: "https://github.com/gitclub-charusat/smartgarden-iot",
    demo: "https://smartgarden.gitclub.example",
    stats: { stars: 51, forks: 17, views: 1600 },
    highlights: ["Ultra-low sleep power consumption", "Custom PCB schematic included", "Local fallback irrigation logic"],
    gradient: "from-teal-600 via-emerald-600 to-green-700",
    themeColor: "#10B981"
  },
  {
    id: "pixelforge",
    title: "PixelForge",
    category: "Design",
    shortDescription: "An accessible, production-ready design token system and UI component library tailored for campus developer tools.",
    fullDescription: "PixelForge standardizes visual identity, typography scales, contrast-verified color tokens, and 40+ composable React components across all Git Club student initiatives.",
    problem: "Student developers often create redundant CSS styles, unstyled native forms, or inaccessible color combinations with poor contrast ratios. Projects within the community lacked visual cohesion and reusability.",
    solution: "A complete Figma-to-Code design architecture featuring W3C-compliant design tokens, fully keyboard-navigable components, WCAG AAA contrast compliance, and automated Storybook documentation.",
    howItWorks: [
      {
        step: 1,
        title: "Token Primitive Modeling",
        description: "Global design tokens for color, spacing, radius, typography, and elevations defined in JSON specifications."
      },
      {
        step: 2,
        title: "Figma Sync Automation",
        description: "Automated GitHub Actions export variables from Figma libraries directly into CSS and Tailwind theme presets."
      },
      {
        step: 3,
        title: "Accessible Component Crafting",
        description: "Pre-tested accessible components with complete ARIA role markup, keyboard traps, and focus rings."
      },
      {
        step: 4,
        title: "Interactive Storybook Portal",
        description: "Live component playground where community members can test props, view code recipes, and copy snippets."
      }
    ],
    technologies: ["Figma", "CSS Variables", "React", "Storybook", "TypeScript", "Tailwind CSS"],
    team: [
      { name: "Shruti Makwana", role: "Design Systems Lead", avatar: "SM" },
      { name: "Kunal Pandya", role: "UI Engineer", avatar: "KP" }
    ],
    status: "Completed",
    featured: false,
    badgeText: "Design Excellence",
    createdAt: "2024-05-20",
    github: "https://github.com/gitclub-charusat/pixelforge",
    demo: "https://pixelforge.gitclub.example",
    stats: { stars: 64, forks: 22, views: 2890 },
    highlights: ["WCAG AAA compliant tokens", "Zero-dependency baseline core", "Interactive Storybook docs"],
    gradient: "from-pink-600 via-rose-600 to-fuchsia-600",
    themeColor: "#EC4899"
  },
  {
    id: "visionassist",
    title: "VisionAssist",
    category: "AI / ML",
    shortDescription: "On-device computer vision mobility assistant that converts camera streams into real-time audio scene descriptions.",
    fullDescription: "VisionAssist empowers visually impaired individuals by identifying nearby physical obstacles, recognizing text on campus signboards, and articulating spatial cues using edge neural models.",
    problem: "Campus navigation poses serious safety hazards for visually impaired students when navigating unpredictable outdoor staircases, construction detours, or reading uncaptioned classroom numbers.",
    solution: "A high-performance mobile web application using lightweight YOLO models running locally in-browser via ONNX WebAssembly, instantly articulating surroundings via speech synthesis without latency.",
    howItWorks: [
      {
        step: 1,
        title: "Live Camera Stream Capture",
        description: "WebRTC camera feeds capture high-contrast frames at 30 FPS while managing device thermal load."
      },
      {
        step: 2,
        title: "Edge Neural Inference",
        description: "Lightweight object detection models classify pedestrians, stairs, doors, and obstacles directly on device."
      },
      {
        step: 3,
        title: "Optical Text Extraction",
        description: "OCR filters isolate signage text, course codes, and door placards within the user's field of view."
      },
      {
        step: 4,
        title: "Directional Haptic & Audio Cues",
        description: "Web Speech API articulates spatial distance and direction, accompanied by tactile vibration alerts."
      }
    ],
    technologies: ["Python", "ONNX Runtime", "WebAssembly", "JavaScript", "Web Speech API"],
    team: [
      { name: "Harshil Bhatt", role: "Computer Vision Engineer", avatar: "HB" },
      { name: "Zeel Panchal", role: "Accessibility Specialist", avatar: "ZP" }
    ],
    status: "Prototype",
    featured: false,
    badgeText: "Impact Pioneer",
    createdAt: "2024-09-30",
    github: "https://github.com/gitclub-charusat/visionassist",
    demo: "https://visionassist.gitclub.example",
    stats: { stars: 47, forks: 11, views: 1410 },
    highlights: ["100% on-device private processing", "Works offline with zero cellular data", "Sub-150ms audio latency"],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    themeColor: "#6366F1"
  },
  {
    id: "codecraft-compiler",
    title: "CodeCraft Explorer",
    category: "Web Development",
    shortDescription: "Interactive browser-based AST compiler visualizer and bytecode step-through debugger for computer science learners.",
    fullDescription: "CodeCraft Explorer breaks down the compilation pipeline, translating custom high-level code snippets into lexical tokens, parse trees, symbol tables, and assembly bytecode in real-time.",
    problem: "Compiler construction and parsing concepts are notoriously abstract for undergraduate computer engineering students. Reading dense textbook grammar definitions without visual state feedback causes steep learning curves.",
    solution: "A step-by-step visual sandbox where students write code and observe real-time lexical tokens, collapsible syntax trees, and assembly bytecode generation side-by-side with execution highlight tracing.",
    howItWorks: [
      {
        step: 1,
        title: "Lexical Token Stream",
        description: "Code is parsed into color-coded token tokens with line and column span metadata."
      },
      {
        step: 2,
        title: "Abstract Syntax Tree (AST) Render",
        description: "An interactive, zoomable D3 node tree visualizes operator precedence and scope boundaries."
      },
      {
        step: 3,
        title: "Intermediate Representation (IR)",
        description: "Converts AST nodes into clean three-address code instructions with optimization flags."
      },
      {
        step: 4,
        title: "Virtual Machine Execution",
        description: "A simulated stack machine executes bytecode step-by-step, highlighting memory and register changes."
      }
    ],
    technologies: ["React", "TypeScript", "D3.js", "WebAssembly", "Monaco Editor"],
    team: [
      { name: "Neel Parekh", role: "Systems Programmer", avatar: "NP" },
      { name: "Riya Chokshi", role: "Frontend Engineer", avatar: "RC" }
    ],
    status: "Completed",
    featured: false,
    badgeText: "Academic Tool",
    createdAt: "2024-08-01",
    github: "https://github.com/gitclub-charusat/codecraft-compiler",
    demo: "https://codecraft.gitclub.example",
    stats: { stars: 39, forks: 12, views: 1120 },
    highlights: ["Interactive D3 tree rendering", "Step-by-step virtual machine simulation", "Monaco editor integration"],
    gradient: "from-blue-700 via-cyan-700 to-teal-700",
    themeColor: "#0284C7"
  },
  {
    id: "dronepulse",
    title: "DronePulse",
    category: "IoT",
    shortDescription: "Autonomous quadcopter flight telemetry station and obstacle-avoidance mission planner for campus surveying.",
    fullDescription: "DronePulse interfaces with ArduPilot flight controllers to stream high-frequency GPS coordinate logs, battery health, IMU pitch-roll telemetry, and geofence mission routes.",
    problem: "Student robotics teams conducting drone aerial surveys frequently rely on bulky commercial proprietary software that cannot be customized for campus research, sensory payloads, or custom lidar streams.",
    solution: "A lightweight open-source ground control station web dashboard providing low-latency MAVLink telemetry decoding, interactive 3D flight paths, and fail-safe return-to-launch triggers.",
    howItWorks: [
      {
        step: 1,
        title: "MAVLink Packet Telemetry",
        description: "Receives telemetry stream over 433MHz radio link to local base station server."
      },
      {
        step: 2,
        title: "WebSockets State Distribution",
        description: "Broadcasts IMU gyroscopes, altitude, GPS fixes, and battery levels to connected client displays."
      },
      {
        step: 3,
        title: "3D Flight Path Rendering",
        description: "Three.js HUD artificial horizon and satellite trail projection display spatial orientation in real-time."
      },
      {
        step: 4,
        title: "Geofencing & Safety Failsafes",
        description: "Auto-engages Return-to-Launch (RTL) mode if radio signal degrades or drone breaches campus perimeter."
      }
    ],
    technologies: ["C++", "MAVLink", "Three.js", "React", "Node.js", "WebSockets"],
    team: [
      { name: "Parth Raval", role: "Robotics & Avionics", avatar: "PR" },
      { name: "Hetvi Modi", role: "UI Dashboard Lead", avatar: "HM" }
    ],
    status: "Prototype",
    featured: false,
    badgeText: "Robotics Core",
    createdAt: "2024-04-10",
    github: "https://github.com/gitclub-charusat/dronepulse",
    demo: "https://dronepulse.gitclub.example",
    stats: { stars: 33, forks: 9, views: 890 },
    highlights: ["Sub-20ms telemetry latency", "Live artificial horizon HUD", "Automated geofence failsafe"],
    gradient: "from-slate-700 via-cyan-800 to-teal-800",
    themeColor: "#0D9488"
  },
  {
    id: "cryptovault-auth",
    title: "CryptoVault ID",
    category: "App Development",
    shortDescription: "Decentralized verifiable credential wallet for student degree certifications, club memberships, and workshop badges.",
    fullDescription: "CryptoVault ID allows university students to store cryptographically signed credentials and club achievements on their smartphone, allowing zero-knowledge verification for employers.",
    problem: "Printed certificates and PDF diplomas are easily forged and cumbersome for employers to verify. Graduating students often lose records of hackathon wins, club leadership roles, and technical badges.",
    solution: "A mobile self-sovereign identity app adhering to W3C Verifiable Credentials standards, giving students cryptographic proof of their skills and Git Club milestones without revealing private data.",
    howItWorks: [
      {
        step: 1,
        title: "Club Keypair Issuance",
        description: "Verified university clubs issue digitally signed cryptographic proof tokens upon workshop completion."
      },
      {
        step: 2,
        title: "Local Secure Enclave Storage",
        description: "Credentials are saved in the device's hardware keystore with biometric fingerprint/face authentication."
      },
      {
        step: 3,
        title: "Zero-Knowledge QR Verification",
        description: "Recruiters scan a dynamic QR code to instantly verify credential validity on the blockchain ledger."
      },
      {
        step: 4,
        title: "Public Portfolio Showcase",
        description: "Students can generate one-click verified portfolio links highlighting their verified club credentials."
      }
    ],
    technologies: ["React Native", "TypeScript", "Cryptography", "W3C VC", "Node.js"],
    team: [
      { name: "Aditya Shah", role: "Security & Cryptography Lead", avatar: "AS" },
      { name: "Bhavik Prajapati", role: "Mobile Engineer", avatar: "BP" }
    ],
    status: "In Progress",
    featured: false,
    badgeText: "Zero Knowledge",
    createdAt: "2024-09-05",
    github: "https://github.com/gitclub-charusat/cryptovault-auth",
    demo: "https://cryptovault.gitclub.example",
    stats: { stars: 45, forks: 15, views: 1350 },
    highlights: ["W3C Verifiable Credential standard", "Biometric enclave security", "QR verification in under 1 second"],
    gradient: "from-indigo-700 via-blue-700 to-cyan-600",
    themeColor: "#3B82F6"
  }
];

// Helper functions for easy querying
export function getAllProjects() {
  return PROJECTS_DATA;
}

export function getFeaturedProjects() {
  return PROJECTS_DATA.filter((p) => p.featured);
}

export function getProjectById(id) {
  return PROJECTS_DATA.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

export function getCategoryCounts() {
  const counts = {};
  CATEGORIES.forEach((cat) => {
    counts[cat.id] = PROJECTS_DATA.filter((p) => p.category === cat.id).length;
  });
  return counts;
}
