
import { useEffect, useState, useRef } from 'react';

// Intersection Observer hook for animations
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
}

// Staggered animation for children
export function useStaggeredAnimation(total: number, baseDelay = 100) {
  return Array.from({ length: total }, (_, i) => ({
    className: `animate-fade-in animate-delay-${(i + 1) * baseDelay}`
  }));
}

// Parallax scroll effect
export function useParallaxEffect(speed = 0.2) {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const elementTop = (ref.current as HTMLElement).getBoundingClientRect().top + scrollY;
      const relativeScroll = scrollY - elementTop;
      setOffset(relativeScroll * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, { transform: `translateY(${offset}px)` }];
}

// Mouse follow effect
export function useMouseFollow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current as HTMLElement;
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const element = ref.current as HTMLElement;
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [ref, position];
}
