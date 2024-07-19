import React from 'react';
import projects from '../data/projects';

const Highlights = () => {
  const lastProjects = projects.slice(-5);

  return (
    <div id="projects-section" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Selected Works</h2>
      <p className="text-lg text-gray-600 mb-8">
        Throughout my career, I've worked on a variety of projects. Here are some that have shaped my path in software development and data science.
      </p>
      {lastProjects.map((project, index) => (
        <div key={project.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} mb-8`}>
          <div className="md:w-1/2">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center p-4">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">
              {project.description}
            </p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
