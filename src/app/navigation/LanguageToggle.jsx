import { useLanguage } from "../../context/LanguageContext.jsx";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  const nextLanguage = language === "es" ? "English" : "Español";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="
        group
        inline-flex h-10 items-center gap-2
        rounded-full
        border border-base-300
        bg-base-100/60
        px-3
        text-xs font-black
        tracking-wide
        backdrop-blur
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-[#0171DC]/50
        hover:bg-[#0171DC]/10
        hover:text-[#0171DC]
      "
      aria-label={`Switch language to ${nextLanguage}`}
      title={`Switch to ${nextLanguage}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9" />
        <path d="M12 3c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9" />
      </svg>

      <span>{language.toUpperCase()}</span>

      <span className="opacity-40">/</span>

      <span className="opacity-40">
        {language === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}