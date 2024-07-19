const projects = [
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
    tags: ['Full Stack Development', 'Product Management', 'Product Design', 'UX Research', 'Web App'], 
    description: 'A product design aimed to reduce food waste in local school districts through a gamified reward system. Take Less Waste Less brought to life through React and Firebase resulting in a highly functional and dynamic web application that offers a smooth user experience.', 
    link: 'https://take-less-waste-less.web.app/Home'
  },
  { 
    id: 7, 
    title: 'Image Recognition Neural Network', 
    image: '/cse416 hw8.png', 
    tags: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision'], 
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
    link: 'https://justin-zeng.vercel.app/'
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
    title: 'Interest Rate Predictor', 
    image: '/interest rate prediction.png', 
    tags: ['Python', 'Machine Learning', 'Data Cleaning'], 
    description: 'Built a predictive model for interest rates using Linear Regression, Random Forest, and XGBoost. Enhanced predictive power through feature engineering and hyperparameter tuning. Achieved high accuracy in forecasts with cross-validation. Visualized predictions and trends using matplotlib and seaborn. Documented the workflow for reproducibility and transparency.', 
    link: 'https://github.com/Once28/InterestRatePredictors'
  }
];

export default projects;
