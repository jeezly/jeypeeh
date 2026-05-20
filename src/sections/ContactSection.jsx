const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 4.5A5.5 5.5 0 1112 20a5.5 5.5 0 010-11zm0 2A3.5 3.5 0 1015.5 14 3.5 3.5 0 0012 10.5zM18 6.5a1 1 0 110 2 1 1 0 010-2z"
    />
  </svg>
);

const IconFacebook = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.7-.1-1.6-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.6v8h3.9z"
    />
  </svg>
);

const IconX = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-7.1L5.8 22H2.7l7.4-8.6L1 2h6.4l4.4 6.3L18.9 2zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20z"
    />
  </svg>
);

const IconGithub = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.96c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.82 0 .27.18.59.69.49A10.05 10.05 0 0022 12.26C22 6.58 17.52 2 12 2z"
    />
  </svg>
);

const IconLinkedIn = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M6.5 6.5a2 2 0 11.01-4 2 2 0 01-.01 4zM5 21h3V9H5v12zm5 0h3v-6.2c0-1.6.3-3.1 2.3-3.1 2 0 2 1.9 2 3.2V21h3v-6.7c0-3.3-.7-5.9-4.6-5.9-1.9 0-3.1 1-3.6 1.9h-.1V9h-2.9v12z"
    />
  </svg>
);

const IconMail = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </svg>
);

const IconSoundcloud = (p) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" {...p}>
    <path
      fill="currentColor"
      d="M11 6.5c0-.6.4-1 1-1 3.3 0 6 2.7 6 6v.2h.7A3.3 3.3 0 0122 15a3.5 3.5 0 01-3.5 3.5H8.5a3.5 3.5 0 01-3.5-3.5c0-1.7 1.2-3.1 2.8-3.4.2-2.5 2.2-4.6 4.7-5.1v0z"
    />
  </svg>
);

export default function ContactSection() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/jey_peeh?igsh=Y3JxdDdjcjBhOXZy",
      className:
        "border-pink-500 text-pink-500 hover:bg-gradient-to-br hover:from-pink-500/15 hover:via-purple-500/15 hover:to-yellow-400/15",
      Icon: IconInstagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1CLof3PLUp/?mibextid=wwXIfr",
      className: "border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10",
      Icon: IconFacebook,
    },
    {
      name: "X",
      href: "https://x.com/jeypeeh_?s=21",
      className: "border-base-content/70 text-base-content hover:bg-base-content/10",
      Icon: IconX,
    },
    {
      name: "GitHub",
      href: "https://github.com/jeezly",
      className: "border-green-500 text-green-500 hover:bg-green-500/10",
      Icon: IconGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jeezly",
      className: "border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10",
      Icon: IconLinkedIn,
    },
    {
      name: "Email",
      href: "mailto:heezly123@gmail.com",
      className: "border-red-500 text-red-500 hover:bg-red-500/10",
      Icon: IconMail,
    },
    {
      name: "SoundCloud",
      href: "https://on.soundcloud.com/ZoHY0hFGPUfUe89jwK",
      className: "border-orange-500 text-orange-500 hover:bg-orange-500/10",
      Icon: IconSoundcloud,
      centered: true,
    },
  ];

  const normalSocials = socials.filter((s) => !s.centered);
  const centeredSocial = socials.find((s) => s.centered);

  const Tile = ({ s, className = "" }) => (
    <a
      href={s.href}
      target={s.href.startsWith("http") ? "_blank" : undefined}
      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={[
        "rounded-3xl border-2 bg-transparent",
        "min-h-[110px] md:min-h-[120px]",
        "flex flex-col items-center justify-center gap-3",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-sm",
        s.className,
        className,
      ].join(" ")}
    >
      <s.Icon />
      <span className="text-sm font-semibold">{s.name}</span>
    </a>
  );

  return (
    <section className="scroll-mt-24">
      <h2 className="mb-5 text-3xl font-bold text-center">Contact</h2>

      <div className="min-h-[58vh] md:min-h-[62vh] flex flex-col">
        <p className="text-center opacity-80 mb-6">
          Let’s connect — pick any platform.
        </p>

        <div className="flex-1 flex items-start">
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {normalSocials.map((s) => (
                <Tile key={s.name} s={s} />
              ))}
            </div>

            {centeredSocial && (
              <div className="mt-4 flex justify-center">
                <Tile
                  s={centeredSocial}
                  className="w-full max-w-[calc(50%-0.5rem)] sm:max-w-[calc(33.333%-0.7rem)]"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-xs opacity-70">
          Fastest reply: <span className="font-semibold">Email</span> • Open to collabs.
        </div>
      </div>
    </section>
  );
}