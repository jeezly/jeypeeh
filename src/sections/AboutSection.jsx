import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const baseIcon = "h-7 w-7 md:h-8 md:w-8";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* =========================================================
   ICONS
========================================================= */

const PaletteIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} ${className}`}>
    <path
      {...stroke}
      d="M12 3a9 9 0 100 18 3 3 0 003-3 2 2 0 012-2h1a3 3 0 000-6h-1a2 2 0 01-2-2 3 3 0 00-3-3z"
    />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="9.5" cy="14" r="1" fill="currentColor" />
    <circle cx="12.5" cy="8.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="12" r="1" fill="currentColor" />
  </svg>
);

const LayoutIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} ${className}`}>
    <rect {...stroke} x="3" y="4" width="18" height="16" rx="2" />
    <path {...stroke} d="M9 4v16M3 10h18" />
  </svg>
);

const CodeIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} ${className}`}>
    <path
      {...stroke}
      d="M8 12l-3 3 3 3M16 12l3 3-3 3M13 6l-2 6 2 6"
    />
  </svg>
);

const AppIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} ${className}`}>
    <rect {...stroke} x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

const MusicIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} ${className}`}>
    <path
      {...stroke}
      d="M9 18a3 3 0 11-2-2.83V7l10-2v8.17A3 3 0 1115 15"
    />
  </svg>
);

/* =========================================================
   SECTION WRAPPER
========================================================= */

function Section({ title, children }) {
  return (
    <section className="scroll-mt-24">
      <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>

      {children}
    </section>
  );
}

/* =========================================================
   BODY SCROLL LOCK
========================================================= */

function lockBodyScroll() {
  const scrollY = window.scrollY;

  const previous = {
    position: document.body.style.position,
    top: document.body.style.top,
    left: document.body.style.left,
    right: document.body.style.right,
    width: document.body.style.width,
    overflow: document.body.style.overflow,
  };

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.position = previous.position;
    document.body.style.top = previous.top;
    document.body.style.left = previous.left;
    document.body.style.right = previous.right;
    document.body.style.width = previous.width;
    document.body.style.overflow = previous.overflow;

    window.scrollTo(0, scrollY);
  };
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProgressProjectCard({
  number,
  eyebrow,
  title,
  description,
  progress,
  accent = "yellow",
  logo = null,
  subtitle = null,
  buttonLabel = null,
  onButtonClick = null,
}) {
  const accentMap = {
    yellow: {
      border: "border-yellow-400/30 hover:border-yellow-400/70",
      glow: "bg-yellow-400/10",
      text: "text-yellow-500",
      badgeBorder: "border-yellow-400/35",
      badgeBg: "bg-yellow-400/10",
      bar: "bg-yellow-400",
      shadow: "shadow-[0_0_18px_rgba(250,204,21,0.25)]",
      hoverShadow:
        "hover:shadow-[0_18px_45px_rgba(250,204,21,0.08)]",
      button:
        "border-yellow-400/40 bg-yellow-400/10 text-yellow-500 hover:bg-yellow-400 hover:text-black",
    },

    red: {
      border: "border-red-500/30 hover:border-red-500/70",
      glow: "bg-red-500/10",
      text: "text-red-500",
      badgeBorder: "border-red-500/35",
      badgeBg: "bg-red-500/10",
      bar: "bg-red-500",
      shadow: "shadow-[0_0_18px_rgba(239,68,68,0.25)]",
      hoverShadow:
        "hover:shadow-[0_18px_45px_rgba(239,68,68,0.08)]",
      button:
        "border-red-500/40 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white",
    },

    green: {
      border: "border-green-500/30 hover:border-green-500/70",
      glow: "bg-green-500/10",
      text: "text-green-500",
      badgeBorder: "border-green-500/35",
      badgeBg: "bg-green-500/10",
      bar: "bg-green-500",
      shadow: "shadow-[0_0_18px_rgba(34,197,94,0.25)]",
      hoverShadow:
        "hover:shadow-[0_18px_45px_rgba(34,197,94,0.08)]",
      button:
        "border-green-500/40 bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white",
    },
  };

  const a = accentMap[accent] || accentMap.yellow;

  return (
    <div
      className={[
        "group relative overflow-hidden",
        "rounded-[1.15rem] md:rounded-[1.5rem]",
        "border bg-base-200/40",
        "p-3 md:p-5",
        "transition-all duration-500",
        "md:hover:-translate-y-1",
        a.border,
        a.hoverShadow,
      ].join(" ")}
    >
      {/* Glow */}
      <div
        className={[
          "pointer-events-none absolute",
          "-right-12 -top-12 h-28 w-28",
          "md:-right-16 md:-top-16 md:h-40 md:w-40",
          "rounded-full blur-3xl",
          "transition-transform duration-700",
          "group-hover:scale-125",
          a.glow,
        ].join(" ")}
      />

      <div className="relative">
        {/* TOP */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2 md:gap-3">
            <span
              className={[
                "grid shrink-0 place-items-center rounded-lg border",
                "h-7 w-7 text-[9px]",
                "md:h-9 md:w-9 md:rounded-xl md:text-xs",
                "font-black",
                a.badgeBorder,
                a.badgeBg,
                a.text,
              ].join(" ")}
            >
              {number}
            </span>

            <span
              className={[
                "truncate",
                "text-[8px] md:text-[10px]",
                "uppercase tracking-[0.15em] md:tracking-[0.2em]",
                "font-black",
                a.text,
              ].join(" ")}
            >
              {eyebrow}
            </span>
          </div>

          <span
            className={[
              "shrink-0 text-[11px] font-black md:text-sm",
              a.text,
            ].join(" ")}
          >
            {progress}%
          </span>
        </div>

        {/* PROJECT INFO */}
        {logo ? (
          <div className="mt-2.5 flex items-center gap-2.5 md:mt-5 md:gap-3">
            <div
              className={[
                "grid shrink-0 place-items-center overflow-hidden",
                "h-8 w-8 rounded-lg p-1",
                "md:h-11 md:w-11 md:rounded-xl md:p-1.5",
                "border",
                a.badgeBorder,
                a.badgeBg,
              ].join(" ")}
            >
              <img
                src={logo}
                alt={title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <h4 className="truncate text-sm font-black tracking-tight md:text-xl">
                {title}
              </h4>

              {subtitle && (
                <p className="truncate text-[7px] font-bold uppercase tracking-[0.12em] opacity-45 md:text-[10px] md:tracking-[0.16em]">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        ) : (
          <h4 className="mt-2.5 text-sm font-black tracking-tight md:mt-5 md:text-xl">
            {title}
          </h4>
        )}

        {/* DESCRIPTION */}
        <p className="mt-1 text-[10px] leading-4 opacity-55 md:mt-2 md:text-sm md:leading-relaxed">
          {description}
        </p>

        {/* PROGRESS */}
        <div className="mt-2.5 md:mt-5">
          <div className="h-1.5 overflow-hidden rounded-full bg-base-300 md:h-2">
            <div
              className={[
                "h-full rounded-full",
                "transition-all duration-1000",
                a.bar,
                a.shadow,
              ].join(" ")}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* BUTTON */}
        {buttonLabel && onButtonClick && (
          <div className="mt-2.5 flex justify-end md:mt-5">
            <button
              type="button"
              onClick={onButtonClick}
              className={[
                "inline-flex items-center gap-1.5",
                "rounded-full border",
                "px-3 py-1.5",
                "text-[9px] font-black",
                "md:px-4 md:py-2 md:text-xs",
                "transition-all duration-300",
                "hover:-translate-y-0.5",
                a.button,
              ].join(" ")}
            >
              {buttonLabel}
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   ABOUT MODAL
========================================================= */

function AboutModal({ item, onClose, onSelectSection }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const unlock = lockBodyScroll();

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      unlock();
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  const isProjects = item.id === "projects";

  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        p-2 sm:p-4 md:p-6
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby={`about-modal-${item.id}`}
    >
      {/* BACKDROP */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div
        className={[
          "relative z-10 w-full max-w-3xl",
          "overflow-hidden",
          "rounded-[1.4rem] md:rounded-[2rem]",
          "border bg-base-100 shadow-2xl",
          item.border,

          isProjects
            ? "max-h-[96svh] md:max-h-[90vh]"
            : "max-h-[92svh]",
        ].join(" ")}
      >
        {/* HEADER */}
        <div
          className="
            relative z-20
            flex items-center justify-between gap-4
            border-b border-base-300
            bg-base-100/95
            px-4 py-2.5
            backdrop-blur-xl
            md:px-6 md:py-4
          "
        >
          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.22em] opacity-45 md:text-[10px]">
              About
            </p>

            <h3
              id={`about-modal-${item.id}`}
              className="text-lg font-black tracking-tight md:text-2xl"
            >
              {item.title}
            </h3>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="
              grid h-8 w-8 place-items-center
              rounded-full
              border border-base-300
              bg-base-200
              text-sm
              transition
              hover:bg-base-300
              md:h-9 md:w-9
            "
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div
          className={
            isProjects
              ? `
                overflow-hidden
                p-3

                md:max-h-[calc(90vh-82px)]
                md:overflow-y-auto
                md:p-7
              `
              : `
                max-h-[calc(92svh-65px)]
                overflow-y-auto
                p-4
                md:p-7
              `
          }
        >
          {typeof item.content === "function"
            ? item.content({
                close: onClose,

                goToSection: (section) => {
                  onClose();

                  requestAnimationFrame(() => {
                    onSelectSection?.(section);
                  });
                },
              })
            : item.content}
        </div>
      </div>
    </div>,
    document.body
  );
}

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection({ onSelectSection }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const aboutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    const current = aboutRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  /* =========================================================
     WHAT I DO
  ========================================================= */

  const skillsData = [
    {
      id: "graphic",
      Icon: PaletteIcon,
      label: "Graphic Design",
      color: "text-white",
      bg: "bg-zinc-900",
    },

    {
      id: "web",
      Icon: LayoutIcon,
      label: "Web Design",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },

    {
      id: "software",
      Icon: CodeIcon,
      label: "Software",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },

    {
      id: "application",
      Icon: AppIcon,
      label: "Application",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },

    {
      id: "producer",
      Icon: MusicIcon,
      label: "Producer",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  /* =========================================================
     MORE ABOUT ME
  ========================================================= */

  const items = [
    /* ---------------------------------------------------------
       HOBBIES
    --------------------------------------------------------- */

    {
      id: "hobbies",

      title: "Hobbies & Lifestyle",

      image: "/img/jeypeehHobbies.png",

      ring: "ring-[#0171DC]",

      border: "border-[#0171DC]",

      content: (
        <div>
          <div className="mb-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#0171DC]">
              Outside the screen
            </p>

            <h3 className="text-2xl font-black tracking-tight md:text-3xl">
              Things that keep me moving.
            </h3>

            <p className="mt-2 text-sm leading-relaxed opacity-65">
              When I&apos;m not coding, I like doing things that keep me
              active, curious and creative.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {[
              {
                title: "Skateboarding",
                text: "Clears my mind and keeps me moving.",
                label: "MOVE",
              },

              {
                title: "Music production",
                text: "I make beats and experiment with different genres.",
                label: "CREATE",
              },

              {
                title: "Anime & movies",
                text: "Stories, worlds and visual ideas that inspire me.",
                label: "WATCH",
              },

              {
                title: "Meeting people",
                text: "I enjoy hearing different stories and perspectives.",
                label: "CONNECT",
              },

              {
                title: "Learning",
                text: "I’m always trying to understand or build something new.",
                label: "LEARN",
              },

              {
                title: "Nature",
                text: "Hiking, forests and the beach help me reset.",
                label: "RESET",
              },

              {
                title: "Basketball",
                text: "Another way I like to stay active and have fun.",
                label: "PLAY",
              },

              {
                title: "Technology",
                text: "I genuinely enjoy discovering how things work.",
                label: "BUILD",
              },
            ].map((hobby, index) => (
              <div
                key={hobby.title}
                className="
                  group relative overflow-hidden
                  rounded-[1.15rem]
                  border border-[#0171DC]/20
                  bg-base-200/45
                  p-3
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#0171DC]/50
                "
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="
                      grid h-7 w-7 place-items-center
                      rounded-lg
                      border border-[#0171DC]/25
                      bg-[#0171DC]/10
                      text-[9px] font-black
                      text-[#0171DC]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-[#0171DC]
                      opacity-70
                    "
                  >
                    {hobby.label}
                  </span>
                </div>

                <h4 className="mt-3 text-sm font-black tracking-tight">
                  {hobby.title}
                </h4>

                <p className="mt-1 text-[10px] leading-4 opacity-55 md:text-xs">
                  {hobby.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    /* ---------------------------------------------------------
       MY PROJECTS
    --------------------------------------------------------- */

    {
      id: "projects",

      title: "My Projects",

      image: "/img/jeypeehProjects.png",

      ring: "ring-yellow-400",

      border: "border-yellow-400",

      content: ({ goToSection }) => (
        <div>
          {/* INTRO */}
          <div className="mb-2.5 md:mb-4">
            <p
              className="
                mb-1
                text-[8px]
                font-black
                uppercase
                tracking-[0.18em]
                text-yellow-500

                md:mb-2
                md:text-xs
                md:tracking-[0.22em]
              "
            >
              Currently building
            </p>

            <h3 className="text-lg font-black tracking-tight md:text-3xl">
              What&apos;s going on lately.
            </h3>

            <p
              className="
                mt-1
                max-w-xl
                text-[10px]
                leading-4
                opacity-55

                md:mt-2
                md:text-sm
                md:leading-relaxed
              "
            >
              A small look at what I&apos;m building, finishing and thinking
              about next.
            </p>
          </div>

          {/* PROJECTS */}
          <div className="grid gap-2 md:gap-3">
            <ProgressProjectCard
              number="01"
              eyebrow="Thinking"
              title="Thinking about a new project"
              description="Still figuring out what comes next."
              progress={30}
              accent="yellow"
            />

            <ProgressProjectCard
              number="02"
              eyebrow="Music"
              title="Cooking something new"
              description="A new track is currently taking shape."
              progress={60}
              accent="red"
            />

            <ProgressProjectCard
              number="03"
              eyebrow="Completed"
              title="VOLTS"
              subtitle="Full-Stack + IoT Ecosystem"
              description="Hardware, mobile, cloud and enterprise software."
              progress={100}
              accent="green"
              logo="/img/volts/volts-logo.png"
              buttonLabel="View in Work"
              onButtonClick={() => goToSection("work")}
            />
          </div>

          <div className="mt-2 border-t border-base-300 pt-2 md:mt-5 md:pt-4">
            <p className="text-center text-[8px] opacity-40 md:text-xs">
              Projects move to Work once they&apos;re ready to be properly
              documented.
            </p>
          </div>
        </div>
      ),
    },

    /* ---------------------------------------------------------
       COMMUNITIES
    --------------------------------------------------------- */

    {
      id: "community",

      title: "Communities",

      image: "/img/jeypeehCommunities.png",

      ring: "ring-green-500",

      border: "border-green-500",

      content: (
        <div>
          <div className="mb-5">
            <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-green-500">
              Community
            </p>

            <h3 className="text-2xl font-black tracking-tight md:text-3xl">
              Building with other people.
            </h3>

            <p className="mt-2 text-sm leading-relaxed opacity-65">
              Technology gets better when knowledge, ideas and experiences are
              shared.
            </p>
          </div>

          <div
            className="
              group relative overflow-hidden
              rounded-[1.5rem]
              border border-green-500/25
              bg-base-200/45
              p-5
              transition-all duration-500
              hover:-translate-y-1
              hover:border-green-500/60
            "
          >
            <div
              className="
                pointer-events-none absolute
                -right-20 -top-20
                h-44 w-44
                rounded-full
                bg-green-500/10
                blur-3xl
              "
            />

            <div className="relative">
              <div className="flex items-center gap-4">
                <div
                  className="
                    h-16 w-16 shrink-0
                    overflow-hidden
                    rounded-2xl
                    border border-green-500/30
                    bg-base-200
                  "
                >
                  <img
                    src="/img/calzadacode.jpg"
                    alt="Calzada Code"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-green-500">
                    Software engineering community
                  </p>

                  <h4 className="mt-1 text-xl font-black tracking-tight md:text-2xl">
                    Calzada Code
                  </h4>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed opacity-65">
                We&apos;re a community for people interested in software
                engineering. A place to learn, share knowledge and connect with
                more code magicians.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Learn", "Share", "Connect"].map((label) => (
                  <div
                    key={label}
                    className="
                      rounded-xl
                      border border-green-500/15
                      bg-green-500/5
                      px-2 py-3
                      text-center
                    "
                  >
                    <span className="text-[8px] font-black uppercase tracking-[0.14em] text-green-500 md:text-[9px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <a
                  href="https://calzadacode.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-green-500/40
                    bg-green-500/10
                    px-4 py-2
                    text-xs font-black
                    text-green-500
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-green-500
                    hover:text-white
                  "
                >
                  Visit Calzada Code
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section title="About me">
      <div
        ref={aboutRef}
        className={`transition-all duration-1000 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mb-12 md:mb-16">
          {/* MOBILE */}
          <div className="text-left md:hidden">
            <div className="relative float-right mb-2 ml-4 w-[125px]">
              <div
                className="
                  relative overflow-hidden
                  rounded-[1.5rem]
                  border border-base-300
                  bg-base-100/40
                  shadow-xl
                  rotate-[-2deg]
                "
              >
                <img
                  src="/img/work/portfolio-hero.png"
                  alt="Juan Pablo García"
                  className="
                    h-[165px] w-full
                    scale-[1.04]
                    rotate-[2deg]
                    object-cover
                  "
                />
              </div>
            </div>

            <p className="text-sm leading-7 opacity-85">
              I&apos;m Juan Pablo García — a software developer and digital
              creative who loves learning and building. I enjoy producing,
              designing, and turning ideas into reality through technology and
              creativity. Outside of work, I&apos;m into skateboarding, hiking,
              and getting lost in a forest or at the beach. I aim to do things
              right — with discipline and passion.
            </p>

            <div className="clear-both" />
          </div>

          {/* DESKTOP */}
          <div
            className="
              hidden items-center gap-12
              md:grid
              md:grid-cols-[1.05fr_0.95fr]
            "
          >
            <div className="text-left">
              <p className="max-w-2xl text-lg leading-9 opacity-85">
                I&apos;m Juan Pablo García — a software developer and digital
                creative who loves learning and building. I enjoy producing,
                designing, and turning ideas into reality through technology
                and creativity. Outside of work, I&apos;m into skateboarding,
                hiking, and getting lost in a forest or at the beach. I aim to
                do things right — with discipline and passion.
              </p>
            </div>

            <div className="relative flex justify-end">
              <div className="relative z-10 w-full max-w-[420px]">
                <div
                  className="
                    relative overflow-hidden
                    rounded-[2.75rem]
                    border border-base-300
                    bg-base-100/40
                    shadow-2xl
                    rotate-[-2deg]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:rotate-0
                  "
                >
                  <img
                    src="/img/work/portfolio-hero.png"
                    alt="Juan Pablo García"
                    className="
                      w-full
                      max-h-[430px]
                      scale-[1.03]
                      rotate-[2deg]
                      object-cover
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            WHAT I DO
        ===================================================== */}

        <div className="mb-10 md:mb-12">
          <h3 className="mb-6 text-center text-xl font-semibold">
            What I Do
          </h3>

          {/* =================================================
              MOBILE

              WEB | SOFTWARE | APPLICATION
                 DESIGN | PRODUCER
          ================================================= */}

          <div className="mx-auto grid max-w-[330px] grid-cols-6 gap-x-2 gap-y-5 md:hidden">
            {/* WEB */}
            <div className="col-span-2 flex flex-col items-center">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-base-300
                  bg-blue-500/10
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <LayoutIcon className="text-blue-500" />
              </div>

              <span className="mt-2 whitespace-nowrap text-center text-[11px] font-medium">
                Web Design
              </span>
            </div>

            {/* SOFTWARE */}
            <div className="col-span-2 flex flex-col items-center">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-base-300
                  bg-pink-500/10
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <CodeIcon className="text-pink-500" />
              </div>

              <span className="mt-2 whitespace-nowrap text-center text-[11px] font-medium">
                Software
              </span>
            </div>

            {/* APPLICATION */}
            <div className="col-span-2 flex flex-col items-center">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-base-300
                  bg-green-500/10
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <AppIcon className="text-green-500" />
              </div>

              <span className="mt-2 whitespace-nowrap text-center text-[11px] font-medium">
                Application
              </span>
            </div>

            {/* GRAPHIC DESIGN */}
            <div className="col-span-2 col-start-2 flex flex-col items-center">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-base-300
                  bg-zinc-900
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <PaletteIcon className="text-white" />
              </div>

              <span className="mt-2 whitespace-nowrap text-center text-[11px] font-medium">
                Graphic Design
              </span>
            </div>

            {/* PRODUCER */}
            <div className="col-span-2 col-start-4 flex flex-col items-center">
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-base-300
                  bg-red-500/10
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <MusicIcon className="text-red-500" />
              </div>

              <span className="mt-2 whitespace-nowrap text-center text-[11px] font-medium">
                Producer
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP
              Mantiene tu orden original
          ================================================= */}

          <div className="hidden flex-wrap justify-center gap-7 md:flex md:gap-10">
            {skillsData.map((skill) => (
              <div
                key={skill.id}
                className="
                  group flex flex-col items-center
                  transition-transform duration-300
                  hover:scale-105
                "
              >
                <div
                  className={[
                    "flex h-14 w-14 items-center justify-center",
                    "rounded-2xl",
                    "border border-base-300 shadow-sm",
                    "transition-all duration-300",
                    "group-hover:-translate-y-1",
                    "group-hover:shadow-lg",
                    skill.bg,
                  ].join(" ")}
                >
                  <skill.Icon className={skill.color} />
                </div>

                <span className="mt-2 text-center text-sm font-medium">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MORE ABOUT ME
        ===================================================== */}

        <div className="mt-10 md:mt-12">
          <div className="mb-6 text-center md:mb-8">
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0171DC] md:text-[10px]">
              More about me
            </p>

            <h3 className="mt-2 text-xl font-black tracking-tight md:text-2xl">
              A little more than code.
            </h3>
          </div>

          {/* 3 CARDS ALWAYS HORIZONTAL */}
          <div
            className="
              mx-auto
              grid max-w-3xl
              grid-cols-3
              gap-2
              sm:gap-4
              md:gap-5
            "
          >
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className={[
                  "group relative overflow-hidden",
                  "rounded-[1.2rem] md:rounded-[1.75rem]",
                  "border border-base-300",
                  "bg-base-100/70",
                  "px-2 py-3 md:p-5",
                  "backdrop-blur-xl",
                  "transition-all duration-500",
                  "hover:-translate-y-1 md:hover:-translate-y-2",
                  "hover:shadow-xl",
                ].join(" ")}
              >
                {/* GLOW */}
                <div
                  className={[
                    "absolute",
                    "-right-8 -top-8 h-20 w-20",
                    "md:-right-12 md:-top-12 md:h-32 md:w-32",
                    "rounded-full blur-3xl opacity-10",

                    item.id === "hobbies"
                      ? "bg-[#0171DC]"
                      : item.id === "projects"
                      ? "bg-yellow-400"
                      : "bg-green-500",
                  ].join(" ")}
                />

                <div className="relative flex flex-col items-center text-center">
                  {/* IMAGE */}
                  <div
                    className={[
                      "relative overflow-hidden rounded-full",

                      "h-[66px] w-[66px]",

                      "sm:h-20 sm:w-20",

                      "md:h-24 md:w-24",

                      "ring-[3px] ring-offset-2",

                      "md:ring-4 md:ring-offset-4",

                      "ring-offset-base-100",

                      "transition-transform duration-500",

                      "group-hover:scale-105",

                      "group-hover:rotate-[-2deg]",

                      item.ring,
                    ].join(" ")}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-3
                      flex min-h-[30px]
                      items-center justify-center
                      text-[10px]
                      font-black
                      leading-[1.2]

                      sm:text-xs

                      md:mt-5
                      md:min-h-0
                      md:text-base
                    "
                  >
                    {item.title}
                  </h3>

                  {/* EXPLORE */}
                  <span
                    className="
                      mt-1
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      opacity-35

                      md:mt-2
                      md:text-[9px]
                      md:tracking-[0.18em]
                    "
                  >
                    Explore
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      <AboutModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectSection={onSelectSection}
      />
    </Section>
  );
}