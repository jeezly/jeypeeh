import { useEffect, useMemo, useRef, useState } from "react";

function SkillGrid({ items, compact = false }) {
  return (
    <div
      className={[
        "grid gap-3",
        compact
          ? "grid-cols-3"
          : "grid-cols-3 sm:grid-cols-4 xl:grid-cols-5",
      ].join(" ")}
    >
      {items.map((it) => (
        <div
          key={`${it.name}-${it.img}`}
          className="group rounded-2xl border border-base-300 bg-base-200/35 p-3 md:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-base-200"
        >
          <img
            src={`/img/${it.img}`}
            alt={it.name}
            className="w-9 h-9 md:w-11 md:h-11 object-contain mb-3 transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <h4 className="text-[11px] md:text-xs font-bold leading-tight">
            {it.name}
          </h4>
        </div>
      ))}
    </div>
  );
}

function CategoryBlock({ group, compact = false }) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="mb-4">
        <div className={`text-sm font-bold ${group.accent}`}>
          {group.title}
        </div>
        <p className="text-xs opacity-65 mt-1">{group.description}</p>
      </div>

      <SkillGrid items={group.items} compact={compact} />
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeGroup, setActiveGroup] = useState("languages");
  const [mobileDetail, setMobileDetail] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const baseGroups = useMemo(
    () => [
      {
        id: "languages",
        title: "Languages",
        description:
          "Core languages I use or I’m currently learning for web, mobile, school, and backend projects.",
        accent: "text-yellow-500",
        border: "border-yellow-400",
        items: [
          { name: "Java", img: "java.png" },
          { name: "Python", img: "python.png" },
          { name: "HTML5", img: "html5.png" },
          { name: "CSS3", img: "css3.png" },
          { name: "JavaScript", img: "javascript.png" },
          { name: "Ruby", img: "ruby.png" },
          { name: "C#", img: "csharp.png" },
          { name: "Kotlin", img: "kotlin.png" },
        ],
      },
      {
        id: "web",
        title: "Web & Frontend",
        description:
          "UI frameworks, component libraries, and styling tools for modern responsive interfaces.",
        accent: "text-cyan-500",
        border: "border-cyan-400",
        items: [
          { name: "React", img: "React.png" },
          { name: "Tailwind CSS", img: "tailwind.png" },
          { name: "DaisyUI", img: "daisyui.png" },
          { name: "Flowbite", img: "flowbite.png" },
          { name: "Bootstrap", img: "bootstrap.png" },
          { name: "Font Awesome", img: "fontawesome.png" },
          { name: "JavaFX", img: "javafx.png" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        description:
          "Backend tools I have used for APIs, server-side logic, and database-connected systems.",
        accent: "text-green-500",
        border: "border-green-400",
        items: [
          { name: "Node.js", img: "nodejs.png" },
          { name: "Flask", img: "flask.png" },
          { name: "SQLAlchemy", img: "sqlalchemy.png" },
          { name: "Jakarta EE", img: "jakartaee.png" },
          { name: "JDBC", img: "jdbc.png" },
        ],
      },
      {
        id: "data",
        title: "Data & Storage",
        description:
          "Databases, data formats, exports, and recovery practices I’ve worked with.",
        accent: "text-emerald-500",
        border: "border-emerald-400",
        items: [
          { name: "MySQL", img: "mysql.png" },
          { name: "MongoDB Compass", img: "mongodb.png" },
          { name: "PyMongo", img: "mongodb.png" },
          { name: "PyMySQL", img: "pymysql.png" },
          { name: "JSON", img: "json.png" },
          { name: "REST APIs", img: "restapis.png" },
          { name: "DB Export", img: "dbexport.png" },
          { name: "DB Recovery", img: "dbrecovery.png" },
        ],
      },
      {
        id: "mobile",
        title: "Mobile",
        description:
          "Mobile development tools I use for Android and mobile app prototypes.",
        accent: "text-lime-500",
        border: "border-lime-400",
        items: [
          { name: "Android Studio", img: "androidstudio.png" },
          { name: "Kotlin", img: "kotlin.png" },
          { name: "Metro", img: "metro.png" },
        ],
      },
      {
        id: "dotnet",
        title: ".NET & Razor",
        description:
          "Tools I’m learning this quarter for Razor Pages and Visual Studio workflows.",
        accent: "text-purple-500",
        border: "border-purple-400",
        items: [
          { name: "Visual Studio", img: "visualstudio.png" },
          { name: ".NET", img: "dotnet.png" },
          { name: "Razor Pages", img: "razor.png" },
          { name: "VS Code", img: "vscode.png" },
          { name: "IntelliJ IDEA", img: "intellij.png" },
          { name: "NetBeans", img: "netbeans.png" },
        ],
      },
      {
        id: "tools",
        title: "Tools",
        description:
          "Development environments, testing tools, deployment platforms, and workflow apps.",
        accent: "text-blue-500",
        border: "border-blue-400",
        items: [
          { name: "Git", img: "git.png" },
          { name: "GitHub", img: "github.png" },
          { name: "Postman", img: "postman.png" },
          { name: "Cisco Packet Tracer", img: "cisco.png" },
          { name: "SceneBuilder", img: "scenebuilder.png" },
          { name: "Apache Tomcat", img: "tomcat.png" },
          { name: "Maven", img: "maven.png" },
          { name: "Vercel", img: "vercel.png" },
          { name: "Railway", img: "railway.png" },
        ],
      },
      {
        id: "cloud",
        title: "Cloud & Services",
        description:
          "External platforms and cloud-connected services I’ve integrated or used in projects.",
        accent: "text-orange-500",
        border: "border-orange-400",
        items: [
          { name: "MongoDB Atlas", img: "mongodb.png" },
          { name: "Google Cloud", img: "googlecloud.png" },
          { name: "Cloudinary", img: "cloudinary.png" },
          { name: "Twilio", img: "twilio.png" },
          { name: "Requests", img: "python.png" },
          { name: "dotenv", img: "python.png" },
        ],
      },
      {
        id: "iot",
        title: "Arduino & IoT",
        description:
          "Basic hardware, sensors, and cloud-connected ideas for school and prototype projects.",
        accent: "text-red-500",
        border: "border-red-400",
        items: [
          { name: "Arduino", img: "arduino.png" },
          { name: "IoT Basics", img: "iot.png" },
          { name: "Sensors", img: "iot.png" },
        ],
      },
      {
        id: "creative",
        title: "Creative",
        description:
          "Design, music, and creative software that supports the visual side of my work.",
        accent: "text-pink-500",
        border: "border-pink-400",
        items: [
          { name: "Figma", img: "figma.png" },
          { name: "Photoshop", img: "photoshop.png" },
          { name: "Canva", img: "canva.png" },
          { name: "Ableton Live", img: "ableton.png" },
          { name: "Ableton Note", img: "abletonote.jpg" },
          { name: "FL Studio", img: "flstudio.png" },
          { name: "Sonic Pi", img: "sonicpi.png" },
        ],
      },
      {
        id: "systems",
        title: "Systems",
        description:
          "Operating systems and support tools I use when building or testing projects.",
        accent: "text-zinc-400",
        border: "border-zinc-400",
        items: [
          { name: "Windows", img: "windows.png" },
          { name: "Linux", img: "linux.png" },
          { name: "Weka", img: "weka.png" },
        ],
      },
    ],
    []
  );

  const groups = useMemo(
    () => [
      ...baseGroups,
      {
        id: "all",
        title: "All",
        description:
          "A complete view of my current technical toolkit grouped by category.",
        accent: "text-[#0171DC]",
        border: "border-[#0171DC]",
        items: [],
      },
    ],
    [baseGroups]
  );

  const softSkills = [
    "Leadership",
    "Communication",
    "Teamwork",
    "Problem solving",
    "Adaptability",
    "Creativity",
    "Time management",
    "Ownership",
    "Growth mindset",
    "Critical thinking",
    "Collaboration",
    "Decision making",
    "Conflict resolution",
    "Emotional intelligence",
    "Attention to detail",
    "Learning agility",
    "Resilience",
    "Networking",
    "Mentorship",
    "Initiative",
  ];

  const current = useMemo(
    () => groups.find((group) => group.id === activeGroup) || groups[0],
    [groups, activeGroup]
  );

  const openMobileGroup = (id) => {
    setActiveGroup(id);
    setMobileDetail(true);
  };

  const isAll = activeGroup === "all";

  return (
    <section
      ref={ref}
      className={[
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
    >
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#0171DC] font-bold mb-3">
          Skills
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          My technical toolkit
        </h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70">
          A cleaner view of the technologies, tools, and creative software I use.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] items-stretch">
        <aside className="rounded-[2rem] border border-base-300 bg-base-100/75 backdrop-blur-xl p-4 shadow-sm">
          <div className="grid grid-cols-2 gap-3">
            {groups.map((group) => {
              const isActive = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroup(group.id)}
                  className={[
                    "min-h-[78px] text-left rounded-2xl px-4 py-3 transition-all duration-300 border",
                    "flex flex-col justify-center",
                    isActive
                      ? `bg-base-200 border-base-300 ${group.accent} scale-[1.02]`
                      : "border-transparent opacity-65 hover:opacity-100 hover:bg-base-200/60",
                  ].join(" ")}
                >
                  <div className="text-sm font-extrabold leading-tight">
                    {group.title}
                  </div>

                  <div className="text-[11px] opacity-60 mt-1">
                    {group.id === "all"
                      ? `${baseGroups.length} categories`
                      : `${group.items.length} items`}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="rounded-[2rem] border border-base-300 bg-base-100/75 backdrop-blur-xl p-5 md:p-7 shadow-sm h-[620px] flex flex-col overflow-hidden">
          <div className="flex items-end justify-between gap-4 mb-6 shrink-0">
            <div>
              <div className={`text-sm font-bold ${current.accent}`}>
                Selected category
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold">
                {current.title}
              </h3>

              <p className="text-sm opacity-70 mt-2 max-w-2xl">
                {current.description}
              </p>
            </div>

            <span
              className={[
                "inline-flex px-3 py-1 rounded-full border text-xs font-bold shrink-0",
                current.border,
                current.accent,
              ].join(" ")}
            >
              {isAll
                ? `${baseGroups.length} categories`
                : `${current.items.length} tools`}
            </span>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto pr-2 scrollbar-hide">
            {isAll ? (
              baseGroups.map((group) => (
                <CategoryBlock key={group.id} group={group} />
              ))
            ) : (
              <SkillGrid items={current.items} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden rounded-[2rem] border border-base-300 bg-base-100/75 backdrop-blur-xl p-4 shadow-sm overflow-hidden">
        {!mobileDetail ? (
          <div className="grid grid-cols-2 gap-2">
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => openMobileGroup(group.id)}
                className="min-h-[76px] rounded-2xl border border-base-300 bg-base-200/35 px-3 py-3 text-left transition active:scale-[0.98]"
              >
                <div className={`text-sm font-extrabold ${group.accent}`}>
                  {group.title}
                </div>

                <div className="text-[11px] opacity-60 mt-1">
                  {group.id === "all"
                    ? `${baseGroups.length} categories`
                    : `${group.items.length} items`}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="min-w-0">
                <div className={`text-sm font-bold ${current.accent}`}>
                  Selected category
                </div>

                <h3 className="text-2xl font-extrabold">{current.title}</h3>

                <p className="text-sm opacity-70 mt-2">{current.description}</p>
              </div>

              <button
                type="button"
                onClick={() => setMobileDetail(false)}
                className="btn btn-outline btn-sm shrink-0 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
              >
                Back
              </button>
            </div>

            <div className="max-h-[430px] overflow-y-auto pr-1 scrollbar-hide">
              {isAll ? (
                baseGroups.map((group) => (
                  <CategoryBlock key={group.id} group={group} compact />
                ))
              ) : (
                <SkillGrid items={current.items} compact />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 rounded-[2rem] border border-base-300 bg-base-100/75 backdrop-blur-xl p-5 md:p-7 shadow-sm overflow-hidden">
        <div className="mb-5 text-center">
          <h3 className="text-xl md:text-2xl font-extrabold">Soft Skills</h3>

          <p className="text-sm opacity-70">
            Personal strengths I bring to teams and projects.
          </p>
        </div>

        <div className="overflow-hidden w-full relative">
          <div className="flex gap-3 w-max animate-[softskills-scroll_34s_linear_infinite] hover:[animation-play-state:paused]">
            {[...softSkills, ...softSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap border border-[#0171DC]/35 bg-[#0171DC]/10 text-[#0171DC] shadow-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}