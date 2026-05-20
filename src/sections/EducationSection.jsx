import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

function DegreeCard({
  logo,
  school,
  program,
  dates,
  grade,
  about,
  tags = [],
  status,
  verifyHref,
  accent = "border-base-300",
  tagColor = "border-base-300 text-base-content",
}) {
  const isInProgress = status === "in-progress";

  return (
    <div
      className={[
        "card bg-base-100/75 border shadow-sm hover:shadow-md transition h-full",
        accent,
      ].join(" ")}
    >
      <div className="card-body h-full flex flex-col p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <img
              src={logo}
              alt={`${school} logo`}
              className={`w-12 h-12 md:w-14 md:h-14 object-contain rounded ${
                isInProgress ? "filter grayscale contrast-75" : ""
              }`}
            />

            {isInProgress && (
              <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
                <span className="text-white font-bold text-[9px] md:text-[10px] rotate-[-20deg]">
                  IN PROGRESS
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-lg font-bold leading-tight">
              {school}
            </h3>

            <p className="text-sm opacity-80 leading-snug mt-1">{program}</p>

            <p className="text-xs opacity-70 mt-2 leading-snug">
              {dates}
              {grade ? ` • Grade: ${grade}` : ""}
            </p>

            {verifyHref && (
              <a
                href={verifyHref}
                target="_blank"
                rel="noreferrer"
                className={[
                  "btn btn-outline btn-xs mt-3",
                  tagColor,
                  "hover:bg-base-content hover:text-base-100",
                ].join(" ")}
              >
                Verify
              </a>
            )}
          </div>
        </div>

        {about && (
          <p className="mt-5 opacity-90 text-sm leading-relaxed">{about}</p>
        )}

        <div className="mt-auto pt-5">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className={[
                    "px-3 py-1 rounded-full border text-xs font-bold",
                    tagColor,
                  ].join(" ")}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getBadgeStyles(rarity) {
  switch (rarity) {
    case "rare":
      return {
        card: "border-sky-400/70",
        accent: "text-sky-500",
        badge: "border-sky-400/50 bg-sky-500/10 text-sky-500",
        pdf: "btn btn-outline btn-sm border-sky-400 text-sky-500 hover:bg-sky-400 hover:text-black",
      };
    case "uncommon":
      return {
        card: "border-green-500/70",
        accent: "text-green-500",
        badge: "border-green-500/50 bg-green-500/10 text-green-500",
        pdf: "btn btn-outline btn-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-black",
      };
    default:
      return {
        card: "border-[#0171DC]/60",
        accent: "text-[#0171DC]",
        badge: "border-[#0171DC]/40 bg-[#0171DC]/10 text-[#0171DC]",
        pdf: "btn btn-outline btn-sm btn-cv-blue",
      };
  }
}

function CertificateCard({
  title,
  provider,
  issued,
  badge,
  status,
  rarity,
  href,
  pdf,
  details,
  skills,
  credentialId,
  expires,
  mobileCaption,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const isInProgress = status === "in-progress";
  const styles = getBadgeStyles(rarity);

  useEffect(() => {
    if (!showDetails) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [showDetails]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setShowDetails(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <article
        onClick={() => !isInProgress && setShowDetails(true)}
        className={[
          "group h-full rounded-[1.5rem] border bg-base-100/75 backdrop-blur-xl p-4",
          "shadow-sm transition-all duration-300 cursor-pointer",
          "hover:-translate-y-1 hover:shadow-md hover:bg-base-100",
          styles.card,
        ].join(" ")}
      >
        <div className="relative aspect-square rounded-[1.2rem] bg-base-200/70 border border-base-300 flex items-center justify-center overflow-hidden mb-4">
          {badge && (
            <img
              src={badge}
              alt={title}
              className={[
                "w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105",
                isInProgress ? "filter grayscale contrast-75" : "",
              ].join(" ")}
              loading="lazy"
            />
          )}

          {isInProgress && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm rotate-[-20deg] tracking-wider">
                IN PROGRESS
              </span>
            </div>
          )}
        </div>

        {mobileCaption && (
          <p className="md:hidden text-[10px] opacity-60 text-center leading-tight mb-2">
            {mobileCaption}
          </p>
        )}

        <div className="space-y-2">
          <div
            className={[
              "inline-flex px-2.5 py-1 rounded-full border text-[10px] font-bold",
              styles.badge,
            ].join(" ")}
          >
            {provider}
          </div>

          <h4 className="text-sm font-extrabold leading-tight line-clamp-2">
            {title}
          </h4>

          <p className="text-xs opacity-65">Issued {issued}</p>
        </div>
      </article>

      {showDetails &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] grid place-items-center bg-black/50 p-4 overscroll-contain"
            onClick={() => setShowDetails(false)}
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
                className="btn btn-sm btn-circle btn-outline btn-error absolute right-3 top-3 z-10"
                onClick={() => setShowDetails(false)}
                type="button"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="p-6 pr-12 overflow-y-auto max-h-[88dvh]">
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={badge}
                    alt={title}
                    className="w-16 h-16 object-contain rounded-2xl bg-base-200 p-2 border border-base-300"
                  />

                  <div>
                    <h3 className="text-xl font-bold leading-tight">{title}</h3>
                    <p className={`text-sm font-bold ${styles.accent}`}>
                      {provider}
                    </p>
                    <p className="text-xs opacity-70 mt-1">Issued {issued}</p>

                    {credentialId && (
                      <p className="text-xs opacity-70">
                        Credential ID: {credentialId}
                      </p>
                    )}

                    {expires && (
                      <p className="text-xs opacity-70">Expires: {expires}</p>
                    )}
                  </div>
                </div>

                {details?.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {details.map((detail, index) => (
                      <div key={index} className="text-sm">
                        <span className="font-semibold">{detail.label}:</span>{" "}
                        <span className="opacity-80">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {skills?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Skills:</h4>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span key={index} className="badge badge-ghost badge-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap justify-end gap-3 pt-2">
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm border-base-content/40 text-base-content hover:bg-base-content hover:text-base-100"
                    >
                      Verify Credential
                    </a>
                  )}

                  {pdf && (
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.pdf}
                    >
                      View PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function CarouselArrows({ onPrev, onNext, className = "" }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <button
        type="button"
        className="btn btn-circle btn-ghost"
        onClick={onPrev}
        aria-label="Previous"
      >
        ❮
      </button>

      <div className="text-xs opacity-60 select-none">swipe</div>

      <button
        type="button"
        className="btn btn-circle btn-ghost"
        onClick={onNext}
        aria-label="Next"
      >
        ❯
      </button>
    </div>
  );
}

export default function EducationSection() {
  const degrees = [
  {
    logo: "/img/utl.png",
    school: "Universidad Tecnológica de León",
    program:
      "Bachelor's in Information Technology Engineering, Software Development",
    dates: "Aug 2025 – Apr 2027 (in progress)",
    about:
      "Advanced engineering program focused on software architecture, data engineering, enterprise applications, cloud-connected systems, and scalable project development.",
    tags: ["Software Architecture", "Data Engineering", "Enterprise Apps"],
    status: "in-progress",
    accent: "border-sky-400/60",
    tagColor: "border-sky-400 text-sky-500",
  },
  {
    logo: "/img/utl.png",
    school: "Universidad Tecnológica de León",
    program:
      "Technical University Degree (TSU), Information Technology — Software Development",
    dates: "Sep 2023 – Aug 2025",
    grade: "9",
    about:
      "Technical program focused on full-stack development, database design, backend logic, mobile foundations, and deployment of practical software solutions.",
    tags: ["Full-Stack", "Databases", "Deployment"],
    status: "completed",
    accent: "border-green-500/60",
    tagColor: "border-green-500 text-green-500",
    verifyHref:
      "https://sito.utleon.edu.mx/jsp/escolar/titulacion/portal_verificacion_titulos_electronicos.jsp?matricula=23001542&nivel=1&hash=ad91e7e06578c88ae19f9913a31bba14a27e5da8a0f077af9bd9556be08b346ff3bc68832bd571b6e7282f311c3c9a37bc7810bf2af4612e5799958a84368239",
  },
  {
    logo: "/img/colegiohidalgo.png",
    school: "Colegio Hidalgo de León",
    program:
      "General High School Diploma — Physical-Mathematical / Chemical-Biological track",
    dates: "Aug 2015 – Aug 2018",
    grade: "7.1",
    about:
      "High school program completed at Colegio Hidalgo de León. At that time, the physical-mathematical and chemical-biological areas were integrated into one academic track, focused on science, mathematics, and general upper-secondary education.",
    tags: ["High School", "Science Track", "Mathematics"],
    status: "completed",
    accent: "border-[#7A1026]/70",
    tagColor: "border-[#7A1026] text-[#7A1026]",
    verifyHref: "/Bachillerato.pdf",
  },
];

  const badges = [
    {
      id: "google-ux-1",
      title: "Aspectos básicos del diseño de la experiencia del usuario",
      provider: "Google / Coursera",
      issued: "Jun 2024",
      credentialId: "F3UYRY5SNXNV",
      href: "https://www.coursera.org/account/accomplishments/verify/F3UYRY5SNXNV",
      badge: "/img/coursera.png",
      status: "completed",
      rarity: "common",
      mobileCaption: "Google UX • Course 1",
      details: [
        {
          label: "Description",
          value:
            "Introductory UX course focused on the foundations of user experience design.",
        },
      ],
      skills: ["UX Design", "User Research", "Design Thinking"],
    },
    {
      id: "google-ux-2",
      title: "Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear",
      provider: "Google / Coursera",
      issued: "Jul 2024",
      credentialId: "D638VUJDDA9N",
      href: "https://www.coursera.org/account/accomplishments/verify/D638VUJDDA9N",
      badge: "/img/coursera.png",
      status: "completed",
      rarity: "common",
      mobileCaption: "Google UX • Course 2",
      details: [
        {
          label: "Description",
          value:
            "Course focused on early UX process stages: empathizing, defining, and ideating.",
        },
      ],
      skills: ["Empathy Maps", "Problem Statements", "Ideation"],
    },
    {
      id: "google-ux-3",
      title: "Crear esquemas de página y prototipos de baja fidelidad",
      provider: "Google / Coursera",
      issued: "Aug 2024",
      credentialId: "28AS31DH2B7L",
      href: "https://www.coursera.org/account/accomplishments/verify/28AS31DH2B7L",
      badge: "/img/coursera.png",
      status: "completed",
      rarity: "common",
      mobileCaption: "Google UX • Course 3",
      details: [
        {
          label: "Description",
          value:
            "Course focused on wireframes, low-fidelity prototypes, and early product structure.",
        },
      ],
      skills: ["Wireframing", "Low-Fidelity Prototypes", "UX Flows"],
    },
    {
      id: "ccna-intro",
      title: "CCNA: Introduction to Networks",
      provider: "Cisco",
      issued: "Mar 7, 2024",
      credentialId: "313e1394-4544-42e0-9e03-964095da7dfe",
      expires: "Does not expire",
      badge: "/img/ccna-introduction-to-networks.png",
      status: "completed",
      rarity: "rare",
      mobileCaption: "Cisco • CCNA Intro",
      details: [
        { label: "Badge Status", value: "Visible" },
        { label: "Issuing Organization", value: "Cisco" },
        {
          label: "Description",
          value:
            "Cisco verifies successful completion of curriculum outcomes.",
        },
      ],
      skills: [
        "Ethernet",
        "IP Connectivity",
        "IP Services",
        "IP Subnetting",
        "IPv4 / IPv6",
        "Network Fundamentals",
        "Security Fundamentals",
        "Switching",
      ],
      pdf: "/CCNA-_Introduction_to_Networks_certificate_83955-alumnos-utleon-edu-mx_cc460a39-3748-4c54-8a6b-b53eba5c13e4.pdf",
    },
    {
      id: "ccna-srwe",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      provider: "Cisco",
      issued: "Apr 17, 2024",
      credentialId: "c3153a3e-c3bc-44e4-a680-314f66f67283",
      expires: "Does not expire",
      badge: "/img/ccna-switching-routing-and-wireless-essentials.1.png",
      status: "completed",
      rarity: "rare",
      mobileCaption: "Cisco • CCNA SRWE",
      details: [
        { label: "Badge Status", value: "Visible" },
        { label: "Issuing Organization", value: "Cisco" },
      ],
      skills: [
        "Access Connectivity",
        "Access Security",
        "First-hop Redundancy",
        "High Availability",
        "Routing",
        "Switching Protocols",
        "Wireless LAN Controllers",
      ],
      pdf: "/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_83955-alumnos-utleon-edu-mx_0c64b337-714c-4ff0-9a6e-2444840c5312.pdf",
    },
    {
      id: "ndg-linux",
      title: "NDG Linux Essentials",
      provider: "NDG / Cisco NetAcad",
      issued: "Aug 2024",
      badge: "/img/linux.png",
      status: "completed",
      rarity: "uncommon",
      mobileCaption: "Linux Essentials",
      details: [
        {
          label: "Description",
          value:
            "Linux essentials certificate focused on basic commands, operating system concepts, and terminal usage.",
        },
      ],
      skills: ["Linux", "Terminal", "Command Line", "Operating Systems"],
      pdf: "/Partner-_NDG_Linux_Essentials_certificate_83955-alumnos-utleon-edu-mx_e2087d0c-dc61-4795-8c46-800230c90066.pdf",
    },
  ];

  const badgePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < badges.length; i += 2) {
      pairs.push(badges.slice(i, i + 2));
    }
    return pairs;
  }, [badges]);

  const degreeRef = useRef(null);
  const certRef = useRef(null);

  const [degIndex, setDegIndex] = useState(0);
  const [certIndex, setCertIndex] = useState(0);

  const scrollTo = (containerRef, idx, count, setIdx) => {
    const el = containerRef.current;
    if (!el) return;

    const normalized = ((idx % count) + count) % count;
    const width = el.clientWidth;

    el.scrollTo({ left: normalized * width, behavior: "smooth" });
    setIdx(normalized);
  };

  useEffect(() => {
    const el = degreeRef.current;
    if (!el) return;

    let raf = null;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth || 1;
        setDegIndex(Math.round(el.scrollLeft / w));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const el = certRef.current;
    if (!el) return;

    let raf = null;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth || 1;
        setCertIndex(Math.round(el.scrollLeft / w));
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section>
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
          Education
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Academic path & certificates
        </h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70">
          My formal education, technical degree path, and certificates that support my work in software, UX, networking, and Linux.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <div className="mb-5">
            <h3 className="text-xl md:text-2xl font-extrabold">Degrees</h3>
            <p className="text-sm opacity-70 mt-1">
              Academic programs focused on science, technology, and real software solutions.
            </p>
          </div>

          <div className="hidden md:grid gap-6 md:grid-cols-3">
            {degrees.map((d) => (
              <DegreeCard key={d.program} {...d} />
            ))}
          </div>

          <div className="md:hidden">
            <CarouselArrows
              onPrev={() =>
                scrollTo(degreeRef, degIndex - 1, degrees.length, setDegIndex)
              }
              onNext={() =>
                scrollTo(degreeRef, degIndex + 1, degrees.length, setDegIndex)
              }
              className="mb-2"
            />

            <div
              ref={degreeRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
              {degrees.map((d) => (
                <div
                  key={d.program}
                  className="w-full flex-shrink-0 snap-start pr-3"
                >
                  <DegreeCard {...d} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-extrabold">
              Certificates Collection
            </h3>
            <p className="text-sm opacity-70 mt-1">
              Extra achievements from platforms and academies I’ve used to keep learning.
            </p>
          </div>

          <div className="hidden md:grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {badges.map((badge) => (
              <CertificateCard key={badge.id} {...badge} />
            ))}
          </div>

          <div className="md:hidden">
            <CarouselArrows
              onPrev={() =>
                scrollTo(certRef, certIndex - 1, badgePairs.length, setCertIndex)
              }
              onNext={() =>
                scrollTo(certRef, certIndex + 1, badgePairs.length, setCertIndex)
              }
              className="mb-2"
            />

            <div
              ref={certRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
              {badgePairs.map((pair, idx) => (
                <div key={idx} className="w-full flex-shrink-0 snap-start pr-3">
                  <div className="grid grid-cols-2 gap-3">
                    {pair.map((b) => (
                      <CertificateCard key={b.id} {...b} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}