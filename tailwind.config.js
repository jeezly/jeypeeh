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
          /** colores principales */
          primary: "#0171DC",
          "primary-content": "#ffffff",

          /** fondo ultra oscuro + texto blanco */
          "base-100": "#000000",
          "base-200": "#050505",
          // usamos base-300 para los BORDES en azul neón
          "base-300": "#0171DC",
          "base-content": "#ffffff",

          /** otros acentos en el mismo azul para consistencia */
          secondary: "#0171DC",
          "secondary-content": "#ffffff",
          accent: "#0171DC",
          "accent-content": "#ffffff",
          info: "#0171DC",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          neutral: "#0b0b0b",
          "neutral-content": "#e5e7eb",

          /** radios y borde por si usas tokens de radius/border */
          "--rounded-box": "1rem",
          "--rounded-btn": "0.75rem",
          "--rounded-badge": "9999px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
