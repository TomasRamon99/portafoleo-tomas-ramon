import { CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function AcademicAuthority() {
  return (
    <section id="autoridad" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Diseño Analítico Validado. <br/>
              <span className="text-indigo-400">Rigor Académico.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Mi código no es intuitivo; es producto de la ingeniería. Formado en arquitecturas de hardware hasta despliegues complejos bajo un lente gerencial estricto.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-indigo-500/20 p-2 rounded-lg">
                  <Cpu className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Fundamentos Profundos (Kalvium / UTN)</h4>
                  <p className="text-slate-400">Comprendo <i>The Breadth of Computer Science</i>: de puertas NAND a la arquitectura HACK, garantizando que entiendo cada bloque subyacente del software y no solo los frameworks de moda.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-500/20 p-2 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Human Skills & Critical Thinking</h4>
                  <p className="text-slate-400">Certificado en <i>Critical Thinking 101</i> para separar sesgos de datos empíricos, facilitando la validación metodológica que exigen equipos CTO (Agile/Scrum).</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Unit Testing y Control Cero Errores</h4>
                  <p className="text-slate-400">Implementación obligatoria de validaciones en JS demostrando profesionalismo. Reducción directa de la Deuda Técnica del cliente final.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent rounded-3xl pointer-events-none" />
            <h3 className="text-slate-300 font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              Estado Operacional: Listo para Desplegar
            </h3>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="bg-[#0b1120] p-4 rounded-lg flex justify-between items-center border border-white/5">
                <span className="text-slate-400">Experiencia en Arquitectura OOP</span>
                <span className="text-emerald-400">Validado</span>
              </div>
              <div className="bg-[#0b1120] p-4 rounded-lg flex justify-between items-center border border-white/5">
                <span className="text-slate-400">Design for Developers (UX)</span>
                <span className="text-emerald-400">Validado</span>
              </div>
              <div className="bg-[#0b1120] p-4 rounded-lg flex justify-between items-center border border-white/5">
                <span className="text-slate-400">SQL & Relational Algebra DB</span>
                <span className="text-emerald-400">Validado</span>
              </div>
              <div className="bg-[#0b1120] p-4 rounded-lg flex justify-between items-center border border-white/5">
                <span className="text-slate-400">Economics & Business Strategy</span>
                <span className="text-emerald-400">Validado</span>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://www.linkedin.com/in/tomasramon99/"
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center bg-slate-100 text-slate-900 font-bold px-6 py-4 rounded-xl hover:bg-white transition-colors"
              >
                Revisar Perfil en LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
