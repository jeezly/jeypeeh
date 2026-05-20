// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      // puedes quitar "cupcake" si ya no lo usas
      {
        skull: {
  primary: "#0171DC",
  "primary-content": "#ffffff",

  "base-100": "#111111",
  "base-200": "#0a0a0a",
  "base-300": "#2a2a2a",
  "base-content": "#f5f5f5",

  secondary: "#0171DC",
  "secondary-content": "#ffffff",
  accent: "#0171DC",
  "accent-content": "#ffffff",

  info: "#0171DC",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",

  neutral: "#171717",
  "neutral-content": "#e5e7eb",

  "--rounded-box": "1rem",
  "--rounded-btn": "0.75rem",
  "--rounded-badge": "9999px",
  "--tab-radius": "0.5rem",
},
      },
    ],
  },
};
