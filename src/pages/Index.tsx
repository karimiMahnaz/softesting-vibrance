
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AIShowcase from '@/components/AIShowcase';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'SofTesting - Software Design, Development & Testing';
  }, []);

  return (
    <div className="min-h-screen bg-softesting-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIShowcase />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
