import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

function Section({ children }) {
  return <section className="scroll-mt-24">{children}</section>;
}

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "volts",
    title: "VOLTS",
    eyebrow: "Flagship Full-Stack + IoT Ecosystem",
    year: "2026",
    accent: "green",

    logo: "/img/volts/volts-logo.png",
    img: "/img/volts/volts-robot.jpg",

    shots: ["/img/volts/volts-robot2.jpeg"],

    modalHero:
      "/img/volts/volts-cartel-portfolio.png",

    videos: [
      {
        title: "Robot & IoT",
        src: "/img/volts/volts-iot.mp4",
      },
      {
        title: "Android App",
        src: "/img/volts/volts-app.mp4",
      },
      {
        title: "Enterprise Web Platform",
        src: "/img/volts/volts-web.mp4",
      },
    ],

    desc:
      "A complete educational technology ecosystem that connects a physical robotic companion, an Android application, cloud services and an enterprise management platform.",

    story:
      "VOLTS is an end-to-end technology ecosystem that connects an ESP32 robotic companion, an Android app, cloud services and a complete enterprise platform. It covers Bluetooth interaction, production, inventory, BOM recipes, commercial workflows, licensing, support, auditing and analytics, while keeping an educational and sustainable approach.",

    tools: [
      "ESP32",
      "IoT",
      "Kotlin",
      "Android",
      "Bluetooth",
      "Firebase",
      "Angular 21",
      "ASP.NET Core",
      "MongoDB",
      "JWT",
      "RBAC",
      "ETL",
    ],

    highlights: [
      "Physical Robot",
      "Android Companion",
      "Enterprise Platform",
      "Cloud + Analytics",
      "Sustainable Design",
    ],

    badges: [
      {
        label: "★ Favorite",
        type: "favorite",
      },
      {
        label: "Most Complete",
        type: "flagship",
      },
      {
        label: "IoT + App + Web",
        type: "ecosystem",
      },
    ],

    featured: true,
  },

  {
    id: "casa-leon",
    title: "Casa León",
    eyebrow: "Enterprise ERP + E-Commerce",
    year: "2026",
    accent: "forest",

    logo: "/img/work/casa-leon-logo.png",
    img: "/img/work/casa-leon-hero.png",

    shots: [
      "/img/work/casa-leon-1.png",
      "/img/work/casa-leon-2.png",
      "/img/work/casa-leon-3.png",
    ],

    desc:
      "Integrated ERP + e-commerce system for a leather goods factory in León, Guanajuato. Built around production, inventory, purchases, sales, POS, roles, auditability, and scalable architecture.",

    story:
      "Casa León is an integrated ERP and e-commerce platform designed around the real operational workflow of a leather goods factory in León, Guanajuato. The system connects production, inventory, raw materials, purchases, sales, point-of-sale operations, users, roles and auditability within the same architecture. It also connects internal factory processes with a client-facing e-commerce experience, keeping operational and commercial information structured, traceable and useful for daily decision-making.",

    tools: [
      "MongoDB",
      "RBAC",
      "BOM",
      "Inventory",
      "3NF",
      "Cloud Architecture",
    ],

    highlights: [
      "Production",
      "Inventory",
      "E-Commerce",
      "POS",
      "Auditability",
      "Scalable Architecture",
    ],

    badges: [
      {
        label: "Web",
        type: "web",
      },
      {
        label: "ERP",
        type: "enterprise",
      },
    ],

    repo:
      "https://github.com/IDGS-801-23001542/CasaLeon",

    desktopMode: "casa",

    featured: true,
  },

  {
    id: "jpokedex2",
    title: "jpokedex2",
    eyebrow: "Cinematic Mobile Experience",
    year: "2026",
    accent: "red",

    logo: "/img/pokedexapp.png",
    img: "/img/work/jpokedex2-hero.png",

    shots: [
      "/img/work/jpokedex2-1.png",
      "/img/work/jpokedex2-2.png",
      "/img/work/jpokedex2-3.png",
    ],

    desc:
      "A rebuilt Pokédex experience focused on cinematic mobile UI, nostalgia, HD-2D inspiration, Time Machine modes, animations, and a more premium app feeling.",

    story:
      "jpokedex2 is a complete reinterpretation of my original Pokédex project, rebuilt as a much more ambitious mobile experience. The goal was not simply to consume Pokémon data, but to create an application with its own visual identity, stronger hierarchy, fluid navigation and a cinematic presentation inspired by Pokémon nostalgia and HD-2D aesthetics. It represents the evolution of my original Pokédex using the design and development experience I have gained since that first version.",

    tools: [
      "React Native",
      "PokéAPI",
      "Animations",
      "Mobile UI",
      "HD-2D",
    ],

    highlights: [
      "Cinematic UI",
      "Pokémon Data",
      "Time Machine",
      "HD-2D",
      "Animations",
      "Mobile UX",
    ],

    badges: [
      {
        label: "Mobile App",
        type: "mobile",
      },
    ],

    repo: "https://github.com/jeezly",

    desktopMode: "carousel",
    logoScale: 1.05,

    featured: true,
  },
];

