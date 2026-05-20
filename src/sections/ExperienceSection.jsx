import { useState } from "react";
import { createPortal } from "react-dom";

function Section({ title, children }) {
  return (
    <section className="scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold text-center">{title}</h2>
      {children}
    </section>
  );
}

const EXPERIENCE_DATA = [
  {
    id: 1,
    year: "2023",
    title: "Learning Foundations",
    subtitle: "Started my software development journey",
    color: "blue",
    image: "/img/experience/experience-learning.png",
    description:
      "This was the stage where I started learning programming, databases, Android development, APIs, and UI fundamentals. Most of my early projects were focused on experimentation and understanding how systems connect together.",
    highlights: [
      "Built first Android applications",
      "Learned CRUD operations and local databases",
      "Started consuming REST APIs",
      "Explored UI/UX and responsive interfaces",
    ],
    tech: ["Java", "Android Studio", "SQLite", "MySQL", "REST APIs"],
  },
  {
    id: 2,
    year: "2024",
    title: "Building Real Systems",
    subtitle: "From school projects to real applications",
    color: "green",
    image: "/img/experience/experience-systems.png",
    description:
      "I started building more complete systems combining frontend, backend, databases, and deployment workflows. This stage helped me understand real-world software architecture and collaboration.",
    highlights: [
      "Built full-stack web systems",
      "Worked with authentication and APIs",
      "Integrated cloud-connected services",
      "Started deploying projects publicly",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "AWS", "Tailwind"],
  },
  {
    id: 3,
    year: "2025",
    title: "Cloud + Mobile Focus",
    subtitle: "Creating more scalable and cinematic experiences",
    color: "yellow",
    image: "/img/experience/experience-mobile.png",
    description:
      "I became more focused on mobile experiences, modern UI systems, cloud-connected apps, and frontend motion. I also started refining my visual style and product thinking.",
    highlights: [
      "Focused on React ecosystems",
      "Improved UI/UX direction",
      "Worked on cloud-connected systems",
      "Started building cinematic interfaces",
    ],
    tech: ["React", "React Native", "Framer Motion", "Cloud Services", "Vite"],
  },
  {
    id: 4,
    year: "2026",
    title: "Creative Engineering",
    subtitle: "Mixing software engineering with creativity",
    color: "red",
    image: "/img/experience/experience-creative.png",
    description:
      "Currently focused on building projects that combine engineering, design, motion, music, and immersive interfaces. My goal is creating products that feel both technical and emotional.",
    highlights: [
      "Building cinematic portfolio experiences",
      "Developing creative mobile apps",
      "Combining design + engineering",
      "Exploring interactive storytelling",
    ],
    tech: [
      "React",
      "Mobile UI",
      "Creative Development",
      "Motion Design",
      "Product Thinking",
    ],
  },
];

function getColorStyles(color) {
  switch (color) {
    case "blue":
      return {
        line: "bg-blue-500",
        border: "border-blue-500/40",
        glow: "shadow-blue-500/10",
        accent: "text-blue-500",
        tag: "border-blue-500/30 text-blue-500 bg-blue-500/10",
      };

    case "green":
      return {
        line: "bg-green-500",
        border: "border-green-500/40",
        glow: "shadow-green-500/10",
        accent: "text-green-500",
        tag: "border-green-500/30 text-green-500 bg-green-500/10",
      };

    case "yellow":
      return {
        line: "bg-yellow-500",
        border: "border-yellow-500/40",
        glow: "shadow-yellow-500/10",
        accent: "text-yellow-500",
        tag: "border-yellow-500/30 text-yellow-500 bg-yellow-500/10",
      };

    case "red":
      return {
        line: "bg-red-500",
        border: "border-red-500/40",
        glow: "shadow-red-500/10",
        accent: "text-red-500",
        tag: "border-red-500/30 text-red-500 bg-red-500/10",
      };

    default:
      return {
        line: "bg-base-300",
        border: "border-base-300",
        glow: "",
        accent: "text-base-content",
        tag: "border-base-300",
      };
  }
}

