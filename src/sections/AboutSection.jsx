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
    <path {...stroke} d="M8 12l-3 3 3 3M16 12l3 3-3 3M13 6l-2 6 2 6" />
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
    <path {...stroke} d="M9 18a3 3 0 11-2-2.83V7l10-2v8.17A3 3 0 1115 15" />
  </svg>
);

function Section({ title, children }) {
  return (
    <section className="scroll-mt-24">
      <h2 className="mb-8 text-3xl md:text-4xl font-extrabold text-center tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

function lockBodyScroll() {
  const scrollY = window.scrollY;

  const previous = {
    position: document.body.style.position,
    top: document.body.style.top,
    width: document.body.style.width,
    overflow: document.body.style.overflow,
    touchAction: document.body.style.touchAction,
  };

  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  document.body.style.touchAction = "none";

  return () => {
    document.body.style.position = previous.position;
    document.body.style.top = previous.top;
    document.body.style.width = previous.width;
    document.body.style.overflow = previous.overflow;
    document.body.style.touchAction = previous.touchAction;

    window.scrollTo(0, scrollY);
  };
}

export default function AboutSection({ onSelectSection }) {
  const [activeModal, setActiveModal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const goToSection = (sectionKey) => {
    closeModal();

    setTimeout(() => {
      onSelectSection?.(sectionKey);
    }, 80);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    return lockBodyScroll();
  }, [activeModal]);

  const yellowButton =
    "btn btn-outline btn-sm border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-black";

  const bubbles = [
    {
      id: "hobbies",
      title: "Hobbies & Lifestyle",
      image: "/img/jeypeehHobbies.png",
      ring: "ring-[#0171DC]",
      border: "border-[#0171DC]",
      content: (
        <div>
          <p className="mb-4">
            When I’m not coding, I like doing things that keep me active and creative:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold">Skateboarding:</span> clears my mind and keeps me moving.</li>
            <li><span className="font-semibold">Music production:</span> I make beats and experiment with different genres.</li>
            <li><span className="font-semibold">Anime:</span> my favorites are <span className="font-semibold">Vinland Saga</span> and <span className="font-semibold">Attack on Titan</span>.</li>
            <li><span className="font-semibold">Meeting new people:</span> I enjoy hearing different stories and perspectives.</li>
            <li><span className="font-semibold">Learning:</span> I’m always taking a course or following a tutorial.</li>
          </ul>

          <p className="mt-4">
            If you share any of these interests, feel free to reach out — I’m always open to connect.
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      title: "My Projects",
      image: "/img/jeypeehProjects.png",
      ring: "ring-yellow-400",
      border: "border-yellow-400",
      content: (
        <div>
          <div className="alert border-yellow-400 bg-yellow-400/10 text-yellow-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span>
              Quick peek of what I’m building. Full details will be added to the Work section when the project is ready.
            </span>
          </div>

          <div className="grid gap-4 mb-5">
            <div className="card bg-base-200 border border-yellow-400/40">
              <div className="card-body p-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="card-title text-sm">IoT + Arduino App</h4>

                  <span className="badge badge-outline border-yellow-400 text-yellow-500">
                    In development
                  </span>
                </div>

                <p className="text-xs opacity-80">
                  I’m currently working on a new app concept that will connect software with IoT and Arduino.
                  The idea is still in the proposal stage, but the goal is to build something practical that receives
                  data from sensors and turns it into a useful digital experience.
                </p>

                <p className="text-xs opacity-70 mt-3">
                  Once the project is more complete, I’ll move it into the Work section with screenshots, details,
                  tools, and the final case study.
                </p>

                <div className="card-actions justify-end mt-3">
                  <button type="button" className={yellowButton}>
                    Coming soon
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-yellow-400/40">
              <div className="card-body p-4">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="card-title text-sm">Music / Beats</h4>

                  <span className="badge badge-outline border-yellow-400 text-yellow-500">
                    Producer
                  </span>
                </div>

                <p className="text-xs opacity-80">
                  I also produce music. You can check that side of my work inside the Work section.
                </p>

                <div className="card-actions justify-end">
                  <button
                    type="button"
                    className={yellowButton}
                    onClick={() => goToSection("work")}
                  >
                    Go to Music
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-80 mb-3">
              For completed projects, open the Work section below.
            </p>

            <button
              type="button"
              onClick={() => goToSection("work")}
              className={yellowButton}
            >
              Go to Work
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "community",
      title: "Communities",
      image: "/img/jeypeehCommunities.png",
      ring: "ring-green-500",
      border: "border-green-500",
      content: (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/img/calzadacode.jpg"
              alt="Calzada Code"
              className="h-14 w-14 rounded-2xl object-cover border border-green-500/40 bg-base-200"
            />

            <div>
              <h4 className="font-bold mb-1">Calzada Code</h4>
              <p className="text-sm opacity-80">
                Software engineering community
              </p>
            </div>
          </div>

          <p className="mb-6">
            We’re a community for people interested in software engineering.
            The goal is to create a space to learn, share knowledge, and connect
            with more code magicians.
          </p>

          <a
            href="https://calzadacode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-visit-green btn-sm"
          >
            Visit Calzada Code
          </a>
        </div>
      ),
    },
  ];

  const skillsData = [
    { Icon: PaletteIcon, label: "Graphic Design", color: "text-white", bg: "bg-zinc-900" },
    { Icon: LayoutIcon, label: "Web Design", color: "text-blue-500", bg: "bg-blue-500/10" },
    { Icon: CodeIcon, label: "Software", color: "text-pink-500", bg: "bg-pink-500/10" },
    { Icon: AppIcon, label: "Application", color: "text-green-500", bg: "bg-green-500/10" },
    { Icon: MusicIcon, label: "Producer", color: "text-red-500", bg: "bg-red-500/10" },
  ];

  const activeBubble = bubbles.find((bubble) => bubble.id === activeModal);

  const Bubble = ({ bubble }) => (
    <div className="relative group shrink-0 flex flex-col items-center w-32">
      <button
        type="button"
        className={[
          "w-28 h-28 md:w-32 md:h-32",
          "rounded-full bg-base-100",
          "flex items-center justify-center",
          "cursor-pointer shadow-md hover:shadow-lg",
          "transition-all duration-300 transform md:group-hover:scale-105",
          "overflow-hidden relative",
          "focus:outline-none",
          "ring-4 ring-offset-4 ring-offset-base-200",
          bubble.ring,
        ].join(" ")}
        onClick={() => openModal(bubble.id)}
        aria-label={bubble.title}
      >
        <img
          src={bubble.image}
          alt={bubble.title}
          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-full" />
      </button>

      <div className="text-center mt-4 w-full">
        <h3 className="font-semibold text-sm leading-tight">
          {bubble.title}
        </h3>
      </div>
    </div>
  );

  return (
    <Section title="About me">
      <div
        ref={aboutRef}
        className={`transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-12 md:mb-16">
          {/* MOBILE */}
          <div className="md:hidden text-left">
            <div className="relative float-right ml-4 mb-2 w-[132px]">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-base-300 bg-base-100/40 shadow-xl rotate-[-2deg]">
                <img
                  src="/img/jeypeehface.png"
                  alt="Juan Pablo García"
                  className="w-full h-[170px] object-contain rotate-[2deg] scale-[1.04]"
                />
              </div>
            </div>

            <p className="text-base leading-8 opacity-85">
              I'm Juan Pablo García — a software developer and digital creative
              who loves learning and building. I enjoy producing, designing, and
              turning ideas into reality through technology and creativity.
              Outside of work, I'm into skateboarding, hiking, and getting lost
              in a forest or at the beach. I aim to do things right — with
              discipline and passion.
            </p>

            <div className="clear-both" />
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="text-left">
              <p className="text-lg leading-9 opacity-85 max-w-2xl">
                I'm Juan Pablo García — a software developer and digital creative
                who loves learning and building. I enjoy producing, designing,
                and turning ideas into reality through technology and creativity.
                Outside of work, I'm into skateboarding, hiking, and getting
                lost in a forest or at the beach. I aim to do things right —
                with discipline and passion.
              </p>
            </div>

            <div className="relative flex justify-end">
              <div className="relative z-10 w-full max-w-[380px]">
                <div className="relative overflow-hidden rounded-[2.75rem] border border-base-300 bg-base-100/40 shadow-2xl rotate-[-2deg]">
                  <img
                    src="/img/jeypeehface.png"
                    alt="Juan Pablo García"
                    className="w-full max-h-[430px] object-contain rotate-[2deg] scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">
            What I Do
          </h3>

          <div className="flex flex-wrap justify-center gap-7 md:gap-10">
            {skillsData.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
              >
                <div
                  className={[
                    "flex h-14 w-14 items-center justify-center rounded-2xl",
                    "border border-base-300 shadow-sm",
                    skill.bg,
                  ].join(" ")}
                >
                  <skill.Icon className={skill.color} />
                </div>

                <span className="text-sm font-medium text-center mt-2">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE BUBBLES */}
        <div className="md:hidden w-full overflow-hidden">
          <div
            className="overflow-x-auto scrollbar-hide py-3 pb-6"
            ref={(el) => {
              if (el && !el.dataset.centered) {
                requestAnimationFrame(() => {
                  el.scrollLeft =
                    (el.scrollWidth - el.clientWidth) / 2;

                  el.dataset.centered = "true";
                });
              }
            }}
          >
            <div className="flex gap-5 px-5 w-max mx-auto">
              {bubbles.map((bubble) => (
                <div
                  key={bubble.id}
                  className="snap-center shrink-0"
                >
                  <Bubble bubble={bubble} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP BUBBLES */}
        <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-12">
          {bubbles.map((bubble) => (
            <Bubble key={bubble.id} bubble={bubble} />
          ))}
        </div>

        {activeBubble &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] grid place-items-center bg-black/50 p-4 overscroll-contain"
              onClick={closeModal}
              onTouchMove={(e) => e.preventDefault()}
              role="dialog"
              aria-modal="true"
            >
              <div
                className="relative w-full max-w-2xl max-h-[90dvh] overflow-hidden rounded-3xl bg-base-100 border border-base-300 shadow-2xl animate-modal-pop overscroll-contain"
                onClick={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-sm btn-circle btn-outline btn-error absolute right-3 top-3 z-10"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="p-6 pr-12">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={activeBubble.image}
                      alt={activeBubble.title}
                      className={[
                        "w-16 h-16 rounded-full object-cover",
                        "border-4",
                        activeBubble.border,
                      ].join(" ")}
                    />

                    <h3 className="text-2xl font-bold">
                      {activeBubble.title}
                    </h3>
                  </div>

                  <div className="max-h-[62dvh] overflow-y-auto pr-2 pb-2 overscroll-contain">
                    {activeBubble.content}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </Section>
  );
}