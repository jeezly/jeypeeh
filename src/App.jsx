import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const baseIcon = "h-4 w-4 md:h-5 md:w-5";
const stroke = { stroke: "currentColor", strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };

const HomeIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M3 10.5l9-7 9 7" />
    <path {...stroke} d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
  </svg>
);
const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle {...stroke} cx="12" cy="7" r="4" />
  </svg>
);
const WrenchIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M14.7 6.3A5 5 0 119.3 1.9l3.4 3.4-2.1 2.1-3.4-3.4A5 5 0 1014.7 6.3z" />
    <path {...stroke} d="M14 14l7 7" />
  </svg>
);
const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" transform="translate(7 3)" />
  </svg>
);
const GraduationCapIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M22 10l-10-5L2 10l10 5 10-5z" />
    <path {...stroke} d="M6 12v5a4 4 0 004 4h0a4 4 0 004-4v-5" />
  </svg>
);
const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <circle {...stroke} cx="12" cy="12" r="9" />
    <path {...stroke} d="M12 7v5l3 3" />
  </svg>
);
const GridIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <rect {...stroke} x="3" y="3" width="7" height="7" />
    <rect {...stroke} x="14" y="3" width="7" height="7" />
    <rect {...stroke} x="14" y="14" width="7" height="7" />
    <rect {...stroke} x="3" y="14" width="7" height="7" />
  </svg>
);
const PenIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M12 20h9" />
    <path {...stroke} d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" className={baseIcon} {...props}>
    <path {...stroke} d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
    <path {...stroke} d="M22 6l-10 7L2 6" />
  </svg>
);
const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <circle {...stroke} cx="12" cy="12" r="4" />
    <path {...stroke} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path {...stroke} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);
const SkullIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" {...props}>
    <path
      d="M12 2C7 2 3 6 3 11c0 3.53 2.61 6.43 6 7v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c3.39-.57 6-3.47 6-7 0-5-4-9-9-9zM9 13a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
      fill="currentColor"
    />
  </svg>
);

/* Íconos azules para "What I Do" */
const PaletteIcon = (p) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#0171DC] neon-text`} {...p}>
    <path {...stroke} d="M12 3a9 9 0 100 18 3 3 0 003-3 2 2 0 012-2h1a3 3 0 000-6h-1a2 2 0 01-2-2 3 3 0 00-3-3z" />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
    <circle cx="9.5" cy="14" r="1" fill="currentColor" />
    <circle cx="12.5" cy="8.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="12" r="1" fill="currentColor" />
  </svg>
);
const LayoutIcon = (p) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#0171DC] neon-text`} {...p}>
    <rect {...stroke} x="3" y="4" width="18" height="16" rx="2" />
    <path {...stroke} d="M9 4v16M3 10h18" />
  </svg>
);
const CodeIcon = (p) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#0171DC] neon-text`} {...p}>
    <path {...stroke} d="M8 12l-3 3 3 3M16 12l3 3-3 3M13 6l-2 6 2 6" />
  </svg>
);
const AppIcon = (p) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#0171DC] neon-text`} {...p}>
    <rect {...stroke} x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
  </svg>
);
const MusicIcon = (p) => (
  <svg viewBox="0 0 24 24" className={`${baseIcon} text-[#0171DC] neon-text`} {...p}>
    <path {...stroke} d="M9 18a3 3 0 11-2-2.83V7l10-2v8.17A3 3 0 1115 15" />
  </svg>
);

const nav = [
  { id: "home", label: "HOME", Icon: HomeIcon },
  { id: "about", label: "About me", Icon: UserIcon },
  { id: "services", label: "SERVICES", Icon: WrenchIcon },
  { id: "skills", label: "SKILLS", Icon: SparklesIcon },
  { id: "education", label: "EDUCATION", Icon: GraduationCapIcon },
  { id: "experience", label: "EXPERIENCE", Icon: ClockIcon },
  { id: "work", label: "WORK", Icon: GridIcon },
  { id: "contact", label: "CONTACT", Icon: MailIcon },
];

function useTheme() {
  const getInitial = () => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark" || saved === "skull") return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function ThemeToggleIcon() {
  const [theme, setTheme] = useTheme();
  const nextTheme = () => (theme === "light" ? "dark" : theme === "dark" ? "skull" : "light");
  const icon = theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <SkullIcon />;
  const title =
    theme === "light" ? "Switch to dark" :
    theme === "dark"  ? "Switch to skull" :
                        "Switch to light";
  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme())}
      aria-label="Toggle theme"
      className="btn btn-circle btn-ghost hover:scale-105 transition"
      title={title}
    >
      {icon}
    </button>
  );
}

