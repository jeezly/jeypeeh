import { useEffect, useRef, useState } from "react";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const iconClass = "h-7 w-7 md:h-8 md:w-8";

const BulbIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M9 18h6" />
    <path {...stroke} d="M10 22h4" />
    <path {...stroke} d="M8 14a6 6 0 118 0c-.9.8-1.4 1.8-1.6 3H9.6C9.4 15.8 8.9 14.8 8 14z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M8 9l-4 3 4 3" />
    <path {...stroke} d="M16 9l4 3-4 3" />
    <path {...stroke} d="M13 5l-2 14" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <rect {...stroke} x="7" y="2" width="10" height="20" rx="2.5" />
    <path {...stroke} d="M11 18h2" />
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M12 3a9 9 0 100 18 3 3 0 003-3 2 2 0 012-2h1a3 3 0 000-6h-1a2 2 0 01-2-2 3 3 0 00-3-3z" />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="10" cy="15" r="1" fill="currentColor" />
    <circle cx="13" cy="8.5" r="1" fill="currentColor" />
  </svg>
);

const PlugIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M9 7V3" />
    <path {...stroke} d="M15 7V3" />
    <path {...stroke} d="M7 7h10v4a5 5 0 01-10 0V7z" />
    <path {...stroke} d="M12 16v5" />
  </svg>
);

const DeployIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <rect {...stroke} x="4" y="4" width="16" height="6" rx="2" />
    <rect {...stroke} x="4" y="14" width="16" height="6" rx="2" />
    <path {...stroke} d="M8 7h.01M8 17h.01M12 10v4" />
    <path {...stroke} d="M10 12h4" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M9 4a3 3 0 00-3 3v1a3 3 0 000 6v1a3 3 0 003 3" />
    <path {...stroke} d="M15 4a3 3 0 013 3v1a3 3 0 010 6v1a3 3 0 01-3 3" />
    <path {...stroke} d="M9 4v16M15 4v16M9 9h6M9 14h6" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M12 3l2.3 5.7L20 11l-5.7 2.3L12 19l-2.3-5.7L4 11l5.7-2.3L12 3z" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <circle {...stroke} cx="12" cy="7" r="3" />
    <circle {...stroke} cx="5.5" cy="10" r="2.5" />
    <circle {...stroke} cx="18.5" cy="10" r="2.5" />
    <path {...stroke} d="M5 20a7 7 0 0114 0" />
    <path {...stroke} d="M2 19a5 5 0 017-4" />
    <path {...stroke} d="M22 19a5 5 0 00-7-4" />
  </svg>
);

const SmileIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <circle {...stroke} cx="12" cy="12" r="9" />
    <path {...stroke} d="M8.5 10h.01M15.5 10h.01" />
    <path {...stroke} d="M8 15c1 1.4 2.3 2 4 2s3-.6 4-2" />
  </svg>
);

