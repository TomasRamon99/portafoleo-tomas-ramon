import { Menu, X, Globe, User, Code2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Tomas<span className="text-blue-500">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#proyectos" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Proyectos Estratégicos</a>
            <a href="#soluciones" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Framework de Valor</a>
            <a href="#autoridad" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Background</a>
            <a href="#sobre-mi" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">Sobre mí</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/TomasRamon99?tab=repositories" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/tomasramon99/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </a>
            <button className="bg-white text-slate-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Agendar Llamada
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#proyectos" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Proyectos Estratégicos</a>
            <a href="#soluciones" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Framework de Valor</a>
            <a href="#autoridad" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Background</a>
            <a href="#sobre-mi" className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md">Sobre mí</a>
            <button className="mt-4 w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-medium">Agendar Llamada</button>
          </div>
        </div>
      )}
    </header>
  );
}
