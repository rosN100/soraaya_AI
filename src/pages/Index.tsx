
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import AudioSample from "@/components/AudioPlayer";
import ServiceCard from "@/components/ServiceCard";
import CalendarEmbed from "@/components/CalendarEmbed";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import '@/styles/button.css';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // When component mounts, add a slight delay before adding fade-in class
    const sections = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Stars background */}
      <div className="stars" />
      
      {/* Spotlight effects */}
      <div className="spotlight" />
      <div className="spotlight-2" />
      
      {/* Header */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="mt-[100px] relative z-10">
      <section className="pt-20 lg:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-soraaya-white">
            AI Employees That Never Sleep, <br className="hidden md:block" />
            <span className="text-soraaya-indigo">At a Fraction of the Cost</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-soraaya-white/80 max-w-3xl mx-auto">
            Soraaya AI voice agents provide 24/7 coverage for sales, scheduling, and support—at 30% the cost of human staff.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="text-lg py-6 px-8 bg-soraaya-indigo hover:bg-soraaya-indigo/90 text-white button-lift"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                const navbarHeight = 100;
                if (contactSection) {
                  const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Book a Demo
            </Button>
            <Button 
              variant="outline" 
              className="text-lg py-6 px-8 text-soraaya-white border-soraaya-white/20 bg-white/5 hover:bg-white/10 button-lift button-outline"
              size="lg"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                const navbarHeight = 100;
                if (servicesSection) {
                  const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Audio Samples */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="demo">
        <div className="max-w-7xl mx-auto opacity-0 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-soraaya-white">Hear Our AI Agents in Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AudioSample 
              title="Property Lead Generation" 
              subtitle="Persuasive & Engaging"
              src="/assets/agent1.wav" 
              language="English"
              agentName="Amrithanshu"
            />
            <AudioSample 
              title="Property Qualification" 
              subtitle="Professional & Consultative"
              src="/assets/agent2.wav" 
              language="English"
              agentName="Amrithanshu"
            />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="services">
        <div className="max-w-7xl mx-auto opacity-0 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Services</h2>
          <p className="text-lg text-soraaya-white/70 text-center max-w-3xl mx-auto mb-12">
            Automate your repetitive tasks with our versatile AI voice agents
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Sales Outreach Agent" 
              description="Automate cold calling and follow-ups with natural-sounding AI that handles objections and qualifies leads." 
              imageSrc="/assets/service1.png"
            />
            <ServiceCard 
              title="Appointment Scheduling Agent" 
              description="Let AI handle your booking process, send reminders, and manage rescheduling requests with ease." 
              imageSrc="/assets/service2.png"
            />
            <ServiceCard 
              title="Customer Support Agent" 
              description="Provide 24/7 support with AI that can answer questions, troubleshoot issues, and escalate when needed." 
              imageSrc="/assets/service3.png"
            />
          </div>
        </div>
      </section>
      
      {/* CTA / Calendar Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative" id="contact">
        <div className="max-w-5xl mx-auto opacity-0 animate-on-scroll">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-soraaya-white/70 max-w-3xl mx-auto">
              Book a 30-minute demo call to see how Soraaya AI can transform your business operations.
            </p>
          </div>
          
          <CalendarEmbed />
        </div>
      </section>
      
      {/* Footer */}
      </main>
      <Footer />
      
    </div>
  );
};

export default Index;
