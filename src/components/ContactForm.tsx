
import React, { useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import Button from './Button';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const ContactCard = ({ icon, title, text }: ContactCardProps) => (
  <div className="glass-panel p-5 flex items-start gap-4">
    <div className="bg-softesting-accent/10 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </div>
  </div>
);

const contactInfo = [
  {
    icon: <MapPin size={20} className="text-softesting-accent" />,
    title: "Office Location",
    text: "Winnipeg, Manitoba, Canada"
  },
  {
    icon: <Mail size={20} className="text-softesting-accent" />,
    title: "Email Address",
    text: "contact@softesting.ca"
  },
  {
    icon: <Phone size={20} className="text-softesting-accent" />,
    title: "Phone Number",
    text: "+1 (204) 555-1234"
  }
];

const ContactForm = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [formRef, isFormVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div 
        ref={titleRef as React.RefObject<HTMLDivElement>}
        className={`mb-16 text-center max-w-3xl mx-auto transition-all duration-700 transform ${
          isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="heading-lg mb-4">Get in Touch</h2>
        <p className="body-md">
          Ready to bring your software vision to life? Contact us today for a 
          consultation with our expert team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div 
          ref={formRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 transform ${
            isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-softesting-accent to-softesting-accent-light"></div>
            
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-softesting-muted/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-softesting-accent focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-softesting-muted/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-softesting-accent focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-softesting-muted/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-softesting-accent focus:border-transparent"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Software Development">Software Development</option>
                  <option value="AI Integration">AI Integration</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-softesting-muted/50 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-softesting-accent focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button 
                type="submit"
                icon={submitted ? <CheckCircle size={18} /> : <Send size={18} />}
                className="w-full"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="space-y-6 mb-8">
            {contactInfo.map((item, index) => (
              <ContactCard 
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
          
          <div className="mt-8 glass-panel rounded-lg overflow-hidden aspect-video">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.3960626025075!2d-97.144782!3d49.8954541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf91a2213%3A0x2b2a1afac6b9ca64!2sWinnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sus!4v1690360010000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SofTesting office location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
