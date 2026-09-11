import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Hero from "../sections/Hero.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import EducationSection from "../sections/EducationSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import WorkSection from "../sections/WorkSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import Footer from "../app/UI/Footer.jsx";

import { useLanguage } from "../context/LanguageContext.jsx";

/* =========================================================
   ICONS
========================================================= */

const iconClass =
  "h-12 w-12 md:h-12 md:w-12";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.75,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ServicesIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={iconClass}
  >
    <path
      {...stroke}
      d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"
    />

    <path
      {...stroke}
      d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"
    />

    <path
      {...stroke}
      d="M5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14z"
    />
  </svg>
);

const SkillsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={iconClass}
  >
    <path
      {...stroke}
      d="M8 8h8M8 12h8M8 16h5"
    />

    <rect
      {...stroke}
      x="4"
      y="4"
      width="16"
      height="16"
      rx="4"
    />
  </svg>
);

const EducationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={iconClass}
  >
    <path
      {...stroke}
      d="M22 9L12 4 2 9l10 5 10-5z"
    />

    <path
      {...stroke}
      d="M6 11.5V16c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-4.5"
    />

    <path
      {...stroke}
      d="M22 9v6"
    />
  </svg>
);

const ExperienceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={iconClass}
  >
    <circle
      {...stroke}
      cx="12"
      cy="12"
      r="8"
    />

    <path
      {...stroke}
      d="M12 7v5l3 2"
    />

    <path
      {...stroke}
      d="M7 3L5 5M17 3l2 2"
    />
  </svg>
);

const WorkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={iconClass}
  >
    <rect
      {...stroke}
      x="3"
      y="7"
      width="18"
      height="13"
      rx="3"
    />

    <path
      {...stroke}
      d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"
    />

    <path
      {...stroke}
      d="M3 12h18"
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className={iconClass}
  >
    <rect
      {...stroke}
      x="3"
      y="5"
      width="18"
      height="14"
      rx="3"
    />

    <path
      {...stroke}
      d="M4 7l8 6 8-6"
    />
  </svg>
);

/* =========================================================
   HOME
========================================================= */

