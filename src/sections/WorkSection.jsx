import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";

function Section({ children }) {
  return <section className="scroll-mt-24">{children}</section>;
}

const projects = [
  {
    id: "jpokedex2",
    title: "jpokedex2",
    eyebrow: "Most Recent Mobile Experience",
    year: "2026",
    accent: "red",
    logo: "/img/pokedexapp.png",
    img: "/img/work/jpokedex2-hero.png",
    shots: [
      "/img/work/jpokedex2-1.png",
      "/img/work/jpokedex2-2.png",
      "/img/work/jpokedex2-3.png",
    ],
    desc: "A rebuilt Pokédex experience focused on cinematic mobile UI, nostalgia, HD-2D inspiration, Time Machine modes, animations, and a more premium app feeling.",
    story:
      "This project takes the original Pokédex idea and turns it into a more ambitious mobile product: cleaner hierarchy, stronger visual identity, richer motion, better detail screens, and a nostalgic interface that still feels modern.",
    tools: ["React Native", "PokéAPI", "Animations", "Mobile UI", "HD-2D"],
    repo: "https://github.com/jeezly",
    featured: true,
  },
  {
    id: "casa-leon",
    title: "Casa León",
    eyebrow: "Most Recent Enterprise System",
    year: "2026",
    accent: "green",
    logo: "/img/work/casa-leon-logo.png",
    img: "/img/work/casa-leon-hero.png",
    shots: [
      "/img/work/casa-leon-1.png",
      "/img/work/casa-leon-2.png",
      "/img/work/casa-leon-3.png",
    ],
    desc: "Integrated ERP + e-commerce system for a leather goods factory in León, Guanajuato. Built around production, inventory, purchases, sales, POS, roles, auditability, and scalable architecture.",
    story:
      "Casa León is designed as a real operational system, not a generic dashboard. The goal is to connect factory workflows with a client-facing store while keeping data structured, traceable, and useful for daily decisions.",
    tools: ["MongoDB", "RBAC", "BOM", "Inventory", "3NF", "Cloud Architecture"],
    repo: "https://github.com/IDGS-801-23001542/CasaLeon",
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
    desc: "Modern landing page for my brother’s project, with features, pricing, FAQs, responsive layout, and polished presentation.",
    story:
      "Instaxia is more connected to my brother’s project, but I helped shape the landing experience: clean sections, responsive layout, feature communication, pricing, FAQs, and a modern visual direction.",
    tools: ["React", "Tailwind", "DaisyUI"],
    live: "https://instaxia.com",
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
    desc: "Web platform to centralize vehicle verification reports across multiple branches.",
    story:
      "This was my internship project and one of my strongest real systems. It focused on centralizing reports, roles, exports, authentication, and making operational data easier to manage.",
    tools: ["React", "Node.js", "MySQL", "JWT", "Tailwind"],
    repo: "https://github.com/jeezly/Centralizaciondereportesautomotriz",
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
    desc: "Pediatric mobile app for appointments, medical management, authentication, and backend flow.",
    story:
      "AppMedik was an integrative project where I worked with mobile screens, medical appointment flows, authentication, backend logic, MongoDB, and cloud deployment ideas.",
    tools: ["Android Studio", "Node.js", "MongoDB", "AWS"],
    repo: "https://github.com/jeezly/AppMedik",
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
    desc: "Retro Android Pokédex connected to the PokéAPI with search, stats, evolutions, and Pokémon exploration.",
    story:
      "This was my first serious Pokémon-based Android application before jpokedex2. The project helped me understand API consumption, asynchronous requests, Android UI flows, navigation, and how to build a complete themed experience around something I genuinely enjoy.",
    tools: ["Android Studio", "JavaScript", "PokéAPI"],
    repo: "https://github.com/jeezly/Pokedex-8-bits-Android-",
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
    desc: "Real-time intelligent parking simulation system with probabilistic vehicle flow, analytics, and dynamic monitoring dashboards.",
    story:
      "SmartParking is a web-based intelligent parking simulator designed to emulate real-time parking activity through a probabilistic vehicle engine. The system automatically simulates vehicle entries and exits, updates parking occupancy, and generates historical data for analytics and statistics.\n\nThe project was built with Node.js, Express, MongoDB, React, Vite, Axios, and Recharts, focusing on real-time visualization, modular backend architecture, and interactive dashboard monitoring.",
    tools: ["Node.js", "MongoDB", "React", "SchoolProject", "Recharts"],
    repo: "https://github.com/jeezly/smartParking",
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
    desc: "One of my first Android CRUD builds focused on local user management and SQLite fundamentals.",
    story:
      "This was one of my earliest Android projects during my TSU stage. I no longer keep screenshots or repositories for it, but I can rebuild something much stronger now thanks to the experience gained over the years.",
    tools: ["Android Studio", "SQLite"],
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
    desc: "Early Arduino + cloud monitoring experiment for sensor visualization and environmental data.",
    story:
      "This project was part of my early experimentation with Arduino, sensors, and cloud-connected monitoring systems during my TSU stage. I no longer keep screenshots or repositories, but today I understand these architectures much better and could build a far more complete version.",
    tools: ["Arduino", "NetBeans", "Dweet.io"],
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
    desc: "Early backend CRUD API project focused on restaurant workflows and REST fundamentals.",
    story:
      "El Zarape was one of my first backend-focused CRUD APIs during my TSU years. I no longer have screenshots or repositories available, but the project helped me understand REST architecture, endpoints, and backend structure foundations.",
    tools: ["Java", "MySQL", "Tomcat", "NetBeans"],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    eyebrow: "Personal Brand",
    year: "2026",
    accent: "blue",
    logo: "/img/work/portfolio-logo.png",
    img: "/img/work/portfolio-1.png",
    shots: ["/img/work/portfolio-hero.png"],
    desc: "This personal site, redesigned into a cinematic, minimal, premium developer portfolio.",
    story:
      "This portfolio is where I combine software, design, motion, personality, and creative direction into a single product-like experience. I won't include extra screenshots or the full repository here… because technically, you're already inside the portfolio.",
    tools: ["React", "Vite", "Tailwind", "DaisyUI"],
  },
];

