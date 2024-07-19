import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Project 1', image: '/project1.jpg', tags: ['Web Development', 'JavaScript'] },
  { id: 2, title: 'Project 2', image: '/project2.jpg', tags: ['Data Science', 'Python'] },
  { id: 3, title: 'Project 3', image: '/project3.jpg', tags: ['Machine Learning', 'Python'] },
  // Add more projects as needed
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-4 rounded">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>Tags: {project.tags.join(', ')}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 w-full flex justify-between px-5">
        <button onClick={prevSlide} className="text-white text-2xl">◀</button>
        <button onClick={nextSlide} className="text-white text-2xl">▶</button>
      </div>
    </div>
  );
};

export default Carousel;
