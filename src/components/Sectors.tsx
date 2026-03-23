import ScrollReveal from "./ScrollReveal";
import { Building2, Stethoscope, FlaskConical, Sparkles, Wrench } from "lucide-react";

const sectors = [
  { icon: Stethoscope, title: "Equipos de Tecnología Médica", desc: "Soluciones completas en equipamiento de imagen diagnóstica y terapéutica." },
  { icon: FlaskConical, title: "Laboratorios Clínicos", desc: "Equipamiento e insumos para laboratorios de análisis clínicos." },
  { icon: Wrench, title: "Mantenimiento de Equipos", desc: "Servicio técnico preventivo y correctivo para equipos médicos." },
  { icon: Building2, title: "Instrumental e Insumos", desc: "Suministro integral de instrumental quirúrgico e insumos hospitalarios." },
  { icon: Sparkles, title: "Sanitización Hospitalaria", desc: "Productos y soluciones certificadas para la higiene y sanitización." },
];

const Sectors = () => {
  return (
    <section className="py-24 lg:py-32 section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3 text-center">Sectores</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Comprometidos con la calidad total
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Buscamos la mejora continua en cada proceso, producto y servicio para satisfacer las necesidades del sector salud.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {sectors.map((s, i) => (
            <ScrollReveal key={i} delay={80 * i}>
              <div className="p-6 rounded-xl bg-card shadow-md shadow-foreground/5 text-center hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
