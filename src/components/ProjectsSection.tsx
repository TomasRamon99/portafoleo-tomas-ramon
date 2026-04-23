import { ArrowUpRight, X, ThumbsUp, Lock, Target, Compass, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import airbandImg from '../assets/airband-final.webp';
import essenceImg from '../assets/barber.essence.webp';
import ramonaImg from '../assets/ramona1.webp';

type Project = {
  title: string;
  category: string;
  problema: string;
  vision: string;
  herramientas: string[];
  solucion: string;
  resultado: string;
  image: string;
  link: string;
  processImages?: string[];
};

const projects: Project[] = [
  {
    title: "Herencia ERP & Pedidos",
    category: "LOGISTICS & PWA APP",
    problema: "Fricción en la recompra de clientes recurrentes y falta de trazabilidad entre los pedidos de mostrador y la logística de envíos.",
    vision: "Desarrollo de una Progressive Web App (PWA) con React y Supabase. Implementación de autenticación, base de datos relacional y panel administrador.",
    herramientas: ["React", "Vite", "Supabase", "PWA", "Tailwind v4"],
    solucion: "Arquitectura Cloud integral con dashboard de gestión en tiempo real.",
    resultado: "Creación de un flujo de \"recompra en 1 clic\" que aumenta el LTV del cliente y centralización del 100% de la logística en un dashboard.",
    image: "/inicio.png",
    processImages: ["/inicio-sesion.png", "/pedido.png", "/panel-logistica.png", "/contabilidad.png"],
    link: "https://pedidos.herenciayerbamate.com/"
  },
  {
    title: "Doble B Barbers",
    category: "Booking System",
    problema: "Pérdida de clientes por sistemas de turnos caóticos y falta de escalabilidad.",
    vision: "Crear un sistema de turnos centralizado y escalable que actúe como motor de retención, automatizando los recordatorios y liberando el tiempo operativo de los barberos.",
    herramientas: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    solucion: "Implementación de Object Oriented Programming para un sistema de reservas robusto.",
    resultado: "Incremento en tasa de conversión y eliminación del 100% de errores de concurrencia.",
    image: essenceImg,
    link: "https://doblebbarbers.com"
  },
  {
    title: "AIR BAND",
    category: "Operations & Workflow",
    problema: "Gestión ineficiente de flujos de trabajo en entornos de alta demanda operativa.",
    vision: "Desarrollar una plataforma integral que unifique la gestión de pedidos, stock y envíos, reduciendo el margen de error humano y acelerando los tiempos de respuesta.",
    herramientas: ["Next.js", "Supabase", "TypeScript", "Vite"],
    solucion: "Arquitectura Full Stack optimizada con lógica de computer science estructurada para tareas críticas.",
    resultado: "Reducción de latencia en gestión de datos y 100% de trazabilidad.",
    image: airbandImg,
    link: "https://airbando2.com"
  },
  {
    title: "Ramona Clothes",
    category: "E-Commerce",
    problema: "Baja retención de visitantes en la pasarela visual de productos.",
    vision: "Transformar la pasarela visual en una experiencia inmersiva mobile-first, minimizando la fricción desde el descubrimiento del producto hasta el pago.",
    herramientas: ["React", "Framer Motion", "Tailwind CSS", "Shopify API"],
    solucion: "Rediseño completo de UI/UX priorizando la accesibilidad y el Time-to-Market mobile-first.",
    resultado: "Experiencia visual fluida que eleva la percepción de la marca uniendo el Sistema 1 con el checkout.",
    image: ramonaImg,
    link: "https://ramonaclothes.com"
  },
  {
    title: "Herencia Yerba Mate",
    category: "Brand & E-Commerce",
    problema: "Falta de confianza visual inmediata para captar distribuidores mayoristas.",
    vision: "Diseñar un catálogo B2B de alto impacto que proyecte autoridad y confianza, facilitando la captura de distribuidores mayoristas a través de una UI premium.",
    herramientas: ["React", "Supabase", "Tailwind CSS", "Vite"],
    solucion: "Catálogo premium con CTAs estratégicos aplicando principios de neuro-diseño.",
    resultado: "Impacto visual instantáneo que cierra la brecha entre el lead frío y la compra por cantidad.",
    image: "https://images.unsplash.com/photo-1556012018-b2ef3223f66f?auto=format&fit=crop&q=80&w=800",
    link: "https://herenciayerbamate.com"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Prevenir scroll en el body cuando el sidebar está abierto
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  const openSidebar = (project: Project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
    setIsUnlocked(false); // Siempre arranca bloqueado al abrir uno nuevo
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    // Esperamos a que termine la animación de salida para limpiar los estados
    setTimeout(() => {
      setIsUnlocked(false);
    }, 500);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsUnlocked(true);
      })
      .catch((error) => {
        console.error("Form submission error", error);
        setIsUnlocked(true); // Desbloqueamos igual para que no se tranque la UX si hay un error de red local
      });
  };

  return (
    <section id="proyectos" className="py-24 relative">
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

              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden shrink-0">
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
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300">
                    <button 
                      onClick={() => openSidebar(project)}
                      className="flex items-center gap-2 bg-transparent px-4 py-2 rounded-xl text-slate-300 transition-colors border border-white/20 hover:border-white/50 font-medium text-sm"
                    >
                      Ver Proceso
                    </button>
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10 hover:text-white text-slate-300 transition-colors font-medium text-sm border border-white/5 hover:border-white/10">
                      <span>Página Web</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
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

      {/* SLIDE-OVER OVERLAY */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop oscuro con desenfoque */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={closeSidebar}></div>
        
        {/* SLIDE-OVER PANEL */}
        <div 
          className={`absolute top-0 right-0 h-full w-full md:w-[45vw] bg-[#0F172A] border-l border-white/10 shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header fijo del panel */}
          <div className="flex justify-end p-6 absolute top-0 right-0 z-50 w-full bg-gradient-to-b from-[#0F172A] to-transparent pointer-events-none">
            <button 
              onClick={closeSidebar}
              className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors pointer-events-auto shadow-lg backdrop-blur-sm border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className={`flex-1 overflow-y-auto p-6 md:p-12 relative ${!isUnlocked ? 'overflow-hidden' : ''}`}>
            
            {selectedProject && (
              <div className="mt-8">
                <div className="text-blue-500 text-sm font-bold tracking-wider uppercase mb-2">
                  Caso de Estudio Técnico
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
                  {selectedProject.title}
                </h3>

                <div className="relative">
                  
                  {/* FORMULARIO DE BLOQUEO (LEAD CAPTURE) */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center pt-[10vh]">
                      <div className="relative z-10 p-8 w-full max-w-sm bg-[#0b1120]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
                        <div className="bg-blue-600/20 p-4 rounded-full mb-4">
                          <Lock className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          Acceso Restringido
                        </h4>
                        
                        <div className="text-slate-300 text-sm mb-6 text-left w-full bg-black/30 p-5 rounded-xl border border-white/5">
                          <p className="font-semibold text-slate-200 mb-3 text-base">Al desbloquear descubrirás:</p>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-3"><Target className="w-5 h-5 text-red-400 shrink-0"/> El problema de negocio resuelto.</li>
                            <li className="flex items-center gap-3"><Compass className="w-5 h-5 text-blue-400 shrink-0"/> La estrategia y visión técnica.</li>
                            <li className="flex items-center gap-3"><Code2 className="w-5 h-5 text-emerald-400 shrink-0"/> El stack de herramientas clave.</li>
                          </ul>
                        </div>

                        <form 
                          name="case-study-lead" 
                          method="POST" 
                          data-netlify="true" 
                          onSubmit={handleUnlock}
                          className="w-full"
                        >
                          <input type="hidden" name="form-name" value="case-study-lead" />
                          <input type="hidden" name="proyecto" value={selectedProject.title} />
                          
                          <div className="flex flex-col gap-3">
                            <input 
                              type="email" 
                              name="email"
                              required
                              placeholder="Ingresá tu email profesional"
                              className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-center"
                            />
                            <button 
                              type="submit"
                              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-4 py-4 transition-colors shadow-lg shadow-blue-500/20 text-lg"
                            >
                              Desbloquear Análisis
                            </button>
                          </div>
                          <p className="text-xs text-slate-500 mt-5 leading-relaxed">
                            Protegemos la propiedad intelectual de nuestros clientes. Tu email es solo para validar tu perfil.
                          </p>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* CONTENIDO TIMELINE / CARDS (BORROSO SI ESTA BLOQUEADO) */}
                  <div className={`space-y-8 relative pb-20 ${!isUnlocked ? 'blur-[8px] opacity-20 select-none pointer-events-none' : 'animate-fade-in transition-all duration-1000'}`}>
                    
                    {/* Timeline line - Solo visible en desktop */}
                    <div className="absolute left-[38px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-500/50 via-blue-500/50 to-emerald-500/50 hidden md:block"></div>

                    {/* Card 1: Problema */}
                    <div className="relative pl-0 md:pl-24">
                      <div className="absolute left-[29px] top-8 w-5 h-5 rounded-full bg-[#0F172A] border-4 border-red-500 hidden md:block z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                      <div className="bg-slate-900/40 border border-red-500/10 hover:border-red-500/30 transition-colors rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="p-3 bg-red-500/10 rounded-xl">
                            <Target className="w-7 h-7 text-red-400" />
                          </div>
                          <h4 className="text-2xl font-bold text-white">El Problema</h4>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {selectedProject.problema}
                        </p>
                      </div>
                    </div>

                    {/* Card 2: Visión */}
                    <div className="relative pl-0 md:pl-24">
                      <div className="absolute left-[29px] top-8 w-5 h-5 rounded-full bg-[#0F172A] border-4 border-blue-500 hidden md:block z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <div className="bg-slate-900/40 border border-blue-500/10 hover:border-blue-500/30 transition-colors rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="p-3 bg-blue-500/10 rounded-xl">
                            <Compass className="w-7 h-7 text-blue-400" />
                          </div>
                          <h4 className="text-2xl font-bold text-white">La Visión Estratégica</h4>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          {selectedProject.vision}
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Herramientas */}
                    <div className="relative pl-0 md:pl-24">
                      <div className="absolute left-[29px] top-8 w-5 h-5 rounded-full bg-[#0F172A] border-4 border-emerald-500 hidden md:block z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      <div className="bg-slate-900/40 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-emerald-500/10 rounded-xl">
                            <Code2 className="w-7 h-7 text-emerald-400" />
                          </div>
                          <h4 className="text-2xl font-bold text-white">Stack Técnico</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.herramientas.map((tool, i) => (
                            <span key={i} className="bg-emerald-500/10 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold border border-emerald-500/20 shadow-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Galería de Imágenes */}
                    {selectedProject.processImages && selectedProject.processImages.length > 0 && (
                      <div className="relative pl-0 md:pl-24">
                        <div className="absolute left-[29px] top-8 w-5 h-5 rounded-full bg-[#0F172A] border-4 border-indigo-500 hidden md:block z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                        <div className="bg-slate-900/40 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors rounded-3xl p-8 shadow-lg">
                          <h4 className="text-2xl font-bold text-white mb-6">Capturas del Proceso</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedProject.processImages.map((imgSrc, idx) => (
                              <img key={idx} src={imgSrc} alt={`Captura de proceso ${idx + 1}`} className="w-full rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors shadow-md" />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Feedback Button */}
                    {isUnlocked && (
                      <div className="pt-12 flex flex-col items-center animate-fade-in">
                        <p className="text-slate-400 mb-5 font-medium">¿Te resultó útil este nivel de detalle?</p>
                        <button 
                          onClick={closeSidebar}
                          className="flex items-center gap-3 bg-blue-600/10 hover:bg-blue-600 hover:text-white text-blue-400 px-8 py-4 rounded-full transition-all duration-300 border border-blue-500/30 hover:border-blue-500 font-semibold"
                        >
                          <ThumbsUp className="w-5 h-5" />
                          <span>Me sirvió esta info, cerrar panel</span>
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
