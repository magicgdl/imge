import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy *${form.name}*.\nTeléfono: ${form.phone}\n\n${form.message}`;
    window.open(
      `https://api.whatsapp.com/send?phone=523326299972&text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 section-padding bg-imge-warm">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Contacto</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Listo para optimizar su equipamiento médico?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Nuestro equipo de especialistas está listo para asesorarle. Contáctenos y reciba una cotización
                personalizada sin compromiso.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="space-y-5">
                <a
                  href="tel:+523312249254"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Teléfono</p>
                    <p className="font-semibold text-foreground">33 1224 9254</p>
                  </div>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=523326299972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground">33 2629 9972</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Cobertura</p>
                    <p className="font-semibold text-foreground">República Mexicana</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-lg shadow-foreground/5"
            >
              <h3 className="font-bold text-foreground mb-6">Envíenos un mensaje</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="Su nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    placeholder="33 0000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                    placeholder="¿En qué podemos ayudarle?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:brightness-110 active:scale-[0.97] shadow-md shadow-primary/20"
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
