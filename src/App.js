import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Airports from './components/Airports';
import Routes from './components/Routes';
import Sceneries from './components/Sceneries';
import Live from './components/Live';
import Notes from './components/Notes';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [currentSection, setCurrentSection] = useState(0);

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // References to section elements
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const scrollToSection = (sectionName) => {
    const sectionMap = {
      Routes: 2,
      Notes: 3,
      Sceneries: 4,
      Live: 5
    };
    const sectionIndex = sectionMap[sectionName];
    sectionRefs.current[sectionIndex]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setCurrentSection(index);
        }
      });
    }, { threshold: 0.5 });

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles currentSection={currentSection} />
        <ThemeToggle theme={theme} toggleTheme={themeToggler} />
        <Header />
        <div ref={addToRefs}>
          <About scrollToSection={scrollToSection} />
        </div>
        <div ref={addToRefs}>
          <Airports />
        </div>
        <div ref={addToRefs}>
          <Routes />
        </div>
        <div ref={addToRefs}>
          <Notes />
        </div>
        <div ref={addToRefs}>
          <Sceneries />
        </div>
        <div ref={addToRefs}>
          <Live />
        </div>
        <div ref={addToRefs}>
          <Contact />
        </div>
      </>
    </ThemeProvider>
  );
}


export default App;

/*

In case of LIVE



*/