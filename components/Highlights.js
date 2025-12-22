'use client'
import React from 'react';
import projects from '../data/projects';
import Tags from './Tags';

const Highlights = () => {
  const lastProjects = projects.slice(-5);

  return (
    <div id="projects-section" className="container mx-auto py-20 px-6">
      <div className="text-center mb-16 smooth-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Selected Works</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Throughout my career, I've worked on a variety of projects. Here are some that have shaped my path in software development and data science.
        </p>
      </div>
      
      <div className="space-y-16">
        {lastProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col md:flex-row gap-8 items-center smooth-fade-in ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="md:w-1/2 w-full group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl card-hover">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full flex flex-col justify-center p-6">
              <div className="glass rounded-2xl p-8 card-hover">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <Tags tags={project.tags} />
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold group"
                >
                  <span>View Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;