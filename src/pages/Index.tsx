import { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import InternshipsSection from '@/components/sections/InternshipsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <InternshipsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
