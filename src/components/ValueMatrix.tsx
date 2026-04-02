import { Database, TrendingUp, Palette, Users } from 'lucide-react';

const painPoints = [
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    dolor: "Desarrolladores que no comprenden el impacto financiero del código.",
    capacidad: "Fundamentos de Business Management y Macroeconomía.",
    impacto: "Código alineado a los objetivos de negocio; reducción sistemática de desperdicios."
  },
  {
    icon: <Database className="w-8 h-8 text-blue-400" />,
    dolor: "Bases de datos frágiles que causan pérdida de información crítica.",
    capacidad: "Mastery of Relational Algebra and SQL.",
    impacto: "Integridad de datos absoluta y consultas optimizadas para máxima escala."
  },
  {
    icon: <Palette className="w-8 h-8 text-fuchsia-400" />,
    dolor: "Fricción en herramientas digitales que ahuyenta a los usuarios.",
    capacidad: "Design for Developers & Psicología en UX.",
    impacto: "Interfaces de alta conversión diseñadas para el Sistema 1 del consumidor."
  },
  {
    icon: <Users className="w-8 h-8 text-amber-400" />,
    dolor: "Falta de autonomía y visión proactiva en el equipo técnico.",
    capacidad: "Entrenamiento en Intrapreneurship y Critical Thinking.",
    impacto: "Trato el código del cliente como un activo financiero propio."
  }
];

export default function ValueMatrix() {
  return (
    <section id="soluciones" className="py-24 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 tracking-tight">
            Matriz de Soluciones
          </h2>
          <p className="text-slate-400 text-lg">
            Traduzco las necesidades humanas en arquitecturas de software eficientes. Descubre cómo mitigo riesgos operativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((item, idx) => (
            <div key={idx} className="bg-[#0F172A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-xl group">
              <div className="bg-[#1e293b] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-2">Dolor del Mercado</h4>
                  <p className="text-slate-300 font-medium">{item.dolor}</p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">Capacidad Estructural (Syllabus)</h4>
                  <p className="text-slate-300 font-medium">{item.capacidad}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-emerald-400 font-bold mb-1">Impacto Final</h4>
                  <p className="text-white text-lg">{item.impacto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
