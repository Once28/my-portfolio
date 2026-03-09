import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  link: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Dawg Network', 
    image: '/logo.png', 
    tags: ['Backend Development', 'JavaScript', 'Real-time Communication', 'Web App'], 
    description: 'A real-time networking chat app aimed to solve the challenge of coordinating coffee chats between students and professionals. Implemented using Node.js and WebSockets for seamless real-time communication.', 
    link: 'https://github.com/Once28/INFO441-Final-Project'
  },
  { 
    id: 2, 
    title: 'Pantry Pals', 
    image: '/pantry pals.png', 
    tags: ['Data Science', 'Python', 'Mobile App', 'Food Waste Reduction'], 
    description: 'A mobile app designed to help users track their pantry inventory and reduce food waste through intelligent suggestions. Utilized Python for backend processing and machine learning algorithms for predictive analytics.', 
    link: 'https://github.com/Dhruv-Karia/PantryPals'
  },
  { 
    id: 3, 
    title: 'Source', 
    image: '/source.jpg', 
    tags: ['Software Architecture', 'JavaScript', 'Code Optimization', 'Web Development'], 
    description: 'A streamlined and optimized version of Source designed to reduce complexity and enhance maintainability. Refactored the codebase to improve performance and scalability.', 
    link: 'https://github.com/Info-443-Spring-2023/project-1-Once28'
  },
  { 
    id: 4, 
    title: 'Stocklytics', 
    image: '/stocklytics.png', 
    tags: ['Machine Learning', 'Python', 'Stock Market', 'Social Media Analysis'], 
    description: 'Inspired by the stock market mania with GameStop, this site predicts stock prices based on how often a stock is being mentioned on Reddit and Twitter. Implemented using Python and various NLP techniques to analyze social media trends.', 
    link: 'https://github.com/Once28/Stocklytics'
  },
  { 
    id: 5, 
    title: 'Travel Database', 
    image: '/430 final.png', 
    tags: ['Data Analyst', 'Database Management', 'SQL', 'Travel Industry'], 
    description: 'A SQL database tailored for travel agencies and travelers, featuring over 1 million rows of data and 50+ stored procedures and business rules. Designed to streamline travel data management and enhance user experience.', 
    link: 'https://github.com/Once28/INFO430-SQL-Database'
  },
  { 
    id: 6, 
    title: 'Full Stack Dev', 
    image: '/take less waste less figma.png', 
    tags: ['Full Stack Development', 'Product Management', 'Product Design', 'UX Research'], 
    description: 'A product design aimed to reduce food waste in local school districts through a gamified reward system. Take Less Waste Less brought to life through React and Firebase resulting in a highly functional and dynamic web application that offers a smooth user experience.', 
    link: 'https://take-less-waste-less.web.app/Home'
  },
  { 
    id: 7, 
    title: 'Image Recognition Neural Network', 
    image: '/cse416 hw8.png', 
    tags: ['PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision'], 
    description: 'Developed and fine-tuned a deep learning model using PyTorch and TensorFlow to achieve high accuracy in recognizing colored 32x32 images. This project involved extensive experimentation with different neural network architectures to optimize performance and demonstrated proficiency in advanced computer vision techniques.', 
    link: 'https://github.com/Once28/CSE416-HW8-Deep-Learning-with-Pytorch'
  },
  { 
    id: 8, 
    title: 'Reversi AI Agent', 
    image: '/reversi ai.png', 
    tags: ['Java', 'AI', 'Game Development', 'Algorithm Optimization'], 
    description: 'Spearheaded the development of an advanced Reversi AI agent in Java, incorporating Alpha-Beta pruning and a strategic evaluation function. Achieved a 95% win rate against standard Minimax-based agents through advanced optimization techniques.', 
    link: 'https://github.com/Once28/Reversi-AI-Agent'
  },
  { 
    id: 9, 
    title: 'MY PORTFOLIO', 
    image: '/reflection pic.jpg', 
    tags: ['JavaScript', 'React', 'Next.js', 'Web Development'], 
    description: 'This website you are looking at! A showcase of my work, projects, and skills, built with React and Next.js for dynamic user experience.', 
    link: 'https://github.com/Once28/my-portfolio'
  },
  { 
    id: 10, 
    title: 'Mars Rover AI', 
    image: '/mars rover.png', 
    tags: ['Java', 'AI', 'Pathfinding', 'Graph Algorithms'], 
    description: 'Designed and implemented a robust graph-based search algorithm in Java to facilitate efficient pathfinding for a Mars rover navigating through diverse and challenging terrains. The project utilized various search algorithms including Breadth-First Search (BFS), Uniform Cost Search (UCS), and A* search to determine the optimal path from a starting point to a designated goal.', 
    link: 'https://github.com/Once28/Mars-Rover-AI'
  },
  { 
    id: 11, 
    title: 'Stock Prediction with Deep Learning Sequential Models', 
    image: '/csci567 encoder transformer.png', 
    tags: ['Machine Learning', 'Python', 'Keras', 'Stock Market', 'Time Series Analysis'], 
    description: 'This project assesses the effectiveness of various machine learning models -- linear, RNN, LSTM, and transformers (both encoder-only and decoder-only architectures) -- in forecasting stock prices. Leveraging historical stock data from Yahoo Finance, we focus on VOO, an S&P 500 Index ETF, to evaluate and compare model performance. Our experiment explores the strengths and limitations of each model in processing and contextualizing sequential data. Additionally, we offer actionable insights and discuss potential reasons behind our findings.', 
    link: 'https://github.com/FantuzziMatteo97/567_project'
  },
  { 
    id: 12, 
    title: 'Multi-Layer Perceptron for New York Housing Market Classification', 
    image: '/NY Housing MLP.png', 
    tags: ['Java', 'AI', 'Neural Networks', 'Data Science'], 
    description: 'Implemented a multi-layer perceptron (MLP) from scratch to predict the number of bedrooms in a property based on various features such as broker title, property type, price, and more. Extensive hyperparameter tuning and performance evaluation were conducted to achieve high classification accuracy.', 
    link: 'https://github.com/Once28/NY-Housing-MLP'
  },
  { 
    id: 13, 
    title: 'DeepRate:Interest Rate Predictor', 
    image: '/interest rate prediction.png', 
    tags: ['Python', 'Machine Learning', 'Business Intelligence'], 
    description: 'A recomendation platform designed to optimize investment strategies based on models and input data for data analyst. Enhanced predictive power through feature engineering and hyperparameter tuning. Achieved high accuracy in forecasts with cross-validation. Visualized predictions and trends using matplotlib and seaborn. Documented the workflow for reproducibility and transparency.', 
    link: 'https://github.com/Once28/DeepRate'
  },
  { 
    id: 14, 
    title: 'VGG16 LoRA Brain Tumor Classifier', 
    image: '/VGG16_brain_tumours.jpg', 
    tags: ['Research', 'Computer Vision', 'Convolutional Neural Networks', 'Medical Analysis'], 
    description: 'This research project explores the implementation of VGG16 neural network architecture enhanced with Low-Rank Adaptation (LoRA) for accurate brain tumor classification from MRI images. Check out our research paper to learn more about how we integrated LoRA\'s parameter-efficient fine-tuning approach with VGG16 to advance automated medical image analysis.', 
    link: 'https://github.com/Once28/VGG16-LoRA-Brain-Tumor-Classifier/tree/main'
  },
  { 
    id: 15, 
    title: 'Personal Identification Based on Iris Texture Analysis Implementation', 
    image: '/cv-iris-detection.png', 
    tags: ['Research', 'Computer Vision', 'Convolutional Neural Networks'], 
    description: 'The system processes each iris image through sequential modules that replicate the stages described in the paper Personal Identification Based on Iris Texture Analysis (Ma et al., 2003).', 
    link: 'https://github.com/amayakejriwal/cv-iris-detection'
  },
  { 
    id: 16, 
    title: 'CNN classifier for Street View House Numbers (SVHN)', 
    image: '/Conv-Layer-3-Feature-Maps.png', 
    tags: ['Computer Vision', 'Convolutional Neural Networks'], 
    description: 'The goal of this project is to implement a Convolutional Neural Network (CNN) to classify digits (0–9) from the Street View House Numbers (SVHN) dataset. SVHN incorporates an order of magnitude more labeled data (over 600,000 digit images) than MNIST and comes from a significantly harder, unsolved, real world problem (recognizing digits and numbers in natural scene images) obtained from Google Street View images. The model is implemented using PyTorch and trained on the Format 2 (Cropped Digits) dataset (train_32x32.mat, test_32x32.mat). The final model achieves a test accuracy of >91%.',
    link: 'https://github.com/Once28/CNN-classifier-for-Street-View-House-Numbers-SVHN'
  },
  { 
    id: 17, 
    title: 'Detecting Financial Fraud via NLP in Transactions and Loan Applications', 
    image: '/detecting-financial-fraud-using-nlp.png', 
    tags: ['NLP', 'Machine Learning', 'Business Intelligence'], 
    description: 'We explored several NLP methods to capture different dimensions of fraudulent messages. Our models include a TF-IDF + Logistic Regression for fraud and fraud-type classification, a BERT-embedding + XGBoost pipeline for deeper contextual modeling, DistilBERT sentiment features with a Random Forest to analyze emotional tone, and Named Entity Recognition to extract key semantic cues. Since the dataset was highly imbalanced, we also applied SMOTE on the training set to address class imbalance and improve minority-class learning. Together, these approaches provide complementary insights that power our dashboard’s fraud-pattern analytics.', 
    link: 'https://github.com/pranavbidve/Detecting-Financial-Fraud-via-NLP-in-Transactions-and-Loan-Applications'
  },
  { 
    id: 18, 
    title: 'CLinical Audit & Regulatory Assistant 🩺💜', 
    image: '/clara.png', 
    tags: ['Agentic AI', 'Machine Learning', 'Healthcare'], 
    description: 'CLARA (CLinical Audit & Regulation Assistant) 🩺💜 is an agentic platform to automate the regulatory cross-examination of clinical trial protocols, ensuring alignment with federal regulations and global ethical standards. Beyond the acronym, the name - “Clara” - comes from the Latin clarus, meaning clear or bright. This reinforces what we stand for: clarity in complex decisions, trust in high-stakes clinical environments, and a human presence within AI that feels supportive rather than technical. In healthcare, intelligence must be clear, reliable, and approachable — and CLARA embodies all three.', 
    link: 'https://www.kaggle.com/competitions/med-gemma-impact-challenge/writeups/new-writeup-1771403728540'
  },
];


const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

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

  // Reverse projects to show most recent first
  const reversedProjects = [...projects].reverse();
  
  const currentProjects = reversedProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm text-blue-400 mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projects That Make an <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of my recent work in machine learning, data analysis, and intelligent systems.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass rounded-2xl overflow-hidden card-hover transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-white/5 text-text-secondary rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              className="p-2 glass rounded-full text-text-secondary hover:text-white hover:border-blue-500/50 transition-all"
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index 
                      ? 'w-8 bg-blue-500' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 glass rounded-full text-text-secondary hover:text-white hover:border-blue-500/50 transition-all"
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
