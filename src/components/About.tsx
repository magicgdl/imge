import ScrollReveal from "./ScrollReveal";
import { Shield, Clock, Users, Wrench, Cpu, HeartPulse } from "lucide-react";

const About = () => {
  const values = [
    { icon: Shield, label: "Honestidad" },
    { icon: HeartPulse, label: "Responsabilidad social" },
    { icon: Users, label: "Profesionalismo" },
  ];

  const benefits = [
    { icon: Wrench, title: "Soluciones a la medida", desc: "Garantizamos calidad en cada proyecto, adaptándonos a sus necesidades específicas." },
    { icon: Clock, title: "Servicio 24 horas", desc: "Atención continua para que su operación nunca se detenga." },
    { icon: Cpu, title: "Tecnología de punta", desc: "Equipos de última generación de las mejores marcas del mercado." },
    { icon: Users, title: "Personal especializado", desc: "Equipo experimentado y en constante actualización en el sector salud." },
  ];

  return (
    <section id="nosotros" className="py-24 lg:py-32 section-padding bg-background overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Quiénes somos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-xl">
            Su aliado estratégico en el sector salud
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 mt-8">
          <div>
            <ScrollReveal delay={80}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Solución & Comercialización IMGE</strong> proporciona
                servicios integrales y soluciones a la medida para el sector salud público y privado en diferentes
                niveles de atención. Ofrecemos venta de equipos nuevos y reacondicionados de diversas marcas, con
                personal experimentado que garantiza la mejor solución para cada cliente.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-5 rounded-xl bg-imge-light">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Misión</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Promover el desarrollo integral de hospitales y centros médicos con soluciones a la medida en toda la república.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-imge-light">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Visión</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Ser la primera opción en soluciones y suministro para el sector salud en México, expandiendo nuestra presencia.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="flex gap-6 mt-8">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <v.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{v.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={100 + i * 80}>
                <div className="p-6 rounded-xl bg-card shadow-md shadow-foreground/5 hover:shadow-lg transition-shadow duration-300 h-full">
                  <b.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
