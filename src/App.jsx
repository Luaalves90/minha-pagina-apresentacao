import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      Object.entries(sections).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        sections={sections}
      />
      
      <main>
        {/* Hero Section - AGORA USA O COMPONENTE */}
        <section ref={sections.home} id="home">
          <Hero scrollToSection={scrollToSection} sections={sections} />
        </section>
        
        {/* About Section */}
        <section ref={sections.about} id="about">
  <About />
</section>
        
        {/* Projects Section */}
       <section ref={sections.projects} id="projects">
  <Projects />
</section>
        
        {/* Skills Section */}
        <section ref={sections.skills} id="skills">
  <Skills />
</section>
        
        {/* Contact Section */}
        <section ref={sections.contact} id="contact">
  <Contact />
</section>

      <WhatsAppButton />
      </main>
    </div>
  );
}

export default App;