
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';

const Hero = () => {
  const [containerRef, isVisible] = useIntersectionObserver();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      
      glowRef.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background glow effect */}
      <div 
        ref={glowRef}
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(15, 15, 16, 0) 70%)',
          transform: 'translate(0, 0)',
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')] opacity-30"></div>
      
      <div 
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className="container mx-auto px-6 md:px-8 z-10 flex flex-col items-center text-center"
      >
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 glass-panel px-4 py-2">
            <span className="text-sm text-white/70">
              Software Design, Development & Testing in Manitoba, Canada
            </span>
          </div>
          
          <h1 className="heading-xl max-w-4xl mx-auto mb-6 leading-tight">
            Innovative Software Solutions <br /> Powered by <span className="accent-text animate-text-shimmer bg-[linear-gradient(to_right,theme(colors.softesting.accent),theme(colors.softesting.accent-light),theme(colors.softesting.accent),theme(colors.softesting.accent-light))] bg-[length:200%_auto]">AI Technology</span>
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto mb-10">
            SofTesting brings state-of-the-art AI tools to traditional development, 
            delivering cutting-edge solutions with proven methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              icon={<ArrowRight size={20} />}
              onClick={() => window.location.href = '#contact'}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '#services'}
            >
              Explore Services
            </Button>
          </div>
        </div>
        
        <div className={`mt-16 md:mt-20 max-w-5xl w-full transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-softesting-accent to-softesting-accent-light rounded-lg blur opacity-20 animate-pulse-slow"></div>
            <div className="glass-panel overflow-hidden rounded-lg relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Software development" 
                className="w-full h-auto object-cover rounded-lg transition-all duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
