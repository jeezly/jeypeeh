import { useLanguage } from "../context/LanguageContext.jsx";

function getColorStyles(color) {
  switch (color) {
    case "blue":
      return {
        line: "bg-blue-500",
        border: "border-blue-500/40",
        glow: "shadow-blue-500/10",
        accent: "text-blue-500",
        tag:
          "border-blue-500/30 text-blue-500 bg-blue-500/10",
      };

    case "green":
      return {
        line: "bg-green-500",
        border: "border-green-500/40",
        glow: "shadow-green-500/10",
        accent: "text-green-500",
        tag:
          "border-green-500/30 text-green-500 bg-green-500/10",
      };

    case "yellow":
      return {
        line: "bg-yellow-500",
        border: "border-yellow-500/40",
        glow: "shadow-yellow-500/10",
        accent: "text-yellow-500",
        tag:
          "border-yellow-500/30 text-yellow-500 bg-yellow-500/10",
      };

    case "red":
      return {
        line: "bg-red-500",
        border: "border-red-500/40",
        glow: "shadow-red-500/10",
        accent: "text-red-500",
        tag:
          "border-red-500/30 text-red-500 bg-red-500/10",
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
  const { language } = useLanguage();
  const spanish = language === "es";

  const experienceData = [
    {
      id: 1,
      year: "2023",
      title: spanish
        ? "Fundamentos de Aprendizaje"
        : "Learning Foundations",
      subtitle: spanish
        ? "Comencé mi camino en desarrollo de software"
        : "Started my software development journey",
      color: "blue",
      image:
        "/img/experience/experience-learning.png",
      description: spanish
        ? "Esta fue la etapa en la que comencé a aprender programación, bases de datos, desarrollo Android, APIs y fundamentos de interfaces. La mayoría de mis primeros proyectos estuvieron enfocados en experimentar y entender cómo se conectan los distintos componentes de un sistema."
        : "This was the stage where I started learning programming, databases, Android development, APIs, and UI fundamentals. Most of my early projects were focused on experimentation and understanding how systems connect together.",
      tech: [
        "Java",
        "Android Studio",
        "SQLite",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      id: 2,
      year: "2024",
      title: spanish
        ? "Construyendo Sistemas Reales"
        : "Building Real Systems",
      subtitle: spanish
        ? "De proyectos escolares a aplicaciones reales"
        : "From school projects to real applications",
      color: "green",
      image:
        "/img/experience/experience-systems.png",
      description: spanish
        ? "Comencé a desarrollar sistemas más completos combinando frontend, backend, bases de datos y flujos de despliegue. Esta etapa me ayudó a comprender mejor la arquitectura de software aplicada y la colaboración en proyectos."
        : "I started building more complete systems combining frontend, backend, databases, and deployment workflows. This stage helped me understand real-world software architecture and collaboration.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "AWS",
        "Tailwind",
      ],
    },
    {
      id: 3,
      year: "2025",
      title: spanish
        ? "Enfoque en Cloud + Mobile"
        : "Cloud + Mobile Focus",
      subtitle: spanish
        ? "Creando experiencias más escalables y visuales"
        : "Creating more scalable and cinematic experiences",
      color: "yellow",
      image:
        "/img/experience/experience-mobile.png",
      description: spanish
        ? "Comencé a enfocarme más en experiencias móviles, sistemas modernos de interfaz, aplicaciones conectadas a la nube y movimiento en frontend. También empecé a refinar mi estilo visual y mi forma de pensar los productos."
        : "I became more focused on mobile experiences, modern UI systems, cloud-connected apps, and frontend motion. I also started refining my visual style and product thinking.",
      tech: [
        "React",
        "React Native",
        "Framer Motion",
        "Cloud Services",
        "Vite",
      ],
    },
    {
      id: 4,
      year: "2026",
      title: spanish
        ? "Ingeniería Creativa"
        : "Creative Engineering",
      subtitle: spanish
        ? "Mezclando ingeniería de software con creatividad"
        : "Mixing software engineering with creativity",
      color: "red",
      image:
        "/img/experience/experience-creative.png",
      description: spanish
        ? "Actualmente estoy enfocado en construir proyectos que combinan ingeniería, diseño, movimiento, música e interfaces inmersivas. Mi objetivo es crear productos que se sientan tanto técnicos como expresivos."
        : "Currently focused on building projects that combine engineering, design, motion, music, and immersive interfaces. My goal is creating products that feel both technical and emotional.",
      tech: [
        "React",
        "Mobile UI",
        "Creative Development",
        "Motion Design",
        "Product Thinking",
      ],
    },
  ];

  const currentFocus = spanish
    ? [
        "Experiencias Móviles",
        "Sistemas Cloud",
        "Motion en Frontend",
        "Desarrollo Creativo",
        "UI/UX",
        "Product Thinking",
        "Apps Full Stack",
      ]
    : [
        "Mobile Experiences",
        "Cloud Systems",
        "Frontend Motion",
        "Creative Development",
        "UI/UX",
        "Product Thinking",
        "Full-stack Apps",
      ];

  return (
    <section className="scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
            {spanish ? "Experiencia" : "Experience"}
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            {spanish
              ? "Mi camino como desarrollador"
              : "My developer journey"}
          </h2>

          <p className="max-w-2xl mx-auto opacity-70 text-sm md:text-base leading-relaxed">
            {spanish
              ? "Una línea del tiempo sobre cómo evolucioné de experimentar con código a construir experiencias modernas, creativas y conectadas a la nube."
              : "A timeline of how I evolved from experimenting with code to building modern, creative, and cloud-connected software experiences."}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-base-300" />

          <div className="flex flex-col gap-10 md:gap-14">
            {experienceData.map((item, index) => {
              const styles =
                getColorStyles(item.color);

              const isLeft =
                index % 2 === 0;

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
                      isLeft
                        ? "md:col-start-1"
                        : "md:col-start-2",
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
                        {item.tech
                          .slice(0, 6)
                          .map((tech) => (
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
              {spanish
                ? "Enfoque Actual"
                : "Current Focus"}
            </p>

            <h3 className="text-xl md:text-3xl font-extrabold">
              {spanish
                ? "En lo que estoy enfocado actualmente"
                : "What I’m currently focused on"}
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {currentFocus.map((item) => (
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
    </section>
  );
}