/* Modal global con portal (evita bugs de posicionamiento) */
function Modal({ open, onClose, children, className = "" }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;
  return createPortal(
    <div className="modal modal-open" onClick={onClose} role="dialog" aria-modal="true">
      <div className={`modal-box max-w-2xl relative ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="modal-action">
          <button className="btn btn-outline btn-error" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

/** Sidebar */
function Sidebar({ onNavigateToSection, onClose }) {
  const handleNavigation = (id, e) => {
    e.preventDefault();

    if (id === "home" || id === "about") {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      onNavigateToSection?.(id);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const sectionElement = document.getElementById(id);
          if (sectionElement) {
            const yOffset = -100;
            const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
      });
    }

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      onClose?.();
    }
  };

  return (
    <aside className="md:fixed md:inset-y-0 md:left-0 md:w-[280px] bg-base-100 border-r border-base-300">
      <div className="px-8 pt-10 pb-6 text-center">
        <img src="/img/avatar.jpg" alt="Avatar" className="mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-base-300" />
        <h1 className="mt-4 text-lg font-extrabold leading-tight">Juan Pablo Garcia Hernández</h1>
        <p className="text-xs opacity-70">jeypeeh / heezly</p>
        <div className="mt-4 text-xs leading-relaxed opacity-90 space-y-1">
          <p>Me + 🎧 vs 🌍</p>
          <p>’99 ♒ | Made in 🇲🇽</p>
          <p>DEV💻 learning 🎹</p>
          <p>Still fixing myself day by day 🌻</p>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <ThemeToggleIcon />
        </div>
      </div>

      <nav className="px-4">
        <ul className="menu bg-transparent p-0">
          {nav.map(({ id, label, Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-base-200 transition"
                onClick={(e) => handleNavigation(id, e)}
              >
                <Icon />
                <span className="text-sm tracking-wider">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-8 pt-6 pb-8 text-[11px] opacity-70">© {new Date().getFullYear()} — made with ♥</div>
    </aside>
  );
}

/** Header móvil */
function MobileHeader({ onOpen }) {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-base-100/80 backdrop-blur border-b border-base-300">
      <div className="flex items-center gap-3 px-4 h-14">
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-sidebar"
          aria-expanded="false"
          className="btn btn-ghost btn-circle"
          onClick={onOpen}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6"><path {...stroke} d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
        <span className="font-semibold tracking-wide">jeypeeh.com</span>
        <div className="ml-auto">
          <ThemeToggleIcon />
        </div>
      </div>
    </header>
  );
}

/** Sidebar móvil (overlay) */
function MobileSidebarOverlay({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <>
      <div
        className={`md:hidden fixed inset-0 bg-black/50 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <aside
        id="mobile-sidebar"
        className={`md:hidden fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-base-100 border-r border-base-300 z-50 transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-base-300">
          <span className="font-semibold">Menu</span>
          <button className="btn btn-ghost btn-circle" aria-label="Close menu" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)] overflow-y-auto">
          {children}
        </div>
      </aside>
    </>
  );
}

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section id="home" className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <img src="/img/hero.jpg" alt="Hero" className="absolute inset-0 block w-full h-full object-cover select-none pointer-events-none" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute left-1/2 -translate-x-1/2 top-10 md:top-16 lg:top-20 w-full max-w-3xl px-4 text-center z-10">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 drop-shadow">Hi! I'm JeyPeeh</h1>
          <p className="text-white/95 text-base md:text-xl italic mb-5 md:mb-7">"Told my mom: I'm gon' shine."</p>
        </div>
        <div className={`inline-block transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="card bg-base-100/90 backdrop-blur border border-base-300 shadow-2xl hover:shadow-3xl transition">
            <div className="card-body p-4 md:p-5">
              <p className="mb-2 text-sm opacity-80">Want to know me better?</p>
              <a href="/cv.pdf" download className="btn btn-primary btn-wide gap-2 text-base font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M6 21h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-3xl font-bold text-center">{title}</h2>
      {children}
    </section>
  );
}

function About() {
  const [activeModal, setActiveModal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  const bubbles = [
    {
      id: "hobbies",
      title: "Hobbies & Lifestyle",
      image: "/img/hobbies.png",
      content: (
        <div>
          <p className="mb-4">
            Cuando no estoy programando, me encanta explorar diferentes actividades que me mantengan activo y creativo:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold">Skateboarding:</span> Me ayuda a despejar la mente y mantenerme activo</li>
            <li><span className="font-semibold">Producción musical:</span> Creo beats y experimento con diferentes géneros en mi tiempo libre</li>
            <li><span className="font-semibold">Conocer gente nueva:</span> Me encanta escuchar historias y perspectivas diferentes</li>
            <li><span className="font-semibold">Aprender cosas nuevas:</span> Siempre tengo algún curso o tutorial en proceso</li>
          </ul>
          <p className="mt-4">
            Si compartes alguno de estos intereses, ¡no dudes en contactarme! Siempre estoy abierto a conversar y conocer personas con intereses similares.
          </p>
        </div>
      )
    },
    {
      id: "projects",
      title: "My Projects",
      image: "/img/myproyects.png",
      content: (
        <div>
          <div className="alert alert-info mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>¡Atención! Estoy comenzando mi journey como desarrollador</span>
          </div>
          <p className="mb-4">Aunque aún estoy construyendo mi portafolio, tengo algunas ideas divertidas en proceso:</p>
          <div className="grid gap-4 mb-4">
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body p-4">
                <h4 className="card-title text-sm">Calculadora de Obesas</h4>
                <p className="text-xs opacity-80">Una herramienta peculiar para cálculos específicos (¡prometo que será útil!)</p>
                <div className="card-actions justify-end">
                  <span className="badge badge-outline">En desarrollo</span>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 border border-base-300">
              <div className="card-body p-4">
                <h4 className="card-title text-sm">App de Dosificación Pediátrica</h4>
                <p className="text-xs opacity-80">Extensión de mi proyecto AppMedik para ayudar a padres con medicamentos</p>
                <div className="card-actions justify-end">
                  <span className="badge badge-outline">Planificación</span>
                </div>
              </div>
            </div>
          </div>
          <p>Pronto tendré más proyectos para mostrar. Mientras tanto, puedes revisar mis proyectos académicos en la sección de Experience.</p>
        </div>
      )
    },
    {
      id: "community",
      title: "Communities",
      image: "/img/calzadacode.jpg",
      headerImage: "/img/calzadacode.jpg",
      content: (
        <div>
          <h4 className="font-bold mb-1">Calzada Code</h4>
          <p className="text-sm opacity-80 mb-4">Comunidad de ingeniería de software</p>
          <p className="mb-6">
            Somos una comunidad de personas interesadas por la ingeniería de software.
            Buscamos crear un espacio para aprender, compartir conocimiento y conectar con más magicians del código; 
            todo esto mientras disfrutamos de unas chelitas, café, y en algunas ocasiones, pociones mágicas 🔮👾
          </p>
          <a
            href="https://calzadacode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-visit-green btn-sm"
          >
            Visitar Calzada Code
          </a>
        </div>
      )
    }
  ];

  /* What I Do — ahora con íconos azules */
  const skillsData = [
    { Icon: PaletteIcon, label: "Graphic Design" },
    { Icon: LayoutIcon,  label: "Web Design"     },
    { Icon: CodeIcon,    label: "Software"       },
    { Icon: AppIcon,     label: "Application"    },
    { Icon: MusicIcon,   label: "Producer"       },
  ];

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <Section id="about" title="About me">
      <div
        ref={aboutRef}
        className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <p className="mb-8">
          I'm Juan Pablo García — a software developer and digital creative who loves learning
          and building. I enjoy producing, designing, and turning ideas into reality through
          technology and creativity. Outside of work, I'm into skateboarding, American football,
          meeting new people, new places and projects that push me to grow. I aim to do things right — with
          discipline and passion.
        </p>

        {/* WHAT I DO - íconos azules */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">What I Do</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center group transition-transform duration-300 hover:scale-110"
              >
                <div className="whatido-tile">
                  <skill.Icon className="h-10 w-10 md:h-12 md:w-12" />
                </div>
                <span className="text-sm font-medium text-center mt-2">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Burbujas */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {bubbles.map((bubble) => (
            <div key={bubble.id} className="relative group">
              <div
                 className={`w-32 h-32 rounded-full bg-base-100 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 overflow-hidden relative ${isMobile ? 'animate-pulse' : ''} holo-bubble`}
  onClick={() => openModal(bubble.id)}
              >
                {bubble.image ? (
                  <img src={bubble.image} alt={bubble.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="text-4xl">💼</div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors rounded-full"></div>
                {isMobile && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 animate-ping"></div>
                  </div>
                )}
              </div>
              <div className="text-center mt-3">
                <h3 className="font-semibold text-sm">{bubble.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modales con portal */}
        {bubbles.map((bubble) => (
          <Modal key={bubble.id} open={activeModal === bubble.id} onClose={closeModal}>
            <div className="flex items-center gap-4 mb-6">
              {bubble.image && <img src={bubble.image} alt={bubble.title} className="w-16 h-16 rounded-full object-cover" />}
              <h3 className="text-2xl font-bold">{bubble.title}</h3>
            </div>
            <div className="max-h-[60vh] overflow-y-auto pr-2">
              {bubble.content}
            </div>
          </Modal>
        ))}
      </div>
    </Section>
  );
}

function ExpandableHub({ activeSection, onSectionChange }) {
  const sectionRefs = useRef({});
  const hubNav = nav.filter(item => item.id !== "home" && item.id !== "about");
  useEffect(() => {
    hubNav.forEach(({ id }) => {
      const element = sectionRefs.current[id];
      if (element && !element.id) element.id = id;
    });
  }, []);
  return (
    <section id="hub-section" className="py-12 px-6 md:px-16">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Explore My Portfolio</h2>
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-0">
            {hubNav.map(({ id, label, Icon }, index) => (
              <div key={id} className="w-full flex flex-col items-center">
                <div
                  className="flex items-center justify-center p-6 rounded-full mb-4 border-4 border-[#0171DC] bg-base-100 text-base-content shadow-md"
                  style={{ boxShadow: '0 0 10px #0171DC, 0 0 20px #0171DC60, inset 0 0 10px #0171DC40' }}
                  title={label}
                >
                  <Icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <div
                  ref={el => sectionRefs.current[id] = el}
                  className="w-full bg-base-100 border border-base-300 rounded-xl shadow-lg p-6 mb-6"
                >
                  <h3 className="text-2xl font-bold mb-4">{label}</h3>
                  <div className="hub-content">
                    {id === "services" && <Services />}
                    {id === "skills" && <Skills />}
                    {id === "education" && <Education />}
                    {id === "experience" && <Experience />}
                    {id === "work" && <Work />}
                    {id === "contact" && <Contact />}
                  </div>
                </div>
                {index !== hubNav.length - 1 && (
                  <div className="h-12 w-1 my-2 bg-[#0171DC]" style={{ opacity: 0.6, boxShadow: '0 0 5px #0171DC40' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— AQUI TE DETENGO, justo antes de Services() ——— */


function Services() {
  const cards = [
    { emoji: "💡", title: "Idea Factory", desc: "I turn raw ideas into a clear, testable MVP.", bullets: ["Rapid research", "Simple roadmaps", "Agile prototypes"] },
    { emoji: "🧱", title: "Full-Stack Software", desc: "Modern web apps with React + Node, ready to scale.", bullets: ["Clean APIs", "Simple architecture", "Smooth UI"] },
    { emoji: "📱", title: "Android Apps", desc: "Native/hybrid prototypes built with Android Studio.", bullets: ["API consumption", "Testing", "Test-flight delivery"] },
    { emoji: "🎨", title: "UI/UX & Design", desc: "Clean, accessible interfaces with solid typography.", bullets: ["Tailwind + DaisyUI", "Design tokens", "A11y first"] },
    { emoji: "🔌", title: "Integrations", desc: "Stripe payments, auth, webhooks, and simple automations.", bullets: ["Stripe", "Webhooks", "Third-party APIs"] },
    { emoji: "🚀", title: "Deploy & Simple DevOps", desc: "Production environments and lightweight CI/CD.", bullets: ["Vercel", "Railway", "Secrets/Env management"] },
    { emoji: "🎯", title: "Creative Strategy", desc: "Helping projects find their voice and direction.", bullets: ["Brand concept & positioning", "Creative brainstorming", "Visual storytelling"] },
    { emoji: "✨", title: "Brand Development", desc: "Crafting memorable identities that stand out.", bullets: ["Logo design", "Brand guidelines", "Visual identity systems"] },
    { emoji: "🤝", title: "Collaboration", desc: "Working together to bring ideas to life.", bullets: ["Team coordination", "Client workshops", "Feedback integration"] },
    { emoji: "💩", title: "FUN", desc: "Because work should be enjoyable and life's too short to be serious all the time.", bullets: ["Party nights 🎊","Deep conversations 🌌","🍺, ☕ or 🍁 are welcome","🌴, 🌲 or 🏙️? I'm in!","Spontaneous adventures 🚀","Life is good"] },
  ];

  return (
    <div>
      {/* Grid: 2×2 en móvil, 3 columnas desde md */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className="h-full card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition relative"
          >
            {/* Emoji centrado arriba */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="text-2xl md:text-3xl bg-base-100 p-1.5 md:p-2 rounded-full border border-base-300 shadow-md">
                {c.emoji}
              </div>
            </div>

            <div className="card-body pt-7 md:pt-8 flex flex-col">
              <h3 className="card-title text-center text-sm md:text-base leading-tight">
                {c.title}
              </h3>

              <p className="opacity-80 text-center text-xs md:text-sm">
                {c.desc}
              </p>

              {/* Bullets visibles también en móvil para “toda la info” */}
              <ul className="mt-2 text-xs md:text-sm opacity-80 list-disc list-inside space-y-0.5 md:space-y-1">
                {c.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>

              <div className="mt-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




function Skills() {
  const groups = [
    { 
      title: " Programming Languages", 
      items: [
        { name: "Java", img: "java.png" },
        { name: "Python", img: "python.png" },
        { name: "HTML5", img: "html5.png" },
        { name: "CSS3", img: "css3.png" },
        { name: "JavaScript", img: "javascript.png" },
        { name: "Ruby", img: "ruby.png" },
      ]
    },
    { 
      title: " Frameworks & Libraries", 
      items: [
        { name: "React", img: "React.png" },
        { name: "Node.js", img: "nodejs.png" },
        { name: "Tailwind CSS", img: "tailwind.png" },
        { name: "DaisyUI", img: "daisyui.png" },
        { name: "Bootstrap", img: "bootstrap.png" },
        { name: "Font Awesome", img: "fontawesome.png" },
        { name: "JavaFX", img: "javafx.png" },
        { name: "Jakarta EE", img: "jakartaee.png" },
        { name: "JDBC", img: "jdbc.png" },
      ]
    },
    { 
      title: " Databases", 
      items: [
        { name: "MySQL", img: "mysql.png" },
        { name: "MongoDB Compass", img: "mongodb.png" },
      ]
    },
    { 
      title: " Tools & IDEs", 
      items: [
        { name: "Git", img: "git.png" },
        { name: "GitHub", img: "github.png" },
        { name: "VS Code", img: "vscode.png" },
        { name: "Postman", img: "postman.png" },
        { name: "Cisco Packet Tracer", img: "cisco.png" },
        { name: "SceneBuilder", img: "scenebuilder.png" },
        { name: "Android Studio", img: "androidstudio.png" },
        { name: "IntelliJ IDEA", img: "intellij.png" },
        { name: "Apache Tomcat", img: "tomcat.png" },
        { name: "NetBeans", img: "netbeans.png" },
        { name: "Maven", img: "maven.png" },
        { name: "Vercel", img: "vercel.png" },
        { name: "Figma", img: "figma.png" },
      ]
    },
    { 
      title: " Operating Systems & Others", 
      items: [
        { name: "Windows", img: "windows.png" },
        { name: "Linux", img: "linux.png" },
        { name: "Weka", img: "weka.png" },
        { name: "REST APIs", img: "restapis.png" },
        { name: "JSON", img: "json.png" },
      ]
    },
    { 
      title: "🎨 Music & Creative", 
      items: [
        { name: "Ableton Live", img: "ableton.png" },
        { name: "Ableton Note", img: "abletonote.jpg" },
        { name: "FL Studio", img: "flstudio.png" },
        { name: "Photoshop", img: "photoshop.png" },
        { name: "Canva", img: "canva.png" },
        { name: "Sonic Pi", img: "sonicpi.png" },
      ]
    },
  ];

  const softSkills = [
    "Leadership", "Communication", "Teamwork", "Problem solving", "Adaptability", 
    "Creativity", "Time management", "Ownership", "Growth mindset", "Critical thinking",
    "Collaboration", "Decision making", "Conflict resolution", "Emotional intelligence",
    "Attention to detail", "Learning agility", "Resilience", "Networking", "Mentorship", "Initiative"
  ];

   return (
    <div className="space-y-12">
      {/* Solo descripción, ya no el segundo "Skills" */}
      <div className="text-center mb-10 -mt-4">
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          My technical expertise and personal attributes that help me tackle challenges 
          and deliver quality solutions.
        </p>
      </div>

      {/* Habilidades técnicas */}
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="text-xl md:text-2xl font-semibold mb-5">{g.title}</h3>
          <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            {g.items.map((it) => (
              <div key={it.name} className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-base-200 transition">
                <img 
                  src={`/img/${it.img}`} 
                  alt={it.name} 
                  className="w-10 h-10 mx-auto mb-2 object-contain" 
                  loading="lazy" 
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5z'/%3E%3C/svg%3E";
                  }}
                />
                <h4 className="text-xs font-medium text-center leading-tight">{it.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span key={s} className="badge badge-lg badge-primary">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education() {
  const degrees = [
    {
      logo: "/img/utl.png",
      school: "Universidad Tecnológica de León",
      program: "Bachelor's in Information Technology Engineering, Software Development",
      dates: "Aug 2025 – Apr 2027 (in progress)",
      about: "Advanced engineering program with emphasis on software architecture, data engineering, and enterprise-grade applications.",
      tags: ["Software Architecture", "Data Engineering", "Enterprise Apps"],
      status: "in-progress"
    },
    {
      logo: "/img/utl.png",
      school: "Universidad Tecnológica de León",
      program: "Technical University Degree (TSU), Information Technology — Software Development",
      dates: "Sep 2023 – Aug 2025",
      grade: "9",
      about: "Two-year technical program focused on full-stack web development, database design, and deployment of enterprise applications.",
      activities: [
        "Final internship: Web Reporting System for Centro Automotriz El Rosario S.A. de C.V.",
        "Integrative Project: Agenda MediKids — pediatric dosage calculator + doctors' agenda + guardians' accounts",
      ],
      tags: ["Full-Stack", "Databases", "Deployment"],
      status: "completed"
    },
  ];

  // Badges para certificados (modo arcade)
  const badges = [
    {
      id: "google-ux-1",
      title: "Aspectos básicos del diseño de la experiencia del usuario",
      provider: "Google (Coursera)",
      issued: "Jun 2024",
      credentialId: "F3UYRY5SNXNV",
      href: "https://www.coursera.org/account/accomplishments/verify/F3UYRY5SNXNV",
      badge: "/img/coursera.png",
      status: "completed",
      rarity: "common"
    },
    {
      id: "google-ux-2",
      title: "Primeros pasos en el proceso de diseño de UX: Empatizar, definir e idear",
      provider: "Google (Coursera)",
      issued: "Jul 2024",
      credentialId: "D638VUJDDA9N",
      href: "https://www.coursera.org/account/accomplishments/verify/D638VUJDDA9N",
      badge: "/img/coursera.png",
      status: "completed",
      rarity: "common"
    },
    {
      id: "google-ux-3",
      title: "Crear esquemas de página y prototipos de baja fidelidad",
      provider: "Google (Coursera)",
      issued: "Aug 2024",
      credentialId: "28AS31DH2B7L",
      href: "https://www.coursera.org/account/accomplishments/verify/28AS31DH2B7L",
      badge: "/img/coursera.png",
      status: "completed",
      rarity: "common"
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
      details: [
        { label: "Badge Status", value: "Visible" },
        { label: "Issuing Organization", value: "Cisco" },
        { label: "Description", value: "Cisco verifies successful completion of curriculum outcomes." },
      ],
      skills: ["Ethernet","IP connectivity","IP services","IP Subnetting","IPv4 And IPv6 Addressing","Network Fundamentals","Security Fundamentals","Switching"],
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
      details: [
        { label: "Badge Status", value: "Visible" },
        { label: "Issuing Organization", value: "Cisco" },
      ],
      skills: ["Access Connectivity","Access Security","First-hop Redundancy","High Availability","IP services","Routing","Switching Protocols","Wireless LAN Controllers"],
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
      pdf: "/Partner-_NDG_Linux_Essentials_certificate_83955-alumnos-utleon-edu-mx_e2087d0c-dc61-4795-8c46-800230c90066.pdf",
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Degrees</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {degrees.map((d) => <DegreeCard key={d.program} {...d} />)}
        </div>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Certificates Collection</h3>
        <p className="text-sm opacity-80 mb-6 text-center">My achievements unlocked! Hover or click for details.</p>
        
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {badges.map((badge) => (
            <ArcadeBadge key={badge.id} {...badge} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente DegreeCard actualizado con efecto "In Progress" en la imagen
function DegreeCard({ logo, school, program, dates, grade, about, tags = [], activities = [], status }) {
  const isInProgress = status === "in-progress";
  
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition">
      <div className="card-body">
        <div className="flex items-start gap-4">
          {/* Contenedor de la imagen con efecto de progreso */}
          <div className="relative">
            <img 
              src={logo} 
              alt={`${school} logo`} 
              className={`w-12 h-12 object-contain rounded ${isInProgress ? "filter grayscale contrast-75" : ""}`}
            />
            {isInProgress && (
              <div className="absolute inset-0 bg-black/50 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs rotate-[-20deg]">IN PROGRESS</span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="card-title leading-tight">{school}</h3>
            <p className="text-sm opacity-80">{program}</p>
            <p className="text-xs opacity-70 mt-1">{dates}{grade ? ` • Grade: ${grade}` : ""}</p>
          </div>
        </div>
        {about && <p className="mt-3 opacity-90 text-sm">{about}</p>}
        {activities.length > 0 && (
          <ul className="mt-2 text-sm list-disc list-inside opacity-90">
            {activities.map((a) => <li key={a}>{a}</li>)}
          </ul>
        )}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => <span key={t} className="badge badge-outline">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

// Componente ArcadeBadge actualizado con mejor efecto "In Progress"
function ArcadeBadge({ title, provider, issued, badge, status, rarity, href, pdf, details, skills, credentialId, expires }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const isInProgress = status === "in-progress";
  
  // Estilos según rareza
  const rarityStyles = {
    common: "border-gray-400 shadow",
    uncommon: "border-green-500 shadow-md shadow-green-500/20",
    rare: "border-blue-500 shadow-lg shadow-blue-500/30",
    epic: "border-purple-500 shadow-xl shadow-purple-500/40",
    legendary: "border-yellow-500 shadow-2xl shadow-yellow-500/50"
  };
  
  // Manejar clic para mostrar detalles
  const handleClick = () => {
    if (!isInProgress) {
      setShowDetails(true);
    }
  };
  
  return (
    <>
      <div 
        className={`relative bg-base-100 rounded-xl p-3 border-2 transition-all duration-300 transform hover:scale-105 cursor-pointer ${rarityStyles[rarity] || rarityStyles.common}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Badge image */}
        <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-lg bg-base-200 flex items-center justify-center">
          {badge ? (
            <img 
              src={badge} 
              alt={title} 
              className={`w-full h-full object-contain p-2 ${isInProgress ? "filter grayscale contrast-75" : ""}`}
              loading="lazy"
            />
          ) : (
            <div className="text-3xl">🏆</div>
          )}
          
          {/* Overlay para certificados en progreso */}
          {isInProgress && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm rotate-[-20deg] tracking-wider">IN PROGRESS</span>
            </div>
          )}
        </div>
        
        {/* Badge title (solo se muestra al hacer hover) */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-base-100/90 backdrop-blur p-2 rounded-b-xl border-t border-base-300">
            <h4 className="text-xs font-bold text-center truncate" title={title}>{title}</h4>
            <p className="text-[10px] opacity-70 text-center truncate">{provider}</p>
          </div>
        )}
        
        {/* Efecto de brillo para rarezas superiores */}
        {(rarity === "rare" || rarity === "epic" || rarity === "legendary") && !isInProgress && (
          <div className={`absolute inset-0 rounded-xl pointer-events-none ${isHovered ? "opacity-100" : "opacity-30"} transition-opacity duration-300`}
               style={{
                 boxShadow: `0 0 15px ${rarity === "rare" ? "#3b82f6" : rarity === "epic" ? "#a855f7" : "#eab308"} inset`,
               }}>
          </div>
        )}
      </div>
      
      {/* Modal de detalles */}
      {showDetails && (
        <div className="modal modal-open" onClick={() => setShowDetails(false)}>
          <div className="modal-box max-w-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setShowDetails(false)}>✕</button>
            
            <div className="flex items-center gap-4 mb-4">
              <img src={badge} alt={title} className="w-16 h-16 object-contain rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm opacity-80">{provider}</p>
                <p className="text-xs opacity-70 mt-1">Issued {issued}</p>
                {credentialId && <p className="text-xs opacity-70">Credential ID: {credentialId}</p>}
                {expires && <p className="text-xs opacity-70">Expires: {expires}</p>}
              </div>
            </div>
            
            {details && details.length > 0 && (
              <div className="mb-4">
                {details.map((detail, index) => (
                  <div key={index} className="text-sm mb-1">
                    <span className="font-medium">{detail.label}:</span> {detail.value}
                  </div>
                ))}
              </div>
            )}
            
            {skills && skills.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="badge badge-ghost badge-sm">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="modal-action">
              {href && (
                <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Verify Credential
                </a>
              )}
              {pdf && (
                <a href={pdf} target="_blank" rel="noreferrer" className="btn btn-outline">
                  View PDF
                </a>
              )}
              <button className="btn" onClick={() => setShowDetails(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Experience() {
  const projects = [
    {
      year: "2023",
      title: "Pokédex App",
      img: "/img/pokedexapp.png",
      desc: "Aplicación Android estilo retro (25 bits) conectada a la PokéAPI. Permitía buscar Pokémon, mostrar stats y almacenarlos localmente.",
      bullets: [
        "Implementación de consumo de APIs REST",
        "Gestión de datos locales con SQLite",
        "UI retro estilo pixel art"
      ],
      tags: ["Android Studio", "SQLite", "PokéAPI"],
      color: "red"
    },
    {
      year: "2023",
      title: "Formulario CRUD Android",
      img: "/img/crudandroid.png",
      desc: "App CRUD para alta, baja, modificación y consulta de usuarios en móviles. Desarrollada como práctica de bases de datos locales.",
      bullets: [
        "CRUD completo",
        "Validaciones de datos",
        "Base de datos SQLite embebida"
      ],
      tags: ["Android Studio", "SQLite"],
      color: "green"
    },
    {
      year: "2023",
      title: "Sistema DAQ",
      img: "/img/daq.png",
      desc: "Diseñé un sistema que recolectaba datos de sensores de temperatura y humedad, visualizados en tiempo real y almacenados para análisis posterior.",
      bullets: [
        "Integración con sensores mediante Arduino",
        "Monitoreo en tiempo real",
        "Interfaz gráfica con NetBeans"
      ],
      tags: ["Arduino", "NetBeans", "Dweet.io"],
      color: "blue"
    },
    {
      year: "2023",
      title: "API CRUD El Zarape",
      img: "/img/Elzarape.png",
      desc: "Diseñé una API RESTful para operaciones CRUD en el punto de venta del restaurante. Proyecto backend con pruebas de endpoints.",
      bullets: [
        "Diseño de endpoints REST",
        "Base de datos MySQL",
        "Pruebas con Postman"
      ],
      tags: ["Java", "MySQL", "Tomcat", "NetBeans"],
      color: "mexican"
    },
    {
      year: "2023",
      title: "AppMedik",
      img: "/img/appmedik.png",
      desc: "Aplicación móvil pediátrica para gestión de citas médicas dosificación de medicamentos. Incluyó autenticación y panel para doctores/tutores.",
      bullets: [
        "Arquitectura híbrida con Node.js + MongoDB",
        "Autenticación de usuarios",
        "Despliegue en AWS EC2"
      ],
      tags: ["Android Studio", "Node.js", "MongoDB", "AWS"],
      color: "pink"
    },
    {
      year: "2024",
      title: "Sistema de Reportes Vehiculares",
      img: "/img/auto.png",
      desc: "Proyecto de estadías profesionales: plataforma web para centralizar reportes de verificación vehicular en 5 sucursales.",
      bullets: [
        "Full-stack con React, Node.js y MySQL",
        "Autenticación por roles",
        "Exportación de reportes en CSV and PDF",
        "Despliegue en Vercel y Railway"
      ],
      tags: ["React", "Node.js", "MySQL", "Tailwind", "JWT"],
      color: "forest"
    },
    {
      year: "2025",
      title: "KalonStudio",
      img: "/img/kalon.png",
      desc: "Plataforma web para gestión de clases, coaches y pagos de un estudio de pilates. Proyecto no concluido, pero con repositorio disponible.",
      bullets: [
        "Módulos de clientes, paquetes y clases",
        "Pagos con Stripe",
        "Migración a Railway (backend + DB)"
      ],
      tags: ["React", "Node.js", "MySQL", "Stripe", "Railway"],
      color: "brown"
    },
    {
      year: "2025",
      title: "Instaxia: Bots Cool",
      img: "/img/ryan.png",
      desc: "Landing page moderna para Instaxia, mostrando features, pricing y FAQs en un diseño colorido y responsivo.",
      bullets: [
        "Diseño con Tailwind y DaisyUI",
        "Dark/light mode funcional",
        "Optimización SEO inicial"
      ],
      tags: ["React", "Tailwind", "DaisyUI"],
      color: "purple-pink"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileScrollPosition, setMobileScrollPosition] = useState(0);

  // Función para obtener el color según la posición
  const getColorByPosition = (index) => {
    const colors = ["red", "green", "blue", "mexican", "pink", "forest", "brown", "purple-pink"];
    return colors[index % colors.length];
  };

  const getBorderColorClass = (color) => {
    switch(color) {
      case 'red': return 'border-red-500';
      case 'green': return 'border-green-500';
      case 'blue': return 'border-blue-400';
      case 'mexican': return 'border-green-600';
      case 'pink': return 'border-pink-300';
      case 'forest': return 'border-green-800';
      case 'brown': return 'border-yellow-800';
      case 'purple-pink': return 'border-purple-500';
      default: return 'border-gray-400';
    }
  };

  const getLineColorClass = (color) => {
    switch(color) {
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-400';
      case 'mexican': return 'bg-green-600';
      case 'pink': return 'bg-pink-300';
      case 'forest': return 'bg-green-800';
      case 'brown': return 'bg-yellow-800';
      case 'purple-pink': return 'bg-purple-500';
      default: return 'bg-gray-400';
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
      document.body.style.overflow = 'hidden';  // <- añade
  };

  const closeModal = () => {
    setIsModalOpen(false);
      document.body.style.overflow = 'auto';    // <- añade

    setTimeout(() => setSelectedProject(null), 300);
  };

  // Animación de pulse en íconos (desktop y mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      const icons = document.querySelectorAll('.experience-icon');
      icons.forEach(icon => {
        icon.classList.add('animate-pulse');
        setTimeout(() => icon.classList.remove('animate-pulse'), 1000);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Detectar posición centrada en móvil
  const handleScroll = (e) => {
    const container = e.target;
    const scrollPos = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const itemWidth = 160; // ancho aprox de cada card
    const centerPosition = scrollPos + (containerWidth / 2);
    const activeIndex = Math.floor(centerPosition / itemWidth);
    setMobileScrollPosition(activeIndex);
  };

  return (
    <Section id="experience" title="Experience">
      {/* ---- Desktop ---- */}
      <div className="hidden md:block">
        <div className="relative flex justify-center items-center py-8 mb-12">
          {/* Línea base */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-base-300 opacity-40 transform -translate-y-1/2 z-0"></div>
          
          <div className="relative flex justify-between w-full max-w-5xl z-10">
            {projects.map((project, index) => {
              const color = getColorByPosition(index);
              const isLast = index === projects.length - 1;
              const isActive = hoveredIndex !== null && index <= hoveredIndex; // 🔥 encender hasta el hovered

              return (
                <div 
                  key={index}
                  className="relative flex flex-col items-center group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Línea conectora solo hasta el siguiente */}
                  {!isLast && (
                    <div 
                      className={`absolute top-1/2 left-1/2 h-1 transform -translate-y-1/2 ${getLineColorClass(color)} transition-all duration-500`}
                      style={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0.2
                      }}
                    ></div>
                  )}
                  
                  {/* Círculo */}
                  <div 
                    className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center border-4 ${getBorderColorClass(color)} bg-base-100 overflow-hidden p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl experience-icon ${isActive ? 'scale-110 shadow-lg' : ''}`}
                    onClick={() => openModal(project)}
                  >
                    <img src={project.img} alt={project.title} className="w-full h-full object-contain" />
                    <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="absolute top-full mt-4 w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-sm font-semibold text-primary">{project.year}</div>
                    <div className="text-xs font-medium truncate">{project.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---- Mobile ---- */}
      <div className="md:hidden relative">
        <div 
          className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          onScroll={handleScroll}
        >
          <div className="flex space-x-8 px-8" style={{ minWidth: 'max-content' }}>
            {projects.map((project, index) => {
              const color = getColorByPosition(index);
              const isActive = mobileScrollPosition === index;

              return (
                <div 
                  key={index}
                  className="flex flex-col items-center w-32 flex-shrink-0 snap-center relative"
                  onClick={() => openModal(project)}
                >
                  {/* Línea conectora desde el anterior */}
                  {index > 0 && (
                    <div 
                      className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-1 ${getLineColorClass(color)} transition-all duration-500`}
                      style={{
                        width: isActive ? "2rem" : "0rem",
                        opacity: isActive ? 1 : 0.2
                      }}
                    ></div>
                  )}

                  {/* Icono */}
                  <div 
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 ${getBorderColorClass(color)} bg-base-100 overflow-hidden p-2 cursor-pointer transition-all duration-300 experience-icon ${isActive ? 'scale-110 shadow-lg' : ''}`}
                  >
                    <img src={project.img} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Info */}
                  <div className="text-center mt-3">
                    <div className="text-xs font-semibold text-primary">{project.year}</div>
                    <div className="text-xs font-medium truncate">{project.title.split(' ')[0]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${mobileScrollPosition === index ? 'bg-primary scale-125' : 'bg-base-300'}`}
            ></div>
          ))}
        </div>
        <div className="text-center mt-2 text-xs opacity-70">Desliza para ver más proyectos</div>
      </div>

      {/* ---- Modal ---- */}
      {selectedProject && (
        <div className={`modal ${isModalOpen ? 'modal-open' : ''}`} onClick={closeModal}>
          <div className="modal-box max-w-4xl relative p-0" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-sm btn-circle absolute right-4 top-4 z-10 bg-base-100/80 backdrop-blur" onClick={closeModal}>✕</button>
            
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 p-6 bg-base-200 flex items-center justify-center">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-auto max-h-64 object-contain rounded-lg shadow-xl" />
              </div>
              <div className="w-full lg:w-3/5 p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-lg text-primary font-semibold mb-4">{selectedProject.year}</p>
                <p className="opacity-90 mb-4">{selectedProject.desc}</p>
                {selectedProject.bullets?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Características:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.bullets.map((b, i) => (
                        <li key={i} className="opacity-90">{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedProject.tags?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="badge badge-primary badge-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Section>
  );
}

function Work() {
  const [activeTab, setActiveTab] = useState("dev");

  // ---------- DATA ----------
  const projects = [
    { title: "Pokédex App", img: "/img/pokedexapp.png", desc: "Aplicación Android estilo 25 bits que consume la PokéAPI.", tools: ["Android Studio", "PokéAPI", "SQLite"], type: "app" },
    { title: "Formulario de Usuarios (CRUD)", img: "/img/crudandroid.png", desc: "App Android para gestión de usuarios con operaciones CRUD.", tools: ["Android Studio", "SQLite"], type: "app" },
    { title: "Sistema DAQ — Monitoreo de Sensores", img: "/img/daq.png", desc: "Sistema para interactuar con sensores de temperatura y humedad.", tools: ["Arduino", "NetBeans", "Dweet.io"], type: "repo" },
    { title: "API CRUD Restaurante 'El Zarape'", img: "/img/Elzarape.png", desc: "Servicios RESTful para gestionar operaciones CRUD.", tools: ["MySQL", "Tomcat", "NetBeans"], type: "repo" },
    { title: "AppMedik", img: "/img/appmedik.png", desc: "Aplicación móvil pediátrica para citas médicas.", tools: ["Android Studio", "Node.js", "MongoDB"], type: "app" },
    { title: "Sistema de Reportes Vehiculares", img: "/img/auto.png", desc: "Sistema web para reportes operativos de un centro automotriz.", tools: ["React", "Node.js", "MySQL"], type: "web" },
    { title: "KalonStudio", img: "/img/kalon.png", desc: "Plataforma web para gestión de estudios de pilates.", tools: ["React", "Node.js", "MySQL", "Stripe"], link: "https://github.com/jeezly/kalonstudio", type: "web" },
    { title: "Instaxia: Bots Cool", img: "/img/ryan.png", desc: "Landing page moderna para Instaxia.", tools: ["React", "Tailwind", "DaisyUI"], type: "web" },
  ];

  const tracks = [
    { title: "JEYPEEH", cover: "/img/covers/jeypeeh.jpg", src: "/music/beat1.mp3", tags: ["Lo-fi / Trap", "120 BPM", "FL Studio"], year: "2024" },
  ];

  // ---------- STATE ----------
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openProject = (project) => { setSelectedProject(project); setIsModalOpen(true); };
  const closeProject = () => { setIsModalOpen(false); setTimeout(() => setSelectedProject(null), 250); };

  // ---------- VIEWS ----------
  const DevGrid = () => (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {projects.map((project, index) => {
          const rotation = index % 4 === 0 ? 1 : index % 4 === 1 ? -2 : index % 4 === 2 ? 3 : -1;
          const scale = index % 3 === 0 ? 1.05 : index % 3 === 1 ? 0.95 : 1;
          const animationDelay = `${index * 0.1}s`;

          return (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{ transform: `rotate(${rotation}deg) scale(${scale})`, transition: 'transform 0.5s ease', animation: `float 3s ease-in-out ${animationDelay} infinite alternate` }}
              onClick={() => openProject(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                className={`w-full h-auto object-contain mx-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110
                  ${["AppMedik","API CRUD Restaurante 'El Zarape'","Pokédex App"].includes(project.title) ? "max-h-56" : "max-h-48"}`}
                loading="lazy"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 rounded-xl"></div>
              {isMobile && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/70 rounded-full p-2 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="text-xs text-white bg-black/70 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Tap for details</span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal de proyecto */}
      {selectedProject && (
        <div className={`modal ${isModalOpen ? 'modal-open' : ''}`} onClick={closeProject}>
          <div className="modal-box max-w-3xl relative p-0" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-sm btn-circle absolute right-4 top-4 z-10 bg-base-100/80 backdrop-blur" onClick={closeProject}>✕</button>

            <div className="flex flex-col">
              <div className="w-full p-6 bg-base-200">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-64 object-contain mx-auto rounded-lg shadow-xl"
                  style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.3))' }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="opacity-90 mb-4">{selectedProject.desc}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, i) => <span key={i} className="badge badge-primary badge-sm">{tool}</span>)}
                  </div>
                </div>
                <div className="bg-base-200 rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold mb-2">
                    {selectedProject.type === "app" && "📱 Mobile Application"}
                    {selectedProject.type === "repo" && "💾 Code Repository"}
                    {selectedProject.type === "web" && "🌐 Web Application"}
                  </div>
                  <p className="text-sm opacity-80 mb-4">Project details coming soon!</p>
                  <div className="flex justify-center gap-4">
                    {selectedProject.link ? (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View Project</a>
                    ) : (
                      <button className="btn btn-primary btn-sm btn-disabled">Project Preview</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );

  const MusicGrid = () => (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-12">
        {tracks.map((track, index) => {
          const isPlaying = playingIndex === index;
          return (
            <div key={index} className="w-full max-w-2xl">
              <div className="relative flex justify-center mb-8">
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-black border-8 border-base-300 shadow-xl ${isPlaying ? 'animate-spin-slow' : ''}`}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-base-100 border-4 border-base-300 flex items-center justify-center shadow-inner z-20">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-base-300"></div>
                    </div>
                  </div>
                  {track.cover && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-base-100 z-10 vinyl-cover-mask">
                      <img src={track.cover} alt={track.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{track.title}</h3>
                {track.year && <span className="text-sm opacity-70">{track.year}</span>}
                {!!track.tags?.length && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {track.tags.map((tag, i) => <span key={i} className="badge badge-outline badge-sm">{tag}</span>)}
                  </div>
                )}
              </div>

              <div className="bg-base-100 rounded-xl p-6 shadow-md">
                <audio
                  controls
                  preload="metadata"
                  className="w-full"
                  onPlay={() => setPlayingIndex(index)}
                  onPause={() => setPlayingIndex((p) => (p === index ? null : p))}
                  onEnded={() => setPlayingIndex((p) => (p === index ? null : p))}
                >
                  <source src={track.src} type="audio/mpeg" />
                  Tu navegador no soporta audio.
                </audio>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Section id="work" title="My Work">
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-boxed max-w-md mx-auto mb-8">
        <button role="tab" className={`tab ${activeTab === 'dev' ? 'tab-active' : ''}`} onClick={() => setActiveTab('dev')}>Dev</button>
        <button role="tab" className={`tab ${activeTab === 'music' ? 'tab-active' : ''}`} onClick={() => setActiveTab('music')}>Music</button>
      </div>

      {/* Content */}
      {activeTab === "dev" ? (
        <>
          <p className="text-lg opacity-80 max-w-2xl mx-auto text-center mb-8">
            A collection of software projects. {isMobile ? 'Tap' : 'Click'} any image to see details.
          </p>
          <DevGrid />
        </>
      ) : (
        <>
          <p className="text-lg opacity-80 max-w-2xl mx-auto text-center mb-8">
            Algunos beats que voy produciendo. Si te laten, escríbeme y armamos algo 😊
          </p>
          <MusicGrid />
        </>
      )}
    </Section>
  );
}


function Contact() {
  const socials = [
    { name: "Email",     href: "mailto:heezly123@gmail.com",                             handle: "heezly123@gmail.com",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"/></svg>) },
    { name: "GitHub",    href: "https://github.com/jeezly",                              handle: "@jeezly",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.8 1.02A9.7 9.7 0 0112 6.8c.86 0 1.72.12 2.53.36 1.95-1.29 2.8-1.02 2.8-1.02.55 1.38.20 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0012 2z"/></svg>) },
    { name: "LinkedIn",  href: "https://www.linkedin.com/in/juan-pablo-garcia-hernandez-0a7436320/", handle: "Juan Pablo García Hernández",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M6.94 6.5A2.44 2.44 0 114.5 4.06 2.44 2.44 0 016.94 6.5zM4.75 8.75h4.38v10.5H4.75zM14 8.44a4.36 4.36 0 00-3.5 1.8V8.75H6.13v10.5h4.38v-5.9c0-1.56.86-2.56 2.2-2.56s1.98.83 1.98 2.56v5.9h4.38v-6.42c0-3.43-1.83-5.39-4.07-5.39z"/></svg>) },
    { name: "X (Twitter)", href: "https://x.com/jeypeeh_?s=21",                          handle: "@jeypeeh_",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M18 2h3l-7.5 8.5L22 22h-6l-4.5-6L7 22H4l8-9.5L4 2h6l4 5.5L18 2z"/></svg>) },
    { name: "Instagram", href: "https://www.instagram.com/jey_peeh/",                    handle: "@jey_peeh",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>) },
    { name: "Facebook",  href: "https://www.facebook.com/heezly/",                       handle: "heezly",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>) },
    { name: "TikTok",    href: "https://www.tiktok.com/@jey_peeh?_t=ZS-8z1gzLV6oC2&_r=1", handle: "@jey_peeh",
      icon: (<svg viewBox="0 0 24 24" className="h-7 w-7"><path fill="currentColor" d="M21 8.1a6.9 6.9 0 01-4.1-1.4V16a6 6 0 11-6-6 6 6 0 01.9.07V12a3.5 3.5 0 103.5 3.5V2h3.1a6.9 6.9 0 003.6 5.2z"/></svg>) },
  ];

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          Let’s connect! Aquí están mis redes y contacto directo.
        </p>
      </div>

      {/* Grid 3x3 en desktop, 2 columnas en móvil */}
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target={s.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="group rounded-xl p-6 bg-base-100 border border-base-300 hover:bg-base-200 transition flex flex-col items-center justify-center text-center"
          >
            <div className="btn btn-circle btn-ghost mb-3 group-hover:scale-110 transition">{s.icon}</div>
            <div className="font-semibold leading-tight">{s.name}</div>
            <div className="text-sm opacity-70 truncate max-w-[180px]">{s.handle}</div>
          </a>
        ))}
      </div>

      {/* ⛔️ quitamos el botón de Download CV */}
    </div>
  );
}


export default function App() {
  const [activeHubSection, setActiveHubSection] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigateToSection = (sectionId) => {
    setActiveHubSection(sectionId);
  };

  return (
    <div className="bg-base-200 min-h-screen transition-colors duration-300">
      <style>{`
        :root[data-theme="skull"]{
          --neon: #0171DC;
          --neon-6: #0171dc80;
          --neon-4: #0171dc60;
          --neon-2: #0171dc33;
        }
        :root[data-theme="skull"] {
          --p: 0 100% 41%;
          --pc: 0 0% 100%;
          --b1: 0 0% 0%;
          --b2: 0 0% 2%;
          --b3: 213 99% 43%;
          --bc: 0 0% 100%;
          --s: 213 99% 43%;
          --sc: 0 0% 100%;
          --a: 213 99% 43%;
          --ac: 0 0% 100%;
          --n: 0 0% 4%;
          --nc: 220 13% 90%;
          --rounded-box: 1rem;
          --rounded-btn: 0.75rem;
          --rounded-badge: 9999px;
          --tab-radius: 0.5rem;
        }
        :root[data-theme="skull"] body { background-color: #000; }
        :root[data-theme="skull"] h1,
        :root[data-theme="skull"] h2,
        :root[data-theme="skull"] h3,
        :root[data-theme="skull"] .card-title {
          text-shadow: 0 0 6px var(--neon-6), 0 0 14px var(--neon-4);
        }
        :root[data-theme="skull"] .card,
        :root[data-theme="skull"] .btn,
        :root[data-theme="skull"] .badge,
        :root[data-theme="skull"] .menu :where(li>a),
        :root[data-theme="skull"] .navbar,
        :root[data-theme="skull"] .modal-box,
        :root[data-theme="skull"] .timeline .card,
        :root[data-theme="skull"] .divider,
        :root[data-theme="skull"] .tabs,
        :root[data-theme="skull"] .steps,
        :root[data-theme="skull"] .table,
        :root[data-theme="skull"] .alert,
        :root[data-theme="skull"] .hero .card,
        :root[data-theme="skull"] .border,
        :root[data-theme="skull"] .ring {
          box-shadow: 0 0 6px var(--neon-6), 0 0 14px var(--neon-4);
        }
        :root[data-theme="skull"] .card:hover,
        :root[data-theme="skull"] .btn:hover,
        :root[data-theme="skull"] .menu :where(li>a:hover) {
          box-shadow: 0 0 8px var(--neon-6), 0 0 18px var(--neon-4);
        }
        :root[data-theme="skull"] input,
        :root[data-theme="skull"] select,
        :root[data-theme="skull"] textarea {
          box-shadow: 0 0 6px var(--neon-2);
          border-color: #0171DC !important;
        }
        :root[data-theme="skull"] hr,
        :root[data-theme="skull"] .timeline hr {
          border-color: #0171DC !important;
          box-shadow: 0 0 6px var(--neon-6);
        }
        :root[data-theme="skull"] a { text-decoration-color: #0171DC; }

        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        audio[paused] ~ .animate-spin-slow { animation-play-state: paused; }
        .vinyl-cover-mask { mask: radial-gradient(circle, transparent 30%, black 31%); -webkit-mask: radial-gradient(circle, transparent 30%, black 31%); }
      `}</style>

      {/* Header móvil con botón ☰ */}
      <MobileHeader onOpen={() => setMobileOpen(true)} />

      {/* Sidebar móvil (overlay deslizante) */}
      <MobileSidebarOverlay open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Sidebar onNavigateToSection={handleNavigateToSection} onClose={() => setMobileOpen(false)} />
      </MobileSidebarOverlay>

      <div className="md:flex">
        {/* Sidebar de escritorio */}
        <div className="hidden md:block">
          <Sidebar onNavigateToSection={handleNavigateToSection} />
        </div>

        <main className="w-full md:ml-[280px]">
          <Hero />
          <div className="px-6 md:px-16 py-16 space-y-20">
            <About />
            <ExpandableHub
              activeSection={activeHubSection}
              onSectionChange={setActiveHubSection}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
