import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import FacilitiesSection from './components/sections/FacilitiesSection';
import MenuSection from './components/sections/MenuSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import FadeInSection from './components/FadeInSection'; // import

export default function Home() {
  return (
    <>
      <FadeInSection>
        <div className="bg-background text-foreground">
          <Hero />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.05}>
        <div className="bg-background text-foreground">
          <AboutSection />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <div className="bg-background text-foreground">
          <FacilitiesSection />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.15}>
        <div className="bg-white text-foreground">
          <GallerySection />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="bg-background text-foreground">
          <MenuSection />
        </div>
      </FadeInSection>
      <FadeInSection delay={0.25}>
        <div className="bg-white text-foreground">
          <ContactSection />
        </div>
      </FadeInSection>
    </>
  );
}
