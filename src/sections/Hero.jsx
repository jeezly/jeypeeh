import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M6 21h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const { language } = useLanguage();

  const spanish = language === "es";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
    UN SOLO BOTÓN.

    El archivo cambia automáticamente
    dependiendo del idioma actual.
  */

  const cvFile = spanish
    ? "/CV_GarciaHernandezJuanPablo.pdf"
    : "/Resume_GarciaHernandezJuanPablo.pdf";

  const cvDownloadName = spanish
    ? "CV_GarciaHernandezJuanPablo.pdf"
    : "Resume_GarciaHernandezJuanPablo.pdf";

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <img
        src="/img/hero.jpg"
        alt="JeyPeeh"
        className="
          absolute
          inset-0
          block
          h-full
          w-full
          object-cover
          select-none
          pointer-events-none
        "
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          min-h-[75vh]
          md:min-h-screen
          flex
          items-start
          justify-center
          px-4
        "
      >
        <div className="w-full max-w-3xl text-center pt-10 md:pt-[18vh]">
          {/* =================================================
              INTRO
          ================================================= */}

          <div
            className={[
              "transition-all",
              "duration-1000",
              "ease-out",

              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            <h1
              className="
                text-white
                text-4xl
                md:text-6xl
                font-extrabold
                mb-3
                md:mb-4
                drop-shadow
              "
            >
              {spanish
                ? "¡Hola! Soy JeyPeeh"
                : "Hi! I'm JeyPeeh"}
            </h1>

            <p
              className="
                text-white/95
                text-base
                md:text-xl
                italic
                mb-5
                md:mb-7
              "
            >
              "Told my mom: I'm gon' shine."
            </p>
          </div>

          {/* =================================================
              CLASSIC CV CARD
          ================================================= */}

          <div
            className={[
              "transition-all",
              "duration-1000",
              "delay-300",
              "ease-out",

              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            <div className="inline-block w-full max-w-[340px]">
              <div
                className="
                  card
                  bg-base-100/60
                  backdrop-blur-md
                  border
                  border-base-300/60
                  shadow-2xl
                "
              >
                <div
                  className="
                    card-body
                    p-5
                    items-center
                    text-center
                  "
                >
                  <p className="mb-4 text-sm text-base-content/80">
                    {spanish
                      ? "¿Quieres conocerme mejor?"
                      : "Want to know me better?"}
                  </p>

                  <a
                    href={cvFile}
                    download={cvDownloadName}
                    className="
                      btn
                      btn-outline
                      w-full
                      gap-2
                      text-sm
                      md:text-base
                      font-semibold
                      btn-cv-blue
                    "
                  >
                    <DownloadIcon />

                    <span>
                      {spanish
                        ? "Descargar mi CV"
                        : "Download my resume"}
                    </span>
                  </a>
                </div>
              </div>

              <p className="mt-3 text-xs text-white/70">
                {spanish
                  ? "PDF • CV actualizado"
                  : "PDF • Updated resume"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}