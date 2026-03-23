import logo from "@/assets/logo-imge.png";

const Footer = () => {
  return (
    <footer className="bg-imge-deep text-primary-foreground/70 py-12 section-padding">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="IMGE" className="h-10 w-auto brightness-0 invert opacity-80" />
        </div>
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Solución & Comercialización IMGE S. de R.L. de C.V. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="tel:+523312249254" className="hover:text-primary-foreground transition-colors">33 1224 9254</a>
          <a href="https://api.whatsapp.com/send?phone=523326299972" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
