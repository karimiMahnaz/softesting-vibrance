
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({ quote, author, position, company, rating, index }: TestimonialCardProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-panel p-6 card-hover transition-all duration-700 delay-${index * 150} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-softesting-accent fill-softesting-accent" : "text-white/20"} 
          />
        ))}
      </div>
      <p className="text-white/80 italic mb-6">{quote}</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-white/60">{position}, {company}</p>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "SofTesting transformed our business with their AI-driven solutions. Their team delivered a sophisticated platform that exceeded our expectations and significantly improved our operational efficiency.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechForward Inc.",
    rating: 5
  },
  {
    quote: "Working with SofTesting was a game-changer for our startup. Their approach to software development is methodical, innovative, and focused on delivering real business value.",
    author: "Michael Chen",
    position: "Founder",
    company: "InnovateAI",
    rating: 5
  },
  {
    quote: "The quality assurance process at SofTesting is remarkable. They identified critical issues that would have impacted our launch and provided solutions that strengthened our product.",
    author: "Emily Rodriguez",
    position: "Product Manager",
    company: "DataStream",
    rating: 4
  },
  {
    quote: "SofTesting's expertise in AI integration helped us create a cutting-edge application that has become central to our business strategy. Their team is professional, responsive, and truly talented.",
    author: "David Williams",
    position: "Director of Technology",
    company: "Nexus Innovations",
    rating: 5
  }
];

const Testimonials = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  
  return (
    <section id="testimonials" className="section-container bg-softesting-dark">
      <div 
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 transform ${
          isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="heading-lg mb-4">What Our Clients Say</h2>
        <p className="body-md">
          We take pride in delivering exceptional results that exceed expectations.
          Here's what some of our clients have to say about working with us.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
            rating={testimonial.rating}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