const moreProjects = [
  {
    id: "instaxia",
    title: "Instaxia",
    eyebrow: "Brother’s Project",
    year: "2025",
    accent: "purple",

    logo: "/img/ryan.png",
    img: "/img/ryan.png",

    shots: [
      "/img/work/instaxia-1.png",
      "/img/work/instaxia-2.png",
      "/img/work/instaxia-3.png",
    ],

    desc:
      "Modern landing page for my brother’s project, with features, pricing, FAQs, responsive layout, and polished presentation.",

    story:
      "Instaxia is a polished business landing experience created around my brother’s AI-focused project. My contribution centered on translating the product into a clear web experience through responsive sections, feature communication, pricing, FAQs and a consistent visual hierarchy.",

    tools: ["React", "Tailwind", "DaisyUI"],

    highlights: [
      "Responsive Landing",
      "Pricing",
      "FAQs",
      "AI Product UX",
      "Visual Direction",
    ],

    badges: [
      {
        label: "Web",
        type: "web",
      },
    ],

    live: "https://instaxia.com",

    desktopMode: "carousel",
  },

  {
    id: "vehicle-reports",
    title: "Vehicle Reports System",
    eyebrow: "Internship Project",
    year: "2024",
    accent: "green",

    logo: "/img/auto.png",
    img: "/img/auto.png",

    shots: [
      "/img/work/vehicle-reports-1.png",
      "/img/work/vehicle-reports-2.png",
      "/img/work/vehicle-reports-3.png",
    ],

    desc:
      "Web platform to centralize vehicle verification reports across multiple branches.",

    story:
      "Vehicle Reports System was my internship project and one of my first applications built around a real operational need. The platform centralizes vehicle verification reports from multiple branches, organizes access through roles and authentication, and makes report consultation and exports easier for the people working with the data every day.",

    tools: [
      "React",
      "Node.js",
      "MySQL",
      "JWT",
      "Tailwind",
    ],

    highlights: [
      "Centralized Reports",
      "Multi-Branch",
      "Roles",
      "JWT Auth",
      "Exports",
    ],

    badges: [
      {
        label: "Web",
        type: "web",
      },
      {
        label: "Internship",
        type: "work",
      },
    ],

    repo:
      "https://github.com/jeezly/Centralizaciondereportesautomotriz",

    desktopMode: "reports",
  },

  {
    id: "appmedik",
    title: "AppMedik",
    eyebrow: "Integrative Project",
    year: "2023",
    accent: "pink",

    logo: "/img/appmedik.png",
    img: "/img/appmedik.png",

    shots: [
      "/img/work/appmedik-1.png",
      "/img/work/appmedik-2.png",
      "/img/work/appmedik-3.png",
    ],

    desc:
      "Pediatric mobile app for appointments, medical management, authentication, and backend flow.",

    story:
      "AppMedik was an integrative mobile project focused on pediatric medical workflows. I worked with appointment-oriented screens, user authentication, backend logic, MongoDB and cloud deployment concepts while learning how a mobile client communicates with services and persistent data.",

    tools: [
      "Android Studio",
      "Node.js",
      "MongoDB",
      "AWS",
    ],

    highlights: [
      "Appointments",
      "Medical Flows",
      "Authentication",
      "MongoDB",
      "Cloud Backend",
    ],

    badges: [
      {
        label: "Mobile App",
        type: "mobile",
      },
    ],

    repo:
      "https://github.com/jeezly/AppMedik",

    desktopMode: "carousel",
    logoScale: 1.75,
  },

  {
    id: "pokedex",
    title: "Pokédex App",
    eyebrow: "First Pokémon Build",
    year: "2023",
    accent: "red",

    logo: "/img/pokedexapp.png",
    img: "/img/pokedexapp.png",

    shots: [
      "/img/work/pokedex-1.png",
      "/img/work/pokedex-2.png",
      "/img/work/pokedex-3.png",
    ],

    desc:
      "Retro Android Pokédex connected to the PokéAPI with search, stats, evolutions, and Pokémon exploration.",

    story:
      "This was my first serious Pokémon-based Android application before jpokedex2. It connected a retro-inspired mobile interface with PokéAPI data for search, statistics, evolutions and Pokémon exploration. The project helped me understand API consumption, asynchronous requests, navigation and Android UI flows.",

    tools: [
      "Android Studio",
      "JavaScript",
      "PokéAPI",
    ],

    highlights: [
      "PokéAPI",
      "Search",
      "Stats",
      "Evolutions",
      "Retro UI",
    ],

    badges: [
      {
        label: "Mobile App",
        type: "mobile",
      },
    ],

    repo:
      "https://github.com/jeezly/Pokedex-8-bits-Android-",

    desktopMode: "carousel",
    logoScale: 1.2,
  },

  {
    id: "smartparking",
    title: "SmartParking",
    eyebrow: "Real-Time Parking Simulation",
    year: "2025",
    accent: "yellow",

    logo: "/img/smartparking.png",
    img: "/img/smartparking.png",

    shots: [
      "/img/work/smartparking-1.png",
      "/img/work/smartparking-2.png",
      "/img/work/smartparking-3.png",
    ],

    desc:
      "Real-time intelligent parking simulation system with probabilistic vehicle flow, analytics, and dynamic monitoring dashboards.",

    story:
      "SmartParking is a web-based intelligent parking simulator built around a probabilistic vehicle engine. The system simulates vehicle entries and exits, updates parking occupancy in real time and stores historical information for analytics. The project helped me work with dynamic dashboards, frontend/backend synchronization and data visualization using a modular architecture.",

    tools: [
      "Node.js",
      "MongoDB",
      "React",
      "SchoolProject",
      "Recharts",
    ],

    highlights: [
      "Simulation Engine",
      "Live Occupancy",
      "Analytics",
      "Historical Data",
      "Dashboard",
    ],

    badges: [
      {
        label: "Web",
        type: "web",
      },
    ],

    repo:
      "https://github.com/jeezly/smartParking",

    desktopMode: "carousel",
  },

  {
    id: "crudandroid",
    title: "Android Users CRUD",
    eyebrow: "Android Foundations",
    year: "2023",
    accent: "android",

    logo: "/img/crudandroid.png",
    img: "/img/crudandroid.png",

    shots: [],

    desc:
      "One of my first Android CRUD builds focused on local user management and SQLite fundamentals.",

    story:
      "This was one of my earliest Android projects during my TSU stage. It introduced me to native Android development, local persistence and the structure behind basic application workflows. Even though the original screenshots and repository are no longer available, the project was an important step toward understanding how application interfaces connect with persistent data.",

    tools: [
      "Android Studio",
      "SQLite",
    ],

    highlights: [
      "User Management",
      "CRUD",
      "SQLite",
      "Android UI",
      "Local Persistence",
    ],

    badges: [
      {
        label: "Mobile App",
        type: "mobile",
      },
    ],

    archive: true,
  },

  {
    id: "daq",
    title: "DAQ Sensor Monitor",
    eyebrow: "Arduino + Cloud",
    year: "2023",
    accent: "blue",

    logo: "/img/daq.png",
    img: "/img/daq.png",

    shots: [],

    desc:
      "Early Arduino + cloud monitoring experiment for sensor visualization and environmental data.",

    story:
      "DAQ Sensor Monitor was one of my early experiments combining physical sensors, Arduino and cloud-connected data visualization. The objective was to collect environmental information from hardware and expose that information through a software interface rather than keeping the data isolated on the device. It introduced me to telemetry concepts, sensor acquisition, hardware/software communication and remote visualization.",

    tools: [
      "Arduino",
      "NetBeans",
      "Dweet.io",
    ],

    highlights: [
      "Sensor Acquisition",
      "Telemetry",
      "Arduino",
      "Cloud Data",
      "Monitoring",
    ],

    badges: [
      {
        label: "IoT",
        type: "iot",
      },
    ],

    archive: true,
  },

  {
    id: "zarape",
    title: "El Zarape CRUD API",
    eyebrow: "Backend API",
    year: "2023",
    accent: "orange",

    logo: "/img/Elzarape.png",
    img: "/img/Elzarape.png",

    shots: [],

    desc:
      "Early backend CRUD API project focused on restaurant workflows and REST fundamentals.",

    story:
      "El Zarape was one of my first projects focused primarily on backend development. The system explored restaurant-oriented workflows through a CRUD API, combining Java application logic with MySQL persistence and REST-style operations. It helped me understand endpoint structure, request and response flows, database interaction and the separation between frontend clients and backend services.",

    tools: [
      "Java",
      "MySQL",
      "Tomcat",
      "NetBeans",
    ],

    highlights: [
      "REST Endpoints",
      "Restaurant Flow",
      "MySQL",
      "CRUD",
      "Backend Architecture",
    ],

    badges: [
      {
        label: "Backend API",
        type: "backend",
      },
    ],

    archive: true,
  },

  {
    id: "portfolio",
    title: "Portfolio",
    eyebrow: "Personal Brand",
    year: "2026",
    accent: "blue",

    logo:
      "/img/work/portfolio-logo.png",

    img:
      "/img/work/portfolio-1.png",

    shots: [
      "/img/work/portfolio-hero.png",
    ],

    desc:
      "This personal site, redesigned into a cinematic, minimal, premium developer portfolio.",

    story:
      "This portfolio is where I combine software, design, motion, personality, and creative direction into a single product-like experience. I won't include the full repository here… because technically, you're already inside the portfolio.",

    tools: [
      "React",
      "Vite",
      "Tailwind",
      "DaisyUI",
    ],

    highlights: [
      "Responsive Design",
      "Dark Mode",
      "Motion",
      "Personal Branding",
      "Component Architecture",
    ],

    badges: [
      {
        label: "Web",
        type: "web",
      },
      {
        label: "Personal",
        type: "personal",
      },
    ],

    desktopMode: "carousel",
  },
];


