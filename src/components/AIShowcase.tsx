
import React, { useRef } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import Button from './Button';
import { Brain, LineChart, Bot, Shield, ChevronRight } from 'lucide-react';

interface AIFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AIFeature = ({ icon, title, description, delay }: AIFeatureProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex gap-4 transition-all duration-700 delay-${delay} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-softesting-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <Brain size={20} className="text-softesting-accent" />,
    title: "Machine Learning Integration",
    description: "Incorporate predictive analytics and intelligent automation into your software ecosystem."
  },
  {
    icon: <LineChart size={20} className="text-softesting-accent" />,
    title: "AI-Powered Analytics",
    description: "Extract actionable insights from your data with advanced AI algorithms and visualizations."
  },
  {
    icon: <Bot size={20} className="text-softesting-accent" />,
    title: "Conversational Interfaces",
    description: "Create natural, engaging user experiences with chatbots and voice interfaces."
  },
  {
    icon: <Shield size={20} className="text-softesting-accent" />,
    title: "Intelligent Security",
    description: "Protect your applications with AI-driven threat detection and prevention systems."
  }
];

const AIShowcase = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [imageRef, isImageVisible] = useIntersectionObserver();
  
  return (
    <section id="ai-showcase" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-softesting-accent/5 to-transparent"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              ref={titleRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 transform ${
                isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="heading-lg mb-6">Integrating Next-Gen AI Tools Into Modern Software</h2>
              <p className="body-md mb-8">
                Our team specializes in harnessing cutting-edge AI capabilities to create 
                intelligent, responsive applications that adapt to user needs and business conditions.
              </p>
            </div>
            
            <div className="space-y-8 mb-8">
              {features.map((feature, index) => (
                <AIFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={(index + 1) * 100}
                />
              ))}
            </div>
            
            <Button 
              icon={<ChevronRight size={18} />}
              onClick={() => window.location.href = '#contact'}
            >
              Explore AI Solutions
            </Button>
          </div>
          
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 transform ${
              isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-softesting-accent to-softesting-accent-light rounded-lg blur opacity-20 animate-pulse-slow"></div>
              <div className="glass-panel overflow-hidden rounded-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="AI Integration" 
                  className="w-full h-auto object-cover rounded-lg transition-all duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Brain size={24} className="text-softesting-accent" />
                  <div>
                    <div className="text-sm font-medium">AI-Powered</div>
                    <div className="text-xs text-white/70">Next.js + Node.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
