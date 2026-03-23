import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

import inyector from "@/assets/products/inyector-contraste.jpg";
import tomografo from "@/assets/products/tomografo.jpg";
import scenaria from "@/assets/products/tomografo-scenaria.jpg";
import rayosX from "@/assets/products/rayos-x.jpg";
import rayosXPortatil from "@/assets/products/rayos-x-portatil.jpg";
import ultrasonido from "@/assets/products/ultrasonido.jpg";
import arcoC from "@/assets/products/arco-en-c.jpg";
import mastografo from "@/assets/products/mastografo.jpg";
import endoscopio from "@/assets/products/endoscopio.webp";
import arietta65 from "@/assets/products/ultrasonido-arietta65.jpg";

interface Product {
  image: string;
  title: string;
  description: string;
}

const defaultProducts: Product[] = [
  { image: tomografo, title: "Tomógrafo Computarizado", description: "Equipo de alta resolución para diagnóstico por imagen con tecnología de última generación." },
  { image: scenaria, title: "Tomógrafo Scenaria View", description: "Apertura de 800mm para mayor comodidad del paciente. Imágenes de alta calidad diagnóstica." },
  { image: rayosX, title: "Sala de Rayos X Digital", description: "Sistema completo de radiografía digital con detector de panel plano de alta sensibilidad." },
  { image: rayosXPortatil, title: "Rayos X Portátil", description: "Equipo móvil compacto ideal para estudios a pie de cama en áreas de hospitalización." },
  { image: ultrasonido, title: "Ultrasonido Diagnóstico", description: "Sistema de ultrasonido con tecnología avanzada para múltiples aplicaciones clínicas." },
  { image: arcoC, title: "Arco en C", description: "Fluoroscopio móvil para procedimientos quirúrgicos con imagen en tiempo real." },
  { image: mastografo, title: "Mastógrafo Digital", description: "Equipo de mamografía digital de alta definición para detección temprana de cáncer de mama." },
  { image: inyector, title: "Inyector de Contraste", description: "Sistema automatizado para administración precisa de medio de contraste en estudios de imagen." },
];

const ProductGallery = () => {
  const [products] = useState<Product[]>(defaultProducts);
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="equipos" className="py-24 lg:py-32 section-padding bg-imge-light">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Galería de equipos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Equipos disponibles en renta y venta
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Ofrecemos equipamiento médico de las mejores marcas con opciones de arrendamiento, venta y servicio técnico especializado.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ScrollReveal key={i} delay={60 * i}>
              <button
                onClick={() => setSelected(p)}
                className="group w-full text-left bg-card rounded-xl overflow-hidden shadow-md shadow-foreground/5 hover:shadow-xl transition-all duration-300 active:scale-[0.97]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.description}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-reveal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] bg-muted">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-contain p-6" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{selected.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{selected.description}</p>
              <a
                href={`https://api.whatsapp.com/send?phone=523326299972&text=Hola, me interesa información sobre: ${selected.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-all hover:brightness-110 active:scale-[0.97]"
              >
                Cotizar por WhatsApp
              </a>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;
