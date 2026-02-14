import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Recommendation {
  id: number;
  title: string;
  text: string;
  author: string;
  company: string;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: 'Team Player',
    text: 'Justin is a team player who believes over-communication is better than less communication. He plays to his strengths and is an asset to his future teams.',
    author: 'Probudhho Chakraborty',
    company: 'AWS'
  },
  {
    id: 2,
    title: 'Persistence & Growth',
    text: 'I got to know Justin as a mentee during the Google Computer Science Research Mentorship Program and his persistence, ability to implement solutions to ambiguous tasks and openness to feedback impressed me. During the program, he went the extra mile to navigate his way into the research community, implementing several creative ideas and consistently incorporating feedback along the way.',
    author: 'Bhav Ashok',
    company: 'Google'
  },
  {
    id: 3,
    title: 'Technical Excellence',
    text: "Justin's ability to translate complex data into actionable insights is remarkable. His machine learning models consistently exceeded our performance expectations. He has a unique combination of technical depth and communication skills.",
    author: 'Paul Garcia',
    company: 'Columbia University Irving Medical Center'
  },
];

const Recommendations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + recommendations.length) % recommendations.length);
    
    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(-50%) translateZ(0) rotateY(0deg)',
        opacity: 1,
        zIndex: 10,
      };
    } else if (normalizedDiff === 1 || normalizedDiff === -recommendations.length + 1) {
      return {
        transform: 'translateX(20%) translateZ(-200px) rotateY(-25deg)',
        opacity: 0.5,
        zIndex: 5,
      };
    } else if (normalizedDiff === recommendations.length - 1 || normalizedDiff === -1) {
      return {
        transform: 'translateX(-120%) translateZ(-200px) rotateY(25deg)',
        opacity: 0.5,
        zIndex: 5,
      };
    }
    return {
      transform: 'translateX(-50%) translateZ(-400px)',
      opacity: 0,
      zIndex: 0,
    };
  };

  return (
    <section 
      id="recommendations" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm text-blue-400 mb-4">
            Recommendations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Carousel Container */}
        <div 
          className={`relative h-[400px] perspective-[1200px] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Cards */}
          <div className="relative h-full flex items-center justify-center">
            {recommendations.map((rec, index) => (
              <div
                key={rec.id}
                className="absolute w-full max-w-2xl transition-all duration-500 ease-expo-out"
                style={getCardStyle(index)}
              >
                <div className="glass rounded-2xl p-8 md:p-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-blue-500/50" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                    "{rec.title}"
                  </h3>

                  {/* Quote Text */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {rec.text}
                  </p>

                  {/* Author */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="font-semibold text-white">{rec.author}</p>
                    <p className="text-sm text-text-secondary">{rec.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 glass rounded-full text-white hover:text-blue-400 hover:border-blue-500/50 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 glass rounded-full text-white hover:text-blue-400 hover:border-blue-500/50 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-8 bg-blue-500' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