const PROJECT_TRANSLATIONS_ES = {
  volts: {
    eyebrow: "Ecosistema insignia Full Stack + IoT",
    desc: "Un ecosistema educativo de tecnología que conecta un compañero robótico físico, una aplicación Android, servicios cloud y una plataforma empresarial de gestión.",
    story: "VOLTS es un ecosistema tecnológico de extremo a extremo que conecta un compañero robótico con ESP32, una app Android, servicios cloud y una plataforma empresarial completa. Incluye interacción por Bluetooth, producción, inventario, recetas BOM, flujos comerciales, licenciamiento, soporte, auditoría y analítica, manteniendo un enfoque educativo y sostenible.",
    highlights: ["Robot físico", "Compañero Android", "Plataforma empresarial", "Cloud + Analítica", "Diseño sostenible"],
    badges: ["★ Favorito", "Más completo", "IoT + App + Web"],
    videos: ["Robot & IoT", "App Android", "Plataforma web empresarial"],
  },
  "casa-leon": {
    eyebrow: "ERP empresarial + E-Commerce",
    desc: "Sistema integrado ERP + e-commerce para una fábrica de artículos de piel en León, Guanajuato. Construido alrededor de producción, inventario, compras, ventas, POS, roles, auditoría y arquitectura escalable.",
    story: "Casa León es una plataforma integrada de ERP y e-commerce diseñada alrededor del flujo operativo real de una fábrica de artículos de piel en León, Guanajuato. El sistema conecta producción, inventario, materias primas, compras, ventas, punto de venta, usuarios, roles y auditoría dentro de una misma arquitectura. También conecta los procesos internos de la fábrica con una experiencia de e-commerce orientada al cliente, manteniendo la información operativa y comercial estructurada, trazable y útil para la toma de decisiones diaria.",
    highlights: ["Producción", "Inventario", "E-Commerce", "POS", "Auditoría", "Arquitectura escalable"],
  },
  jpokedex2: {
    eyebrow: "Experiencia móvil cinematográfica",
    desc: "Una experiencia Pokédex reconstruida con enfoque en UI móvil cinematográfica, nostalgia, inspiración HD-2D, modos Time Machine, animaciones y una sensación de app más premium.",
    story: "jpokedex2 es una reinterpretación completa de mi proyecto Pokédex original, reconstruido como una experiencia móvil mucho más ambiciosa. El objetivo no fue solamente consumir datos de Pokémon, sino crear una aplicación con identidad visual propia, mejor jerarquía, navegación fluida y una presentación cinematográfica inspirada en la nostalgia de Pokémon y la estética HD-2D. Representa la evolución de mi Pokédex original usando la experiencia de diseño y desarrollo que he adquirido desde aquella primera versión.",
    highlights: ["UI cinematográfica", "Datos de Pokémon", "Time Machine", "HD-2D", "Animaciones", "UX móvil"],
    badges: ["App móvil"],
  },
  instaxia: {
    eyebrow: "Proyecto de mi hermano",
    desc: "Landing page moderna para el proyecto de mi hermano, con funcionalidades, precios, preguntas frecuentes, diseño responsivo y una presentación pulida.",
    story: "Instaxia es una experiencia web de negocio pulida creada alrededor del proyecto de IA de mi hermano. Mi contribución se centró en traducir el producto a una experiencia web clara mediante secciones responsivas, comunicación de funcionalidades, precios, preguntas frecuentes y una jerarquía visual consistente.",
    highlights: ["Landing responsiva", "Precios", "FAQs", "UX de producto con IA", "Dirección visual"],
  },
  "vehicle-reports": {
    title: "Sistema de Reportes Vehiculares",
    eyebrow: "Proyecto de estadías",
    desc: "Plataforma web para centralizar reportes de verificación vehicular de múltiples sucursales.",
    story: "Vehicle Reports System fue mi proyecto de estadías y una de mis primeras aplicaciones construidas alrededor de una necesidad operativa real. La plataforma centraliza reportes de verificación vehicular de múltiples sucursales, organiza el acceso mediante roles y autenticación, y facilita la consulta y exportación de reportes para las personas que trabajan diariamente con estos datos.",
    highlights: ["Reportes centralizados", "Múltiples sucursales", "Roles", "Autenticación JWT", "Exportaciones"],
    badges: ["Web", "Estadías"],
  },
  appmedik: {
    eyebrow: "Proyecto integrador",
    desc: "Aplicación móvil pediátrica para citas, gestión médica, autenticación y flujo backend.",
    story: "AppMedik fue un proyecto móvil integrador enfocado en flujos médicos pediátricos. Trabajé con pantallas orientadas a citas, autenticación de usuarios, lógica backend, MongoDB y conceptos de despliegue cloud mientras aprendía cómo un cliente móvil se comunica con servicios y datos persistentes.",
    highlights: ["Citas", "Flujos médicos", "Autenticación", "MongoDB", "Backend cloud"],
    badges: ["App móvil"],
  },
  pokedex: {
    eyebrow: "Primera build de Pokémon",
    desc: "Pokédex retro para Android conectada a PokéAPI con búsqueda, estadísticas, evoluciones y exploración de Pokémon.",
    story: "Esta fue mi primera aplicación seria de Android basada en Pokémon antes de jpokedex2. Conectó una interfaz móvil de inspiración retro con datos de PokéAPI para búsqueda, estadísticas, evoluciones y exploración de Pokémon. El proyecto me ayudó a comprender consumo de APIs, solicitudes asíncronas, navegación y flujos de UI en Android.",
    highlights: ["PokéAPI", "Búsqueda", "Estadísticas", "Evoluciones", "UI retro"],
    badges: ["App móvil"],
  },
  smartparking: {
    eyebrow: "Simulación de estacionamiento en tiempo real",
    desc: "Sistema inteligente de simulación de estacionamiento en tiempo real con flujo probabilístico de vehículos, analítica y dashboards dinámicos de monitoreo.",
    story: "SmartParking es un simulador web de estacionamiento inteligente construido alrededor de un motor probabilístico de vehículos. El sistema simula entradas y salidas, actualiza la ocupación en tiempo real y almacena información histórica para analítica. El proyecto me ayudó a trabajar con dashboards dinámicos, sincronización frontend/backend y visualización de datos mediante una arquitectura modular.",
    highlights: ["Motor de simulación", "Ocupación en vivo", "Analítica", "Datos históricos", "Dashboard"],
  },
  crudandroid: {
    title: "CRUD de Usuarios Android",
    eyebrow: "Fundamentos de Android",
    desc: "Uno de mis primeros CRUD en Android, enfocado en gestión local de usuarios y fundamentos de SQLite.",
    story: "Este fue uno de mis primeros proyectos Android durante mi etapa de TSU. Me introdujo al desarrollo nativo en Android, persistencia local y la estructura detrás de flujos básicos de una aplicación. Aunque las capturas y el repositorio originales ya no están disponibles, el proyecto fue un paso importante para entender cómo las interfaces se conectan con datos persistentes.",
    highlights: ["Gestión de usuarios", "CRUD", "SQLite", "UI Android", "Persistencia local"],
    badges: ["App móvil"],
  },
  daq: {
    eyebrow: "Arduino + Cloud",
    desc: "Experimento temprano de monitoreo con Arduino + cloud para visualización de sensores y datos ambientales.",
    story: "DAQ Sensor Monitor fue uno de mis primeros experimentos combinando sensores físicos, Arduino y visualización de datos conectada a la nube. El objetivo era recopilar información ambiental desde hardware y exponerla mediante una interfaz de software en lugar de mantener los datos aislados en el dispositivo. Me introdujo a conceptos de telemetría, adquisición de sensores, comunicación hardware/software y visualización remota.",
    highlights: ["Adquisición de sensores", "Telemetría", "Arduino", "Datos cloud", "Monitoreo"],
  },
  zarape: {
    eyebrow: "API Backend",
    desc: "Proyecto temprano de API CRUD backend enfocado en flujos de restaurante y fundamentos REST.",
    story: "El Zarape fue uno de mis primeros proyectos enfocados principalmente en desarrollo backend. El sistema exploró flujos orientados a restaurante mediante una API CRUD, combinando lógica de aplicación en Java con persistencia MySQL y operaciones estilo REST. Me ayudó a comprender la estructura de endpoints, flujos de solicitud y respuesta, interacción con bases de datos y separación entre clientes frontend y servicios backend.",
    highlights: ["Endpoints REST", "Flujo de restaurante", "MySQL", "CRUD", "Arquitectura backend"],
  },
  portfolio: {
    eyebrow: "Marca personal",
    desc: "Este sitio personal, rediseñado como un portafolio de desarrollador cinematográfico, minimalista y premium.",
    story: "Este portafolio es donde combino software, diseño, movimiento, personalidad y dirección creativa en una experiencia que se siente como un producto. No voy a incluir aquí el repositorio completo… porque técnicamente ya estás dentro del portafolio.",
    highlights: ["Diseño responsivo", "Modo oscuro", "Motion", "Marca personal", "Arquitectura de componentes"],
    badges: ["Web", "Personal"],
  },
};

function localizeProject(project, spanish) {
  if (!spanish) return project;

  const translation = PROJECT_TRANSLATIONS_ES[project.id];
  if (!translation) return project;

  return {
    ...project,
    title: translation.title || project.title,
    eyebrow: translation.eyebrow || project.eyebrow,
    desc: translation.desc || project.desc,
    story: translation.story || project.story,
    highlights: translation.highlights || project.highlights,
    badges: project.badges?.map((badge, index) => ({
      ...badge,
      label: translation.badges?.[index] || badge.label,
    })),
    videos: project.videos?.map((video, index) => ({
      ...video,
      title: translation.videos?.[index] || video.title,
    })),
  };
}

/* =========================================================
   COLORS
========================================================= */

