import ThemeToggle from "./ThemeToggle.jsx";

export default function MobileHeader() {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-base-100/80 backdrop-blur-xl border-b border-base-300/70">
      <div className="flex items-center gap-3 px-4 h-14">
        <div className="relative h-9 w-9">
          <img
            src="/img/LogojeypeehWhite.png"
            alt="Jeypeeh logo"
            className="theme-logo-light h-9 w-9 object-contain"
          />
          <img
            src="/img/LogoJeypeeh.png"
            alt="Jeypeeh logo white"
            className="theme-logo-skull absolute inset-0 h-9 w-9 object-contain"
          />
        </div>

        <span className="font-bold tracking-tight">jeypeeh.com</span>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}