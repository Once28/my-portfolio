import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Cloud, 
  BarChart3, 
  Cpu,
  GitBranch
} from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const stats = [
    { value: '3+', label: 'Industry Software & AI Internships' },
    { value: '25+', label: 'Hackathons & Projects Completed' },
    { value: '10+', label: 'ML Models Deployed' },
  ];

  const skills = [
    { 
      category: 'Programming', 
      items: ['Python', 'R', 'SQL', 'JavaScript', 'Java'],
      icon: Code2
    },
    { 
      category: 'ML/AI', 
      items: ['LangChain', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'LLMs'],
      icon: Brain
    },
    { 
      category: 'Data', 
      items: ['Pandas', 'NumPy', 'Hadoop', 'ETL Pipelines', 'Data Cleaning'],
      icon: Database
    },
    { 
      category: 'Cloud', 
      items: ['AWS', 'GCP', 'Azure', 'Firebase', 'Docker'],
      icon: Cloud
    },
    { 
      category: 'Visualization', 
      items: ['Tableau', 'PowerBI', 'D3.js', 'Matplotlib', 'Seaborn'],
      icon: BarChart3
    },
    { 
      category: 'Tools', 
      items: ['Git', 'Haystack', 'Postman'],
      icon: GitBranch
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm text-blue-400 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Turning Data Into <span className="text-gradient">Decisions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img 
                  src="/workplace.jpg" 
                  alt="Justin at work"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-blue-500/30 rounded-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-2xl" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`glass p-4 rounded-xl text-center card-hover transition-all duration-500`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Bio */}
            <div className="space-y-4 mb-10">
              <p className="text-text-secondary leading-relaxed">
                I'm a Seattle/New York-based software developer and data scientist with a passion for uncovering patterns and building intelligent systems. 
                With expertise in machine learning, statistical analysis, and data visualization, 
                I help organizations make data-driven decisions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My journey began with a fascination for how data can tell stories and predict outcomes. Currently, I'm pursuing a Master's in Data Science at Columbia University. 
                Previously, I graduated from the University of Washington with a background in software development and data science.
                I've worked with cutting-edge technologies like RAG, PyTorch, and cloud platforms 
                to solve complex problems across various industries. Outside of my professional pursuits, I'm an avid skier, traveler, and food enthusiast.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                Technical Skills
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skillGroup, groupIndex) => {
                  const Icon = skillGroup.icon;
                  return (
                    <div 
                      key={skillGroup.category}
                      className={`glass p-4 rounded-xl transition-all duration-500 hover:border-blue-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${500 + groupIndex * 100}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <h4 className="font-medium text-sm">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 text-xs bg-white/5 rounded-md text-text-secondary hover:bg-blue-500/20 hover:text-blue-400 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
