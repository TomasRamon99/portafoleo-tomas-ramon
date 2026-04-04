import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-[#0b1120]">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Iniciemos una <span className="text-blue-500">Conversación</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un desafío operativo o una idea de negocio que necesita escalabilidad? Conversemos sobre cómo la tecnología puede resolverlo de raíz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Formulario de Contacto */}
          <div className="lg:col-span-3 bg-[#0F172A] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensaje o Requerimiento</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Hola Tomás, me gustaría optimizar el sistema de mi empresa..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Enlaces Directos */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center h-full gap-6">
              <Mail className="w-12 h-12 text-blue-400 mb-2" />
              <h3 className="text-xl font-bold text-white">Conexión Directa</h3>
              <p className="text-slate-400 text-sm mb-4">
                Si prefieres ir al grano, puedes encontrar mi código abierto o conectar profesionalmente en mis redes.
              </p>
              
              <div className="flex flex-col w-full gap-4">
                <a 
                  href="https://linkedin.com/in/tu-perfil" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/30 flex items-center justify-center gap-3 py-4 rounded-xl font-medium transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  Conectar en LinkedIn
                </a>
                
                <a 
                  href="https://github.com/tu-usuario" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center justify-center gap-3 py-4 rounded-xl font-medium transition-all"
                >
                  <Github className="w-5 h-5" />
                  Explorar Repositorios
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
