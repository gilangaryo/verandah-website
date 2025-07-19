import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import FacilitiesSection from './components/sections/FacilitiesSection';
import MenuSection from './components/sections/MenuSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <div className="bg-background text-foreground">
        <Hero />
      </div>
      <div className="bg-background text-foreground">
        <AboutSection />
      </div>
      <div className="bg-background text-foreground">
        <FacilitiesSection />
      </div>
      <div className="bg-white text-foreground">
        <GallerySection />
      </div>
      <div className="bg-background text-foreground">
        <MenuSection />
      </div>
      <div className="bg-white text-foreground">
        <ContactSection />
      </div>
    </>
  )
}