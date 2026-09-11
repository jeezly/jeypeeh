import ThemeToggle from "./ThemeToggle.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

export default function Header() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="hidden md:flex fixed top-0 inset-x-0 h-16 bg-base-100/80 backdrop-blur-xl border-b border-base-300/70 z-50">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 items-center px-8">
        {/* LOGO / HOME */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={goToTop}
            className="
              group
              relative
              h-10 w-10
              rounded-full
              transition-all duration-300
              hover:scale-110
              active:scale-95
              cursor-pointer
            "
            aria-label="Volver al inicio"
            title="Volver al inicio"
          >
            <img
              src="/img/LogojeypeehWhite.png"
              alt="Jeypeeh"
              className="
                theme-logo-light
                h-10 w-10
                object-contain
                transition-transform duration-300
                group-hover:-rotate-6
              "
            />

            <img
              src="/img/LogoJeypeeh.png"
              alt="Jeypeeh"
              className="
                theme-logo-skull
                absolute inset-0
                h-10 w-10
                object-contain
                transition-transform duration-300
                group-hover:-rotate-6
              "
            />
          </button>
        </div>

        {/* CENTER */}
        <div className="text-center leading-tight">
          <div className="text-lg font-black tracking-tight">
            jeypeeh.com
          </div>

          <div className="text-xs opacity-65">
            Juan Pablo García Hernández
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-end gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}