import { ArrowRight, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-8 relative animate-fade-in">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            <img 
              src="/profile.jpg" 
              alt="Tomas Ramon" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-[center_20%] border-4 border-slate-800 shadow-[0_0_30px_rgba(37,99,235,0.3)] relative z-10 transition-transform duration-500 hover:scale-105 hover:rotate-3"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm mb-8 animate-fade-in">
            <Terminal className="w-4 h-4" />
            <span>MERN Stack & Intrapreneurship</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-8 tracking-tight leading-tight">
            Full Stack Developer <br className="hidden md:block" />
            <span className="text-white">&</span> Product Strategist
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Arquitectando soluciones escalables para transformar la <span className="text-white font-medium">eficiencia operativa en rentabilidad</span>.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center w-full">
            <a href="#proyectos" className="w-full lg:w-auto px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group whitespace-nowrap">
              Ver Casos de Éxito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#soluciones" className="w-full lg:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base md:text-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center text-center whitespace-nowrap">
              Descubrir Framework de Valor
            </a>
            <a href="#sobre-mi" className="w-full lg:w-auto px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base md:text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group whitespace-nowrap">
              ¿Quién es Tomás Ramón?
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