function getAccent(accent) {
  switch (accent) {
    case "red":
      return {
        hex: "#ef4444",
        text: "text-red-500",
        border: "border-red-500/40",
        bg: "bg-red-500/10",
        soft: "from-red-500/20",
        gradient:
          "from-[#210606] via-[#560b0b] to-[#991b1b]",
      };

    case "green":
      return {
        hex: "#22c55e",
        text: "text-green-500",
        border: "border-green-500/40",
        bg: "bg-green-500/10",
        soft: "from-green-500/20",
        gradient:
          "from-[#04160d] via-[#0b3a23] to-[#166534]",
      };

    case "forest":
      return {
        hex: "#008f4c",
        text: "text-[#008F4C]",
        border: "border-[#008F4C]/55",
        bg: "bg-[#008F4C]/12",
        soft: "from-[#008F4C]/28",
        gradient:
          "from-[#03150e] via-[#064e3b] to-[#008F4C]",
      };

    case "purple":
      return {
        hex: "#a855f7",
        text: "text-purple-500",
        border: "border-purple-500/40",
        bg: "bg-purple-500/10",
        soft: "from-purple-500/20",
        gradient:
          "from-[#0d0615] via-[#35105b] to-[#6b21a8]",
      };

    case "pink":
      return {
        hex: "#ec4899",
        text: "text-pink-500",
        border: "border-pink-500/40",
        bg: "bg-pink-500/10",
        soft: "from-pink-500/20",
        gradient:
          "from-[#210712] via-[#701a3f] to-[#db2777]",
      };

    case "yellow":
      return {
        hex: "#eab308",
        text: "text-yellow-500",
        border: "border-yellow-500/40",
        bg: "bg-yellow-500/10",
        soft: "from-yellow-500/20",
        gradient:
          "from-[#181102] via-[#713f12] to-[#ca8a04]",
      };

    case "orange":
      return {
        hex: "#f97316",
        text: "text-orange-500",
        border: "border-orange-500/40",
        bg: "bg-orange-500/10",
        soft: "from-orange-500/20",
        gradient:
          "from-[#180901] via-[#7c2d12] to-[#ea580c]",
      };

    case "android":
      return {
        hex: "#22c55e",
        text: "text-green-600",
        border: "border-green-600/40",
        bg: "bg-green-600/10",
        soft: "from-green-600/20",
        gradient:
          "from-[#03150b] via-[#14532d] to-[#16a34a]",
      };

    case "blue":
    default:
      return {
        hex: "#0171dc",
        text: "text-[#0171DC]",
        border: "border-[#0171DC]/40",
        bg: "bg-[#0171DC]/10",
        soft: "from-[#0171DC]/20",
        gradient:
          "from-[#03111f] via-[#0c4a6e] to-[#0171DC]",
      };
  }
}

/* =========================================================
   OUTSIDE PROJECT BADGES
========================================================= */

function getBadgeStyle(type) {
  switch (type) {
    case "web":
      return "border-sky-400/45 bg-sky-400/12 text-sky-500";

    case "mobile":
      return "border-pink-400/45 bg-pink-400/12 text-pink-500";

    case "iot":
      return "border-emerald-400/45 bg-emerald-400/12 text-emerald-500";

    case "backend":
      return "border-orange-400/45 bg-orange-400/12 text-orange-500";

    case "favorite":
      return "border-amber-400/50 bg-amber-400/15 text-amber-500";

    case "flagship":
      return "border-violet-400/45 bg-violet-400/12 text-violet-500";

    case "ecosystem":
      return "border-teal-400/45 bg-teal-400/12 text-teal-500";

    case "enterprise":
      return "border-emerald-400/45 bg-emerald-400/12 text-emerald-500";

    case "work":
      return "border-cyan-400/45 bg-cyan-400/12 text-cyan-500";

    case "personal":
      return "border-indigo-400/45 bg-indigo-400/12 text-indigo-500";

    default:
      return "border-base-300 bg-base-200/60 text-base-content/70";
  }
}

