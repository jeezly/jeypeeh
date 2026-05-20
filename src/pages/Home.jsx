import { useRef, useState } from "react";
import Hero from "../sections/Hero.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import EducationSection from "../sections/EducationSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import WorkSection from "../sections/WorkSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import Footer from "../app/UI/Footer.jsx";

const iconClass = "h-10 w-10 md:h-12 md:w-12";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ServicesIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
    <path {...stroke} d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
    <path {...stroke} d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14z" />
  </svg>
);

const SkillsIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M8 8h8M8 12h8M8 16h5" />
    <rect {...stroke} x="4" y="4" width="16" height="16" rx="4" />
  </svg>
);

const EducationIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <path {...stroke} d="M22 9L12 4 2 9l10 5 10-5z" />
    <path {...stroke} d="M6 11.5V16c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-4.5" />
    <path {...stroke} d="M22 9v6" />
  </svg>
);

const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <circle {...stroke} cx="12" cy="12" r="8" />
    <path {...stroke} d="M12 7v5l3 2" />
    <path {...stroke} d="M7 3L5 5M17 3l2 2" />
  </svg>
);

const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <rect {...stroke} x="3" y="7" width="18" height="13" rx="3" />
    <path {...stroke} d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
    <path {...stroke} d="M3 12h18" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" className={iconClass}>
    <rect {...stroke} x="3" y="5" width="18" height="14" rx="3" />
    <path {...stroke} d="M4 7l8 6 8-6" />
  </svg>
);

const homeTabs = [
  { key: "services", label: "Services", Icon: ServicesIcon, Component: ServicesSection },
  { key: "skills", label: "Skills", Icon: SkillsIcon, Component: SkillsSection },
  { key: "education", label: "Education", Icon: EducationIcon, Component: EducationSection },
  { key: "experience", label: "Experience", Icon: ExperienceIcon, Component: ExperienceSection },
  { key: "work", label: "Work", Icon: WorkIcon, Component: WorkSection },
  { key: "contact", label: "Contact", Icon: ContactIcon, Component: ContactSection },
];

export default function Home({ initialSection = "services" }) {
  const validInitialSection = homeTabs.some((tab) => tab.key === initialSection)
    ? initialSection
    : "services";

  const [activeTab, setActiveTab] = useState(validInitialSection);
  const selectorRef = useRef(null);

  const active = homeTabs.find((tab) => tab.key === activeTab) || homeTabs[0];
  const ActiveComponent = active.Component;

  const goToSelector = () => {
    selectorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openSection = (sectionKey) => {
    setActiveTab(sectionKey);

    requestAnimationFrame(() => {
      selectorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <Hero />

      <section className="px-4 md:px-16 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <AboutSection onSelectSection={openSection} />

          <div ref={selectorRef} className="mt-20 md:mt-28 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
                Explore more
              </p>

              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
                If you want to know me better, select one of these.
              </h2>

              <p className="opacity-70 text-sm md:text-base">
                Choose a section and it will open below.
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center gap-12 mb-12">
              {homeTabs.map(({ key, label, Icon }) => {
                const isActive = activeTab === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={[
                      "group flex flex-col items-center justify-center transition-all duration-300",
                      isActive
                        ? "scale-125 text-[#0171DC] opacity-100"
                        : "gap-3 opacity-40 hover:opacity-100 hover:scale-110",
                    ].join(" ")}
                    aria-label={label}
                  >
                    <Icon />

                    {!isActive && (
                      <span className="text-sm font-bold">{label}</span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="md:hidden mb-10 -mx-4">
              <div className="flex gap-7 overflow-x-auto snap-x snap-proximity scroll-smooth px-8 py-8 scrollbar-hide">
                {homeTabs.map(({ key, label, Icon }) => {
                  const isActive = activeTab === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={[
                        "snap-center shrink-0 flex flex-col items-center justify-center transition-all duration-300",
                        isActive
                          ? "min-w-[74px] scale-125 text-[#0171DC] opacity-100"
                          : "min-w-[86px] gap-2 scale-90 opacity-35",
                      ].join(" ")}
                      aria-label={label}
                    >
                      <Icon />

                      {!isActive && (
                        <span className="text-sm font-bold whitespace-nowrap">
                          {label}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] md:rounded-[2.5rem] border border-base-300 bg-base-100/75 backdrop-blur-xl shadow-sm overflow-hidden">
              <div className="px-4 md:px-8 py-5 border-b border-base-300/70">
                <div className="text-xs uppercase tracking-[0.25em] text-[#0171DC] font-bold">
                  Now viewing
                </div>
              </div>

              <div
                key={activeTab}
                className="px-4 md:px-8 py-8 md:py-10 animate-section-enter"
              >
                <ActiveComponent />

                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={goToSelector}
                    className="group flex flex-col items-center gap-2 text-[#0171DC] opacity-80 hover:opacity-100 transition"
                    aria-label="Back to sections"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-[#0171DC]/30 bg-[#0171DC]/10 group-hover:-translate-y-1 transition-transform">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M12 19V5M6 11l6-6 6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="text-xs font-bold tracking-wide">
                      Back to sections
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}