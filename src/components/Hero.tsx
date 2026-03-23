import heroBg from "@/assets/hero-bg.jpg";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-imge-deep/80" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 pt-20">
        <ScrollReveal>
          <p className="text-imge-sky text-sm font-semibold tracking-widest uppercase mb-4">
            Solución & Comercialización
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Equipamiento médico integral para el sector salud
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={240}>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Equipos de imagen, insumos, personal capacitado, actualizaciones tecnológicas y arrendamientos.
            Servicio las 24 horas en todo México.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={360}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-[0.97] shadow-lg shadow-accent/25"
            >
              Solicitar cotización
            </a>
            <a
              href="#soluciones"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm transition-all duration-200 hover:bg-primary-foreground/10 active:scale-[0.97]"
            >
              Conocer soluciones
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
