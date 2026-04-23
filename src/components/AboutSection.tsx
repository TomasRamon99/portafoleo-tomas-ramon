import { User, Camera, Star } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden bg-[#0F172A]">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 mt-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Más allá del <span className="text-blue-500">Código</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No todo es código, aquí te cuento un poco de mi. Quién hay detrás del teclado. Mi trayectoria personal, profesional y los elementos que inspiran mi trabajo día a día.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Descripción Personal */}
          <div className="bg-[#0b1120] border border-white/5 rounded-3xl p-8 relative shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-20 text-blue-500">
              <User className="w-24 h-24" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Conoce mi Historia</h3>
            <div className="space-y-4 text-slate-400 relative z-10 leading-relaxed font-light">
              <p>
                Soy Tomás Ramón, estudiante de Programación en la UTN y Full Stack Developer. Mi enfoque principal no es solo escribir código, sino diseñar soluciones de software estratégicas que optimicen procesos y escalen negocios reales.
              </p>
              <p>
                Me especializo en identificar cuellos de botella operativos y resolverlos mediante tecnología. Desde sistemas de logística de alta complejidad hasta la optimización de flujos de reservas y turnos, mi objetivo es transformar la fricción operativa en rentabilidad directa.
              </p>
              <p>
                Trato cada proyecto y cada línea de código como un activo financiero, aplicando fundamentos de arquitectura de software para asegurar que el resultado final no solo funcione, sino que impulse el crecimiento de la empresa.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
              {/* Placeholders for extra info */}
              <div className="bg-white/5 px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-slate-300">
                <Star className="w-4 h-4 text-emerald-500" />
                <span>Curiosidad Continua</span>
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-lg flex items-center gap-2 text-sm text-slate-300">
                <Star className="w-4 h-4 text-blue-500" />
                <span>Pensamiento Crítico</span>
              </div>
            </div>
          </div>

          {/* Galería de Fotos */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Galería Visual</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Main Photo */}
              <div className="aspect-[4/5] bg-[#0b1120] rounded-2xl overflow-hidden relative group border border-white/5">
                <img src="/IMG_5771.webp" alt="Tomás" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Secondary Photos */}
              <div className="grid grid-rows-2 gap-4">
                <div className="bg-[#0b1120] rounded-2xl overflow-hidden relative group border border-white/5 h-full w-full">
                  <img src="/familia-ramon.webp" alt="Familia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="bg-[#0b1120] rounded-2xl overflow-hidden relative group border border-white/5 h-full w-full">
                  <img src="/Hermanos.webp" alt="Hermanos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
