import ScrollReveal from "./ScrollReveal";

const equipos = [
  "Resonancia Magnética", "Tomografía Computarizada", "Fluoroscopia con telemando",
  "Arco en C", "Mastógrafos digitales", "Digitalizadores RX",
  "Rodables RX", "Salas de RX", "Ultrasonidos",
  "Endoscopia", "Monitores de diagnóstico", "Impresoras RX",
  "Inyector de medio de contraste",
];

const consumibles = [
  "Protección radiológica", "Película radiográfica", "Pistolas y agujas de biopsia",
  "Oxímetros y termómetros", "Nebulizadores", "Material de curación",
  "Muebles hospitalarios", "Instrumental quirúrgico",  
  "Terapias ablativas (Radiofrecuencia, microondas, Crío-ablacion)",
  "Ekos (Tratamiento Embolismo Pulmonar", "Productos, acccesorios y materiales de cardiología mínima invasiva (Intervencionismo Cardíaco - Periférico - Radiológico - Oncologico)"

];

const Solutions = () => {
  return (
    <section id="soluciones" className="py-24 lg:py-32 section-padding bg-imge-deep text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-imge-sky mb-3">Nuestras soluciones</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Todo lo que su institución necesita
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mb-16 leading-relaxed">
            Contamos con un catálogo completo de equipos de imagen médica y consumibles de las mejores marcas, 
            respaldados por servicio técnico especializado.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal delay={80}>
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-accent inline-block" />
                Equipos de Imagen
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {equipos.map((e, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-primary-foreground/10 text-sm font-medium border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-imge-sky inline-block" />
                Consumibles e Insumos
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {consumibles.map((c, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-primary-foreground/10 text-sm font-medium border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
