import { ArrowUpRight } from 'lucide-react';
import airbandImg from '../assets/airband-final.webp';
import essenceImg from '../assets/barber.essence.webp';

const projects = [
  {
    title: "Doble B Barbers",
    category: "Booking System",
    problema: "Pérdida de clientes por sistemas de turnos caóticos y falta de escalabilidad.",
    solucion: "Implementación de Object Oriented Programming para un sistema de reservas robusto.",
    resultado: "Incremento en tasa de conversión y eliminación del 100% de errores de concurrencia.",
    image: essenceImg,
    link: "https://doblebbarbers.com"
  },
  {
    title: "AIR BAND",
    category: "Operations & Workflow",
    problema: "Gestión ineficiente de flujos de trabajo en entornos de alta demanda operativa.",
    solucion: "Arquitectura Full Stack optimizada con lógica de computer science estructurada para tareas críticas.",
    resultado: "Reducción de latencia en gestión de datos y 100% de trazabilidad.",
    image: airbandImg,
    link: "https://airbando2.com"
  },
  {
    title: "Ramona Clothes",
    category: "E-Commerce",
    problema: "Baja retención de visitantes en la pasarela visual de productos.",
    solucion: "Rediseño completo de UI/UX priorizando la accesibilidad y el Time-to-Market mobile-first.",
    resultado: "Experiencia visual fluida que eleva la percepción de la marca uniendo el Sistema 1 con el checkout.",
    image: ramonaImg,
    link: "https://ramonaclothes.com"
  },
  {
    title: "Herencia Yerba Mate",
    category: "Brand & E-Commerce",
    problema: "Falta de confianza visual inmediata para captar distribuidores mayoristas.",
    solucion: "Catálogo premium con CTAs estratégicos aplicando principios de neuro-diseño.",
    resultado: "Impacto visual instantáneo que cierra la brecha entre el lead frío y la compra por cantidad.",
    image: "https://images.unsplash.com/photo-1556012018-b2ef3223f66f?auto=format&fit=crop&q=80&w=800",
    link: "https://herenciayerbamate.com"
  }
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Casos de <span className="text-blue-500">Éxito Estratégico</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Cada línea de código que escribo es una respuesta racional para resolver un cuello de botella logístico o potenciar las ventas directas.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-[#0b1120] rounded-3xl overflow-hidden border border-white/5 flex flex-col md:flex-row hover:border-blue-500/30 transition-colors">

              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-3 text-shadow">
                  {project.category}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 hover:text-white text-slate-300 transition-colors cursor-pointer opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300 font-medium text-sm border border-white/5 hover:border-white/10">
                    <span>Página Web</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-5">
                  <div className="bg-[#0F172A] p-4 rounded-xl border-l-4 border-red-500">
                    <strong className="text-red-400 block mb-1">Problema:</strong>
                    <p className="text-slate-300">{project.problema}</p>
                  </div>
                  <div className="bg-[#0F172A] p-4 rounded-xl border-l-4 border-blue-500">
                    <strong className="text-blue-400 block mb-1">Solución Técnica:</strong>
                    <p className="text-slate-300">{project.solucion}</p>
                  </div>
                  <div className="bg-[#0b291d] p-4 rounded-xl border-l-4 border-emerald-500">
                    <strong className="text-emerald-400 block mb-1">Resultado ROI:</strong>
                    <p className="text-emerald-100 font-medium">{project.resultado}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
