import { User, Camera, Star, Expand } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

const galleryData: GalleryImage[] = [
  {
    id: "img-1",
    src: "/IMG_5771.webp",
    alt: "Tomás",
    caption: "Full Stack Developer. Disfrutando el proceso y construyendo soluciones reales."
  },
  {
    id: "img-2",
    src: "/familia-ramon.webp",
    alt: "Familia",
    caption: "Mi cable a tierra y el motor detrás de cada proyecto."
  },
  {
    id: "img-3",
    src: "/Hermanos.webp", 
    alt: "Hermanos",
    caption: "El equilibrio perfecto: desconectar para volver a crear."
  },
  {
    id: "img-4",
    src: "/gallery-extra-1.jpg",
    alt: "Momentos especiales",
    caption: "Momentos especiales y recuerdos invaluables que quedan plasmados."
  },
  {
    id: "img-5",
    src: "/gallery-extra-2.jpg",
    alt: "Año Nuevo",
    caption: "Comenzando nuevos años y desafíos rodeado de la mejor compañía."
  },
  {
    id: "img-6",
    src: "/gallery-extra-3.jpg",
    alt: "Celebración",
    caption: "Celebrando juntos los hitos y ocasiones importantes."
  },
  {
    id: "img-7",
    src: "/gallery-extra-4.jpg",
    alt: "Naturaleza",
    caption: "Explorando y disfrutando del aire libre para recargar energías."
  },
  {
    id: "img-8",
    src: "/gallery-extra-5.png",
    alt: "AirBand Project",
    caption: "AirBand: Innovando en proyectos de biohacking y tecnología."
  }
];

export default function AboutSection() {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Intersection Observer for intelligent Autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (swiperRef.current) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start();
          } else {
            swiperRef.current.autoplay.stop();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);
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
          <div className="space-y-6 relative" ref={galleryRef}>
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Galería Visual</h3>
            </div>

            <div className="relative w-full max-w-full overflow-hidden rounded-2xl">
              {/* Aura effect behind the swiper */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[80px] rounded-full pointer-events-none transition-all duration-1000" />
              
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                  rotate: 35,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full py-10 px-4"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  if (!isVisible) swiper.autoplay.stop();
                }}
              >
                {galleryData.map((img) => (
                  <SwiperSlide key={img.id} className="!w-[260px] sm:!w-[300px] aspect-[4/5] rounded-2xl relative group transition-all duration-500">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-700 group-[.swiper-slide-active]:group-hover:scale-[1.02]" 
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent rounded-2xl opacity-90 group-[.swiper-slide-active]:opacity-80 transition-opacity duration-500" />
                    
                    {/* Expand icon (Only visible on active slide hover) */}
                    <button 
                      onClick={() => setLightboxImage(img)}
                      className="absolute top-4 right-4 p-3 bg-black/40 hover:bg-blue-600 backdrop-blur-md rounded-full text-white opacity-0 group-[.swiper-slide-active]:group-hover:opacity-100 transition-all duration-300 z-20 hover:scale-110"
                    >
                      <Expand className="w-5 h-5" />
                    </button>
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-4 opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition-all duration-700 delay-100 z-10">
                      <p className="text-sm text-slate-300 italic font-light drop-shadow-md">
                        "{img.caption}"
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0b1120]/95 backdrop-blur-md transition-all duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur-md transition-colors z-50"
            onClick={() => setLightboxImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="relative max-w-5xl w-full flex flex-col items-center justify-center">
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10" 
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <p className="inline-block bg-[#0f172a]/80 backdrop-blur-md px-6 py-3 rounded-full text-slate-200 italic text-sm md:text-base border border-white/10 shadow-xl">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