const mobileProjectIds = ["jpokedex2", "pokedex", "appmedik"];

function isMobileShot(project, img) {
  if (!project || !img) return false;
  if (mobileProjectIds.includes(project.id)) return true;
  return project.id === "instaxia" && img.includes("instaxia-3");
}

function getAccent(accent) {
  switch (accent) {
    case "red":
      return {
        text: "text-red-500",
        border: "border-red-500/40",
        bg: "bg-red-500/10",
        soft: "from-red-500/20",
        button: "border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
      };
    case "green":
      return {
        text: "text-green-500",
        border: "border-green-500/40",
        bg: "bg-green-500/10",
        soft: "from-green-500/20",
        button:
          "border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
      };
    case "purple":
      return {
        text: "text-purple-500",
        border: "border-purple-500/40",
        bg: "bg-purple-500/10",
        soft: "from-purple-500/20",
        button:
          "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
      };
    case "pink":
      return {
        text: "text-pink-500",
        border: "border-pink-500/40",
        bg: "bg-pink-500/10",
        soft: "from-pink-500/20",
        button:
          "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
      };
    case "yellow":
      return {
        text: "text-yellow-500",
        border: "border-yellow-500/40",
        bg: "bg-yellow-500/10",
        soft: "from-yellow-500/20",
        button:
          "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
      };
    case "orange":
      return {
        text: "text-orange-500",
        border: "border-orange-500/40",
        bg: "bg-orange-500/10",
        soft: "from-orange-500/20",
        button:
          "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
      };
    case "android":
      return {
        text: "text-green-600",
        border: "border-green-600/40",
        bg: "bg-green-600/10",
        soft: "from-green-600/20",
        button:
          "border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
      };
    case "blue":
    default:
      return {
        text: "text-[#0171DC]",
        border: "border-[#0171DC]/40",
        bg: "bg-[#0171DC]/10",
        soft: "from-[#0171DC]/20",
        button:
          "border-[#0171DC] text-[#0171DC] hover:bg-[#0171DC] hover:text-white",
      };
  }
}