export default function ExperienceSection() {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <section className="scroll-mt-24">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12 md:mb-14">
      <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
        Experience
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
        My developer journey
      </h2>

      <p className="max-w-2xl mx-auto opacity-70 text-sm md:text-base leading-relaxed">
        A timeline of how I evolved from experimenting with code to building
        modern, creative, and cloud-connected software experiences.
      </p>
    </div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-base-300" />

          <div className="flex flex-col gap-10 md:gap-14">
            {EXPERIENCE_DATA.map((item, index) => {
              const styles = getColorStyles(item.color);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative grid md:grid-cols-2 gap-8 items-center"
                >
                  <div
                    className={[
                      "absolute left-4 md:left-1/2 top-8 md:top-10 md:-translate-x-1/2",
                      "w-5 h-5 rounded-full border-4 border-base-100 z-20",
                      styles.line,
                    ].join(" ")}
                  />

                  <div className="hidden md:block" />

                  <div
                    className={[
                      "ml-14 md:ml-0",
                      "rounded-[1.5rem] md:rounded-[2rem] border bg-base-100/75 backdrop-blur-xl",
                      "shadow-xl overflow-hidden transition-all duration-500",
                      "hover:-translate-y-1 hover:shadow-2xl",
                      styles.border,
                      styles.glow,
                      isLeft ? "md:col-start-1" : "md:col-start-2",
                    ].join(" ")}
                  >
                    <div className="relative h-36 md:h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 pr-4">
                        <div
                          className={`text-xs md:text-sm font-bold mb-1 ${styles.accent}`}
                        >
                          {item.year}
                        </div>

                        <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-white/80 text-xs md:text-sm mt-1 leading-snug">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <p className="opacity-80 leading-relaxed text-sm">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {item.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className={[
                              "px-3 py-1 rounded-full border text-xs font-bold",
                              styles.tag,
                            ].join(" ")}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelected(item)}
                        className="mt-6 btn btn-outline btn-sm btn-cv-blue"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 md:mt-20 rounded-[1.5rem] md:rounded-[2rem] border border-base-300 bg-base-100/75 backdrop-blur-xl p-5 md:p-8 shadow-sm">
          <div className="text-center mb-7">
            <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
              Current Focus
            </p>

            <h3 className="text-xl md:text-3xl font-extrabold">
              What I’m currently focused on
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              "Mobile Experiences",
              "Cloud Systems",
              "Frontend Motion",
              "Creative Development",
              "UI/UX",
              "Product Thinking",
              "Full-stack Apps",
            ].map((item) => (
              <span
                key={item}
                className="px-3 md:px-4 py-2 rounded-full border border-[#0171DC]/30 bg-[#0171DC]/10 text-[#0171DC] text-xs md:text-sm font-bold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {selected &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm p-4 grid place-items-center"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-2xl max-h-[88vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-base-100 border border-base-300 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-outline btn-error absolute top-3 right-3 md:top-4 md:right-4 z-20"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="relative h-40 md:h-56">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 pr-12">
                  <div className="text-xs md:text-sm text-white/70 mb-1">
                    {selected.year}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {selected.title}
                  </h3>

                  <p className="text-white/80 mt-1 md:mt-2 text-sm leading-snug">
                    {selected.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-5 md:p-7 overflow-y-auto max-h-[calc(88vh-10rem)]">
                <p className="leading-relaxed opacity-80 text-sm md:text-base">
                  {selected.description}
                </p>

                <div className="mt-6 md:mt-8">
                  <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                    Highlights
                  </h4>

                  <div className="grid gap-2 md:grid-cols-2 md:gap-3">
                    {selected.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-base-300 bg-base-200/40 p-3 md:p-4 text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selected.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 md:px-4 py-2 rounded-full border border-base-300 bg-base-200/40 text-xs md:text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
        </section>
  );
}