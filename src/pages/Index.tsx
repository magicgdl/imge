import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import ProductGallery from "@/components/ProductGallery";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <ProductGallery />
      <Sectors />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