function EmptyVisual({ project, height }) {
  const a = getAccent(project.accent);

  return (
    <div className={`relative overflow-hidden bg-base-200 ${height}`}>
      <div
        className={[
          "absolute inset-0 bg-gradient-to-br",
          a.soft,
          "via-transparent to-transparent",
        ].join(" ")}
      />

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} className="border border-base-content/40" />
          ))}
        </div>
      </div>

      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-base-content/10" />
      <div className="absolute -left-10 bottom-4 h-24 w-24 rounded-full border border-base-content/10" />

      <div className="relative h-full flex flex-col justify-between p-4 md:p-5">
        <div className="flex items-center justify-between gap-3">
          <ProjectLogo project={project} />

          <span
            className={[
              "inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold bg-base-100/55 backdrop-blur",
              a.border,
              a.text,
            ].join(" ")}
          >
            Archived build
          </span>
        </div>

        <div className="my-4 grid place-items-center">
          <div className="relative">
            <div
              className={[
                "absolute inset-0 rounded-3xl blur-2xl scale-110",
                a.bg,
              ].join(" ")}
            />

            <div
              className={[
                "relative h-24 w-24 md:h-28 md:w-28 rounded-3xl border bg-base-100/70 backdrop-blur-xl grid place-items-center",
                a.border,
              ].join(" ")}
            >
              <img
                src={project.logo || project.img}
                alt={`${project.title} logo`}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div>
          <p
            className={[
              "text-[10px] md:text-xs uppercase tracking-[0.22em] md:tracking-[0.28em] font-black",
              a.text,
            ].join(" ")}
          >
            No screenshots / no repo
          </p>

          <p className="mt-2 text-xs md:text-sm opacity-70 leading-relaxed">
            Early TSU project. The original media is not available anymore, but
            I can rebuild it much better today.
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-base-300 bg-base-100/60 px-2 py-0.5 text-[10px] font-bold opacity-75"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ img, title, number }) {
  return (
    <div className="relative z-10">
      <div className="absolute inset-0 rounded-[2.75rem] bg-black/40 blur-2xl scale-95" />

      <div className="relative rounded-[2.75rem] border border-white/10 bg-black p-2 shadow-2xl">
        <div className="absolute top-3 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/80" />

        <div className="rounded-[2.2rem] overflow-hidden bg-black">
          <img
            src={img}
            alt={`${title} image ${number}`}
            className="w-[178px] md:w-[236px] max-h-[78vh] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

function AutoCarousel({
  images = [],
  title,
  height = "h-[260px] md:h-[360px]",
  project = null,
}) {
  const cleanImages = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (cleanImages.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % cleanImages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [cleanImages.length]);

  if (cleanImages.length === 0) {
    if (project) return <EmptyVisual project={project} height={height} />;
    return null;
  }

  const currentImage = cleanImages[index];
  const currentIsMobile = isMobileShot(project, currentImage);

  return (
    <div className={`relative overflow-hidden bg-base-200 ${height}`}>
      {currentIsMobile && (
        <img
          src={currentImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-125 blur-3xl opacity-25"
        />
      )}

      {cleanImages.map((img, i) => {
        const mobile = isMobileShot(project, img);

        return (
          <div
            key={img}
            className={[
              "absolute inset-0 transition-opacity duration-700",
              mobile ? "grid place-items-center" : "",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {mobile ? (
              <PhoneFrame img={img} title={title} number={i + 1} />
            ) : (
              <img
                src={img}
                alt={`${title} image ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        );
      })}

      {cleanImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {cleanImages.map((img, i) => (
            <span
              key={img}
              className={[
                "h-1.5 rounded-full transition-all bg-white/80",
                i === index ? "w-5" : "w-1.5 opacity-50",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectLogo({ project, size = "md" }) {
  const a = getAccent(project.accent);
  const sizes =
    size === "lg"
      ? "h-14 w-14 md:h-16 md:w-16 rounded-2xl"
      : "h-11 w-11 md:h-12 md:w-12 rounded-xl";

  return (
    <div
      className={[
        sizes,
        "shrink-0 border bg-base-100/85 backdrop-blur overflow-hidden grid place-items-center",
        a.border,
      ].join(" ")}
    >
      <img
        src={project.logo || project.img}
        alt={`${project.title} logo`}
        className="h-full w-full object-contain p-1.5"
        loading="lazy"
      />
    </div>
  );
}

function Tag({ tool, accent }) {
  const a = getAccent(accent);

  return (
    <span
      className={[
        "px-3 py-1 rounded-full border text-xs font-bold",
        a.border,
        a.text,
        a.bg,
      ].join(" ")}
    >
      {tool}
    </span>
  );
}

function FeaturedProject({ project, reverse = false, onOpen }) {
  const a = getAccent(project.accent);
  const carouselImages = [project.img, ...(project.shots || [])];

  return (
    <article
      className={[
        "relative overflow-hidden rounded-[2rem] md:rounded-[2.75rem]",
        "border bg-base-100/75 backdrop-blur-xl shadow-sm",
        a.border,
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-gradient-to-br",
          a.soft,
          "via-transparent to-transparent pointer-events-none",
        ].join(" ")}
      />

      <div
        className={[
          "relative grid gap-8 lg:gap-10 p-5 md:p-8 lg:p-10",
          "lg:grid-cols-2 items-center",
          reverse ? "lg:[&>*:first-child]:order-2" : "",
        ].join(" ")}
      >
        <div>
          <p
            className={[
              "text-xs uppercase tracking-[0.35em] font-bold mb-3",
              a.text,
            ].join(" ")}
          >
            {project.eyebrow}
          </p>

          <div className="flex items-center gap-4 mb-4">
            <ProjectLogo project={project} size="lg" />

            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
              {project.title}
            </h3>
          </div>

          <p className="text-sm md:text-base opacity-75 leading-relaxed mb-5">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool) => (
              <Tag key={tool} tool={tool} accent={project.accent} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className={["btn btn-outline btn-sm btn-cv-blue", a.button].join(" ")}
            >
              View case study
            </button>

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm btn-cv-red"
              >
                Repo
              </a>
            )}
          </div>
        </div>

        <div className="rounded-[1.75rem] md:rounded-[2.25rem] border border-base-300 bg-base-200/40 overflow-hidden">
          <AutoCarousel
            images={carouselImages}
            title={project.title}
            project={project}
          />
        </div>
      </div>
    </article>
  );
}

function MoreProjects({ onOpen }) {
  return (
    <div className="mt-14 md:mt-20">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
          Project Archive
        </p>

        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Builds that shaped my progress
        </h3>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70 mt-3">
          A timeline of real projects, experiments, school systems, personal ideas,
          and collaborations that helped me grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {moreProjects.map((project) => {
          const a = getAccent(project.accent);

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onOpen(project)}
              className={[
                "group text-left rounded-[1.4rem] md:rounded-[1.75rem]",
                "border bg-base-100/75 backdrop-blur-xl overflow-hidden shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:bg-base-100",
                a.border,
              ].join(" ")}
            >
              <div className="relative aspect-[4/3] bg-base-200/50 overflow-hidden grid place-items-center">
                <img
                  src={project.logo || project.img}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
                  <span
                    className={[
                      "inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold bg-black/35 backdrop-blur",
                      a.border,
                      a.text,
                    ].join(" ")}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-3 md:p-5">
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

                <div className="hidden md:flex flex-wrap gap-2 mt-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <Tag key={tool} tool={tool} accent={project.accent} />
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

function MusicPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-red-500 font-bold mb-3">
          Music
        </p>

        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Creative side
        </h3>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70 mt-3">
          A minimal space for beats and ideas outside code.
        </p>
      </div>

      <div className="rounded-[2rem] md:rounded-[2.75rem] border border-base-300 bg-base-100/75 backdrop-blur-xl overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-[42%_1fr]">
          <div className="relative min-h-[280px] bg-base-200 overflow-hidden">
            <img
              src="/img/music/febdiss-cover.png"
              alt="febdiss cover"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <span className="badge badge-outline border-[#0171DC] text-[#0171DC] bg-black/30">
                febdiss
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="text-xs opacity-60 mb-2">2026</div>

            <h4 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
              febdiss
            </h4>

            

            <div className="mt-7 rounded-2xl border border-base-300 bg-base-200/40 p-4">
              <audio controls preload="metadata" className="w-full">
                <source src="/music/febdiss.mp3" type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const a = getAccent(project.accent);
  const carouselImages = [project.img, ...(project.shots || [])];

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center overscroll-contain"
      onClick={onClose}
      onTouchMove={(e) => e.preventDefault()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90dvh] overflow-hidden rounded-[2rem] bg-base-100 border border-base-300 shadow-2xl animate-modal-pop overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="btn btn-sm btn-circle btn-outline btn-error absolute right-4 top-4 z-20"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-[42%_1fr] max-h-[90dvh] overflow-y-auto overscroll-contain">
          <div className="relative min-h-[280px] lg:min-h-[90dvh] bg-base-200">
            <AutoCarousel
              images={carouselImages}
              title={project.title}
              project={project}
              height="h-full min-h-[280px] lg:min-h-[90dvh]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-16">
              <div className="flex items-center gap-3 mb-3">
                <ProjectLogo project={project} />
                <div>
                  <p className={["text-xs font-bold", a.text].join(" ")}>
                    {project.year}
                  </p>
                  <p className="text-white/70 text-xs">{project.eyebrow}</p>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white leading-none">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              {project.story}
            </p>

            <div className="mt-7">
              <h4 className="font-extrabold text-lg mb-3">Project focus</h4>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Tag key={tool} tool={tool} accent={project.accent} />
                ))}
              </div>
            </div>

            {project.shots?.length > 0 && (
              <div className="mt-7">
                <h4 className="font-extrabold text-lg mb-3">Screenshots</h4>

                <div className="rounded-2xl border border-base-300 bg-base-200/40 overflow-hidden">
                  <AutoCarousel
                    images={project.shots}
                    title={`${project.title} screenshots`}
                    project={project}
                    height="h-56 md:h-72"
                  />
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={["btn btn-outline btn-sm", a.button].join(" ")}
                >
                  Repo
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={["btn btn-outline btn-sm", a.button].join(" ")}
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState("dev");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "music") setActiveTab("music");
    if (tab === "dev") setActiveTab("dev");
  }, [searchParams]);

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    []
  );

  return (
    <Section>
      <div className="max-w-6xl mx-auto px-1 md:px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
            Work
          </p>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Most recent builds with product identity.
          </h2>

          <p className="max-w-3xl mx-auto text-sm md:text-base opacity-70 mt-4 leading-relaxed">
            A curated view of my newest and strongest builds first, followed by the
            projects that shaped my progress as a developer.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full border border-base-300 bg-base-100/75 backdrop-blur-xl p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab("dev")}
              className={[
                "px-5 md:px-7 py-3 rounded-full text-sm font-bold transition-all border",
                activeTab === "dev"
                  ? "bg-[#0171DC] border-[#0171DC] text-white shadow-sm"
                  : "border-transparent text-[#0171DC] bg-[#0171DC]/10 hover:bg-[#0171DC]/15",
              ].join(" ")}
            >
              Dev Work
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("music")}
              className={[
                "px-5 md:px-7 py-3 rounded-full text-sm font-bold transition-all border",
                activeTab === "music"
                  ? "bg-red-500 border-red-500 text-white shadow-sm"
                  : "border-transparent text-red-500 bg-red-500/10 hover:bg-red-500/15",
              ].join(" ")}
            >
              Music
            </button>
          </div>
        </div>

        {activeTab === "dev" ? (
          <>
            <div className="space-y-6 md:space-y-8">
              {featuredProjects.map((project, index) => (
                <FeaturedProject
                  key={project.id}
                  project={project}
                  reverse={index % 2 !== 0}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>

            <MoreProjects onOpen={setSelectedProject} />
          </>
        ) : (
          <MusicPage />
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}