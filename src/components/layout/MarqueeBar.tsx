export default function MarqueeBar() {
  const text = "⚠️SITIO EN DESARROLLO - OPTIMIZANDO EXPERIENCIA Y AGREGANDO NUEVOS PROYECTOS ⚠️";
  
  const TextGroup = () => (
    <div className="flex items-center">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="text-xs sm:text-sm font-bold tracking-wider mx-6">{text}</span>
      ))}
    </div>
  );

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap flex w-full shadow-md z-40 relative">
      <div className="flex w-max animate-marquee">
        <TextGroup />
        <TextGroup />
      </div>
    </div>
  );
}
