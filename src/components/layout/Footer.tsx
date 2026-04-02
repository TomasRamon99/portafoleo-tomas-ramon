export default function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p className="mb-4">Construido con React, Vite y Tailwind CSS.</p>
        <p className="text-sm">
          © {new Date().getFullYear()} Tomas Ramon. Full Stack Developer & Product Strategist.
        </p>
      </div>
    </footer>
  );
}
