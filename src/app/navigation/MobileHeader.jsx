import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

export default function MobileHeader() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="md:hidden sticky top-0 z-40 bg-base-100/80 backdrop-blur-xl border-b border-base-300/70">
      <div className="flex items-center gap-2 px-4 h-14">
        {/* LOGO / HOME */}
        <button
          type="button"
          onClick={goToTop}
          className="
            group
            relative
            h-9 w-9
            shrink-0
            rounded-full
            transition-all duration-300
            active:scale-90
          "
          aria-label="Volver al inicio"
          title="Volver al inicio"
        >
          <img
            src="/img/LogojeypeehWhite.png"
            alt="Jeypeeh"
            className="
              theme-logo-light
              h-9 w-9
              object-contain
              transition-transform duration-300
              group-active:-rotate-6
            "
          />

          <img
            src="/img/LogoJeypeeh.png"
            alt="Jeypeeh"
            className="
              theme-logo-skull
              absolute inset-0
              h-9 w-9
              object-contain
              transition-transform duration-300
              group-active:-rotate-6
            "
          />
        </button>

        <span className="font-bold tracking-tight text-sm">
          jeypeeh.com
        </span>

        <div className="ml-auto flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}