function ServiceTags({ tags, border, color }) {
  const sortedTags = [...tags].sort((a, b) => a.length - b.length);

  const topTags = sortedTags.slice(0, 2);
  const bottomTag = sortedTags[2];

  const tagClass = [
    "inline-flex items-center justify-center",
    "px-2 py-1 rounded-full border",
    "text-[9px] md:text-xs font-bold",
    "whitespace-nowrap",
    border,
    color,
  ].join(" ");

  return (
    <div className="mt-4 flex flex-col items-center gap-1.5">
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {topTags.map((tag) => (
          <span key={tag} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>

      {bottomTag && (
        <div className="flex justify-center">
          <span className={tagClass}>
            {bottomTag}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const services = [
    {
      title: "Idea Factory",
      subtitle: "From raw idea to clear MVP.",
      desc: "I turn concepts into simple flows, roadmaps, and testable first versions.",
      Icon: BulbIcon,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-400/70",
      tags: ["Research", "Roadmap", "Prototype"],
    },
    {
      title: "Full-Stack Software",
      subtitle: "Web apps with real logic.",
      desc: "Modern interfaces, APIs, authentication, database flows, and deployment-ready features.",
      Icon: CodeIcon,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-400/70",
      tags: ["React", "Node", "APIs"],
    },
    {
      title: "Android Apps",
      subtitle: "Mobile prototypes and app flows.",
      desc: "Android-first interfaces, API consumption, local data, and app concepts.",
      Icon: PhoneIcon,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-400/70",
      tags: ["Android", "Kotlin", "Mobile"],
    },
    {
      title: "UI/UX & Design",
      subtitle: "Clean, usable, responsive screens.",
      desc: "Minimal layouts, typography, design systems, and interfaces without visual clutter.",
      Icon: DesignIcon,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-400/70",
      tags: ["Figma", "Tailwind", "UX"],
    },
    {
      title: "Integrations",
      subtitle: "Connecting platforms and services.",
      desc: "Payment flows, auth, webhooks, APIs, file uploads, messages, and automation logic.",
      Icon: PlugIcon,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/70",
      tags: ["Stripe", "Twilio", "Cloud"],
    },
    {
      title: "Deploy & DevOps",
      subtitle: "Getting projects online cleanly.",
      desc: "Environment variables, hosting, repositories, database setup, and lightweight delivery.",
      Icon: DeployIcon,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-400/70",
      tags: ["Vercel", "Railway", "Git"],
    },
    {
      title: "Creative Strategy",
      subtitle: "Direction before execution.",
      desc: "I help shape the voice, structure, and visual direction of a project before building.",
      Icon: BrainIcon,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-400/70",
      tags: ["Position", "Story", "Ideas"],
    },
    {
      title: "Brand Development",
      subtitle: "Identity that feels intentional.",
      desc: "Basic identity systems, visual consistency, naming ideas, and brand presentation.",
      Icon: StarIcon,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-400/70",
      tags: ["Logo", "Guides", "Visuals"],
    },
    {
      title: "Collaboration",
      subtitle: "Building with people.",
      desc: "Team coordination, feedback loops, planning, and communication during the project.",
      Icon: GroupIcon,
      color: "text-lime-500",
      bg: "bg-lime-500/10",
      border: "border-lime-400/70",
      tags: ["Team", "Feedback", "Plan"],
    },
    {
      title: "FUN",
      subtitle: "Projects need personality.",
      desc: "I like making things feel alive, memorable, and enjoyable without losing usability.",
      Icon: SmileIcon,
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-400/70",
      tags: ["Energy", "Creative", "Human"],
      centerDesktop: true,
    },
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
          Services
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          What I can build with you
        </h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70">
          Focused services for turning ideas into polished, usable digital products.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {services.map((service, index) => (
          <article
            key={service.title}
            style={{ transitionDelay: visible ? `${index * 45}ms` : "0ms" }}
            className={[
              "group rounded-[1.6rem] md:rounded-[2rem] border border-base-300 bg-base-100/75 backdrop-blur-xl",
              "p-4 md:p-6 shadow-sm transition-all duration-500",
              "hover:-translate-y-1 hover:border-[#0171DC]/40 hover:bg-base-100",
              service.centerDesktop ? "lg:col-start-2" : "",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            <div
              className={[
                "h-12 w-12 md:h-14 md:w-14 rounded-2xl flex items-center justify-center",
                "border border-base-300 mb-4",
                service.bg,
                service.color,
              ].join(" ")}
            >
              <service.Icon />
            </div>

            <h3 className="text-sm md:text-xl font-extrabold leading-tight">
              {service.title}
            </h3>

            <p className="text-[11px] md:text-sm text-base-content/65 font-semibold mt-1 leading-tight">
              {service.subtitle}
            </p>

            <p className="text-xs md:text-sm opacity-75 mt-3 leading-relaxed">
              {service.desc}
            </p>

            <ServiceTags
              tags={service.tags}
              border={service.border}
              color={service.color}
            />
          </article>
        ))}
      </div>
    </section>
  );
}