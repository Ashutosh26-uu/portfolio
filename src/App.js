import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import InteractiveStats from './components/InteractiveStats';
import InteractiveTimeline from './components/InteractiveTimeline';
import Projects from './components/Projects';
import ProjectShowcase from './components/ProjectShowcase';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import MouseTracker from './components/MouseTracker';
import ThemeToggle from './components/ThemeToggle';
import FloatingElements from './components/FloatingElements';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
import ExplosiveIntro from './components/ExplosiveIntro';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowIntro(true), 500);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    setIntroComplete(true);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (showIntro) {
    return <ExplosiveIntro onComplete={handleIntroComplete} />;
  }

  return (
    <PageTransition>
      <div className="App bhaukali-mode">
        <ParticleBackground />
        <MouseTracker />
        <FloatingElements />
        <ScrollProgress />
        <ThemeToggle />
        <Navbar />
        <Hero />
        <About />
        <SkillsSection />
        <ProjectShowcase />
        <InteractiveStats />
        <InteractiveTimeline />
        <Projects />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  );
}

export default App;