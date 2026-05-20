import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-screen overflow-hidden">
      <img
        src="/img/hero.jpg"
        alt="Hero"
        className="absolute inset-0 block w-full h-full object-cover select-none pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 min-h-[75vh] md:min-h-screen flex items-start justify-center px-4">
        <div className="w-full max-w-3xl text-center pt-10 md:pt-[18vh]">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 drop-shadow">
              Hi! I'm JeyPeeh
            </h1>

            <p className="text-white/95 text-base md:text-xl italic mb-5 md:mb-7">
              "Told my mom: I'm gon' shine."
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block w-full md:w-auto">
              <div className="card bg-base-100/60 backdrop-blur-md border border-base-300/60 shadow-2xl">
                <div className="card-body p-4 md:p-5 items-center text-center">
                  <p className="mb-3 text-sm text-base-content/80">
                    Want to know me better?
                  </p>

                  <div className="w-full flex justify-center">
                    <a
                      href="/cv.pdf"
                      download
                      className="btn btn-outline btn-wide gap-2 text-base font-semibold btn-cv-blue"
                    >
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
                      Download my CV
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-white/70">PDF • Updated resume</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}