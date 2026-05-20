import { useEffect, useState } from "react";
import { SunIcon, SkullIcon } from "./icons.jsx";

function useTheme() {
  const getInitial = () => {
    if (typeof window === "undefined") return "skull";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "skull") return saved;
    return "skull";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const nextTheme = () => (theme === "light" ? "skull" : "light");

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme())}
      aria-label="Toggle theme"
      className="btn btn-circle btn-ghost hover:scale-105 transition"
      title={theme === "light" ? "Switch to skull" : "Switch to light"}
    >
      {theme === "light" ? <SunIcon /> : <SkullIcon />}
    </button>
  );
}