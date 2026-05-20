import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  return (
    <header className="hidden md:flex fixed top-0 inset-x-0 h-16 bg-base-100/80 backdrop-blur-xl border-b border-base-300/70 z-50">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 items-center px-8">
        <div className="flex items-center">
          <div className="relative h-10 w-10">
            <img
              src="/img/LogojeypeehWhite.png"
              alt="Jeypeeh logo"
              className="theme-logo-light h-10 w-10 object-contain"
            />
            <img
              src="/img/LogoJeypeeh.png"
              alt="Jeypeeh logo white"
              className="theme-logo-skull absolute inset-0 h-10 w-10 object-contain"
            />
          </div>
        </div>

        <div className="text-center leading-tight">
          <div className="text-lg font-black tracking-tight">jeypeeh.com</div>
          <div className="text-xs opacity-65">Juan Pablo García Hernández</div>
        </div>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}