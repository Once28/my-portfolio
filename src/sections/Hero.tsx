import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateX = (e.clientY - centerY) / 20;
        const rotateY = (centerX - e.clientX) / 20;
        
        setMousePosition({ x: rotateY, y: rotateX });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in-up"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm text-text-secondary">Available for opportunities</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block animate-fade-in-up stagger-1">Data Scientist</span>
              <span className="block animate-fade-in-up stagger-2">
                <span className="text-gradient">& Machine Learning</span>
              </span>
              <span className="block animate-fade-in-up stagger-3">Engineer</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up stagger-4"
            >
              I transform complex data into actionable insights. Specializing in predictive modeling, 
              deep learning, and building intelligent systems that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up stagger-5"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                View My Projects
                <ArrowDown className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div 
              className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up stagger-6"
            >
              <a 
                href="https://linkedin.com/in/justin-zeng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-text-secondary hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Once28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-text-secondary hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:justinzeng007@gmail.com"
                className="p-3 glass rounded-full text-text-secondary hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div 
              ref={imageRef}
              className="relative animate-scale-in stagger-3"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[60px] scale-90" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-glow-lg">
                <img 
                  src="/profile.jpg" 
                  alt="Justin Zeng"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>

              {/* Floating Stats */}
              <div 
                className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-xl animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-xs text-text-secondary">AI Internship Exp.</div>
              </div>

              <div 
                className="absolute -top-4 -right-4 glass px-4 py-3 rounded-xl animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="text-2xl font-bold text-blue-400">25+</div>
                <div className="text-xs text-text-secondary">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 glass rounded-full text-text-secondary hover:text-blue-400 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
