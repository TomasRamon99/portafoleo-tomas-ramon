import { Mail, Send } from 'lucide-react';

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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Conectar en LinkedIn
                </a>
                
                <a 
                  href="https://github.com/tu-usuario" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center justify-center gap-3 py-4 rounded-xl font-medium transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
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
