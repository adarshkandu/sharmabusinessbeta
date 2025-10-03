import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'mission', 'brands', 'contact'];
      const scrollPosition = window.scrollY + 100;

      setNavbarBg(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 80;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset; 
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`transition-all duration-500 min-h-screen ${isDark ? 'bg-gray-900 dark' : 'bg-white'}`}>
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        isMenuOpen={isMenuOpen}
        navbarBg={navbarBg}
        toggleTheme={toggleTheme}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} isDark={isDark} />
      <About isDark={isDark} />
      <Vision isDark={isDark} />
      <Mission isDark={isDark} />
      <Brands isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer scrollToSection={scrollToSection} isDark={isDark} />

      <ScrollToTop
        scrollToTop={scrollToTop}
        showScrollTop={showScrollTop}
        isDark={isDark}
      />
    </div>
  );
}

export default App;
