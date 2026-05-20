export default function Footer() {
  return (
    <footer className="border-t border-base-300/70 bg-base-100/60 backdrop-blur px-6 md:px-16 py-6">
      <div className="max-w-6xl mx-auto text-center text-[11px] opacity-70">
        © {new Date().getFullYear()} — made with ♥
      </div>
    </footer>
  );
}