function ProjectBadges({
  badges = [],
  compact = false,
}) {
  if (!badges.length) {
    return null;
  }

  return (
    <div
      className={[
        "flex flex-wrap items-center",
        compact ? "gap-1.5" : "gap-2",
      ].join(" ")}
    >
      {badges.map((badge) => (
        <span
          key={`${badge.type}-${badge.label}`}
          className={[
            "inline-flex items-center",
            "rounded-full border",
            "font-black uppercase",
            "tracking-[0.12em]",
            "backdrop-blur-md",
            "shadow-sm",

            compact
              ? "px-2 py-1 text-[7px] sm:text-[8px]"
              : "px-3 py-1.5 text-[9px] md:text-[10px]",

            getBadgeStyle(
              badge.type
            ),
          ].join(" ")}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}

/* =========================================================
   SHARED UI
========================================================= */

function ThemeAction({
  children,
  href,
  onClick,
}) {
  const className = [
    "btn btn-outline btn-sm",
    "border-base-content",
    "text-base-content",
    "bg-transparent",
    "hover:bg-base-content",
    "hover:border-base-content",
    "hover:text-base-100",
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

function Tag({
  tool,
  accent,
}) {
  const a =
    getAccent(accent);

  return (
    <span
      className={[
        "badge badge-sm border",
        "text-[10px] md:text-xs",
        "font-bold",
        a.border,
        a.text,
        a.bg,
      ].join(" ")}
    >
      {tool}
    </span>
  );
}

function ProjectLogo({
  project,
  size = "md",
}) {
  const a =
    getAccent(project.accent);

  const scale =
    project.logoScale ?? 1;

  const sizeClass =
    size === "hero"
      ? "h-24 w-24 xl:h-28 xl:w-28 rounded-[1.8rem]"
      : size === "lg"
      ? "h-14 w-14 md:h-16 md:w-16 rounded-2xl"
      : "h-11 w-11 rounded-xl";

  return (
    <div
      className={[
        sizeClass,
        "shrink-0 overflow-hidden",
        "grid place-items-center",
        "border bg-base-100/95",
        "shadow-lg",
        a.border,
      ].join(" ")}
    >
      <img
        src={
          project.logo ||
          project.img
        }
        alt={`${project.title} logo`}
        className="h-full w-full object-contain"
        style={{
          padding:
            scale > 1
              ? "3px"
              : "7px",

          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}

function CarouselArrow({
  direction,
  onClick,
  accent,
  label,
}) {
  const a =
    getAccent(accent);

  const left =
    direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={[
        "btn btn-circle btn-sm",
        "absolute top-1/2 z-30",
        "-translate-y-1/2",
        left
          ? "left-3"
          : "right-3",
        "shadow-lg backdrop-blur-md",
        "transition-all duration-200",
        "hover:scale-110",
      ].join(" ")}
      style={{
        color: a.hex,

        borderColor:
          `${a.hex}80`,

        backgroundColor:
          "rgba(15,15,18,.82)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {left ? (
          <path d="m15 18-6-6 6-6" />
        ) : (
          <path d="m9 18 6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

/* =========================================================
   AUTO CAROUSEL
========================================================= */

function AutoCarousel({
  images = [],
  title,
  accent = "blue",
  height =
    "h-[260px] md:h-[360px]",
  fit = "contain",
  arrows = true,
  dots = true,
  interval = 3300,
  padding = true,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const cleanImages =
    images.filter(Boolean);

  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    setIndex(0);
  }, [title]);

  useEffect(() => {
    if (
      cleanImages.length <= 1
    ) {
      return undefined;
    }

    const timer =
      window.setInterval(
        () => {
          setIndex(
            (current) =>
              (current + 1) %
              cleanImages.length
          );
        },
        interval
      );

    return () =>
      window.clearInterval(
        timer
      );
  }, [
    cleanImages.length,
    interval,
  ]);

  if (!cleanImages.length) {
    return null;
  }

  const previous = () => {
    setIndex(
      (current) =>
        current === 0
          ? cleanImages.length -
            1
          : current - 1
    );
  };

  const next = () => {
    setIndex(
      (current) =>
        (current + 1) %
        cleanImages.length
    );
  };

  return (
    <div
      className={`relative overflow-hidden ${height}`}
    >
      {cleanImages.map(
        (
          img,
          imageIndex
        ) => (
          <img
            key={img}
            src={img}
            alt={`${title} ${
              imageIndex + 1
            }`}
            className={[
              "absolute inset-0",
              "h-full w-full",
              "transition-all duration-700",

              fit === "cover"
                ? "object-cover"
                : "object-contain",

              padding &&
              fit !== "cover"
                ? "p-3 sm:p-4"
                : "",

              imageIndex ===
              index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.015]",
            ].join(" ")}
          />
        )
      )}

      {arrows &&
        cleanImages.length >
          1 && (
          <>
            <CarouselArrow
              direction="left"
              onClick={
                previous
              }
              accent={accent}
              label={spanish ? "Imagen anterior" : "Previous image"}
            />

            <CarouselArrow
              direction="right"
              onClick={next}
              accent={accent}
              label={spanish ? "Imagen siguiente" : "Next image"}
            />
          </>
        )}

      {dots &&
        cleanImages.length >
          1 && (
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
            {cleanImages.map(
              (
                img,
                dotIndex
              ) => (
                <button
                  key={img}
                  type="button"
                  onClick={() =>
                    setIndex(
                      dotIndex
                    )
                  }
                  className={[
                    "h-1.5 rounded-full",
                    "bg-white",
                    "transition-all",
                    "shadow",

                    dotIndex ===
                    index
                      ? "w-6 opacity-100"
                      : "w-1.5 opacity-40",
                  ].join(" ")}
                  aria-label={`${spanish ? "Imagen" : "Image"} ${
                    dotIndex +
                    1
                  }`}
                />
              )
            )}
          </div>
        )}
    </div>
  );
}

/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({
  project,
  reverse = false,
  onOpen,
  mobile = false,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const a =
    getAccent(project.accent);

  const images = [
    project.img,
    ...(project.shots || []),
  ];

  /*
    DESKTOP BADGE POSITION:

    VOLTS + jpokedex2:
    content left / image right
    => badges left.

    Casa León:
    image left / content right
    => badges right.
  */

  const badgesLeft =
    project.id === "volts" ||
    project.id ===
      "jpokedex2";

  return (
    <article
      className={[
        "relative overflow-hidden",
        mobile
          ? "rounded-[1.8rem]"
          : "rounded-[2rem] md:rounded-[2.75rem]",
        "border bg-base-100/75",
        "backdrop-blur-xl shadow-sm",
        a.border,
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0",
          "bg-gradient-to-br",
          a.soft,
          "via-transparent to-transparent",
          "pointer-events-none",
        ].join(" ")}
      />

      {/* ===================================================
          BADGES EXTERIORES
      =================================================== */}

      <div
        className={[
          "absolute z-30",

          /*
            Mobile:
            arriba izquierda siempre.
          */
          "left-4 top-4",

          /*
            Desktop:
            VOLTS / jpokedex2 => izquierda.
            Casa León => derecha.
          */
          badgesLeft
            ? "md:left-6 md:right-auto md:top-6"
            : "md:left-auto md:right-6 md:top-6",
        ].join(" ")}
      >
        <ProjectBadges
          badges={
            project.badges
          }
          compact
        />
      </div>

      <div
        className={[
          "relative grid",
          mobile
            ? "gap-5 p-5 pt-[72px]"
            : "gap-8 lg:gap-10 p-5 pt-16 md:p-8 md:pt-16 lg:p-10",

          !mobile &&
            (project.id === "volts"
              ? "lg:grid-cols-[1.08fr_0.92fr] items-center"
              : "lg:grid-cols-2 items-center"),

          !mobile &&
          reverse
            ? "lg:[&>*:first-child]:order-2"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div>
          <p
            className={[
              "uppercase font-bold",
              a.text,

              mobile
                ? "text-[9px] tracking-[0.24em] mb-2"
                : project.id === "volts"
                ? "text-[10px] lg:text-[11px] xl:text-xs tracking-[0.22em] lg:tracking-[0.28em] xl:tracking-[0.32em] mb-3 leading-relaxed max-w-full break-words"
                : "text-xs tracking-[0.35em] mb-3",
            ].join(" ")}
          >
            {project.eyebrow}
          </p>

          <div
            className={[
              "flex items-center",
              mobile
                ? "gap-3 mb-3"
                : "gap-4 mb-4",
            ].join(" ")}
          >
            <ProjectLogo
              project={project}
              size={
                mobile
                  ? "md"
                  : "lg"
              }
            />

            <h3
              className={
                mobile
                  ? "text-2xl font-black tracking-tight leading-none"
                  : "text-3xl md:text-5xl font-black tracking-tight leading-none"
              }
            >
              {project.title}
            </h3>
          </div>

          <p
            className={[
              "opacity-75 leading-relaxed",
              mobile
                ? "text-xs mb-3 line-clamp-3"
                : "text-sm md:text-base mb-5",
            ].join(" ")}
          >
            {project.desc}
          </p>

          <div
            className={[
              "flex flex-wrap",
              mobile
                ? "gap-1.5 mb-4"
                : "gap-2 mb-6",
            ].join(" ")}
          >
            {project.tools
              .slice(
                0,
                mobile
                  ? 5
                  : project.tools
                      .length
              )
              .map(
                (tool) => (
                  <Tag
                    key={tool}
                    tool={tool}
                    accent={
                      project.accent
                    }
                  />
                )
              )}
          </div>

          <div className="flex flex-wrap gap-2">
            <ThemeAction
              onClick={() =>
                onOpen(project)
              }
            >
              {spanish ? "Ver caso de estudio" : "View case study"}
            </ThemeAction>

            {!mobile &&
              project.repo && (
                <ThemeAction
                  href={
                    project.repo
                  }
                >
                  Repo
                </ThemeAction>
              )}
          </div>
        </div>

        <div
          className={[
            "rounded-[1.5rem]",
            "border border-base-300",
            "bg-base-200/40",
            "overflow-hidden",

            mobile
              ? "order-first"
              : "",
          ].join(" ")}
        >
          <AutoCarousel
            images={images}
            title={
              project.title
            }
            accent={
              project.accent
            }
            height={
              mobile
                ? "h-[210px]"
                : "h-[260px] md:h-[360px]"
            }
            arrows={false}
            fit="contain"
          />
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MOBILE FEATURED CAROUSEL
   VOLTS / CASA LEÓN / jpokedex2

   - Smooth horizontal slide
   - Autoplay resets after every manual change
   - No abrupt remounting
========================================================= */

function MobileFeaturedCarousel({
  projects,
  onOpen,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const [index, setIndex] =
    useState(0);

  /*
    IMPORTANT:
    The timer depends on "index".

    This means every time the user:
    - clicks next
    - clicks previous
    - clicks a dot

    the current timer is destroyed and a NEW
    7 second timer begins.

    So it can no longer jump twice by accident.
  */
  useEffect(() => {
    if (projects.length <= 1) {
      return undefined;
    }

    const timer =
      window.setTimeout(() => {
        setIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            projects.length
        );
      }, 7000);

    return () =>
      window.clearTimeout(timer);
  }, [
    index,
    projects.length,
  ]);

  const previous = () => {
    setIndex(
      (currentIndex) =>
        currentIndex === 0
          ? projects.length - 1
          : currentIndex - 1
    );
  };

  const next = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        projects.length
    );
  };

  return (
    <div className="md:hidden">
      {/* =========================================
          CAROUSEL WINDOW
      ========================================= */}

      <div className="overflow-hidden">
        {/* =======================================
            TRACK

            All projects remain mounted.
            We move the whole track instead of
            replacing one card with another.
        ======================================= */}

        <div
          className={[
            "flex",
            "items-stretch",
            "transition-transform",
            "duration-700",
            "ease-[cubic-bezier(0.22,1,0.36,1)]",
            "will-change-transform",
          ].join(" ")}
          style={{
            transform: `translate3d(-${
              index * 100
            }%, 0, 0)`,
          }}
        >
          {projects.map(
            (project) => (
              <div
                key={project.id}
                className={[
                  "w-full",
                  "min-w-full",
                  "shrink-0",
                  "px-[1px]",
                ].join(" ")}
              >
                <FeaturedProject
                  project={project}
                  onOpen={onOpen}
                  mobile
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* =========================================
          CONTROLS
      ========================================= */}

      <div className="mt-4 flex items-center justify-center gap-4">
        {/* PREVIOUS */}

        <button
          type="button"
          onClick={previous}
          className={[
            "btn",
            "btn-circle",
            "btn-sm",
            "border-base-300",
            "bg-base-100/90",
            "text-base-content",
            "shadow-md",
            "backdrop-blur-md",
            "transition-all",
            "duration-200",
            "hover:scale-110",
            "hover:bg-base-200",
            "active:scale-95",
          ].join(" ")}
          aria-label={spanish ? "Proyecto destacado anterior" : "Previous featured project"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* DOTS */}

        <div className="flex items-center gap-2">
          {projects.map(
            (
              project,
              projectIndex
            ) => {
              const accent =
                getAccent(
                  project.accent
                );

              const active =
                projectIndex ===
                index;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() =>
                    setIndex(
                      projectIndex
                    )
                  }
                  aria-label={`${spanish ? "Mostrar" : "Show"} ${project.title}`}
                  className={[
                    "relative h-2",
                    "rounded-full",
                    "transition-all",
                    "duration-500",
                    "ease-out",

                    active
                      ? "w-8"
                      : "w-2 opacity-35",

                    "hover:opacity-100",
                  ].join(" ")}
                  style={{
                    backgroundColor:
                      accent.hex,
                  }}
                />
              );
            }
          )}
        </div>

        {/* NEXT */}

        <button
          type="button"
          onClick={next}
          className={[
            "btn",
            "btn-circle",
            "btn-sm",
            "border-base-300",
            "bg-base-100/90",
            "text-base-content",
            "shadow-md",
            "backdrop-blur-md",
            "transition-all",
            "duration-200",
            "hover:scale-110",
            "hover:bg-base-200",
            "active:scale-95",
          ].join(" ")}
          aria-label={spanish ? "Proyecto destacado siguiente" : "Next featured project"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* =========================================
          PROJECT POSITION
      ========================================= */}

      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="text-[9px] font-black uppercase tracking-[0.18em] opacity-35">
          {spanish ? "Destacado" : "Featured"}
        </span>

        <span className="text-[10px] font-bold opacity-50">
          {String(
            index + 1
          ).padStart(2, "0")}
          {" / "}
          {String(
            projects.length
          ).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   MORE PROJECT CARDS
========================================================= */

/* =========================================================
   MORE PROJECT CARDS
========================================================= */

function MoreProjects({
  projects,
  onOpen,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <div className="mt-14 md:mt-20">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
          {spanish ? "Archivo de Proyectos" : "Project Archive"}
        </p>

        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          {spanish
            ? "Proyectos que marcaron mi progreso"
            : "Builds that shaped my progress"}
        </h3>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70 mt-3">
          {spanish
            ? "Una línea del tiempo de proyectos reales, experimentos, sistemas escolares, ideas personales y colaboraciones."
            : "A timeline of real projects, experiments, school systems, personal ideas and collaborations."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 items-stretch">
        {projects.map((project) => {
          const a = getAccent(project.accent);

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onOpen(project)}
              className={[
                "group text-left relative",
                "rounded-[1.4rem] md:rounded-[1.75rem]",
                "border bg-base-100/75 backdrop-blur-xl overflow-hidden",
                "shadow-sm transition-all duration-300 hover:-translate-y-1",
                "h-full flex flex-col",
                a.border,
              ].join(" ")}
            >
              {/* badges */}
              <div className="absolute left-3 top-3 z-30 max-w-[calc(100%-24px)]">
                <ProjectBadges
                  badges={project.badges}
                  compact
                />
              </div>

              {/* visual OG */}
              <div className="relative aspect-[4/3] overflow-hidden grid place-items-center shrink-0 bg-base-200/50">
                {/* base rellena completa */}
                <div className="absolute inset-0 bg-base-200/50" />

                {/* gradiente OG, pero ahora sí rellena todo */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${a.hex}26 0%,
                      ${a.hex}12 38%,
                      rgba(15, 23, 42, 0.28) 68%,
                      rgba(15, 23, 42, 0.46) 100%
                    )`,
                  }}
                />

                <img
                  src={project.logo || project.img}
                  alt={project.title}
                  className={[
                    "relative z-10 h-full w-full object-contain",
                    "transition-transform duration-500 group-hover:scale-105",
                    project.id === "appmedik"
                      ? "p-3 scale-[1.15]"
                      : "p-6 md:p-8",
                  ].join(" ")}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                <span
                  className={[
                    "absolute bottom-3 left-3 rounded-full border bg-black/40 backdrop-blur px-2.5 py-1 text-[10px] font-bold",
                    a.border,
                    a.text,
                  ].join(" ")}
                >
                  {project.year}
                </span>
              </div>

              {/* content */}
              <div className="p-3 md:p-5 flex flex-1 flex-col">
                <p
                  className={[
                    "text-[9px] md:text-[10px] uppercase tracking-[0.22em] font-bold mb-2",
                    a.text,
                  ].join(" ")}
                >
                  {project.eyebrow}
                </p>

                <h4 className="font-extrabold text-sm md:text-lg leading-tight">
                  {project.title}
                </h4>

                <p className="text-xs md:text-sm opacity-70 mt-2 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="hidden md:flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <Tag
                      key={tool}
                      tool={tool}
                      accent={project.accent}
                    />
                  ))}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP BRAND PANEL
========================================================= */

function DesktopBrandPanel({
  project,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const a =
    getAccent(project.accent);

  return (
    <div
      className={[
        "relative hidden lg:flex",
        "h-full flex-col",
        "items-center",
        "justify-center",
        "overflow-hidden",
        "text-center",
        "bg-gradient-to-br",
        a.gradient,
      ].join(" ")}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
          backgroundSize:
            "42px 42px",
        }}
      />

      <span className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-bold text-white/70 backdrop-blur">
        {project.year}
      </span>

      <div className="relative z-10 flex flex-col items-center px-8">
        <ProjectLogo
          project={project}
          size="hero"
        />

        <p
          className={[
            "mt-7 max-w-[300px]",
            "text-[11px]",
            "xl:text-xs",
            "font-black uppercase",
            "tracking-[0.28em]",
            a.text,
          ].join(" ")}
        >
          {project.eyebrow}
        </p>

        <h3 className="mt-3 text-4xl xl:text-[46px] font-black text-white tracking-tight leading-none">
          {project.title}
        </h3>

        {project.archive && (
          <span className="mt-5 badge badge-outline border-white/30 text-white/70">
            {spanish ? "Proyecto archivado" : "Archived Build"}
          </span>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP PROJECT CAROUSEL
========================================================= */

function DesktopProjectCarousel({
  project,
}) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-base-300 bg-base-200/35">
      <AutoCarousel
        images={
          project.shots
        }
        title={`${project.title} screenshots`}
        accent={
          project.accent
        }
        height="h-full"
        fit="contain"
        arrows
        dots
        interval={3400}
        padding
      />
    </div>
  );
}

/* =========================================================
   DESKTOP PROJECT CONTENT
========================================================= */

function DesktopProjectContent({
  project,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const a =
    getAccent(project.accent);

  return (
    <div className="hidden lg:flex h-full min-h-0 flex-col p-6 xl:p-7 overflow-hidden">
      <div className="shrink-0 pr-8">
        <p
          className={[
            "text-[10px]",
            "uppercase",
            "tracking-[0.22em]",
            "font-black",
            a.text,
          ].join(" ")}
        >
          {spanish ? "Resumen del proyecto" : "Project overview"}
        </p>

        <p className="mt-2 text-[12px] xl:text-[13px] leading-relaxed opacity-80">
          {project.story}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tools.map(
            (tool) => (
              <Tag
                key={tool}
                tool={tool}
                accent={
                  project.accent
                }
              />
            )
          )}
        </div>

        {project.highlights
          ?.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.highlights.map(
              (item) => (
                <span
                  key={item}
                  className={[
                    "badge badge-sm",
                    "border",
                    "text-[10px]",
                    "font-bold",
                    a.border,
                    a.bg,
                    a.text,
                  ].join(" ")}
                >
                  {item}
                </span>
              )
            )}
          </div>
        )}
      </div>

      {project.shots
        ?.length > 0 && (
        <div className="mt-4 min-h-0 flex-1">
          <DesktopProjectCarousel
            project={
              project
            }
          />
        </div>
      )}

      {project.archive && (
        <div className="mt-4 min-h-0 flex-1 flex items-center">
          <div className="w-full rounded-2xl border border-base-300 bg-base-200/35 p-5">
            <p
              className={[
                "text-[10px]",
                "font-black uppercase",
                "tracking-[0.2em]",
                a.text,
              ].join(" ")}
            >
              {spanish ? "Archivo del proyecto" : "Project archive"}
            </p>

            <p className="mt-2 text-xs opacity-65 leading-relaxed">
              {spanish
                ? "Las capturas originales y los archivos del repositorio ya no están disponibles. Este proyecto sigue formando parte de mi trayectoria de desarrollo y representa las bases que después evolucionaron hacia sistemas más completos."
                : "Original screenshots and repository files are no longer available. This build remains part of my development timeline and represents the foundations that later evolved into more complete systems."}
            </p>
          </div>
        </div>
      )}

      <div className="mt-3 shrink-0 flex gap-2">
        {project.repo && (
          <ThemeAction
            href={
              project.repo
            }
          >
            Repo
          </ThemeAction>
        )}

        {project.live && (
          <ThemeAction
            href={
              project.live
            }
          >
            Live
          </ThemeAction>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE VISUAL
========================================================= */

function MobileVisual({
  project,
}) {
  const a =
    getAccent(project.accent);

  if (project.archive) {
    return (
      <div
        className={[
          "relative h-[205px]",
          "overflow-hidden",
          "bg-gradient-to-br",
          a.gradient,
        ].join(" ")}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
            backgroundSize:
              "34px 34px",
          }}
        />

        <span className="absolute bottom-3 right-4 z-20 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-bold text-white/75">
          {project.year}
        </span>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <ProjectLogo
            project={project}
            size="lg"
          />

          <p className="mt-3 text-[8px] font-black uppercase tracking-[0.2em] text-white/65">
            {project.eyebrow}
          </p>

          <h3 className="mt-1 text-xl font-black text-white">
            {project.title}
          </h3>
        </div>
      </div>
    );
  }

  const visualImages = [
    project.img,
    ...(project.shots || []),
  ];

  return (
    <div
      className={[
        "relative h-[235px]",
        "overflow-hidden",
        "bg-gradient-to-br",
        a.gradient,
      ].join(" ")}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
          backgroundSize:
            "34px 34px",
        }}
      />

      <div className="absolute left-4 top-4 z-30 flex items-center gap-2.5">
        <ProjectLogo
          project={project}
          size="md"
        />

        <div>
          <p className="text-[7px] font-black uppercase tracking-[0.17em] text-white/70">
            {project.eyebrow}
          </p>

          <h3 className="mt-0.5 text-base font-black text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <span className="absolute bottom-3 right-3 z-40 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[9px] font-bold text-white/80">
        {project.year}
      </span>

      <div className="absolute inset-x-3 bottom-7 top-[67px] overflow-hidden rounded-[1.25rem] border border-white/15 bg-black/20">
        <AutoCarousel
          images={
            visualImages
          }
          title={
            project.title
          }
          accent={
            project.accent
          }
          height="h-full"
          fit="contain"
          arrows
          dots
          padding
        />
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE CONTENT
========================================================= */

function MobileProjectContent({
  project,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const a =
    getAccent(project.accent);

  return (
    <div className="lg:hidden p-4">
      <p
        className={[
          "text-[9px]",
          "font-black uppercase",
          "tracking-[0.2em]",
          a.text,
        ].join(" ")}
      >
        {spanish ? "Resumen del proyecto" : "Project overview"}
      </p>

      <p className="mt-2 text-[11px] sm:text-xs opacity-75 leading-relaxed line-clamp-5">
        {project.story}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tools.map(
          (tool) => (
            <Tag
              key={tool}
              tool={tool}
              accent={
                project.accent
              }
            />
          )
        )}
      </div>

      {project.highlights
        ?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.highlights.map(
            (item) => (
              <span
                key={item}
                className={[
                  "badge badge-sm",
                  "border",
                  "text-[9px]",
                  "font-bold",
                  a.border,
                  a.bg,
                  a.text,
                ].join(" ")}
              >
                {item}
              </span>
            )
          )}
        </div>
      )}

      {(project.repo ||
        project.live) && (
        <div className="mt-3 flex gap-2">
          {project.repo && (
            <ThemeAction
              href={
                project.repo
              }
            >
              Repo
            </ThemeAction>
          )}

          {project.live && (
            <ThemeAction
              href={
                project.live
              }
            >
              Live
            </ThemeAction>
          )}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   VOLTS VIDEO CAROUSEL
========================================================= */

function VoltsVideoCarousel({
  videos,
}) {
  const [index, setIndex] =
    useState(0);

  const current =
    videos[index];

  const previous = () => {
    setIndex(
      (currentIndex) =>
        currentIndex === 0
          ? videos.length - 1
          : currentIndex - 1
    );
  };

  const next = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        videos.length
    );
  };

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-green-500/30 bg-black">
      <video
        key={current.src}
        src={current.src}
        autoPlay
        muted
        playsInline
        onEnded={next}
        className="h-full w-full object-contain"
      />

      <span className="absolute left-3 top-3 badge badge-neutral badge-sm">
        {current.title}
      </span>

      <CarouselArrow
        direction="left"
        onClick={previous}
        accent="green"
        label="Previous video"
      />

      <CarouselArrow
        direction="right"
        onClick={next}
        accent="green"
        label="Next video"
      />

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {videos.map(
          (
            video,
            dotIndex
          ) => (
            <button
              key={video.src}
              type="button"
              onClick={() =>
                setIndex(
                  dotIndex
                )
              }
              className={[
                "h-1.5",
                "rounded-full",
                "bg-white",

                dotIndex ===
                index
                  ? "w-6"
                  : "w-1.5 opacity-40",
              ].join(" ")}
            />
          )
        )}
      </div>
    </div>
  );
}

/* =========================================================
   VOLTS MOBILE
========================================================= */

function VoltsMobile({
  project,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const robot = project.videos?.[0];
  const app = project.videos?.[1];
  const web = project.videos?.[2];

  const media = [
    app && {
      type: "video",
      ...app,
    },

    robot && {
      type: "video",
      ...robot,
    },

    {
      type: "image",
      title: spanish ? "Póster VOLTS" : "VOLTS Poster",
      src:
        project.modalHero,
    },

    web && {
      type: "video",
      ...web,
    },

    {
      type: "image",
      title: spanish ? "Robot VOLTS" : "VOLTS Robot",
      src: project.img,
    },

    ...(project.shots || []).map(
      (
        src,
        index
      ) => ({
        type: "image",
        title: `${spanish ? "Robot VOLTS" : "VOLTS Robot"} ${
          index + 2
        }`,
        src,
      })
    ),
  ].filter(Boolean);

  const [index, setIndex] =
    useState(0);

  const current =
    media[index];

  const previous = () => {
    setIndex(
      (currentIndex) =>
        currentIndex === 0
          ? media.length - 1
          : currentIndex - 1
    );
  };

  const next = () => {
    setIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        media.length
    );
  };

  useEffect(() => {
    if (
      current.type !== "image"
    ) {
      return undefined;
    }

    const timer =
      window.setTimeout(
        next,
        3500
      );

    return () =>
      window.clearTimeout(
        timer
      );
  }, [index]);

  return (
    <div className="lg:hidden">
      <div className="relative overflow-hidden bg-[#08291d] px-4 pb-4 pt-4 text-white">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",
            backgroundSize:
              "34px 34px",
          }}
        />

        <div className="relative z-10 pr-9">
          <div className="flex items-center gap-3">
            <ProjectLogo
              project={project}
              size="lg"
            />

            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.18em] text-green-400">
                {
                  project.eyebrow
                }
              </p>

              <h3 className="mt-1 text-2xl font-black">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="mt-3 text-[11px] leading-relaxed text-white/75 line-clamp-4">
            {project.story}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools
              .slice(0, 7)
              .map(
                (tool) => (
                  <span
                    key={tool}
                    className="badge badge-sm border-green-400/30 bg-green-400/10 text-[9px] font-bold text-green-300"
                  >
                    {tool}
                  </span>
                )
              )}
          </div>
        </div>
      </div>

      <div className="bg-base-200 p-3">
        <div className="relative h-[275px] overflow-hidden rounded-[1.5rem] border border-base-300 bg-base-100">
          {current.type ===
          "video" ? (
            <video
              key={
                current.src
              }
              src={
                current.src
              }
              autoPlay
              muted
              playsInline
              onEnded={next}
              className="h-full w-full object-contain bg-black"
            />
          ) : (
            <img
              key={
                current.src
              }
              src={
                current.src
              }
              alt={
                current.title
              }
              className="h-full w-full object-contain p-2"
            />
          )}

          <span className="absolute left-3 top-3 badge badge-neutral badge-sm">
            {current.title}
          </span>

          <CarouselArrow
            direction="left"
            onClick={
              previous
            }
            accent="green"
            label={spanish ? "Media anterior" : "Previous media"}
          />

          <CarouselArrow
            direction="right"
            onClick={next}
            accent="green"
            label={spanish ? "Media siguiente" : "Next media"}
          />

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {media.map(
              (
                item,
                mediaIndex
              ) => (
                <button
                  key={`${item.src}-${mediaIndex}`}
                  type="button"
                  onClick={() =>
                    setIndex(
                      mediaIndex
                    )
                  }
                  className={[
                    "h-1.5",
                    "rounded-full",
                    "bg-white",

                    mediaIndex ===
                    index
                      ? "w-6"
                      : "w-1.5 opacity-40",
                  ].join(" ")}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   VOLTS DESKTOP
========================================================= */

function VoltsDesktop({
  project,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  const a =
    getAccent(project.accent);

  return (
    <div className="hidden lg:grid h-full grid-cols-[42%_58%]">
      <div className="relative overflow-hidden bg-[#08291d]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)",

            backgroundSize:
              "38px 38px",
          }}
        />

        <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
          <ProjectLogo
            project={project}
            size="lg"
          />

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-green-400">
              {project.eyebrow}
            </p>

            <h3 className="mt-1 text-2xl font-black text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <span className="absolute right-6 top-6 z-20 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-bold text-white/70">
          {project.year}
        </span>

        <img
          src={
            project.modalHero
          }
          alt="VOLTS poster"
          className="h-full w-full object-contain px-3 pb-4 pt-24"
        />
      </div>

      <div className="h-full min-h-0 flex flex-col p-6 xl:p-7">
        <div className="shrink-0">
          <p
            className={[
              "text-[10px]",
              "font-black uppercase",
              "tracking-[0.2em]",
              a.text,
            ].join(" ")}
          >
            {spanish ? "Resumen del proyecto" : "Project overview"}
          </p>

          <p className="mt-2 text-[12px] xl:text-[13px] opacity-75 leading-relaxed">
            {project.story}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools.map(
              (tool) => (
                <Tag
                  key={tool}
                  tool={tool}
                  accent={
                    project.accent
                  }
                />
              )
            )}
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.highlights.map(
              (item) => (
                <span
                  key={item}
                  className={[
                    "badge badge-sm",
                    "border",
                    "text-[10px]",
                    "font-bold",
                    a.border,
                    a.bg,
                    a.text,
                  ].join(" ")}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-4 min-h-0 flex-1">
          <VoltsVideoCarousel
            videos={
              project.videos
            }
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({
  project,
  onClose,
}) {
  const { language } = useLanguage();
  const spanish = language === "es";

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    const handleEscape = (
      event
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const isVolts =
    project.id === "volts";

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={[
          "relative w-full",
          "max-w-5xl",
          "overflow-hidden",
          "rounded-[1.75rem]",
          "lg:rounded-[2rem]",
          "border",
          "border-base-300",
          "bg-base-100",
          "shadow-2xl",
          "animate-modal-pop",
          "max-h-[94dvh]",
          "lg:h-[90dvh]",
        ].join(" ")}
        onClick={(
          event
        ) =>
          event.stopPropagation()
        }
      >
        <button
          type="button"
          onClick={onClose}
          className={[
            "btn btn-sm",
            "btn-circle",
            "btn-outline",
            "btn-error",
            "absolute",
            "right-3 top-3",
            "lg:right-4",
            "lg:top-4",
            "z-50",
            "bg-base-100/90",
            "backdrop-blur",
          ].join(" ")}
          aria-label={spanish ? "Cerrar modal" : "Close modal"}
        >
          ✕
        </button>

        {isVolts ? (
          <>
            <VoltsMobile
              project={project}
            />

            <VoltsDesktop
              project={project}
            />
          </>
        ) : (
          <>
            <div className="lg:hidden">
              <MobileVisual
                project={project}
              />

              <MobileProjectContent
                project={project}
              />
            </div>

            <div className="hidden lg:grid h-full grid-cols-[38%_62%] overflow-hidden">
              <DesktopBrandPanel
                project={project}
              />

              <DesktopProjectContent
                project={project}
              />
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

/* =========================================================
   MUSIC
========================================================= */

function MusicPage() {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-red-500 font-bold mb-3">
          {spanish ? "Música" : "Music"}
        </p>

        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          {spanish ? "Lado creativo" : "Creative side"}
        </h3>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70 mt-3">
          {spanish
            ? "Un espacio minimalista para beats e ideas fuera del código."
            : "A minimal space for beats and ideas outside code."}
        </p>
      </div>

      <div className="rounded-[2rem] md:rounded-[2.75rem] border border-base-300 bg-base-100/75 backdrop-blur-xl overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-[42%_1fr]">
          <div className="relative min-h-[280px] bg-base-200 overflow-hidden">
            <img
              src="/img/music/febdiss-cover.png"
              alt="febdiss cover"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="badge badge-outline border-[#0171DC] text-[#0171DC] bg-black/30">
                febdiss
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="text-xs opacity-60 mb-2">
              2026
            </div>

            <h4 className="text-3xl md:text-5xl font-black tracking-tight">
              febdiss
            </h4>

            <div className="mt-7 rounded-2xl border border-base-300 bg-base-200/40 p-4">
              <audio
                controls
                preload="metadata"
                className="w-full"
              >
                <source
                  src="/music/febdiss.mp3"
                  type="audio/mpeg"
                />

                {spanish
                  ? "Tu navegador no soporta audio."
                  : "Your browser does not support audio."}
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function WorkSection() {
  const { language } = useLanguage();
  const spanish = language === "es";

  const localizedProjects = useMemo(
    () => projects.map((project) => localizeProject(project, spanish)),
    [spanish]
  );

  const localizedMoreProjects = useMemo(
    () => moreProjects.map((project) => localizeProject(project, spanish)),
    [spanish]
  );

  const [
    activeTab,
    setActiveTab,
  ] = useState("dev");

  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);

  const [searchParams] =
    useSearchParams();

  useEffect(() => {
    const tab =
      searchParams.get("tab");

    if (
      tab === "music"
    ) {
      setActiveTab(
        "music"
      );
    }

    if (
      tab === "dev"
    ) {
      setActiveTab(
        "dev"
      );
    }
  }, [searchParams]);

  const featuredProjects =
    useMemo(
      () =>
        localizedProjects.filter(
          (project) =>
            project.featured
        ),
      [localizedProjects]
    );

  return (
    <Section>
      <div className="max-w-6xl mx-auto px-1 md:px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
            {spanish ? "Proyectos" : "Work"}
          </p>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            {spanish
              ? "Mis proyectos más recientes con identidad de producto."
              : "Most recent builds with product identity."}
          </h2>

          <p className="max-w-3xl mx-auto text-sm md:text-base opacity-70 mt-4 leading-relaxed">
            {spanish
              ? "Una selección de mis proyectos más nuevos y sólidos, seguida por los proyectos que marcaron mi progreso como desarrollador."
              : "A curated view of my newest and strongest builds first, followed by the projects that shaped my progress as a developer."}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-base-300 bg-base-100/75 backdrop-blur-xl p-1 shadow-sm">
            <button
              type="button"
              onClick={() =>
                setActiveTab(
                  "dev"
                )
              }
              className={[
                "px-5 md:px-7 py-3",
                "rounded-full",
                "text-sm font-bold",
                "transition-all",
                "border",

                activeTab ===
                "dev"
                  ? "bg-[#0171DC] border-[#0171DC] text-white"
                  : "border-transparent text-[#0171DC] bg-[#0171DC]/10",
              ].join(" ")}
            >
              {spanish ? "Desarrollo" : "Dev Work"}
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveTab(
                  "music"
                )
              }
              className={[
                "px-5 md:px-7 py-3",
                "rounded-full",
                "text-sm font-bold",
                "transition-all",
                "border",

                activeTab ===
                "music"
                  ? "bg-red-500 border-red-500 text-white"
                  : "border-transparent text-red-500 bg-red-500/10",
              ].join(" ")}
            >
              {spanish ? "Música" : "Music"}
            </button>
          </div>
        </div>

        {activeTab ===
        "dev" ? (
          <>
            {/* ===============================================
                MOBILE:
                THREE MAIN PROJECTS = ONE CAROUSEL
            =============================================== */}

            <MobileFeaturedCarousel
              projects={
                featuredProjects
              }
              onOpen={
                setSelectedProject
              }
            />

            {/* ===============================================
                TABLET + DESKTOP:
                NORMAL THREE FEATURED CARDS
            =============================================== */}

            <div className="hidden md:block space-y-6 md:space-y-8">
              {featuredProjects.map(
                (
                  project,
                  index
                ) => (
                  <FeaturedProject
                    key={
                      project.id
                    }
                    project={
                      project
                    }
                    reverse={
                      index %
                        2 !==
                      0
                    }
                    onOpen={
                      setSelectedProject
                    }
                  />
                )
              )}
            </div>

            <MoreProjects
              projects={localizedMoreProjects}
              onOpen={
                setSelectedProject
              }
            />
          </>
        ) : (
          <MusicPage />
        )}
      </div>

      <ProjectModal
        project={
          selectedProject
        }
        onClose={() =>
          setSelectedProject(
            null
          )
        }
      />
    </Section>
  );
}
