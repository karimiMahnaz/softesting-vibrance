
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { Code, Lightbulb, Flask, GitPullRequest } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-panel p-6 card-hover transition-all duration-500 delay-${index * 100} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-softesting-accent/10 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <Lightbulb size={24} className="text-softesting-accent" />,
    title: "Software Design",
    description: "User-centered designs with intuitive interfaces, focusing on exceptional user experiences that drive engagement and satisfaction."
  },
  {
    icon: <Code size={24} className="text-softesting-accent" />,
    title: "Software Development",
    description: "Cutting-edge development using modern frameworks and technologies, creating scalable and maintainable solutions."
  },
  {
    icon: <Flask size={24} className="text-softesting-accent" />,
    title: "Quality Assurance",
    description: "Comprehensive testing strategies that ensure software reliability, performance, and security across all platforms."
  },
  {
    icon: <GitPullRequest size={24} className="text-softesting-accent" />,
    title: "Continuous Integration",
    description: "Streamlined delivery pipelines that enable rapid, reliable deployments and seamless updates to your software."
  }
];

const Services = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  
  return (
    <section id="services" className="section-container">
      <div 
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 transform ${
          isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="heading-lg mb-4">Our Comprehensive Services</h2>
        <p className="body-md">
          From concept to deployment, we provide end-to-end software solutions 
          that address complex business challenges with elegant, efficient technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Button 
          variant="outline" 
          onClick={() => window.location.href = '#contact'}
        >
          Discuss Your Project
        </Button>
      </div>
    </section>
  );
};

export default Services;