export default function Home({
  initialSection = "services",
}) {
  const { language } =
    useLanguage();

  const spanish =
    language === "es";

  const selectorRef =
    useRef(null);

  const mobileStripRef =
    useRef(null);

  const mobileButtonRefs =
    useRef({});

  const scrollStopTimerRef =
    useRef(null);

  /*
    Sirve para distinguir:

    "el usuario deslizó"

    de:

    "yo estoy centrando el botón porque
     hizo click o tocó una flecha"

    Así evitamos el loop que producía
    el warning de scroll anchoring.
  */
  const programmaticScrollRef =
    useRef(false);

  const [
    canScrollLeft,
    setCanScrollLeft,
  ] = useState(false);

  const [
    canScrollRight,
    setCanScrollRight,
  ] = useState(true);

  /* =======================================================
     TABS
  ======================================================= */

  const homeTabs = useMemo(
    () => [
      {
        key: "services",
        label: spanish
          ? "Servicios"
          : "Services",
        Icon: ServicesIcon,
        Component:
          ServicesSection,
      },

      {
        key: "skills",
        label: spanish
          ? "Habilidades"
          : "Skills",
        Icon: SkillsIcon,
        Component:
          SkillsSection,
      },

      {
        key: "education",
        label: spanish
          ? "Educación"
          : "Education",
        Icon: EducationIcon,
        Component:
          EducationSection,
      },

      {
        key: "experience",
        label: spanish
          ? "Experiencia"
          : "Experience",
        Icon: ExperienceIcon,
        Component:
          ExperienceSection,
      },

      {
        key: "work",
        label: spanish
          ? "Proyectos"
          : "Work",
        Icon: WorkIcon,
        Component:
          WorkSection,
      },

      {
        key: "contact",
        label: spanish
          ? "Contacto"
          : "Contact",
        Icon: ContactIcon,
        Component:
          ContactSection,
      },
    ],
    [spanish]
  );

  const validInitialSection =
    homeTabs.some(
      (tab) =>
        tab.key ===
        initialSection
    )
      ? initialSection
      : "services";

  const [
    activeTab,
    setActiveTab,
  ] = useState(
    validInitialSection
  );

  const active =
    homeTabs.find(
      (tab) =>
        tab.key === activeTab
    ) || homeTabs[0];

  const activeIndex =
    homeTabs.findIndex(
      (tab) =>
        tab.key === activeTab
    );

  const ActiveComponent =
    active.Component;

  /* =======================================================
     UPDATE EDGE HINTS
  ======================================================= */

  const updateScrollHints =
    useCallback(() => {
      const strip =
        mobileStripRef.current;

      if (!strip) {
        return;
      }

      const maxScroll =
        Math.max(
          0,
          strip.scrollWidth -
            strip.clientWidth
        );

      setCanScrollLeft(
        strip.scrollLeft > 4
      );

      setCanScrollRight(
        strip.scrollLeft <
          maxScroll - 4
      );
    }, []);

  /* =======================================================
     CENTER ONE TAB

     NO scrollIntoView.

     Calculamos nosotros el destino exacto y hacemos
     un solo scrollTo. Así Chromium deja de hacer
     microajustes consecutivos.
  ======================================================= */

  const centerTab = useCallback(
    (
      key,
      behavior = "smooth"
    ) => {
      const strip =
        mobileStripRef.current;

      const button =
        mobileButtonRefs.current[
          key
        ];

      if (
        !strip ||
        !button
      ) {
        return;
      }

      const stripCenter =
        strip.clientWidth / 2;

      const buttonCenter =
        button.offsetLeft +
        button.offsetWidth / 2;

      const maxScroll =
        Math.max(
          0,
          strip.scrollWidth -
            strip.clientWidth
        );

      const desiredScroll =
        Math.min(
          maxScroll,
          Math.max(
            0,
            buttonCenter -
              stripCenter
          )
        );

      /*
        Si ya estamos prácticamente ahí,
        NO hacemos otro ajuste.

        Esto es importante para eliminar
        los movimientos de 0.5px / 1px.
      */
      if (
        Math.abs(
          strip.scrollLeft -
            desiredScroll
        ) < 2
      ) {
        updateScrollHints();
        return;
      }

      programmaticScrollRef.current =
        true;

      strip.scrollTo({
        left: desiredScroll,
        behavior,
      });

      window.setTimeout(
        () => {
          programmaticScrollRef.current =
            false;

          updateScrollHints();
        },
        behavior === "smooth"
          ? 450
          : 0
      );
    },
    [updateScrollHints]
  );

  /* =======================================================
     FIND NEAREST TAB AFTER MANUAL SWIPE
  ======================================================= */

  const activateClosestTab =
    useCallback(() => {
      const strip =
        mobileStripRef.current;

      if (!strip) {
        return;
      }

      const stripRect =
        strip.getBoundingClientRect();

      const stripCenter =
        stripRect.left +
        stripRect.width / 2;

      let closestKey =
        activeTab;

      let closestDistance =
        Infinity;

      for (
        const tab of homeTabs
      ) {
        const button =
          mobileButtonRefs.current[
            tab.key
          ];

        if (!button) {
          continue;
        }

        const rect =
          button.getBoundingClientRect();

        const buttonCenter =
          rect.left +
          rect.width / 2;

        const distance =
          Math.abs(
            buttonCenter -
              stripCenter
          );

        if (
          distance <
          closestDistance
        ) {
          closestDistance =
            distance;

          closestKey =
            tab.key;
        }
      }

      /*
        IMPORTANTE:

        Aquí cambiamos el azul al botón más cercano,
        pero NO volvemos a ejecutar otro scroll.

        El usuario ya lo colocó con su dedo.
      */
      if (
        closestKey !==
        activeTab
      ) {
        setActiveTab(
          closestKey
        );
      }
    }, [
      activeTab,
      homeTabs,
    ]);

  /* =======================================================
     MANUAL MOBILE SCROLL
  ======================================================= */

  const handleMobileScroll =
    () => {
      updateScrollHints();

      /*
        Si nosotros provocamos el scroll,
        no intentamos detectar otra pestaña.
      */
      if (
        programmaticScrollRef.current
      ) {
        return;
      }

      if (
        scrollStopTimerRef.current
      ) {
        window.clearTimeout(
          scrollStopTimerRef.current
        );
      }

      /*
        Sólo después de que el dedo dejó de moverlo
        decidimos qué pestaña quedó al centro.
      */
      scrollStopTimerRef.current =
        window.setTimeout(
          () => {
            activateClosestTab();
          },
          140
        );
    };

  /* =======================================================
     SELECT TAB
  ======================================================= */

  const selectSection = (
    sectionKey
  ) => {
    if (
      sectionKey === activeTab
    ) {
      centerTab(
        sectionKey
      );

      return;
    }

    setActiveTab(
      sectionKey
    );

    requestAnimationFrame(
      () => {
        centerTab(
          sectionKey
        );
      }
    );
  };

  /* =======================================================
     PREVIOUS — EXACTLY ONE
  ======================================================= */

  const goPreviousSection =
    () => {
      if (
        activeIndex <= 0
      ) {
        return;
      }

      const previous =
        homeTabs[
          activeIndex - 1
        ];

      selectSection(
        previous.key
      );
    };

  /* =======================================================
     NEXT — EXACTLY ONE
  ======================================================= */

  const goNextSection = () => {
    if (
      activeIndex >=
      homeTabs.length - 1
    ) {
      return;
    }

    const next =
      homeTabs[
        activeIndex + 1
      ];

    selectSection(
      next.key
    );
  };

  /* =======================================================
     OPEN FROM ABOUT SECTION
  ======================================================= */

  const openSection = (
    sectionKey
  ) => {
    setActiveTab(
      sectionKey
    );

    requestAnimationFrame(
      () => {
        centerTab(
          sectionKey
        );

        selectorRef.current?.scrollIntoView(
          {
            behavior:
              "smooth",
            block: "start",
          }
        );
      }
    );
  };

  /* =======================================================
     BACK TO SELECTOR
  ======================================================= */

  const goToSelector = () => {
    selectorRef.current?.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
      }
    );
  };

  /* =======================================================
     INITIAL MOBILE POSITION
  ======================================================= */

  useEffect(() => {
    const timer =
      window.setTimeout(
        () => {
          centerTab(
            activeTab,
            "auto"
          );

          updateScrollHints();
        },
        80
      );

    return () =>
      window.clearTimeout(
        timer
      );

    /*
      Sólo queremos colocar la posición inicial.
      NO queremos recenter cada vez que activeTab
      cambie por un swipe.
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* =======================================================
     LANGUAGE CHANGE

     El texto puede cambiar de tamaño ES <-> EN.
     Recentramos UNA sola vez después del render.
  ======================================================= */

  useEffect(() => {
    const timer =
      window.setTimeout(
        () => {
          centerTab(
            activeTab,
            "auto"
          );
        },
        40
      );

    return () =>
      window.clearTimeout(
        timer
      );
  }, [
    language,
    activeTab,
    centerTab,
  ]);

  /* =======================================================
     RESIZE
  ======================================================= */

  useEffect(() => {
    const handleResize =
      () => {
        centerTab(
          activeTab,
          "auto"
        );

        updateScrollHints();
      };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      if (
        scrollStopTimerRef.current
      ) {
        window.clearTimeout(
          scrollStopTimerRef.current
        );
      }
    };
  }, [
    activeTab,
    centerTab,
    updateScrollHints,
  ]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <Hero />

      <section className="px-4 md:px-16 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <AboutSection
            onSelectSection={
              openSection
            }
          />

          <div
            ref={selectorRef}
            className="mt-20 md:mt-28 scroll-mt-24"
          >
            {/* =============================================
                TITLE
            ============================================= */}

            <div className="text-center max-w-3xl mx-auto mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
                {spanish
                  ? "Explora más"
                  : "Explore more"}
              </p>

              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
                {spanish
                  ? "Si quieres conocerme mejor, elige una de estas secciones."
                  : "If you want to know me better, select one of these."}
              </h2>

              <p className="opacity-70 text-sm md:text-base">
                {spanish
                  ? "Elige una sección y aparecerá aquí abajo."
                  : "Choose a section and it will open below."}
              </p>
            </div>

            {/* =============================================
                DESKTOP
            ============================================= */}

            <div className="hidden md:flex items-center justify-center gap-12 mb-12">
              {homeTabs.map(
                ({
                  key,
                  label,
                  Icon,
                }) => {
                  const isActive =
                    activeTab ===
                    key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() =>
                        selectSection(
                          key
                        )
                      }
                      className={[
                        "group flex flex-col items-center justify-center transition-all duration-300",

                        isActive
                          ? "scale-125 text-[#0171DC] opacity-100"
                          : "gap-3 opacity-40 hover:opacity-100 hover:scale-110",
                      ].join(
                        " "
                      )}
                      aria-label={
                        label
                      }
                    >
                      <Icon />

                      {!isActive && (
                        <span className="text-sm font-bold">
                          {
                            label
                          }
                        </span>
                      )}
                    </button>
                  );
                }
              )}
            </div>

            {/* =============================================
                MOBILE
            ============================================= */}

            <div className="md:hidden mb-8">
              <div className="relative -mx-4">
                {/* =========================================
                    LEFT FADE
                ========================================= */}

                {canScrollLeft && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      bottom-0
                      z-20
                      w-12
                      bg-gradient-to-r
                      from-base-100
                      via-base-100/80
                      to-transparent
                    "
                  />
                )}

                {/* =========================================
                    RIGHT FADE
                ========================================= */}

                {canScrollRight && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      bottom-0
                      z-20
                      w-12
                      bg-gradient-to-l
                      from-base-100
                      via-base-100/80
                      to-transparent
                    "
                  />
                )}

                {/* =========================================
                    LEFT BUTTON

                    ONE SECTION ONLY
                ========================================= */}

                {activeIndex > 0 && (
                  <button
                    type="button"
                    onClick={
                      goPreviousSection
                    }
                    aria-label={
                      spanish
                        ? "Sección anterior"
                        : "Previous section"
                    }
                    className="
                      absolute
                      left-1
                      top-1/2
                      z-40
                      -translate-y-1/2

                      grid
                      h-10
                      w-10
                      place-items-center

                      text-[#0171DC]

                      transition-all
                      duration-200

                      active:scale-75
                    "
                  >
                    {/* soft glow */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-1
                        rounded-full
                        bg-[#0171DC]/8
                        blur-sm
                        animate-pulse
                      "
                    />

                    {/* moving arrow */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="
                        relative
                        z-10
                        h-6
                        w-6

                        drop-shadow-[0_0_8px_rgba(1,113,220,0.45)]

                        animate-[bounce_1.3s_ease-in-out_infinite]
                      "
                    >
                      <path
                        d="m15 18-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}

                {/* =========================================
                    RIGHT BUTTON

                    ONE SECTION ONLY
                ========================================= */}

                {activeIndex <
                  homeTabs.length -
                    1 && (
                  <button
                    type="button"
                    onClick={
                      goNextSection
                    }
                    aria-label={
                      spanish
                        ? "Siguiente sección"
                        : "Next section"
                    }
                    className="
                      absolute
                      right-1
                      top-1/2
                      z-40
                      -translate-y-1/2

                      grid
                      h-10
                      w-10
                      place-items-center

                      text-[#0171DC]

                      transition-all
                      duration-200

                      active:scale-75
                    "
                  >
                    {/* soft glow */}
                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-1
                        rounded-full
                        bg-[#0171DC]/8
                        blur-sm
                        animate-pulse
                      "
                    />

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="
                        relative
                        z-10
                        h-6
                        w-6

                        drop-shadow-[0_0_8px_rgba(1,113,220,0.45)]

                        animate-[bounce_1.3s_ease-in-out_infinite]
                      "
                    >
                      <path
                        d="m9 18 6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}

                {/* =========================================
                    ICON STRIP
                ========================================= */}

                <div
                  ref={
                    mobileStripRef
                  }
                  onScroll={
                    handleMobileScroll
                  }
                  className="
                    flex
                    gap-7

                    overflow-x-auto
                    overscroll-x-contain

                    scroll-smooth

                    snap-x
                    snap-proximity

                    px-[42%]
                    py-8

                    [overflow-anchor:none]
                    [scrollbar-width:none]

                    [&::-webkit-scrollbar]:hidden
                  "
                  style={{
                    overflowAnchor:
                      "none",
                  }}
                >
                  {homeTabs.map(
                    ({
                      key,
                      label,
                      Icon,
                    }) => {
                      const isActive =
                        activeTab ===
                        key;

                      return (
                        <button
                          key={key}
                          ref={(
                            element
                          ) => {
                            mobileButtonRefs.current[
                              key
                            ] =
                              element;
                          }}
                          type="button"
                          onClick={() =>
                            selectSection(
                              key
                            )
                          }
                          aria-label={
                            label
                          }
                          className={[
                            "relative",

                            "snap-center",
                            "shrink-0",

                            "min-w-[92px]",

                            "flex",
                            "flex-col",
                            "items-center",
                            "justify-center",
                            "gap-2",

                            "transition-all",
                            "duration-500",
                            "ease-[cubic-bezier(0.22,1,0.36,1)]",

                            isActive
                              ? [
                                  "text-[#0171DC]",
                                  "opacity-100",
                                  "scale-[1.17]",
                                ].join(
                                  " "
                                )
                              : [
                                  "text-base-content",
                                  "opacity-28",
                                  "scale-[0.88]",
                                ].join(
                                  " "
                                ),
                          ].join(
                            " "
                          )}
                        >
                          {/* ===============================
                              ICON AREA
                          =============================== */}

                          <div
                            className="
                              relative
                              grid
                              h-14
                              w-14
                              place-items-center
                            "
                          >
                            {/* BIG SOFT ACTIVE GLOW */}

                            {isActive && (
                              <span
                                className="
                                  pointer-events-none
                                  absolute
                                  inset-0

                                  rounded-full

                                  bg-[#0171DC]/14

                                  blur-xl

                                  animate-pulse
                                "
                              />
                            )}

                            {/* EXPANDING RING */}

                            {isActive && (
                              <span
                                className="
                                  pointer-events-none
                                  absolute

                                  h-11
                                  w-11

                                  rounded-full

                                  border
                                  border-[#0171DC]/40

                                  animate-ping

                                  opacity-25
                                "
                              />
                            )}

                            {/* SECOND INNER GLOW */}

                            {isActive && (
                              <span
                                className="
                                  pointer-events-none
                                  absolute

                                  h-10
                                  w-10

                                  rounded-full

                                  bg-[#0171DC]/8

                                  shadow-[0_0_22px_rgba(1,113,220,0.22)]
                                "
                              />
                            )}

                            <div
                              className={[
                                "relative",
                                "z-10",
                                "transition-all",
                                "duration-500",

                                isActive
                                  ? [
                                      "drop-shadow-[0_8px_12px_rgba(1,113,220,0.30)]",
                                      "-translate-y-0.5",
                                    ].join(
                                      " "
                                    )
                                  : "",
                              ].join(
                                " "
                              )}
                            >
                              <Icon />
                            </div>
                          </div>

                          {/* ===============================
                              LABEL
                          =============================== */}

                          <span
                            className={[
                              "text-[11px]",
                              "tracking-tight",
                              "whitespace-nowrap",
                              "transition-all",
                              "duration-500",

                              isActive
                                ? [
                                    "font-black",
                                    "opacity-100",
                                    "translate-y-0",
                                  ].join(
                                    " "
                                  )
                                : [
                                    "font-semibold",
                                    "opacity-65",
                                    "translate-y-0.5",
                                  ].join(
                                    " "
                                  ),
                            ].join(
                              " "
                            )}
                          >
                            {
                              label
                            }
                          </span>

                          {/* ===============================
                              ACTIVE UNDERLINE
                          =============================== */}

                          <span
                            className={[
                              "rounded-full",
                              "bg-[#0171DC]",
                              "transition-all",
                              "duration-500",

                              isActive
                                ? [
                                    "h-[3px]",
                                    "w-8",
                                    "opacity-100",

                                    "shadow-[0_0_14px_rgba(1,113,220,0.70)]",
                                  ].join(
                                    " "
                                  )
                                : [
                                    "h-[3px]",
                                    "w-0",
                                    "opacity-0",
                                  ].join(
                                    " "
                                  ),
                            ].join(
                              " "
                            )}
                          />
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* =========================================
                  POSITION ONLY
              ========================================= */}

              <div className="flex justify-center -mt-1">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.08em]
                    text-base-content/35
                  "
                >
                  {activeIndex +
                    1}
                  /
                  {
                    homeTabs.length
                  }
                </span>
              </div>
            </div>

            {/* =============================================
                ACTIVE SECTION PANEL
            ============================================= */}

            <div
              className="
                rounded-[2rem]
                md:rounded-[2.5rem]

                border
                border-base-300

                bg-base-100/75
                backdrop-blur-xl

                shadow-sm

                overflow-hidden
              "
            >
              <div className="px-4 md:px-8 py-5 border-b border-base-300/70">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[#0171DC]
                        opacity-40
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2
                        w-2
                        rounded-full
                        bg-[#0171DC]
                      "
                    />
                  </span>

                  <div className="text-xs uppercase tracking-[0.25em] text-[#0171DC] font-bold">
                    {spanish
                      ? "Viendo ahora"
                      : "Now viewing"}
                  </div>
                </div>

                <div className="mt-1 text-sm font-black">
                  {active.label}
                </div>
              </div>

              <div
                key={activeTab}
                className="
                  px-4
                  md:px-8
                  py-8
                  md:py-10

                  animate-section-enter
                "
              >
                <ActiveComponent />

                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={
                      goToSelector
                    }
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      gap-2

                      text-[#0171DC]

                      opacity-80
                      hover:opacity-100

                      transition
                    "
                    aria-label={
                      spanish
                        ? "Volver a las secciones"
                        : "Back to sections"
                    }
                  >
                    <span
                      className="
                        grid
                        h-11
                        w-11

                        place-items-center

                        rounded-full

                        border
                        border-[#0171DC]/30

                        bg-[#0171DC]/10

                        group-hover:-translate-y-1

                        transition-transform
                      "
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                      >
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
                      {spanish
                        ? "Volver a las secciones"
                        : "Back to sections"}
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