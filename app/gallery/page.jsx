'use client'
import React from 'react';
import projects from '../../data/projects';
import Tags from '../../components/Tags';

const Gallery = () => {
    return (
      <div className="container mx-auto py-8 px-8 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative block group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm text-white rounded-b-xl">
                <p className="font-bold text-lg mb-2">{project.title}</p>
                <Tags tags={project.tags} light={true} />
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;